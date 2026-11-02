import { unit } from '../builders';
import type { Unit } from '../schema';

/**
 * The French C2.2 units share the authoring helpers of the German C2.2 level (they do not depend on
 * German text): `gap` / `typed` (gap fill), `q` (quiz question, answer first), `sent`, `tf` (blitz),
 * `say` / `you` (dialogue turns), `heard`, `dictation`, `sortItems`, `meta`, `withWhy` and `withLesson`
 * (grammar hints).
 */
export {
  activity,
  dictation,
  gap,
  heard,
  meta,
  q,
  say,
  sent,
  sortItems,
  tf,
  typed,
  withLesson,
  withWhy,
  you,
} from '../c2-2/helpers';

/** `unit()` of the level: every unit passes the level id so the content test can check the prefix. */
export const unitFrC22 = (u: Omit<Unit, 'levelId'>): Unit => unit({ ...u, levelId: 'fr-c2-2' });

/** Sort it cards written as [text, bucket, English meaning] rows; ids are generated. */
export const cards = (prefix: string, rows: readonly (readonly [string, string, string])[]) =>
  rows.map(([text, bucket, translation], i) => ({
    id: `${prefix}${i + 1}`,
    text,
    bucket,
    speak: text,
    translation,
  }));
