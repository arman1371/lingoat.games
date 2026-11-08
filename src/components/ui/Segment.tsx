interface Props<T extends string> {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}

/** Single-choice group rendered as buttons; radios underneath give arrow-key navigation and a group name. */
export function Segment<T extends string>({ label, value, options, onChange }: Props<T>) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-1 font-bold text-ink">{label}</legend>
      <div className="grid grid-flow-col gap-2">
        {options.map((o) => (
          <label
            key={o.value}
            className={`flex min-h-11 cursor-pointer items-center justify-center rounded-xl border-2 px-3 text-sm font-extrabold has-focus-visible:outline-[3px] has-focus-visible:outline-offset-2 has-focus-visible:outline-focus ${
              value === o.value
                ? 'border-primary bg-primary text-on-primary shadow-[0_4px_0_var(--primary-edge)]'
                : 'border-line bg-surface text-muted hover:border-line-strong hover:text-ink'
            }`}
          >
            <input
              type="radio"
              name={label}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="sr-only"
            />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
