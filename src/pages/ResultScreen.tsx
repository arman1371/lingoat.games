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
  const mistakes = result.mistakes.length;
  return (
    <section
      className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-3 short:gap-2 pb-[max(1rem,env(safe-area-inset-bottom))] text-center"
      aria-labelledby="result-title"
    >
      {outcome.stars === 3 ? <Confetti /> : null}
      <div className="flex flex-col items-center gap-2">
        {/* shrinks with the screen height so the whole result fits without scrolling */}
        <Mascot mood={mood} size={160} className="anim-pop h-auto w-[clamp(5rem,12dvh,10rem)] short:w-[clamp(3rem,9dvh,10rem)] tiny:hidden" />
        <h1
          id="result-title"
          className="font-display text-4xl short:text-3xl font-extrabold leading-tight text-balance text-ink"
        >
          {t('result.title')}
        </h1>
        <p className="font-bold text-ink">{title}</p>
        <p className="text-balance text-muted">{t(`result.tier${outcome.stars}`)}</p>
      </div>
      <Stars count={outcome.stars} size="lg" animate />
      <ul className="anim-rise w-full divide-y-2 divide-line overflow-hidden rounded-(--radius-lg) border-2 border-line bg-surface text-left shadow-[0_4px_0_var(--edge)]">
        <li className="flex items-center gap-3 p-2">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-xp-soft text-on-xp-soft">
            <Icon name="zap" size={24} />
          </span>
          <p
            className="min-w-0 flex-1 font-display text-2xl font-extrabold text-ink"
            data-testid="xp-gained"
          >
            {t('result.xp', { n: outcome.xpGained })}
          </p>
          {outcome.newBest ? (
            <span className="rounded-full bg-xp-soft px-3 py-1 text-sm font-bold text-on-xp-soft">
              {t('result.newBest')}
            </span>
          ) : null}
        </li>
        <li className="flex items-center gap-3 p-2">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-success-soft text-on-success-soft">
            <Icon name="target" size={24} />
          </span>
          <p
            className="min-w-0 flex-1 font-display text-2xl font-extrabold text-ink"
            data-testid="accuracy"
          >
            {t('result.accuracy', { n: pct })}
          </p>
          <span className="font-display text-lg font-extrabold text-muted tabular-nums">
            {result.correct} / {result.total}
          </span>
        </li>
      </ul>
      {mistakes > 0 ? (
        <Link
          to="/review"
          data-testid="mistakes-note"
          className="flex w-full items-center gap-3 rounded-2xl bg-warning-soft px-3 py-2 text-left font-medium text-on-warning-soft hover:bg-warning-soft-border"
        >
          <span className="flex-1">
            {t(mistakes === 1 ? 'result.mistakesOne' : 'result.mistakesMany', { n: mistakes })}
          </span>
          <Icon name="chevron-right" size={20} />
        </Link>
      ) : null}
      <div className="flex w-full flex-col gap-3">
        {nextTo ? (
          <Link to={nextTo}>
            <Button size="lg" block data-testid="next-activity">
              {t('result.nextUp')}: {nextTitle}
            </Button>
          </Link>
        ) : null}
        <Button
          variant={nextTo ? 'secondary' : 'primary'}
          size="lg"
          onClick={onReplay}
          data-testid="replay"
        >
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
