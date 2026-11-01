import { FRENCH_PRONOUNS } from '../persons';
import { conditionnel } from './conditional';
import { conjugateFr, type FrenchForms } from './conjugation';
import { ETRE_VERBS, futurSimple, imparfait, participle } from './tenses';

const PLURAL = new Set(['nous', 'vous', 'ils/elles']);

/** An auxiliary tense plus the participle: the participle agrees (allé, allés) when the verb takes être. */
function withAuxiliary(
  verb: string,
  aux: (auxiliary: string) => FrenchForms,
  opts: { feminine?: boolean } = {},
): FrenchForms {
  const etre = ETRE_VERBS.has(verb);
  const forms = aux(etre ? 'être' : 'avoir');
  const base = participle(verb);
  return Object.fromEntries(
    FRENCH_PRONOUNS.map((p) => {
      let part = base;
      if (etre) {
        if (opts.feminine) part = `${part}e`;
        if (PLURAL.has(p)) part = `${part}s`;
      }
      return [p, `${forms[p]} ${part}`];
    }),
  ) as FrenchForms;
}

/** Plus-que-parfait: j’avais mangé, elle était partie. */
export const plusQueParfait = (verb: string, opts: { feminine?: boolean } = {}): FrenchForms =>
  withAuxiliary(verb, imparfait, opts);

/** Conditionnel passé: j’aurais mangé, elle serait partie. */
export const conditionnelPasse = (verb: string, opts: { feminine?: boolean } = {}): FrenchForms =>
  withAuxiliary(verb, conditionnel, opts);

/** Futur antérieur: j’aurai mangé, elle sera partie. */
export const futurAnterieur = (verb: string, opts: { feminine?: boolean } = {}): FrenchForms =>
  withAuxiliary(verb, futurSimple, opts);

const PARTICIPE_PRESENT: Record<string, string> = {
  être: 'étant',
  avoir: 'ayant',
  savoir: 'sachant',
};

/** Participe présent: the nous form of the present without -ons, plus -ant (finissant, mangeant). */
export function participePresent(verb: string): string {
  const known = PARTICIPE_PRESENT[verb];
  if (known) return known;
  return `${conjugateFr(verb)['nous'].slice(0, -3)}ant`;
}

/** Gérondif: en + participe présent (en mangeant, en finissant). */
export const gerondif = (verb: string): string => `en ${participePresent(verb)}`;
