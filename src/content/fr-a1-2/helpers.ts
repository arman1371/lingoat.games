import { passeComposeAvoir } from '@/lib/french/passeCompose';
import { passeCompose } from '@/lib/french/tenses';
import { FRENCH_PRONOUNS, type FrenchPronoun } from '@/lib/persons';
import { unit as baseUnit } from '../builders';
import type { ConfigOf } from '../schema';

export { frTable } from '../fr-a1-1/helpers';
export type { UnitContent } from './types';

/** `unit()` of the level: every unit passes the level id so the content test can check the prefix. */
export const unitFr = (u: Parameters<typeof baseUnit>[0]) => baseUnit({ levelId: 'fr-a1-2', ...u });

/** A passé composé table with avoir (j’ai mangé …); `blanks` are the persons to fill in. */
export function pcTable(
  id: string,
  verb: string,
  participle: string,
  meaning: string,
  blanks: FrenchPronoun[],
): ConfigOf<'conjugation'>['tables'][number] {
  return { id, verb, meaning, forms: passeComposeAvoir(participle), blanks };
}

// ---- short forms for units 4 to 8 ---------------------------------------------------------------------

export { gap, meta, q, say, sent, tf, typed, you } from '../a1-2/helpers';

/** Sort-it cards: [text, bucket, English meaning] rows; the text is spoken. */
export const sortCards = (
  prefix: string,
  rows: readonly (readonly [text: string, bucket: string, translation: string])[],
) =>
  rows.map(([text, bucket, translation], i) => ({
    id: `${prefix}${i + 1}`,
    text,
    bucket,
    speak: text,
    translation,
  }));

/** A passé composé table with avoir or être (masculine forms: allé, allés), from `passeCompose()`. */
export function pcAnyTable(
  verb: string,
  meaning: string,
  blanks: FrenchPronoun[],
): ConfigOf<'conjugation'>['tables'][number] {
  return {
    id: `pc-${verb}`,
    verb,
    meaning: `${meaning} – passé composé`,
    forms: passeCompose(verb),
    blanks,
  };
}

/** A present-tense table with the six forms written out (for verbs the generator does not know). */
export function presentTable(
  verb: string,
  meaning: string,
  forms: readonly [string, string, string, string, string, string],
  blanks: FrenchPronoun[],
): ConfigOf<'conjugation'>['tables'][number] {
  return {
    id: `pr-${verb}`,
    verb,
    meaning,
    forms: Object.fromEntries(FRENCH_PRONOUNS.map((p, i) => [p, forms[i]])) as Record<
      FrenchPronoun,
      string
    >,
    blanks,
  };
}
