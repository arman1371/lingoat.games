import { z } from 'zod';
import type { ProgressData } from '@/store/progressStore';
import type { SettingsData } from '@/store/settingsStore';

/**
 * Export / import of settings and progress as one JSON file, so a learner can move to another
 * device without an account. Pure functions only: the file picker and download live in the page.
 */

export const TRANSFER_FORMAT = 'lingoat-progress';
export const TRANSFER_VERSION = 1;
/** Real exports are a few hundred KB at most; anything bigger is not ours. */
export const TRANSFER_MAX_BYTES = 5 * 1024 * 1024;

const count = z.number().int().min(0);
const day = z.number().int();
const id = z.string().min(1).max(200);

const settingsSchema = z.object({
  theme: z.enum(['system', 'light', 'dark']),
  motion: z.enum(['system', 'reduced', 'full']),
  sounds: z.boolean(),
  autoSpeak: z.boolean(),
  speakSentences: z.boolean(),
  ttsRate: z.number().min(0.5).max(1.2),
  dailyGoal: z.number().int().min(1).max(10_000),
});

const stars = z.union([z.literal(1), z.literal(2), z.literal(3)]);

const progressSchema = z.object({
  xp: count,
  streak: z.object({ current: count, longest: count, lastDay: day.nullable() }),
  activities: z.record(
    id,
    z.object({ stars, bestAccuracy: z.number().min(0).max(1), plays: count, lastPlayed: day }),
  ),
  mistakes: z.record(
    id,
    z.object({
      key: id,
      activityId: id,
      itemId: id,
      box: stars,
      lastSeen: day,
      wrongCount: count,
    }),
  ),
  lastActivityId: id.nullable(),
  daily: z.object({ day, xp: count }),
});

const transferSchema = z.object({
  format: z.literal(TRANSFER_FORMAT),
  schemaVersion: z.number().int().min(1),
  appVersion: z.string().max(64).optional(),
  exportedAt: z.string().max(40),
  settings: settingsSchema,
  progress: progressSchema,
});

export interface TransferFile {
  format: typeof TRANSFER_FORMAT;
  schemaVersion: number;
  appVersion?: string;
  /** ISO timestamp. */
  exportedAt: string;
  settings: SettingsData;
  progress: ProgressData;
}

export type ImportErrorCode =
  'too-large' | 'not-json' | 'wrong-format' | 'newer-version' | 'invalid';

export type ParseResult = { ok: true; file: TransferFile } | { ok: false; error: ImportErrorCode };

export function buildExport(
  settings: SettingsData,
  progress: ProgressData,
  options: { appVersion?: string; now?: Date } = {},
): TransferFile {
  return {
    format: TRANSFER_FORMAT,
    schemaVersion: TRANSFER_VERSION,
    ...(options.appVersion ? { appVersion: options.appVersion } : {}),
    exportedAt: (options.now ?? new Date()).toISOString(),
    settings,
    progress,
  };
}

export const exportFileName = (now: Date = new Date()) =>
  `lingoat-progress-${now.toISOString().slice(0, 10)}.json`;

/** Checks size, JSON, format marker, version and shape – in that order, so the error says what is wrong. */
export function parseImport(text: string, size: number = text.length): ParseResult {
  if (size > TRANSFER_MAX_BYTES) return { ok: false, error: 'too-large' };
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    return { ok: false, error: 'not-json' };
  }
  if (
    typeof raw !== 'object' ||
    raw === null ||
    (raw as { format?: unknown }).format !== TRANSFER_FORMAT
  ) {
    return { ok: false, error: 'wrong-format' };
  }
  const version = (raw as { schemaVersion?: unknown }).schemaVersion;
  if (typeof version === 'number' && version > TRANSFER_VERSION) {
    return { ok: false, error: 'newer-version' };
  }
  const parsed = transferSchema.safeParse(raw);
  if (!parsed.success) return { ok: false, error: 'invalid' };
  return { ok: true, file: parsed.data };
}

const later = <T extends { lastDay: number | null }>(a: T, b: T): T => {
  if (a.lastDay === null) return b;
  if (b.lastDay === null) return a;
  return b.lastDay > a.lastDay ? b : a;
};

/**
 * "Keep the best of both": importing never lowers what the learner already has. XP and plays are
 * counters with no per-game history, so they cannot be added without double-counting a file that
 * came from this very device; the larger value wins instead.
 */
export function mergeProgress(local: ProgressData, incoming: ProgressData): ProgressData {
  const activities = { ...local.activities };
  for (const [activityId, theirs] of Object.entries(incoming.activities)) {
    const mine = activities[activityId];
    activities[activityId] = mine
      ? {
          stars: Math.max(mine.stars, theirs.stars) as 1 | 2 | 3,
          bestAccuracy: Math.max(mine.bestAccuracy, theirs.bestAccuracy),
          plays: Math.max(mine.plays, theirs.plays),
          lastPlayed: Math.max(mine.lastPlayed, theirs.lastPlayed),
        }
      : theirs;
  }

  const mistakes = { ...local.mistakes };
  for (const [key, theirs] of Object.entries(incoming.mistakes)) {
    const mine = mistakes[key];
    const newer = !mine || theirs.lastSeen > mine.lastSeen ? theirs : mine;
    mistakes[key] = {
      ...newer,
      wrongCount: Math.max(mine?.wrongCount ?? 0, theirs.wrongCount),
    };
  }

  const streak = later(local.streak, incoming.streak);
  const daily =
    incoming.daily.day > local.daily.day
      ? incoming.daily
      : incoming.daily.day === local.daily.day
        ? { day: local.daily.day, xp: Math.max(local.daily.xp, incoming.daily.xp) }
        : local.daily;

  const lastPlayed = (activityId: string | null) =>
    activityId === null ? -1 : (activities[activityId]?.lastPlayed ?? -1);
  const lastActivityId =
    lastPlayed(incoming.lastActivityId) > lastPlayed(local.lastActivityId)
      ? incoming.lastActivityId
      : (local.lastActivityId ?? incoming.lastActivityId);

  return {
    xp: Math.max(local.xp, incoming.xp),
    streak: {
      current: streak.current,
      longest: Math.max(local.streak.longest, incoming.streak.longest, streak.current),
      lastDay: streak.lastDay,
    },
    activities,
    mistakes,
    lastActivityId,
    daily,
  };
}

export interface TransferSummary {
  exportedAt: string;
  xp: number;
  games: number;
  mistakes: number;
}

export const summarize = (file: TransferFile): TransferSummary => ({
  exportedAt: file.exportedAt,
  xp: file.progress.xp,
  games: Object.keys(file.progress.activities).length,
  mistakes: Object.keys(file.progress.mistakes).length,
});
