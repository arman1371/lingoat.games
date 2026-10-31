import { z } from 'zod';
import type { LanguageId } from './languages';
import { ALL_PERSONS, personsOf } from '@/lib/persons';
import { TAG_IDS, type TagId } from './tags';
import { LESSON_IDS, type LessonId } from './lessons';

const id = z.string().min(1);
const text = z.string().min(1);

import { GAME_TYPES, type GameType } from './gameTypes';
export { GAME_TYPES, type GameType };

const options = z
  .array(text)
  .min(2)
  .max(6)
  .refine((o) => new Set(o).size === o.length, 'options must be unique');

// ---- grammar hints (shown after a wrong answer, see src/content/lessons.ts) ---------------------
const lessonId = z.enum(LESSON_IDS as [LessonId, ...LessonId[]]);
/**
 * Optional hint fields for grammar items. `lesson` names the mini lesson to show after a mistake
 * (activities fall back to the lesson of their grammar tag); `why` maps a wrong option – or an
 * expected wrong typed answer – to one sentence on why it is wrong. Leave both out for vocabulary
 * items: a meaning mistake gets no lesson.
 */
const hintFields = {
  lesson: lessonId.optional(),
  why: z.record(z.string(), text).optional(),
};
const whyFitsOptions = (i: {
  answer: string;
  options?: readonly string[];
  why?: Record<string, string>;
}) =>
  !i.why ||
  Object.keys(i.why).every((k) => k !== i.answer && (!i.options || i.options.includes(k)));
const WHY_MESSAGE = 'why keys must be wrong options';

// ---- per-game configs -------------------------------------------------------------------------
export const FlashcardsConfig = z.object({
  cards: z
    .array(
      z.object({
        id,
        front: text,
        back: text,
        emoji: z.string().optional(),
        speak: z.string().optional(),
        note: z.string().optional(),
      }),
    )
    .min(1),
});

const choiceBase = {
  id,
  options,
  answer: text,
  explanation: z.string().optional(),
  ...hintFields,
};
export const QuizConfig = z.object({
  questions: z
    .array(
      z
        .object({
          ...choiceBase,
          prompt: text,
          emoji: z.string().optional(),
          speak: z.string().optional(),
        })
        .refine((q) => q.options.includes(q.answer), 'answer must be one of the options')
        .refine(whyFitsOptions, WHY_MESSAGE),
    )
    .min(1),
});

export const MemoryConfig = z.object({
  pairs: z
    .array(z.object({ id, a: text, b: text }))
    .min(3)
    .max(10),
});

export const ListenConfig = z.object({
  items: z
    .array(
      z
        .object({ ...choiceBase, speak: text, transcript: z.string().optional() })
        .refine((q) => q.options.includes(q.answer), 'answer must be one of the options')
        .refine(whyFitsOptions, WHY_MESSAGE),
    )
    .min(1),
});

export const SpellConfig = z.object({
  items: z
    .array(
      z.object({
        id,
        mode: z.enum(['unscramble', 'type', 'dictation']),
        answer: text,
        hint: text,
        emoji: z.string().optional(),
        speak: z.string().optional(),
        numeric: z.boolean().optional(),
      }),
    )
    .min(1),
});

export const SentenceConfig = z.object({
  items: z
    .array(
      z.object({
        id,
        translation: text,
        words: z.array(text).min(2),
        extra: z.array(text).optional(),
        /** other full sentences that are also correct (alternative word orders) */
        alsoAccept: z.array(text).optional(),
        explanation: z.string().optional(),
        lesson: hintFields.lesson,
      }),
    )
    .min(1),
});

export const GapfillConfig = z.object({
  items: z
    .array(
      z
        .object({
          id,
          text: text.refine((t) => t.split('___').length === 2, 'text needs exactly one ___ blank'),
          answer: text,
          alsoAccept: z.array(text).optional(),
          options: options.optional(),
          translation: z.string().optional(),
          explanation: z.string().optional(),
          ...hintFields,
        })
        .refine(
          (i) => !i.options || i.options.includes(i.answer),
          'answer must be one of the options',
        )
        .refine(whyFitsOptions, WHY_MESSAGE),
    )
    .min(1),
});

export const SortitConfig = z
  .object({
    instruction: z.string().optional(),
    buckets: z
      .array(z.object({ id, label: text, emoji: z.string().optional() }))
      .min(2)
      .max(4),
    items: z
      .array(
        z.object({
          id,
          text,
          bucket: id,
          emoji: z.string().optional(),
          speak: z.string().optional(),
          /** English meaning shown with the verdict; filled from `<level>/translations.ts` or the vocabulary */
          translation: text.optional(),
        }),
      )
      .min(1),
  })
  .refine(
    (c) => c.items.every((i) => c.buckets.some((b) => b.id === i.bucket)),
    'item.bucket must exist',
  );

export const PronounEnum = z.enum(ALL_PERSONS);
export const ConjugationConfig = z.object({
  tables: z
    .array(
      z
        .object({
          id,
          verb: text,
          meaning: text,
          forms: z
            .partialRecord(PronounEnum, text)
            .refine((f) => personsOf(f) !== undefined, 'all six forms of one language required'),
          blanks: z.array(PronounEnum).min(1),
          lesson: hintFields.lesson,
        })
        .refine(
          (t) => t.blanks.every((p) => t.forms[p] !== undefined),
          'every blank needs a form in this table',
        ),
    )
    .min(1),
});

