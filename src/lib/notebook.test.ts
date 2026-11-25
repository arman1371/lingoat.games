import type { ContentIndex } from '@/content';
import type { Activity } from '@/content/schema';
import { quizActivity } from '@/test/factories';
import { buildNotebook, weakSpotKeys } from './notebook';

const index = (...activities: Activity[]) =>
  ({ activityById: new Map(activities.map((a) => [a.id, a])) }) as unknown as ContentIndex;

const grammarQuiz = (over: Partial<Activity> = {}) =>
  ({ ...quizActivity(), id: 'g', tags: ['grammar', 'accusative'], ...over }) as Activity;

describe('buildNotebook', () => {
  it('puts vocabulary items into words, worst first', () => {
    const a = quizActivity();
    const nb = buildNotebook({ 'act-1::q1': 1, 'act-1::q2': 3 }, index(a));
    expect(nb.grammar).toEqual([]);
    expect(nb.words.map((w) => [w.key, w.score])).toEqual([
      ['act-1::q2', 3],
      ['act-1::q1', 1],
    ]);
    expect(nb.words[0]!.text).toBeTruthy();
  });

  it('groups items of a grammar activity by lesson and sums their scores', () => {
    const nb = buildNotebook({ 'g::q1': 1, 'g::q2': 2 }, index(grammarQuiz()));
    expect(nb.words).toEqual([]);
    expect(nb.grammar).toEqual([{ lesson: 'accusative', score: 3, keys: ['g::q2', 'g::q1'] }]);
  });

  it('prefers the lesson on the item over the activity', () => {
    const a = grammarQuiz();
    (a.config as { questions: { id: string; lesson?: string }[] }).questions[0]!.lesson = 'dative';
    const nb = buildNotebook({ 'g::q1': 1, 'g::q2': 1 }, index(a));
    expect(nb.grammar.map((g) => g.lesson).sort()).toEqual(['accusative', 'dative']);
  });

  it('skips keys whose activity or item is gone', () => {
    const nb = buildNotebook(
      { 'nope::q1': 2, 'act-1::zzz': 2, 'act-1::q1': 0 },
      index(quizActivity()),
    );
    expect(nb).toEqual({ words: [], grammar: [] });
  });
});

describe('weakSpotKeys', () => {
  it('takes the highest scores first and respects the limit', () => {
    const nb = buildNotebook(
      { 'act-1::q1': 1, 'g::q1': 2, 'g::q2': 2 },
      index(quizActivity(), grammarQuiz()),
    );
    expect(weakSpotKeys(nb)).toEqual(['g::q1', 'g::q2', 'act-1::q1']);
    expect(weakSpotKeys(nb, 2)).toHaveLength(2);
  });
});
