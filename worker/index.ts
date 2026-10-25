import { serveImage, type EdgeCache, type R2BucketLike } from './images';

interface Env {
  IMAGES: R2BucketLike;
}

export default {
  fetch: (request: Request, env: Env): Promise<Response> =>
    serveImage(
      request,
      env.IMAGES,
      (globalThis as { caches?: { default?: EdgeCache } }).caches?.default,
    ).catch((err: unknown) => {
      // a broken binding or an R2 outage must not become an error page: the word just keeps its emoji
      console.error('word photo failed', err);
      return new Response('Storage unavailable', {
        status: 502,
        headers: { 'Cache-Control': 'no-store' },
      });
    }),
};
