import { futurSimple, participle, ETRE_VERBS } from '@/lib/french/tenses';
import { FRENCH_PRONOUNS, type FrenchPronoun } from '@/lib/persons';
import {
  activity,
  byDe,
  flashcards,
  listen,
  memory,
  quizDeEn,
  vocabList,
  type VocabRow,
} from '../builders';
import type { ConfigOf } from '../schema';
import type { LessonId } from '../lessons';
import type { TagId } from '../tags';
import { unitFr, type UnitContent } from './helpers';

/**
 * A compact, data-driven way to write a B2.2 unit. Every unit has the same skeleton (vocabulary cards, a
 * meaning quiz, a memory board, listening, grammar games, spelling, a dialogue, a blitz and a final challenge);
 * the unit file only supplies the data. Unit 1 (`u1-actu.ts`) was written by hand before this existed.
 */

type GapItem = ConfigOf<'gapfill'>['items'][number];
type QuizQuestion = ConfigOf<'quiz'>['questions'][number];
type Scene = ConfigOf<'dialogue'>['scenes'][number];
type Turn = Scene['turns'][number];
type SpellItem = ConfigOf<'spell'>['items'][number];
type Table = ConfigOf<'conjugation'>['tables'][number];

/** A gap-fill item: the answer comes first in `options` (the engine shuffles them); `why` explains wrong options. */
export const gap = (
  id: string,
  text: string,
  answer: string,
  wrong: [string, string, string],
  translation: string,
  explanation: string,
  why: Record<string, string> = {},
): GapItem => ({
  id,
  text,
  answer,
  options: [answer, ...wrong],
  translation,
  explanation,
  ...(Object.keys(why).length > 0 ? { why } : {}),
});

/** A multiple-choice question; the answer comes first in `options`. */
export const mc = (
  id: string,
  prompt: string,
  answer: string,
  wrong: [string, string, string],
  lesson?: LessonId,
): QuizQuestion => ({
  id,
  prompt,
  answer,
  options: [answer, ...wrong],
  ...(lesson ? { lesson } : {}),
});

export const npc = (who: string, text: string, translation: string): Turn => ({
  kind: 'npc',
  who,
  text,
  translation,
});

/** The learner's turn: one correct reply, then the wrong ones with their feedback. */
export const you = (right: string, ...wrong: [text: string, feedback: string][]): Turn => ({
  kind: 'you',
  options: [
    { text: right, correct: true },
    ...wrong.map(([text, feedback]) => ({ text, correct: false, feedback })),
  ],
});

export const scene = (
  id: string,
  title: string,
  emoji: string,
  setting: string,
  ...turns: Turn[]
): Scene => ({ id, title, emoji, setting, turns });

export const tf = (id: string, text: string, isTrue: boolean, explanation?: string) => ({
  id,
  text,
  isTrue,
  ...(explanation ? { explanation } : {}),
});

export const sent = (
  id: string,
  translation: string,
  words: string[],
  extra: string[],
  lesson?: LessonId,
) => ({ id, translation, words, extra, ...(lesson ? { lesson } : {}) });

// ---- verb tables ------------------------------------------------------------------------------

type Six = [string, string, string, string, string, string];

/** A conjugation table from six hand-written forms (je, tu, il/elle/on, nous, vous, ils/elles). */
export function table(
  id: string,
  verb: string,
  meaning: string,
  forms: Six,
  blanks: FrenchPronoun[],
): Table {
  return {
    id,
    verb,
    meaning,
    forms: Object.fromEntries(FRENCH_PRONOUNS.map((p, i) => [p, forms[i]])) as Table['forms'],
    blanks,
  };
}

const PLURAL = new Set<FrenchPronoun>(['nous', 'vous', 'ils/elles']);
const AVOIR = ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'];
const ETRE = ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient'];

/** Plus-que-parfait: imparfait of avoir / être + participle (masculine, agreeing for être). */
export function plusQueParfait(verb: string): Six {
  const aux = ETRE_VERBS.has(verb) ? ETRE : AVOIR;
  const part = participle(verb);
  return FRENCH_PRONOUNS.map((p, i) => {
    const agreed = ETRE_VERBS.has(verb) && PLURAL.has(p) ? `${part}s` : part;
    return `${aux[i]} ${agreed}`;
  }) as Six;
}

/** Conditionnel présent: the future stem with the imparfait endings (j’irais, tu viendrais). */
export function conditionnel(verb: string): Six {
  const stem = futurSimple(verb)['je'].slice(0, -2);
  const endings = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'];
  return endings.map((e) => `${stem}${e}`) as Six;
}

/** Conditionnel passé: conditionnel of avoir / être + participle. */
export function conditionnelPasse(verb: string): Six {
  const aux = conditionnel(ETRE_VERBS.has(verb) ? 'être' : 'avoir');
  const part = participle(verb);
  return FRENCH_PRONOUNS.map((p, i) => {
    const agreed = ETRE_VERBS.has(verb) && PLURAL.has(p) ? `${part}s` : part;
    return `${aux[i]} ${agreed}`;
  }) as Six;
}

// ---- the unit builder -------------------------------------------------------------------------

interface Games {
  title: string;
  description: string;
  tags: TagId[];
  lesson?: LessonId;
  difficulty?: 1 | 2 | 3;
  minutes?: number;
}

