import { expect, test } from '@playwright/test';
import fr22 from '../src/content/fr-a2-2';
import { activity, captureSpeech, playPerfectly, SEED } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('French A2.2 – level navigation', () => {
  test('French Home lists A2.2 as available', async ({ page }) => {
    await page.goto('/fr');
    const card = page.getByTestId('level-fr-a2-2');
    await expect(card).toContainText('A2.2');
    await expect(card).toContainText(`0 / ${fr22.activities.length} games`);
  });

  test('Home → A2.2 → unit shows the unit and a guided path, all inside /fr', async ({ page }) => {
    await page.goto('/fr');
    await page.getByTestId('level-fr-a2-2').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-a2-2$/);
    await expect(page.getByRole('heading', { name: 'A2.2', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(fr22.units.length);
    await page.getByTestId('unit-fr-a2-2-sante').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-a2-2\/units\/fr-a2-2-sante$/);
    await expect(page.getByRole('heading', { name: 'À votre santé !', level: 1 })).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      fr22.activities.filter((x) => x.unitId === 'fr-a2-2-sante').length,
    );
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });
});

test.describe('French A2.2 – grammar hints', () => {
  test('a wrong object pronoun explains why and shows the French mini lesson', async ({ page }) => {
    const a = activity('fr-a2-2-sante-gap-coi');
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
    await expect(lesson).toHaveAttribute('data-lesson', 'fr-object-pronouns');
    await expect(lesson.locator('li').first()).toHaveAttribute('lang', 'fr');
  });
});

/**
 * Every game engine that a unit uses is exercised through the real UI. (All activities are completed
 * through the real engines in the Vitest playability suite.)
 */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards (body)', 'fr-a2-2-sante-flash-body'],
  ['quiz (what does it mean)', 'fr-a2-2-sante-quiz-meaning'],
  ['listen (doctor and pharmacy)', 'fr-a2-2-sante-listen-doctor'],
  ['spell (unscramble, type and dictation)', 'fr-a2-2-sante-spell-health'],
  ['gap fill (le, la, les)', 'fr-a2-2-sante-gap-cod'],
  ['sort it (direct or indirect)', 'fr-a2-2-sante-sort-cod-coi'],
  ['gap fill (lui, leur, me)', 'fr-a2-2-sante-gap-coi'],
  ['gap fill (superlative)', 'fr-a2-2-sante-gap-superlative'],
  ['gap fill (qui, que, lequel)', 'fr-a2-2-sante-gap-interrogatives'],
  ['sentence builder', 'fr-a2-2-sante-sentences'],
  ['dialogue (three scenes)', 'fr-a2-2-sante-dialogues'],
  ['blitz', 'fr-a2-2-sante-blitz'],
  ['flashcards (press)', 'fr-a2-2-medias-flash-press'],
  ['listen (media)', 'fr-a2-2-medias-listen-media'],
  ['sort it (cause or consequence)', 'fr-a2-2-medias-sort-cause'],
  ['conjugation (subjunctive)', 'fr-a2-2-medias-conj-subjunctive'],
  ['gap fill (two pronouns)', 'fr-a2-2-medias-gap-pronoun-order'],
  ['gap fill (adverbs in -ment)', 'fr-a2-2-medias-gap-adverbs'],
  ['dialogue (media)', 'fr-a2-2-medias-dialogues'],
  ['blitz (media)', 'fr-a2-2-medias-blitz'],
];

test.describe('French A2.2 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every French A2.2 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(fr22.units.map((u) => u.id).sort());
  });
});
