import { render, screen } from '@testing-library/react';
import { ImageManifestContext } from '@/lib/useImageManifest';
import { renderGame } from '@/test/render';
import { WordPhotoIndexContext } from '@/components/WordImage';
import { buildWordPhotoIndex } from '@/lib/wordPhotos';
import Market from './Market';

const config = {
  products: [
    { id: 'apfel', name: 'Apfel', emoji: '🍎', priceCents: 60 },
    { id: 'milch', name: 'Milch', emoji: '🥛', priceCents: 110 },
    { id: 'kaese', name: 'Käse', emoji: '🧀', priceCents: 250 },
  ],
  orders: [
    {
      id: 'o1',
      request: 'Ich nehme zwei Äpfel und eine Milch.',
      translation: 'Two apples and a milk.',
      items: [
        { product: 'apfel', qty: 2 },
        { product: 'milch', qty: 1 },
      ],
    },
  ],
};

type User = ReturnType<typeof renderGame>['user'];
const fillBasket = async (user: User) => {
  await user.click(screen.getByRole('button', { name: 'Add Apfel' }));
  await user.click(screen.getByRole('button', { name: 'Add Apfel' }));
  await user.click(screen.getByRole('button', { name: 'Add Milch' }));
};

describe('Market', () => {
  it('shows the customer request, prices and a disabled check until something is in the basket', () => {
    renderGame(Market, config);
    expect(screen.getByTestId('prompt')).toHaveTextContent('Ich nehme zwei Äpfel und eine Milch.');
    expect(screen.getByText('0,60 €')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Check basket' })).toBeDisabled();
  });

  it('completes an order: correct basket, then the right total', async () => {
    const { user, onFinish } = renderGame(Market, config);
    await fillBasket(user);
    expect(screen.getByLabelText('Apfel quantity')).toHaveTextContent('2');
    await user.click(screen.getByRole('button', { name: 'Check basket' }));
    expect(screen.getByLabelText(/Was kostet das zusammen/)).toBeInTheDocument();
    await user.type(screen.getByLabelText(/Was kostet das zusammen/), '2,30{Enter}');
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
    expect(screen.getByText('zwei Euro dreißig', { selector: 'strong' })).toBeInTheDocument();
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(expect.objectContaining({ correct: 1, total: 1 }));
  });

  it('accepts decimal points in the price', async () => {
    const { user } = renderGame(Market, config);
    await fillBasket(user);
    await user.click(screen.getByRole('button', { name: 'Check basket' }));
    await user.type(screen.getByLabelText(/Was kostet das zusammen/), '2.30');
    await user.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
  });

  it('flags a wrong basket, lets you fix it, but counts the order as a mistake', async () => {
    const { user, onFinish } = renderGame(Market, config);
    await user.click(screen.getByRole('button', { name: 'Add Käse' }));
    await user.click(screen.getByRole('button', { name: 'Check basket' }));
    expect(screen.getByText(/not what the customer asked/)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Remove Käse' }));
    await fillBasket(user);
    await user.click(screen.getByRole('button', { name: 'Check basket' }));
    await user.type(screen.getByLabelText(/Was kostet das zusammen/), '2,30{Enter}');
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(
      expect.objectContaining({ correct: 0, mistakes: ['o1'] }),
    );
  });

  it('shows the right total after a wrong price', async () => {
    const { user } = renderGame(Market, config);
    await fillBasket(user);
    await user.click(screen.getByRole('button', { name: 'Check basket' }));
    await user.type(screen.getByLabelText(/Was kostet das zusammen/), '9');
    await user.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    expect(screen.getByText(/2,30 €/)).toBeInTheDocument();
  });

  it('shows the photo of a product found by its name, and the emoji of one without', async () => {
    const index = buildWordPhotoIndex([
      { id: 'a1-1-einkaufen-apfel', de: 'Apfel', en: 'apple', article: 'der' },
    ]);
    render(
      <ImageManifestContext.Provider value={{ 'a1-1-einkaufen-apfel': ['apples/', 'someone', 1] }}>
        <WordPhotoIndexContext value={index}>
          <Market config={config} seed={1} onFinish={vi.fn()} />
        </WordPhotoIndexContext>
      </ImageManifestContext.Provider>,
    );
    const photos = await screen.findAllByTestId('word-photo');
    expect(photos).toHaveLength(1);
    expect(photos[0]).toHaveAttribute('src', '/img/a1-1-einkaufen-apfel.webp');
    expect(screen.getAllByTestId('emoji').map((e) => e.textContent)).toEqual(['🍎', '🥛', '🧀']);
  });
});
