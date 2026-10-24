import { useId, type ComponentPropsWithRef } from 'react';

interface Props extends Omit<ComponentPropsWithRef<'input'>, 'id'> {
  label: string;
  hint?: string;
  error?: string;
  /** Hide the visible label but keep it for assistive technology. */
  hideLabel?: boolean;
}

/** Labelled text input with optional hint and error; the error is linked with `aria-describedby`. */
export function TextField({
  label,
  hint,
  error,
  hideLabel,
  className = '',
  type = 'text',
  ...rest
}: Props) {
  const id = useId();
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const describedBy = [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(' ');
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={hideLabel ? 'sr-only' : 'text-sm font-bold text-ink'}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy || undefined}
        className={`min-h-12 w-full rounded-xl border-2 bg-surface px-4 text-base text-ink placeholder:text-muted ${
          error ? 'border-danger' : 'border-line-strong'
        } ${className}`}
        {...rest}
      />
      {hint ? (
        <p id={hintId} className="text-sm text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="text-sm font-bold text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
