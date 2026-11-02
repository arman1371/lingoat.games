import { screen, within } from '@testing-library/react';
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

describe('French first visit and per-language data', () => {
  it('welcomes a new French learner and offers the first game', async () => {
    renderApp('/fr');
    expect(await screen.findByTestId('language-welcome')).toHaveTextContent('Starting French');
    expect(await screen.findByTestId('continue-cta')).toBeInTheDocument();
    expect(screen.queryByText(/coming soon/)).not.toBeInTheDocument();
  });

  it('lists only the French level on the French home page', async () => {
    renderApp('/fr');
    expect(await screen.findByTestId('level-fr-a1-1')).toHaveTextContent('A1.1');
    expect(screen.queryByTestId('level-a1-1')).not.toBeInTheDocument();
  });

  it('keeps German grammar points out of the French library', async () => {
    const { user } = renderApp('/fr/library?view=games');
    // The French library loads every French level; on a busy CI worker that can take longer than the default 1 s.
    await user.click(await screen.findByText(/^Filters/, {}, { timeout: 10_000 }));
    expect(
      await screen.findByRole('button', { name: /tu or vous/ }, { timeout: 10_000 }),
    ).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Verb conjugation/ })).not.toBeInTheDocument();
  }, 20_000);

  it('shows no welcome card in German', async () => {
    renderApp('/');
    await screen.findByTestId('continue-cta');
    expect(screen.queryByTestId('language-welcome')).not.toBeInTheDocument();
  });

  it('resets only the language you are in', async () => {
    useProgressStore.setState({ xp: 111 });
    getProgressStore('fr').setState({ xp: 222 });
    const { user } = renderApp('/fr/profile');
    await user.click(await screen.findByRole('button', { name: 'Reset French progress' }));
    const dialog = await screen.findByRole('dialog', { name: 'Reset French progress?' });
    await user.click(within(dialog).getByRole('button', { name: 'Reset French progress' }));
    expect(getProgressStore('fr').getState().xp).toBe(0);
    expect(useProgressStore.getState().xp).toBe(111);
  });

  it('says which language the speech sample and the auto-speak setting are for', async () => {
    renderApp('/fr/profile');
    expect(await screen.findByLabelText('Speak French automatically')).toBeInTheDocument();
  });
});
