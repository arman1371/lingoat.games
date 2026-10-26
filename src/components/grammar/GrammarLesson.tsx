import { useId, type ElementType } from 'react';
import { Icon } from '@/components/ui/Icon';
import type { Block, GrammarTopic } from '@/content/grammar';
import { t } from '@/i18n';
import { Rich } from './Rich';

/**
 * Real `<table>` with a caption and header cells. The wrapper scrolls sideways on narrow screens, so
 * it is focusable (keyboard users can scroll it) and named after the caption.
 */
function LessonTable({ block }: { block: Extract<Block, { type: 'table' }> }) {
  const captionId = useId();
  return (
    <div
      role="region"
      aria-labelledby={captionId}
      // a scrollable region must be reachable by keyboard (axe: scrollable-region-focusable)
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className="overflow-x-auto rounded-2xl border-2 border-line bg-surface"
    >
      <table className="w-full border-collapse text-left text-sm">
        <caption id={captionId} className="caption-bottom px-3 py-2 text-left text-xs text-muted">
          {block.caption}
        </caption>
        <thead className="bg-surface-2">
          <tr>
            {block.headers.map((h) => (
              <th key={h} scope="col" className="px-3 py-2 font-extrabold text-muted">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, r) => {
            const hot = r === block.highlightRow;
            return (
              <tr
                key={row.join('|')}
                data-highlight={hot ? 'true' : undefined}
                className={`border-t border-line ${hot ? 'bg-primary-soft text-on-primary-soft' : ''}`}
              >
                {row.map((cell, c) =>
                  c === 0 ? (
                    <th key={c} scope="row" className="px-3 py-2 text-left font-extrabold">
                      <Rich text={cell} />
                    </th>
                  ) : (
                    <td key={c} className={`px-3 py-2 ${hot ? 'font-extrabold' : ''}`}>
                      <Rich text={cell} />
                    </td>
                  ),
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function BlockView({ block, sub: Sub }: { block: Block; sub: ElementType }) {
  switch (block.type) {
    case 'p':
      return (
        <p className="text-ink">
          <Rich text={block.text} />
        </p>
      );
    case 'list':
      return (
        <ul className="list-disc space-y-1 pl-5 text-ink">
          {block.items.map((item) => (
            <li key={item}>
              <Rich text={item} />
            </li>
          ))}
        </ul>
      );
    case 'table':
      return <LessonTable block={block} />;
    case 'examples':
      return (
        <ul className="flex flex-col gap-2">
          {block.items.map((ex) => (
            <li
              key={ex.de}
              className="rounded-xl border-2 border-line bg-surface px-3 py-2"
              data-testid="example"
            >
              <span lang="de" className="block font-bold text-ink">
                {ex.de}
              </span>
              <span className="block text-sm text-muted">{ex.en}</span>
            </li>
          ))}
        </ul>
      );
    case 'compare':
      return (
        <div className="grid gap-3 sm:grid-cols-2" data-testid="compare">
          {block.items.map((item, i) => (
            <div
              key={item.title}
              className={`rounded-2xl border-2 p-3 ${
                i === 0
                  ? 'border-info-soft-line bg-info-soft text-on-info-soft'
                  : 'border-primary-soft-line bg-primary-soft text-on-primary-soft'
              }`}
            >
              <Sub className="font-extrabold">{item.title}</Sub>
              <p className="text-xs font-bold">{item.question}</p>
              <p lang="de" className="mt-1 font-bold">
                {item.example}
              </p>
            </div>
          ))}
        </div>
      );
    case 'callout': {
      const mistake = block.kind === 'mistake';
      return (
        <div
          data-testid={`callout-${block.kind}`}
          className={`rounded-2xl border-2 p-3 ${
            mistake
              ? 'border-danger-soft-line bg-danger-soft text-on-danger-soft'
              : 'border-warning-soft-line bg-warning-soft text-on-warning-soft'
          }`}
        >
          <p className="flex items-center gap-2 font-extrabold">
            <Icon name={mistake ? 'warning' : 'lightbulb'} size={18} />
            {block.title}
          </p>
          <ul className="mt-1 space-y-1 font-bold">
            {block.items.map((item) => (
              <li key={item} lang="de">
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

interface Props {
  topic: GrammarTopic;
  /** heading level of the sections: 2 on the page (which owns the h1), 3 in the sheet */
  level?: 2 | 3;
}

/** The body of a lesson: the "In short" box and every section. Used by the page and by the sheet. */
export function GrammarLesson({ topic, level = 2 }: Props) {
  const Heading: ElementType = level === 2 ? 'h2' : 'h3';
  const Sub: ElementType = level === 2 ? 'h3' : 'h4';
  return (
    <div className="flex flex-col gap-6" data-testid="grammar-lesson" data-topic={topic.id}>
      <div className="rounded-(--radius-card) border-2 border-primary-soft-line bg-primary-soft p-4 text-on-primary-soft">
        <p className="flex items-center gap-2 font-extrabold">
          <Icon name="lightbulb" size={18} />
          {t('grammar.inShort')}
        </p>
        <p className="mt-1">
          <Rich text={topic.summary} />
        </p>
      </div>
      {topic.sections.map((s) => (
        <section
          key={s.id}
          id={s.id}
          aria-labelledby={`${topic.id}-${s.id}`}
          className="flex flex-col gap-3"
        >
          <Heading
            id={`${topic.id}-${s.id}`}
            className="font-display text-2xl font-semibold text-ink"
          >
            {s.heading}
          </Heading>
          {s.blocks.map((b, i) => (
            <BlockView key={i} block={b} sub={Sub} />
          ))}
        </section>
      ))}
    </div>
  );
}

/** Level chip and the draft note shown under a lesson title. */
export function LessonMeta({ topic, levelLabel }: { topic: GrammarTopic; levelLabel: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="rounded-full border-2 border-primary-soft-line bg-primary-soft px-2.5 py-0.5 text-xs font-extrabold text-on-primary-soft">
        {levelLabel}
      </span>
      {topic.reviewed ? null : (
        <span
          data-testid="draft-note"
          className="inline-flex items-center gap-1 rounded-full border-2 border-warning-soft-line bg-warning-soft py-0.5 pl-2 pr-2.5 text-xs font-bold text-on-warning-soft"
        >
          <Icon name="info" size={14} />
          {t('grammar.draft')}
        </span>
      )}
    </div>
  );
}
