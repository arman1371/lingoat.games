import { expect, test } from '@playwright/test';
import frC12 from '../src/content/fr-c1-2';
import { activity, captureSpeech, playPerfectly, SEED } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('French C1.2 – level navigation', () => {
  test('French Home lists C1.2 as available with its games', async ({ page }) => {
    await page.goto('/fr');
    const card = page.getByTestId('level-fr-c1-2');
    await expect(card).toContainText('C1.2');
    await expect(card).toContainText(`0 / ${frC12.activities.length} games`);
  });

  test('Home → C1.2 → unit shows the unit and a guided path, all inside /fr', async ({ page }) => {
    await page.goto('/fr');
    await page.getByTestId('level-fr-c1-2').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-c1-2$/);
    await expect(page.getByRole('heading', { name: 'C1.2', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(frC12.units.length);
    await page.getByTestId('unit-fr-c1-2-jeu').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-c1-2\/units\/fr-c1-2-jeu$/);
    await expect(page.getByRole('heading', { name: 'Quitte ou double !', level: 1 })).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      frC12.activities.filter((x) => x.unitId === 'fr-c1-2-jeu').length,
    );
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });
});

test.describe('French C1.2 – grammar hints', () => {
  test('a wrong adjectif verbal explains why and shows the French mini lesson', async ({
    page,
  }) => {
    const a = activity('fr-c1-2-jeu-gap-adjectives');
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
    await expect(lesson).toHaveAttribute('data-lesson', item.lesson ?? 'fr-c12-adjectif-verbal');
    await expect(lesson.locator('li').first()).toHaveAttribute('lang', 'fr');
  });
});

/**
 * Every game engine that unit 1 uses is exercised through the real UI. (All activities are completed
 * through the real engines in the Vitest playability suite.)
 */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards (games and bets)', 'fr-c1-2-jeu-flash-games'],
  ['quiz (meaning)', 'fr-c1-2-jeu-quiz-meaning'],
  ['memory (table games)', 'fr-c1-2-jeu-memory-games'],
  ['listen (games and addiction)', 'fr-c1-2-jeu-listen-games'],
  ['flashcards (dependence)', 'fr-c1-2-jeu-flash-addiction'],
  ['quiz (definitions in French)', 'fr-c1-2-jeu-quiz-definitions'],
  ['sort it (chance, strategy, skill)', 'fr-c1-2-jeu-sort-kinds'],
  ['sort it (participe, gérondif, adjectif)', 'fr-c1-2-jeu-sort-ant'],
  ['gap fill (participle or gérondif)', 'fr-c1-2-jeu-gap-forms'],
  ['gap fill (adjectif verbal)', 'fr-c1-2-jeu-gap-adjectives'],
  ['sentence builder', 'fr-c1-2-jeu-sentences'],
  ['spell (accents and dictation)', 'fr-c1-2-jeu-spell-words'],
  ['dialogue (three scenes)', 'fr-c1-2-jeu-dialogues'],
  ['blitz', 'fr-c1-2-jeu-blitz'],
  ['quiz (unit challenge)', 'fr-c1-2-jeu-challenge'],
];

test.describe('French C1.2 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every French C1.2 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(frC12.units.map((u) => u.id).sort());
  });
});
