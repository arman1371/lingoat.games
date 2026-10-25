/**
 * Downloads one Pixabay photo per concrete vocabulary noun, crops it square and stores it as a small WebP.
 *
 *   npm run images:fetch -- --level a1-1 [--unit a1-1-hallo] [--limit 50] [--dry-run] [--retry-misses]
 *
 * Deterministic and resumable: words already in the manifest or in `misses.json` are skipped, API answers are
 * cached on disk, and the manifest is saved every few words, so a stopped run continues where it left off.
 * Needs PIXABAY_API_KEY in the environment (never printed, never written to disk). See docs/images.md.
 */
import { createHash } from 'node:crypto';
import { mkdir, readFile, rename, stat, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseArgs } from 'node:util';
import sharp from 'sharp';
import { LEVELS } from '../../src/content/levels';
import type { Vocab } from '../../src/content/schema';
import type { ManifestEntry } from '../../src/content/images';
import {
  germanQuery,
  isCandidate,
  pickHit,
  type Pick,
  queryFor,
  sortManifest,
  toEntry,
  type Overrides,
  type PixabayHit,
} from './lib';

const ROOT = new URL('../../', import.meta.url).pathname;
const MANIFEST = join(ROOT, 'src/content/images/manifest.json');
const MISSES = join(ROOT, 'scripts/images/misses.json');
const OVERRIDES = join(ROOT, 'scripts/images/overrides.json');
const CACHE = join(ROOT, '.image-cache');
const SIZE = 400;
const SAVE_EVERY = 25;

const { values: args } = parseArgs({
  options: {
    level: { type: 'string' },
    unit: { type: 'string' },
    limit: { type: 'string' },
    rpm: { type: 'string', default: '85' },
    jobs: { type: 'string', default: '3' },
    'dry-run': { type: 'boolean', default: false },
    'retry-misses': { type: 'boolean', default: false },
  },
});

const key = process.env.PIXABAY_API_KEY;
if (!key && !args['dry-run']) {
  console.error('PIXABAY_API_KEY is not set.');
  process.exit(1);
}

const readJson = async <T>(path: string, fallback: T): Promise<T> => {
  try {
    return JSON.parse(await readFile(path, 'utf8')) as T;
  } catch {
    return fallback;
  }
};

/** Write through a temp file so an interrupted run never leaves half a JSON file behind. */
const writeJson = async (path: string, data: unknown, entryPerLine = false): Promise<void> => {
  await mkdir(dirname(path), { recursive: true });
  const tmp = `${path}.tmp`;
  // one line per manifest entry keeps the file diff-friendly and identical to what prettier writes
  const text = entryPerLine
    ? `{\n${Object.entries(data as object)
        .map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)}`)
        .join(',\n')}\n}`
    : JSON.stringify(data, null, 2);
  await writeFile(tmp, `${text}\n`);
  await rename(tmp, path);
};

const exists = (path: string): Promise<boolean> =>
  stat(path).then(
    () => true,
    () => false,
  );

// ---- Pixabay API (cached, rate limited) -------------------------------------------------------

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Hands out turns at least `gapMs` apart, also to concurrent callers. */
function limiter(gapMs: number): () => Promise<void> {
  let next = 0;
  return async () => {
    const turn = Math.max(next, Date.now());
    next = turn + gapMs;
    await sleep(turn - Date.now());
  };
}

// Pixabay allows 100 API requests per 60 s; we stay below `--rpm`. Downloads from the image CDN are
// spaced the same way, so a run never exceeds `--rpm` photos per minute either.
const apiTurn = limiter(Math.ceil(60_000 / Number(args.rpm)));
const downloadTurn = limiter(Math.ceil(60_000 / Number(args.rpm)));
let apiCalls = 0;
let apiCached = 0;

async function search(query: string, lang: 'en' | 'de'): Promise<PixabayHit[]> {
  return request(
    new URLSearchParams({
      q: query,
      lang,
      image_type: 'photo',
      safesearch: 'true',
      min_width: String(SIZE),
      min_height: String(SIZE),
      order: 'popular',
      per_page: '20',
    }),
  );
}

/** One specific photo (an `overrides.json` `photo` id), checked only by the safe-search filter. */
const byId = (id: number): Promise<PixabayHit[]> =>
  request(new URLSearchParams({ id: String(id), safesearch: 'true' }));

async function request(params: URLSearchParams): Promise<PixabayHit[]> {
  const file = join(
    CACHE,
    'api',
    `${createHash('sha1').update(params.toString()).digest('hex')}.json`,
  );
  const cached = await readJson<PixabayHit[] | null>(file, null);
  if (cached) {
    apiCached++;
    return cached;
  }
  for (let attempt = 0; ; attempt++) {
    await apiTurn();
    apiCalls++;
    const res = await fetch(`https://pixabay.com/api/?${params}&key=${key}`);
    if (res.status === 429 && attempt < 5) {
      const wait = Number(res.headers.get('x-ratelimit-reset') ?? 60) + 1;
      console.log(`  rate limited, waiting ${wait}s`);
      await sleep(wait * 1000);
      continue;
    }
    if (!res.ok)
      throw new Error(
        `Pixabay answered ${res.status} for "${params.get('q') ?? params.get('id')}"`,
      );
    const hits = ((await res.json()) as { hits: PixabayHit[] }).hits;
    await writeJson(file, hits);
    return hits;
  }
}

