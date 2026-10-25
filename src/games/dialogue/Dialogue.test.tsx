import { screen, within } from '@testing-library/react';
import { renderGame } from '@/test/render';
import { stubSpeech } from '@/test/speech';
import { DEFAULT_SETTINGS, useSettingsStore } from '@/store/settingsStore';
import Dialogue from './Dialogue';

const config = {
  scenes: [
    {
      id: 'sc1',
      title: 'Meeting',
      emoji: '👋',
      setting: 'A party.',
      turns: [
        { kind: 'npc' as const, who: 'Anna', text: 'Hallo!', translation: 'Hi!' },
        {
          kind: 'you' as const,
          options: [
            { text: 'Hallo!', correct: true },
            { text: 'Tschüss!', correct: false, feedback: 'That is goodbye.' },
            { text: 'Danke!', correct: false },
          ],
        },
        { kind: 'npc' as const, who: 'Anna', text: 'Wie geht’s?' },
        {
          kind: 'you' as const,
          options: [
            { text: 'Gut, danke.', correct: true },
            { text: 'Nein.', correct: false, feedback: 'That does not fit.' },
          ],
        },
        { kind: 'npc' as const, who: 'Anna', text: 'Schön!' },
      ],
    },
    {
      id: 'sc2',
      title: 'Leaving',
      turns: [
        {
          kind: 'you' as const,
          options: [
            { text: 'Tschüss!', correct: true },
            { text: 'Hallo!', correct: false },
          ],
        },
        { kind: 'npc' as const, who: 'Anna', text: 'Bis bald!' },
      ],
    },
  ],
};

const conversation = () => within(screen.getByRole('list', { name: 'Conversation' }));

describe('Dialogue', () => {
  it('shows NPC lines up to the first player turn and offers replies', () => {
    renderGame(Dialogue, config);
    expect(screen.getByTestId('prompt')).toHaveTextContent('Meeting');
    expect(conversation().getByText('Hallo!')).toBeInTheDocument();
    expect(conversation().getByText('Hi!')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Tschüss!' })).toBeInTheDocument();
  });

  it('shows the mascot beside the partner’s lines only', async () => {
    const { user } = renderGame(Dialogue, config);
    expect(
      screen.getByRole('list', { name: 'Conversation' }).querySelectorAll('[data-mood]'),
    ).toHaveLength(1);
    await user.click(screen.getByRole('button', { name: 'Hallo!' }));
    // two partner lines, one player line
    expect(
      screen.getByRole('list', { name: 'Conversation' }).querySelectorAll('[data-mood]'),
    ).toHaveLength(2);
  });

  it('plays a perfect scene, then the next scene, and finishes', async () => {
    const { user, onFinish } = renderGame(Dialogue, config);
    await user.click(screen.getByRole('button', { name: 'Hallo!' }));
    expect(conversation().getByText('Wie geht’s?')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Gut, danke.' }));
    expect(conversation().getByText('Schön!')).toBeInTheDocument();
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
    await user.click(screen.getByTestId('continue'));
    expect(screen.getByTestId('prompt')).toHaveTextContent('Leaving');
    await user.click(screen.getByRole('button', { name: 'Tschüss!' }));
    expect(conversation().getByText('Bis bald!')).toBeInTheDocument();
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(
      expect.objectContaining({ correct: 2, total: 2, mistakes: [] }),
    );
  });

  it('gives feedback on a wrong reply, removes it and counts the scene as a mistake', async () => {
    const { user, onFinish } = renderGame(Dialogue, config);
    await user.click(screen.getByRole('button', { name: 'Tschüss!' }));
    expect(screen.getByText('That is goodbye.')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Tschüss!' })).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Danke!' }));
    expect(screen.getByText('Not the best reply here – try another one.')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Hallo!' }));
    await user.click(screen.getByRole('button', { name: 'Gut, danke.' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'almost');
    await user.click(screen.getByTestId('continue'));
    await user.click(screen.getByRole('button', { name: 'Tschüss!' }));
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(
      expect.objectContaining({ correct: 1, total: 2, mistakes: ['sc1'] }),
    );
  });

  it('starts directly with a player turn when the scene has no opening NPC line', async () => {
    renderGame(Dialogue, { scenes: [config.scenes[1]!] });
    expect(screen.getByRole('button', { name: 'Tschüss!' })).toBeInTheDocument();
  });
});

describe('Dialogue speech', () => {
  let speech: ReturnType<typeof stubSpeech>;
  beforeEach(() => {
    speech = stubSpeech();
  });
  afterEach(() => {
    speech.restore();
    useSettingsStore.setState({ ...DEFAULT_SETTINGS });
  });

  it('speaks each new speaker line once, and nothing for a wrong reply', async () => {
    const { user } = renderGame(Dialogue, config);
    expect(speech.spoken()).toEqual(['Hallo!']);
    await user.click(screen.getByRole('button', { name: 'Tschüss!' }));
    expect(speech.spoken()).toEqual(['Hallo!']);
    await user.click(screen.getByRole('button', { name: 'Hallo!' }));
    expect(speech.spoken()).toEqual(['Hallo!', 'Wie geht’s?']);
  });

  it('stays silent when "Read sentences aloud" is off', () => {
    useSettingsStore.setState({ speakSentences: false });
    renderGame(Dialogue, config);
    expect(speech.synth.speak).not.toHaveBeenCalled();
  });
});
