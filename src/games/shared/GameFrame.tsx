import { useContext, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';
import { FeedbackBanner, type FeedbackKind } from '@/components/ui/FeedbackBanner';
import { t } from '@/i18n';
import { useFocusOnMount } from './useFocusOnMount';
import { ProgressSlotContext } from './progressSlot';

interface FrameProps {
  index: number;
  total: number;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
}

/**
 * Common chrome for sequential games: progress bar (in the page's top row when it has a slot),
 * content that fills the screen, and a footer pinned to the bottom edge. The "3 / 8" counter is
 * only for screen readers; sighted learners see the bar.
 */
export function GameFrame({ index, total, title, children, footer }: FrameProps) {
  const slot = useContext(ProgressSlotContext);
  const bar = (
    <>
      <ProgressBar value={index / total} label="Progress" />
      <span className="sr-only" data-testid="counter">
        {Math.min(index + 1, total)} / {total}
      </span>
    </>
  );
  return (
    <section className="mx-auto flex w-full max-w-2xl flex-1 flex-col" aria-label={title ?? 'Game'}>
      {slot ? createPortal(bar, slot) : <div className="pb-2">{bar}</div>}
      <div className="flex flex-1 flex-col gap-4 pb-4 pt-2">{children}</div>
      {footer ? (
        <div className="sticky bottom-0 z-10 -mx-4 border-t border-line bg-bg px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3">
          {footer}
        </div>
      ) : null}
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
    <div className="flex flex-col gap-2">
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
