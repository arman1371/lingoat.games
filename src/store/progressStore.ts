import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { accuracy, starsFor, xpFor, type GameResult } from '@/lib/scoring';
import { addMistake, dayNumber, mistakeKey, reviewMistake, type Mistake } from '@/lib/srs';
import { localRepository } from './repository';

export interface ActivityProgress {
  stars: 1 | 2 | 3;
  bestAccuracy: number;
  plays: number;
  lastPlayed: number;
}

export interface Streak {
  current: number;
  longest: number;
  lastDay: number | null;
}

export interface RecordOutcome {
  xpGained: number;
  stars: 1 | 2 | 3;
  firstCompletion: boolean;
  newBest: boolean;
}

export interface DailyXp {
  day: number;
  xp: number;
}

export interface ProgressData {
  xp: number;
  streak: Streak;
  activities: Record<string, ActivityProgress>;
  mistakes: Record<string, Mistake>;
  lastActivityId: string | null;
  /** XP earned on `day`; starts over on the next day. */
  daily: DailyXp;
}

interface ProgressActions {
  /** mode "review" replays only mistake items, so it must not touch star/play stats. */
  recordResult: (
    activityId: string,
    result: GameResult,
    options?: { mode?: 'play' | 'review'; today?: number },
  ) => RecordOutcome;
  reset: () => void;
}

export type ProgressState = ProgressData & ProgressActions;

export const initialProgress = (): ProgressData => ({
  xp: 0,
  streak: { current: 0, longest: 0, lastDay: null },
  activities: {},
  mistakes: {},
  lastActivityId: null,
  daily: { day: 0, xp: 0 },
});

/** XP earned today (0 when the stored day is an earlier one). */
export const dailyXp = (daily: DailyXp, today: number) => (daily.day === today ? daily.xp : 0);

export function nextStreak(prev: Streak, today: number): Streak {
  if (prev.lastDay === today) return prev;
  const current = prev.lastDay === today - 1 ? prev.current + 1 : 1;
  return { current, longest: Math.max(prev.longest, current), lastDay: today };
}

/** Streak shown to the user: it silently lapses if yesterday was missed. */
export function visibleStreak(streak: Streak, today: number): number {
  if (streak.lastDay === null) return 0;
  return today - streak.lastDay <= 1 ? streak.current : 0;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...initialProgress(),
      recordResult: (activityId, result, options = {}) => {
        const mode = options.mode ?? 'play';
        const today = options.today ?? dayNumber();
        const state = get();
        const acc = accuracy(result);
        const stars = starsFor(acc);
        const xpGained = xpFor(result);

        const mistakes = { ...state.mistakes };
        for (const itemId of result.played) {
          const key = mistakeKey(activityId, itemId);
          const wrong = result.mistakes.includes(itemId);
          const existing = mistakes[key];
          if (existing) {
            const updated = reviewMistake(existing, !wrong, today);
            if (updated) mistakes[key] = updated;
            else delete mistakes[key];
          } else if (wrong) {
            mistakes[key] = addMistake(undefined, activityId, itemId, today);
          }
        }

        const prev = state.activities[activityId];
        const activities = { ...state.activities };
        let newBest = false;
        if (mode === 'play') {
          newBest = !prev || acc > prev.bestAccuracy;
          activities[activityId] = {
            stars: prev ? (Math.max(prev.stars, stars) as 1 | 2 | 3) : stars,
            bestAccuracy: prev ? Math.max(prev.bestAccuracy, acc) : acc,
            plays: (prev?.plays ?? 0) + 1,
            lastPlayed: today,
          };
        }

        set({
          xp: state.xp + xpGained,
          daily: { day: today, xp: dailyXp(state.daily, today) + xpGained },
          streak: nextStreak(state.streak, today),
          activities,
          mistakes,
          lastActivityId: mode === 'play' ? activityId : state.lastActivityId,
        });
        return { xpGained, stars, firstCompletion: mode === 'play' && !prev, newBest };
      },
      reset: () => set(initialProgress()),
    }),
    {
      name: 'spielplatz.progress',
      version: 1,
      storage: createJSONStorage(() => localRepository),
      partialize: ({ xp, streak, activities, mistakes, lastActivityId, daily }) => ({
        xp,
        streak,
        activities,
        mistakes,
        lastActivityId,
        daily,
      }),
      migrate: (persisted) => ({ ...initialProgress(), ...(persisted as Partial<ProgressData>) }),
    },
  ),
);

export const completedIds = (activities: ProgressData['activities']) =>
  new Set(Object.keys(activities));
