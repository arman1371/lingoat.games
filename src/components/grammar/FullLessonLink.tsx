import { useState } from 'react';
import type { LessonId } from '@/content/lessons';
import { Icon } from '@/components/ui/Icon';
import { t } from '@/i18n';
import { GrammarSheet } from './GrammarSheet';
import { useGrammar } from './useGrammar';

/**
 * "Full lesson" button under a mini lesson. Renders nothing while the lessons load or when the topic
 * has no full lesson yet; opens the lesson as a sheet over the current screen. On a game's intro
 * screen (`intro`) it is a card that invites the learner to read the lesson before starting.
 */
export function FullLessonLink({ lesson, intro = false }: { lesson: LessonId; intro?: boolean }) {
  const grammar = useGrammar();
  const [open, setOpen] = useState(false);
  const topic = grammar?.grammarTopic(lesson);
  if (!topic) return null;
  return (
    <>
      {intro ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          data-testid="full-lesson"
          className="press flex min-h-16 w-full items-center gap-3 rounded-2xl border-2 border-primary-soft-line bg-surface p-3 pr-3.5 text-left shadow-[var(--shadow-1)] hover:bg-primary-soft"
        >
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-primary-soft text-primary"
          >
            <Icon name="book" size={24} />
          </span>
          <span className="flex min-w-0 flex-1 flex-col gap-0.5">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-primary">
              {t('grammar.readFirstLabel')}
              <span className="sr-only">: </span>
            </span>
            <span className="text-base font-extrabold leading-snug text-ink">{topic.title}</span>
          </span>
          <Icon name="chevron-right" size={24} className="shrink-0 text-primary" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          data-testid="full-lesson"
          className="press mt-2 inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-primary-soft-line bg-primary-soft px-3 text-sm font-extrabold text-on-primary-soft"
        >
          {t('grammar.fullLesson', { title: topic.title })}
          <Icon name="arrow-right" size={16} />
        </button>
      )}
      <GrammarSheet topic={topic} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
