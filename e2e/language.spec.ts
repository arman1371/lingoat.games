import { expect, test } from '@playwright/test';
import { playPerfectly } from './helpers';

test.describe('language switcher', () => {
  test('switching language keeps progress separate and returns to German intact', async ({
    page,
  }) => {
    await playPerfectly(page, 'a1-1-hallo-flash');
    await page.goto('/');
    const germanXp = await page.getByTestId('xp').innerText();
    expect(Number(germanXp)).toBeGreaterThan(0);

    await page.goto('/profile');
    await expect(page.getByTestId('language-row')).toContainText('German');
    await page.getByTestId('language-row').click();
    const sheet = page.getByRole('dialog', { name: 'Learning language' });
    await expect(sheet).toContainText('Not started');
    await sheet.getByRole('radio', { name: /French/ }).check({ force: true });

    // French is its own space: new URL prefix, welcome card, empty counters
    await expect(page).toHaveURL(/\/fr\/?$/);
    await expect(page.getByTestId('language-welcome')).toContainText('Starting French');
    await expect(page.getByTestId('xp')).toHaveText('0');

    // links stay inside French, the Profile row says so
    await page.getByRole('link', { name: 'Profile' }).first().click();
    await expect(page).toHaveURL(/\/fr\/profile$/);
    await expect(page.getByTestId('language-row')).toContainText('French');
    await page.getByTestId('language-row').click();
    const back = page.getByRole('dialog', { name: 'Learning language' });
    await expect(back).toContainText('XP');
    await back.getByRole('radio', { name: /German/ }).check({ force: true });

    await expect(page).toHaveURL(/\/$/);
    await expect(page.getByTestId('xp')).toHaveText(germanXp);
  });

  test('the chosen URL decides the language, also on a fresh load', async ({ page }) => {
    await page.goto('/fr/progress');
    await expect(page.getByRole('heading', { name: 'Progress' })).toBeVisible();
    await expect(page.getByTestId('xp')).toHaveText('0');
    await page.goto('/progress');
    await expect(page.getByRole('heading', { name: 'Progress' })).toBeVisible();
  });
});
