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

// ---- shorter ways to declare the activities of a unit ------------------------------------------

type GameType = Activity['gameType'];
type Pronoun = ConfigOf<'conjugation'>['tables'][number]['blanks'][number];

/** An activity in one call: `act(U, 'key', 'quiz', 'Title', 'Description', ['tag'], 2, config)`. */
export const act = <T extends GameType>(
  U: string,
  key: string,
  type: T,
  title: string,
  description: string,
  tags: TagId[],
  difficulty: 1 | 2 | 3,
  config: ConfigOf<T>,
  estMinutes = 4,
): Activity => activity(U, key, type, { title, description, tags, difficulty, estMinutes }, config);

/** Quiz of French definitions: `[definition, answer, wrong options]` rows. */
export const definitions = (rows: readonly (readonly [string, string, string[]])[]) => ({
  questions: rows.map(([prompt, answer, wrong], i) => q(`d${i + 1}`, prompt, answer, wrong)),
});

/** A sentence-builder item from a plain sentence: words are split on spaces. */
export const sent = (id: string, sentence: string, translation: string, lesson?: LessonId) => ({
  id,
  translation,
  words: sentence.split(' '),
  ...(lesson ? { lesson } : {}),
});

/** A conjugation table: `forms` in the order je, tu, il/elle/on, nous, vous, ils/elles. */
export const conj = (
  id: string,
  meaning: string,
  forms: readonly [string, string, string, string, string, string],
  lesson: LessonId,
  blanks: readonly Pronoun[] = ['il/elle/on', 'ils/elles'],
) => ({
  id,
  verb: id,
  meaning,
  forms: {
    je: forms[0],
    tu: forms[1],
    'il/elle/on': forms[2],
    nous: forms[3],
    vous: forms[4],
    'ils/elles': forms[5],
  },
  blanks: [...blanks],
  lesson,
});

/** The final "Unit challenge" quiz. */
export const challenge = (
  U: string,
  tags: TagId[],
  questions: ConfigOf<'quiz'>['questions'],
  description = 'Words and grammar in one final quiz.',
): Activity =>
  act(U, 'challenge', 'quiz', 'Unit challenge', description, tags, 3, { questions }, 5);

/** A 60-second true/false blitz. */
export const blitz = (
  U: string,
  title: string,
  description: string,
  tags: TagId[],
  statements: ConfigOf<'blitz'>['statements'],
): Activity =>
  act(U, 'blitz', 'blitz', title, description, tags, 3, { seconds: 60, statements }, 3);
