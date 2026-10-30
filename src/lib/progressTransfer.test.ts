import { DEFAULT_SETTINGS } from '@/store/settingsStore';
import { initialProgress, type ProgressData } from '@/store/progressStore';
import {
  applyImport,
  applyImportAll,
  buildExport,
  exportFileName,
  mergeProgress,
  parseImport,
  summarize,
  TRANSFER_FORMAT,
  TRANSFER_MAX_BYTES,
  TRANSFER_VERSION,
} from './progressTransfer';

const progress = (over: Partial<ProgressData> = {}): ProgressData => ({
  ...initialProgress(),
  ...over,
});

const mistake = (activityId: string, itemId: string, over = {}) => ({
  key: `${activityId}::${itemId}`,
  activityId,
  itemId,
  box: 1 as const,
  lastSeen: 10,
  wrongCount: 1,
  ...over,
});

const exported = (over: Partial<ProgressData> = {}) =>
  buildExport(
    DEFAULT_SETTINGS,
    { de: progress(over) },
    {
      appVersion: '1.2.3',
      now: new Date('2026-10-25T10:00:00Z'),
    },
  );

describe('buildExport / parseImport', () => {
  it('writes a versioned file that reads back unchanged', () => {
    const file = exported({ xp: 120, lastActivityId: 'a1' });
    expect(file).toMatchObject({
      format: TRANSFER_FORMAT,
      schemaVersion: TRANSFER_VERSION,
      appVersion: '1.2.3',
      exportedAt: '2026-10-25T10:00:00.000Z',
    });
    expect(parseImport(JSON.stringify(file))).toEqual({ ok: true, file });
  });

  it('names the file after the export day', () => {
    expect(exportFileName(new Date('2026-10-25T23:00:00Z'))).toBe(
      'lingoat-progress-2026-10-25.json',
    );
  });

  it('ignores unknown fields so older apps can read newer files of the same version', () => {
    const file = { ...exported(), extra: 1 };
    expect(parseImport(JSON.stringify(file)).ok).toBe(true);
  });

  it.each([
    ['not json', '{nope', 'not-json'],
    ['a json array', '[1,2]', 'wrong-format'],
    ['null', 'null', 'wrong-format'],
    ['another json file', '{"hello":"world"}', 'wrong-format'],
    ['a newer schema', JSON.stringify({ ...exported(), schemaVersion: 99 }), 'newer-version'],
    ['missing progress', JSON.stringify({ ...exported(), progress: undefined }), 'invalid'],
    ['progress without any language', JSON.stringify({ ...exported(), progress: {} }), 'invalid'],
    [
      'a wrong type',
      JSON.stringify({ ...exported(), progress: { de: { ...progress(), xp: 'lots' } } }),
      'invalid',
    ],
    [
      'negative xp',
      JSON.stringify({ ...exported(), progress: { de: { ...progress(), xp: -5 } } }),
      'invalid',
    ],
    [
      'an impossible star count',
      JSON.stringify(
        exported({
          activities: { a: { stars: 4 as 3, bestAccuracy: 1, plays: 1, lastPlayed: 1 } },
        }),
      ),
      'invalid',
    ],
    [
      'an unknown theme',
      JSON.stringify({ ...exported(), settings: { ...DEFAULT_SETTINGS, theme: 'neon' } }),
      'invalid',
    ],
  ])('rejects %s with a specific error', (_, text, error) => {
    expect(parseImport(text)).toEqual({ ok: false, error });
  });

  it('rejects oversized files before parsing them', () => {
    expect(parseImport('{}', TRANSFER_MAX_BYTES + 1)).toEqual({ ok: false, error: 'too-large' });
  });

  it('summarizes a file for the confirmation', () => {
    const file = exported({
      xp: 40,
      activities: { a: { stars: 3, bestAccuracy: 1, plays: 2, lastPlayed: 5 } },
      mistakes: { 'a::x': mistake('a', 'x') },
    });
    expect(summarize(file)).toEqual({
      exportedAt: '2026-10-25T10:00:00.000Z',
      xp: 40,
      games: 1,
      mistakes: 1,
      languages: [{ language: 'de', xp: 40, games: 1, mistakes: 1 }],
    });
  });

  it('keeps one progress block per language and totals them in the summary', () => {
    const file = buildExport(DEFAULT_SETTINGS, {
      de: progress({ xp: 40 }),
      fr: progress({ xp: 10, mistakes: { 'fr-a::x': mistake('fr-a', 'x') } }),
    });
    const parsed = parseImport(JSON.stringify(file));
    expect(parsed).toEqual({ ok: true, file });
    expect(summarize(file)).toMatchObject({ xp: 50, mistakes: 1 });
    expect(summarize(file).languages.map((l) => l.language)).toEqual(['de', 'fr']);
  });

  it('reads a version 1 file (German only) as the German block', () => {
    const v1 = {
      ...exported({ xp: 77 }),
      schemaVersion: 1,
      progress: progress({ xp: 77 }),
    };
    const parsed = parseImport(JSON.stringify(v1));
    expect(parsed.ok && parsed.file.progress).toEqual({ de: progress({ xp: 77 }) });
  });
});

