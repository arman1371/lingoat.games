interface Props {
  value: number; // 0..1
  label: string;
  tone?: 'primary' | 'success' | 'xp' | 'streak';
}

const FILL = {
  primary: 'bg-primary',
  success: 'bg-success',
  xp: 'bg-accent',
  streak: 'bg-streak',
} as const;

export function ProgressBar({ value, label, tone = 'primary' }: Props) {
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100);
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      className="h-3 w-full overflow-hidden rounded-full bg-line"
    >
      <div
        className={`h-full rounded-full transition-[width] duration-300 ${FILL[tone]}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
