/** Grey placeholder block shown while content loads; hidden from assistive technology. */
export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      data-testid="skeleton"
      className={`animate-pulse rounded-xl bg-sunken ${className}`}
    />
  );
}
