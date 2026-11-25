import type { Activity } from './schema';

type ItemsKey =
  | 'cards'
  | 'questions'
  | 'pairs'
  | 'items'
  | 'tables'
  | 'statements'
  | 'scenes'
  | 'rounds'
  | 'orders';

const ITEMS_KEY: Record<Activity['gameType'], ItemsKey> = {
  flashcards: 'cards',
  quiz: 'questions',
  memory: 'pairs',
  listen: 'items',
  spell: 'items',
  sentence: 'items',
  gapfill: 'items',
  sortit: 'items',
  conjugation: 'tables',
  blitz: 'statements',
  dialogue: 'scenes',
  clock: 'rounds',
  market: 'orders',
};

export function getItems(activity: Activity): { id: string }[] {
  const config = activity.config as unknown as Record<string, { id: string }[]>;
  return config[ITEMS_KEY[activity.gameType]] ?? [];
}

/** Copy of the activity that only contains the given item ids (used by the mistakes review). */
export function withItems(activity: Activity, ids: readonly string[]): Activity {
  const key = ITEMS_KEY[activity.gameType];
  const config = activity.config as unknown as Record<string, { id: string }[]>;
  const kept = (config[key] ?? []).filter((i) => ids.includes(i.id));
  return { ...activity, config: { ...config, [key]: kept } } as Activity;
}

export function itemCount(activity: Activity): number {
  return getItems(activity).length;
}

/** Copy of the activity with every item replaced by `fn(item)` (ids must stay the same). */
export function mapItems<T extends { id: string }>(
  activity: Activity,
  fn: (item: T) => T,
): Activity {
  const key = ITEMS_KEY[activity.gameType];
  const config = activity.config as unknown as Record<string, T[]>;
  return {
    ...activity,
    config: { ...config, [key]: (config[key] ?? []).map(fn) },
  } as unknown as Activity;
}

/** What a learner recognises an item by: German text first, English meaning second when there is one. */
export function itemLabel(
  activity: Activity,
  item: { id: string },
): { text: string; meaning?: string } {
  const i = item as Record<string, unknown> & { id: string };
  const s = (v: unknown) => (typeof v === 'string' && v ? v : undefined);
  const pick = (text: unknown, meaning?: unknown) => ({
    text: s(text) ?? i.id,
    // emoji-only meanings (memory pairs) say nothing in a text list
    meaning: /\p{L}/u.test(s(meaning) ?? '') ? s(meaning) : undefined,
  });
  switch (activity.gameType) {
    case 'flashcards':
      return pick(i.front, i.back);
    case 'quiz':
      return pick(i.prompt, i.answer);
    case 'memory':
      return pick(i.a, i.b);
    case 'listen':
      return pick(i.speak, i.answer);
    case 'spell':
      return pick(i.answer, i.hint);
    case 'sentence':
      return pick(Array.isArray(i.words) ? i.words.join(' ') : undefined, i.translation);
    case 'gapfill':
      return pick(s(i.text)?.replace('___', s(i.answer) ?? '___'), i.translation);
    case 'sortit':
      return pick(i.text, i.translation);
    case 'conjugation':
      return pick(i.verb, i.meaning);
    case 'blitz':
      return pick(i.text);
    case 'dialogue':
      return pick(i.title);
    case 'clock':
      return pick(i.time);
    case 'market':
      return pick(i.request, i.translation);
  }
}
