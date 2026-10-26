import type { GrammarTopic } from '@/content/grammar';
import type { LevelMeta } from '@/content/schema';

export interface TopicGroup {
  level: LevelMeta;
  topics: GrammarTopic[];
}

/** The levels that have at least one topic, in level order: the filter chips of the grammar page. */
export const levelsWithTopics = (
  topics: readonly GrammarTopic[],
  levels: readonly LevelMeta[],
): LevelMeta[] => levels.filter((l) => topics.some((t) => t.level === l.id));

/**
 * Topics grouped by the level that first teaches them, in level order. `q` matches title and tagline,
 * `levelId` limits the result to one level; levels without a match are dropped.
 */
export function groupTopics(
  topics: readonly GrammarTopic[],
  levels: readonly LevelMeta[],
  q = '',
  levelId = '',
): TopicGroup[] {
  const needle = q.trim().toLowerCase();
  return levels
    .map((level) => ({
      level,
      topics: topics.filter(
        (t) =>
          t.level === level.id &&
          (!levelId || level.id === levelId) &&
          (!needle || `${t.title} ${t.tagline}`.toLowerCase().includes(needle)),
      ),
    }))
    .filter((g) => g.topics.length > 0);
}
