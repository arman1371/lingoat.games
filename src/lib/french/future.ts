import { FRENCH_PRONOUNS } from '../persons';
import type { FrenchForms } from './conjugation';

/** Verbs whose future / conditional stem is not the infinitive (the stem ends in r). */
const IRREGULAR_STEM: Record<string, string> = {
  être: 'ser',
  avoir: 'aur',
  aller: 'ir',
  faire: 'fer',
  savoir: 'saur',
  voir: 'verr',
  envoyer: 'enverr',
  pouvoir: 'pourr',
  vouloir: 'voudr',
  devoir: 'devr',
  falloir: 'faudr',
  valoir: 'vaudr',
  venir: 'viendr',
  devenir: 'deviendr',
  revenir: 'reviendr',
  tenir: 'tiendr',
  obtenir: 'obtiendr',
  courir: 'courr',
  mourir: 'mourr',
  recevoir: 'recevr',
  apercevoir: 'apercevr',
  cueillir: 'cueiller',
  acquérir: 'acquerr',
};

/** -er verbs spelled with a double consonant or i before the silent e (j’appellerai, je paierai). */
const ER_SPELLING: Record<string, string> = {
  appeler: 'appell',
  jeter: 'jett',
  payer: 'pai',
  nettoyer: 'nettoi',
  essayer: 'essai',
  employer: 'emploi',
  acheter: 'achèt',
  lever: 'lèv',
  geler: 'gèl',
};

const FUTURE_ENDINGS = ['ai', 'as', 'a', 'ons', 'ez', 'ont'] as const;
const CONDITIONAL_ENDINGS = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'] as const;

/** The stem shared by the simple future and the present conditional: parler → parler, prendre → prendr. */
export function futureStem(verb: string): string {
  const irregular = IRREGULAR_STEM[verb];
  if (irregular) return irregular;
  const spelled = ER_SPELLING[verb];
  if (spelled) return `${spelled}er`;
  return verb.endsWith('re') ? verb.slice(0, -1) : verb;
}

const build = (verb: string, endings: readonly string[]): FrenchForms =>
  Object.fromEntries(
    FRENCH_PRONOUNS.map((p, i) => [p, `${futureStem(verb)}${endings[i]}`]),
  ) as FrenchForms;

/** Futur simple: j’irai, tu feras, il prendra … */
export const futureFr = (verb: string): FrenchForms => build(verb, FUTURE_ENDINGS);

/** Conditionnel présent: j’irais, tu ferais, il prendrait … */
export const conditionalFr = (verb: string): FrenchForms => build(verb, CONDITIONAL_ENDINGS);
