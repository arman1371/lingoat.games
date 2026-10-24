import type { ReactNode } from 'react';
import { Mascot, type MascotMood } from './Mascot';

type Kind = 'empty' | 'offline' | 'error' | 'loading';

const MOOD: Record<Kind, MascotMood> = {
  empty: 'thinking',
  offline: 'sad',
  error: 'surprised',
  loading: 'sleeping',
};

interface Props {
  kind: Kind;
  title: string;
  children?: ReactNode;
  action?: ReactNode;
  /** Heading level for the title; pages that own the h1 pass 2. */
  as?: 'h1' | 'h2';
}

/** Full-width message for empty, offline, error and loading situations. Errors are announced at once. */
export function StatePanel({ kind, title, children, action, as: Heading = 'h2' }: Props) {
  return (
    <div
      role={kind === 'error' ? 'alert' : 'status'}
      data-kind={kind}
      className="mx-auto flex max-w-md flex-col items-center gap-3 px-4 py-12 text-center"
    >
      <Mascot mood={MOOD[kind]} size={96} />
      <Heading className="text-2xl font-semibold text-ink">{title}</Heading>
      {children ? <div className="text-muted">{children}</div> : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}
