import { useEffect } from 'react';
import { Icon, type IconName } from './Icon';

type Tone = 'success' | 'error' | 'info';

const STYLE: Record<Tone, string> = {
  success: 'border-success-soft-line bg-success-soft text-on-success-soft',
  error: 'border-danger-soft-line bg-danger-soft text-on-danger-soft',
  info: 'border-info-soft-line bg-info-soft text-on-info-soft',
};
const ICON: Record<Tone, IconName> = {
  success: 'check-circle',
  error: 'x-circle',
  info: 'info',
};

interface Props {
  message: string | null;
  tone?: Tone;
  onDismiss: () => void;
  /** Milliseconds before it closes itself. */
  duration?: number;
}

/** Short, polite confirmation. The live region stays mounted so the message is announced when it appears. */
export function Toast({ message, tone = 'success', onDismiss, duration = 4000 }: Props) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onDismiss]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-24 z-50 flex justify-center px-4 md:bottom-8"
    >
      {message ? (
        <p
          className={`anim-pop pointer-events-auto flex items-center gap-2 rounded-2xl border-2 px-4 py-3 font-bold shadow-(--shadow-3) ${STYLE[tone]}`}
        >
          <Icon name={ICON[tone]} size={20} />
          {message}
        </p>
      ) : null}
    </div>
  );
}
