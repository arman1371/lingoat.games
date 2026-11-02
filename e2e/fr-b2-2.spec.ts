import { expect, test } from '@playwright/test';
import fr22 from '../src/content/fr-b2-2';
import { activity, captureSpeech, playPerfectly } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('French B2.2 – level navigation', () => {
  test('French Home lists B2.2 as available, after A1.1', async ({ page }) => {
    await page.goto('/fr');
    const card = page.getByTestId('level-fr-b2-2');
    await expect(card).toContainText('B2.2');
    await expect(card).toContainText(`0 / ${fr22.activities.length} games`);
  });

  test('Home → B2.2 → unit shows the unit and a guided path, all inside /fr', async ({ page }) => {
    await page.goto('/fr');
    await page.getByTestId('level-fr-b2-2').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-b2-2$/);
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(fr22.units.length);
    await page.getByTestId('unit-fr-b2-2-actu').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-b2-2\/units\/fr-b2-2-actu$/);
    await expect(
      page.getByRole('heading', { name: 'Informer et s’informer', level: 1 }),
    ).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      fr22.activities.filter((x) => x.unitId === 'fr-b2-2-actu').length,
    );
  });
});

/** Every engine the units use, played through the real UI (Vitest plays every activity). */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards', 'fr-b2-2-actu-flash-press'],
  ['quiz', 'fr-b2-2-actu-quiz-meaning'],
  ['memory', 'fr-b2-2-actu-memory-press'],
  ['listen', 'fr-b2-2-actu-listen-disinfo'],
  ['gap fill (reported speech)', 'fr-b2-2-actu-gap-reported'],
  ['sort it (time words)', 'fr-b2-2-actu-sort-time-words'],
  ['gap fill (c’est … qui / que)', 'fr-b2-2-actu-gap-cleft'],
  ['gap fill (lequel, auquel, duquel)', 'fr-b2-2-actu-gap-relative'],
  ['sentence builder', 'fr-b2-2-actu-sentences'],
  ['spell', 'fr-b2-2-actu-spell-press'],
  ['dialogue (three scenes)', 'fr-b2-2-actu-dialogues'],
  ['blitz', 'fr-b2-2-actu-blitz'],
  // unit 2
  ['flashcards (unit 2)', 'fr-b2-2-sante-flash-wellbeing'],
  ['gap fill (subjunctive)', 'fr-b2-2-sante-gap-subjunctive'],
  ['gap fill (ne explétif)', 'fr-b2-2-sante-gap-ne'],
  ['sort it (mood)', 'fr-b2-2-sante-sort-mood'],
  ['conjugation (subjunctive)', 'fr-b2-2-sante-conj-subjunctive'],
  ['dialogue (unit 2)', 'fr-b2-2-sante-dialogues'],
  // unit 3
  ['flashcards (unit 3)', 'fr-b2-2-solidarite-flash-engagement'],
  ['gap fill (passive)', 'fr-b2-2-solidarite-gap-passive'],
  ['gap fill (se faire)', 'fr-b2-2-solidarite-gap-sefaire'],
  ['sort it (voice)', 'fr-b2-2-solidarite-sort-voice'],
  ['dialogue (unit 3)', 'fr-b2-2-solidarite-dialogues'],
  // unit 4
  ['flashcards (unit 4)', 'fr-b2-2-justice-flash-law'],
  ['gap fill (si clauses)', 'fr-b2-2-justice-gap-si'],
  ['gap fill (conditions)', 'fr-b2-2-justice-gap-condition'],
  ['sort it (si systems)', 'fr-b2-2-justice-sort-si'],
  ['conjugation (conditional)', 'fr-b2-2-justice-conj-conditional'],
  ['dialogue (unit 4)', 'fr-b2-2-justice-dialogues'],
  // unit 5
  ['flashcards (unit 5)', 'fr-b2-2-culture-flash-art'],
  ['gap fill (superlative)', 'fr-b2-2-culture-gap-superlative'],
  ['gap fill (verbs + prepositions)', 'fr-b2-2-culture-gap-prep'],
  ['sort it (prepositions)', 'fr-b2-2-culture-sort-prep'],
  ['conjugation (unit 5)', 'fr-b2-2-culture-conj-subjunctive'],
  ['dialogue (unit 5)', 'fr-b2-2-culture-dialogues'],
];

test.describe('French B2.2 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every French B2.2 unit written so far', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(fr22.units.map((u) => u.id).sort());
  });
});
