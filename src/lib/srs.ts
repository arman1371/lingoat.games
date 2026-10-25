/** Leitner-style "mistake box": wrong answers come back after growing intervals, then graduate. */
export interface Mistake {
  key: string; // `${activityId}::${itemId}`
  activityId: string;
  itemId: string;
  box: 1 | 2 | 3;
  /** day number (days since epoch) when it was last seen */
  lastSeen: number;
  wrongCount: number;
}

export const INTERVAL_DAYS: Record<Mistake['box'], number> = { 1: 0, 2: 1, 3: 3 };

export const mistakeKey = (activityId: string, itemId: string) => `${activityId}::${itemId}`;

export function dayNumber(date: Date = new Date()): number {
  return Math.floor((date.getTime() - date.getTimezoneOffset() * 60_000) / 86_400_000);
}

export function addMistake(
  existing: Mistake | undefined,
  activityId: string,
  itemId: string,
  today: number,
): Mistake {
  return {
    key: mistakeKey(activityId, itemId),
    activityId,
    itemId,
    box: 1,
    lastSeen: today,
    wrongCount: (existing?.wrongCount ?? 0) + 1,
  };
}

/** Returns the updated mistake, or null when it has graduated out of the box. */
export function reviewMistake(m: Mistake, correct: boolean, today: number): Mistake | null {
  if (!correct) return { ...m, box: 1, lastSeen: today, wrongCount: m.wrongCount + 1 };
  if (m.box === 3) return null;
  return { ...m, box: (m.box + 1) as Mistake['box'], lastSeen: today };
}

export function isDue(m: Mistake, today: number): boolean {
  return today - m.lastSeen >= INTERVAL_DAYS[m.box];
}
