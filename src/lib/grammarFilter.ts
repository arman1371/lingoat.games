import type { GrammarTopic } from '@/content/grammar';
import type { LevelMeta } from '@/content/schema';

export interface TopicGroup {
  level: LevelMeta;
  topics: GrammarTopic[];
}

/** First two characters of the level id (`a1`, `b2` …): the families offered as filter chips. */
export const levelFamilies = (topics: readonly GrammarTopic[]): string[] => [
  ...new Set(topics.map((t) => t.level.slice(0, 2))),
];

/**
 * Topics grouped by the level that first teaches them, in level order. `q` matches title and tagline,
 * `family` (`a1`) limits the levels; levels without a match are dropped.
 */
export function groupTopics(
  topics: readonly GrammarTopic[],
  levels: readonly LevelMeta[],
  q = '',
  family = '',
): TopicGroup[] {
  const needle = q.trim().toLowerCase();
  return levels
    .map((level) => ({
      level,
      topics: topics.filter(
        (t) =>
          t.level === level.id &&
          (!family || level.id.startsWith(family)) &&
          (!needle || `${t.title} ${t.tagline}`.toLowerCase().includes(needle)),
      ),
    }))
    .filter((g) => g.topics.length > 0);
}
