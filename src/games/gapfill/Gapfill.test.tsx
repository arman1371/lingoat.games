import { screen } from '@testing-library/react';
import { renderGame } from '@/test/render';
import { stubSpeech } from '@/test/speech';
import { DEFAULT_SETTINGS, useSettingsStore } from '@/store/settingsStore';
import Gapfill from './Gapfill';

const chips = {
  items: [
    {
      id: 'g1',
      text: 'Guten ___!',
      answer: 'Morgen',
      options: ['Morgen', 'Nacht', 'Danke'],
      translation: 'Good morning!',
      explanation: 'A greeting.',
    },
  ],
};
const typed = {
  items: [{ id: 'g2', text: 'Ich ___ Anna.', answer: 'heiße', alsoAccept: ['heisse'] }],
};

describe('Gapfill', () => {
  it('answers with chips and shows the filled sentence and explanation', async () => {
    const { user, onFinish } = renderGame(Gapfill, chips);
    expect(screen.getByTestId('sentence')).toHaveTextContent('Guten …!');
    expect(screen.getByText('Good morning!')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Nacht' }));
    expect(screen.getByTestId('sentence')).toHaveTextContent('Guten Nacht!');
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    expect(screen.getByText('Morgen', { selector: 'strong' })).toBeInTheDocument();
    expect(screen.getByText('A greeting.')).toBeInTheDocument();
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(
      expect.objectContaining({ correct: 0, mistakes: ['g1'] }),
    );
  });

  it('types the answer, accepts alternatives, supports Enter and umlaut keys', async () => {
    const { user } = renderGame(Gapfill, typed);
    const check = screen.getByRole('button', { name: 'Check' });
    expect(check).toBeDisabled();
    const input = screen.getByLabelText('Missing word');
    await user.type(input, 'hei');
    await user.click(screen.getByRole('button', { name: 'ß' }));
    await user.type(input, 'e{Enter}');
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
  });

  it('treats an alternative spelling as correct', async () => {
    const { user } = renderGame(Gapfill, typed);
    await user.type(screen.getByLabelText('Missing word'), 'heisse{Enter}');
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
  });

  it('marks wrong typed answers', async () => {
    const { user } = renderGame(Gapfill, typed);
    await user.type(screen.getByLabelText('Missing word'), 'bin');
    await user.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
  });
});

describe('Gapfill grammar hints', () => {
  it('shows the mini lesson after a wrong typed answer, with a why for expected mistakes', async () => {
    const { user } = renderGame(Gapfill, {
      items: [
        {
          id: 'p1',
          text: 'Ich habe Fußball ___.',
          answer: 'gespielt',
          lesson: 'perfekt' as const,
          why: { gespielen: 'spielen is regular: ge-…-t.' },
        },
      ],
    });
    await user.type(screen.getByLabelText('Missing word'), 'Gespielen{Enter}');
    expect(screen.getByTestId('mistake-why')).toHaveTextContent('spielen is regular');
    expect(screen.getByTestId('mini-lesson')).toHaveAttribute('data-lesson', 'perfekt');
  });

  it('shows nothing for a vocabulary item', async () => {
    const { user } = renderGame(Gapfill, chips);
    await user.click(screen.getByRole('button', { name: 'Nacht' }));
    expect(screen.queryByTestId('mistake-hint')).not.toBeInTheDocument();
  });
});

describe('Gapfill speech', () => {
  let speech: ReturnType<typeof stubSpeech>;
  beforeEach(() => {
    speech = stubSpeech();
  });
  afterEach(() => {
    speech.restore();
    useSettingsStore.setState({ ...DEFAULT_SETTINGS });
  });

  it('reads the sentence without the missing word and stays silent when the answer is revealed', async () => {
    const { user } = renderGame(Gapfill, typed);
    expect(speech.spoken()).toEqual(['Ich, Anna.']);
    await user.type(screen.getByLabelText('Missing word'), 'heiße{Enter}');
    expect(screen.getByTestId('feedback')).toBeInTheDocument();
    expect(speech.spoken()).toEqual(['Ich, Anna.']);
  });

  it('does not speak when "Read sentences aloud" is off', () => {
    useSettingsStore.setState({ speakSentences: false });
    renderGame(Gapfill, chips);
    expect(speech.synth.speak).not.toHaveBeenCalled();
  });
});
