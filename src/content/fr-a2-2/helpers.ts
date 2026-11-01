import type { ConfigOf } from '../schema';
import { unit as baseUnit } from '../builders';

export type { UnitContent } from './types';

/** `unit()` of the level: every unit passes the level id so the content test can check the prefix. */
export const unitFr = (u: Parameters<typeof baseUnit>[0]) => baseUnit({ levelId: 'fr-a2-2', ...u });

type GapItem = ConfigOf<'gapfill'>['items'][number];
type QuizQuestion = ConfigOf<'quiz'>['questions'][number];
type DialogueScene = ConfigOf<'dialogue'>['scenes'][number];
type Turn = DialogueScene['turns'][number];

/** A gap-fill item: the answer comes first in `options`, the engine shuffles them. */
export const gap = (
  id: string,
  text: string,
  answer: string,
  wrong: [string, string, string],
  translation: string,
  explanation: string,
  more: Partial<GapItem> = {},
): GapItem => ({
  id,
  text,
  answer,
  options: [answer, ...wrong],
  translation,
  explanation,
  ...more,
});

/** A multiple-choice question; the answer comes first in `options`. */
export const mc = (
  id: string,
  prompt: string,
  answer: string,
  wrong: [string, string, string],
  more: Partial<QuizQuestion> = {},
): QuizQuestion => ({ id, prompt, answer, options: [answer, ...wrong], ...more });

/** A line spoken by the other person in a dialogue. */
export const npc = (who: string, text: string, translation: string): Turn => ({
  kind: 'npc',
  who,
  text,
  translation,
});

/** The learner's turn: one correct reply and the wrong ones, each with its feedback. */
export const you = (right: string, ...wrong: [text: string, feedback: string][]): Turn => ({
  kind: 'you',
  options: [
    { text: right, correct: true },
    ...wrong.map(([text, feedback]) => ({ text, correct: false, feedback })),
  ],
});
