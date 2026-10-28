import { act, render, screen, within } from '@testing-library/react';
import { ActivityLessonContext } from '../shared/hints';
import { renderGame } from '@/test/render';
import userEvent from '@testing-library/user-event';
import { ImageManifestContext } from '@/lib/useImageManifest';
import Memory from './Memory';
import { buildColumns, isMatch } from './logic';

const config = {
  pairs: [
    { id: 'p1', a: 'Hund', b: 'dog' },
    { id: 'p2', a: 'Katze', b: 'cat' },
    { id: 'p3', a: 'Maus', b: 'mouse' },
  ],
};

const { left, right } = buildColumns(config.pairs, 1);
const cards = () => screen.getAllByTestId('memory-card');
/** card of a pair side; both columns are rendered left first, then right */
const card = (uid: string) => {
  const l = left.findIndex((c) => c.uid === uid);
  return cards()[l >= 0 ? l : left.length + right.findIndex((c) => c.uid === uid)]!;
};

describe('memory logic', () => {
  it('builds two shuffled columns with one card per pair side', () => {
    expect(left.map((c) => c.side)).toEqual(['a', 'a', 'a']);
    expect(right.map((c) => c.side)).toEqual(['b', 'b', 'b']);
    expect(new Set(left.map((c) => c.pairId))).toEqual(new Set(['p1', 'p2', 'p3']));
    expect(new Set(right.map((c) => c.pairId))).toEqual(new Set(['p1', 'p2', 'p3']));
    expect(buildColumns(config.pairs, 1)).toEqual({ left, right });
  });
  it('never lines the rows up with their answers', () => {
    for (let seed = 0; seed < 200; seed++) {
      const cols = buildColumns(config.pairs, seed);
      expect(cols.left.every((c, i) => c.pairId === cols.right[i]!.pairId)).toBe(false);
    }
  });
  it('shuffles the columns independently of each other', () => {
    const orders = new Set<string>();
    for (let seed = 0; seed < 50; seed++) {
      const cols = buildColumns(config.pairs, seed);
      orders.add(
        cols.left.map((c) => c.pairId).join() + '|' + cols.right.map((c) => c.pairId).join(),
      );
    }
    expect(orders.size).toBeGreaterThan(6);
  });
  it('matches only the two different sides of one pair', () => {
    const a = left.find((c) => c.uid === 'p1:a')!;
    const b = right.find((c) => c.uid === 'p1:b')!;
    expect(isMatch(a, b)).toBe(true);
    expect(isMatch(a, a)).toBe(false);
    expect(
      isMatch(
        a,
        right.find((c) => c.uid === 'p2:b')!,
      ),
    ).toBe(false);
  });
});

