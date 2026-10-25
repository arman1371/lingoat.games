/**
 * Pure helpers of the R2 upload (no network, no file system). Tested in `r2.test.ts`.
 * The CLI that uses them is `upload.ts`; the Worker that serves the objects is `worker/`.
 */

/** Photos are named by vocabulary id and never change in place (a new photo means a new upload after delete). */
export const OBJECT_NAME = /^[a-z0-9][a-z0-9-]*\.webp$/;

export const CONTENT_TYPE = 'image/webp';
/** One year, immutable: the Worker and browsers never ask again. */
export const CACHE_CONTROL = 'public, max-age=31536000, immutable';

/** Keys (`<Key>`) of one S3 `ListObjectsV2` answer, plus the continuation token when the list is cut. */
export function parseList(xml: string): { keys: string[]; next: string | null } {
  const keys = [...xml.matchAll(/<Key>([^<]+)<\/Key>/g)].map((m) => decodeXml(m[1]!));
  const truncated = /<IsTruncated>true<\/IsTruncated>/.test(xml);
  const next = /<NextContinuationToken>([^<]+)<\/NextContinuationToken>/.exec(xml)?.[1];
  return { keys, next: truncated && next ? decodeXml(next) : null };
}

const decodeXml = (s: string): string =>
  s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');

export interface UploadPlan {
  upload: string[];
  skip: string[];
  ignored: string[];
}

/** Which local files still have to go up: valid names only, nothing the bucket already has. */
export function planUpload(local: readonly string[], remote: Iterable<string>): UploadPlan {
  const have = new Set(remote);
  const plan: UploadPlan = { upload: [], skip: [], ignored: [] };
  for (const name of [...local].sort()) {
    if (!OBJECT_NAME.test(name)) plan.ignored.push(name);
    else if (have.has(name)) plan.skip.push(name);
    else plan.upload.push(name);
  }
  return plan;
}

/** S3 endpoint of a bucket in a Cloudflare account. */
export const bucketUrl = (accountId: string, bucket: string): string =>
  `https://${accountId}.r2.cloudflarestorage.com/${bucket}`;
