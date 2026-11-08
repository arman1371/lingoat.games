const COLORS = [
  'var(--primary)',
  'var(--accent)',
  'var(--streak)',
  'var(--info)',
  'var(--danger)',
  'var(--success)',
];

/** Pure-CSS confetti burst. Hidden for reduced motion via the global [data-reduced-motion] rule. */
export function Confetti({ count = 36 }: { count?: number }) {
  return (
    <div
      aria-hidden="true"
      data-testid="confetti"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="absolute top-0 block h-3 w-2 rounded-sm"
          style={{
            left: `${(i * 97) % 100}%`,
            background: COLORS[i % COLORS.length],
            animation: `confetti-fall ${2 + (i % 5) * 0.4}s ${(i % 7) * 0.12}s ease-in forwards`,
          }}
        />
      ))}
    </div>
  );
}
