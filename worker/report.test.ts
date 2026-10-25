import { describe, expect, it, vi } from 'vitest';
import { REPORT_BODY_MAX } from '../src/lib/report';
import { GuardCore, type StorageLike } from './guard';
import { handleReport, issueBody, issueTitle, type ReportEnv } from './report';

const memoryStorage = (): StorageLike => {
  const data = new Map<string, unknown>();
  return {
    get: async <T>(key: string) => data.get(key) as T | undefined,
    put: async (key, value) => void data.set(key, value),
    delete: async (keys) => {
      for (const k of Array.isArray(keys) ? keys : [keys]) data.delete(k);
    },
    list: async <T>({ prefix }: { prefix: string }) =>
      new Map([...data].filter(([k]) => k.startsWith(prefix)) as [string, T][]),
  };
};

/** A guard in front of a real GuardCore, so the Worker and the guard are tested together. */
const guardBinding = (core = new GuardCore(memoryStorage())) => ({
  idFromName: () => 'global',
  get: () => ({
    fetch: async (input: string, init?: { body: string }) => {
      const { key, issue } = JSON.parse(init?.body ?? '{}') as { key: string; issue?: number };
      const path = new URL(input).pathname;
      if (path === '/claim') return Response.json(await core.claim(key));
      if (path === '/commit') await core.commit(key, issue ?? 0);
      if (path === '/release') await core.release(key);
      return Response.json({ ok: true });
    },
  }),
});

const goodBody = {
  type: 'image',
  activityId: 'a1-1-food-flashcards',
  itemId: 'a1-1-apfel',
  levelId: 'a1-1',
  unitId: 'a1-1-food',
  gameType: 'flashcards',
  note: 'The picture shows a pear.',
  appVersion: '0.1.0+abc1234',
  token: 'turnstile-token',
};
const request = (body: unknown, init: RequestInit = {}) =>
  new Request('https://lingoat.games/api/report', {
    method: 'POST',
    headers: { Origin: 'https://lingoat.games', 'CF-Connecting-IP': '203.0.113.9' },
    body: typeof body === 'string' ? body : JSON.stringify(body),
    ...init,
  });

type Call = { url: string; init?: RequestInit };
function setup(over: Partial<ReportEnv> = {}, github = { status: 201, number: 42 }) {
  const calls: Call[] = [];
  let turnstileOk = true;
  const fetchImpl = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    calls.push({ url, init });
    if (url.includes('siteverify')) return Response.json({ success: turnstileOk });
    if (url.endsWith('/comments')) return Response.json({}, { status: 201 });
    return Response.json({ number: github.number }, { status: github.status });
  }) as unknown as typeof fetch;
  const env: ReportEnv = {
    GITHUB_TOKEN: 'ghp_secret',
    TURNSTILE_SECRET: 'ts_secret',
    GITHUB_REPO: 'arman1371/lingoat.games',
    REPORT_GUARD: guardBinding(),
    ...over,
  };
  const run = (req: Request) => handleReport(req, env, { fetch: fetchImpl });
  return { env, calls, run, setTurnstile: (v: boolean) => (turnstileOk = v) };
}
const issueCalls = (calls: Call[]) =>
  calls.filter((c) => c.url.endsWith('/issues') && c.init?.method === 'POST');

