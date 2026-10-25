/**
 * "Report a problem": the one contract shared by the app (src/components/Report*) and the Worker
 * (worker/report.ts). No imports and no browser APIs, so both sides can load it.
 */

export const REPORT_TYPES = ['image', 'translation', 'german', 'audio', 'bug', 'other'] as const;
export type ReportType = (typeof REPORT_TYPES)[number];

/** Issue title prefix and GitHub label for every problem type. UI wording lives in i18n (`report.types`). */
export const REPORT_TYPE_META: Record<ReportType, { prefix: string; label: string }> = {
  image: { prefix: 'Image', label: 'report:image' },
  translation: { prefix: 'Translation', label: 'report:translation' },
  german: { prefix: 'German', label: 'report:german' },
  audio: { prefix: 'Audio', label: 'report:audio' },
  bug: { prefix: 'Bug', label: 'report:bug' },
  other: { prefix: 'Other', label: 'report:other' },
};
/** Added to every report, so `label:user-report` lists them all. */
export const REPORT_BASE_LABEL = 'user-report';

export const NOTE_MAX = 200;
/** Request bodies larger than this are rejected before they are parsed. */
export const REPORT_BODY_MAX = 4096;

/** Content ids (activities, units, levels, items) are lower-case kebab-case in `src/content`. */
const ID = /^[a-z0-9][a-z0-9-]{0,99}$/;
const VERSION = /^[A-Za-z0-9.+_-]{1,40}$/;

export interface ReportPayload {
  type: ReportType;
  activityId: string;
  /** The word, question or step on screen, when the game says which one it is. */
  itemId?: string;
  levelId?: string;
  unitId?: string;
  gameType?: string;
  /** Optional free text, plain, at most NOTE_MAX characters. */
  note?: string;
  appVersion: string;
}

export type ReportCheck = { ok: true; report: ReportPayload } | { ok: false; error: string };

const isType = (v: unknown): v is ReportType =>
  typeof v === 'string' && (REPORT_TYPES as readonly string[]).includes(v);
const isId = (v: unknown): v is string => typeof v === 'string' && ID.test(v);

/** Control characters (incl. line breaks) become spaces, runs of whitespace collapse, then the text is cut. */
export function cleanNote(value: string): string {
  let plain = '';
  for (const char of value) {
    const code = char.charCodeAt(0);
    plain += code < 32 || code === 127 || code === 0x2028 || code === 0x2029 ? ' ' : char;
  }
  return plain.replace(/\s+/g, ' ').trim().slice(0, NOTE_MAX);
}

/** Validates an untrusted body and returns only the known fields, cleaned. Never throws. */
export function validateReport(input: unknown): ReportCheck {
  if (typeof input !== 'object' || input === null || Array.isArray(input))
    return { ok: false, error: 'invalid' };
  const o = input as Record<string, unknown>;
  if (!isType(o.type)) return { ok: false, error: 'type' };
  if (!isId(o.activityId)) return { ok: false, error: 'activityId' };
  for (const key of ['itemId', 'levelId', 'unitId', 'gameType'] as const)
    if (o[key] !== undefined && !isId(o[key])) return { ok: false, error: key };
  if (typeof o.appVersion !== 'string' || !VERSION.test(o.appVersion))
    return { ok: false, error: 'appVersion' };
  if (o.note !== undefined && (typeof o.note !== 'string' || o.note.length > NOTE_MAX * 4))
    return { ok: false, error: 'note' };
  const note = typeof o.note === 'string' ? cleanNote(o.note) : '';
  return {
    ok: true,
    report: {
      type: o.type,
      activityId: o.activityId,
      ...(o.itemId !== undefined && { itemId: o.itemId as string }),
      ...(o.levelId !== undefined && { levelId: o.levelId as string }),
      ...(o.unitId !== undefined && { unitId: o.unitId as string }),
      ...(o.gameType !== undefined && { gameType: o.gameType as string }),
      ...(note && { note }),
      appVersion: o.appVersion,
    },
  };
}

/** Same problem on the same item: the Worker opens one issue and only adds a "+1" for repeats. */
export const reportKey = (r: Pick<ReportPayload, 'type' | 'activityId' | 'itemId'>): string =>
  `${r.type}|${r.activityId}|${r.itemId ?? ''}`;

export const REPORT_PATH = '/api/report';
