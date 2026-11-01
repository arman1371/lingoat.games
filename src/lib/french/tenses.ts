import { FRENCH_PRONOUNS } from '../persons';
import { conjugateFr, type FrenchForms } from './conjugation';

/**
 * French compound and simple past/future tenses (passé composé, imparfait, futur simple), generated from the
 * infinitive. Present-tense forms come from `conjugation.ts`; verbs it does not know are listed here.
 */

const forms = (...f: [string, string, string, string, string, string]): FrenchForms =>
  Object.fromEntries(FRENCH_PRONOUNS.map((p, i) => [p, f[i]])) as FrenchForms;

/** The nous form of the present, from which the imparfait stem is taken (nous finissons → finiss-). */
const NOUS: Record<string, string> = {
  dire: 'disons',
  voir: 'voyons',
  mettre: 'mettons',
  partir: 'partons',
  sortir: 'sortons',
  lire: 'lisons',
  écrire: 'écrivons',
  décrire: 'décrivons',
  connaître: 'connaissons',
  croire: 'croyons',
  vivre: 'vivons',
  devoir: 'devons',
  recevoir: 'recevons',
  ouvrir: 'ouvrons',
  offrir: 'offrons',
  comprendre: 'comprenons',
  apprendre: 'apprenons',
  dormir: 'dormons',
  courir: 'courons',
  suivre: 'suivons',
  naître: 'naissons',
  obtenir: 'obtenons',
  devenir: 'devenons',
  revenir: 'revenons',
  tenir: 'tenons',
  rire: 'rions',
  plaire: 'plaisons',
  mourir: 'mourons',
  vendre: 'vendons',
  attendre: 'attendons',
  répondre: 'répondons',
  perdre: 'perdons',
  entendre: 'entendons',
  descendre: 'descendons',
  rendre: 'rendons',
};

const IMPARFAIT_ENDINGS = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'] as const;

/** Spelling that keeps the sound before -ions / -iez: nous mangions, nous commencions. */
function beforeI(stem: string): string {
  if (stem.endsWith('ge')) return stem.slice(0, -1);
  if (stem.endsWith('ç')) return `${stem.slice(0, -1)}c`;
  return stem;
}

/** The stem of the imparfait: the nous form of the present without -ons (être is the one exception: ét-). */
function imparfaitStem(verb: string): string {
  if (verb === 'être') return 'ét';
  const nous = NOUS[verb] ?? conjugateFr(verb).nous;
  return nous.slice(0, -3);
}

/** Imparfait: je mangeais, nous finissions, il était. */
export function imparfait(verb: string): FrenchForms {
  const stem = imparfaitStem(verb);
  const out = IMPARFAIT_ENDINGS.map((e, i) => `${i === 3 || i === 4 ? beforeI(stem) : stem}${e}`);
  return forms(...(out as Parameters<typeof forms>));
}

/** Verbs whose future stem is not the infinitive. */
const FUTURE_STEM: Record<string, string> = {
  être: 'ser',
  avoir: 'aur',
  aller: 'ir',
  faire: 'fer',
  venir: 'viendr',
  devenir: 'deviendr',
  revenir: 'reviendr',
  obtenir: 'obtiendr',
  tenir: 'tiendr',
  voir: 'verr',
  pouvoir: 'pourr',
  vouloir: 'voudr',
  savoir: 'saur',
  devoir: 'devr',
  recevoir: 'recevr',
  envoyer: 'enverr',
  courir: 'courr',
  mourir: 'mourr',
  acheter: 'achèter',
  lever: 'lèver',
  appeler: 'appeller',
  jeter: 'jetter',
  payer: 'paier',
  nettoyer: 'nettoier',
  employer: 'emploier',
  essayer: 'essaier',
};

const FUTURE_ENDINGS = ['ai', 'as', 'a', 'ons', 'ez', 'ont'] as const;

