import { useEffect, useId, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { IconButton } from '@/components/ui/IconButton';
import type { GrammarTopic } from '@/content/grammar';
import { getLevelMeta } from '@/content/levels';
import { t } from '@/i18n';
import { GrammarLesson, LessonMeta } from './GrammarLesson';

interface Props {
  topic: GrammarTopic;
  open: boolean;
  onClose: () => void;
}

/**
 * The full lesson as a bottom sheet over the game, so a learner can read it after a mistake and keep
 * their progress. Native `<dialog>`: focus is trapped, Escape closes it and focus returns to the
 * button that opened it.
 */
export function GrammarSheet({ topic, open, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClose={onClose}
      data-testid="grammar-sheet"
      className="mx-auto mb-0 mt-auto max-h-[88dvh] w-full max-w-2xl overflow-y-auto rounded-b-none rounded-t-3xl border-2 border-b-0 border-line bg-bg p-0 text-ink shadow-(--shadow-4) backdrop:bg-overlay"
    >
      {open ? (
        <div className="flex flex-col gap-4 p-4 pb-6">
          <header className="flex items-start gap-3">
            <div className="flex flex-1 flex-col gap-2">
              <h2 id={titleId} className="font-display text-3xl font-semibold">
                {topic.title}
              </h2>
              <LessonMeta
                topic={topic}
                levelLabel={getLevelMeta(topic.level)?.title ?? topic.level}
              />
            </div>
            <IconButton
              icon="close"
              variant="tonal"
              aria-label={t('grammar.sheetClose')}
              onClick={onClose}
            />
          </header>
          <GrammarLesson topic={topic} level={3} />
          <Button block onClick={onClose}>
            {t('grammar.sheetClose')}
          </Button>
        </div>
      ) : null}
    </dialog>
  );
}
