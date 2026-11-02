import type { FrenchPronoun } from '@/lib/persons';
import { subjunctiveFr } from '@/lib/french/subjunctive';
import { conditionnel, plusQueParfait } from '@/lib/french/moreTenses';
import { unit as baseUnit } from '../builders';
import type { ConfigOf } from '../schema';

export type { UnitContent } from './types';

/** `unit()` of the level: every unit passes the level id so the content test can check the prefix. */
export const unitFr = (u: Parameters<typeof baseUnit>[0]) => baseUnit({ levelId: 'fr-b1-1', ...u });

type Table = ConfigOf<'conjugation'>['tables'][number];

/**
 * A present-subjunctive table (the forms after "que", generated from `src/lib/french/subjunctive`);
 * `blanks` are the persons to fill in.
 */
export function subjTable(
  id: string,
  verb: string,
  meaning: string,
  blanks: FrenchPronoun[],
): Table {
  return {
    id,
    verb: `que … ${verb}`,
    meaning: `${meaning} (subjonctif présent)`,
    forms: subjunctiveFr(verb),
    blanks,
  };
}

/** A plus-que-parfait table (avais fini, étions allés). */
export function pqpTable(
  id: string,
  verb: string,
  meaning: string,
  blanks: FrenchPronoun[],
): Table {
  return {
    id,
    verb,
    meaning: `${meaning} – plus-que-parfait`,
    forms: plusQueParfait(verb),
    blanks,
  };
}

/** A conditionnel présent table (je parlerais). */
export function condTable(
  id: string,
  verb: string,
  meaning: string,
  blanks: FrenchPronoun[],
): Table {
  return { id, verb, meaning: `${meaning} – conditionnel`, forms: conditionnel(verb), blanks };
}

/**
 * The short authoring forms of A1.2 / A2.1 (gap, q, sent, say, you, tf, heard, dictation, sortCards) and the
 * generated tense tables (passé composé, imparfait, futur simple) are shared with the earlier French levels.
 */
export {
  activity,
  dictation,
  futurTable,
  gap,
  heard,
  imparfaitTable,
  meta,
  pcReflexiveTable,
  pcTable,
  q,
  say,
  sent,
  sortCards,
  tf,
  typed,
  withLesson,
  you,
} from '../fr-a2-1/helpers';
