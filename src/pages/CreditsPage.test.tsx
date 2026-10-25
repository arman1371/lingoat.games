import { screen, within } from '@testing-library/react';
import manifest from '@/content/images/manifest.json';
import { renderApp, resetStores } from '@/test/app';

beforeEach(resetStores);

const COUNT = Object.keys(manifest).length;

describe('Image credits', () => {
  it('is linked from the profile', async () => {
    const { user, router } = renderApp('/profile');
    await user.click(await screen.findByRole('link', { name: /Image credits/ }));
    expect(router.state.location.pathname).toBe('/credits');
    expect(await screen.findByRole('heading', { name: 'Image credits' })).toBeInTheDocument();
  });

  it('lists the photo of a word with its author and a link to the Pixabay page', async () => {
    renderApp('/credits');
    const link = await screen.findByRole('link', { name: /der Apfel/ });
    const [page, author] = manifest['a1-1-einkaufen-apfel'] as [string, string, number];
    expect(link).toHaveAttribute('href', `https://pixabay.com/photos/${page}`);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
    expect(link).toHaveTextContent(`Photo by ${author} on Pixabay`);
  });

  it('shows 50 photos at a time and filters by word, meaning or author', async () => {
    const { user } = renderApp('/credits');
    expect(await screen.findByTestId('credits-count')).toHaveTextContent(`${COUNT} photos`);
    const list = screen.getByRole('list');
    expect(within(list).getAllByRole('listitem')).toHaveLength(Math.min(50, COUNT));
    if (COUNT > 50) {
      await user.click(screen.getByRole('button', { name: 'Show more' }));
      expect(within(list).getAllByRole('listitem')).toHaveLength(Math.min(100, COUNT));
    }
    await user.type(screen.getByRole('searchbox', { name: 'Search words' }), 'apple');
    expect(within(screen.getByRole('list')).getByRole('link', { name: /der Apfel/ })).toBeVisible();
    await user.clear(screen.getByRole('searchbox', { name: 'Search words' }));
    await user.type(screen.getByRole('searchbox', { name: 'Search words' }), 'zzzz-no-such-word');
    expect(screen.getByText('No photo credits match your search.')).toBeInTheDocument();
  });
});
