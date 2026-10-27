import { act, screen } from '@testing-library/react';
import { buildNounIndex } from '@/lib/german/nouns';
import { renderGame } from '@/test/render';
import { NounIndexContext } from '../shared/NounArticle';
import { CaseDrillContext } from '../shared/SentenceNouns';
import Blitz from './Blitz';

const statements = [
  { id: 's1', text: 'Ich heiße Anna.', isTrue: true },
  { id: 's2', text: 'Ich heißt Anna.', isTrue: false, explanation: 'ich heiße' },
  { id: 's3', text: 'Wir sind Freunde.', isTrue: true },
  { id: 's4', text: 'Er sind Lehrer.', isTrue: false },
];
const config = { seconds: 30, statements };
const truth = (text: string) => statements.find((s) => s.text === text)!.isTrue;
const prompt = () => screen.getByTestId('prompt').textContent!;
const answerRight = async (user: ReturnType<typeof renderGame>['user']) =>
  user.click(screen.getByRole('button', { name: truth(prompt()) ? /Correct/ : /Wrong/ }));
const answerWrong = async (user: ReturnType<typeof renderGame>['user']) =>
  user.click(screen.getByRole('button', { name: truth(prompt()) ? /Wrong/ : /Correct/ }));

describe('Blitz', () => {
  beforeEach(() => vi.useFakeTimers({ shouldAdvanceTime: true }));
  afterEach(() => vi.useRealTimers());

  it('starts with an intro and runs a countdown', async () => {
    const { user } = renderGame(Blitz, config, 1, { advanceTimers: vi.advanceTimersByTime });
    expect(screen.getByRole('heading', { name: /speed round/i })).toBeInTheDocument();
    await user.click(screen.getByTestId('blitz-start'));
    expect(screen.getByTestId('timer')).toHaveTextContent('30s');
    for (let i = 0; i < 3; i++) act(() => void vi.advanceTimersByTime(1000));
    expect(screen.getByTestId('timer')).toHaveTextContent('27s');
  });

  it('builds a combo, resets it on a mistake, and finishes after the last statement with bonus xp', async () => {
    const { user, onFinish } = renderGame(Blitz, config, 1, {
      advanceTimers: vi.advanceTimersByTime,
    });
    await user.click(screen.getByTestId('blitz-start'));
    await answerRight(user);
    await answerRight(user);
    expect(screen.getByTestId('combo')).toHaveTextContent('Combo 2');
    await answerWrong(user);
    expect(screen.getByTestId('combo')).toHaveTextContent('Combo 0');
    expect(screen.getByTestId('flash')).toHaveTextContent(/It was (correct|wrong)/);
    await answerRight(user);
    expect(onFinish).toHaveBeenCalledTimes(1);
    expect(onFinish).toHaveBeenCalledWith(
      expect.objectContaining({ correct: 3, total: 4, bonusXp: 4 }),
    );
    expect(onFinish.mock.calls[0]![0].mistakes).toHaveLength(1);
  });

  it('ends when time runs out and scores what was answered', async () => {
    const { user, onFinish } = renderGame(Blitz, { ...config, seconds: 15 }, 1, {
      advanceTimers: vi.advanceTimersByTime,
    });
    await user.click(screen.getByTestId('blitz-start'));
    await answerRight(user);
    for (let i = 0; i < 16; i++) act(() => void vi.advanceTimersByTime(1000));
    expect(onFinish).toHaveBeenCalledTimes(1);
    expect(onFinish).toHaveBeenCalledWith(expect.objectContaining({ correct: 1, total: 1 }));
  });

  it('gives a failing score (not a free win) when nothing was answered in time', async () => {
    const { user, onFinish } = renderGame(Blitz, { ...config, seconds: 15 }, 1, {
      advanceTimers: vi.advanceTimersByTime,
    });
    await user.click(screen.getByTestId('blitz-start'));
    for (let i = 0; i < 16; i++) act(() => void vi.advanceTimersByTime(1000));
    expect(onFinish).toHaveBeenCalledWith(expect.objectContaining({ correct: 0, total: 4 }));
  });

  it('relaxed mode has no timer', async () => {
    const { user, onFinish } = renderGame(Blitz, { ...config, seconds: 15 }, 1, {
      advanceTimers: vi.advanceTimersByTime,
    });
    await user.click(screen.getByLabelText(/Relaxed mode/));
    await user.click(screen.getByTestId('blitz-start'));
    expect(screen.getByTestId('timer')).toHaveTextContent('∞');
    for (let i = 0; i < 20; i++) act(() => void vi.advanceTimersByTime(1000));
    expect(onFinish).not.toHaveBeenCalled();
  });

  it('lists the nouns of the statement in a case drill, inside the card', async () => {
    const dative = {
      seconds: 30,
      statements: [
        { id: 'd1', text: 'Ich helfe dem Mann.', isTrue: true },
        { id: 'd2', text: 'Ich helfe den Mann.', isTrue: false },
        { id: 'd3', text: 'Er dankt dem Mann.', isTrue: true },
        { id: 'd4', text: 'Er dankt den Mann.', isTrue: false },
      ],
    };
    const nouns = buildNounIndex([{ de: 'Mann', article: 'der', plural: 'Männer' }]);
    const { user } = renderGame(Blitz, dative, 1, {
      advanceTimers: vi.advanceTimersByTime,
      wrapper: ({ children }) => (
        <NounIndexContext value={nouns}>
          <CaseDrillContext value>{children}</CaseDrillContext>
        </NounIndexContext>
      ),
    });
    await user.click(screen.getByTestId('blitz-start'));
    expect(screen.getByTestId('sentence-noun')).toHaveTextContent('der Mann');
  });
});
