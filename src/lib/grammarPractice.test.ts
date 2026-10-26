import a12 from '@/content/a1-2';
import { practiceActivities } from './grammarPractice';

describe('practiceActivities', () => {
  it('finds the games whose lesson is the topic', () => {
    const games = practiceActivities(a12.activities, 'dative');
    expect(games.length).toBeGreaterThan(0);
    expect(games.every((a) => a.tags.includes('dative') || a.lesson === 'dative')).toBe(true);
  });

  it('returns nothing for a topic without grammar games', () => {
    expect(practiceActivities(a12.activities, 'c21-futur-2')).toEqual([]);
  });
});
