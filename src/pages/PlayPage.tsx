import { useProgress } from '@/app/language';
import { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import { ReportButton } from '@/components/ReportButton';
import { WordPhotoIndexContext } from '@/components/WordImage';
import { ConfirmDialog } from '@/components/ui/Dialog';
import { IconButton } from '@/components/ui/IconButton';
import { useFocusOnMount } from '@/games/shared/useFocusOnMount';
import { useContent } from '@/content/ContentProvider';
import { getItems, withItems } from '@/content/items';
import type { Activity } from '@/content/schema';
import { GAME_HELP, gameComponents } from '@/games/registry';
import { ActivityLessonContext } from '@/games/shared/hints';
import { NounIndexContext } from '@/games/shared/NounArticle';
import { CaseDrillContext } from '@/games/shared/SentenceNouns';
import { ProgressSlotContext } from '@/games/shared/progressSlot';
import { ReportItemContext } from '@/games/shared/useReportItem';
import { buildNounIndex, drillsCase } from '@/lib/german/nouns';
import { buildWordPhotoIndex } from '@/lib/wordPhotos';
import { lessonForTags } from '@/content/lessons';
import { playUrl } from '@/app/path';
import { parseSeed, randomSeed } from '@/lib/rng';
import type { GameResult } from '@/lib/scoring';
import { t } from '@/i18n';
import { preloadImageManifest } from '@/lib/useImageManifest';
import { type RecordOutcome } from '@/store/progressStore';
import { NotFoundPage } from './NotFoundPage';
import { IntroScreen } from './IntroScreen';
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
  const recordResult = useProgress((s) => s.recordResult);
  const mistakes = useProgress((s) => s.mistakes);
  const best = useProgress((s) => s.activities[activityId]);

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
  const [reportItem, setReportItem] = useState<string>();
  const [progressSlot, setProgressSlot] = useState<HTMLElement | null>(null);
  const [done, setDone] = useState<{ result: GameResult; outcome: RecordOutcome } | null>(null);
  const startRef = useFocusOnMount<HTMLButtonElement>();
  // ready before the first card, so a word with a photo never shows its emoji first
  useEffect(() => void preloadImageManifest(), []);

  const nounIndex = useMemo(() => buildNounIndex(content.vocab), [content.vocab]);
  const photoIndex = useMemo(() => buildWordPhotoIndex(content.vocab), [content.vocab]);
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
      : '/library?view=games';
  const backLabel = review
    ? 'Back to mistake box'
    : unit
      ? t('result.backToUnit')
      : t('result.toLibrary');
  const seed = (urlSeed ?? seedState) + run;
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

  const lesson = activity.lesson ?? lessonForTags(activity.tags);
  const exit = () => navigate(backTo);
  // Leaving mid-round loses its progress, so ask first; the intro and result screens leave at once.
  const requestExit = () => (started && !done ? setConfirmExit(true) : exit());

  return (
    <div className="flex flex-1 flex-col gap-3">
      <div className="flex items-center gap-3">
        <IconButton icon="close" onClick={requestExit} aria-label="Exit game" />
        {started && !done ? (
          <>
            {/* the running game draws its progress bar here (see ProgressSlotContext) */}
            <div ref={setProgressSlot} className="min-w-0 flex-1" />
            <ReportButton
              activityId={activity.id}
              levelId={unit?.levelId}
              unitId={activity.unitId}
              gameType={activity.gameType}
              itemId={reportItem}
            />
          </>
        ) : null}
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
        <IntroScreen
          gameType={activity.gameType}
          title={activity.title}
          description={activity.description}
          help={GAME_HELP[activity.gameType]}
          items={getItems(activity).length}
          estMinutes={activity.estMinutes}
          review={review}
          bestStars={best?.stars}
          lesson={lesson}
          backTo={backTo}
          startRef={startRef}
          onStart={() => setStarted(true)}
        />
      ) : (
        <Suspense
          fallback={
            <p role="status" className="py-16 text-center font-bold text-muted">
              {t('common.loading')}
            </p>
          }
        >
          <ActivityLessonContext value={lesson}>
            <NounIndexContext value={nounIndex}>
              <CaseDrillContext value={drillsCase(activity.tags)}>
                <WordPhotoIndexContext value={photoIndex}>
                  <ReportItemContext value={setReportItem}>
                    <ProgressSlotContext value={progressSlot}>
                      <Game
                        key={`${activity.id}-${run}`}
                        config={activity.config}
                        seed={seed}
                        onFinish={onFinish}
                      />
                    </ProgressSlotContext>
                  </ReportItemContext>
                </WordPhotoIndexContext>
              </CaseDrillContext>
            </NounIndexContext>
          </ActivityLessonContext>
        </Suspense>
      )}
    </div>
  );
}

export default PlayPage;
