import { screen } from '@testing-library/react';
import { getProgressStore, useProgressStore } from '@/store/progressStore';
import { renderApp, resetStores } from '@/test/app';

beforeEach(resetStores);

describe('language routing', () => {
  it('shows the German store at the root and keeps links unprefixed', async () => {
    useProgressStore.setState({ xp: 111 });
    getProgressStore('fr').setState({ xp: 222 });
    renderApp('/progress');
    expect(await screen.findByTestId('xp')).toHaveTextContent('111');
    expect(screen.getByRole('link', { name: /Review/ })).toHaveAttribute('href', '/review');
  });

  it('shows the French store under /fr and keeps every link in French', async () => {
    useProgressStore.setState({ xp: 111 });
    getProgressStore('fr').setState({ xp: 222 });
    const { router } = renderApp('/fr/progress');
    expect(await screen.findByTestId('xp')).toHaveTextContent('222');
    expect(router.state.location.pathname).toBe('/fr/progress');
    for (const [name, href] of [
      [/Review/, '/fr/review'],
      [/Library/, '/fr/library'],
      [/Profile/, '/fr/profile'],
    ] as const) {
      expect(screen.getByRole('link', { name })).toHaveAttribute('href', href);
    }
  });

  it('does not treat a path that merely starts with the letters as French', async () => {
    renderApp('/french');
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });
});
