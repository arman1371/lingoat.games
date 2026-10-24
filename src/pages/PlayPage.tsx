import { Suspense, useCallback, useMemo, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router';
import { Button } from '@/components/ui/Button';
import { ConfirmDialog } from '@/components/ui/Dialog';
import { useFocusOnMount } from '@/games/shared/useFocusOnMount';
import { useContent } from '@/content/ContentProvider';
import { getItems, withItems } from '@/content/items';
import type { Activity } from '@/content/schema';
import { GAME_HELP, gameComponents } from '@/games/registry';
import { ActivityLessonContext } from '@/games/shared/hints';
import { lessonForTags } from '@/content/lessons';
import { playUrl } from '@/app/path';
import { GAME_TYPE_LABELS } from '@/lib/filters';
import { parseSeed, randomSeed } from '@/lib/rng';
import type { GameResult } from '@/lib/scoring';
import { t } from '@/i18n';
import { useProgressStore, type RecordOutcome } from '@/store/progressStore';
import { NotFoundPage } from './NotFoundPage';
import { ResultScreen } from './ResultScreen';

function dueMistakeIds(
  mistakes: Record<string, { activityId: string; itemId: string }>,
  activityId: string,
): string[] {
  return Object.values(mistakes)
    .filter((m) => m.activityId === activityId)
    .map((m) => m.itemId);
}

/** Re-mounts the play view per activity, so "Next up" starts a fresh intro instead of keeping the old result. */
export function PlayPage() {
  const { activityId = '' } = useParams();
  const [params] = useSearchParams();
  return <PlayView key={`${activityId}:${params.get('review') ?? ''}`} activityId={activityId} />;
}

function PlayView({ activityId }: { activityId: string }) {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const content = useContent();
  const recordResult = useProgressStore((s) => s.recordResult);
  const mistakes = useProgressStore((s) => s.mistakes);

  const review = params.get('review') === '1';
  const queue = useMemo(
    () => (params.get('q') ?? '').split(',').filter((id) => content.activityById.has(id)),
    [params, content],
  );
  const urlSeed = parseSeed(params.get('seed'));
  const [seedState] = useState(randomSeed);
  const [run, setRun] = useState(0);
  const [started, setStarted] = useState(false);
  const [confirmExit, setConfirmExit] = useState(false);
  const [done, setDone] = useState<{ result: GameResult; outcome: RecordOutcome } | null>(null);
  const startRef = useFocusOnMount<HTMLButtonElement>();

  const base = content.activityById.get(activityId);
  const activity: Activity | undefined = useMemo(() => {
    if (!base) return undefined;
    if (!review) return base;
    const ids = dueMistakeIds(mistakes, base.id);
    // freeze the review set at the moment the session starts (mistakes change as we play)
    return ids.length ? withItems(base, ids) : base;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [base, review, started]);

  const onFinish = useCallback(
    (result: GameResult) => {
      if (!activity) return;
      const outcome = recordResult(activity.id, result, { mode: review ? 'review' : 'play' });
      setDone({ result, outcome });
    },
    [activity, recordResult, review],
  );

  if (!activity || !base) return <NotFoundPage />;

  const unit = content.unitById.get(activity.unitId);
  const backTo = review
    ? '/review'
    : unit
      ? `/levels/${unit.levelId}/units/${unit.id}`
      : '/library';
  const backLabel = review
    ? 'Back to Fehlerkiste'
    : unit
      ? t('result.backToUnit')
      : t('result.toLibrary');
  const seed = (urlSeed ?? seedState) + run;
  const type = GAME_TYPE_LABELS[activity.gameType];
  const Game = gameComponents[activity.gameType] as React.ComponentType<{
    config: unknown;
    seed: number;
    onFinish: (r: GameResult) => void;
  }>;
  const [nextId, ...restQueue] = queue;
  const nextActivity = nextId ? content.activityById.get(nextId) : undefined;
  const nextTo = nextId
    ? `${playUrl(nextId, restQueue)}${review ? `${restQueue.length ? '&' : '?'}review=1` : ''}`
    : undefined;

  const exit = () => navigate(backTo);
  // Leaving mid-round loses its progress, so ask first; the intro and result screens leave at once.
  const requestExit = () => (started && !done ? setConfirmExit(true) : exit());

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={requestExit} aria-label="Exit game">
          ✕ Exit
        </Button>
        <p className="text-sm font-bold text-muted">
          {type.emoji} {type.label}
          {queue.length > 0 ? ` · ${queue.length} more in queue` : ''}
        </p>
      </div>

      <ConfirmDialog
        open={confirmExit}
        title={t('play.exitTitle')}
        body={t('play.exitBody')}
        confirmLabel={t('play.exitConfirm')}
        cancelLabel={t('play.exitStay')}
        tone="danger"
        onCancel={() => setConfirmExit(false)}
        onConfirm={exit}
      />

      {done ? (
        <ResultScreen
          title={activity.title}
          result={done.result}
          outcome={done.outcome}
          nextTo={nextTo}
          nextTitle={nextActivity?.title}
          backTo={backTo}
          backLabel={backLabel}
          onReplay={() => {
            setDone(null);
            setRun((r) => r + 1);
          }}
        />
      ) : !started ? (
        <section
          className="mx-auto flex max-w-md flex-col items-center gap-4 py-6 text-center"
          aria-labelledby="intro-title"
        >
          <span
            aria-hidden="true"
            className="flex h-24 w-24 items-center justify-center rounded-3xl bg-primary-soft text-6xl"
          >
            {type.emoji}
          </span>
          <h1 id="intro-title" className="text-3xl font-extrabold text-ink">
            {activity.title}
          </h1>
          <p className="text-muted">{activity.description}</p>
          <p className="rounded-2xl bg-surface-2 p-3 text-ink">{GAME_HELP[activity.gameType]}</p>
          <p className="text-sm font-bold text-muted">
            {getItems(activity).length} {review ? 'items to review' : 'rounds'} · ~
            {activity.estMinutes} min
          </p>
          <Button ref={startRef} size="lg" onClick={() => setStarted(true)} data-testid="start">
            {review ? 'Start review' : t('common.start')}
          </Button>
          <Link to={backTo} className="text-sm font-bold text-primary">
            {t('common.back')}
          </Link>
        </section>
      ) : (
        <Suspense
          fallback={
            <p role="status" className="py-16 text-center font-bold text-muted">
              {t('common.loading')}
            </p>
          }
        >
          <ActivityLessonContext value={activity.lesson ?? lessonForTags(activity.tags)}>
            <Game
              key={`${activity.id}-${run}`}
              config={activity.config}
              seed={seed}
              onFinish={onFinish}
            />
          </ActivityLessonContext>
        </Suspense>
      )}
    </div>
  );
}

export default PlayPage;