export interface UnitSpec {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  emoji: string;
  goals: string[];
  grammar: string[];
  /** vocabulary fields: one set of flashcards each */
  fields: (Games & { key: string; field: string; rows: VocabRow[] })[];
  /** exact vocabulary entries picked for the meaning quiz / memory board / listening */
  quiz: string[];
  memory: string[];
  listen: string[];
  /** the topic tags put on the vocabulary games */
  topicTags: TagId[];
  gaps: (Games & { key: string; items: GapItem[] })[];
  sorts: (Games & {
    key: string;
    instruction: string;
    buckets: { id: string; label: string; emoji: string }[];
    cards: [text: string, bucket: string, english: string][];
  })[];
  conjugation?: Games & { key: string; tables: Table[] };
  sentences: ReturnType<typeof sent>[];
  spell: SpellItem[];
  scenes: Scene[];
  blitz: ReturnType<typeof tf>[];
  challenge: QuizQuestion[];
  /** tags of the sentence builder, blitz and challenge; the grammar tag(s) of the unit */
  grammarTags: TagId[];
}

export function buildUnit(spec: UnitSpec): UnitContent {
  const U = spec.id;
  const sets = spec.fields.map((f) => ({ ...f, vocab: vocabList(U, f.field, f.rows) }));
  const vocab = sets.flatMap((s) => s.vocab);
  const acts = [
    ...sets.map((s) =>
      activity(
        U,
        s.key,
        'flashcards',
        {
          title: s.title,
          description: s.description,
          tags: ['vocabulary', ...s.tags],
          difficulty: 1,
          estMinutes: s.minutes ?? 3,
        },
        flashcards(s.vocab),
      ),
    ),
    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Pick the English meaning of the French word.',
        tags: ['vocabulary', ...spec.topicTags],
        difficulty: 2,
        estMinutes: 4,
      },
      quizDeEn(byDe(vocab, ...spec.quiz), vocab),
    ),
    activity(
      U,
      'memory-words',
      'memory',
      {
        title: 'Match the words',
        description: 'Match each French word with its English meaning.',
        tags: ['vocabulary', ...spec.topicTags],
        difficulty: 2,
        estMinutes: 3,
      },
      memory(byDe(vocab, ...spec.memory)),
    ),
    activity(
      U,
      'listen-words',
      'listen',
      {
        title: 'Listen and pick the meaning',
        description: 'Listen to the word and pick what it means.',
        tags: ['listening', ...spec.topicTags],
        difficulty: 2,
        estMinutes: 4,
      },
      listen(byDe(vocab, ...spec.listen), vocab),
    ),
    ...spec.gaps.map((g) =>
      activity(
        U,
        g.key,
        'gapfill',
        {
          title: g.title,
          description: g.description,
          tags: ['grammar', ...g.tags],
          difficulty: g.difficulty ?? 2,
          estMinutes: g.minutes ?? 5,
          ...(g.lesson ? { lesson: g.lesson } : {}),
        },
        { items: g.items },
      ),
    ),
    ...spec.sorts.map((s) =>
      activity(
        U,
        s.key,
        'sortit',
        {
          title: s.title,
          description: s.description,
          tags: ['grammar', ...s.tags],
          difficulty: s.difficulty ?? 2,
          estMinutes: s.minutes ?? 3,
          ...(s.lesson ? { lesson: s.lesson } : {}),
        },
        {
          instruction: s.instruction,
          buckets: s.buckets,
          items: s.cards.map(([text, bucket, translation], i) => ({
            id: `c${i}`,
            text,
            bucket,
            speak: text,
            translation,
          })),
        },
      ),
    ),
    ...(spec.conjugation
      ? [
          activity(
            U,
            spec.conjugation.key,
            'conjugation',
            {
              title: spec.conjugation.title,
              description: spec.conjugation.description,
              tags: ['grammar', ...spec.conjugation.tags],
              difficulty: spec.conjugation.difficulty ?? 3,
              estMinutes: spec.conjugation.minutes ?? 4,
              ...(spec.conjugation.lesson ? { lesson: spec.conjugation.lesson } : {}),
            },
            { tables: spec.conjugation.tables },
          ),
        ]
      : []),
    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build a sentence',
        description: 'Put the words in the right order.',
        tags: ['grammar', ...spec.grammarTags],
        difficulty: 2,
        estMinutes: 5,
      },
      { items: spec.sentences },
    ),
    activity(
      U,
      'spell-words',
      'spell',
      {
        title: 'Spell the words',
        description: 'Unscramble, type or write what you hear. Accents are optional here.',
        tags: ['spelling', ...spec.topicTags],
        difficulty: 2,
        estMinutes: 4,
      },
      { items: spec.spell },
    ),
    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Conversations',
        description: 'Choose the right reply in three everyday and formal situations.',
        tags: ['communication', ...spec.topicTags],
        difficulty: 3,
        estMinutes: 6,
      },
      { scenes: spec.scenes },
    ),
    activity(
      U,
      'blitz',
      'blitz',
      {
        title: 'Unit blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'grammar', ...spec.grammarTags],
        difficulty: 2,
        estMinutes: 2,
      },
      { seconds: 50, statements: spec.blitz },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Unit challenge',
        description: 'Show what you know: a mixed final quiz.',
        tags: ['vocabulary', 'grammar', ...spec.grammarTags],
        difficulty: 3,
        estMinutes: 5,
      },
      { questions: spec.challenge },
    ),
  ];
  return {
    unit: unitFr({
      id: U,
      order: spec.order,
      title: spec.title,
      subtitle: spec.subtitle,
      emoji: spec.emoji,
      goals: spec.goals,
      grammar: spec.grammar,
      vocabFields: spec.fields.map((f) => f.field),
    }),
    vocab,
    activities: acts,
  };
}
