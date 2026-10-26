import { Link, useLocation, useNavigate, useParams } from 'react-router';
import { GrammarLesson, LessonMeta } from '@/components/grammar/GrammarLesson';
import { useGrammar } from '@/components/grammar/useGrammar';
import { Icon } from '@/components/ui/Icon';
import { Skeleton } from '@/components/ui/Skeleton';
import { useContent } from '@/content/ContentProvider';
import { getLevelMeta } from '@/content/levels';
import { grammarUrl, playUrl } from '@/app/path';
import { practiceActivities } from '@/lib/grammarPractice';
import { t } from '@/i18n';
import { NotFoundPage } from './NotFoundPage';

const BACK_FALLBACK = '/library';

export function GrammarPage() {
  const { topicId = '' } = useParams();
  const grammar = useGrammar();
  const content = useContent();
  const navigate = useNavigate();
  // `key` is "default" on the first entry of a session: nothing to go back to, so link to the index
  const canGoBack = useLocation().key !== 'default';

  if (!grammar) {
    return (
      <div role="status" className="flex flex-col gap-4">
        <p className="sr-only">{t('grammar.loading')}</p>
        <Skeleton className="h-12" />
        <Skeleton className="h-40" />
      </div>
    );
  }
  const topic = grammar.grammarTopic(topicId);
  if (!topic) return <NotFoundPage />;

  const related = topic.related.flatMap((id) => grammar.grammarTopic(id) ?? []);
  const units = grammar
    .unitsOfTopic(topic.id)
    .flatMap((id) => content.unitById.get(id) ?? [])
    .sort((a, b) => a.levelId.localeCompare(b.levelId) || a.order - b.order);
  const practice = practiceActivities(content.activities, topic.id);
  const backClass = 'inline-flex items-center gap-1 self-start text-sm font-bold text-primary';

  return (
    <article className="mx-auto flex max-w-2xl flex-col gap-6">
      {canGoBack ? (
        <button type="button" onClick={() => void navigate(-1)} className={backClass}>
          <Icon name="chevron-left" size={16} />
          {t('common.back')}
        </button>
      ) : (
        <Link to={BACK_FALLBACK} className={backClass}>
          <Icon name="chevron-left" size={16} />
          {t('grammar.title')}
        </Link>
      )}
      <header className="flex flex-col gap-2">
        <LessonMeta levelLabel={getLevelMeta(topic.level)?.title ?? topic.level} />
        <h1 className="font-display text-4xl font-semibold leading-tight text-ink">
          {topic.title}
        </h1>
        <p className="text-lg text-muted">{topic.tagline}</p>
      </header>

      <GrammarLesson topic={topic} />

      {related.length ? (
        <section aria-labelledby="grammar-related" className="flex flex-col gap-3">
          <h2 id="grammar-related" className="font-display text-2xl font-semibold text-ink">
            {t('grammar.related')}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {related.map((r) => (
              <li key={r.id}>
                <Link
                  to={grammarUrl(r.id)}
                  className="press inline-flex min-h-11 items-center rounded-full border-2 border-line bg-surface px-4 text-sm font-bold text-ink"
                >
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {units.length ? (
        <section aria-labelledby="grammar-units" className="flex flex-col gap-3">
          <h2 id="grammar-units" className="font-display text-2xl font-semibold text-ink">
            {t('grammar.usedIn')}
          </h2>
          <ul className="flex flex-col gap-2">
            {units.map((u) => (
              <li key={u.id}>
                <Link
                  to={`/levels/${u.levelId}/units/${u.id}`}
                  className="press flex min-h-12 items-center gap-3 rounded-2xl border-2 border-line bg-surface px-4 font-bold text-ink"
                >
                  <span className="flex-1">
                    {getLevelMeta(u.levelId)?.title ?? u.levelId} · {u.title}
                  </span>
                  <Icon name="chevron-right" size={18} />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {practice.length ? (
        <Link
          to={playUrl(
            practice[0]!.id,
            practice.slice(1, 5).map((a) => a.id),
          )}
          data-testid="practise-topic"
          className="press inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-6 font-bold text-on-primary shadow-[0_4px_0_var(--primary-edge)] hover:bg-primary-hover"
        >
          <Icon name="play" size={18} filled />
          {t('grammar.practise')}
        </Link>
      ) : null}
    </article>
  );
}

export default GrammarPage;
