import { GRAMMAR_TOPICS, type GrammarTopic } from '@/content/grammar';
import { LEVELS } from '@/content/levels';
import { groupTopics, levelsWithTopics } from './grammarFilter';

const make = (id: string, level: string, title: string, tagline = ''): GrammarTopic =>
  ({ ...GRAMMAR_TOPICS[0]!, id: id as GrammarTopic['id'], level, title, tagline }) as GrammarTopic;
const topics = [
  make('dative', 'a1-2', 'Dative', 'Wem?'),
  make('perfekt', 'a1-2', 'The Perfekt', 'the past'),
  make('passive', 'a2-2', 'Passive', 'werden'),
  make('konjunktiv-2', 'b1-1', 'Konjunktiv II', 'if'),
];

describe('groupTopics', () => {
  it('groups by level in catalogue order and drops empty levels', () => {
    const groups = groupTopics(topics, LEVELS);
    expect(groups.map((g) => [g.level.id, g.topics.length])).toEqual([
      ['a1-2', 2],
      ['a2-2', 1],
      ['b1-1', 1],
    ]);
  });

  it('searches title and tagline, ignoring case and surrounding spaces', () => {
    expect(groupTopics(topics, LEVELS, ' WEM ').flatMap((g) => g.topics.map((t) => t.id))).toEqual([
      'dative',
    ]);
    expect(groupTopics(topics, LEVELS, 'past')[0]!.topics[0]!.id).toBe('perfekt');
    expect(groupTopics(topics, LEVELS, 'zzz')).toEqual([]);
  });

  it('filters by level and lists the levels that have topics', () => {
    expect(groupTopics(topics, LEVELS, '', 'a2-2').map((g) => g.level.id)).toEqual(['a2-2']);
    expect(groupTopics(topics, LEVELS, 'wem', 'a2-2')).toEqual([]);
    expect(levelsWithTopics(topics, LEVELS).map((l) => l.id)).toEqual(['a1-2', 'a2-2', 'b1-1']);
  });
});
