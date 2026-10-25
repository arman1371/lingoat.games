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
    ),
};
