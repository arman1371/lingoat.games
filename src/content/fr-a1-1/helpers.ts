import { conjugateFr, reflexiveFr } from '@/lib/french/conjugation';
import type { FrenchPronoun } from '@/lib/persons';
import { unit as baseUnit } from '../builders';
import type { ConfigOf } from '../schema';

export type { UnitContent } from './types';

/** `unit()` of the level: every unit passes the level id so the content test can check the prefix. */
export const unitFr = (u: Parameters<typeof baseUnit>[0]) => baseUnit({ levelId: 'fr-a1-1', ...u });

type Table = ConfigOf<'conjugation'>['tables'][number];

/** A verb table with the forms generated from `src/lib/french`; `blanks` are the persons to fill in. */
export function frTable(
  id: string,
  verb: string,
  meaning: string,
  blanks: FrenchPronoun[],
  reflexive = false,
): Table {
  const forms = reflexive ? reflexiveFr(verb) : conjugateFr(verb);
  return {
    id,
    verb: reflexive ? `${/^[aeiouhéè]/i.test(verb) ? 's’' : 'se '}${verb}` : verb,
    meaning,
    forms,
    blanks,
  };
}
