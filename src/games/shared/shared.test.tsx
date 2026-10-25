import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChoiceList } from './ChoiceList';
import { FeedbackFooter, GameFrame, verdictTitle } from './GameFrame';
import { shuffledOptions } from './choices';
import { useSequence } from './useSequence';
import { useNumberKeys } from './useNumberKeys';
import { stubSpeech } from '@/test/speech';
import { useAutoSpeak } from './useAutoSpeak';
import { useSentenceSpeech, useSpeakSentence } from './useSentenceSpeech';
import { useSettingsStore, DEFAULT_SETTINGS } from '@/store/settingsStore';

const items = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];

describe('useSequence', () => {
  it('walks through all items, records first verdicts and finishes once', () => {
    const onFinish = vi.fn();
    const { result } = renderHook(() => useSequence(items, 1, onFinish, { shuffleItems: false }));
    expect(result.current.item.id).toBe('a');
    expect(result.current.total).toBe(3);

    act(() => result.current.answer(true));
    expect(result.current.phase).toBe('feedback');
    act(() => result.current.answer(false)); // ignored while in feedback
    act(() => result.current.advance());
    expect(result.current.item.id).toBe('b');
    expect(result.current.phase).toBe('answering');

    act(() => result.current.answerAndAdvance(false));
    expect(result.current.item.id).toBe('c');
    expect(result.current.isLast).toBe(true);
    act(() => result.current.answerAndAdvance(true));
    expect(onFinish).toHaveBeenCalledTimes(1);
    expect(onFinish).toHaveBeenCalledWith({
      correct: 2,
      total: 3,
      played: ['a', 'b', 'c'],
      mistakes: ['b'],
    });
  });

  it('shuffles deterministically by seed', () => {
    const order = (seed: number) =>
      renderHook(() => useSequence(items, seed, vi.fn())).result.current.item.id;
    expect(order(5)).toBe(order(5));
  });
});

describe('shuffledOptions', () => {
  it('is stable per seed+key and keeps all options', () => {
    const opts = ['a', 'b', 'c', 'd'];
    expect(shuffledOptions(opts, 3, 'q1')).toEqual(shuffledOptions(opts, 3, 'q1'));
    expect([...shuffledOptions(opts, 3, 'q1')].sort()).toEqual(opts);
  });
});

describe('ChoiceList', () => {
  it('calls onSelect on click and with number keys, then locks and marks answers', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    const { rerender } = render(
      <ChoiceList options={['Eins', 'Zwei', 'Drei']} onSelect={onSelect} />,
    );
    await user.click(screen.getByRole('button', { name: 'Zwei' }));
    expect(onSelect).toHaveBeenLastCalledWith('Zwei');
    await user.keyboard('3');
    expect(onSelect).toHaveBeenLastCalledWith('Drei');
    await user.keyboard('9');
    expect(onSelect).toHaveBeenCalledTimes(2);

    rerender(
      <ChoiceList
        options={['Eins', 'Zwei', 'Drei']}
        onSelect={onSelect}
        picked="Eins"
        answer="Zwei"
      />,
    );
    expect(screen.getByRole('button', { name: /Zwei, correct answer/ })).toBeDisabled();
    expect(screen.getByRole('button', { name: /Eins, your answer, incorrect/ })).toBeDisabled();
    await user.keyboard('1');
    expect(onSelect).toHaveBeenCalledTimes(2);
  });

  it('ignores number keys while typing in an input', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <>
        <input aria-label="field" />
        <ChoiceList options={['A', 'B']} onSelect={onSelect} />
      </>,
    );
    await user.type(screen.getByLabelText('field'), '1');
    expect(onSelect).not.toHaveBeenCalled();
  });
});

describe('useNumberKeys', () => {
  it('does nothing when disabled', async () => {
    const user = userEvent.setup();
    const onPick = vi.fn();
    renderHook(() => useNumberKeys(3, false, onPick));
    await user.keyboard('1');
    expect(onPick).not.toHaveBeenCalled();
  });
});