describe('Memory', () => {
  it('shows every word in two columns from the start', () => {
    renderGame(Memory, config, 1);
    const [words, matches] = screen.getAllByRole('group');
    expect(
      within(words!)
        .getAllByTestId('memory-card')
        .map((c) => c.textContent),
    ).toEqual(left.map((c) => c.text));
    expect(
      within(matches!)
        .getAllByTestId('memory-card')
        .map((c) => c.textContent),
    ).toEqual(right.map((c) => c.text));
    expect(words).toHaveAccessibleName('Word');
    expect(matches).toHaveAccessibleName('Match');
    expect(cards().every((c) => c.getAttribute('data-state') === 'idle')).toBe(true);
  });

  it('locks a correct pair green', async () => {
    const { user } = renderGame(Memory, config, 1);
    await user.click(card('p1:a'));
    expect(card('p1:a')).toHaveAttribute('data-state', 'selected');
    expect(card('p1:a')).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('status')).toHaveTextContent('Hund: now tap its match.');
    await user.click(card('p1:b'));
    expect(card('p1:a')).toHaveAttribute('data-state', 'matched');
    expect(card('p1:b')).toHaveAttribute('data-state', 'matched');
    expect(screen.getByTestId('pairs-found')).toHaveTextContent('1 / 3');
    expect(screen.getByTestId('moves')).toHaveTextContent('1 moves');
    expect(screen.getByRole('status')).toHaveTextContent('Match! Hund = dog');
  });

  it('works in either order (match first, word second)', async () => {
    const { user } = renderGame(Memory, config, 1);
    await user.click(card('p2:b'));
    await user.click(card('p2:a'));
    expect(card('p2:a')).toHaveAttribute('data-state', 'matched');
    expect(screen.getByRole('status')).toHaveTextContent('Match! Katze = cat');
  });

  it('shakes a wrong pair, keeps it marked until the next tap and records the mistake', async () => {
    const { user, onFinish } = renderGame(Memory, config, 1);
    await user.click(card('p1:a'));
    await user.click(card('p2:b'));
    expect(screen.getByRole('status')).toHaveTextContent('Not a pair');
    for (const uid of ['p1:a', 'p2:b']) {
      expect(card(uid)).toHaveAttribute('data-state', 'wrong');
      expect(card(uid)).toHaveClass('anim-shake');
      expect(card(uid)).toHaveTextContent('not a pair'); // announced, not colour only
    }
    expect(screen.getByTestId('moves')).toHaveTextContent('1 moves');
    await user.click(card('p3:a'));
    expect(card('p1:a')).toHaveAttribute('data-state', 'idle');
    expect(card('p3:a')).toHaveAttribute('data-state', 'selected');

    await user.click(card('p3:b'));
    for (const id of ['p1', 'p2']) {
      await user.click(card(`${id}:a`));
      await user.click(card(`${id}:b`));
    }
    await act(() => new Promise((r) => setTimeout(r, 700)));
    expect(onFinish).toHaveBeenCalledTimes(1);
    const result = onFinish.mock.calls[0]![0];
    expect(result).toMatchObject({ total: 3, correct: 1 });
    expect(result.mistakes.sort()).toEqual(['p1', 'p2']);
  });

  it('changes the selection within a column and deselects on a second tap', async () => {
    const { user } = renderGame(Memory, config, 1);
    await user.click(card('p1:a'));
    await user.click(card('p2:a'));
    expect(card('p1:a')).toHaveAttribute('data-state', 'idle');
    expect(card('p2:a')).toHaveAttribute('data-state', 'selected');
    await user.click(card('p2:a'));
    expect(card('p2:a')).toHaveAttribute('data-state', 'idle');
    expect(screen.getByRole('status')).toHaveTextContent('Tap a word, then tap its match.');
    expect(screen.getByTestId('moves')).toHaveTextContent('0 moves');
  });

  it('ignores taps on matched cards', async () => {
    const { user } = renderGame(Memory, config, 1);
    await user.click(card('p1:a'));
    await user.click(card('p1:b'));
    await user.click(card('p1:a'));
    expect(card('p1:a')).toHaveAttribute('data-state', 'matched');
    await user.click(card('p2:a'));
    expect(card('p2:a')).toHaveAttribute('data-state', 'selected');
  });

  it('shows the usual hint after a wrong pair and clears it on the next tap', async () => {
    const forms = {
      pairs: [
        { id: 'f1', a: 'Mann', b: 'den' },
        { id: 'f2', a: 'Frau', b: 'dem' },
        { id: 'f3', a: 'Kind', b: 'das' },
      ],
    };
    const cols = buildColumns(forms.pairs, 1);
    const user = userEvent.setup();
    render(
      <ActivityLessonContext value="dative">
        <Memory config={forms} seed={1} onFinish={vi.fn()} />
      </ActivityLessonContext>,
    );
    const all = screen.getAllByTestId('memory-card');
    await user.click(all[cols.left.findIndex((c) => c.pairId === 'f1')]!);
    await user.click(all[3 + cols.right.findIndex((c) => c.pairId === 'f2')]!);
    await user.click(screen.getByTestId('why'));
    expect(screen.getByTestId('mistake-why')).toHaveTextContent('“dem” is');
    expect(screen.getByTestId('mini-lesson')).toHaveAttribute('data-lesson', 'dative');
    await user.click(all[0]!);
    expect(screen.queryByTestId('mistake-hint')).not.toBeInTheDocument();
  });
});

describe('Memory photos', () => {
  const photos = {
    'photo-hund': ['dogs/', 'someone', 1],
    'photo-apfel': ['apples/', 'someone', 2],
  } as const;
  const renderWithPhotos = (pairs: { id: string; a: string; b: string }[]) =>
    render(
      <ImageManifestContext.Provider value={photos}>
        <Memory config={{ pairs }} seed={1} onFinish={vi.fn()} />
      </ImageManifestContext.Provider>,
    );

  it('shows the photo of a word beside it, and nothing for a word without one', () => {
    renderWithPhotos([
      { id: 'photo-hund', a: 'Hund', b: 'dog' },
      { id: 'katze', a: 'Katze', b: 'cat' },
      { id: 'maus', a: 'Maus', b: 'mouse' },
    ]);
    const photoCards = screen
      .getAllByTestId('memory-card')
      .filter((c) => within(c).queryByTestId('word-photo'));
    expect(photoCards).toHaveLength(1);
    expect(photoCards[0]).toHaveTextContent('Hund');
    expect(within(photoCards[0]!).getByTestId('word-photo')).toHaveAttribute(
      'src',
      '/img/photo-hund.webp',
    );
  });

  it('swaps the emoji of a picture match for the photo and keeps the card named by the emoji', async () => {
    const user = userEvent.setup();
    renderWithPhotos([
      { id: 'photo-apfel', a: 'der Apfel', b: '🍎' },
      { id: 'katze', a: 'die Katze', b: '🐱' },
      { id: 'hund', a: 'der Hund', b: '🐶' },
    ]);
    // the word keeps no photo of its own: the picture side shows it
    const [apple] = screen.getAllByRole('button', { name: '🍎' });
    expect(within(apple!).getByTestId('word-photo')).toHaveAttribute(
      'src',
      '/img/photo-apfel.webp',
    );
    expect(
      within(screen.getByRole('button', { name: 'der Apfel' })).queryByTestId('word-photo'),
    ).toBeNull();
    // a picture without a photo is still the emoji
    expect(screen.getByRole('button', { name: '🐱' })).toHaveTextContent('🐱');
    await user.click(screen.getByRole('button', { name: 'der Apfel' }));
    await user.click(apple!);
    expect(apple).toHaveAccessibleName('🍎, matched');
  });
});
