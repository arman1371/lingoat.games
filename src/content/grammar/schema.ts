import { z } from 'zod';
import { LESSON_IDS, type LessonId } from '../lessons';

const text = z.string().min(1);
const lessonId = z.enum(LESSON_IDS as [LessonId, ...LessonId[]]);

/**
 * Full grammar lessons. One topic per grammar tag (the topic id is the tag / mini-lesson id), so a
 * topic can be linked from any number of units and from the wrong-answer hint of its mini lesson.
 * Strings may contain `**bold**`; German examples are shown with `lang="de"`.
 */
const Paragraph = z.object({ type: z.literal('p'), text });
const List = z.object({ type: z.literal('list'), items: z.array(text).min(2) });
const Table = z
  .object({
    type: z.literal('table'),
    /** shown under the table and used as its accessible name */
    caption: text,
    headers: z.array(text).min(2),
    rows: z.array(z.array(text)).min(1),
    /** index of a row to highlight (the case or form the topic is about) */
    highlightRow: z.number().int().min(0).optional(),
  })
  .refine((t) => t.rows.every((r) => r.length === t.headers.length), 'rows must match headers')
  .refine(
    (t) => t.highlightRow === undefined || t.highlightRow < t.rows.length,
    'bad highlightRow',
  );
const Examples = z.object({
  type: z.literal('examples'),
  items: z.array(z.object({ de: text, en: text })).min(1),
});
const Compare = z.object({
  type: z.literal('compare'),
  items: z
    .array(z.object({ title: text, question: text, example: text }))
    .min(2)
    .max(3),
});
const Callout = z.object({
  type: z.literal('callout'),
  kind: z.enum(['mistake', 'tip']),
  title: text,
  items: z.array(text).min(1),
});

export const BlockSchema = z.discriminatedUnion('type', [
  Paragraph,
  List,
  Table,
  Examples,
  Compare,
  Callout,
]);
export type Block = z.infer<typeof BlockSchema>;

export const SectionSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  heading: text,
  blocks: z.array(BlockSchema).min(1),
});
export type Section = z.infer<typeof SectionSchema>;

export const GrammarTopicSchema = z.object({
  id: lessonId,
  title: text,
  /** the question or idea behind the topic, shown under the title */
  tagline: text,
  /** level that first teaches it, e.g. `a1-2` (French levels start with the language: `fr-a1-1`) */
  level: z.string().regex(/^([a-z]{2}-)?[abc][12]-[12]$/),
  /** the "In short" box */
  summary: text,
  sections: z.array(SectionSchema).min(2),
  /** topics worth reading next */
  related: z.array(lessonId),
  sources: z.array(z.object({ title: text, url: z.url() })).min(1),
});
export type GrammarTopic = z.infer<typeof GrammarTopicSchema>;

/** A unit's link to a topic; `note` says what this unit adds (shown under the topic title). */
export const UnitTopicRefSchema = z.object({ topic: lessonId, note: z.string().optional() });
export type UnitTopicRef = z.infer<typeof UnitTopicRefSchema>;
