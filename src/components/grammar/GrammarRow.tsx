import { Link } from 'react-router';
import { Icon } from '@/components/ui/Icon';
import { grammarUrl } from '@/app/path';

interface Props {
  topicId: string;
  title: string;
  /** one line under the title: the unit's note or the topic's tagline */
  detail: string;
  className?: string;
}

/** One topic as a tappable row; the whole row is the link. */
export function GrammarRow({ topicId, title, detail, className = '' }: Props) {
  return (
    <Link
      to={grammarUrl(topicId)}
      data-testid={`grammar-${topicId}`}
      className={`press flex items-center gap-3 rounded-2xl border-2 border-line bg-surface py-2.5 pl-4 pr-3 text-ink shadow-[0_3px_0_var(--border)] ${className}`}
    >
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="font-extrabold">{title}</span>
        <span className="text-sm text-muted">{detail}</span>
      </span>
      <Icon name="chevron-right" size={20} />
    </Link>
  );
}
