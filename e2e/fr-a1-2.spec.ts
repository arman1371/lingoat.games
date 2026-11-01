import { expect, test } from '@playwright/test';
import fr12 from '../src/content/fr-a1-2';
import { activity, captureSpeech, playPerfectly } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('French A1.2 – level navigation', () => {
  test('French Home lists A1.2 as available with its games', async ({ page }) => {
    await page.goto('/fr');
    const card = page.getByTestId('level-fr-a1-2');
    await expect(card).toContainText('A1.2');
    await expect(card).toContainText(`0 / ${fr12.activities.length} games`);
  });

  test('Home → A1.2 → unit shows the unit and a guided path, all inside /fr', async ({ page }) => {
    await page.goto('/fr');
    await page.getByTestId('level-fr-a1-2').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-a1-2$/);
    await expect(page.getByRole('heading', { name: 'A1.2', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(fr12.units.length);
    await page.getByTestId('unit-fr-a1-2-journee').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-a1-2\/units\/fr-a1-2-journee$/);
    await expect(page.getByRole('heading', { name: 'Ma journée', level: 1 })).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      fr12.activities.filter((x) => x.unitId === 'fr-a1-2-journee').length,
    );
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });
});

/** Every engine that a French A1.2 unit uses is exercised through the real UI. */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards (morning)', 'fr-a1-2-journee-flash-morning'],
  ['flashcards (activities)', 'fr-a1-2-journee-flash-activities'],
  ['flashcards (parts of the day)', 'fr-a1-2-journee-flash-when'],
  ['flashcards (how often)', 'fr-a1-2-journee-flash-order'],
  ['quiz (what are they doing)', 'fr-a1-2-journee-quiz-emoji'],
  ['listen (routine verbs)', 'fr-a1-2-journee-listen-routine'],
  ['conjugation (pronominal verbs)', 'fr-a1-2-journee-conj-pronominal'],
  ['gap fill (me, te, se)', 'fr-a1-2-journee-gap-pronominal'],
  ['gap fill (how often)', 'fr-a1-2-journee-gap-frequency'],
  ['gap fill (first, then, finally)', 'fr-a1-2-journee-gap-sequence'],
  ['sentence builder', 'fr-a1-2-journee-sentences'],
  ['spell (accents and a hyphen)', 'fr-a1-2-journee-spell-routine'],
  ['dialogue (three scenes)', 'fr-a1-2-journee-dialogues'],
  ['blitz', 'fr-a1-2-journee-blitz'],
  ['quiz (unit challenge)', 'fr-a1-2-journee-challenge'],
  ['flashcards (family)', 'fr-a1-2-fetes-flash-family'],
  ['flashcards (celebrations)', 'fr-a1-2-fetes-flash-events'],
  ['flashcards (wishes)', 'fr-a1-2-fetes-flash-wishes'],
  ['flashcards (looks and character)', 'fr-a1-2-fetes-flash-looks'],
  ['flashcards (past and future)', 'fr-a1-2-fetes-flash-markers'],
  ['quiz (which celebration)', 'fr-a1-2-fetes-quiz-emoji'],
  ['listen (wishes)', 'fr-a1-2-fetes-listen-wishes'],
  ['conjugation (passé composé)', 'fr-a1-2-fetes-conj-passe-compose'],
  ['sort it (participle endings)', 'fr-a1-2-fetes-sort-participles'],
  ['gap fill (passé composé)', 'fr-a1-2-fetes-gap-passe-compose'],
  ['gap fill (time markers)', 'fr-a1-2-fetes-gap-markers'],
  ['sort it (looks or character)', 'fr-a1-2-fetes-sort-traits'],
  ['sentence builder', 'fr-a1-2-fetes-sentences'],
  ['dialogue (three scenes)', 'fr-a1-2-fetes-dialogues'],
  ['blitz', 'fr-a1-2-fetes-blitz'],
  ['quiz (unit challenge)', 'fr-a1-2-fetes-challenge'],
];

test.describe('French A1.2 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every French A1.2 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(fr12.units.map((u) => u.id).sort());
  });
});
