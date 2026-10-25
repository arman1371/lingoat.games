import { render, screen } from '@testing-library/react';
import { ImageManifestContext } from '@/lib/useImageManifest';
import { renderGame } from '@/test/render';
import { WordPhotoIndexContext } from '@/components/WordImage';
import { buildWordPhotoIndex } from '@/lib/wordPhotos';
import Sortit from './Sortit';

const config = {
  instruction: 'Hello or goodbye?',
  buckets: [
    { id: 'hello', label: 'Hello', emoji: '👋' },
    { id: 'bye', label: 'Goodbye' },
  ],
  items: [
    { id: 'i1', text: 'Hallo', bucket: 'hello', speak: 'Hallo', translation: 'hello' },
    { id: 'i2', text: 'Tschüss', bucket: 'bye', translation: 'goodbye' },
  ],
};
const BUCKET: Record<string, string> = { Hallo: 'hello', Tschüss: 'bye' };
const OTHER: Record<string, string> = { Hallo: 'bye', Tschüss: 'hello' };
const MEANING: Record<string, string> = { Hallo: 'hello', Tschüss: 'goodbye' };
const prompt = () => screen.getByTestId('prompt').textContent!;

describe('Sortit', () => {
  it('shows the instruction, then the meaning and a green box after a correct sort', async () => {
    const { user, onFinish } = renderGame(Sortit, config);
    expect(screen.getByText('Hello or goodbye?')).toBeInTheDocument();
    expect(screen.queryByTestId('translation')).not.toBeInTheDocument();
    const first = prompt();
    await user.click(screen.getByTestId(`bucket-${BUCKET[first]}`));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
    expect(screen.getByTestId('feedback')).toHaveTextContent(`${first} means “${MEANING[first]}”`);
    expect(screen.getByTestId('translation')).toHaveTextContent(MEANING[first]!);
    expect(screen.getByTestId(`bucket-${BUCKET[first]}`)).toHaveClass('border-success');
    expect(screen.getByTestId(`bucket-${BUCKET[first]}`)).toBeDisabled();
    expect(screen.getByTestId('counter')).toHaveTextContent('1 / 2');
    await user.click(screen.getByTestId('continue'));
    expect(screen.queryByTestId('translation')).not.toBeInTheDocument();
    await user.click(screen.getByTestId(`bucket-${BUCKET[prompt()]}`));
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(
      expect.objectContaining({ correct: 2, total: 2, mistakes: [] }),
    );
  });

  it('marks the picked box red, the right box green and explains a wrong sort', async () => {
    const { user, onFinish } = renderGame(Sortit, config);
    const first = prompt();
    await user.click(screen.getByTestId(`bucket-${OTHER[first]}`));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    expect(screen.getByTestId('feedback')).toHaveTextContent(`${first} means “${MEANING[first]}”`);
    expect(screen.getByTestId('feedback')).toHaveTextContent('belongs to');
    expect(screen.getByTestId(`bucket-${BUCKET[first]}`)).toBeDisabled();
    expect(screen.getByTestId(`bucket-${BUCKET[first]}`)).toHaveClass('border-success');
    expect(screen.getByTestId(`bucket-${OTHER[first]}`)).toHaveClass('border-danger');
    await user.click(screen.getByTestId('continue'));
    await user.click(screen.getByTestId(`bucket-${BUCKET[prompt()]}`));
    await user.click(screen.getByTestId('continue'));
    const result = onFinish.mock.calls[0]![0];
    expect(result.correct).toBe(1);
    expect(result.mistakes).toHaveLength(1);
  });

  it('still gives a verdict for a card without a translation', async () => {
    const bare = { ...config, items: [{ id: 'i1', text: 'Hallo', bucket: 'hello' }] };
    const { user } = renderGame(Sortit, bare);
    await user.click(screen.getByTestId('bucket-hello'));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
    expect(screen.queryByTestId('translation')).not.toBeInTheDocument();
  });

  it('supports number keys for the boxes', async () => {
    const { user } = renderGame(Sortit, config);
    const first = prompt();
    await user.keyboard(BUCKET[first] === 'hello' ? '1' : '2');
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
    expect(screen.getByTestId('continue')).toHaveFocus();
  });

  it('shows the photo of the word on the card, found by its spelling, and keeps the emoji otherwise', () => {
    const index = buildWordPhotoIndex([
      { id: 'u1-apfel', de: 'Apfel', en: 'apple', article: 'der' },
    ]);
    render(
      <ImageManifestContext.Provider value={{ 'u1-apfel': ['apples/', 'someone', 1] }}>
        <WordPhotoIndexContext value={index}>
          <Sortit
            config={{
              buckets: config.buckets,
              items: [{ id: 'f1', text: 'Apfel', bucket: 'hello', emoji: '🍎' }],
            }}
            seed={1}
            onFinish={vi.fn()}
          />
        </WordPhotoIndexContext>
      </ImageManifestContext.Provider>,
    );
    expect(screen.getByTestId('word-photo')).toHaveAttribute('src', '/img/u1-apfel.webp');
    expect(screen.getByTestId('emoji')).toHaveClass('opacity-0');
  });

  it('shows the emoji of a word without a photo', () => {
    render(
      <ImageManifestContext.Provider value={{}}>
        <Sortit
          config={{
            buckets: config.buckets,
            items: [{ id: 'f1', text: 'Haus', bucket: 'hello', emoji: '🏠' }],
          }}
          seed={1}
          onFinish={vi.fn()}
        />
      </ImageManifestContext.Provider>,
    );
    expect(screen.queryByTestId('word-photo')).not.toBeInTheDocument();
    expect(screen.getByTestId('emoji')).toHaveTextContent('🏠');
  });
});
