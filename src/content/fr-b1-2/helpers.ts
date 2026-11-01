import type { FrenchForms } from '@/lib/french/conjugation';
import { conditionalFr, futureFr } from '@/lib/french/future';
import type { FrenchPronoun } from '@/lib/persons';
import { unit as baseUnit } from '../builders';
import type { ConfigOf } from '../schema';

export type { UnitContent } from './types';

/** `unit()` of the level: every unit passes the level id so the content test can check the prefix. */
export const unitFr = (u: Parameters<typeof baseUnit>[0]) => baseUnit({ levelId: 'fr-b1-2', ...u });

type Table = ConfigOf<'conjugation'>['tables'][number];

/** A table of generated forms; `label` names the tense next to the verb ("aller (futur simple)"). */
function tense(
  id: string,
  verb: string,
  label: string,
  meaning: string,
  forms: FrenchForms,
  blanks: FrenchPronoun[],
): Table {
  return { id, verb: `${verb} (${label})`, meaning, forms, blanks };
}

/** Futur simple table: j’irai, tu iras … */
export const futurTable = (
  id: string,
  verb: string,
  meaning: string,
  blanks: FrenchPronoun[],
): Table => tense(id, verb, 'futur simple', meaning, futureFr(verb), blanks);

/** Conditionnel présent table: j’irais, tu irais … */
export const conditionnelTable = (
  id: string,
  verb: string,
  meaning: string,
  blanks: FrenchPronoun[],
): Table => tense(id, verb, 'conditionnel', meaning, conditionalFr(verb), blanks);
