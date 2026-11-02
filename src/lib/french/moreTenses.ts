import { FRENCH_PRONOUNS } from '../persons';
import type { FrenchForms } from './conjugation';
import { ETRE_VERBS, futurSimple, imparfait, participle } from './tenses';

const PLURAL = new Set(['nous', 'vous', 'ils/elles']);
const COND_ENDINGS = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'] as const;

/** Plus-que-parfait: imparfait of avoir / être plus the participle (masculine forms for être verbs). */
export function plusQueParfait(verb: string, opts: { feminine?: boolean } = {}): FrenchForms {
  const etre = ETRE_VERBS.has(verb);
  const aux = imparfait(etre ? 'être' : 'avoir');
  const base = participle(verb);
  return Object.fromEntries(
    FRENCH_PRONOUNS.map((p) => {
      let part = base;
      if (etre) {
        if (opts.feminine) part = `${part}e`;
        if (PLURAL.has(p)) part = `${part}s`;
      }
      return [p, `${aux[p]} ${part}`];
    }),
  ) as FrenchForms;
}

/** Conditionnel présent: the future stem plus the imparfait endings (je parlerais, il viendrait). */
export function conditionnel(verb: string): FrenchForms {
  const stem = futurSimple(verb).nous.slice(0, -3);
  return Object.fromEntries(
    FRENCH_PRONOUNS.map((p, i) => [p, `${stem}${COND_ENDINGS[i]}`]),
  ) as FrenchForms;
}
