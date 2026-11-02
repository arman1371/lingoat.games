import type { FrenchPronoun } from '@/lib/persons';
import {
  activity,
  byDe,
  flashcards,
  listen,
  memory,
  quizDeEn,
  unit as baseUnit,
  type Meta,
} from '../builders';
import type { LessonId } from '../lessons';
import type { Activity, ConfigOf, Vocab } from '../schema';
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

/** Spell row: [mode, answer, hint, emoji, speak?] */
type SpellRow = readonly [
  mode: 'unscramble' | 'type',
  answer: string,
  hint: string,
  emoji: string,
  speak?: string,
];

interface VocabGroup {
  title: string;
  description: string;
  words: readonly Vocab[];
}

/**
 * The six vocabulary games every unit starts with: flashcards of group A, a meaning quiz, flashcards
 * of group B, a memory board (first eight words of B), a listening game and a spelling game.
 */
export function vocabGames(
  U: string,
  topic: TagId,
  o: { a: VocabGroup; b: VocabGroup; listen: string[]; spell: SpellRow[] },
): Activity[] {
  const all = [...o.a.words, ...o.b.words];
  return [
    activity(
      U,
      'flash-a',
      'flashcards',
      meta(o.a.title, o.a.description, ['vocabulary', topic], 1, 4),
      flashcards(o.a.words),
    ),
    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta('What does it mean?', 'Pick the English meaning.', ['vocabulary', topic], 1, 3),
      quizDeEn(o.a.words, all, 4),
    ),
    activity(
      U,
      'flash-b',
      'flashcards',
      meta(o.b.title, o.b.description, ['vocabulary', topic], 1, 3),
      flashcards(o.b.words),
    ),
    activity(
      U,
      'memory',
      'memory',
      meta('Word memory', 'Match each word with its meaning.', ['vocabulary', topic], 2, 3),
      memory(o.b.words.slice(0, 8)),
    ),
    activity(
      U,
      'listen',
      'listen',
      meta(
        'Listen and pick',
        'Listen to the word and pick its meaning.',
        ['listening', topic],
        2,
        3,
      ),
      listen(byDe(all, ...o.listen), all),
    ),
    activity(
      U,
      'spell',
      'spell',
      meta(
        'Spell the words',
        'Unscramble and type the words. Accents are optional.',
        ['spelling', topic],
        2,
        3,
      ),
      {
        items: o.spell.map(([mode, answer, hint, emoji, speak], i) => ({
          id: `sp${i + 1}`,
          mode,
          answer,
          hint,
          emoji,
          speak: speak ?? answer,
        })),
      },
    ),
  ];
}
