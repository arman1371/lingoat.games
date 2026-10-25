const MARK = [
  {
    d: 'M28 0L12 0C5.37 0 0 5.37 0 12L0 28C0 34.63 5.37 40 12 40L28 40C34.63 40 40 34.63 40 28L40 12C40 5.37 34.63 0 28 0Z',
    fill: '#5549C7',
  },
  { d: 'M15 14C13 8 9 6 5.5 7C9 8.5 11 11 11.5 15.5L15 14Z', fill: '#FFD166' },
  { d: 'M25 14C27 8 31 6 34.5 7C31 8.5 29 11 28.5 15.5L25 14Z', fill: '#FFD166' },
  {
    d: 'M20 11C27 11 30 16 30 21C30 28 26 33 20 34C14 33 10 28 10 21C10 16 13 11 20 11Z',
    fill: '#FFFFFF',
  },
  {
    d: 'M16.2 22.7C17.19 22.7 18 21.72 18 20.5C18 19.28 17.19 18.3 16.2 18.3C15.21 18.3 14.4 19.28 14.4 20.5C14.4 21.72 15.21 22.7 16.2 22.7Z',
    fill: '#2E2420',
  },
  {
    d: 'M23.8 22.7C24.79 22.7 25.6 21.72 25.6 20.5C25.6 19.28 24.79 18.3 23.8 18.3C22.81 18.3 22 19.28 22 20.5C22 21.72 22.81 22.7 23.8 22.7Z',
    fill: '#2E2420',
  },
  {
    d: 'M20 32C23.31 32 26 30.21 26 28C26 25.79 23.31 24 20 24C16.69 24 14 25.79 14 28C14 30.21 16.69 32 20 32Z',
    fill: '#EFE3F7',
  },
  { d: 'M17.5 28.5C19.17 29.83 20.83 29.83 22.5 28.5', stroke: '#2E2420', strokeWidth: 1.4 },
] as const;

/** The lingoat mark (goat head on a rounded square). Decorative; name the link around it. */
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} aria-hidden="true" focusable="false">
      {MARK.map((s) => (
        <path
          key={s.d}
          d={s.d}
          fill={'fill' in s ? s.fill : 'none'}
          stroke={'stroke' in s ? s.stroke : undefined}
          strokeWidth={'strokeWidth' in s ? s.strokeWidth : undefined}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

/** Mark plus the "lingoat" wordmark (Fredoka, "goat" in the brand colour). */
export function Logo({ showWordmark = true }: { showWordmark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      {showWordmark ? (
        <span className="font-display text-[1.625rem] font-bold leading-none text-ink">
          lin<span className="text-primary">goat</span>
        </span>
      ) : null}
    </span>
  );
}
