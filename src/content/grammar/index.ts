import { A11_TOPICS } from './a1-1';
import { A12_TOPICS } from './a1-2';
import { A21_TOPICS } from './a2-1';
import { A22_TOPICS } from './a2-2';
import { B21_TOPICS } from './b2-1';
import { B22_TOPICS } from './b2-2';
import type { GrammarTopic, UnitTopicRef } from './schema';
import { UNIT_TOPICS } from './unitTopics';

export type { Block, GrammarTopic, Section, UnitTopicRef } from './schema';
export { UNIT_TOPICS };

/** Every written lesson, in teaching order. Topics are added level by level. */
export const GRAMMAR_TOPICS: readonly GrammarTopic[] = [
  ...A11_TOPICS,
  ...A12_TOPICS,
  ...A21_TOPICS,
  ...A22_TOPICS,
  ...B21_TOPICS,
  ...B22_TOPICS,
];

export const GRAMMAR_TOPIC_BY_ID: ReadonlyMap<string, GrammarTopic> = new Map(
  GRAMMAR_TOPICS.map((t) => [t.id, t]),
);

export const grammarTopic = (id: string | undefined): GrammarTopic | undefined =>
  id ? GRAMMAR_TOPIC_BY_ID.get(id) : undefined;

/** The topics a unit teaches, with the unit's note; topics that are not written yet are left out. */
export function topicsOfUnit(unitId: string): { topic: GrammarTopic; note?: string }[] {
  return (UNIT_TOPICS[unitId] ?? []).flatMap((ref: UnitTopicRef) => {
    const topic = GRAMMAR_TOPIC_BY_ID.get(ref.topic);
    return topic ? [{ topic, note: ref.note }] : [];
  });
}

/** Units that link to a topic, in unit-id order of the mapping. */
export function unitsOfTopic(id: string): string[] {
  return Object.entries(UNIT_TOPICS)
    .filter(([, refs]) => refs.some((r) => r.topic === id))
    .map(([unitId]) => unitId);
}
