import {
  dailyXp,
  initialProgress,
  nextStreak,
  useProgressStore,
  visibleStreak,
} from './progressStore';
import type { GameResult } from '@/lib/scoring';

const res = (over: Partial<GameResult> = {}): GameResult => ({
  correct: 3,
  total: 4,
  played: ['a', 'b', 'c', 'd'],
  mistakes: ['d'],
  ...over,
});

beforeEach(() => useProgressStore.getState().reset());

describe('progressStore', () => {
  it('records a first completion with stars, xp and a mistake', () => {
    const out = useProgressStore.getState().recordResult('act', res(), { today: 100 });
    expect(out).toMatchObject({ firstCompletion: true, stars: 2, newBest: true });
    const s = useProgressStore.getState();
    expect(s.xp).toBe(out.xpGained);
    expect(s.activities.act).toMatchObject({ stars: 2, plays: 1, lastPlayed: 100 });
    expect(Object.keys(s.mistakes)).toEqual(['act::d']);
    expect(s.lastActivityId).toBe('act');
  });

  it('keeps the best stars and counts plays', () => {
    const { recordResult } = useProgressStore.getState();
    recordResult('act', res({ correct: 4, mistakes: [] }), { today: 1 });
    const out = recordResult('act', res({ correct: 1, mistakes: ['a', 'b', 'c'] }), { today: 2 });
    expect(out).toMatchObject({ firstCompletion: false, newBest: false });
    expect(useProgressStore.getState().activities.act).toMatchObject({ stars: 3, plays: 2 });
  });

  it('graduates a mistake after three correct reviews and ignores stats in review mode', () => {
    const { recordResult } = useProgressStore.getState();
    recordResult('act', res(), { today: 1 });
    const review = res({ correct: 1, total: 1, played: ['d'], mistakes: [] });
    recordResult('act', review, { mode: 'review', today: 2 });
    recordResult('act', review, { mode: 'review', today: 4 });
    expect(useProgressStore.getState().mistakes['act::d']?.box).toBe(3);
    recordResult('act', review, { mode: 'review', today: 8 });
    const s = useProgressStore.getState();
    expect(s.mistakes).toEqual({});
    expect(s.activities.act?.plays).toBe(1);
  });

  it('resets a mistake to box 1 when missed again', () => {
    const { recordResult } = useProgressStore.getState();
    recordResult('act', res(), { today: 1 });
    recordResult('act', res({ correct: 0, total: 1, played: ['d'], mistakes: ['d'] }), {
      mode: 'review',
      today: 2,
    });
    expect(useProgressStore.getState().mistakes['act::d']).toMatchObject({ box: 1, wrongCount: 2 });
  });

  it('tracks streaks', () => {
    expect(nextStreak({ current: 0, longest: 0, lastDay: null }, 5)).toEqual({
      current: 1,
      longest: 1,
      lastDay: 5,
    });
    const same = { current: 2, longest: 4, lastDay: 5 };
    expect(nextStreak(same, 5)).toBe(same);
    expect(nextStreak(same, 6)).toEqual({ current: 3, longest: 4, lastDay: 6 });
    expect(nextStreak(same, 9)).toEqual({ current: 1, longest: 4, lastDay: 9 });
    expect(visibleStreak(same, 6)).toBe(2);
    expect(visibleStreak(same, 8)).toBe(0);
    expect(visibleStreak(initialProgress().streak, 1)).toBe(0);
  });

  it('persists to localStorage and resets', () => {
    useProgressStore.getState().recordResult('act', res(), { today: 1 });
    const raw = JSON.parse(localStorage.getItem('lingoat.progress')!);
    expect(raw.state.activities.act.stars).toBe(2);
    expect(raw.version).toBe(1);
    useProgressStore.getState().reset();
    expect(useProgressStore.getState().xp).toBe(0);
  });
});

describe('daily XP', () => {
  it('adds up within a day and starts over on the next', () => {
    const { recordResult } = useProgressStore.getState();
    const a = recordResult('act', res(), { today: 10 });
    const b = recordResult('act2', res(), { today: 10 });
    const s = useProgressStore.getState();
    expect(dailyXp(s.daily, 10)).toBe(a.xpGained + b.xpGained);
    expect(dailyXp(s.daily, 11)).toBe(0);
    const c = recordResult('act', res(), { today: 11 });
    expect(dailyXp(useProgressStore.getState().daily, 11)).toBe(c.xpGained);
  });

  it('starts at zero and is cleared by reset', () => {
    expect(initialProgress().daily).toEqual({ day: 0, xp: 0 });
    useProgressStore.getState().recordResult('act', res(), { today: 5 });
    useProgressStore.getState().reset();
    expect(useProgressStore.getState().daily).toEqual({ day: 0, xp: 0 });
  });
});
