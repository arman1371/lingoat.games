import type { ContentIndex } from '@/content';
import { getItems, itemLabel } from '@/content/items';
import { isLessonId, lessonForTags, type LessonId } from '@/content/lessons';
import type { GameType } from '@/content/schema';

export interface WordRow {
  key: string;
  activityId: string;
  gameType: GameType;
  text: string;
  meaning?: string;
  score: number;
}

export interface GrammarRow {
  lesson: LessonId;
  score: number;
  /** item keys of this grammar point, worst first */
  keys: string[];
}

export interface Notebook {
  words: WordRow[];
  grammar: GrammarRow[];
}

/**
 * Splits the weak-item scores into grammar points (items that belong to a lesson) and plain words.
 * Keys whose activity or item no longer exists in the content are skipped.
 */
export function buildNotebook(weak: Record<string, number>, content: ContentIndex): Notebook {
  const words: WordRow[] = [];
  const grammar = new Map<LessonId, GrammarRow>();
  const scored: [string, number][] = [];

  for (const [key, score] of Object.entries(weak)) {
    if (score <= 0) continue;
    const [activityId, itemId] = key.split('::');
    const activity = content.activityById.get(activityId ?? '');
    const item = activity && getItems(activity).find((i) => i.id === itemId);
    if (!activity || !item) continue;

    const own = (item as { lesson?: string }).lesson;
    const lesson =
      (own && isLessonId(own) ? own : undefined) ?? activity.lesson ?? lessonForTags(activity.tags);
    if (lesson) {
      const row = grammar.get(lesson) ?? { lesson, score: 0, keys: [] };
      row.score += score;
      row.keys.push(key);
      grammar.set(lesson, row);
      scored.push([key, score]);
    } else {
      words.push({
        key,
        activityId: activity.id,
        gameType: activity.gameType,
        score,
        ...itemLabel(activity, item),
      });
    }
  }

  const rank = new Map(scored);
  const grammarRows = [...grammar.values()].map((g) => ({
    ...g,
    keys: g.keys.sort((a, b) => (rank.get(b) ?? 0) - (rank.get(a) ?? 0) || a.localeCompare(b)),
  }));
  words.sort((a, b) => b.score - a.score || a.text.localeCompare(b.text));
  grammarRows.sort((a, b) => b.score - a.score || a.lesson.localeCompare(b.lesson));
  return { words, grammar: grammarRows };
}

/** The item keys to practise: the highest-scoring words and grammar points first, up to `limit` items. */
export function weakSpotKeys({ words, grammar }: Notebook, limit = 15): string[] {
  const groups = [
    ...words.map((w) => ({ score: w.score, keys: [w.key] })),
    ...grammar.map((g) => ({ score: g.score, keys: g.keys })),
  ].sort((a, b) => b.score - a.score);
  const out: string[] = [];
  for (const g of groups) {
    for (const k of g.keys) if (out.length < limit) out.push(k);
  }
  return out;
}
