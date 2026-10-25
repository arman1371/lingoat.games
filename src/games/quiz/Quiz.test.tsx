import { fireEvent, render, screen } from '@testing-library/react';
import { ImageManifestContext } from '@/lib/useImageManifest';
import userEvent from '@testing-library/user-event';
import { buildNounIndex } from '@/lib/german/nouns';
import { renderGame } from '@/test/render';
import { NounIndexContext } from '../shared/NounArticle';
import Quiz from './Quiz';

const config = {
  questions: [
    {
      id: 'q1',
      prompt: 'Hallo',
      options: ['hello', 'bye', 'thanks'],
      answer: 'hello',
      emoji: '👋',
      speak: 'Hallo',
    },
    {
      id: 'q2',
      prompt: 'Tschüss',
      options: ['hello', 'bye', 'thanks'],
      answer: 'bye',
      explanation: 'Bye!',
    },
  ],
};
const ANSWER: Record<string, string> = { Hallo: 'hello', Tschüss: 'bye' };
const WRONG: Record<string, string> = { Hallo: 'thanks', Tschüss: 'thanks' };
const prompt = () => screen.getByTestId('prompt').textContent!;

describe('Quiz noun article', () => {
  const gap = {
    questions: [
      {
        id: 'a1',
        prompt: 'Ich nehme ___ Käse. (der Käse)',
        options: ['den', 'dem', 'der'],
        answer: 'den',
      },
    ],
  };
  const renderGap = () =>
    render(
      <NounIndexContext value={buildNounIndex([{ de: 'Käse', article: 'der' }])}>
        <Quiz config={gap} seed={1} onFinish={vi.fn()} />
      </NounIndexContext>,
    );

  it.each(['den', 'dem'])('shows the noun and its article after answering %s', async (pick) => {
    renderGap();
    await userEvent.click(screen.getByRole('button', { name: pick }));
    expect(screen.getByTestId('noun-article-noun')).toHaveTextContent('der Käse');
  });

  it('shows no noun row for a plain vocabulary question', async () => {
    renderGame(Quiz, config);
    await userEvent.click(screen.getByRole('button', { name: 'thanks' }));
    expect(screen.queryByTestId('noun-article')).not.toBeInTheDocument();
  });
});

describe('Quiz', () => {
  it('plays through with correct answers', async () => {
    const { user, onFinish } = renderGame(Quiz, config);
    await user.click(screen.getByRole('button', { name: ANSWER[prompt()]! }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
    await user.click(screen.getByTestId('continue'));
    await user.click(screen.getByRole('button', { name: ANSWER[prompt()]! }));
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(
      expect.objectContaining({ correct: 2, total: 2, mistakes: [] }),
    );
  });

  it('shows the answer and explanation on a mistake and records it', async () => {
    const { user, onFinish } = renderGame(Quiz, config);
    const p = prompt();
    await user.click(screen.getByRole('button', { name: WRONG[p]! }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    expect(screen.getByText(ANSWER[p]!, { selector: 'strong' })).toBeInTheDocument();
    // answer buttons are locked after answering
    expect(screen.getByRole('button', { name: new RegExp(`^${WRONG[p]}`) })).toBeDisabled();
    await user.click(screen.getByTestId('continue'));
    await user.click(screen.getByRole('button', { name: ANSWER[prompt()]! }));
    await user.click(screen.getByTestId('continue'));
    const result = onFinish.mock.calls[0]![0];
    expect(result.correct).toBe(1);
    expect(result.mistakes).toHaveLength(1);
  });

  it('supports number-key answers', async () => {
    const { user } = renderGame(Quiz, config);
    await user.keyboard('1');
    expect(screen.getByTestId('feedback')).toBeInTheDocument();
  });
});

describe('Quiz grammar hints', () => {
  const grammar = {
    questions: [
      {
        id: 'g1',
        prompt: 'Ich sehe ___ Mann.',
        options: ['den', 'dem', 'der'],
        answer: 'den',
        lesson: 'accusative' as const,
        why: { der: 'der is the subject form.' },
      },
    ],
  };

  it('explains a wrong grammar pick with its why and a mini lesson', async () => {
    const { user } = renderGame(Quiz, grammar);
    await user.click(screen.getByRole('button', { name: 'der' }));
    expect(screen.getByTestId('mistake-why')).toHaveTextContent('der is the subject form.');
    expect(screen.getByTestId('mini-lesson')).toHaveTextContent('Accusative (Wen? Was?)');
  });

  it('falls back to a generated contrast between grammar words', async () => {
    const { user } = renderGame(Quiz, grammar);
    await user.click(screen.getByRole('button', { name: 'dem' }));
    expect(screen.getByTestId('mistake-why')).toHaveTextContent('“dem” is masculine/neuter dative');
  });

  it('shows no hint for a correct answer or a vocabulary mistake', async () => {
    const { user } = renderGame(Quiz, grammar);
    await user.click(screen.getByRole('button', { name: 'den' }));
    expect(screen.queryByTestId('mistake-hint')).not.toBeInTheDocument();
    const vocab = renderGame(Quiz, config);
    await vocab.user.click(screen.getAllByRole('button', { name: /thanks/ })[0]!);
    expect(screen.queryByTestId('mistake-hint')).not.toBeInTheDocument();
  });

  it('shows the word photo above the question and keeps the emoji as fallback', () => {
    render(
      <ImageManifestContext.Provider value={{ q1: ['hello-1/', 'someone', 7] }}>
        <Quiz config={{ questions: [config.questions[0]!] }} seed={1} onFinish={() => {}} />
      </ImageManifestContext.Provider>,
    );
    expect(screen.getByTestId('word-photo')).toHaveAttribute('src', '/img/q1.webp');
    expect(screen.getByTestId('word-photo')).toHaveAttribute('alt', ''); // never gives the answer away
    fireEvent.error(screen.getByTestId('word-photo'));
    expect(screen.getByTestId('emoji')).toHaveTextContent('👋');
  });
});
