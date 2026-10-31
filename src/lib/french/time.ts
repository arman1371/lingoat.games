import type { Clock } from '@/lib/german/time';
import { numberToFrench } from './numbers';

/** "une heure", "quatorze heures": only 1 o'clock is singular, and it is feminine. */
function hours(n: number): string {
  return n === 1 ? 'une heure' : `${numberToFrench(n)} heures`;
}

/** Midnight and noon have their own words; every other hour is "<number> heure(s)". */
function hourWord(hour: number, twelveHour: boolean): string {
  const h24 = ((hour % 24) + 24) % 24;
  if (h24 === 0) return 'minuit';
  if (h24 === 12) return 'midi';
  return hours(twelveHour ? h24 % 12 : h24);
}

/** Minutes as they follow the hour: "une" agrees with the feminine "minute" (une heure vingt et une). */
const minutes = (m: number): string => numberToFrench(m).replace(/\bun$/, 'une');

/** Official, 24-hour style: 14:30 → "quatorze heures trente", 9:00 → "neuf heures", 0:00 → "minuit". */
export function formalTimeFr({ hour, minute }: Clock): string {
  const h = hourWord(hour, false);
  if (minute === 0) return h;
  // "zéro heure trente" is the 24-hour reading; midnight alone is "minuit"
  const head = h === 'minuit' ? 'zéro heure' : h;
  return `${head} ${minutes(minute)}`;
}

/**
 * Everyday style (12-hour): 14:30 → "deux heures et demie", 14:15 → "deux heures et quart",
 * 14:45 → "trois heures moins le quart", 14:35 → "trois heures moins vingt-cinq", 12:30 → "midi et demi".
 * Minutes that are no multiple of five fall back to the official reading.
 */
export function informalTimeFr(clock: Clock): string {
  const { hour, minute } = clock;
  const cur = hourWord(hour, true);
  const next = hourWord(hour + 1, true);
  switch (minute) {
    case 0:
      return cur;
    case 15:
      return `${cur} et quart`;
    case 30:
      return `${cur} et ${cur === 'midi' || cur === 'minuit' ? 'demi' : 'demie'}`;
    case 45:
      return `${next} moins le quart`;
    case 5:
    case 10:
    case 20:
    case 25:
      return `${cur} ${numberToFrench(minute)}`;
    case 35:
    case 40:
    case 50:
    case 55:
      return `${next} moins ${numberToFrench(60 - minute)}`;
    default:
      return formalTimeFr(clock);
  }
}

export function timeToFrench(clock: Clock, style: 'formal' | 'informal'): string {
  return style === 'formal' ? formalTimeFr(clock) : informalTimeFr(clock);
}
