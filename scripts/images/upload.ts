/**
 * Uploads the word photos in `.image-cache/images/` to the R2 bucket `lingoat-images`, one object per file
 * (`<vocabulary id>.webp`), only the ones named in the manifest. Safe to rerun: objects that were uploaded
 * before (recorded in `.image-cache/uploaded.json` by name and size) are skipped.
 *
 *   R2_ACCESS_KEY_ID=… R2_SECRET_ACCESS_KEY=… CLOUDFLARE_ACCOUNT_ID=… npm run images:upload [-- --dir <folder>]
 *
 * The keys come from an R2 API token with "Object Read & Write" on this one bucket (R2 → Manage API tokens);
 * it can do nothing else in the account. Talks to R2's S3 API, signed with aws4fetch.
 */
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parseArgs } from 'node:util';
import { AwsClient } from 'aws4fetch';

const ROOT = new URL('../../', import.meta.url).pathname;
const BUCKET = 'lingoat-images';

const { values: args } = parseArgs({
  options: {
    dir: { type: 'string', default: join(ROOT, '.image-cache/images') },
    jobs: { type: 'string', default: '8' },
  },
});

const { R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, CLOUDFLARE_ACCOUNT_ID } = process.env;
if (!R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !CLOUDFLARE_ACCOUNT_ID) {
  console.error('Set R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY and CLOUDFLARE_ACCOUNT_ID.');
  process.exit(1);
}
const r2 = new AwsClient({
  accessKeyId: R2_ACCESS_KEY_ID,
  secretAccessKey: R2_SECRET_ACCESS_KEY,
  service: 's3',
  region: 'auto',
});
const endpoint = `https://${CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com/${BUCKET}`;

const readJson = async <T>(path: string, fallback: T): Promise<T> =>
  readFile(path, 'utf8').then(
    (t) => JSON.parse(t) as T,
    () => fallback,
  );

const manifest = await readJson<Record<string, unknown>>(
  join(ROOT, 'src/content/images/manifest.json'),
  {},
);
const stateFile = join(ROOT, '.image-cache/uploaded.json');
const uploaded = await readJson<Record<string, number>>(stateFile, {});

const todo: { name: string; path: string; size: number }[] = [];
for (const id of Object.keys(manifest)) {
  const name = `${id}.webp`;
  const path = join(args.dir, name);
  const size = await stat(path).then(
    (s) => s.size,
    () => -1,
  );
  if (size < 0) console.log(`missing file for ${id}`);
  else if (uploaded[name] !== size) todo.push({ name, path, size });
}
console.log(`${Object.keys(manifest).length} photos in the manifest, ${todo.length} to upload`);

let done = 0;
let failed = 0;
const upload = async ({ name, path, size }: (typeof todo)[number]) => {
  try {
    const res = await r2.fetch(`${endpoint}/${name}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'image/webp',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
      body: await readFile(path),
    });
    if (!res.ok) throw new Error(`R2 answered ${res.status}`);
    uploaded[name] = size;
  } catch (e) {
    failed++;
    console.log(`  ${name}: ${e instanceof Error ? e.message : String(e)}`);
  }
  if (++done % 100 === 0) {
    console.log(`  ${done}/${todo.length}`);
    await writeFile(stateFile, JSON.stringify(uploaded));
  }
};

const queue = [...todo];
await mkdir(join(ROOT, '.image-cache'), { recursive: true });
await Promise.all(
  Array.from({ length: Number(args.jobs) }, async () => {
    for (let item = queue.shift(); item; item = queue.shift()) await upload(item);
  }),
);
await writeFile(stateFile, JSON.stringify(uploaded));
console.log(`uploaded ${done - failed}, failed ${failed}`);
if (failed) process.exitCode = 1;
