import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderGame } from '@/test/render';
import { stubSpeech } from '@/test/speech';
import { DEFAULT_SETTINGS, useSettingsStore } from '@/store/settingsStore';
import { buildNounIndex } from '@/lib/german/nouns';
import { NounIndexContext } from '../shared/NounArticle';
import { CaseDrillContext } from '../shared/SentenceNouns';
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

const nouns = buildNounIndex([{ de: 'Käse', article: 'der' }]);
const cheese = {
  items: [
    {
      id: 'g3',
      text: 'Ich nehme ___ Käse.',
      answer: 'den',
      options: ['den', 'dem', 'der'],
    },
  ],
};
const renderWithNouns = (config: typeof cheese) =>
  render(
    <NounIndexContext value={nouns}>
      <Gapfill config={config} seed={1} onFinish={vi.fn()} />
    </NounIndexContext>,
  );

describe('Gapfill', () => {
  it('lists the nouns of the sentence before answering in a case drill', () => {
    render(
      <NounIndexContext value={nouns}>
        <CaseDrillContext value>
          <Gapfill config={cheese} seed={1} onFinish={vi.fn()} />
        </CaseDrillContext>
      </NounIndexContext>,
    );
    expect(screen.getByTestId('sentence-noun')).toHaveTextContent('der Käse');
    expect(screen.queryByTestId('feedback')).not.toBeInTheDocument();
  });

  it('lists no nouns up front outside a case drill', () => {
    renderWithNouns(cheese);
    expect(screen.queryByTestId('sentence-nouns')).not.toBeInTheDocument();
  });

  it.each([
    ['den', 'correct'],
    ['dem', 'wrong'],
  ])('shows the article of the noun after answering %s (%s)', async (pick, kind) => {
    renderWithNouns(cheese);
    await userEvent.click(screen.getByRole('button', { name: pick }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', kind);
    expect(screen.getByTestId('noun-article-noun')).toHaveTextContent('der Käse');
  });

  it('shows no noun row for gaps that do not depend on an article', async () => {
    renderWithNouns(chips as unknown as typeof cheese);
    await userEvent.click(screen.getByRole('button', { name: 'Nacht' }));
    expect(screen.queryByTestId('noun-article')).not.toBeInTheDocument();
  });

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
    await user.click(screen.getByTestId('why'));
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
