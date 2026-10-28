import { useContext, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';
import { FEEDBACK_TINT, FeedbackBanner, type FeedbackKind } from '@/components/ui/FeedbackBanner';
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
 * content that fills the screen, and a footer under it. While the round fits the screen the
 * footer sits on the bottom edge; a long round (a conversation, a table) simply scrolls and the
 * footer follows at its end, so only short games keep their button in view. The "3 / 8" counter
 * is only for screen readers; sighted learners see the bar.
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
      {/* a feedback panel in here pulls this padding back so its tint reaches the screen edges */}
      {footer ? (
        <div className="pb-[max(1rem,env(safe-area-inset-bottom))] pt-3">{footer}</div>
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

/**
 * Feedback panel + Continue button, one tinted surface across the bottom of the screen. The button
 * grabs focus so Enter continues.
 */
export function FeedbackFooter({ kind, title, detail, isLast, onNext }: FooterProps) {
  const nextRef = useFocusOnMount<HTMLButtonElement>();
  return (
    <div
      className={`-mx-4 -mb-[max(1rem,env(safe-area-inset-bottom))] -mt-3 flex flex-col gap-3 rounded-t-3xl px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 ${FEEDBACK_TINT[kind]}`}
    >
      <FeedbackBanner flat kind={kind} title={title}>
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
