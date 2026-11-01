import { FRENCH_PRONOUNS, type FrenchPronoun } from '@/lib/persons';
import { unit as baseUnit } from '../builders';
import type { ConfigOf } from '../schema';

/**
 * Authoring helpers of French C1.1. The ones below are language neutral (gap fill, quiz, sentence builder,
 * blitz, dialogue and listening items); only the unit and the conjugation tables know about French.
 */
export {
  activity,
  dictation,
  gap,
  heard,
  meta,
  q,
  say,
  sent,
  sortItems,
  tf,
  typed,
  you,
} from '../a1-2/helpers';
export { hint } from '../b1-2/helpers';
export type { UnitContent } from './types';

/** `unit()` of the level: every unit passes the level id so the content test can check the prefix. */
export const unitFr = (u: Parameters<typeof baseUnit>[0]) => baseUnit({ levelId: 'fr-c1-1', ...u });

type Table = ConfigOf<'conjugation'>['tables'][number];

/**
 * A conjugation table with the six forms typed by hand (je, tu, il/elle/on, nous, vous, ils/elles). Used for
 * the tenses and moods that `src/lib/french` does not generate (subjunctive, passé simple …).
 */
export function frCustomTable(
  id: string,
  verb: string,
  meaning: string,
  forms: readonly [string, string, string, string, string, string],
  blanks: FrenchPronoun[],
): Table {
  return {
    id,
    verb,
    meaning,
    forms: Object.fromEntries(FRENCH_PRONOUNS.map((p, i) => [p, forms[i]])) as Record<
      FrenchPronoun,
      string
    >,
    blanks,
  };
}
