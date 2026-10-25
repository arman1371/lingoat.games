import { Icon } from './ui/Icon';
import { ProgressRing } from './ui/ProgressRing';
import { t } from '@/i18n';

/** Today's XP against the daily goal: ring, text and what is left. */
export function DailyGoalCard({ xp, goal }: { xp: number; goal: number }) {
  const left = Math.max(0, goal - xp);
  return (
    <section
      aria-labelledby="daily-goal-title"
      data-testid="daily-goal"
      className="flex items-center gap-4 rounded-[20px] border border-line bg-surface p-4 shadow-(--shadow-1)"
    >
      <ProgressRing value={goal > 0 ? xp / goal : 0} label={t('dailyGoal.title')} tone="xp" />
      <div className="flex min-w-0 flex-col gap-1">
        <h2 id="daily-goal-title" className="font-bold text-ink">
          {t('dailyGoal.title')}
        </h2>
        <p className="text-sm text-muted">{t('dailyGoal.collected', { xp, goal })}</p>
        {left > 0 ? (
          <span className="inline-flex w-fit items-center gap-1 rounded-full bg-xp-soft px-2 py-0.5 text-xs font-bold text-on-xp-soft">
            <Icon name="zap" size={14} />
            {t('dailyGoal.left', { n: left })}
          </span>
        ) : (
          <span className="inline-flex w-fit items-center gap-1 rounded-full bg-success-soft px-2 py-0.5 text-xs font-bold text-on-success-soft">
            <Icon name="check-circle" size={14} />
            {t('dailyGoal.done')}
          </span>
        )}
      </div>
    </section>
  );
}
