import {
  NOTE_MAX,
  REPORT_TYPES,
  REPORT_TYPE_META,
  cleanNote,
  reportKey,
  validateReport,
} from './report';

const good = { type: 'image', activityId: 'a1-1-food-quiz', appVersion: '0.1.0+abc1234' };

describe('validateReport', () => {
  it('accepts the minimum and keeps only the known fields', () => {
    const r = validateReport({ ...good, evil: '<script>', token: 'x' });
    expect(r).toEqual({ ok: true, report: good });
  });

  it('accepts every field', () => {
    const full = {
      ...good,
      itemId: 'a1-1-apfel',
      levelId: 'a1-1',
      unitId: 'a1-1-food',
      gameType: 'quiz',
      note: 'Looks like a pear',
    };
    expect(validateReport(full)).toEqual({ ok: true, report: full });
  });

  it('every problem type has a prefix and a report: label', () => {
    for (const type of REPORT_TYPES) {
      expect(validateReport({ ...good, type }).ok).toBe(true);
      expect(REPORT_TYPE_META[type].label).toBe(`report:${type}`);
    }
  });

  it.each([
    [null, 'invalid'],
    [[], 'invalid'],
    ['text', 'invalid'],
    [{ ...good, type: 'spam' }, 'type'],
    [{ ...good, type: undefined }, 'type'],
    [{ ...good, activityId: 'A1 Quiz' }, 'activityId'],
    [{ ...good, activityId: 'a'.repeat(101) }, 'activityId'],
    [{ ...good, activityId: undefined }, 'activityId'],
    [{ ...good, itemId: '../x' }, 'itemId'],
    [{ ...good, levelId: 3 }, 'levelId'],
    [{ ...good, unitId: '' }, 'unitId'],
    [{ ...good, gameType: 'Quiz!' }, 'gameType'],
    [{ ...good, appVersion: '1 0' }, 'appVersion'],
    [{ ...good, appVersion: undefined }, 'appVersion'],
    [{ ...good, note: 42 }, 'note'],
    [{ ...good, note: 'x'.repeat(NOTE_MAX * 4 + 1) }, 'note'],
  ])('rejects %j with %s', (input, error) => {
    expect(validateReport(input)).toEqual({ ok: false, error });
  });

  it('cuts a long note and drops an empty one', () => {
    const long = validateReport({ ...good, note: 'a'.repeat(NOTE_MAX * 2) });
    expect(long.ok && long.report.note).toHaveLength(NOTE_MAX);
    const blank = validateReport({ ...good, note: '  \n\t ' });
    expect(blank.ok && 'note' in blank.report).toBe(false);
  });
});

describe('cleanNote', () => {
  it('turns line breaks and control characters into single spaces', () => {
    expect(cleanNote(' a\r\n\r\nb\u0000c d\t\te ')).toBe('a b c d e');
  });
  it('cannot close a code fence, because there are no lines left', () => {
    expect(cleanNote('x\n~~~\n@evil')).toBe('x ~~~ @evil');
  });
});

describe('reportKey', () => {
  it('is the same for the same problem and differs by type, activity or item', () => {
    const base = { type: 'image', activityId: 'a', itemId: 'x' } as const;
    expect(reportKey(base)).toBe(reportKey({ ...base }));
    expect(reportKey({ ...base, type: 'audio' })).not.toBe(reportKey(base));
    expect(reportKey({ ...base, activityId: 'b' })).not.toBe(reportKey(base));
    expect(reportKey({ type: 'image', activityId: 'a' })).not.toBe(reportKey(base));
  });
});
