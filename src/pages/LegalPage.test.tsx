import { screen } from '@testing-library/react';
import { renderApp, resetStores } from '@/test/app';

beforeEach(resetStores);
afterEach(() => vi.unstubAllEnvs());

describe('Legal pages', () => {
  it('shows a notice instead of anyone’s data when the operator is not configured', async () => {
    vi.stubEnv('VITE_OPERATOR_NAME', '');
    renderApp('/impressum');
    expect(
      await screen.findByRole('heading', { level: 1, name: 'Rechtliche Angaben fehlen' }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/Musterstr/)).not.toBeInTheDocument();
  });

  it('shows the Impressum with the operator, German first and English below, and is noindex', async () => {
    renderApp('/impressum');
    expect(await screen.findByRole('heading', { level: 1, name: 'Impressum' })).toBeInTheDocument();
    expect(screen.getAllByText(/Musterstr\. 1/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/12345 Musterstadt/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/legal@example\.test/).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { level: 2, name: /Legal notice/ })).toBeInTheDocument();
    expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, nofollow',
    );
  });

  it('shows the Datenschutzerklärung in both languages', async () => {
    renderApp('/datenschutz');
    expect(
      await screen.findByRole('heading', { level: 1, name: 'Datenschutzerklärung' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Privacy policy/ })).toBeInTheDocument();
  });

  it('is linked from the footer and the profile, but not from a game', async () => {
    const { user, router } = renderApp('/');
    await user.click(await screen.findByRole('link', { name: 'Datenschutz' }));
    expect(router.state.location.pathname).toBe('/datenschutz');
    await user.click(await screen.findByRole('link', { name: 'Back to profile' }));
    expect(await screen.findByRole('link', { name: /Imprint/ })).toHaveAttribute(
      'href',
      '/impressum',
    );
    expect(screen.getByRole('link', { name: /Privacy policy/ })).toHaveAttribute(
      'href',
      '/datenschutz',
    );
  });

  it('keeps the main site indexable and the game free of legal links', async () => {
    renderApp('/play/a1-1-food-flashcards');
    await screen.findByRole('main');
    expect(screen.queryByRole('link', { name: 'Impressum' })).not.toBeInTheDocument();
    expect(document.head.querySelector('meta[name="robots"]')).toBeNull();
  });
});
