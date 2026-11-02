import { expect, test } from '@playwright/test';
import frc21 from '../src/content/fr-c2-1';
import { activity, captureSpeech, playPerfectly } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('French C2.1 – level navigation', () => {
  test('French Home lists C2.1 as available with its games', async ({ page }) => {
    await page.goto('/fr');
    const card = page.getByTestId('level-fr-c2-1');
    await expect(card).toContainText('C2.1');
    await expect(card).toContainText(`0 / ${frc21.activities.length} games`);
  });

  test('Home → C2.1 → unit shows the units and a guided path, all inside /fr', async ({ page }) => {
    await page.goto('/fr');
    await page.getByTestId('level-fr-c2-1').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-c2-1$/);
    await expect(page.getByRole('heading', { name: 'C2.1', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(frc21.units.length);
    await page.getByTestId('unit-fr-c2-1-registres').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-c2-1\/units\/fr-c2-1-registres$/);
    await expect(
      page.getByRole('heading', { name: 'Registres et nuances', level: 1 }),
    ).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      frc21.activities.filter((x) => x.unitId === 'fr-c2-1-registres').length,
    );
  });
});

test.describe('French C2.1 – grammar hints', () => {
  test('a wrong derived word explains why and shows the French mini lesson', async ({ page }) => {
    const a = activity('fr-c2-1-registres-gap-formation');
    if (a.gameType !== 'gapfill') throw new Error('expected a gap fill');
    await page.goto(`/fr/play/${a.id}?seed=1`);
    await page.getByTestId('start').click();
    const squash = (t: string) => t.replace(/\s+/g, ' ').trim();
    const shown = squash(await page.getByTestId('sentence').innerText());
    const item = a.config.items.find((i) => squash(i.text.replace('___', '…')) === shown)!;
    const wrong = item.options!.find((o) => o !== item.answer)!;
    await page.getByRole('button', { name: wrong, exact: true }).click();
    await page.getByTestId('why').click();
    const lesson = page.getByTestId('mini-lesson');
    await expect(lesson).toHaveAttribute('data-lesson', 'fr-c21-word-formation');
    await expect(lesson.locator('li').first()).toHaveAttribute('lang', 'fr');
  });
});

/** Every engine that C2.1 uses is exercised through the real UI (the Vitest playability suite covers all activities). */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards (familiar words)', 'fr-c2-1-registres-flash-familiar'],
  ['quiz (verbs of looking and speaking)', 'fr-c2-1-registres-quiz-nuance'],
  ['sort it (registers)', 'fr-c2-1-registres-sort-register'],
  ['memory (familiar and formal twins)', 'fr-c2-1-registres-memory-twins'],
  ['listen (shades of meaning)', 'fr-c2-1-registres-listen-nuance'],
  ['gap fill (the right verb)', 'fr-c2-1-registres-gap-nuance'],
  ['sort it (prefixes)', 'fr-c2-1-registres-sort-prefixes'],
  ['gap fill (derived words)', 'fr-c2-1-registres-gap-formation'],
  ['spell (accents)', 'fr-c2-1-registres-spell-words'],
  ['sentence builder', 'fr-c2-1-registres-sentences'],
  ['dialogue (three scenes)', 'fr-c2-1-registres-dialogues'],
  ['blitz', 'fr-c2-1-registres-blitz'],
  ['quiz (unit challenge)', 'fr-c2-1-registres-challenge'],
  ['sort it (kinds of irony)', 'fr-c2-1-humour-sort-irony'],
  ['gap fill (paronyms)', 'fr-c2-1-humour-gap-paronyms'],
  ['quiz (humour challenge)', 'fr-c2-1-humour-challenge'],
  ['sort it (narrative tenses)', 'fr-c2-1-recit-sort-tenses'],
  ['conjugation (passé simple)', 'fr-c2-1-recit-conj-irregular'],
  ['dialogue (telling a story)', 'fr-c2-1-recit-dialogues'],
  ['sort it (cause or consequence)', 'fr-c2-1-cause-sort-roles'],
  ['gap fill (connectors of cause)', 'fr-c2-1-cause-gap-connectors'],
  ['spell (verbs of cause)', 'fr-c2-1-cause-spell-words'],
  ['quiz (cause challenge)', 'fr-c2-1-cause-challenge'],
  ['sort it (moods after connectors)', 'fr-c2-1-concession-sort-moods'],
  ['gap fill (verb forms in conditions)', 'fr-c2-1-concession-gap-hypothesis'],
  ['sentence builder (concession)', 'fr-c2-1-concession-sentences'],
  ['quiz (concession challenge)', 'fr-c2-1-concession-challenge'],
];

test.describe('French C2.1 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every French C2.1 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(frc21.units.map((u) => u.id).sort());
  });
});
