import { clockAngles, formatDigital, type Clock } from '@/lib/german/time';

export function AnalogClock({ time, label }: { time: Clock; label?: string }) {
  const { hourAngle, minuteAngle } = clockAngles(time);
  return (
    <div className="flex w-full justify-center rounded-3xl bg-info-soft p-4">
      <svg
        viewBox="0 0 200 200"
        role="img"
        aria-label={label ?? `Clock showing ${formatDigital(time)}`}
        className="h-56 w-56"
        data-testid="analog-clock"
      >
        <circle
          cx="100"
          cy="100"
          r="94"
          fill="var(--surface)"
          stroke="var(--border)"
          strokeWidth="6"
        />
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          const x = 100 + Math.sin(a) * 76;
          const y = 100 - Math.cos(a) * 76;
          return (
            <text
              key={i}
              x={x}
              y={y + 6}
              textAnchor="middle"
              fontSize="16"
              fontWeight="800"
              fill="var(--text)"
            >
              {i === 0 ? 12 : i}
            </text>
          );
        })}
        {Array.from({ length: 60 }, (_, i) => {
          const a = (i * 6 * Math.PI) / 180;
          const r1 = i % 5 === 0 ? 86 : 89;
          return (
            <line
              key={i}
              x1={100 + Math.sin(a) * r1}
              y1={100 - Math.cos(a) * r1}
              x2={100 + Math.sin(a) * 92}
              y2={100 - Math.cos(a) * 92}
              stroke="var(--text-muted)"
              strokeWidth={i % 5 === 0 ? 2 : 1}
            />
          );
        })}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="52"
          stroke="var(--text)"
          strokeWidth="7"
          strokeLinecap="round"
          transform={`rotate(${hourAngle} 100 100)`}
        />
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="32"
          stroke="var(--primary)"
          strokeWidth="4"
          strokeLinecap="round"
          transform={`rotate(${minuteAngle} 100 100)`}
        />
        <circle cx="100" cy="100" r="6" fill="var(--accent)" />
      </svg>
    </div>
  );
}
