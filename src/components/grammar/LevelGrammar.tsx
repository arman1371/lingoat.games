import { useContent } from '@/content/ContentProvider';
import { getLevelMeta } from '@/content/levels';
import { t } from '@/i18n';
import { GrammarRow } from './GrammarRow';
import { useGrammar } from './useGrammar';

/** The topics a level teaches, in unit order, each once; nothing for levels without lessons yet. */
export function LevelGrammar({ levelId }: { levelId: string }) {
  const grammar = useGrammar();
  const content = useContent();
  if (!grammar) return null;
  const seen = new Set<string>();
  const topics = content.units
    .filter((u) => u.levelId === levelId)
    .flatMap((u) => grammar.topicsOfUnit(u.id))
    .filter(({ topic }) => !seen.has(topic.id) && seen.add(topic.id))
    .map(({ topic }) => topic);
  if (topics.length === 0) return null;
  return (
    <section
      aria-labelledby="level-grammar"
      data-testid="level-grammar"
      className="flex flex-col gap-3"
    >
      <h2 id="level-grammar" className="font-display text-2xl font-semibold text-ink">
        {t('grammar.inLevel', { level: getLevelMeta(levelId)?.title ?? levelId })}
      </h2>
      <ul className="flex flex-col gap-2">
        {topics.map((topic) => (
          <li key={topic.id}>
            <GrammarRow topicId={topic.id} title={topic.title} detail={topic.tagline} />
          </li>
        ))}
      </ul>
    </section>
  );
}
