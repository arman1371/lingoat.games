import { useEffect, useRef, useState } from 'react';
import { LESSONS, type LessonId } from '@/content/lessons';
import { FullLessonLink } from '@/components/grammar/FullLessonLink';
import { Button } from '@/components/ui/Button';
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
 * Shown in the feedback after a wrong answer to a grammar item: a small "Why?" button that opens a
 * bottom sheet with one line on why the answer is wrong and a mini lesson (rule, examples, link to
 * the full lesson). Renders nothing for vocabulary items. Native `<dialog>`: focus is trapped,
 * Escape closes it and focus returns to the button.
 */
export function MistakeHint({ why, lesson }: Props) {
  const fallback = useActivityLesson();
  const id = lesson ?? fallback;
  const l = id ? LESSONS[id] : undefined;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  if (!why && !l) return null;
  return (
    <div className="mt-2" data-testid="mistake-hint">
      <Button
        size="sm"
        variant="secondary"
        icon={<Icon name="lightbulb" size={18} />}
        aria-haspopup="dialog"
        data-testid="why"
        onClick={() => setOpen(true)}
      >
        {t('hint.button')}
      </Button>
      <dialog
        ref={ref}
        aria-label={t('hint.why')}
        // the full lesson's own sheet sits inside this one and its `close` bubbles through React
        onClose={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
        data-testid="why-sheet"
        className="mx-auto mb-0 mt-auto max-h-[88dvh] w-full max-w-2xl overflow-y-auto rounded-b-none rounded-t-3xl border-2 border-b-0 border-line bg-bg p-0 text-ink shadow-(--shadow-4) backdrop:bg-overlay"
      >
        {open ? (
          <div className="flex flex-col gap-3 p-4 pb-6">
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
            <Button block onClick={() => setOpen(false)}>
              {t('hint.close')}
            </Button>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