describe('GameFrame / FeedbackFooter', () => {
  it('renders progress, content and footer', () => {
    render(
      <GameFrame index={1} total={4} title="Demo" footer={<p>footer</p>}>
        <p>content</p>
      </GameFrame>,
    );
    expect(screen.getByRole('progressbar', { name: 'Progress' })).toHaveAttribute(
      'aria-valuenow',
      '25',
    );
    expect(screen.getByTestId('counter')).toHaveTextContent('2 / 4');
    expect(screen.getByText('content')).toBeInTheDocument();
    expect(screen.getByText('footer')).toBeInTheDocument();
  });

  it('announces feedback, focuses Continue and labels the last item', async () => {
    const onNext = vi.fn();
    render(
      <FeedbackFooter kind="wrong" title="Oops" detail={<p>detail</p>} isLast onNext={onNext} />,
    );
    expect(screen.getByRole('status')).toHaveTextContent('Oops');
    const next = screen.getByTestId('continue');
    await waitFor(() => expect(next).toHaveFocus());
    expect(next).toHaveTextContent('Well done!');
    await userEvent.setup().keyboard('{Enter}');
    expect(onNext).toHaveBeenCalled();
  });

  it('has verdict titles', () => {
    expect(verdictTitle('correct')).toBe('Correct!');
    expect(verdictTitle('almost')).toMatch(/umlauts/);
    expect(verdictTitle('wrong')).toBe('Not quite.');
  });
});

describe('useAutoSpeak', () => {
  afterEach(() => {
    // @ts-expect-error test cleanup
    delete window.speechSynthesis;
    // @ts-expect-error test cleanup
    delete window.SpeechSynthesisUtterance;
    useSettingsStore.setState({ ...DEFAULT_SETTINGS });
  });

  const stub = () => {
    const synth = { cancel: vi.fn(), speak: vi.fn(), getVoices: () => [] };
    class U {
      constructor(public text: string) {}
      lang = '';
      rate = 1;
    }
    Object.assign(window, { speechSynthesis: synth, SpeechSynthesisUtterance: U });
    return synth;
  };

  it('speaks when enabled and stays quiet when disabled', () => {
    const synth = stub();
    renderHook(() => useAutoSpeak('Hallo'));
    expect(synth.speak).toHaveBeenCalledTimes(1);
    useSettingsStore.setState({ autoSpeak: false });
    renderHook(() => useAutoSpeak('Tschüss'));
    renderHook(() => useAutoSpeak(undefined));
    renderHook(() => useAutoSpeak('Nope', false));
    expect(synth.speak).toHaveBeenCalledTimes(1);
  });
});

describe('sentence speech', () => {
  let speech: ReturnType<typeof stubSpeech>;
  beforeEach(() => {
    speech = stubSpeech();
  });
  afterEach(() => {
    speech.restore();
    useSettingsStore.setState({ ...DEFAULT_SETTINGS });
  });

  it('speaks a sentence once, at the speech rate, and again only when it changes', () => {
    useSettingsStore.setState({ ttsRate: 0.7 });
    const { rerender } = renderHook(({ text }) => useSpeakSentence(text), {
      initialProps: { text: 'Ich, gern Kaffee.' },
    });
    rerender({ text: 'Ich, gern Kaffee.' });
    expect(speech.spoken()).toEqual(['Ich, gern Kaffee.']);
    expect(speech.synth.speak.mock.calls[0]?.[0]).toMatchObject({ lang: 'de-DE', rate: 0.7 });
    rerender({ text: 'Wir, nach Hause.' });
    expect(speech.spoken()).toEqual(['Ich, gern Kaffee.', 'Wir, nach Hause.']);
    expect(speech.synth.cancel).toHaveBeenCalledTimes(2); // each utterance replaces the previous
  });

  it('stays quiet when the setting is off, whatever auto-speak says', () => {
    useSettingsStore.setState({ speakSentences: false, autoSpeak: true });
    renderHook(() => useSpeakSentence('Hallo'));
    const { result } = renderHook(() => useSentenceSpeech());
    result.current('Tschüss');
    expect(speech.synth.speak).not.toHaveBeenCalled();
  });

  it('ignores empty text and missing speech support', () => {
    const { result } = renderHook(() => useSentenceSpeech());
    result.current(undefined);
    result.current('');
    expect(speech.synth.speak).not.toHaveBeenCalled();
    speech.restore();
    expect(() => result.current('Hallo')).not.toThrow();
  });
});
