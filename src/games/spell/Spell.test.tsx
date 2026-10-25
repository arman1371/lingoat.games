import { fireEvent, render, screen, within } from '@testing-library/react';
import { ImageManifestContext } from '@/lib/useImageManifest';
import { renderGame } from '@/test/render';
import Spell from './Spell';

const unscramble = {
  items: [{ id: 'u1', mode: 'unscramble' as const, answer: 'Tag', hint: 'day', emoji: '📅' }],
};
const typed = { items: [{ id: 't1', mode: 'type' as const, answer: 'Größe', hint: 'size' }] };
const dictation = {
  items: [
    {
      id: 'd1',
      mode: 'dictation' as const,
      answer: '0151 234',
      numeric: true,
      hint: 'phone',
      speak: 'null eins fünf eins zwei drei vier',
    },
  ],
};

async function buildWord(user: ReturnType<typeof renderGame>['user'], word: string) {
  for (const ch of word) {
    const letters = within(screen.getByRole('group', { name: 'Letters' }));
    const btn = letters
      .getAllByRole('button')
      .find((b) => b.textContent === ch && !(b as HTMLButtonElement).disabled)!;
    await user.click(btn);
  }
}

describe('Spell', () => {
  it('unscrambles letters by tapping tiles', async () => {
    const { user, onFinish } = renderGame(Spell, unscramble);
    expect(screen.getByRole('button', { name: 'Check' })).toBeDisabled();
    await buildWord(user, 'Tag');
    await user.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(expect.objectContaining({ correct: 1, total: 1 }));
  });

  it('lets you remove a placed letter and shows the right spelling when wrong', async () => {
    const { user } = renderGame(Spell, unscramble);
    await buildWord(user, 'gaT');
    const line = within(screen.getByTestId('answer-line'));
    await user.click(line.getByRole('button', { name: 'Remove T' }));
    expect(line.queryByRole('button', { name: 'Remove T' })).not.toBeInTheDocument();
    await buildWord(user, 'T');
    await user.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    expect(screen.getByText('Tag', { selector: 'strong' })).toBeInTheDocument();
  });

  it('types answers, with the umlaut keyboard and an "almost" verdict for ae/oe', async () => {
    const { user } = renderGame(Spell, typed);
    const input = screen.getByLabelText('Your answer');
    await user.type(input, 'Gro');
    await user.click(screen.getByRole('button', { name: 'ß' }));
    await user.type(input, 'e');
    expect(input).toHaveValue('Große');
    await user.clear(input);
    await user.type(input, 'Groesse{Enter}');
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'almost');
    expect(screen.getByText('Größe', { selector: 'strong' })).toBeInTheDocument();
  });

  it('checks numeric dictation ignoring spaces and offers the text when audio is unavailable', async () => {
    const { user, onFinish } = renderGame(Spell, dictation);
    expect(screen.getByTestId('tts-fallback')).toHaveTextContent('null eins fünf');
    expect(screen.queryByRole('button', { name: 'ä' })).not.toBeInTheDocument();
    await user.type(screen.getByLabelText('Your answer'), '0151234{Enter}');
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalled();
  });

  it('shows the word photo with the emoji as fallback', () => {
    render(
      <ImageManifestContext.Provider value={{ u1: ['day-1/', 'someone', 7] }}>
        <Spell config={unscramble} seed={1} onFinish={() => {}} />
      </ImageManifestContext.Provider>,
    );
    expect(screen.getByTestId('word-photo')).toHaveAttribute('src', '/img/u1.webp');
    fireEvent.error(screen.getByTestId('word-photo'));
    expect(screen.getByTestId('emoji')).toHaveTextContent('📅');
  });
});
