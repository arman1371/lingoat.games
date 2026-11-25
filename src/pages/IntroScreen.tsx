import type { Ref } from 'react';
import { Link } from 'react-router';
import { FullLessonLink } from '@/components/grammar/FullLessonLink';
import { Button } from '@/components/ui/Button';
import { GameTile } from '@/components/ui/GameTile';
import { Icon, type IconName } from '@/components/ui/Icon';
import { Stars } from '@/components/ui/Stars';
import type { GameType } from '@/content/gameTypes';
import type { LessonId } from '@/content/lessons';
import { t } from '@/i18n';

interface Props {
  gameType: GameType;
  title: string;
  description: string;
  help: string;
  items: number;
  estMinutes: number;
  review: boolean;
  /** Stars from the best earlier run, if the player has finished this game before. */
  bestStars?: number;
  lesson?: LessonId;
  backTo: string;
  startRef: Ref<HTMLButtonElement>;
  onStart: () => void;
}

function Pill({ icon, children }: { icon: IconName; children: React.ReactNode }) {
  return (
    <li className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-sunken px-3 text-sm font-bold text-ink">
      <Icon name={icon} size={18} className="text-muted" />
      {children}
    </li>
  );
}

export function IntroScreen({
  gameType,
  title,
  description,
  help,
  items,
  estMinutes,
  review,
  bestStars,
  lesson,
  backTo,
  startRef,
  onStart,
}: Props) {
  return (
    <section
      className="mx-auto flex w-full max-w-md flex-1 flex-col gap-6 pb-[max(1rem,env(safe-area-inset-bottom))] md:justify-center"
      aria-labelledby="intro-title"
    >
      {/* centred in the space above the actions, which stay in the thumb zone on phones */}
      <div className="flex flex-1 flex-col justify-center gap-6 md:flex-none">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="anim-pop inline-flex">
            <GameTile type={gameType} size="lg" />
          </span>
          <h1
            id="intro-title"
            className="font-display text-4xl font-extrabold leading-tight text-balance text-ink"
          >
            {title}
          </h1>
          <p className="text-balance text-muted">{description}</p>
        </div>

        <div className="flex flex-col gap-3">
          <ul className="flex flex-wrap justify-center gap-2">
            <Pill icon="layers">
              {t(review ? 'play.reviewItems' : 'play.rounds', { n: items })}
            </Pill>
            <Pill icon="timer">{t('play.minutes', { n: estMinutes })}</Pill>
            {bestStars && !review ? (
              <li className="inline-flex min-h-9 items-center gap-2 rounded-full bg-xp-soft pl-3 pr-2 text-sm font-bold text-on-xp-soft">
                {t('play.best')}
                <Stars count={bestStars} size="sm" />
              </li>
            ) : null}
          </ul>
          <div className="flex items-start gap-3 rounded-2xl border-2 border-line bg-surface-2 p-3 text-left">
            <span
              aria-hidden="true"
              className="grid size-10 shrink-0 place-items-center rounded-xl bg-info-soft text-info"
            >
              <Icon name="lightbulb" size={22} />
            </span>
            <p className="self-center text-ink">{help}</p>
          </div>
          {lesson ? <FullLessonLink lesson={lesson} intro /> : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Button ref={startRef} size="lg" block onClick={onStart} data-testid="start">
          {review ? t('play.startReview') : t('common.start')}
        </Button>
        <Link to={backTo}>
          <Button variant="ghost" block>
            {t('common.back')}
          </Button>
        </Link>
      </div>
    </section>
  );
}
