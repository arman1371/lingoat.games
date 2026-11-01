import { passeComposeAvoir } from '@/lib/french/passeCompose';
import type { FrenchPronoun } from '@/lib/persons';
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
