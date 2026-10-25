import { serveImage, type EdgeCache, type R2BucketLike } from './images';

interface Env {
  IMAGES: R2BucketLike;
}

// TEMPORARY diagnostics for the preview 500 (error 1101); removed in the next commit.
export default {
  fetch: async (request: Request, env: Env): Promise<Response> => {
    const out: string[] = [];
    const g = globalThis as { caches?: { default?: EdgeCache } };
    out.push(`caches=${typeof g.caches} default=${typeof g.caches?.default}`);
    out.push(`env keys=${Object.keys(env).join(',')}`);
    try {
      const o = await env.IMAGES.get('nope.webp', { onlyIf: request.headers });
      out.push(`get ok ${String(o)}`);
    } catch (e) {
      out.push(`get err ${String(e)}`);
    }
    try {
      await g.caches?.default?.match(request);
      out.push('match ok');
    } catch (e) {
      out.push(`match err ${String(e)}`);
    }
    try {
      const r = await serveImage(request, env.IMAGES, g.caches?.default);
      out.push(`serve ${r.status}`);
    } catch (e) {
      out.push(`serve err ${String(e)}`);
    }
    return new Response(out.join('\n'), { status: 200 });
  },
};
