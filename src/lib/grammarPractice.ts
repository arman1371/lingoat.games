import { lessonForTags, type LessonId } from '@/content/lessons';
import type { Activity } from '@/content/schema';

/** Games that practise a topic: those whose lesson (own or from their grammar tag) is the topic. */
export function practiceActivities(activities: readonly Activity[], topic: LessonId): Activity[] {
  return activities.filter((a) => (a.lesson ?? lessonForTags(a.tags)) === topic);
}
