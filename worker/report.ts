/**
 * POST /api/report: turns a player's "report a problem" into a GitHub issue, without the player needing a
 * GitHub account. Every request passes these gates in order, cheapest first, and stops at the first failure:
 *
 *   1. same-origin POST with a small JSON body
 *   2. per-visitor rate limit (Workers Rate Limiting binding)
 *   3. field validation (src/lib/report.ts), nothing but known fields is ever used
 *   4. Cloudflare Turnstile token (siteverify)
 *   5. the guard (worker/guard.ts): duplicates only add a "+1", and a daily cap bounds new issues
 *
 * The GitHub token (fine-grained, Issues: write on this one repo) and the Turnstile secret are Worker
 * secrets. Nothing about the player is stored: the IP is only the rate limiter's key.
 */
import {
  REPORT_BASE_LABEL,
  REPORT_BODY_MAX,
  REPORT_TYPE_META,
  reportKey,
  validateReport,
  type ReportPayload,
} from '../src/lib/report';
import type { Claim } from './guard';

export interface GuardStub {
  fetch(input: string, init?: { method: string; body: string }): Promise<Response>;
}
export interface ReportEnv {
  /** Per-visitor limit, declared under `ratelimits` in wrangler.jsonc. */
  REPORT_LIMITER?: { limit(options: { key: string }): Promise<{ success: boolean }> };
  /** The `ReportGuard` Durable Object. */
  REPORT_GUARD?: { idFromName(name: string): unknown; get(id: unknown): GuardStub };
  GITHUB_TOKEN?: string;
  /** `owner/name` of the repository that receives the issues. */
  GITHUB_REPO?: string;
  TURNSTILE_SECRET?: string;
}

export interface ReportDeps {
  fetch: typeof fetch;
}

const GITHUB_API = 'https://api.github.com';
const SITEVERIFY = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const TOKEN_MAX = 2048;

const json = (body: unknown, status = 200, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...headers },
  });
const fail = (error: string, status: number) =>
  json({ error }, status, status === 429 ? { 'Retry-After': '60' } : {});

/** Reads the body but gives up as soon as it is longer than `max` bytes. */
async function readLimited(request: Request, max: number): Promise<string | null> {
  const declared = Number(request.headers.get('Content-Length') ?? 0);
  if (declared > max || !request.body) return declared > max ? null : '';
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > max) {
      void reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  const all = new Uint8Array(size);
  let offset = 0;
  for (const c of chunks) {
    all.set(c, offset);
    offset += c.byteLength;
  }
  return new TextDecoder().decode(all);
}

async function verifyTurnstile(
  secret: string,
  token: string,
  ip: string | null,
  deps: ReportDeps,
): Promise<boolean> {
  const form = new FormData();
  form.set('secret', secret);
  form.set('response', token);
  if (ip) form.set('remoteip', ip);
  const res = await deps.fetch(SITEVERIFY, { method: 'POST', body: form });
  const result = (await res.json().catch(() => null)) as { success?: boolean } | null;
  return result?.success === true;
}

export function issueTitle(r: ReportPayload): string {
  return `[${REPORT_TYPE_META[r.type].prefix}] ${r.activityId}${r.itemId ? ` · ${r.itemId}` : ''}`;
}

/** Markdown for the issue. Every value is validated (ids, version) or sits in a code fence (the note), so none can inject markup or mentions. */
export function issueBody(r: ReportPayload, origin: string): string {
  const row = (name: string, value: string | undefined) =>
    value ? `| ${name} | ${value} |` : null;
  const code = (v: string) => `\`${v}\``;
  const rows = [
    row('Type', REPORT_TYPE_META[r.type].prefix),
    row('Level', r.levelId && code(r.levelId)),
    row('Unit', r.unitId && code(r.unitId)),
    row('Activity', `[${code(r.activityId)}](${origin}/play/${r.activityId})`),
    row('Game', r.gameType && code(r.gameType)),
    row('Item', r.itemId && code(r.itemId)),
    row('App version', code(r.appVersion)),
  ].filter(Boolean);
  const lines = ['Reported by a player in the app.', '', '| | |', '|---|---|', ...rows];
  if (r.note) lines.push('', 'Note from the player:', '', '~~~text', r.note, '~~~');
  return lines.join('\n');
}

