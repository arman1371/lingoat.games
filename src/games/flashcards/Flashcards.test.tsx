import { fireEvent, render, screen } from '@testing-library/react';
import { ImageManifestContext } from '@/lib/useImageManifest';
import { renderGame } from '@/test/render';
import Flashcards from './Flashcards';

const config = {
  cards: [
    { id: 'c1', front: 'Hallo', back: 'hello', emoji: '👋', speak: 'Hallo', note: 'greeting' },
    { id: 'c2', front: 'Tschüss', back: 'bye' },
  ],
};
const BACK: Record<string, string> = { Hallo: 'hello', Tschüss: 'bye' };

describe('Flashcards', () => {
  it('flips a card, shows the note and rates it', async () => {
    const { user } = renderGame(Flashcards, config);
    const front = screen.getByTestId('card-text').textContent!;
    expect(screen.queryByRole('button', { name: 'Got it' })).not.toBeInTheDocument();
    await user.click(screen.getByTestId('card'));
    expect(screen.getByTestId('card-text')).toHaveTextContent(BACK[front]!);
    expect(screen.getByRole('button', { name: /Got it/ })).toBeInTheDocument();
    await user.click(screen.getByTestId('card')); // flip back
    expect(screen.getByTestId('card-text')).toHaveTextContent(front);
  });

  it('reports "again" cards as mistakes and finishes after the last card', async () => {
    const { user, onFinish } = renderGame(Flashcards, config);
    const first = screen.getByTestId('card-text').textContent!;
    await user.click(screen.getByTestId('card'));
    await user.click(screen.getByRole('button', { name: /Again/ }));
    expect(screen.getByTestId('counter')).toHaveTextContent('2 / 2');
    expect(onFinish).not.toHaveBeenCalled();
    await user.click(screen.getByTestId('card'));
    await user.click(screen.getByRole('button', { name: /Got it/ }));
    expect(onFinish).toHaveBeenCalledTimes(1);
    const result = onFinish.mock.calls[0]![0];
    expect(result).toMatchObject({ correct: 1, total: 2 });
    expect(result.mistakes).toEqual([first === 'Hallo' ? 'c1' : 'c2']);
  });

  it('shows the word photo on the card and falls back to the emoji when it does not load', () => {
    const cards = [{ id: 'c1', front: 'Hallo', back: 'hello', emoji: '👋' }];
    render(
      <ImageManifestContext.Provider value={{ c1: ['hello-1/', 'someone', 7] }}>
        <Flashcards config={{ cards }} seed={1} onFinish={() => {}} />
      </ImageManifestContext.Provider>,
    );
    expect(screen.getByTestId('word-photo')).toHaveAttribute('src', '/img/c1.webp');
    fireEvent.error(screen.getByTestId('word-photo'));
    expect(screen.getByTestId('emoji')).toHaveTextContent('👋');
  });
});
