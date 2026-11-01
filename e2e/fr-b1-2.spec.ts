import { expect, test } from '@playwright/test';
import frB12 from '../src/content/fr-b1-2';
import { activity, captureSpeech, playPerfectly } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('French B1.2 – level navigation', () => {
  test('French Home lists B1.2 and opens its first unit', async ({ page }) => {
    await page.goto('/fr');
    const card = page.getByTestId('level-fr-b1-2');
    await expect(card).toContainText('B1.2');
    await expect(card).toContainText(`0 / ${frB12.activities.length} games`);
    await card.click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-b1-2$/);
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(frB12.units.length);
    await page.getByTestId('unit-fr-b1-2-voyage').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-b1-2\/units\/fr-b1-2-voyage$/);
    await expect(page.getByRole('heading', { name: 'Et si on partait ?', level: 1 })).toBeVisible();
  });
});

/** Every engine of a unit is played through the real UI; the Vitest playability suite plays them all. */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards (transport)', 'fr-b1-2-voyage-flash-transport'],
  ['quiz (what is this)', 'fr-b1-2-voyage-quiz-emoji'],
  ['memory (counterparts)', 'fr-b1-2-voyage-memory-pairs'],
  ['listen (travel words)', 'fr-b1-2-voyage-listen-travel'],
  ['spell (unscramble, type and dictation)', 'fr-b1-2-voyage-spell-travel'],
  ['sort it (future stems)', 'fr-b1-2-voyage-sort-future-stems'],
  ['conjugation (regular futur simple)', 'fr-b1-2-voyage-conj-future-regular'],
  ['conjugation (irregular stems)', 'fr-b1-2-voyage-conj-future-irregular'],
  ['gap fill (futur simple)', 'fr-b1-2-voyage-gap-future'],
  ['sentence builder', 'fr-b1-2-voyage-sentences'],
  ['dialogue (three scenes)', 'fr-b1-2-voyage-dialogues'],
  ['blitz', 'fr-b1-2-voyage-blitz'],
];

test.describe('French B1.2 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every French B1.2 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(frB12.units.map((u) => u.id).sort());
  });
});
