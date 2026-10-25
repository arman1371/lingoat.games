/**
 * Uploads the word photos from `.image-cache/images/` (or `--dir`) to the Cloudflare R2 bucket.
 *
 *   npm run images:upload [-- --dir <folder>] [--bucket lingoat-images] [--concurrency 8] [--dry-run]
 *
 * Idempotent: it lists the bucket first and only uploads files whose key is missing, so it is safe to run again
 * after every `images:fetch`. Objects get `image/webp` and a one-year immutable cache header.
 * Needs R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY and CLOUDFLARE_ACCOUNT_ID (never printed, never written to disk).
 * The image files themselves are never committed; see docs/images.md.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { parseArgs } from 'node:util';
import { AwsClient } from 'aws4fetch';
import { bucketUrl, CACHE_CONTROL, CONTENT_TYPE, parseList, planUpload } from './r2';

const ROOT = new URL('../../', import.meta.url).pathname;

const { values: args } = parseArgs({
  options: {
    dir: { type: 'string', default: join(ROOT, '.image-cache/images') },
    bucket: { type: 'string', default: 'lingoat-images' },
    concurrency: { type: 'string', default: '8' },
    'dry-run': { type: 'boolean', default: false },
  },
});

const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
if (!accessKeyId || !secretAccessKey || !accountId) {
  console.error('R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY and CLOUDFLARE_ACCOUNT_ID must be set.');
  process.exit(1);
}

const client = new AwsClient({ accessKeyId, secretAccessKey, service: 's3', region: 'auto' });
const base = bucketUrl(accountId, args.bucket);

/** Retries network errors and 5xx/429 a few times; anything else is a real answer. */
async function send(url: string, init?: RequestInit): Promise<Response> {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await client.fetch(url, init);
      if ((res.status < 500 && res.status !== 429) || attempt === 4) return res;
    } catch (err) {
      if (attempt === 4) throw err;
    }
    await new Promise((r) => setTimeout(r, 500 * 2 ** attempt));
  }
}

async function listBucket(): Promise<Set<string>> {
  const keys = new Set<string>();
  let token: string | null = null;
  do {
    const query = new URLSearchParams({ 'list-type': '2', 'max-keys': '1000' });
    if (token) query.set('continuation-token', token);
    const res = await send(`${base}?${query}`);
    if (!res.ok)
      throw new Error(
        `Listing the bucket failed: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`,
      );
    const page = parseList(await res.text());
    page.keys.forEach((k) => keys.add(k));
    token = page.next;
  } while (token);
  return keys;
}

async function put(dir: string, name: string): Promise<void> {
  const body = await readFile(join(dir, name));
  const res = await send(`${base}/${name}`, {
    method: 'PUT',
    body,
    headers: { 'Content-Type': CONTENT_TYPE, 'Cache-Control': CACHE_CONTROL },
  });
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`);
}

const dir = resolve(args.dir);
const local = await readdir(dir).catch(() => {
  console.error(`No folder ${dir}. Run \`npm run images:fetch\` first or pass --dir.`);
  return process.exit(1);
});
const plan = planUpload(local, await listBucket());
console.log(
  `${plan.upload.length} to upload, ${plan.skip.length} already in ${args.bucket}` +
    (plan.ignored.length ? `, ${plan.ignored.length} ignored (not <id>.webp)` : ''),
);

if (!args['dry-run']) {
  const queue = [...plan.upload];
  let done = 0;
  const failed: string[] = [];
  const worker = async (): Promise<void> => {
    for (let name = queue.shift(); name; name = queue.shift()) {
      try {
        await put(dir, name);
      } catch (err) {
        failed.push(String(err instanceof Error ? err.message : err));
      }
      if (++done % 50 === 0) console.log(`  ${done}/${plan.upload.length}`);
    }
  };
  await Promise.all(Array.from({ length: Math.max(1, Number(args.concurrency)) }, worker));
  console.log(`Uploaded ${plan.upload.length - failed.length}, failed ${failed.length}.`);
  if (failed.length) {
    failed.slice(0, 10).forEach((f) => console.error(`  ${f}`));
    process.exit(1);
  }
}
