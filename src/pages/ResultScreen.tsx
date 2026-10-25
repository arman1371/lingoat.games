import { Link } from 'react-router';
import { Button } from '@/components/ui/Button';
import { Confetti } from '@/components/ui/Confetti';
import { Icon } from '@/components/ui/Icon';
import { Mascot } from '@/components/ui/Mascot';
import { Stars } from '@/components/ui/Stars';
import { accuracy, type GameResult } from '@/lib/scoring';
import { t } from '@/i18n';
import type { RecordOutcome } from '@/store/progressStore';

interface Props {
  title: string;
  result: GameResult;
  outcome: RecordOutcome;
  nextTo?: string;
  nextTitle?: string;
  backTo: string;
  backLabel: string;
  onReplay: () => void;
}

export function ResultScreen({
  title,
  result,
  outcome,
  nextTo,
  nextTitle,
  backTo,
  backLabel,
  onReplay,
}: Props) {
  const pct = Math.round(accuracy(result) * 100);
  const mood = outcome.stars === 3 ? 'celebrate' : outcome.stars === 2 ? 'happy' : 'thinking';
  return (
    <section
      className="mx-auto flex max-w-md flex-col items-center gap-5 py-6 text-center"
      aria-labelledby="result-title"
    >
      {outcome.stars === 3 ? <Confetti /> : null}
      <Mascot mood={mood} size={160} />
      <h1 id="result-title" className="font-display text-4xl font-bold text-ink">
        {t('result.title')}
      </h1>
      <p className="text-muted">{title}</p>
      <Stars count={outcome.stars} size="lg" />
      <ul className="grid w-full grid-cols-2 gap-3">
        <li className="flex flex-col items-center gap-1 rounded-2xl bg-xp-soft p-3 text-on-xp-soft">
          <Icon name="zap" size={24} />
          <p className="font-display text-2xl font-bold" data-testid="xp-gained">
            {t('result.xp', { n: outcome.xpGained })}
          </p>
          {outcome.newBest ? <p className="text-sm font-bold">{t('result.newBest')}</p> : null}
        </li>
        <li className="flex flex-col items-center gap-1 rounded-2xl bg-success-soft p-3 text-on-success-soft">
          <Icon name="target" size={24} />
          <p className="font-display text-2xl font-bold" data-testid="accuracy">
            {t('result.accuracy', { n: pct })}
          </p>
          <p className="text-sm font-medium">
            {result.correct} / {result.total}
          </p>
        </li>
      </ul>
      {result.mistakes.length > 0 ? (
        <p className="rounded-2xl bg-warning-soft p-3 text-ink" data-testid="mistakes-note">
          {result.mistakes.length} item{result.mistakes.length === 1 ? '' : 's'} added to your
          mistake box for later practice.
        </p>
      ) : null}
      <div className="flex w-full flex-col gap-3">
        {nextTo ? (
          <Link to={nextTo}>
            <Button size="lg" block data-testid="next-activity">
              {t('result.nextUp')}: {nextTitle}
            </Button>
          </Link>
        ) : null}
        <Button variant="secondary" size="lg" onClick={onReplay} data-testid="replay">
          {t('common.playAgain')}
        </Button>
        <Link to={backTo}>
          <Button variant="ghost" block>
            {backLabel}
          </Button>
        </Link>
      </div>
    </section>
  );
}
