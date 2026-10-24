import { useRef, type KeyboardEvent, type ReactNode } from 'react';
import { Icon, type IconName } from './Icon';

interface Tab<T extends string> {
  value: T;
  label: string;
  icon?: IconName;
}

interface Props<T extends string> {
  /** Prefix for the generated ids that link each tab to its panel. */
  id: string;
  label: string;
  tabs: Tab<T>[];
  value: T;
  onChange: (v: T) => void;
}

const tabId = (id: string, v: string) => `${id}-tab-${v}`;
const panelId = (id: string, v: string) => `${id}-panel-${v}`;

/** WAI-ARIA tabs with automatic activation: one tab stop, arrow keys, Home and End move between tabs. */
export function Tabs<T extends string>({ id, label, tabs, value, onChange }: Props<T>) {
  const refs = useRef(new Map<string, HTMLButtonElement>());

  const onKeyDown = (e: KeyboardEvent, index: number) => {
    const last = tabs.length - 1;
    const target =
      e.key === 'ArrowRight'
        ? (index + 1) % tabs.length
        : e.key === 'ArrowLeft'
          ? (index - 1 + tabs.length) % tabs.length
          : e.key === 'Home'
            ? 0
            : e.key === 'End'
              ? last
              : -1;
    if (target < 0) return;
    e.preventDefault();
    const next = tabs[target]!;
    onChange(next.value);
    refs.current.get(next.value)?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label={label}
      className="grid gap-2 rounded-2xl bg-sunken p-1"
      style={{ gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` }}
    >
      {tabs.map((tab, i) => {
        const selected = tab.value === value;
        return (
          <button
            key={tab.value}
            ref={(el) => {
              if (el) refs.current.set(tab.value, el);
              else refs.current.delete(tab.value);
            }}
            id={tabId(id, tab.value)}
            role="tab"
            type="button"
            aria-selected={selected}
            aria-controls={panelId(id, tab.value)}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(tab.value)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl text-sm font-bold ${
              selected ? 'bg-surface text-primary shadow-(--shadow-1)' : 'text-muted hover:text-ink'
            }`}
          >
            {tab.icon ? <Icon name={tab.icon} size={18} /> : null}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

/** Panel for the tab with the same `id` and `value`. */
export function TabPanel({
  id,
  value,
  children,
}: {
  id: string;
  value: string;
  children: ReactNode;
}) {
  return (
    <div role="tabpanel" id={panelId(id, value)} aria-labelledby={tabId(id, value)}>
      {children}
    </div>
  );
}