export const BlitzConfig = z.object({
  seconds: z.number().int().min(15).max(120).default(60),
  statements: z
    .array(z.object({ id, text, isTrue: z.boolean(), explanation: z.string().optional() }))
    .min(4),
});

const DialogueTurn = z.discriminatedUnion('kind', [
  z.object({ kind: z.literal('npc'), who: text, text, translation: z.string().optional() }),
  z.object({
    kind: z.literal('you'),
    options: z
      .array(z.object({ text, correct: z.boolean(), feedback: z.string().optional() }))
      .min(2)
      .max(4)
      .refine((o) => o.filter((x) => x.correct).length === 1, 'exactly one correct option'),
  }),
]);
export const DialogueConfig = z.object({
  scenes: z
    .array(
      z.object({
        id,
        title: text,
        setting: z.string().optional(),
        emoji: z.string().optional(),
        turns: z
          .array(DialogueTurn)
          .min(2)
          .refine((t) => t.some((x) => x.kind === 'you'), 'scene needs a player turn'),
      }),
    )
    .min(1),
});

export const ClockConfig = z.object({
  rounds: z
    .array(
      z.object({
        id,
        time: z.string().regex(/^([01]?\d|2[0-3]):[0-5]\d$/),
        mode: z.enum(['read', 'set']),
        style: z.enum(['formal', 'informal']),
      }),
    )
    .min(1),
});

const Product = z.object({
  id,
  name: text,
  emoji: text,
  priceCents: z.number().int().positive(),
  article: z.enum(['der', 'die', 'das']).optional(),
});
export const MarketConfig = z
  .object({
    products: z.array(Product).min(3),
    orders: z
      .array(
        z.object({
          id,
          request: text,
          translation: z.string().optional(),
          items: z.array(z.object({ product: id, qty: z.number().int().min(1).max(9) })).min(1),
        }),
      )
      .min(1),
  })
  .refine(
    (c) => c.orders.every((o) => o.items.every((i) => c.products.some((p) => p.id === i.product))),
    'order references unknown product',
  );

// ---- activities -------------------------------------------------------------------------------
const tagIdSchema = z.enum(TAG_IDS as [TagId, ...TagId[]]);

const base = {
  id,
  unitId: id,
  title: text,
  description: text,
  tags: z.array(tagIdSchema).min(1),
  difficulty: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  estMinutes: z.number().int().min(1).max(15),
  /** mini lesson for every item of a grammar activity whose tags name several grammar points */
  lesson: lessonId.optional(),
};

export const ActivitySchema = z.discriminatedUnion('gameType', [
  z.object({ ...base, gameType: z.literal('flashcards'), config: FlashcardsConfig }),
  z.object({ ...base, gameType: z.literal('quiz'), config: QuizConfig }),
  z.object({ ...base, gameType: z.literal('memory'), config: MemoryConfig }),
  z.object({ ...base, gameType: z.literal('listen'), config: ListenConfig }),
  z.object({ ...base, gameType: z.literal('spell'), config: SpellConfig }),
  z.object({ ...base, gameType: z.literal('sentence'), config: SentenceConfig }),
  z.object({ ...base, gameType: z.literal('gapfill'), config: GapfillConfig }),
  z.object({ ...base, gameType: z.literal('sortit'), config: SortitConfig }),
  z.object({ ...base, gameType: z.literal('conjugation'), config: ConjugationConfig }),
  z.object({ ...base, gameType: z.literal('blitz'), config: BlitzConfig }),
  z.object({ ...base, gameType: z.literal('dialogue'), config: DialogueConfig }),
  z.object({ ...base, gameType: z.literal('clock'), config: ClockConfig }),
  z.object({ ...base, gameType: z.literal('market'), config: MarketConfig }),
]);
export type Activity = z.infer<typeof ActivitySchema>;
export type ActivityOf<T extends GameType> = Extract<Activity, { gameType: T }>;
export type ConfigOf<T extends GameType> = ActivityOf<T>['config'];

// ---- units, vocabulary, levels ----------------------------------------------------------------
export const VocabSchema = z.object({
  id,
  de: text,
  en: text,
  article: z.enum(['der', 'die', 'das']).optional(),
  plural: z.string().optional(),
  emoji: z.string().optional(),
  field: text,
});
export type Vocab = z.infer<typeof VocabSchema>;

export const UnitSchema = z.object({
  id,
  levelId: id,
  order: z.number().int().min(1),
  title: text,
  subtitle: text,
  emoji: text,
  goals: z.array(text).min(1),
  grammar: z.array(text),
  vocabFields: z.array(text),
});
export type Unit = z.infer<typeof UnitSchema>;

export const LevelContentSchema = z.object({
  units: z.array(UnitSchema).min(1),
  vocab: z.array(VocabSchema),
  activities: z.array(ActivitySchema).min(1),
});
export type LevelContent = z.infer<typeof LevelContentSchema>;

export interface LevelMeta {
  id: string;
  /** Language the level teaches. */
  language: LanguageId;
  title: string;
  subtitle: string;
  status: 'available' | 'coming-soon';
  /** Dynamic import so each level is its own chunk. Absent for coming-soon levels. */
  load?: () => Promise<{ default: LevelContent }>;
}
