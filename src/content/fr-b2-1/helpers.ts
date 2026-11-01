import type { FrenchPronoun } from '@/lib/persons';
import { activity, unit as baseUnit, type Meta } from '../builders';
import type { LessonId } from '../lessons';
import type { ConfigOf } from '../schema';
import type { TagId } from '../tags';

export { activity };
export type { UnitContent } from './types';

/** `unit()` of the level: every unit passes the level id so the content test can check the prefix. */
export const unitFr = (u: Parameters<typeof baseUnit>[0]) => baseUnit({ levelId: 'fr-b2-1', ...u });

/** meta(title, description, tags, difficulty, estMinutes, lesson?) */
export const meta = (
  title: string,
  description: string,
  tags: TagId[],
  difficulty: 1 | 2 | 3,
  estMinutes: number,
  lesson?: LessonId,
): Meta => ({ title, description, tags, difficulty, estMinutes, ...(lesson ? { lesson } : {}) });

/** A wrong option, or a wrong option with the one sentence that says why it is wrong. */
export type Wrong = string | readonly [option: string, why: string];

const split = (wrong: readonly Wrong[]) => {
  const options = wrong.map((w) => (typeof w === 'string' ? w : w[0]));
  const why = Object.fromEntries(
    wrong.flatMap((w) => (typeof w === 'string' ? [] : [[w[0], w[1]]])),
  );
  return { options, why: Object.keys(why).length > 0 ? why : undefined };
};

/**
 * Gap-fill item with answer chips: the right answer first, then the wrong options. A wrong option may
 * be a `[option, why]` pair: the sentence is shown as a hint after the mistake.
 */
export const g = (
  id: string,
  text: string,
  answer: string,
  wrong: readonly Wrong[],
  translation: string,
  explanation?: string,
  lesson?: LessonId,
) => {
  const { options, why } = split(wrong);
  return {
    id,
    text,
    answer,
    options: [answer, ...options],
    translation,
    ...(explanation ? { explanation } : {}),
    ...(why ? { why } : {}),
    ...(lesson ? { lesson } : {}),
  };
};

type Question = ConfigOf<'quiz'>['questions'][number];

/** Quiz question: right answer first, then the wrong options (the engine shuffles). */
export const q = (
  id: string,
  prompt: string,
  answer: string,
  wrong: readonly Wrong[],
  explanation?: string,
  lesson?: LessonId,
): Question => {
  const { options, why } = split(wrong);
  return {
    id,
    prompt,
    answer,
    options: [answer, ...options],
    ...(explanation ? { explanation } : {}),
    ...(why ? { why } : {}),
    ...(lesson ? { lesson } : {}),
  };
};

/** Quiz question about a French sentence: it is read aloud as well. */
export const qs = (
  id: string,
  prompt: string,
  answer: string,
  wrong: readonly Wrong[],
  explanation?: string,
): Question => ({ ...q(id, prompt, answer, wrong, explanation), speak: prompt });

export const sent = (
  id: string,
  translation: string,
  words: string[],
  opts: { extra?: string[]; alsoAccept?: string[]; explanation?: string; lesson?: LessonId } = {},
) => ({ id, translation, words, ...opts });

export const tf = (id: string, text: string, isTrue: boolean, explanation?: string) => ({
  id,
  text,
  isTrue,
  ...(explanation ? { explanation } : {}),
});

type Turn = ConfigOf<'dialogue'>['scenes'][number]['turns'][number];

/** The other person speaks. */
export const say = (who: string, text: string, translation: string): Turn => ({
  kind: 'npc',
  who,
  text,
  translation,
});

/** Player turn: the right answer first, then [wrong text, feedback] pairs. */
export const you = (right: string, ...wrong: [text: string, feedback: string][]): Turn => ({
  kind: 'you',
  options: [
    { text: right, correct: true },
    ...wrong.map(([text, feedback]) => ({ text, correct: false, feedback })),
  ],
});

/** Sort-it cards: [text, bucket, English meaning] rows; ids are generated. */
export const cards = (prefix: string, rows: readonly (readonly [string, string, string])[]) =>
  rows.map(([text, bucket, translation], i) => ({
    id: `${prefix}${i + 1}`,
    text,
    bucket,
    speak: text,
    translation,
  }));

/** Listen-and-pick item: the French sentence is spoken, the options are English meanings. */
export const heard = (
  id: string,
  speak: string,
  answer: string,
  wrong: readonly string[],
  transcript?: string,
) => ({
  id,
  speak,
  answer,
  options: [answer, ...wrong],
  ...(transcript ? { transcript } : {}),
});

/** Dictation item: the learner hears `speak` and types `answer`. */
export const dictation = (id: string, answer: string, en: string, speak = answer) => ({
  id,
  mode: 'dictation' as const,
  answer,
  hint: `Type what you hear (${en})`,
  speak,
});

type SixForms = readonly [string, string, string, string, string, string];

/**
 * Conjugation table with hand-written forms (compound tenses, subjonctif …), without the pronouns:
 * je, tu, il/elle/on, nous, vous, ils/elles. `label` is what the learner sees as the verb.
 */
export const frForms = (
  id: string,
  label: string,
  meaning: string,
  forms: SixForms,
  blanks: FrenchPronoun[],
  lesson?: LessonId,
): ConfigOf<'conjugation'>['tables'][number] => ({
  id,
  verb: label,
  meaning,
  forms: {
    je: forms[0],
    tu: forms[1],
    'il/elle/on': forms[2],
    nous: forms[3],
    vous: forms[4],
    'ils/elles': forms[5],
  },
  blanks,
  ...(lesson ? { lesson } : {}),
});
