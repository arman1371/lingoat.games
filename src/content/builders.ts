import type { Activity, ConfigOf, GameType, Unit, Vocab } from './schema';
import type { TagId } from './tags';
import type { LessonId } from './lessons';
import { createRng, hashString, pickMany, shuffle } from '@/lib/rng';

/** [german, english, emoji, article?, plural?] – compact way to author vocabulary. */
export type VocabRow = readonly [
  de: string,
  en: string,
  emoji?: string,
  article?: 'der' | 'die' | 'das',
  plural?: string,
];

export function slug(input: string): string {
  return input
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function vocabList(unitId: string, field: string, rows: readonly VocabRow[]): Vocab[] {
  const used = new Set<string>();
  return rows.map(([de, en, emoji, article, plural]) => {
    // "sie" and "Sie" slug to the same id – suffix repeats so ids stay unique
    let id = `${unitId}-${slug(de)}`;
    for (let n = 2; used.has(id); n++) id = `${unitId}-${slug(de)}-${n}`;
    used.add(id);
    return {
      id,
      de,
      en,
      field,
      ...(emoji ? { emoji } : {}),
      ...(article ? { article } : {}),
      ...(plural ? { plural } : {}),
    };
  });
}

/** "der Apfel" for nouns, plain text otherwise. A1.1 spells some nouns with the article already ("der Name"). */
export const label = (v: Vocab): string =>
  v.article && !v.de.startsWith(`${v.article} `) ? `${v.article} ${v.de}` : v.de;

export interface Meta {
  title: string;
  description: string;
  tags: TagId[];
  difficulty: 1 | 2 | 3;
  estMinutes: number;
  /** see `lesson` in schema.ts – only needed when the tags mix several grammar points */
  lesson?: LessonId;
}

export function activity<T extends GameType>(
  unitId: string,
  key: string,
  gameType: T,
  meta: Meta,
  config: ConfigOf<T>,
): Activity {
  return { id: `${unitId}-${key}`, unitId, gameType, ...meta, config } as unknown as Activity;
}

export function unit(u: Omit<Unit, 'levelId'> & { levelId?: string }): Unit {
  return { levelId: 'a1-1', ...u };
}

// ---- generators from vocabulary ---------------------------------------------------------------

function distractors<T>(
  correct: T,
  pool: readonly T[],
  key: (x: T) => string,
  count: number,
  seedKey: string,
): T[] {
  const rng = createRng(hashString(seedKey));
  const seen = new Set([key(correct)]);
  const out: T[] = [];
  for (const candidate of shuffle(pool, rng)) {
    if (seen.has(key(candidate))) continue;
    seen.add(key(candidate));
    out.push(candidate);
    if (out.length === count) break;
  }
  return out;
}

export function flashcards(
  vocab: readonly Vocab[],
  front: 'de' | 'en' = 'de',
): ConfigOf<'flashcards'> {
  return {
    cards: vocab.map((v) => ({
      id: v.id,
      front: front === 'de' ? label(v) : v.en,
      back: front === 'de' ? v.en : label(v),
      ...(v.emoji ? { emoji: v.emoji } : {}),
      speak: label(v),
      ...(v.plural ? { note: `Plural: die ${v.plural}` } : {}),
    })),
  };
}

type QuizQuestion = ConfigOf<'quiz'>['questions'][number];

function quizQuestions(
  vocab: readonly Vocab[],
  pool: readonly Vocab[],
  build: (v: Vocab) => { prompt: string; answer: string; emoji?: string; speak?: string },
  optionOf: (v: Vocab) => string,
  count: number,
): QuizQuestion[] {
  return vocab.map((v) => {
    const { prompt, answer, emoji, speak } = build(v);
    const wrong = distractors(v, pool, optionOf, count - 1, `${v.id}:${prompt}`).map(optionOf);
    return {
      id: v.id,
      prompt,
      answer,
      options: [answer, ...wrong],
      ...(emoji ? { emoji } : {}),
      ...(speak ? { speak } : {}),
    };
  });
}

export function quizDeEn(
  vocab: readonly Vocab[],
  pool: readonly Vocab[] = vocab,
  options = 4,
): ConfigOf<'quiz'> {
  return {
    questions: quizQuestions(
      vocab,
      pool,
      (v) => ({ prompt: label(v), answer: v.en, speak: label(v) }),
      (v) => v.en,
      options,
    ),
  };
}

export function quizEnDe(
  vocab: readonly Vocab[],
  pool: readonly Vocab[] = vocab,
  options = 4,
): ConfigOf<'quiz'> {
  return {
    questions: quizQuestions(
      vocab,
      pool,
      (v) => ({ prompt: v.en, answer: label(v) }),
      label,
      options,
    ),
  };
}

export function quizEmoji(
  vocab: readonly Vocab[],
  pool: readonly Vocab[] = vocab,
  options = 4,
): ConfigOf<'quiz'> {
  const withEmoji = vocab.filter((v) => v.emoji);
  return {
    questions: quizQuestions(
      withEmoji,
      pool,
      (v) => ({ prompt: 'What is this?', answer: label(v), emoji: v.emoji }),
      label,
      options,
    ),
  };
}

export function memory(vocab: readonly Vocab[], side: 'en' | 'emoji' = 'en'): ConfigOf<'memory'> {
  return {
    pairs: vocab.map((v) => ({
      id: v.id,
      a: label(v),
      b: side === 'emoji' ? (v.emoji ?? v.en) : v.en,
    })),
  };
}

export function listen(
  vocab: readonly Vocab[],
  pool: readonly Vocab[] = vocab,
  options = 4,
): ConfigOf<'listen'> {
  return {
    items: vocab.map((v) => ({
      id: v.id,
      speak: label(v),
      transcript: `${label(v)} = ${v.en}`,
      answer: v.en,
      options: [
        v.en,
        ...distractors(v, pool, (x) => x.en, options - 1, `listen:${v.id}`).map((x) => x.en),
      ],
    })),
  };
}

export function spell(
  vocab: readonly Vocab[],
  mode: 'unscramble' | 'type' | 'dictation',
): ConfigOf<'spell'> {
  return {
    items: vocab.map((v) => ({
      id: v.id,
      mode,
      answer: v.de,
      hint: mode === 'dictation' ? `Type what you hear (${v.en})` : v.en,
      ...(v.emoji ? { emoji: v.emoji } : {}),
      speak: label(v),
    })),
  };
}

export function pick<T>(items: readonly T[], count: number, seedKey: string): T[] {
  return pickMany(items, count, createRng(hashString(seedKey)));
}

export function byDe(vocab: readonly Vocab[], ...words: string[]): Vocab[] {
  return words.map((w) => {
    const v = vocab.find((x) => x.de === w);
    if (!v) throw new Error(`Unknown vocab "${w}"`);
    return v;
  });
}
