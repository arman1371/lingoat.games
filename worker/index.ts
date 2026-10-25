/**
 * Entry point of the Cloudflare Worker (wrangler.jsonc). Static files are served by the assets binding;
 * only `/img/*` (run_worker_first) comes through here and is answered from the R2 bucket `lingoat-images`,
 * which `npm run images:upload` fills. Photos never change under their name, so they are cached for a year
 * in the browser and in Cloudflare's cache: the bucket is read once per photo and data centre.
 */

/** The slice of the Workers runtime types that this file uses (keeps the repo free of a types package). */
export interface R2ObjectLike {
  body: ReadableStream;
  httpEtag: string;
}
export interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  IMAGES?: { get(key: string): Promise<R2ObjectLike | null> };
}
export interface CacheLike {
  match(request: Request): Promise<Response | undefined>;
  put(request: Request, response: Response): Promise<void>;
}

const IMAGE_PATH = /^\/img\/([a-z0-9-]+\.webp)$/;
const ONE_YEAR = 60 * 60 * 24 * 365;

export async function serveImage(
  request: Request,
  env: Env,
  cache: CacheLike,
  waitUntil: (work: Promise<unknown>) => void,
): Promise<Response> {
  const key = IMAGE_PATH.exec(new URL(request.url).pathname)?.[1];
  if (!key) return new Response('Not found', { status: 404 });
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response(null, { status: 405, headers: { Allow: 'GET, HEAD' } });
  }

  const cacheKey = new Request(request.url); // one entry per photo, whatever the method or headers
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  // a missing binding or a failing bucket must not turn into a 500: the word just keeps its emoji
  const object = await env.IMAGES?.get(key).catch(() => null);
  // a missing photo is normal (the word keeps its emoji): let the cache absorb repeat requests briefly
  if (!object) {
    return new Response('Not found', {
      status: 404,
      headers: { 'Cache-Control': 'public, max-age=300' },
    });
  }
  const response = new Response(object.body, {
    headers: {
      'Content-Type': 'image/webp',
      'Cache-Control': `public, max-age=${ONE_YEAR}, immutable`,
      'X-Content-Type-Options': 'nosniff',
      ETag: object.httpEtag,
    },
  });
  waitUntil(cache.put(cacheKey, response.clone()));
  return response;
}

export default {
  fetch(request: Request, env: Env, ctx: { waitUntil(work: Promise<unknown>): void }) {
    const { pathname } = new URL(request.url);
    if (!pathname.startsWith('/img/')) return env.ASSETS.fetch(request);
    const cache = (caches as unknown as { default: CacheLike }).default;
    return serveImage(request, env, cache, (work) => ctx.waitUntil(work));
  },
};
