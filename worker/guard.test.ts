import { describe, expect, it } from 'vitest';
import { DEFAULT_LIMITS, GuardCore, ReportGuard, type StorageLike } from './guard';

const memoryStorage = (): StorageLike & { data: Map<string, unknown> } => {
  const data = new Map<string, unknown>();
  return {
    data,
    get: async <T>(key: string) => data.get(key) as T | undefined,
    put: async (key, value) => void data.set(key, value),
    delete: async (keys) => {
      for (const k of Array.isArray(keys) ? keys : [keys]) data.delete(k);
    },
    list: async <T>({ prefix, limit }: { prefix: string; limit?: number }) =>
      new Map([...data].filter(([k]) => k.startsWith(prefix)).slice(0, limit) as [string, T][]),
  };
};
const HOUR = 3600_000;
const DAY = 24 * HOUR;
const clock = (start = Date.parse('2026-10-25T10:00:00Z')) => {
  let now = start;
  return { now: () => now, advance: (ms: number) => (now += ms) };
};

describe('GuardCore', () => {
  it('lets the first report of a problem through and recognises the repeat', async () => {
    const storage = memoryStorage();
    const guard = new GuardCore(storage, clock().now);
    expect(await guard.claim('image|a|x')).toEqual({ status: 'new' });
    await guard.commit('image|a|x', 12);
    expect(await guard.claim('image|a|x')).toEqual({
      status: 'duplicate',
      issue: 12,
      plusOne: false,
    });
    expect(await guard.claim('image|a|y')).toEqual({ status: 'new' });
  });

  it('adds a "+1" for a repeat at most once a day', async () => {
    const c = clock();
    const guard = new GuardCore(memoryStorage(), c.now);
    await guard.claim('k');
    await guard.commit('k', 7);
    c.advance(DAY + HOUR);
    expect(await guard.claim('k')).toEqual({ status: 'duplicate', issue: 7, plusOne: true });
    expect(await guard.claim('k')).toEqual({ status: 'duplicate', issue: 7, plusOne: false });
    c.advance(DAY);
    expect(await guard.claim('k')).toMatchObject({ plusOne: true });
  });

  it('caps "+1" comments per day', async () => {
    const c = clock();
    const guard = new GuardCore(memoryStorage(), c.now, { ...DEFAULT_LIMITS, dailyPlusOne: 1 });
    for (const k of ['a', 'b']) {
      await guard.claim(k);
      await guard.commit(k, 1);
    }
    c.advance(DAY + HOUR);
    expect(await guard.claim('a')).toMatchObject({ plusOne: true });
    expect(await guard.claim('b')).toMatchObject({ plusOne: false });
  });

  it('stops opening issues at the daily cap and starts again the next day', async () => {
    const c = clock();
    const guard = new GuardCore(memoryStorage(), c.now, { ...DEFAULT_LIMITS, dailyNew: 2 });
    expect((await guard.claim('a')).status).toBe('new');
    expect((await guard.claim('b')).status).toBe('new');
    expect(await guard.claim('c')).toEqual({ status: 'capped' });
    c.advance(DAY);
    expect((await guard.claim('c')).status).toBe('new');
  });

  it('gives the slot back when the issue could not be opened', async () => {
    const guard = new GuardCore(memoryStorage(), clock().now, { ...DEFAULT_LIMITS, dailyNew: 1 });
    expect((await guard.claim('a')).status).toBe('new');
    await guard.release('a');
    expect((await guard.claim('a')).status).toBe('new');
  });

  it('release does nothing once the issue exists', async () => {
    const guard = new GuardCore(memoryStorage(), clock().now);
    await guard.claim('a');
    await guard.commit('a', 3);
    await guard.release('a');
    expect(await guard.claim('a')).toMatchObject({ status: 'duplicate', issue: 3 });
  });

  it('treats a report that is still being filed as a duplicate, until it is stale', async () => {
    const c = clock();
    const guard = new GuardCore(memoryStorage(), c.now);
    await guard.claim('a');
    expect(await guard.claim('a')).toEqual({ status: 'duplicate', plusOne: false });
    c.advance(DEFAULT_LIMITS.pendingMs + 1);
    expect((await guard.claim('a')).status).toBe('new');
  });

  it('forgets a problem after 30 days, so it can be filed again', async () => {
    const c = clock();
    const guard = new GuardCore(memoryStorage(), c.now);
    await guard.claim('a');
    await guard.commit('a', 3);
    c.advance(DEFAULT_LIMITS.duplicateMs + HOUR);
    expect((await guard.claim('a')).status).toBe('new');
  });

  it('sweeps old counters and expired problems once a day', async () => {
    const c = clock();
    const storage = memoryStorage();
    const guard = new GuardCore(storage, c.now);
    await guard.claim('old');
    await guard.commit('old', 1);
    c.advance(DEFAULT_LIMITS.duplicateMs + 2 * DAY);
    await guard.claim('fresh');
    expect([...storage.data.keys()].sort()).toEqual(['d:fresh', 'n:2026-11-26', 'swept']);
  });
});

describe('ReportGuard', () => {
  const call = (guard: ReportGuard, path: string, body: unknown) =>
    guard.fetch(
      new Request(`https://guard${path}`, { method: 'POST', body: JSON.stringify(body) }),
    );

  it('answers claim, commit and release over HTTP', async () => {
    const guard = new ReportGuard({ storage: memoryStorage() });
    expect(await (await call(guard, '/claim', { key: 'k' })).json()).toEqual({ status: 'new' });
    await call(guard, '/commit', { key: 'k', issue: 5 });
    expect(await (await call(guard, '/claim', { key: 'k' })).json()).toMatchObject({
      status: 'duplicate',
      issue: 5,
    });
    expect((await call(guard, '/release', { key: 'k' })).status).toBe(200);
  });

  it('rejects a missing key and unknown routes', async () => {
    const guard = new ReportGuard({ storage: memoryStorage() });
    expect((await call(guard, '/claim', {})).status).toBe(400);
    expect((await call(guard, '/nope', { key: 'k' })).status).toBe(404);
    expect((await call(guard, '/commit', { key: 'k' })).status).toBe(404);
  });
});
