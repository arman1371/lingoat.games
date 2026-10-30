import { screen, within } from '@testing-library/react';
import { useProgressStore } from '@/store/progressStore';
import { renderApp, resetStores } from '@/test/app';
import { goToLanguage } from '@/app/language';

vi.mock('@/app/language', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/app/language')>()),
  goToLanguage: vi.fn(),
}));

beforeEach(() => {
  resetStores();
  vi.mocked(goToLanguage).mockClear();
});

async function openSheet(path: string) {
  const { user } = renderApp(path);
  await user.click(await screen.findByTestId('language-chip'));
  return { user, sheet: await screen.findByRole('dialog', { name: 'Learning language' }) };
}

describe('LanguageSwitcher', () => {
  it('shows the language being studied on the chip', async () => {
    renderApp('/');
    expect(await screen.findByTestId('language-chip')).toHaveAccessibleName(
      'Learning language: German. Change',
    );
  });

  it('lists every language with its own status and marks the current one', async () => {
    useProgressStore.setState({
      xp: 1240,
      lastActivityId: 'a1-2-stadt-flash',
      activities: { 'a1-2-stadt-flash': { stars: 3, bestAccuracy: 1, plays: 1, lastPlayed: 1 } },
    });
    const { sheet } = await openSheet('/');
    const german = within(sheet).getByRole('radio', { name: /German/ });
    const french = within(sheet).getByRole('radio', { name: /French/ });
    expect(german).toBeChecked();
    expect(french).not.toBeChecked();
    expect(sheet).toHaveTextContent('A1.2 · 1,240 XP');
    expect(sheet).toHaveTextContent('Not started');
    expect(sheet).toHaveTextContent('kept for each language');
  });

  it('goes to the other language when it is chosen', async () => {
    const { user, sheet } = await openSheet('/');
    await user.click(within(sheet).getByRole('radio', { name: /French/ }));
    expect(goToLanguage).toHaveBeenCalledWith('fr');
  });

  it('closes with the Close button and stays in the same language', async () => {
    const { user, sheet } = await openSheet('/fr');
    await user.click(within(sheet).getByRole('button', { name: 'Close' }));
    expect(goToLanguage).not.toHaveBeenCalled();
    expect(sheet).not.toHaveAttribute('open');
  });

  it('is also reachable from the Profile', async () => {
    const { user } = renderApp('/profile');
    await user.click(await screen.findByTestId('language-row'));
    expect(await screen.findByRole('dialog', { name: 'Learning language' })).toBeInTheDocument();
  });
});
