import type { FrenchForms } from '@/lib/french/conjugation';
import { conditionnelPasse, futurAnterieur, plusQueParfait } from '@/lib/french/compound';
import { conditionnel } from '@/lib/french/conditional';
import { conjugateFr } from '@/lib/french/conjugation';
import { futurSimple } from '@/lib/french/tenses';
import { FRENCH_PRONOUNS, type FrenchPronoun } from '@/lib/persons';
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

/** Present tense table of a verb the conjugation engine knows (no label: it is the default tense). */
export const presentTable = (
  id: string,
  verb: string,
  meaning: string,
  blanks: FrenchPronoun[],
): Table => ({ id, verb, meaning, forms: conjugateFr(verb), blanks });

/** Table with hand-written forms for a verb the engine does not know (je, tu, il, nous, vous, ils). */
export const manualTable = (
  id: string,
  verb: string,
  meaning: string,
  f: [string, string, string, string, string, string],
  blanks: FrenchPronoun[],
): Table => ({
  id,
  verb,
  meaning,
  forms: Object.fromEntries(FRENCH_PRONOUNS.map((p, i) => [p, f[i]])) as FrenchForms,
  blanks,
});

/** Futur simple table: j’irai, tu iras … */
export const futurTable = (
  id: string,
  verb: string,
  meaning: string,
  blanks: FrenchPronoun[],
): Table => tense(id, verb, 'futur simple', meaning, futurSimple(verb), blanks);

/** Conditionnel présent table: j’irais, tu irais … */
export const conditionnelTable = (
  id: string,
  verb: string,
  meaning: string,
  blanks: FrenchPronoun[],
): Table => tense(id, verb, 'conditionnel', meaning, conditionnel(verb), blanks);

export {
  activity,
  dictation,
  gap,
  heard,
  meta,
  q,
  say,
  sent,
  tf,
  typed,
  you,
} from '../a1-2/helpers';

/** Conditionnel passé table: j’aurais pris, elle serait partie. */
export const condPasseTable = (
  id: string,
  verb: string,
  meaning: string,
  blanks: FrenchPronoun[],
  feminine = false,
): Table =>
  tense(id, verb, 'conditionnel passé', meaning, conditionnelPasse(verb, { feminine }), blanks);

/** Plus-que-parfait table: j’avais fini, il était parti. */
export const pqpTable = (
  id: string,
  verb: string,
  meaning: string,
  blanks: FrenchPronoun[],
  feminine = false,
): Table =>
  tense(id, verb, 'plus-que-parfait', meaning, plusQueParfait(verb, { feminine }), blanks);

/** Futur antérieur table: j’aurai fini, elle sera partie. */
export const futAnterieurTable = (
  id: string,
  verb: string,
  meaning: string,
  blanks: FrenchPronoun[],
  feminine = false,
): Table => tense(id, verb, 'futur antérieur', meaning, futurAnterieur(verb, { feminine }), blanks);

/** Sort it cards: [text, bucket, English meaning] rows; the text is spoken. */
export const sortCards = (prefix: string, rows: readonly (readonly [string, string, string])[]) =>
  rows.map(([text, bucket, translation], i) => ({
    id: `${prefix}${i + 1}`,
    text,
    bucket,
    speak: text,
    translation,
  }));

/** Spelling item: unscramble or type a word; accents are optional. */
export const sp = (
  id: string,
  mode: 'unscramble' | 'type',
  answer: string,
  hint: string,
  emoji?: string,
  speak?: string,
) => ({ id, mode, answer, hint, ...(emoji ? { emoji } : {}), speak: speak ?? answer });

/** Dialogue scene: `turns` built with say() and you(). */
export const scene = (
  id: string,
  title: string,
  emoji: string,
  setting: string,
  turns: ConfigOf<'dialogue'>['scenes'][number]['turns'],
) => ({ id, title, emoji, setting, turns });
