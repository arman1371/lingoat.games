import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { Chip } from '@/components/ui/Chip';
import { Skeleton } from '@/components/ui/Skeleton';
import { StatePanel } from '@/components/ui/StatePanel';
import { TextField } from '@/components/ui/TextField';
import { LEVELS } from '@/content/levels';
import { groupTopics, levelsWithTopics } from '@/lib/grammarFilter';
import { t } from '@/i18n';
import { GrammarRow } from './GrammarRow';
import { useGrammar } from './useGrammar';

/** Every written lesson, grouped by the level that first teaches it; `?q=` searches, `?level=` filters. */
export function GrammarIndex() {
  const grammar = useGrammar();
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const lvl = params.get('level') ?? '';
  const set = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const groups = useMemo(
    () => (grammar ? groupTopics(grammar.GRAMMAR_TOPICS, LEVELS, q, lvl) : []),
    [grammar, q, lvl],
  );

  if (!grammar) {
    return (
      <div role="status" className="flex flex-col gap-3">
        <p className="sr-only">{t('grammar.loading')}</p>
        <Skeleton className="h-14" />
        <Skeleton className="h-14" />
        <Skeleton className="h-14" />
      </div>
    );
  }
  const levels = levelsWithTopics(grammar.GRAMMAR_TOPICS, LEVELS);

  return (
    <div className="flex flex-col gap-4" data-testid="grammar-index">
      <TextField
        label={t('grammar.search')}
        hideLabel
        type="search"
        value={q}
        onChange={(e) => set('q', e.target.value)}
        placeholder={t('grammar.search')}
      />
      {levels.length > 1 ? (
        <fieldset className="flex flex-wrap gap-2">
          <legend className="sr-only">{t('library.level')}</legend>
          <Chip selected={lvl === ''} onToggle={() => set('level', '')}>
            {t('grammar.all')}
          </Chip>
          {levels.map((l) => (
            <Chip
              key={l.id}
              selected={lvl === l.id}
              onToggle={() => set('level', lvl === l.id ? '' : l.id)}
            >
              {l.title}
            </Chip>
          ))}
        </fieldset>
      ) : null}
      {groups.length === 0 ? (
        <StatePanel kind="empty" title={t('grammar.none')} />
      ) : (
        groups.map(({ level, topics }) => (
          <section
            key={level.id}
            aria-labelledby={`grammar-level-${level.id}`}
            className="flex flex-col gap-2"
          >
            <h2
              id={`grammar-level-${level.id}`}
              className="flex items-baseline gap-2 text-sm font-extrabold uppercase tracking-wide text-on-primary-soft"
            >
              {level.title}
              <span className="text-xs font-bold normal-case text-muted">
                {topics.length === 1
                  ? t('grammar.topicsOne')
                  : t('grammar.topics', { n: topics.length })}
              </span>
            </h2>
            <ul className="flex flex-col gap-2">
              {topics.map((topic) => (
                <li key={topic.id}>
                  <GrammarRow topicId={topic.id} title={topic.title} detail={topic.tagline} />
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}
