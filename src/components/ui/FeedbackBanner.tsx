import type { ReactNode } from 'react';
import { Icon, type IconName } from './Icon';

export type FeedbackKind = 'correct' | 'almost' | 'wrong';

/** Tinted sheet plus the round badge that carries the verdict, from the design's Feedback Sheet. */
const STYLE: Record<FeedbackKind, { sheet: string; badge: string; icon: IconName }> = {
  correct: {
    sheet: 'bg-success-soft border-success-soft-line text-on-success-soft',
    badge: 'bg-success text-on-primary',
    icon: 'check',
  },
  almost: {
    sheet: 'bg-warning-soft border-warning-soft-line text-on-warning-soft',
    badge: 'bg-warning text-on-primary',
    icon: 'warning',
  },
  wrong: {
    sheet: 'bg-danger-soft border-danger-soft-line text-on-danger-soft',
    badge: 'bg-danger text-on-primary',
    icon: 'close',
  },
};

interface Props {
  kind: FeedbackKind;
  title: string;
  children?: ReactNode;
}

/** Announced politely to screen readers; sits at the bottom of a game after each answer. */
export function FeedbackBanner({ kind, title, children }: Props) {
  const s = STYLE[kind];
  return (
    <div
      role="status"
      aria-live="polite"
      data-testid="feedback"
      data-kind={kind}
      className={`anim-pop flex flex-col gap-3 rounded-3xl border-2 p-4 ${s.sheet} ${kind === 'wrong' ? 'anim-shake' : ''}`}
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${s.badge}`}
        >
          <Icon name={s.icon} size={22} />
        </span>
        <p className="min-w-0 flex-1 font-display text-xl font-bold">{title}</p>
      </div>
      {children ? <div className="min-w-0 text-ink">{children}</div> : null}
    </div>
  );
}
