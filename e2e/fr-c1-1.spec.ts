import { expect, test } from '@playwright/test';
import frc11 from '../src/content/fr-c1-1';
import { activity, captureSpeech, playPerfectly, SEED } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('French C1.1 – level navigation', () => {
  test('French Home lists C1.1 as available, in CEFR order after A1.1', async ({ page }) => {
    await page.goto('/fr');
    const card = page.getByTestId('level-fr-c1-1');
    await expect(card).toContainText('C1.1');
    await expect(card).toContainText(`0 / ${frc11.activities.length} games`);
  });

  test('Home → C1.1 → unit shows the unit and a guided path, all inside /fr', async ({ page }) => {
    await page.goto('/fr');
    await page.getByTestId('level-fr-c1-1').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-c1-1$/);
    await expect(page.getByRole('heading', { name: 'C1.1', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(frc11.units.length);
    await page.getByTestId('unit-fr-c1-1-medias').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-c1-1\/units\/fr-c1-1-medias$/);
    await expect(
      page.getByRole('heading', { name: 'Les médias et l’information', level: 1 }),
    ).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      frc11.activities.filter((x) => x.unitId === 'fr-c1-1-medias').length,
    );
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });

  test('the unit links its full grammar lesson, which opens inside /fr', async ({ page }) => {
    await page.goto('/fr/levels/fr-c1-1/units/fr-c1-1-medias');
    await page.getByTestId('grammar-fr-c11-connectors').click();
    await expect(page).toHaveURL(/\/fr\/library\/grammar\/fr-c11-connectors$/);
    await expect(
      page.getByRole('heading', { name: 'Connectors: cause, consequence, addition', level: 1 }),
    ).toBeVisible();
  });
});

test.describe('French C1.1 – grammar hints', () => {
  test('a wrong connector explains why and shows the French mini lesson', async ({ page }) => {
    const a = activity('fr-c1-1-medias-gap-connectors');
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
    await expect(lesson).toHaveAttribute('data-lesson', 'fr-c11-connectors');
    await expect(lesson.locator('li').first()).toHaveAttribute('lang', 'fr');
  });
});

/**
 * One activity per engine that the unit uses is played through the real UI. (Every activity is completed
 * through the real engines in the Vitest playability suite.)
 */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards', 'fr-c1-1-medias-flash-presse'],
  ['quiz', 'fr-c1-1-medias-quiz-meaning'],
  ['memory (word and definition)', 'fr-c1-1-medias-memory-definitions'],
  ['listen', 'fr-c1-1-medias-listen-news'],
  ['sort it (reliable or suspicious)', 'fr-c1-1-medias-sort-signals'],
  ['sort it (cause, consequence, addition)', 'fr-c1-1-medias-sort-connectors'],
  ['spell', 'fr-c1-1-medias-spell-media'],
  ['dictation', 'fr-c1-1-medias-dictation-news'],
  ['gap fill (choose)', 'fr-c1-1-medias-gap-connectors'],
  ['gap fill (type)', 'fr-c1-1-medias-gap-typed'],
  ['sentence builder', 'fr-c1-1-medias-sentences'],
  ['dialogue (three scenes)', 'fr-c1-1-medias-dialogues'],
  ['blitz', 'fr-c1-1-medias-blitz'],
  ['unit challenge', 'fr-c1-1-medias-challenge'],
  ['sort it (real, imagined, too late)', 'fr-c1-1-societe-sort-si'],
  ['conjugation', 'fr-c1-1-societe-conj-conditionnel'],
  ['gap fill (choose)', 'fr-c1-1-societe-gap-si'],
  ['sentence builder', 'fr-c1-1-societe-sentences'],
  ['dialogue (two scenes)', 'fr-c1-1-societe-dialogues'],
  ['unit challenge', 'fr-c1-1-societe-challenge'],
  ['sort it (affixes)', 'fr-c1-1-egalite-sort-affixes'],
  ['sort it (le or la)', 'fr-c1-1-egalite-sort-gender'],
  ['gap fill (choose)', 'fr-c1-1-egalite-gap-affixes'],
  ['gap fill (type)', 'fr-c1-1-egalite-gap-typed'],
  ['dialogue (two scenes)', 'fr-c1-1-egalite-dialogues'],
  ['unit challenge', 'fr-c1-1-egalite-challenge'],
];

test.describe('French C1.1 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every French C1.1 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(frc11.units.map((u) => u.id).sort());
  });
});
