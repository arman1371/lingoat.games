import {
  activity,
  flashcards,
  listen,
  memory,
  pick,
  quizDeEn,
  unit as baseUnit,
} from '../builders';
import type { Activity, ConfigOf, Vocab } from '../schema';
import type { LessonId } from '../lessons';
import type { TagId } from '../tags';

export type { UnitContent } from './types';

/** `unit()` of the level: every unit passes the level id so the content test can check the prefix. */
export const unitFrC12 = (u: Parameters<typeof baseUnit>[0]) =>
  baseUnit({ levelId: 'fr-c1-2', ...u });

// ---- compact authoring helpers shared by the units ----------------------------------------------

type GapItem = ConfigOf<'gapfill'>['items'][number];
type QuizQuestion = ConfigOf<'quiz'>['questions'][number];
type Turn = ConfigOf<'dialogue'>['scenes'][number]['turns'][number];
type Extra = { lesson?: LessonId; explanation?: string; why?: Record<string, string> };

/** A gap-fill item; leave `options` undefined for a typed answer. */
export const gap = (
  id: string,
  text: string,
  answer: string,
  options: string[] | undefined,
  translation: string,
  extra: Extra = {},
): GapItem => ({ id, text, answer, ...(options ? { options } : {}), translation, ...extra });

/** A quiz question: the answer first, then the wrong options. */
export const q = (
  id: string,
  prompt: string,
  answer: string,
  wrong: string[],
  extra: Extra = {},
): QuizQuestion => ({ id, prompt, answer, options: [answer, ...wrong], ...extra });

/** Sort-it cards for one bucket: `[text, English meaning]` rows. */
export const cards = (bucket: string, rows: readonly (readonly [string, string])[]) =>
  rows.map(([text, translation], i) => ({
    id: `${bucket}${i + 1}`,
    text,
    bucket,
    speak: text,
    translation,
  }));

export const npc = (who: string, text: string, translation: string): Turn => ({
  kind: 'npc',
  who,
  text,
  translation,
});

/** The player's turn: the correct answer first, then `[wrong answer, why it is wrong]` pairs. */
export const you = (correct: string, ...wrong: [string, string][]): Turn => ({
  kind: 'you',
  options: [
    { text: correct, correct: true },
    ...wrong.map(([text, feedback]) => ({ text, correct: false, feedback })),
  ],
});

export const scene = (
  id: string,
  title: string,
  emoji: string,
  setting: string,
  ...turns: Turn[]
): ConfigOf<'dialogue'>['scenes'][number] => ({ id, title, emoji, setting, turns });

export const tf = (id: string, text: string, isTrue: boolean, explanation?: string) => ({
  id,
  text,
  isTrue,
  ...(explanation ? { explanation } : {}),
});

/** Spell items: type the answer, unscramble it, or write what you hear. */
export const typed = (id: string, answer: string, hint: string, emoji?: string) => ({
  id,
  mode: 'type' as const,
  answer,
  hint,
  ...(emoji ? { emoji } : {}),
  speak: answer,
});
export const scrambled = (id: string, answer: string, hint: string, emoji?: string) => ({
  id,
  mode: 'unscramble' as const,
  answer,
  hint,
  ...(emoji ? { emoji } : {}),
  speak: answer,
});
export const dictated = (id: string, answer: string, meaning: string) => ({
  id,
  mode: 'dictation' as const,
  answer,
  hint: `Type what you hear (${meaning})`,
  speak: answer,
});

/**
 * The first five activities of a unit, generated from its vocabulary: two flashcard sets, a meaning
 * quiz, a memory board and a listening game. Items are picked with the seeded rng, so they are stable.
 * English meanings in a unit must be unique (the memory board and the quiz rely on it).
 */
export function vocabBlock(
  U: string,
  topic: TagId,
  vocab: readonly Vocab[],
  titles: { first: string; second: string; firstText: string; secondText: string },
): Activity[] {
  const half = Math.ceil(vocab.length / 2);
  const first = vocab.slice(0, half);
  const second = vocab.slice(half);
  return [
    activity(
      U,
      'flash-1',
      'flashcards',
      {
        title: titles.first,
        description: titles.firstText,
        tags: ['vocabulary', topic],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(first),
    ),
    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Match each French word with its English meaning.',
        tags: ['vocabulary', topic],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(pick(first, 8, `${U}:quiz`), vocab),
    ),
    activity(
      U,
      'memory',
      'memory',
      {
        title: 'Word memory',
        description: 'Find the pairs: French word and English meaning.',
        tags: ['vocabulary', topic],
        difficulty: 1,
        estMinutes: 3,
      },
      memory(pick(vocab, 7, `${U}:memory`)),
    ),
    activity(
      U,
      'listen',
      'listen',
      {
        title: 'Listen and understand',
        description: 'Listen to the word and pick its meaning.',
        tags: ['listening', topic],
        difficulty: 1,
        estMinutes: 3,
      },
      listen(pick(vocab, 8, `${U}:listen`), vocab),
    ),
    activity(
      U,
      'flash-2',
      'flashcards',
      {
        title: titles.second,
        description: titles.secondText,
        tags: ['vocabulary', topic],
        difficulty: 2,
        estMinutes: 4,
      },
      flashcards(second),
    ),
  ];
}
