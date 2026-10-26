import { Link, useParams } from 'react-router';
import { LevelGrammar } from '@/components/grammar/LevelGrammar';
import { Icon } from '@/components/ui/Icon';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { useContent } from '@/content/ContentProvider';
import { getLevelMeta } from '@/content/levels';
import { useProgressStore } from '@/store/progressStore';
import { NotFoundPage } from './NotFoundPage';

type NodeState = 'done' | 'current' | 'open';

/** Zigzag offsets (px) that give the unit map its winding path. */
const OFFSETS = ['translate-x-0', '-translate-x-14', 'translate-x-0', 'translate-x-14'] as const;

const NODE: Record<NodeState, string> = {
  done: 'bg-success text-on-primary shadow-[0_5px_0_var(--success-edge)]',
  current: 'bg-primary text-on-primary shadow-[0_5px_0_var(--primary-edge)]',
  open: 'bg-primary-soft text-on-primary-soft shadow-[0_5px_0_var(--primary-soft-border)]',
};

export function LevelPage() {
  const { levelId = '' } = useParams();
  const content = useContent();
  const progress = useProgressStore((s) => s.activities);
  const level = getLevelMeta(levelId);
  const units = content.units.filter((u) => u.levelId === levelId);
  if (!level || level.status !== 'available' || units.length === 0) return <NotFoundPage />;

  const counts = units.map((unit) => {
    const path = content.pathOf(unit.id);
    return { unit, total: path.length, done: path.filter((a) => progress[a.id]).length };
  });
  const totalGames = counts.reduce((n, c) => n + c.total, 0);
  const totalDone = counts.reduce((n, c) => n + c.done, 0);
  const currentId = counts.find((c) => c.done < c.total)?.unit.id;

  return (
    <div className="flex flex-col gap-6">
      <Link
        to="/"
        className="inline-flex items-center gap-1 self-start text-sm font-bold text-primary"
      >
        <Icon name="chevron-left" size={16} />
        Learn
      </Link>
      <header className="rounded-(--radius-card) bg-primary p-5 text-on-primary shadow-[0_4px_0_var(--primary-edge)]">
        <h1 className="text-3xl font-bold">{level.title}</h1>
        <p className="mt-1 opacity-90">{level.subtitle}</p>
        <div className="mt-4">
          <ProgressBar
            value={totalGames ? totalDone / totalGames : 0}
            label={`${level.title} progress`}
            tone="xp"
          />
          <p className="mt-1 text-sm font-bold">
            {totalDone} / {totalGames} games
          </p>
        </div>
      </header>
      <ol aria-label="Units" className="flex flex-col items-center gap-8 py-2">
        {counts.map(({ unit, total, done }, i) => {
          const state: NodeState =
            done >= total ? 'done' : unit.id === currentId ? 'current' : 'open';
          return (
            <li key={unit.id} className={`w-full max-w-xs ${OFFSETS[i % OFFSETS.length]}`}>
              <Link
                to={`/levels/${levelId}/units/${unit.id}`}
                data-testid={`unit-${unit.id}`}
                data-state={state}
                className="press group flex flex-col items-center gap-2 text-center"
              >
                <span
                  aria-hidden="true"
                  className={`flex h-[72px] w-[72px] items-center justify-center rounded-full ${NODE[state]}`}
                >
                  {state === 'done' ? (
                    <Icon name="check" size={32} />
                  ) : state === 'current' ? (
                    <Icon name="play" size={32} filled />
                  ) : (
                    <span className="text-3xl">{unit.emoji}</span>
                  )}
                </span>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wide text-muted">
                    Unit {unit.order}
                  </span>
                  <h2 className="text-lg font-bold leading-tight text-ink">{unit.title}</h2>
                  <span className="block text-sm text-muted">{unit.subtitle}</span>
                  <span className="mt-1 block text-sm font-bold text-muted">
                    {done} / {total} games
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
      <LevelGrammar levelId={levelId} />
    </div>
  );
}

export default LevelPage;
