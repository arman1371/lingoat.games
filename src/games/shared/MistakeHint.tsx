import { LESSONS, type LessonId } from '@/content/lessons';
import { FullLessonLink } from '@/components/grammar/FullLessonLink';
import { Icon } from '@/components/ui/Icon';
import { t } from '@/i18n';
import { useActivityLesson } from './hints';

interface Props {
  /** why the learner's answer is wrong (see `mistakeWhy`) */
  why?: string;
  /** the item's own lesson; falls back to the activity's lesson */
  lesson?: LessonId;
}

/**
 * Shown inside the feedback after a wrong answer to a grammar item: one line on why the answer is
 * wrong and a mini lesson with the rule and examples. Renders nothing for vocabulary items.
 */
export function MistakeHint({ why, lesson }: Props) {
  const fallback = useActivityLesson();
  const id = lesson ?? fallback;
  const l = id ? LESSONS[id] : undefined;
  if (!why && !l) return null;
  return (
    <div className="mt-2 flex flex-col gap-2" data-testid="mistake-hint">
      {why ? (
        <p
          data-testid="mistake-why"
          className="flex items-start gap-2 rounded-xl border-2 border-warning-soft-line bg-warning-soft p-3 text-on-warning-soft"
        >
          <Icon name="lightbulb" size={20} className="mt-0.5 shrink-0" />
          <span>
            <strong>{t('hint.why')}</strong> {why}
          </span>
        </p>
      ) : null}
      {l ? (
        <div className="rounded-xl bg-surface p-3" data-testid="mini-lesson" data-lesson={id}>
          <p className="flex items-center gap-2 font-bold">
            <Icon name="book" size={18} />
            {t('hint.lesson')}: {l.title}
          </p>
          <p className="mt-1">{l.rule}</p>
          <ul className="mt-1 list-disc pl-5 font-bold">
            {l.examples.map((ex) => (
              <li key={ex} lang="de">
                {ex}
              </li>
            ))}
          </ul>
          {id ? <FullLessonLink lesson={id} /> : null}
        </div>
      ) : null}
    </div>
  );
}
