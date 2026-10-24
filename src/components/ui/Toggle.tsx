import type { InputHTMLAttributes } from 'react';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'role' | 'onChange'> {
  label: string;
  hint?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

/** On/off switch: a real checkbox with `role="switch"`, so it keeps native keyboard and form behaviour. */
export function Toggle({ label, hint, checked, onChange, className = '', ...rest }: Props) {
  return (
    <label
      className={`flex min-h-11 cursor-pointer items-center justify-between gap-3 ${className}`}
    >
      <span className="flex flex-col">
        <span className="font-bold text-ink">{label}</span>
        {hint ? <span className="text-sm text-muted">{hint}</span> : null}
      </span>
      <span className="relative inline-flex h-8 w-13 shrink-0">
        <input
          type="checkbox"
          role="switch"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
          {...rest}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none h-8 w-13 rounded-full bg-control-off transition-colors peer-checked:bg-primary peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-focus"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow-(--shadow-1) transition-transform peer-checked:translate-x-5"
        />
      </span>
    </label>
  );
}
