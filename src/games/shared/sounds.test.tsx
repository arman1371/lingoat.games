import { act, renderHook, screen } from '@testing-library/react';
import { renderGame } from '@/test/render';
import { playSfx } from '@/lib/sfx';
import { DEFAULT_SETTINGS, useSettingsStore } from '@/store/settingsStore';
import Quiz from '../quiz/Quiz';
import Dialogue from '../dialogue/Dialogue';
import Blitz from '../blitz/Blitz';
import Memory from '../memory/Memory';
import { buildColumns } from '../memory/logic';
import { useSequence } from './useSequence';

vi.mock('@/lib/sfx', () => ({ playSfx: vi.fn(() => true) }));
const played = () => vi.mocked(playSfx).mock.calls.map(([kind]) => kind);

beforeEach(() => {
  vi.mocked(playSfx).mockClear();
  useSettingsStore.setState({ ...DEFAULT_SETTINGS });
});

const items = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];

describe('answer sounds', () => {
  it('useSequence plays a cue per verdict, but not while showing feedback', () => {
    const { result } = renderHook(() => useSequence(items, 1, vi.fn(), { shuffleItems: false }));
    act(() => result.current.answer(true));
    act(() => result.current.answer(false)); // ignored in feedback phase
    act(() => result.current.advance());
    act(() => result.current.answerAndAdvance(false));
    expect(played()).toEqual(['correct', 'wrong']);
  });

  it('stays silent when sound effects are off or the engine opts out', () => {
    useSettingsStore.setState({ sounds: false });
    const off = renderHook(() => useSequence(items, 1, vi.fn()));
    act(() => off.result.current.answer(true));
    useSettingsStore.setState({ sounds: true });
    const optOut = renderHook(() => useSequence(items, 1, vi.fn(), { sounds: false }));
    act(() => optOut.result.current.answerAndAdvance(true));
    expect(played()).toEqual([]);
  });

  it('quiz: correct and wrong picks', async () => {
    const config = {
      questions: [
        { id: 'q1', prompt: 'Hallo', options: ['hello', 'bye'], answer: 'hello' },
        { id: 'q2', prompt: 'Tschüss', options: ['hello', 'bye'], answer: 'bye' },
      ],
    };
    const { user } = renderGame(Quiz, config, 1);
    const answer = () => (screen.getByTestId('prompt').textContent === 'Hallo' ? 'hello' : 'bye');
    await user.click(screen.getByRole('button', { name: answer() }));
    await user.click(screen.getByTestId('continue'));
    await user.click(screen.getByRole('button', { name: answer() === 'hello' ? 'bye' : 'hello' }));
    expect(played()).toEqual(['correct', 'wrong']);
  });

  it('dialogue: every reply gets a cue', async () => {
    const config = {
      scenes: [
        {
          id: 'sc1',
          title: 'Hi',
          turns: [
            {
              kind: 'you' as const,
              options: [
                { text: 'Hallo!', correct: true },
                { text: 'Tschüss!', correct: false },
              ],
            },
          ],
        },
      ],
    };
    const { user } = renderGame(Dialogue, config, 1);
    await user.click(screen.getByRole('button', { name: 'Tschüss!' }));
    await user.click(screen.getByRole('button', { name: 'Hallo!' }));
    expect(played()).toEqual(['wrong', 'correct']);
  });

  it('blitz: every statement gets a cue', async () => {
    const config = {
      seconds: 30,
      statements: [
        { id: 's1', text: 'Ich bin Anna.', isTrue: true },
        { id: 's2', text: 'Ich bist Anna.', isTrue: false },
      ],
    };
    const { user } = renderGame(Blitz, config, 1);
    await user.click(screen.getByTestId('blitz-start'));
    await user.click(screen.getByRole('button', { name: /Correct/ }));
    await user.click(screen.getByRole('button', { name: /Correct/ }));
    expect([...played()].sort()).toEqual(['correct', 'wrong']);
  });

  it('memory: a pair is correct, a mismatch is wrong', async () => {
    const config = {
      pairs: [
        { id: 'p1', a: 'Hund', b: 'dog' },
        { id: 'p2', a: 'Katze', b: 'cat' },
      ],
    };
    const { left, right } = buildColumns(config.pairs, 1);
    const card = (uid: string) => {
      const all = screen.getAllByTestId('memory-card');
      const l = left.findIndex((c) => c.uid === uid);
      return all[l >= 0 ? l : left.length + right.findIndex((c) => c.uid === uid)]!;
    };
    const { user } = renderGame(Memory, config, 1);
    await user.click(card('p1:a'));
    await user.click(card('p2:b')); // wrong pair
    await user.click(card('p1:a'));
    await user.click(card('p1:b')); // right pair
    await user.click(card('p2:a'));
    await user.click(card('p1:a')); // already matched: ignored, no cue
    expect(played()).toEqual(['wrong', 'correct']);
  });
});
