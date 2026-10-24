import { Link } from 'react-router';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { StatePanel } from '@/components/ui/StatePanel';
import { useContent } from '@/content/ContentProvider';
import { playUrl } from '@/app/path';
import { GAME_TYPE_LABELS } from '@/lib/filters';
import { dayNumber, isDue } from '@/lib/srs';
import { t } from '@/i18n';
import { useProgressStore } from '@/store/progressStore';

export function ReviewPage() {
  const content = useContent();
  const mistakes = useProgressStore((s) => s.mistakes);
  const today = dayNumber();
  const all = Object.values(mistakes).filter((m) => content.activityById.has(m.activityId));
  const due = all.filter((m) => isDue(m, today));

  const byActivity = new Map<string, number>();
  for (const m of due) byActivity.set(m.activityId, (byActivity.get(m.activityId) ?? 0) + 1);
  const groups = [...byActivity.entries()];
  const [first, ...rest] = groups.map(([id]) => id);

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-extrabold text-ink">📦 {t('review.title')}</h1>
        <p className="text-muted">{t('review.intro')}</p>
      </header>

      {due.length === 0 ? (
        <div data-testid="review-empty">
          <StatePanel kind="empty" title={t('review.emptyTitle')}>
            {t('review.empty')}
          </StatePanel>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between gap-3">
            <p className="font-bold text-ink" data-testid="review-count">
              {due.length} due · {all.length} in the box
            </p>
            <Link to={`${playUrl(first!, rest)}${rest.length ? '&' : '?'}review=1`}>
              <Button icon="▶️" data-testid="start-review">
                {t('review.start', { n: due.length })}
              </Button>
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2" aria-label="Review groups">
            {groups.map(([id, n]) => {
              const a = content.activityById.get(id)!;
              return (
                <li key={id}>
                  <Card className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-2xl"
                    >
                      {GAME_TYPE_LABELS[a.gameType].emoji}
                    </span>
                    <div>
                      <p className="font-extrabold text-ink">{a.title}</p>
                      <p className="text-sm text-muted">
                        {n} item{n === 1 ? '' : 's'}
                      </p>
                    </div>
                  </Card>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default ReviewPage;
