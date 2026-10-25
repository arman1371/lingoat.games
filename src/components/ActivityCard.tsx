import { Link } from 'react-router';
import type { Activity } from '@/content/schema';
import { TAGS } from '@/content/tags';
import { DIFFICULTY_LABELS, GAME_TYPE_LABELS } from '@/lib/filters';
import { t } from '@/i18n';
import { GameTile } from './ui/GameTile';
import { Stars } from './ui/Stars';
import { Tag } from './ui/Chip';

interface Props {
  activity: Activity;
  to: string;
  stars?: number;
  unitTitle?: string;
  badge?: string;
}

export function ActivityCard({ activity, to, stars, unitTitle, badge }: Props) {
  const type = GAME_TYPE_LABELS[activity.gameType];
  return (
    <Link
      to={to}
      data-testid="activity-card"
      data-activity-id={activity.id}
      className="press flex h-full flex-col gap-2 rounded-(--radius-card) border-2 border-line bg-surface p-4 shadow-[0_3px_0_var(--border)] hover:bg-surface-2"
    >
      <div className="flex items-start justify-between gap-2">
        <GameTile type={activity.gameType} />
        <div className="flex flex-col items-end gap-1">
          {stars ? <Stars count={stars} size="sm" /> : null}
          {badge ? <Tag tone="primary">{badge}</Tag> : null}
        </div>
      </div>
      <h3 className="text-lg font-bold leading-tight text-ink">{activity.title}</h3>
      <p className="text-sm text-muted">{activity.description}</p>
      <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-1">
        <Tag tone="neutral">{type.label}</Tag>
        <Tag
          tone={
            activity.difficulty === 1
              ? 'success'
              : activity.difficulty === 2
                ? 'warning'
                : 'primary'
          }
        >
          {DIFFICULTY_LABELS[activity.difficulty]}
        </Tag>
        <Tag>{t('common.minutes', { n: activity.estMinutes })}</Tag>
        {activity.tags.slice(0, 2).map((tag) => (
          <Tag key={tag}>
            {TAGS[tag].emoji} {TAGS[tag].label}
          </Tag>
        ))}
        {unitTitle ? <span className="sr-only">Unit: {unitTitle}</span> : null}
      </div>
    </Link>
  );
}
