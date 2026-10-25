/**
 * Serves `/img/<id>.webp` from the R2 bucket (binding `IMAGES`). Everything else is answered by the static assets
 * without running the Worker (`run_worker_first: ["/img/*"]` in wrangler.jsonc). See docs/images.md.
 *
 * Only the few Cloudflare types it needs are declared here, so the app does not depend on workers-types.
 */

export interface R2ObjectLike {
  httpEtag: string;
  size: number;
  body?: ReadableStream;
  writeHttpMetadata(headers: Headers): void;
}

export interface R2BucketLike {
  get(key: string, options?: { onlyIf?: Headers }): Promise<R2ObjectLike | null>;
}

export interface EdgeCache {
  match(request: Request): Promise<Response | undefined>;
  put(request: Request, response: Response): Promise<void>;
}

/** `/img/<id>.webp`, ids are lowercase letters, digits and hyphens (same rule as the upload script). */
const PHOTO_PATH = /^\/img\/([a-z0-9][a-z0-9-]*\.webp)$/;

const IMMUTABLE = 'public, max-age=31536000, immutable';
/** A photo that is not uploaded yet may be there in minutes, so a miss is only remembered briefly. */
const MISSING = 'public, max-age=300';

const notFound = (): Response =>
  new Response('Not found', { status: 404, headers: { 'Cache-Control': MISSING } });

export async function serveImage(
  request: Request,
  bucket: R2BucketLike,
  cache?: EdgeCache,
): Promise<Response> {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
  }
  const key = PHOTO_PATH.exec(new URL(request.url).pathname)?.[1];
  if (!key) return notFound();

  const cached = request.method === 'GET' ? await cache?.match(request) : undefined;
  if (cached) return cached;

  const object = await bucket.get(key, { onlyIf: request.headers });
  if (!object) return notFound();

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('ETag', object.httpEtag);
  headers.set('Content-Type', 'image/webp');
  headers.set('Cache-Control', IMMUTABLE);
  headers.set('X-Content-Type-Options', 'nosniff');

  // a conditional request whose precondition failed gets the object without a body: 304
  if (!object.body) return new Response(null, { status: 304, headers });
  const response = new Response(request.method === 'HEAD' ? null : object.body, { headers });
  if (request.method === 'GET') await cache?.put(request, response.clone());
  return response;
}
