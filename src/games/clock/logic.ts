import { pickMany, shuffle, type Rng } from '@/lib/rng';
import type { Clock } from '@/lib/german/time';
import type { LanguageId } from '@/content/languages';
import { timeToWords } from '@/lib/spoken';

export type TimeStyle = 'formal' | 'informal';

/** Four distinct phrases (correct + 3 near-miss distractors) for "read the clock". */
export function buildClockOptions(
  target: Clock,
  style: TimeStyle,
  rng: Rng,
  language: LanguageId = 'de',
): string[] {
  const correct = timeToWords(target, style, language);
  const step = style === 'informal' ? 5 : 5;
  const candidates: Clock[] = [];
  const add = (hour: number, minute: number) => {
    const h = ((hour % 24) + 24) % 24;
    const m = ((minute % 60) + 60) % 60;
    candidates.push({ hour: h, minute: m });
  };
  // classic confusions: swap halb/Viertel, ±1 hour, ±5/10/15/30 minutes
  add(target.hour + 1, target.minute);
  add(target.hour - 1, target.minute);
  add(target.hour, target.minute + step);
  add(target.hour, target.minute - step);
  add(target.hour, target.minute + 30);
  add(target.hour, target.minute + 15);
  add(target.hour + 1, target.minute + 30);
  add(target.hour + 2, target.minute);
  const phrases = new Set<string>();
  for (const c of shuffle(candidates, rng)) {
    const phrase = timeToWords(c, style, language);
    if (phrase !== correct) phrases.add(phrase);
    if (phrases.size >= 3) break;
  }
  return shuffle([correct, ...pickMany([...phrases], 3, rng)], rng);
}

export function wrapHour(hour: number, delta: number): number {
  return (((hour + delta) % 24) + 24) % 24;
}

export function wrapMinute(minute: number, delta: number): number {
  return (((minute + delta) % 60) + 60) % 60;
}

/** Informal times are 12-hour, so 02:30 and 14:30 are both "halb drei". */
export function sameTime(a: Clock, b: Clock, style: TimeStyle): boolean {
  if (a.minute !== b.minute) return false;
  return style === 'formal' ? a.hour === b.hour : a.hour % 12 === b.hour % 12;
}