describe('handleReport', () => {
  it('opens a labelled issue with the context and no personal data', async () => {
    const { run, calls } = setup();
    const res = await run(request(goodBody));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
    const [issue] = issueCalls(calls);
    expect(issue?.url).toBe('https://api.github.com/repos/arman1371/lingoat.games/issues');
    const headers = issue?.init?.headers as Record<string, string>;
    expect(headers.Authorization).toBe('Bearer ghp_secret');
    const sent = JSON.parse(String(issue?.init?.body)) as {
      title: string;
      body: string;
      labels: string[];
    };
    expect(sent.title).toBe('[Image] a1-1-food-flashcards · a1-1-apfel');
    expect(sent.labels).toEqual(['user-report', 'report:image']);
    expect(sent.body).toContain('| Item | `a1-1-apfel` |');
    expect(sent.body).toContain('https://lingoat.games/play/a1-1-food-flashcards');
    expect(sent.body).toContain('~~~text\nThe picture shows a pear.\n~~~');
    expect(sent.body).not.toContain('203.0.113.9');
    expect(sent.body).not.toContain('turnstile-token');
  });

  it('checks the Turnstile token with the secret and the visitor address', async () => {
    const { run, calls } = setup();
    await run(request(goodBody));
    const verify = calls.find((c) => c.url.includes('siteverify'));
    const form = verify?.init?.body as FormData;
    expect(form.get('secret')).toBe('ts_secret');
    expect(form.get('response')).toBe('turnstile-token');
    expect(form.get('remoteip')).toBe('203.0.113.9');
  });

  it('rejects a failed Turnstile check without touching GitHub', async () => {
    const { run, calls, setTurnstile } = setup();
    setTurnstile(false);
    const res = await run(request(goodBody));
    expect(res.status).toBe(403);
    expect(issueCalls(calls)).toHaveLength(0);
  });

  it('answers 502 when Turnstile itself cannot be reached', async () => {
    const { env } = setup();
    const down = (async (input: RequestInfo | URL) => {
      if (String(input).includes('siteverify')) throw new Error('offline');
      return Response.json({});
    }) as typeof fetch;
    const res = await handleReport(request(goodBody), env, { fetch: down });
    expect(res.status).toBe(502);
  });

  it('only accepts same-origin POSTs', async () => {
    const { run } = setup();
    expect((await run(new Request('https://lingoat.games/api/report'))).status).toBe(405);
    const foreign = request(goodBody, {
      headers: { Origin: 'https://evil.example', 'CF-Connecting-IP': '1.1.1.1' },
    });
    expect((await run(foreign)).status).toBe(403);
    const none = request(goodBody, { headers: {} });
    expect((await run(none)).status).toBe(403);
    const junk = request(goodBody, { headers: { Origin: 'not a url' } });
    expect((await run(junk)).status).toBe(403);
  });

  it('answers 503 while a secret or the guard is missing', async () => {
    for (const missing of ['GITHUB_TOKEN', 'TURNSTILE_SECRET', 'REPORT_GUARD', 'GITHUB_REPO']) {
      const { run } = setup({ [missing]: undefined });
      expect((await run(request(goodBody))).status).toBe(503);
    }
    const { run } = setup({ GITHUB_REPO: 'not a repo' });
    expect((await run(request(goodBody))).status).toBe(503);
  });

  it('rate limits per visitor before reading the body', async () => {
    const limit = vi.fn(async () => ({ success: false }));
    const { run, calls } = setup({ REPORT_LIMITER: { limit } });
    const res = await run(request(goodBody));
    expect(res.status).toBe(429);
    expect(res.headers.get('Retry-After')).toBe('60');
    expect(limit).toHaveBeenCalledWith({ key: '203.0.113.9' });
    expect(calls).toHaveLength(0);
  });

  it('uses a shared key when the address header is missing', async () => {
    const limit = vi.fn(async () => ({ success: true }));
    const { run } = setup({ REPORT_LIMITER: { limit } });
    await run(request(goodBody, { headers: { Origin: 'https://lingoat.games' } }));
    expect(limit).toHaveBeenCalledWith({ key: 'unknown' });
  });

  it('rejects oversized and malformed bodies', async () => {
    const { run, calls } = setup();
    const big = { ...goodBody, note: 'x'.repeat(REPORT_BODY_MAX) };
    expect((await run(request(big))).status).toBe(413);
    const declared = request('{}', {
      headers: {
        Origin: 'https://lingoat.games',
        'Content-Length': String(REPORT_BODY_MAX + 1),
      },
    });
    expect((await run(declared)).status).toBe(413);
    expect((await run(request('not json'))).status).toBe(400);
    expect((await run(request({ ...goodBody, type: 'nope' }))).status).toBe(400);
    expect((await run(request({ ...goodBody, activityId: 'Bad Id' }))).status).toBe(400);
    expect((await run(request({ ...goodBody, token: undefined }))).status).toBe(400);
    expect((await run(request({ ...goodBody, token: 'x'.repeat(3000) }))).status).toBe(400);
    expect(calls).toHaveLength(0);
  });

  it('answers a bodyless request with 400', async () => {
    const { run } = setup();
    const empty = new Request('https://lingoat.games/api/report', {
      method: 'POST',
      headers: { Origin: 'https://lingoat.games' },
    });
    expect((await run(empty)).status).toBe(400);
  });

  it('files a repeat of the same problem once, then adds a "+1" only after a day', async () => {
    const storage = memoryStorage();
    let now = Date.parse('2026-10-25T10:00:00Z');
    const core = new GuardCore(storage, () => now);
    const { run, calls } = setup({ REPORT_GUARD: guardBinding(core) });
    expect((await run(request(goodBody))).status).toBe(200);
    expect((await run(request(goodBody))).status).toBe(200);
    expect(issueCalls(calls)).toHaveLength(1);
    expect(calls.filter((c) => c.url.endsWith('/comments'))).toHaveLength(0);
    now += 25 * 3600_000;
    expect((await run(request(goodBody))).status).toBe(200);
    expect(issueCalls(calls)).toHaveLength(1);
    const comment = calls.find((c) => c.url.endsWith('/issues/42/comments'));
    expect(JSON.parse(String(comment?.init?.body)).body).toContain('0.1.0+abc1234');
  });

  it('answers 429 once the daily cap of new issues is reached', async () => {
    const core = new GuardCore(memoryStorage(), undefined, {
      dailyNew: 1,
      dailyPlusOne: 1,
      duplicateMs: 1e9,
      plusOneEveryMs: 1e9,
      pendingMs: 1e9,
    });
    const { run } = setup({ REPORT_GUARD: guardBinding(core) });
    expect((await run(request(goodBody))).status).toBe(200);
    const other = { ...goodBody, itemId: 'a1-1-birne' };
    expect((await run(request(other))).status).toBe(429);
  });

  it('retries without labels when GitHub refuses them', async () => {
    const calls: Call[] = [];
    let attempt = 0;
    const fetchImpl = (async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      calls.push({ url, init });
      if (url.includes('siteverify')) return Response.json({ success: true });
      attempt += 1;
      return attempt === 1
        ? Response.json({ message: 'Validation Failed' }, { status: 422 })
        : Response.json({ number: 9 }, { status: 201 });
    }) as typeof fetch;
    const { env } = setup();
    const res = await handleReport(request(goodBody), env, { fetch: fetchImpl });
    expect(res.status).toBe(200);
    const bodies = issueCalls(calls).map((c) => JSON.parse(String(c.init?.body)).labels);
    expect(bodies).toEqual([['user-report', 'report:image'], []]);
  });

  it('answers 502 and frees the slot when GitHub fails, so a retry can succeed', async () => {
    const core = new GuardCore(memoryStorage());
    const { env } = setup({ REPORT_GUARD: guardBinding(core) });
    const down = (async (input: RequestInfo | URL) =>
      String(input).includes('siteverify')
        ? Response.json({ success: true })
        : Response.json({}, { status: 500 })) as typeof fetch;
    expect((await handleReport(request(goodBody), env, { fetch: down })).status).toBe(502);
    const { run, calls } = setup({ REPORT_GUARD: guardBinding(core) });
    expect((await run(request(goodBody))).status).toBe(200);
    expect(issueCalls(calls)).toHaveLength(1);
  });

  it('survives a GitHub answer without an issue number and a network error', async () => {
    const { env } = setup();
    const odd = (async (input: RequestInfo | URL) =>
      String(input).includes('siteverify')
        ? Response.json({ success: true })
        : new Response('nope', { status: 201 })) as typeof fetch;
    expect((await handleReport(request(goodBody), env, { fetch: odd })).status).toBe(502);
    const boom = (async (input: RequestInfo | URL) => {
      if (String(input).includes('siteverify')) return Response.json({ success: true });
      throw new Error('network');
    }) as typeof fetch;
    expect((await handleReport(request(goodBody), env, { fetch: boom })).status).toBe(502);
  });
});

describe('issue text', () => {
  const base = { type: 'bug', activityId: 'a1-1-x', appVersion: '1.0.0' } as const;
  it('titles carry the type prefix, with the item only when known', () => {
    expect(issueTitle(base)).toBe('[Bug] a1-1-x');
    expect(issueTitle({ ...base, type: 'german', itemId: 'q-3' })).toBe('[German] a1-1-x · q-3');
  });
  it('omits unknown rows and the note section', () => {
    const body = issueBody(base, 'https://lingoat.games');
    expect(body).not.toContain('| Item |');
    expect(body).not.toContain('Note from the player');
    expect(body).toContain('| Activity | [`a1-1-x`](https://lingoat.games/play/a1-1-x) |');
  });
});
