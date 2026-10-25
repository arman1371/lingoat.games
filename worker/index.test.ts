import { describe, expect, it, vi } from 'vitest';
import worker, { serveImage, type CacheLike, type Env } from './index';

const memoryCache = (): CacheLike & { entries: Map<string, Response> } => {
  const entries = new Map<string, Response>();
  return {
    entries,
    match: async (r) => entries.get(r.url)?.clone(),
    put: async (r, res) => void entries.set(r.url, res),
  };
};
const env = (objects: Record<string, string> = {}): Env & { get: ReturnType<typeof vi.fn> } => {
  const get = vi.fn(async (key: string) =>
    key in objects ? { body: new Response(objects[key]).body!, httpEtag: '"abc"' } : null,
  );
  return { ASSETS: { fetch: async () => new Response('asset') }, IMAGES: { get }, get };
};
const req = (path: string, method = 'GET') =>
  new Request(`https://lingoat.games${path}`, { method });
const run = async (request: Request, e: Env, cache = memoryCache()) => {
  const pending: Promise<unknown>[] = [];
  const response = await serveImage(request, e, cache, (p) => pending.push(p));
  await Promise.all(pending);
  return { response, cache };
};

describe('serveImage', () => {
  it('serves a photo from R2 with a one-year immutable cache header', async () => {
    const { response } = await run(
      req('/img/a1-1-einkaufen-apfel.webp'),
      env({ 'a1-1-einkaufen-apfel.webp': 'RIFF' }),
    );
    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('image/webp');
    expect(response.headers.get('Cache-Control')).toBe('public, max-age=31536000, immutable');
    expect(response.headers.get('ETag')).toBe('"abc"');
    expect(await response.text()).toBe('RIFF');
  });

  it('reads the bucket once, then answers from the cache', async () => {
    const e = env({ 'a.webp': 'x' });
    const cache = memoryCache();
    await run(req('/img/a.webp'), e, cache);
    const second = await run(req('/img/a.webp'), e, cache);
    expect(e.get).toHaveBeenCalledTimes(1);
    expect(await second.response.text()).toBe('x');
  });

  it('ignores the query string: variants share one cache entry and one bucket read', async () => {
    const e = env({ 'a.webp': 'x' });
    const cache = memoryCache();
    await run(req('/img/a.webp'), e, cache);
    for (const query of ['?1', '?2', '?v=abc&x=y', '?']) {
      const { response } = await run(req(`/img/a.webp${query}`), e, cache);
      expect(await response.text()).toBe('x');
    }
    expect(e.get).toHaveBeenCalledTimes(1);
    expect([...cache.entries.keys()]).toEqual(['https://lingoat.games/img/a.webp']);
  });

  it('answers 404 (briefly cacheable) for a missing photo, so the word keeps its emoji', async () => {
    const { response, cache } = await run(req('/img/nope.webp'), env());
    expect(response.status).toBe(404);
    expect(response.headers.get('Cache-Control')).toBe('public, max-age=300');
    expect(cache.entries.size).toBe(0);
  });

  it('only serves well-formed photo names and only GET or HEAD', async () => {
    const e = env({ 'a.webp': 'x' });
    expect((await run(req('/img/../secret.webp'), e)).response.status).toBe(404);
    expect((await run(req('/img/a.png'), e)).response.status).toBe(404);
    expect((await run(req('/img/a.webp', 'POST'), e)).response.status).toBe(405);
    expect((await run(req('/img/a.webp', 'HEAD'), e)).response.status).toBe(200);
  });
});

describe('serveImage without a working bucket', () => {
  it('answers 404 instead of failing when the binding is missing or the bucket errors', async () => {
    const missing = { ASSETS: { fetch: async () => new Response('asset') } };
    expect((await run(req('/img/a.webp'), missing)).response.status).toBe(404);
    const broken = { ...missing, IMAGES: { get: async () => Promise.reject(new Error('boom')) } };
    expect((await run(req('/img/a.webp'), broken)).response.status).toBe(404);
  });
});

describe('worker', () => {
  it('hands everything outside /img/ to the static assets', async () => {
    const response = await worker.fetch(req('/levels/a1-1'), env(), { waitUntil: () => {} });
    expect(await response.text()).toBe('asset');
  });
});
