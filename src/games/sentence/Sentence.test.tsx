import { screen, within } from '@testing-library/react';
import { renderGame } from '@/test/render';
import { stubSpeech } from '@/test/speech';
import { DEFAULT_SETTINGS, useSettingsStore } from '@/store/settingsStore';
import Sentence from './Sentence';

const config = {
  items: [
    {
      id: 's1',
      translation: 'What is your name?',
      words: ['Wie', 'heißt', 'du?'],
      explanation: 'Verb second.',
    },
    {
      id: 's2',
      translation: 'In the evening I watch TV.',
      words: ['Am', 'Abend', 'sehe', 'ich', 'fern.'],
      alsoAccept: ['Ich sehe am Abend fern.'],
      extra: ['auf'],
    },
  ],
};

async function place(user: ReturnType<typeof renderGame>['user'], words: string[]) {
  for (const w of words) {
    const bank = within(screen.getByRole('group', { name: 'Word bank' }));
    await user.click(bank.getByRole('button', { name: w }));
  }
}
const SOLUTION: Record<string, string[]> = {
  'What is your name?': ['Wie', 'heißt', 'du?'],
  'In the evening I watch TV.': ['Am', 'Abend', 'sehe', 'ich', 'fern.'],
};
// tiles keep their capitalisation; grading ignores case, so “ich sehe Am Abend fern.” is the alternative order
const ALT = ['ich', 'sehe', 'Am', 'Abend', 'fern.'];
const prompt = () => screen.getByTestId('prompt').textContent!;

describe('Sentence', () => {
  it('builds a sentence from word tiles and removes tiles again', async () => {
    const { user } = renderGame(Sentence, config);
    const p = prompt();
    const words = SOLUTION[p]!;
    expect(screen.getByRole('button', { name: 'Check' })).toBeDisabled();
    await place(user, [words[0]!]);
    const line = within(screen.getByTestId('answer-line'));
    expect(line.getByRole('button', { name: `Remove ${words[0]}` })).toBeInTheDocument();
    await user.click(line.getByRole('button', { name: `Remove ${words[0]}` }));
    expect(line.queryByRole('button')).not.toBeInTheDocument();
  });

  it('accepts the correct order, then continues through all items', async () => {
    const { user, onFinish } = renderGame(Sentence, config);
    for (let i = 0; i < 2; i++) {
      await place(user, SOLUTION[prompt()]!);
      await user.click(screen.getByRole('button', { name: 'Check' }));
      expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
      await user.click(screen.getByTestId('continue'));
    }
    expect(onFinish).toHaveBeenCalledWith(expect.objectContaining({ correct: 2, total: 2 }));
  });

  it('accepts an alternative word order', async () => {
    const { user } = renderGame(Sentence, { items: [config.items[1]!] });
    await place(user, ALT);
    await user.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
  });

  it('rejects a wrong order, shows the solution and locks the tiles', async () => {
    const { user, onFinish } = renderGame(Sentence, { items: [config.items[0]!] });
    await place(user, ['du?', 'Wie', 'heißt']);
    await user.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    expect(screen.getByText('Wie heißt du?', { selector: 'strong' })).toBeInTheDocument();
    expect(screen.getByText('Verb second.')).toBeInTheDocument();
    expect(
      within(screen.getByTestId('answer-line')).getByRole('button', { name: 'Remove Wie' }),
    ).toBeDisabled();
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(
      expect.objectContaining({ correct: 0, mistakes: ['s1'] }),
    );
  });
});

describe('Sentence grammar hints', () => {
  it('shows the item lesson only after a wrong order', async () => {
    const one = {
      items: [{ ...config.items[0]!, lesson: 'questions' as const }],
    };
    const { user } = renderGame(Sentence, one);
    await place(user, ['heißt', 'Wie', 'du?']);
    await user.click(screen.getByRole('button', { name: 'Check' }));
    await user.click(screen.getByTestId('why'));
    expect(screen.getByTestId('mini-lesson')).toHaveTextContent('Asking questions');
  });
});

describe('Sentence speech', () => {
  let speech: ReturnType<typeof stubSpeech>;
  beforeEach(() => {
    speech = stubSpeech();
  });
  afterEach(() => {
    speech.restore();
    useSettingsStore.setState({ ...DEFAULT_SETTINGS });
  });

  it('speaks each word as it is selected, but not when it is removed again', async () => {
    const { user } = renderGame(Sentence, config);
    expect(speech.synth.speak).not.toHaveBeenCalled();
    const words = SOLUTION[prompt()]!;
    await place(user, words.slice(0, 2));
    expect(speech.spoken()).toEqual(words.slice(0, 2));
    await user.click(screen.getByRole('button', { name: `Remove ${words[1]}` }));
    expect(speech.spoken()).toEqual(words.slice(0, 2));
    await place(user, [words[1]!]);
    expect(speech.spoken()).toEqual([words[0], words[1], words[1]]);
  });

  it('stays silent when "Read sentences aloud" is off', async () => {
    useSettingsStore.setState({ speakSentences: false });
    const { user } = renderGame(Sentence, config);
    await place(user, SOLUTION[prompt()]!.slice(0, 1));
    expect(speech.synth.speak).not.toHaveBeenCalled();
  });
});
