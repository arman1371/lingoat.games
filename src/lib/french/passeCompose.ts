import { FRENCH_PRONOUNS } from '../persons';
import { conjugateFr, type FrenchForms } from './conjugation';

/** Passé composé with avoir: the present of avoir plus the past participle (j’ai mangé, nous avons fini). */
export function passeComposeAvoir(participle: string): FrenchForms {
  const avoir = conjugateFr('avoir');
  return Object.fromEntries(
    FRENCH_PRONOUNS.map((p) => [p, `${avoir[p]} ${participle}`]),
  ) as FrenchForms;
}
