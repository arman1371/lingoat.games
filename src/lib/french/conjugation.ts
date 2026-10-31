import { FRENCH_PRONOUNS, type FrenchPronoun } from '../persons';

export type FrenchForms = Record<FrenchPronoun, string>;

const forms = (...f: [string, string, string, string, string, string]): FrenchForms =>
  Object.fromEntries(FRENCH_PRONOUNS.map((p, i) => [p, f[i]])) as FrenchForms;

/** Verbs whose forms cannot be derived from the infinitive. */
const IRREGULAR: Record<string, FrenchForms> = {
  être: forms('suis', 'es', 'est', 'sommes', 'êtes', 'sont'),
  avoir: forms('ai', 'as', 'a', 'avons', 'avez', 'ont'),
  aller: forms('vais', 'vas', 'va', 'allons', 'allez', 'vont'),
  faire: forms('fais', 'fais', 'fait', 'faisons', 'faites', 'font'),
  prendre: forms('prends', 'prends', 'prend', 'prenons', 'prenez', 'prennent'),
  venir: forms('viens', 'viens', 'vient', 'venons', 'venez', 'viennent'),
  vouloir: forms('veux', 'veux', 'veut', 'voulons', 'voulez', 'veulent'),
  pouvoir: forms('peux', 'peux', 'peut', 'pouvons', 'pouvez', 'peuvent'),
  savoir: forms('sais', 'sais', 'sait', 'savons', 'savez', 'savent'),
};

/** -er verbs whose stem changes in the je, tu, il and ils forms (j’achète, elle appelle, il paie). */
const ER_STRONG_STEM: Record<string, string> = {
  acheter: 'achèt',
  lever: 'lèv',
  appeler: 'appell',
  jeter: 'jett',
  préférer: 'préfèr',
  espérer: 'espèr',
  répéter: 'répèt',
  payer: 'pai',
  envoyer: 'envoi',
  nettoyer: 'nettoi',
};

/** Second-group verbs (finissons). Other -ir verbs (partir, venir, sortir …) are irregular and need an entry. */
const REGULAR_IR = new Set([
  'finir',
  'choisir',
  'grandir',
  'réussir',
  'remplir',
  'réfléchir',
  'agir',
]);

const ER_ENDINGS = ['e', 'es', 'e', 'ons', 'ez', 'ent'] as const;
const IR_ENDINGS = ['is', 'is', 'it', 'issons', 'issez', 'issent'] as const;

/** Spelling that keeps the sound of the stem before -ons: nous mangeons, nous commençons. */
function nousStem(stem: string): string {
  if (stem.endsWith('g')) return `${stem}e`;
  if (stem.endsWith('c')) return `${stem.slice(0, -1)}ç`;
  return stem;
}

function regularEr(verb: string): FrenchForms {
  const stem = verb.slice(0, -2);
  const strong = ER_STRONG_STEM[verb] ?? stem;
  const stems = [strong, strong, strong, nousStem(stem), stem, strong];
  return forms(...(ER_ENDINGS.map((e, i) => `${stems[i]}${e}`) as Parameters<typeof forms>));
}

function regularIr(verb: string): FrenchForms {
  const stem = verb.slice(0, -2);
  return forms(...(IR_ENDINGS.map((e) => `${stem}${e}`) as Parameters<typeof forms>));
}

/**
 * Present tense of a French verb: the irregular ones from a table, regular -er verbs (with the usual
 * spelling changes) and the regular -ir verbs listed above from the infinitive.
 */
export function conjugateFr(verb: string): FrenchForms {
  const irregular = IRREGULAR[verb];
  if (irregular) return irregular;
  if (verb.endsWith('er')) return regularEr(verb);
  if (REGULAR_IR.has(verb)) return regularIr(verb);
  throw new Error(`No French conjugation rule for "${verb}"`);
}

const VOWEL_START = /^[aeiouyàâäéèêëîïôöùûüh]/i;

/** me / te / se / nous / vous / se, elided before a vowel (m’appelle, s’habille). */
export function reflexiveFr(verb: string): FrenchForms {
  const base = conjugateFr(verb);
  const pronouns = ['me', 'te', 'se', 'nous', 'vous', 'se'] as const;
  return Object.fromEntries(
    FRENCH_PRONOUNS.map((p, i) => {
      const pronoun = pronouns[i]!;
      const form = base[p];
      const elides = pronoun.length === 2 && VOWEL_START.test(form);
      return [p, elides ? `${pronoun[0]}’${form}` : `${pronoun} ${form}`];
    }),
  ) as FrenchForms;
}