/** Futur simple: infinitive (or irregular stem) plus ai, as, a, ons, ez, ont. */
export function futurSimple(verb: string): FrenchForms {
  const stem = FUTURE_STEM[verb] ?? (verb.endsWith('re') ? verb.slice(0, -1) : verb);
  return forms(...(FUTURE_ENDINGS.map((e) => `${stem}${e}`) as Parameters<typeof forms>));
}

/** Past participles that are not -é / -i / -u from the infinitive. */
const PARTICIPLE: Record<string, string> = {
  être: 'été',
  avoir: 'eu',
  faire: 'fait',
  prendre: 'pris',
  comprendre: 'compris',
  apprendre: 'appris',
  voir: 'vu',
  dire: 'dit',
  écrire: 'écrit',
  décrire: 'décrit',
  mettre: 'mis',
  lire: 'lu',
  vouloir: 'voulu',
  pouvoir: 'pu',
  savoir: 'su',
  devoir: 'dû',
  recevoir: 'reçu',
  boire: 'bu',
  croire: 'cru',
  vivre: 'vécu',
  connaître: 'connu',
  venir: 'venu',
  devenir: 'devenu',
  revenir: 'revenu',
  obtenir: 'obtenu',
  tenir: 'tenu',
  naître: 'né',
  mourir: 'mort',
  ouvrir: 'ouvert',
  offrir: 'offert',
  courir: 'couru',
  suivre: 'suivi',
  partir: 'parti',
  sortir: 'sorti',
  dormir: 'dormi',
  rire: 'ri',
  plaire: 'plu',
  pleuvoir: 'plu',
};

/** The past participle: the irregular ones from a table, then -er → -é, -ir → -i, -re → -u. */
export function participle(verb: string): string {
  const known = PARTICIPLE[verb];
  if (known) return known;
  if (verb.endsWith('er')) return `${verb.slice(0, -2)}é`;
  if (verb.endsWith('ir')) return `${verb.slice(0, -2)}i`;
  if (verb.endsWith('re')) return `${verb.slice(0, -2)}u`;
  throw new Error(`No participle rule for "${verb}"`);
}

/** Verbs that form the passé composé with être (the “house” verbs and their relatives). */
export const ETRE_VERBS = new Set([
  'aller',
  'venir',
  'devenir',
  'revenir',
  'arriver',
  'partir',
  'entrer',
  'sortir',
  'rentrer',
  'retourner',
  'rester',
  'tomber',
  'monter',
  'descendre',
  'naître',
  'mourir',
]);

const VOWEL = /^[aeiouyàâäéèêëîïôöùûüh]/i;
const PLURAL = new Set(['nous', 'vous', 'ils/elles']);

/**
 * Passé composé: the present of avoir or être plus the participle. With être the participle agrees; the
 * table shows the masculine forms (allé, allés), `feminine` gives allée / allées for an elle subject.
 */
export function passeCompose(verb: string, opts: { feminine?: boolean } = {}): FrenchForms {
  const etre = ETRE_VERBS.has(verb);
  const aux = conjugateFr(etre ? 'être' : 'avoir');
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

/** Passé composé of a pronominal verb (always with être): je me suis marié, tu t’es installé. */
export function passeComposeReflexive(
  verb: string,
  opts: { feminine?: boolean } = {},
): FrenchForms {
  const aux = conjugateFr('être');
  const part = participle(verb);
  const pronouns = ['me', 'te', 'se', 'nous', 'vous', 'se'] as const;
  return Object.fromEntries(
    FRENCH_PRONOUNS.map((p, i) => {
      const pronoun = pronouns[i]!;
      const elides = pronoun.length === 2 && VOWEL.test(aux[p]);
      let agreed = opts.feminine ? `${part}e` : part;
      if (PLURAL.has(p)) agreed = `${agreed}s`;
      return [p, `${elides ? `${pronoun[0]}’` : `${pronoun} `}${aux[p]} ${agreed}`];
    }),
  ) as FrenchForms;
}
