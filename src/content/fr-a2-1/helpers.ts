import type { FrenchPronoun } from '@/lib/persons';
import type { FrenchForms } from '@/lib/french/conjugation';
import {
  futurSimple,
  imparfait,
  passeCompose,
  passeComposeReflexive,
  presentFr,
} from '@/lib/french/tenses';
import { gap, q, sent, tf } from '../a1-2/helpers';
import { unit } from '../builders';
import type { ConfigOf, Unit } from '../schema';
import type { LessonId } from '../lessons';

/**
 * French A2.1 authoring helpers. The language-neutral short forms of A1.2 (gap, q, sent, say, you …) are
 * re-exported; the French part is the unit id, the sort-it cards and tables for the new tenses.
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
  tf,
  typed,
  you,
} from '../a1-2/helpers';

export const unitFr21 = (u: Omit<Unit, 'levelId'>): Unit => unit({ ...u, levelId: 'fr-a2-1' });

/** Attaches a mini lesson to one item (for activities that mix several grammar points). */
export const withLesson = <T extends object>(
  lesson: LessonId,
  item: T,
): T & { lesson: LessonId } => ({
  ...item,
  lesson,
});

/** Sort-it cards: [text, bucket, English meaning] rows; the text is spoken. */
export const sortCards = (
  prefix: string,
  rows: readonly (readonly [text: string, bucket: string, translation: string])[],
) =>
  rows.map(([text, bucket, translation], i) => ({
    id: `${prefix}${i + 1}`,
    text,
    bucket,
    speak: text,
    translation,
  }));

type Table = ConfigOf<'conjugation'>['tables'][number];

const table = (
  id: string,
  verb: string,
  meaning: string,
  forms: FrenchForms,
  blanks: FrenchPronoun[],
): Table => ({ id, verb, meaning, forms, blanks });

/** Passé composé table (masculine forms for the être verbs). */
export const pcTable = (
  verb: string,
  meaning: string,
  blanks: FrenchPronoun[],
  id = `pc-${verb}`,
): Table => table(id, verb, `${meaning} – passé composé`, passeCompose(verb), blanks);

/** Passé composé of a pronominal verb: `infinitive` without se / s’. */
export const pcReflexiveTable = (
  infinitive: string,
  meaning: string,
  blanks: FrenchPronoun[],
): Table =>
  table(
    `pc-se-${infinitive}`,
    /^[aeiouyàâéèêîïôù]/i.test(infinitive) ? `s’${infinitive}` : `se ${infinitive}`,
    `${meaning} – passé composé`,
    passeComposeReflexive(infinitive),
    blanks,
  );

export const imparfaitTable = (
  verb: string,
  meaning: string,
  blanks: FrenchPronoun[],
  id = `imp-${verb}`,
): Table => table(id, verb, `${meaning} – imparfait`, imparfait(verb), blanks);

export const futurTable = (
  verb: string,
  meaning: string,
  blanks: FrenchPronoun[],
  id = `fut-${verb}`,
): Table => table(id, verb, `${meaning} – futur simple`, futurSimple(verb), blanks);

/** Present-tense table for the verbs `conjugateFr` knows plus devoir, sortir, dire … (see `presentFr`). */
export const presentTable = (
  verb: string,
  meaning: string,
  blanks: FrenchPronoun[],
  id = `pres-${verb}`,
): Table => table(id, verb, meaning, presentFr(verb), blanks);

// ---- compact row authoring for the later units ----------------------------------------------

type GapRow = readonly [
  text: string,
  answer: string,
  options: string[],
  translation: string,
  explanation?: string,
];

/** Gap-fill items from rows; every item carries the mini lesson of the grammar point. */
export const gaps = (prefix: string, lesson: LessonId, rows: readonly GapRow[]) =>
  rows.map(([text, answer, options, translation, explanation], i) =>
    withLesson(lesson, gap(`${prefix}${i + 1}`, text, answer, options, translation, explanation)),
  );

type QuizRow = readonly [
  prompt: string,
  answer: string,
  wrong: string[],
  lesson?: LessonId,
  explanation?: string,
];

/** Quiz questions from rows (correct answer first, then the wrong ones). */
export const quizRows = (prefix: string, rows: readonly QuizRow[]) =>
  rows.map(([prompt, answer, wrong, lesson, explanation], i) => {
    const question = q(`${prefix}${i + 1}`, prompt, answer, wrong, explanation);
    return lesson ? withLesson(lesson, question) : question;
  });

type TfRow = readonly [text: string, isTrue: boolean, explanation?: string];

export const tfRows = (prefix: string, rows: readonly TfRow[]) =>
  rows.map(([text, isTrue, explanation], i) => tf(`${prefix}${i + 1}`, text, isTrue, explanation));

type SentRow = readonly [lesson: LessonId, translation: string, words: string[], extra?: string[]];

export const sentRows = (prefix: string, rows: readonly SentRow[]) =>
  rows.map(([lesson, translation, words, extra], i) =>
    withLesson(lesson, sent(`${prefix}${i + 1}`, translation, words, extra ? { extra } : {})),
  );

type SpellRow = readonly [
  mode: 'unscramble' | 'type',
  answer: string,
  hint: string,
  emoji: string,
  speak: string,
];

export const spellRows = (prefix: string, rows: readonly SpellRow[]) =>
  rows.map(([mode, answer, hint, emoji, speak], i) => ({
    id: `${prefix}${i + 1}`,
    mode,
    answer,
    hint,
    emoji,
    speak,
  }));
