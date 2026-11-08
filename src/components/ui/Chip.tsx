import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon } from './Icon';

interface ChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  selected: boolean;
  onToggle: () => void;
  children: ReactNode;
}

/** Toggle chip used by the filter bar. */
export function Chip({ selected, onToggle, children, className = '', ...rest }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onToggle}
      className={`inline-flex min-h-11 items-center gap-2 rounded-full border-2 px-4 text-sm font-bold transition-colors duration-180 ${
        selected
          ? 'border-primary-soft-line bg-primary-soft text-on-primary-soft'
          : 'border-line bg-surface text-muted hover:border-line-strong hover:text-ink'
      } ${className}`}
      {...rest}
    >
      {selected ? <Icon name="check" size={16} /> : null}
      {children}
    </button>
  );
}

/** Small non-interactive label. */
export function Tag({
  children,
  tone = 'neutral',
}: {
  children: ReactNode;
  tone?: 'neutral' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'xp' | 'streak';
}) {
  const tones = {
    neutral: 'bg-sunken text-ink',
    primary: 'bg-primary-soft text-on-primary-soft',
    success: 'bg-success-soft text-on-success-soft',
    warning: 'bg-warning-soft text-on-warning-soft',
    error: 'bg-danger-soft text-on-danger-soft',
    info: 'bg-info-soft text-on-info-soft',
    xp: 'bg-xp-soft text-on-xp-soft',
    streak: 'bg-streak-soft text-on-streak-soft',
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
