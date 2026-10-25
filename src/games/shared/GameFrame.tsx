import type { ReactNode } from 'react';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';
import { FeedbackBanner, type FeedbackKind } from '@/components/ui/FeedbackBanner';
import { t } from '@/i18n';
import { useFocusOnMount } from './useFocusOnMount';

interface FrameProps {
  index: number;
  total: number;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
}

/** Common chrome for sequential games: progress bar, counter, content, feedback footer. */
export function GameFrame({ index, total, title, children, footer }: FrameProps) {
  return (
    <section className="mx-auto flex w-full max-w-2xl flex-col gap-5" aria-label={title ?? 'Game'}>
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <ProgressBar value={index / total} label="Progress" />
        </div>
        <span className="text-sm font-bold tabular-nums text-muted" data-testid="counter">
          {Math.min(index + 1, total)} / {total}
        </span>
      </div>
      <div className="flex flex-col gap-5">{children}</div>
      <div className="min-h-24">{footer}</div>
    </section>
  );
}

interface FooterProps {
  kind: FeedbackKind;
  title: string;
  detail?: ReactNode;
  isLast: boolean;
  onNext: () => void;
}

/** Feedback + Continue button. The button grabs focus so Enter continues. */
export function FeedbackFooter({ kind, title, detail, isLast, onNext }: FooterProps) {
  const nextRef = useFocusOnMount<HTMLButtonElement>();
  return (
    <div className="flex flex-col gap-3">
      <FeedbackBanner kind={kind} title={title}>
        {detail}
      </FeedbackBanner>
      <Button
        ref={nextRef}
        size="lg"
        block
        variant={kind === 'correct' ? 'success' : kind === 'wrong' ? 'danger' : 'primary'}
        onClick={onNext}
        data-testid="continue"
      >
        {isLast ? t('result.title') : t('common.continue')}
      </Button>
    </div>
  );
}

export function verdictTitle(kind: FeedbackKind): string {
  return kind === 'correct'
    ? t('common.correct')
    : kind === 'almost'
      ? t('common.almost')
      : t('common.notQuite');
}
