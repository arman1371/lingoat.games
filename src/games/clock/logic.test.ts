import { createRng } from '@/lib/rng';
import { informalTime, parseTime, formalTime } from '@/lib/german/time';
import { informalTimeFr, formalTimeFr } from '@/lib/french/time';
import { buildClockOptions, sameTime, wrapHour, wrapMinute } from './logic';

describe('clock logic', () => {
  it.each(['informal', 'formal'] as const)(
    'builds four unique %s options including the right one',
    (style) => {
      for (const time of ['03:00', '07:30', '14:20', '23:55', '00:05']) {
        for (let seed = 0; seed < 5; seed++) {
          const t = parseTime(time);
          const options = buildClockOptions(t, style, createRng(seed));
          const correct = style === 'formal' ? formalTime(t) : informalTime(t);
          expect(options).toHaveLength(4);
          expect(new Set(options).size).toBe(4);
          expect(options).toContain(correct);
        }
      }
    },
  );

  it.each(['informal', 'formal'] as const)(
    'builds four unique French %s options including the right one',
    (style) => {
      for (const time of ['03:00', '07:30', '12:00', '14:20', '23:55', '00:05', '11:45']) {
        for (let seed = 0; seed < 5; seed++) {
          const t = parseTime(time);
          const options = buildClockOptions(t, style, createRng(seed), 'fr');
          const correct = style === 'formal' ? formalTimeFr(t) : informalTimeFr(t);
          expect(options).toHaveLength(4);
          expect(new Set(options).size).toBe(4);
          expect(options).toContain(correct);
        }
      }
    },
  );

  it('wraps hours and minutes', () => {
    expect(wrapHour(23, 1)).toBe(0);
    expect(wrapHour(0, -1)).toBe(23);
    expect(wrapMinute(55, 5)).toBe(0);
    expect(wrapMinute(0, -5)).toBe(55);
  });

  it('compares times by style', () => {
    expect(sameTime({ hour: 2, minute: 30 }, { hour: 14, minute: 30 }, 'informal')).toBe(true);
    expect(sameTime({ hour: 2, minute: 30 }, { hour: 14, minute: 30 }, 'formal')).toBe(false);
    expect(sameTime({ hour: 2, minute: 30 }, { hour: 2, minute: 35 }, 'informal')).toBe(false);
  });
});
