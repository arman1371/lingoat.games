import { describe, expect, it, vi } from 'vitest';
import { serveImage, type EdgeCache, type R2BucketLike, type R2ObjectLike } from './images';

const object = (over: Partial<R2ObjectLike> = {}): R2ObjectLike => ({
  httpEtag: '"abc"',
  size: 3,
  body: new Response('webp').body!,
  writeHttpMetadata: (h) => h.set('Content-Type', 'application/octet-stream'),
  ...over,
});
const bucket = (o: R2ObjectLike | null): R2BucketLike & { get: ReturnType<typeof vi.fn> } => ({
  get: vi.fn().mockResolvedValue(o),
});
const req = (path: string, init?: RequestInit): Request =>
  new Request(`https://x.test${path}`, init);

describe('serveImage', () => {
  it('serves a stored photo as an immutable image/webp', async () => {
    const b = bucket(object());
    const res = await serveImage(req('/img/a1-1-apfel.webp'), b);
    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toBe('image/webp');
    expect(res.headers.get('Cache-Control')).toContain('immutable');
    expect(res.headers.get('ETag')).toBe('"abc"');
    expect(await res.text()).toBe('webp');
    expect(b.get).toHaveBeenCalledWith('a1-1-apfel.webp', expect.anything());
  });

  it('answers 404 (not the SPA page) for a photo that is not there, with a short cache time', async () => {
    const res = await serveImage(req('/img/nope.webp'), bucket(null));
    expect(res.status).toBe(404);
    expect(res.headers.get('Cache-Control')).toBe('public, max-age=300');
  });

  it.each(['/img/', '/img/a.png', '/img/../secret.webp', '/img/A.webp', '/img/a/b.webp'])(
    'never asks the bucket for %s',
    async (path) => {
      const b = bucket(object());
      expect((await serveImage(req(path), b)).status).toBe(404);
      expect(b.get).not.toHaveBeenCalled();
    },
  );

  it('rejects methods other than GET and HEAD', async () => {
    const res = await serveImage(req('/img/a.webp', { method: 'POST' }), bucket(object()));
    expect(res.status).toBe(405);
  });

  it('answers HEAD without a body', async () => {
    const res = await serveImage(req('/img/a.webp', { method: 'HEAD' }), bucket(object()));
    expect(res.status).toBe(200);
    expect(await res.text()).toBe('');
  });

  it('answers 304 when the precondition failed (object without body)', async () => {
    const res = await serveImage(
      req('/img/a.webp', { headers: { 'If-None-Match': '"abc"' } }),
      bucket(object({ body: undefined })),
    );
    expect(res.status).toBe(304);
    expect(res.headers.get('ETag')).toBe('"abc"');
  });

  it('answers from the edge cache without touching the bucket, and fills it on a miss', async () => {
    const hit = new Response('cached');
    const b = bucket(object());
    const cache: EdgeCache = { match: vi.fn().mockResolvedValue(hit), put: vi.fn() };
    expect(await serveImage(req('/img/a.webp'), b, cache)).toBe(hit);
    expect(b.get).not.toHaveBeenCalled();

    const miss: EdgeCache = { match: vi.fn().mockResolvedValue(undefined), put: vi.fn() };
    await serveImage(req('/img/a.webp'), b, miss);
    expect(miss.put).toHaveBeenCalledOnce();
  });
});
