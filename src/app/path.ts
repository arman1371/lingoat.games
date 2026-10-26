import type { Activity } from '@/content/schema';
import type { ActivityProgress } from '@/store/progressStore';

export type StepState = 'done' | 'current' | 'open';

/**
 * Guided path = the unit's activities in authoring order. The first not-yet-completed activity is the
 * "current" step; later ones stay open (skipping is allowed, we only highlight what comes next).
 */
export function pathStates(
  path: readonly Activity[],
  progress: Record<string, ActivityProgress>,
): StepState[] {
  let currentFound = false;
  return path.map((a) => {
    if (progress[a.id]) return 'done';
    if (!currentFound) {
      currentFound = true;
      return 'current';
    }
    return 'open';
  });
}

export function nextActivity(
  path: readonly Activity[],
  progress: Record<string, ActivityProgress>,
): Activity | undefined {
  return path.find((a) => !progress[a.id]);
}

export function playUrl(activityId: string, queue: readonly string[] = [], seed?: number): string {
  const p = new URLSearchParams();
  if (queue.length) p.set('q', queue.join(','));
  if (seed !== undefined) p.set('seed', String(seed));
  const qs = p.toString();
  return `/play/${activityId}${qs ? `?${qs}` : ''}`;
}

/** Queue of ids that come after `activityId` in `ids`. */
export function queueAfter(ids: readonly string[], activityId: string): string[] {
  const i = ids.indexOf(activityId);
  return i < 0 ? [] : ids.slice(i + 1);
}

/** Full grammar lesson page; lives under the Games tab so the tab stays highlighted. */
export const grammarUrl = (topicId: string) => `/grammar/${topicId}`;
