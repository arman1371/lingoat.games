import { Icon } from '@/components/ui/Icon';
import { Skeleton } from '@/components/ui/Skeleton';
import type { Unit } from '@/content/schema';
import { t } from '@/i18n';
import { GrammarRow } from './GrammarRow';
import { useGrammar } from './useGrammar';

/**
 * Grammar card of a unit: one row per topic the unit teaches, each opening the full lesson. Units
 * whose lessons are not written yet keep the one-line list of grammar points.
 */
export function UnitGrammar({ unit }: { unit: Unit }) {
  const grammar = useGrammar();
  if (!grammar) {
    return unit.grammar.length ? <Skeleton className="h-32" /> : null;
  }
  const topics = grammar.topicsOfUnit(unit.id);
  if (topics.length === 0) {
    return unit.grammar.length ? (
      <p className="text-sm text-muted">
        <strong>{t('unit.grammar')}:</strong> {unit.grammar.join(' · ')}
      </p>
    ) : null;
  }
  return (
    <section
      aria-labelledby="unit-grammar-title"
      data-testid="unit-grammar"
      className="flex flex-col gap-3 rounded-(--radius-card) border-2 border-primary-soft-line bg-primary-soft p-4"
    >
      <div className="flex items-center gap-2 text-on-primary-soft">
        <Icon name="book" size={20} />
        <h2 id="unit-grammar-title" className="font-display text-lg font-semibold">
          {t('unit.grammar')}
        </h2>
        <span className="ml-auto text-sm font-bold">
          {topics.length === 1 ? t('grammar.topicsOne') : t('grammar.topics', { n: topics.length })}
        </span>
      </div>
      <p className="text-sm text-muted">{t('grammar.cardHint')}</p>
      <ul className="flex flex-col gap-2">
        {topics.map(({ topic, note }) => (
          <li key={topic.id}>
            <GrammarRow topicId={topic.id} title={topic.title} detail={note ?? topic.tagline} />
          </li>
        ))}
      </ul>
    </section>
  );
}
