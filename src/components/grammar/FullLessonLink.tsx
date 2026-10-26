import { useState } from 'react';
import type { LessonId } from '@/content/lessons';
import { Icon } from '@/components/ui/Icon';
import { t } from '@/i18n';
import { GrammarSheet } from './GrammarSheet';
import { useGrammar } from './useGrammar';

/**
 * "Full lesson" button under a mini lesson. Renders nothing while the lessons load or when the topic
 * has no full lesson yet; opens the lesson as a sheet over the current screen.
 */
export function FullLessonLink({ lesson }: { lesson: LessonId }) {
  const grammar = useGrammar();
  const [open, setOpen] = useState(false);
  const topic = grammar?.grammarTopic(lesson);
  if (!topic) return null;
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-testid="full-lesson"
        className="press mt-2 inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-primary-soft-line bg-primary-soft px-3 text-sm font-extrabold text-on-primary-soft"
      >
        {t('grammar.fullLesson', { title: topic.title })}
        <Icon name="arrow-right" size={16} />
      </button>
      <GrammarSheet topic={topic} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
