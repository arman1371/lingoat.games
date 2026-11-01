import { expect, test } from '@playwright/test';
import fr21 from '../src/content/fr-a2-1';
import { activity, captureSpeech, playPerfectly } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('French A2.1 – level navigation', () => {
  test('French Home lists A2.1 next to A1.1 with its game count', async ({ page }) => {
    await page.goto('/fr');
    const card = page.getByTestId('level-fr-a2-1');
    await expect(card).toContainText('A2.1');
    await expect(card).toContainText(`0 / ${fr21.activities.length} games`);
  });

  test('A2.1 → unit shows the guided path, all inside /fr', async ({ page }) => {
    await page.goto('/fr');
    await page.getByTestId('level-fr-a2-1').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-a2-1$/);
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(fr21.units.length);
    await page.getByTestId('unit-fr-a2-1-parcours').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-a2-1\/units\/fr-a2-1-parcours$/);
    await expect(page.getByRole('heading', { name: 'Nouvelles vies', level: 1 })).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      fr21.activities.filter((x) => x.unitId === 'fr-a2-1-parcours').length,
    );
  });
});

test.describe('French A2.1 – grammar hints', () => {
  test('a wrong time marker explains why and shows the French mini lesson', async ({ page }) => {
    const a = activity('fr-a2-1-parcours-gap-time');
    if (a.gameType !== 'gapfill') throw new Error('expected a gap fill');
    await page.goto(`/fr/play/${a.id}?seed=1`);
    await page.getByTestId('start').click();
    const squash = (t: string) => t.replace(/\s+/g, ' ').trim();
    const shown = squash(await page.getByTestId('sentence').innerText());
    const item = a.config.items.find((i) => squash(i.text.replace('___', '…')) === shown)!;
    const wrong = item.options!.find((o) => o !== item.answer)!;
    await page.getByRole('button', { name: wrong, exact: true }).click();
    await page.getByTestId('why').click();
    await expect(page.getByTestId('mini-lesson')).toHaveAttribute(
      'data-lesson',
      'fr-a21-time-markers',
    );
  });
});

/** Every game engine that unit 1 uses is exercised through the real UI (the Vitest suite plays them all). */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards', 'fr-a2-1-parcours-flash-life'],
  ['quiz (pictures)', 'fr-a2-1-parcours-quiz-jobs'],
  ['listen', 'fr-a2-1-parcours-listen-life'],
  ['conjugation (passé composé with avoir)', 'fr-a2-1-parcours-conj-avoir'],
  ['conjugation (passé composé with être)', 'fr-a2-1-parcours-conj-etre'],
  ['sort it (avoir or être)', 'fr-a2-1-parcours-sort-auxiliary'],
  ['gap fill (participles)', 'fr-a2-1-parcours-gap-participles'],
  ['gap fill (negatives)', 'fr-a2-1-parcours-gap-negatives'],
  ['gap fill (time markers)', 'fr-a2-1-parcours-gap-time'],
  ['sentence builder', 'fr-a2-1-parcours-sentences'],
  ['spell', 'fr-a2-1-parcours-spell-life'],
  ['dialogue (three scenes)', 'fr-a2-1-parcours-dialogues'],
  ['blitz', 'fr-a2-1-parcours-blitz'],
];

test.describe('French A2.1 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every French A2.1 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(fr21.units.map((u) => u.id).sort());
  });
});
