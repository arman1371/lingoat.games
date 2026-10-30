import {
  activity,
  byDe,
  flashcards,
  label,
  listen,
  memory,
  pick,
  quizDeEn,
  quizEmoji,
  quizEnDe,
  slug,
  spell,
  unit,
  vocabList,
} from './builders';
import { ActivitySchema } from './schema';

const vocab = vocabList('u', 'Test', [
  ['Apfel', 'apple', '🍎', 'der', 'Äpfel'],
  ['Brot', 'bread', '🍞', 'das'],
  ['Milch', 'milk', '🥛', 'die'],
  ['Käse', 'cheese', '🧀', 'der'],
  ['danke', 'thanks'],
]);

describe('builders', () => {
  it('slugifies', () => {
    expect(slug('Auf Wiedersehen!')).toBe('auf-wiedersehen');
    expect(slug('Straße Ü')).toBe('strasse-ue');
  });

  it('builds vocab with ids, articles and labels', () => {
    expect(vocab[0]).toMatchObject({ id: 'u-apfel', article: 'der', plural: 'Äpfel', emoji: '🍎' });
    expect(vocab[4]).not.toHaveProperty('article');
    expect(label(vocab[0]!)).toBe('der Apfel');
    expect(label(vocab[4]!)).toBe('danke');
  });

  it('does not repeat an article that is already part of the word', () => {
    const [name] = vocabList('u', 'Intro', [['der Name', 'name', '🏷️', 'der']]);
    expect(label(name!)).toBe('der Name');
  });

  it('keeps ids unique for words that only differ by case', () => {
    const v = vocabList('u', 'Pronouns', [
      ['sie', 'she'],
      ['Sie', 'you (formal)'],
    ]);
    expect(v.map((x) => x.id)).toEqual(['u-sie', 'u-sie-2']);
  });

  it('looks vocab up by German word', () => {
    expect(byDe(vocab, 'Brot', 'Milch').map((v) => v.en)).toEqual(['bread', 'milk']);
    expect(() => byDe(vocab, 'Nope')).toThrow(/Unknown vocab/);
  });

  it('generates valid, deterministic configs', () => {
    const configs = {
      flashcards: flashcards(vocab),
      quiz: quizDeEn(vocab),
      quizEnDe: quizEnDe(vocab),
      quizEmoji: quizEmoji(vocab),
      memory: memory(vocab.slice(0, 4)),
      listen: listen(vocab),
      spell: spell(vocab, 'type'),
    };
    const meta = {
      title: 'T',
      description: 'D',
      tags: ['vocabulary' as const],
      difficulty: 1 as const,
      estMinutes: 2,
    };
    expect(
      ActivitySchema.safeParse(activity('u', 'f', 'flashcards', meta, configs.flashcards)).success,
    ).toBe(true);
    expect(ActivitySchema.safeParse(activity('u', 'q', 'quiz', meta, configs.quiz)).success).toBe(
      true,
    );
    expect(
      ActivitySchema.safeParse(activity('u', 'q2', 'quiz', meta, configs.quizEnDe)).success,
    ).toBe(true);
    expect(
      ActivitySchema.safeParse(activity('u', 'q3', 'quiz', meta, configs.quizEmoji)).success,
    ).toBe(true);
    expect(
      ActivitySchema.safeParse(activity('u', 'm', 'memory', meta, configs.memory)).success,
    ).toBe(true);
    expect(
      ActivitySchema.safeParse(activity('u', 'l', 'listen', meta, configs.listen)).success,
    ).toBe(true);
    expect(ActivitySchema.safeParse(activity('u', 's', 'spell', meta, configs.spell)).success).toBe(
      true,
    );
    expect(quizDeEn(vocab)).toEqual(quizDeEn(vocab));
    expect(configs.quizEmoji.questions).toHaveLength(4); // "danke" has no emoji
    expect(configs.flashcards.cards[0]?.note).toBe('Plural: die Äpfel');
  });

  it('gives French vocabulary ascii ids and plain plural notes', () => {
    const rows = vocabList('fr-a1-1-x', 'Test', [
      ['À tout à l’heure', 'see you later', '🕓'],
      ['S’il vous plaît', 'please'],
      ['le cœur', 'the heart', '❤️', undefined, 'les cœurs'],
    ]);
    expect(rows.map((v) => v.id)).toEqual([
      'fr-a1-1-x-a-tout-a-l-heure',
      'fr-a1-1-x-s-il-vous-plait',
      'fr-a1-1-x-le-coeur',
    ]);
    expect(flashcards(rows).cards[2]?.note).toBe('Plural: les cœurs');
    // German ids keep their accents untouched, so saved progress stays valid
    expect(vocabList('a1-2-x', 'Test', [['Café', 'cafe']])[0]?.id).toBe('a1-2-x-caf');
  });

  it('never repeats an option and always includes the answer', () => {
    for (const q of quizDeEn(vocab).questions) {
      expect(new Set(q.options).size).toBe(q.options.length);
      expect(q.options).toContain(q.answer);
    }
  });

  it('builds activities and units', () => {
    const a = activity(
      'u',
      'k',
      'flashcards',
      { title: 'T', description: 'D', tags: ['vocabulary'], difficulty: 1, estMinutes: 2 },
      flashcards(vocab),
    );
    expect(a.id).toBe('u-k');
    expect(
      unit({
        id: 'u',
        order: 1,
        title: 't',
        subtitle: 's',
        emoji: 'e',
        goals: ['g'],
        grammar: [],
        vocabFields: [],
      }).levelId,
    ).toBe('a1-1');
  });

  it('picks deterministically', () => {
    expect(pick([1, 2, 3, 4, 5], 3, 'x')).toEqual(pick([1, 2, 3, 4, 5], 3, 'x'));
  });
});
