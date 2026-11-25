import { t } from '@/i18n';
import { Icon } from './Icon';

const PX = { sm: 16, md: 24, lg: 40 } as const;

export function Stars({
  count,
  max = 3,
  size = 'md',
  animate = false,
}: {
  count: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  /** Earned stars pop in one after another (result screen). */
  animate?: boolean;
}) {
  return (
    <span role="img" aria-label={t('common.stars', { n: count })} className="inline-flex gap-0.5">
      {Array.from({ length: max }, (_, i) => {
        const icon = (
          <Icon
            key={i}
            name="star"
            size={PX[size]}
            filled={i < count}
            className={i < count ? 'text-accent' : 'text-line'}
          />
        );
        // The wrapper only exists for the result screen, so list pages don't pay for extra nodes.
        return animate && i < count ? (
          <span
            key={i}
            className="anim-star inline-flex"
            style={{ animationDelay: `${350 + i * 200}ms` }}
          >
            {icon}
          </span>
        ) : (
          icon
        );
      })}
    </span>
  );
}
