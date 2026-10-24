import { Link } from 'react-router';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { StatCard } from '@/components/ui/StatCard';
import { Stars } from '@/components/ui/Stars';
import { useContent } from '@/content/ContentProvider';
import { LEVELS } from '@/content/levels';
import { dayNumber } from '@/lib/srs';
import { t } from '@/i18n';
import { useProgressStore, visibleStreak } from '@/store/progressStore';

export function ProgressPage() {
  const content = useContent();
  const xp = useProgressStore((s) => s.xp);
  const streak = useProgressStore((s) => s.streak);
  const activities = useProgressStore((s) => s.activities);
  const mistakes = useProgressStore((s) => Object.keys(s.mistakes).length);

  const current = visibleStreak(streak, dayNumber());
  const played = Object.values(activities);
  const stars = played.reduce((sum, a) => sum + a.stars, 0);

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-semibold text-ink">{t('progressPage.title')}</h1>
        <p className="text-muted">{t('progressPage.intro')}</p>
      </header>

      <section aria-label="Your stats" className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <StatCard icon="zap" tone="xp" value={xp} label={t('progressPage.xp')} />
        <StatCard
          icon="flame"
          tone="streak"
          value={current}
          label={t('progressPage.streak')}
          hint={t('progressPage.streakBest', { n: streak.longest })}
        />
        <StatCard
          icon="trophy"
          tone="success"
          value={played.length}
          label={t('progressPage.games')}
        />
        <StatCard
          icon="star"
          tone="info"
          value={stars}
          label={t('progressPage.stars', { n: stars })}
        />
      </section>

      <section aria-labelledby="levels-title" className="flex flex-col gap-3">
        <h2 id="levels-title" className="text-2xl font-semibold text-ink">
          {t('progressPage.levels')}
        </h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {LEVELS.filter((l) => l.status === 'available').map((level) => {
            const all = content.activities.filter(
              (a) => content.unitById.get(a.unitId)?.levelId === level.id,
            );
            const done = all.filter((a) => activities[a.id]);
            const levelStars = done.reduce((sum, a) => sum + (activities[a.id]?.stars ?? 0), 0);
            return (
              <li key={level.id}>
                <Link to={`/levels/${level.id}`} className="block h-full">
                  <Card interactive className="flex h-full flex-col gap-2">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold text-ink">{level.title}</h3>
                      <Stars
                        count={all.length ? Math.round((levelStars / (all.length * 3)) * 3) : 0}
                        size="sm"
                      />
                    </div>
                    <ProgressBar
                      value={all.length ? done.length / all.length : 0}
                      label={`${level.title} progress`}
                      tone="success"
                    />
                    <p className="text-sm font-bold text-muted">
                      {done.length} / {all.length} games
                    </p>
                  </Card>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <Link to="/review" className="block">
        <Card interactive className="flex items-center justify-between gap-3">
          <span className="font-semibold text-ink">{t('progressPage.review')}</span>
          <span className="text-sm font-bold text-muted">
            {t('progressPage.reviewHint', { n: mistakes })}
          </span>
        </Card>
      </Link>
    </div>
  );
}

export default ProgressPage;
