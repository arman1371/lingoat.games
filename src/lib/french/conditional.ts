import { FRENCH_PRONOUNS } from '../persons';
import type { FrenchForms } from './conjugation';
import { futurSimple } from './tenses';

const CONDITIONAL_ENDINGS = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'] as const;

/** Conditionnel présent: the stem of the futur simple with the endings of the imparfait (j’irais, tu ferais). */
export function conditionnel(verb: string): FrenchForms {
  const stem = futurSimple(verb)['je'].slice(0, -2);
  return Object.fromEntries(
    FRENCH_PRONOUNS.map((p, i) => [p, `${stem}${CONDITIONAL_ENDINGS[i]}`]),
  ) as FrenchForms;
}
