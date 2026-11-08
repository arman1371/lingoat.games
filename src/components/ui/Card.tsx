import type { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** Raised 3D edge for cards that act as a target (the whole card is wrapped in a link/button). */
  interactive?: boolean;
  selected?: boolean;
}

export function Card({ className = '', interactive, selected, ...rest }: Props) {
  const tone = selected ? 'border-primary bg-primary-soft' : 'border-line bg-surface';
  const edge = interactive || selected ? 'shadow-[0_4px_0_var(--edge)]' : 'shadow-(--shadow-1)';
  return (
    <div
      className={`rounded-(--radius-card) border-2 p-4 ${tone} ${edge} ${className}`}
      {...rest}
    />
  );
}
