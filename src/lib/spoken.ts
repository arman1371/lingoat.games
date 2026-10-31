import type { LanguageId } from '@/content/languages';
import { priceToFrench } from './french/numbers';
import { timeToFrench } from './french/time';
import { priceToGerman } from './german/numbers';
import { timeToGerman, type Clock } from './german/time';

/** How a clock time is said in the language being learned (the Clock master and its solvers). */
export function timeToWords(
  clock: Clock,
  style: 'formal' | 'informal',
  language: LanguageId,
): string {
  return language === 'fr' ? timeToFrench(clock, style) : timeToGerman(clock, style);
}

/** How a price in cents is said in the language being learned (the Market stand and its solvers). */
export function priceToWords(cents: number, language: LanguageId): string {
  return language === 'fr' ? priceToFrench(cents) : priceToGerman(cents);
}
