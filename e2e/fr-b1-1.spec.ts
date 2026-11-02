import { expect, test } from '@playwright/test';
import frB11 from '../src/content/fr-b1-1';
import { activity, captureSpeech, playPerfectly, SEED } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('French B1.1 – level navigation', () => {
  test('French Home lists B1.1 as available with its games', async ({ page }) => {
    await page.goto('/fr');
    const card = page.getByTestId('level-fr-b1-1');
    await expect(card).toContainText('B1.1');
    await expect(card).toContainText(`0 / ${frB11.activities.length} games`);
  });

  test('Home → B1.1 → unit shows the unit and a guided path, all inside /fr', async ({ page }) => {
    await page.goto('/fr');
    await page.getByTestId('level-fr-b1-1').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-b1-1$/);
    await expect(page.getByRole('heading', { name: 'B1.1', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(frB11.units.length);
    await page.getByTestId('unit-fr-b1-1-ensemble').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-b1-1\/units\/fr-b1-1-ensemble$/);
    await expect(page.getByRole('heading', { name: 'Vivre ensemble', level: 1 })).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      frB11.activities.filter((x) => x.unitId === 'fr-b1-1-ensemble').length,
    );
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });
});

test.describe('French B1.1 – grammar hints', () => {
  test('a wrong subjunctive explains why and shows the French mini lesson', async ({ page }) => {
    const a = activity('fr-b1-1-ensemble-gap-subjunctive');
    if (a.gameType !== 'gapfill') throw new Error('expected a gap fill');
    await page.goto(`/fr/play/${a.id}?seed=${SEED}`);
    await page.getByTestId('start').click();
    const squash = (t: string) => t.replace(/\s+/g, ' ').trim();
    const shown = squash(await page.getByTestId('sentence').innerText());
    const item = a.config.items.find((i) => squash(i.text.replace('___', '…')) === shown)!;
    const wrong = item.options!.find((o) => o !== item.answer)!;
    await page.getByRole('button', { name: wrong, exact: true }).click();
    await page.getByTestId('why').click();
    const lesson = page.getByTestId('mini-lesson');
    await expect(lesson).toHaveAttribute('data-lesson', 'fr-b11-subjunctive');
    await expect(lesson.locator('li').first()).toHaveAttribute('lang', 'fr');
  });
});

/**
 * One game per engine and unit is played through the real UI (the Vitest playability suite plays every
 * activity of the level through the real engines).
 */
const PLAYED: [engine: string, activityId: string][] = frB11.units.flatMap((u) => {
  const firstOfType = new Map<string, string>();
  for (const a of frB11.activities.filter((x) => x.unitId === u.id)) {
    if (!firstOfType.has(a.gameType)) firstOfType.set(a.gameType, a.id);
  }
  return [...firstOfType].map(([type, id]) => [`${type} (${u.title})`, id] as [string, string]);
});

test.describe('French B1.1 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every French B1.1 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(frB11.units.map((u) => u.id).sort());
  });
});
