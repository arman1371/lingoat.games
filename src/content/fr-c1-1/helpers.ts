import { conjugateFr, type FrenchForms } from '@/lib/french/conjugation';
import { futurSimple, imparfait, participle } from '@/lib/french/tenses';
import { FRENCH_PRONOUNS, type FrenchPronoun } from '@/lib/persons';
import { unit as baseUnit } from '../builders';
import type { ConfigOf } from '../schema';
import type { LessonId } from '../lessons';
import { gap as gapOf, q as qOf } from '../a1-2/helpers';
import { hint as hintOf } from '../b1-2/helpers';

/**
 * Authoring helpers of French C1.1. The ones below are language neutral (gap fill, quiz, sentence builder,
 * blitz, dialogue and listening items); only the unit and the conjugation tables know about French.
 */
export {
  activity,
  dictation,
  gap,
  heard,
  meta,
  q,
  say,
  sent,
  sortItems,
  tf,
  typed,
  you,
} from '../a1-2/helpers';
export { hint } from '../b1-2/helpers';
export type { UnitContent } from './types';

/** `unit()` of the level: every unit passes the level id so the content test can check the prefix. */
export const unitFr = (u: Parameters<typeof baseUnit>[0]) => baseUnit({ levelId: 'fr-c1-1', ...u });

type Table = ConfigOf<'conjugation'>['tables'][number];

/**
 * A conjugation table with the six forms typed by hand (je, tu, il/elle/on, nous, vous, ils/elles). Used for
 * the tenses and moods that `src/lib/french` does not generate (subjunctive, passé simple …).
 */
export function frCustomTable(
  id: string,
  verb: string,
  meaning: string,
  forms: readonly [string, string, string, string, string, string],
  blanks: FrenchPronoun[],
): Table {
  return {
    id,
    verb,
    meaning,
    forms: Object.fromEntries(FRENCH_PRONOUNS.map((p, i) => [p, forms[i]])) as Record<
      FrenchPronoun,
      string
    >,
    blanks,
  };
}

// ---- tenses and moods of C1: generated from src/lib/french, never typed twice ------------------

const sixOf = (f: FrenchForms) =>
  FRENCH_PRONOUNS.map((p) => f[p]) as unknown as Parameters<typeof frCustomTable>[3];

const fromEndings = (stem: string | ((i: number) => string), endings: readonly string[]) =>
  Object.fromEntries(
    FRENCH_PRONOUNS.map((p, i) => [p, `${typeof stem === 'string' ? stem : stem(i)}${endings[i]}`]),
  ) as FrenchForms;

const IMPARFAIT_ENDINGS = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'] as const;

/** Conditionnel présent: the future stem with the endings of the imparfait (je pourrais, nous voterions). */
export function conditionnel(verb: string): FrenchForms {
  return fromEndings(futurSimple(verb).je.slice(0, -2), IMPARFAIT_ENDINGS);
}

/** Subjunctive stems and forms that cannot be derived from the present tense. */
const SUBJONCTIF_IRREGULAR: Record<string, FrenchForms> = {
  être: fromEndings('', ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient']),
  avoir: fromEndings('', ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient']),
  aller: fromEndings('', ['aille', 'ailles', 'aille', 'allions', 'alliez', 'aillent']),
  faire: fromEndings('', ['fasse', 'fasses', 'fasse', 'fassions', 'fassiez', 'fassent']),
  pouvoir: fromEndings('', ['puisse', 'puisses', 'puisse', 'puissions', 'puissiez', 'puissent']),
  savoir: fromEndings('', ['sache', 'saches', 'sache', 'sachions', 'sachiez', 'sachent']),
  vouloir: fromEndings('', ['veuille', 'veuilles', 'veuille', 'voulions', 'vouliez', 'veuillent']),
};

/** Subjonctif présent: ils-stem + e, es, e, ent; nous-stem + ions, iez (que je finisse, que nous prenions). */
export function subjonctif(verb: string): FrenchForms {
  const irregular = SUBJONCTIF_IRREGULAR[verb];
  if (irregular) return irregular;
  const present = conjugateFr(verb);
  const ils = present['ils/elles'].slice(0, -3);
  const nous = present.nous.slice(0, -3);
  return fromEndings(
    (i) => (i === 3 || i === 4 ? nous : ils),
    ['e', 'es', 'e', 'ions', 'iez', 'ent'],
  );
}

/** Compound tense with avoir: the auxiliary in the given simple tense plus the past participle. */
function withAvoir(aux: FrenchForms, verb: string): FrenchForms {
  const part = participle(verb);
  return fromEndings(
    (i) => `${aux[FRENCH_PRONOUNS[i]!]} `,
    FRENCH_PRONOUNS.map(() => part),
  );
}

/** Plus-que-parfait with avoir: j’avais voté, nous avions pris. */
export const plusQueParfait = (verb: string): FrenchForms => withAvoir(imparfait('avoir'), verb);

/** Conditionnel passé with avoir: j’aurais voté, nous aurions pris. */
export const conditionnelPasse = (verb: string): FrenchForms =>
  withAvoir(conditionnel('avoir'), verb);

/** A conjugation table from generated forms. `label` is what the learner sees as the verb. */
export function formsTable(
  id: string,
  label: string,
  meaning: string,
  forms: FrenchForms,
  blanks: FrenchPronoun[],
): Table {
  return frCustomTable(id, label, meaning, sixOf(forms), blanks);
}

export const condTable = (verb: string, meaning: string, blanks: FrenchPronoun[]) =>
  formsTable(`cond-${verb}`, `${verb} (conditionnel)`, meaning, conditionnel(verb), blanks);

export const subjTable = (verb: string, meaning: string, blanks: FrenchPronoun[]) =>
  formsTable(`subj-${verb}`, `${verb} (subjonctif)`, meaning, subjonctif(verb), blanks);

export const pqpTable = (verb: string, meaning: string, blanks: FrenchPronoun[]) =>
  formsTable(`pqp-${verb}`, `${verb} (plus-que-parfait)`, meaning, plusQueParfait(verb), blanks);

export const condPastTable = (verb: string, meaning: string, blanks: FrenchPronoun[]) =>
  formsTable(
    `condpast-${verb}`,
    `${verb} (conditionnel passé)`,
    meaning,
    conditionnelPasse(verb),
    blanks,
  );

// ---- compact authoring shortcuts shared by units 2 to 11 ---------------------------------------

/**
 * Gap fill with chips whose wrong options are the keys of `why`: `gh(id, text, answer, why, translation,
 * explanation)`. Saves writing every distractor twice.
 */
export const gh = (
  id: string,
  text: string,
  answer: string,
  why: Record<string, string>,
  translation: string,
  explanation?: string,
) => hintOf(gapOf(id, text, answer, [answer, ...Object.keys(why)], translation, explanation), why);

/** Quiz question with grammar hints: the wrong options are the keys of `why`. */
export const qh = (
  id: string,
  prompt: string,
  answer: string,
  why: Record<string, string>,
  lesson?: LessonId,
) => hintOf(qOf(id, prompt, answer, Object.keys(why)), why, lesson);

/** Sort-it cards from [text, bucket, English meaning] rows; every card can be read aloud. */
export const cards = (prefix: string, rows: readonly (readonly [string, string, string])[]) =>
  rows.map(([text, bucket, translation], i) => ({
    id: `${prefix}${i + 1}`,
    text,
    bucket,
    speak: text,
    translation,
  }));
