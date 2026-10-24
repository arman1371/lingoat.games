import { Icon, type IconName } from './Icon';

type Tone = 'streak' | 'xp' | 'info' | 'neutral';

const TONE: Record<Tone, string> = {
  streak: 'bg-streak-soft text-on-streak-soft',
  xp: 'bg-xp-soft text-on-xp-soft',
  info: 'bg-info-soft text-on-info-soft',
  neutral: 'bg-sunken text-ink',
};
const ICON_TONE: Record<Tone, string> = {
  streak: 'text-streak',
  xp: 'text-accent',
  info: 'text-info',
  neutral: 'text-muted',
};

interface Props {
  icon: IconName;
  value: number | string;
  /** Spoken name of the whole pill, e.g. "12-day streak". Replaces the old hover `title`. */
  label: string;
  tone?: Tone;
  'data-testid'?: string;
}

/** Compact number with an icon, used for streak and XP in the header. */
export function StatPill({ icon, value, label, tone = 'neutral', ...rest }: Props) {
  return (
    <span
      role="img"
      aria-label={label}
      className={`inline-flex h-9 items-center gap-1.5 rounded-full pl-2.5 pr-3.5 font-display text-lg font-semibold ${TONE[tone]}`}
      {...rest}
    >
      <Icon name={icon} size={20} className={ICON_TONE[tone]} />
      {value}
    </span>
  );
}