/** The image CDN throttles bursts too (HTTP 429): pause between downloads and back off on refusals. */
async function downloadWithRetry(hit: PixabayHit): Promise<Buffer> {
  for (let attempt = 1; ; attempt++) {
    await downloadTurn();
    const res = await fetch(hit.webformatURL);
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    if (attempt === 6 || (res.status !== 429 && res.status < 500)) {
      throw new Error(`Download of ${hit.id} answered ${res.status}`);
    }
    const wait = Number(res.headers.get('retry-after')) || 15 * attempt;
    console.log(`  download throttled (${res.status}), waiting ${wait}s`);
    await sleep(wait * 1000);
  }
}

/** The 640 px preview is plenty for a 400 px square; one download per photo, kept in the cache. */
async function download(hit: PixabayHit): Promise<Buffer> {
  const file = join(CACHE, 'src', `${hit.id}.jpg`);
  if (await exists(file)) return readFile(file);
  const buf = await downloadWithRetry(hit);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, buf);
  return buf;
}

const toSquareWebp = (src: Buffer): Promise<Buffer> =>
  sharp(src)
    .resize(SIZE, SIZE, { fit: 'cover', position: sharp.strategy.attention })
    .webp({ quality: 72 })
    .toBuffer();

// ---- run --------------------------------------------------------------------------------------

async function loadVocab(): Promise<Vocab[]> {
  const levels = LEVELS.filter((l) => l.load && (!args.level || l.id === args.level));
  const packs = await Promise.all(levels.map((l) => l.load!()));
  return packs
    .flatMap((p) => p.default.vocab)
    .filter((v) => !args.unit || v.id.startsWith(`${args.unit}-`));
}

async function main() {
  const manifest = await readJson<Record<string, ManifestEntry>>(MANIFEST, {});
  const misses = await readJson<Record<string, string>>(MISSES, {});
  const overrides = await readJson<Overrides>(OVERRIDES, {});
  const vocab = await loadVocab();

  const candidates = vocab.filter(isCandidate);
  const todo = candidates
    .filter((v) => !manifest[v.id] && (args['retry-misses'] || !misses[v.id]))
    .slice(0, args.limit ? Number(args.limit) : undefined);
  console.log(
    `${vocab.length} words, ${candidates.length} concrete nouns, ${Object.keys(manifest).length} done, ${todo.length} to fetch`,
  );
  if (args['dry-run']) {
    for (const v of todo.slice(0, 20))
      console.log(`  ${v.id}: "${queryFor(v, overrides) ?? '(skip)'}"`);
    return;
  }

  const started = Date.now();
  const stats: Record<string, number> = { ok: 0 };
  let bytes = 0;
  let sinceSave = 0;
  const save = async () => {
    await writeJson(MANIFEST, sortManifest(manifest), true);
    await writeJson(
      MISSES,
      Object.fromEntries(Object.entries(misses).sort(([a], [b]) => (a < b ? -1 : 1))),
    );
    sinceSave = 0;
  };

  /** English meaning first; a word that finds nothing there is searched again by its German name. */
  async function choose(v: Vocab, query: string): Promise<Pick> {
    const photo = overrides[v.id]?.photo;
    if (photo) {
      const [hit] = await byId(photo);
      if (!hit) throw new Error(`override photo ${photo} not found`);
      return { hit };
    }
    let picked = pickHit(await search(query, 'en'), query);
    const de = germanQuery(v);
    if ('reason' in picked && de && !overrides[v.id]?.query) {
      const second = pickHit(await search(de, 'de'), de);
      if ('hit' in second) picked = second;
    }
    return picked;
  }

  let done = 0;
  const handle = async (v: Vocab) => {
    const query = queryFor(v, overrides);
    const miss = (reason: string) => {
      misses[v.id] = reason;
      stats[reason] = (stats[reason] ?? 0) + 1;
    };
    try {
      if (!query) {
        miss('skipped');
      } else {
        const picked = await choose(v, query);
        if ('reason' in picked) {
          miss(picked.reason);
        } else {
          const webp = await toSquareWebp(await download(picked.hit));
          const out = join(CACHE, 'images', `${v.id}.webp`);
          await mkdir(dirname(out), { recursive: true });
          await writeFile(out, webp);
          manifest[v.id] = toEntry(picked.hit);
          delete misses[v.id];
          stats.ok = (stats.ok ?? 0) + 1;
          bytes += webp.length;
        }
      }
    } catch (e) {
      // not recorded as a miss: the next run tries this word again
      stats.error = (stats.error ?? 0) + 1;
      console.log(`  ${v.id}: ${e instanceof Error ? e.message : String(e)}`);
    }
    if (++sinceSave >= SAVE_EVERY) await save();
    if (++done % 50 === 0) console.log(`  ${done}/${todo.length}`);
  };

  // a few words in flight at once; the two limiters keep the request rate
  const queue = [...todo];
  await Promise.all(
    Array.from({ length: Number(args.jobs) }, async () => {
      for (let v = queue.shift(); v; v = queue.shift()) await handle(v);
    }),
  );
  await save();

  const seconds = Math.round((Date.now() - started) / 1000);
  console.log(JSON.stringify({ processed: todo.length, ...stats, apiCalls, apiCached, seconds }));
  if (stats.ok) console.log(`average image size ${Math.round(bytes / (stats.ok ?? 1) / 1024)} KiB`);
}

await main();