describe('mergeProgress', () => {
  it('importing into a fresh device takes everything from the file', () => {
    const theirs = progress({
      xp: 90,
      streak: { current: 3, longest: 5, lastDay: 20 },
      activities: { a: { stars: 2, bestAccuracy: 0.8, plays: 4, lastPlayed: 20 } },
      mistakes: { 'a::x': mistake('a', 'x') },
      lastActivityId: 'a',
      daily: { day: 20, xp: 30 },
    });
    expect(mergeProgress(initialProgress(), theirs)).toEqual(theirs);
  });

  it('never lowers xp, stars, accuracy or plays', () => {
    const mine = progress({
      xp: 500,
      activities: {
        a: { stars: 3, bestAccuracy: 1, plays: 9, lastPlayed: 30 },
        b: { stars: 1, bestAccuracy: 0.5, plays: 1, lastPlayed: 5 },
      },
    });
    const theirs = progress({
      xp: 200,
      activities: {
        a: { stars: 1, bestAccuracy: 0.6, plays: 2, lastPlayed: 10 },
        b: { stars: 3, bestAccuracy: 0.95, plays: 4, lastPlayed: 40 },
        c: { stars: 2, bestAccuracy: 0.8, plays: 1, lastPlayed: 7 },
      },
    });
    const merged = mergeProgress(mine, theirs);
    expect(merged.xp).toBe(500);
    expect(merged.activities).toEqual({
      a: { stars: 3, bestAccuracy: 1, plays: 9, lastPlayed: 30 },
      b: { stars: 3, bestAccuracy: 0.95, plays: 4, lastPlayed: 40 },
      c: { stars: 2, bestAccuracy: 0.8, plays: 1, lastPlayed: 7 },
    });
  });

  it('importing your own export again changes nothing', () => {
    const mine = progress({
      xp: 77,
      streak: { current: 2, longest: 4, lastDay: 9 },
      activities: { a: { stars: 2, bestAccuracy: 0.8, plays: 3, lastPlayed: 9 } },
      mistakes: { 'a::x': mistake('a', 'x', { wrongCount: 3 }) },
      lastActivityId: 'a',
      daily: { day: 9, xp: 20 },
    });
    expect(mergeProgress(mine, structuredClone(mine))).toEqual(mine);
  });

  it('keeps the more recent mistake and the highest wrong count', () => {
    const merged = mergeProgress(
      progress({ mistakes: { 'a::x': mistake('a', 'x', { box: 3, lastSeen: 5, wrongCount: 4 }) } }),
      progress({
        mistakes: {
          'a::x': mistake('a', 'x', { box: 2, lastSeen: 8, wrongCount: 2 }),
          'a::y': mistake('a', 'y'),
        },
      }),
    );
    expect(merged.mistakes['a::x']).toMatchObject({ box: 2, lastSeen: 8, wrongCount: 4 });
    expect(Object.keys(merged.mistakes).sort()).toEqual(['a::x', 'a::y']);
  });

  it('follows the streak that was played last and keeps the longest ever', () => {
    const merged = mergeProgress(
      progress({ streak: { current: 7, longest: 7, lastDay: 10 } }),
      progress({ streak: { current: 2, longest: 12, lastDay: 15 } }),
    );
    expect(merged.streak).toEqual({ current: 2, longest: 12, lastDay: 15 });
    expect(
      mergeProgress(progress(), progress({ streak: { current: 1, longest: 1, lastDay: 3 } }))
        .streak,
    ).toEqual({ current: 1, longest: 1, lastDay: 3 });
  });

  it('keeps the later day for the daily goal and the higher xp on the same day', () => {
    const day = (d: number, xp: number) => progress({ daily: { day: d, xp } });
    expect(mergeProgress(day(5, 40), day(6, 10)).daily).toEqual({ day: 6, xp: 10 });
    expect(mergeProgress(day(6, 10), day(5, 40)).daily).toEqual({ day: 6, xp: 10 });
    expect(mergeProgress(day(6, 10), day(6, 25)).daily).toEqual({ day: 6, xp: 25 });
  });

  it('continues with whichever game was played last', () => {
    const base = {
      activities: {
        a: { stars: 1 as const, bestAccuracy: 0.5, plays: 1, lastPlayed: 3 },
        b: { stars: 1 as const, bestAccuracy: 0.5, plays: 1, lastPlayed: 9 },
      },
    };
    expect(
      mergeProgress(
        progress({ ...base, lastActivityId: 'a' }),
        progress({ ...base, lastActivityId: 'b' }),
      ).lastActivityId,
    ).toBe('b');
    expect(
      mergeProgress(progress({ ...base, lastActivityId: 'b' }), progress()).lastActivityId,
    ).toBe('b');
  });
});

describe('applyImportAll', () => {
  const local = { de: progress({ xp: 100 }), fr: progress({ xp: 30 }) };

  it('replaces only the languages that are in the file', () => {
    expect(applyImportAll(local, { de: progress({ xp: 5 }) }, 'replace')).toEqual({
      de: progress({ xp: 5 }),
    });
  });

  it('merges each language on its own', () => {
    const out = applyImportAll(
      local,
      { de: progress({ xp: 5 }), fr: progress({ xp: 90 }) },
      'merge',
    );
    expect(out.de?.xp).toBe(100);
    expect(out.fr?.xp).toBe(90);
  });
});

describe('applyImport', () => {
  const mine = progress({
    xp: 500,
    activities: { a: { stars: 3, bestAccuracy: 1, plays: 9, lastPlayed: 30 } },
  });
  const theirs = progress({
    xp: 200,
    activities: { b: { stars: 1, bestAccuracy: 0.5, plays: 1, lastPlayed: 5 } },
  });

  it('merge keeps the best of both', () => {
    const merged = applyImport(mine, theirs, 'merge');
    expect(merged.xp).toBe(500);
    expect(Object.keys(merged.activities).sort()).toEqual(['a', 'b']);
  });

  it('replace makes this device an exact copy of the file', () => {
    expect(applyImport(mine, theirs, 'replace')).toEqual(theirs);
  });
});
