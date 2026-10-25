interface Props {
  /** 0..1 */
  value: number;
  label: string;
  size?: number;
  tone?: 'primary' | 'xp';
}

const STROKE = 8;

/** Circular progress with the percentage in the middle. */
export function ProgressRing({ value, label, size = 72, tone = 'primary' }: Props) {
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100);
  const r = (size - STROKE) / 2;
  const circumference = 2 * Math.PI * r;
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      className="relative shrink-0"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} aria-hidden="true" className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={STROKE}
          className="stroke-sunken"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - pct / 100)}
          className={`transition-[stroke-dashoffset] duration-500 ${tone === 'xp' ? 'stroke-accent' : 'stroke-primary'}`}
        />
      </svg>
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center text-sm font-bold text-ink"
      >
        {pct}%
      </span>
    </div>
  );
}