const githubHeaders = (token: string) => ({
  Authorization: `Bearer ${token}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'lingoat-games-report',
  'Content-Type': 'application/json',
});

async function createIssue(
  repo: string,
  token: string,
  r: ReportPayload,
  origin: string,
  deps: ReportDeps,
): Promise<number | null> {
  const post = (labels: string[]) =>
    deps.fetch(`${GITHUB_API}/repos/${repo}/issues`, {
      method: 'POST',
      headers: githubHeaders(token),
      body: JSON.stringify({ title: issueTitle(r), body: issueBody(r, origin), labels }),
    });
  let res = await post([REPORT_BASE_LABEL, REPORT_TYPE_META[r.type].label]);
  // a label GitHub refuses must not lose the report: the title prefix still says what it is
  if (res.status === 422) res = await post([]);
  if (!res.ok) return null;
  const issue = (await res.json().catch(() => null)) as { number?: unknown } | null;
  return typeof issue?.number === 'number' ? issue.number : null;
}

async function addPlusOne(
  repo: string,
  token: string,
  issue: number,
  r: ReportPayload,
  deps: ReportDeps,
): Promise<void> {
  await deps
    .fetch(`${GITHUB_API}/repos/${repo}/issues/${issue}/comments`, {
      method: 'POST',
      headers: githubHeaders(token),
      body: JSON.stringify({ body: `+1: reported again (app version \`${r.appVersion}\`).` }),
    })
    .catch(() => undefined);
}

/** Host of the `Origin` header, or null when it is missing or not a URL (browsers always send it on a POST). */
function originHost(request: Request): string | null {
  try {
    return new URL(request.headers.get('Origin') ?? '').host;
  } catch {
    return null;
  }
}

export async function handleReport(
  request: Request,
  env: ReportEnv,
  deps: ReportDeps = { fetch: (input, init) => fetch(input, init) },
): Promise<Response> {
  if (request.method !== 'POST') return fail('method', 405);
  const url = new URL(request.url);
  if (originHost(request) !== url.host) return fail('origin', 403);

  const { GITHUB_TOKEN: githubToken, TURNSTILE_SECRET: turnstileSecret, REPORT_GUARD } = env;
  const repo = env.GITHUB_REPO ?? '';
  if (!githubToken || !turnstileSecret || !REPORT_GUARD || !/^[\w.-]+\/[\w.-]+$/.test(repo))
    return fail('not-configured', 503);

  const ip = request.headers.get('CF-Connecting-IP');
  if (env.REPORT_LIMITER && !(await env.REPORT_LIMITER.limit({ key: ip ?? 'unknown' })).success)
    return fail('rate-limited', 429);

  const text = await readLimited(request, REPORT_BODY_MAX);
  if (text === null) return fail('too-large', 413);
  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return fail('invalid', 400);
  }
  const checked = validateReport(body);
  if (!checked.ok) return fail(checked.error, 400);
  const token = (body as { token?: unknown }).token;
  if (typeof token !== 'string' || !token || token.length > TOKEN_MAX) return fail('token', 400);

  let human: boolean;
  try {
    human = await verifyTurnstile(turnstileSecret, token, ip, deps);
  } catch {
    return fail('verify-unavailable', 502);
  }
  if (!human) return fail('verify', 403);

  const { report } = checked;
  const key = reportKey(report);
  const guard = REPORT_GUARD.get(REPORT_GUARD.idFromName('global'));
  const ask = async <T>(path: string, data: object): Promise<T> => {
    const res = await guard.fetch(`https://guard${path}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return (await res.json()) as T;
  };

  const claim = await ask<Claim>('/claim', { key });
  if (claim.status === 'capped') return fail('capped', 429);
  if (claim.status === 'duplicate') {
    if (claim.plusOne && claim.issue)
      await addPlusOne(repo, githubToken, claim.issue, report, deps);
    return json({ ok: true });
  }

  const number = await createIssue(repo, githubToken, report, url.origin, deps).catch(() => null);
  if (number === null) {
    await ask('/release', { key });
    return fail('github', 502);
  }
  await ask('/commit', { key, issue: number });
  return json({ ok: true });
}
