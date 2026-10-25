import { afterEach, describe, expect, it, vi } from 'vitest';
import worker from './index';

describe('worker', () => {
  afterEach(() => vi.restoreAllMocks());

  it('answers 502 without caching when the bucket is missing or fails, instead of crashing', async () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const env = { IMAGES: undefined as never };
    const res = await worker.fetch(new Request('https://x.test/img/a.webp'), env);
    expect(res.status).toBe(502);
    expect(res.headers.get('Cache-Control')).toBe('no-store');
    expect(error).toHaveBeenCalled();
  });

  it('passes a found photo through', async () => {
    const env = {
      IMAGES: {
        get: () =>
          Promise.resolve({
            httpEtag: '"e"',
            size: 1,
            body: new Response('x').body!,
            writeHttpMetadata: () => undefined,
          }),
      },
    };
    const res = await worker.fetch(new Request('https://x.test/img/a.webp'), env);
    expect(res.status).toBe(200);
  });
});
