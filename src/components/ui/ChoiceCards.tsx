import { useId } from 'react';

interface Props<T extends string> {
  label: string;
  value: T;
  options: { value: T; title: string; description: string }[];
  onChange: (v: T) => void;
}

/** Single choice with a title and an explanation per option. Radios underneath give arrow keys and a group name. */
export function ChoiceCards<T extends string>({ label, value, options, onChange }: Props<T>) {
  const name = useId();
  return (
    <fieldset className="flex flex-col gap-2 text-left">
      <legend className="sr-only">{label}</legend>
      {options.map((o) => {
        const selected = value === o.value;
        return (
          <label
            key={o.value}
            className={`grid cursor-pointer grid-cols-[auto_1fr] items-center gap-x-3 rounded-xl border-2 px-3.5 py-3 has-focus-visible:outline-[3px] has-focus-visible:outline-offset-2 has-focus-visible:outline-focus ${
              selected
                ? 'border-primary bg-primary-soft'
                : 'border-line bg-surface hover:bg-surface-2'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={selected}
              onChange={() => onChange(o.value)}
              className="sr-only"
            />
            <span
              aria-hidden="true"
              className={`row-span-2 size-5 shrink-0 rounded-full border-2 ${
                selected ? 'border-primary bg-primary' : 'border-line-strong'
              }`}
            />
            <span className="text-[0.9375rem] font-bold text-ink">{o.title}</span>
            <span className="text-[0.8125rem] text-muted">{o.description}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
