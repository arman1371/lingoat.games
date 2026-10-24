import { Icon, type IconName } from './Icon';

type Tone = 'streak' | 'xp' | 'info' | 'success';

const TONE: Record<Tone, string> = {
  streak: 'bg-streak-soft text-on-streak-soft',
  xp: 'bg-xp-soft text-on-xp-soft',
  info: 'bg-info-soft text-on-info-soft',
  success: 'bg-success-soft text-on-success-soft',
};

interface Props {
  icon: IconName;
  value: number | string;
  label: string;
  tone: Tone;
  hint?: string;
}

/** Large number with a caption, used on the Progress page. */
export function StatCard({ icon, value, label, tone, hint }: Props) {
  return (
    <div className={`flex flex-col gap-1 rounded-2xl p-4 ${TONE[tone]}`}>
      <Icon name={icon} size={24} />
      <p className="font-display text-2xl font-bold leading-tight">{value}</p>
      <p className="text-sm font-medium">{label}</p>
      {hint ? <p className="text-xs font-medium opacity-90">{hint}</p> : null}
    </div>
  );
}
