/**
 * Durable Object behind `/api/report`: one global instance that is the only place that decides whether
 * a report may open a GitHub issue. Requests to a Durable Object are handled one at a time, so the
 * counters cannot race, and there is nothing to create by hand (`wrangler.jsonc` declares the class).
 *
 * Three things are kept:
 * - `n:<day>`  how many issues were opened on that UTC day (the daily cap)
 * - `p:<day>`  how many "+1" comments were added that day (their own, higher cap)
 * - `d:<key>`  the issue opened for one problem (type + activity + item), so repeats do not open another
 */

export interface StorageLike {
  get<T>(key: string): Promise<T | undefined>;
  put(key: string, value: unknown): Promise<void>;
  delete(key: string | string[]): Promise<unknown>;
  list<T>(options: { prefix: string; limit?: number }): Promise<Map<string, T>>;
}

export type Claim =
  | { status: 'new' }
  | { status: 'duplicate'; issue?: number; plusOne: boolean }
  | { status: 'capped' };

export interface GuardLimits {
  /** New issues per UTC day, for the whole app. */
  dailyNew: number;
  /** "+1" comments per UTC day. */
  dailyPlusOne: number;
  /** How long a problem counts as already reported. */
  duplicateMs: number;
  /** A repeat adds a "+1" at most this often. */
  plusOneEveryMs: number;
  /** A reservation without an issue number (the GitHub call died) is ignored after this long. */
  pendingMs: number;
}

export const DEFAULT_LIMITS: GuardLimits = {
  dailyNew: 30,
  dailyPlusOne: 100,
  duplicateMs: 30 * 24 * 3600_000,
  plusOneEveryMs: 24 * 3600_000,
  pendingMs: 2 * 60_000,
};

interface Entry {
  issue: number | null;
  at: number;
  plus: number;
}

const dayOf = (now: number) => new Date(now).toISOString().slice(0, 10);

export class GuardCore {
  constructor(
    private readonly storage: StorageLike,
    private readonly now: () => number = Date.now,
    private readonly limits: GuardLimits = DEFAULT_LIMITS,
  ) {}

  async claim(key: string): Promise<Claim> {
    const now = this.now();
    const day = dayOf(now);
    const { limits, storage } = this;
    await this.sweep(day, now);

    const rec = await storage.get<Entry>(`d:${key}`);
    if (rec && now - rec.at < limits.duplicateMs) {
      if (rec.issue === null) {
        if (now - rec.at < limits.pendingMs) return { status: 'duplicate', plusOne: false };
      } else {
        const plusToday = (await storage.get<number>(`p:${day}`)) ?? 0;
        const plusOne = now - rec.plus >= limits.plusOneEveryMs && plusToday < limits.dailyPlusOne;
        if (plusOne) {
          await storage.put(`p:${day}`, plusToday + 1);
          await storage.put(`d:${key}`, { ...rec, plus: now });
        }
        return { status: 'duplicate', issue: rec.issue, plusOne };
      }
    }

    const count = (await storage.get<number>(`n:${day}`)) ?? 0;
    if (count >= limits.dailyNew) return { status: 'capped' };
    await storage.put(`n:${day}`, count + 1);
    await storage.put(`d:${key}`, { issue: null, at: now, plus: now } satisfies Entry);
    return { status: 'new' };
  }

  /** The issue was opened: remember its number for the repeats. */
  async commit(key: string, issue: number): Promise<void> {
    const rec = await this.storage.get<Entry>(`d:${key}`);
    if (rec) await this.storage.put(`d:${key}`, { ...rec, issue });
  }

  /** Opening the issue failed: give the slot back so the next report can try again. */
  async release(key: string): Promise<void> {
    const day = dayOf(this.now());
    const rec = await this.storage.get<Entry>(`d:${key}`);
    if (!rec || rec.issue !== null) return;
    await this.storage.delete(`d:${key}`);
    const count = (await this.storage.get<number>(`n:${day}`)) ?? 0;
    if (count > 0) await this.storage.put(`n:${day}`, count - 1);
  }

  /** Once per day: drop the counters of earlier days and the problems reported long ago. */
  private async sweep(day: string, now: number): Promise<void> {
    const marker = await this.storage.get<string>('swept');
    if (marker === day) return;
    const stale: string[] = [];
    for (const prefix of ['n:', 'p:'] as const)
      for (const k of (await this.storage.list<number>({ prefix })).keys())
        if (k.slice(2) !== day) stale.push(k);
    const records = await this.storage.list<Entry>({ prefix: 'd:', limit: 1000 });
    for (const [k, rec] of records) if (now - rec.at >= this.limits.duplicateMs) stale.push(k);
    // delete() takes at most 128 keys per call
    for (let i = 0; i < stale.length; i += 128) await this.storage.delete(stale.slice(i, i + 128));
    await this.storage.put('swept', day);
  }
}

/** The slice of the Durable Object state that this file uses. */
interface StateLike {
  storage: StorageLike;
}

/** HTTP face of `GuardCore` for the Worker: POST /claim|/commit|/release with `{ key, issue? }`. */
export class ReportGuard {
  private readonly core: GuardCore;
  constructor(state: StateLike) {
    this.core = new GuardCore(state.storage);
  }

  async fetch(request: Request): Promise<Response> {
    const { pathname } = new URL(request.url);
    const body = (await request.json().catch(() => null)) as {
      key?: unknown;
      issue?: unknown;
    } | null;
    if (!body || typeof body.key !== 'string')
      return Response.json({ error: 'key' }, { status: 400 });
    if (pathname === '/claim') return Response.json(await this.core.claim(body.key));
    if (pathname === '/release') {
      await this.core.release(body.key);
      return Response.json({ ok: true });
    }
    if (pathname === '/commit' && typeof body.issue === 'number') {
      await this.core.commit(body.key, body.issue);
      return Response.json({ ok: true });
    }
    return Response.json({ error: 'route' }, { status: 404 });
  }
}
