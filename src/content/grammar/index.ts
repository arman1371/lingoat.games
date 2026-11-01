import { A11_TOPICS } from './a1-1';
import { A12_TOPICS } from './a1-2';
import { A21_TOPICS } from './a2-1';
import { A22_TOPICS } from './a2-2';
import { B11_TOPICS } from './b1-1';
import { B12_TOPICS } from './b1-2';
import { B21_TOPICS } from './b2-1';
import { B22_TOPICS } from './b2-2';
import { C11_TOPICS } from './c1-1';
import { C12_TOPICS } from './c1-2';
import { C21_TOPICS } from './c2-1';
import { C22_TOPICS } from './c2-2';
import { FR11_TOPICS } from './fr-a1-1';
import { FR11_TOPICS_B } from './fr-a1-1-b';
import { FR12_TOPICS } from './fr-a1-2';
import { FR21_TOPICS } from './fr-a2-1';
import { FR22_TOPICS } from './fr-a2-2';
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
  ...B11_TOPICS,
  ...B12_TOPICS,
  ...B21_TOPICS,
  ...B22_TOPICS,
  ...C11_TOPICS,
  ...C12_TOPICS,
  ...C21_TOPICS,
  ...C22_TOPICS,
  ...FR11_TOPICS,
  ...FR11_TOPICS_B,
  ...FR12_TOPICS,
  ...FR21_TOPICS,
  ...FR22_TOPICS,
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
