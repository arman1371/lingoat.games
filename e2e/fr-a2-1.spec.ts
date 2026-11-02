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

/** Game engines of every unit are exercised through the real UI (the Vitest suite plays them all). */
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
  ['flashcards (places)', 'fr-a2-1-sorties-flash-places'],
  ['quiz (pictures)', 'fr-a2-1-sorties-quiz-emoji'],
  ['listen', 'fr-a2-1-sorties-listen-outings'],
  ['memory', 'fr-a2-1-sorties-memory-culture'],
  ['conjugation (pouvoir, devoir, vouloir)', 'fr-a2-1-sorties-conj-modals'],
  ['gap fill (modals)', 'fr-a2-1-sorties-gap-modals'],
  ['sort it (accept or refuse)', 'fr-a2-1-sorties-sort-answers'],
  ['gap fill (invitations)', 'fr-a2-1-sorties-gap-invitations'],
  ['gap fill (the pronoun y)', 'fr-a2-1-sorties-gap-y'],
  ['sentence builder', 'fr-a2-1-sorties-sentences'],
  ['spell', 'fr-a2-1-sorties-spell-culture'],
  ['dialogue (three scenes)', 'fr-a2-1-sorties-dialogues'],
  ['blitz', 'fr-a2-1-sorties-blitz'],
  ['flashcards', 'fr-a2-1-souvenirs-flash-landscapes'],
  ['conjugation (imparfait)', 'fr-a2-1-souvenirs-conj-imparfait'],
  ['gap fill (en)', 'fr-a2-1-souvenirs-gap-en'],
  ['sort it (habit or description)', 'fr-a2-1-souvenirs-sort-usage'],
  ['sentence builder', 'fr-a2-1-souvenirs-sentences'],
  ['dialogue (three scenes)', 'fr-a2-1-souvenirs-dialogues'],
  ['flashcards', 'fr-a2-1-logement-flash-building'],
  ['conjugation (flat verbs)', 'fr-a2-1-logement-conj-flat'],
  ['gap fill (qui, que, où)', 'fr-a2-1-logement-gap-relatives'],
  ['sort it (qui, que, où)', 'fr-a2-1-logement-sort-relatives'],
  ['sentence builder', 'fr-a2-1-logement-sentences'],
  ['dialogue (three scenes)', 'fr-a2-1-logement-dialogues'],
  ['flashcards', 'fr-a2-1-portrait-flash-faces'],
  ['conjugation (verbs about people)', 'fr-a2-1-portrait-conj-people'],
  ['gap fill (possessive pronouns)', 'fr-a2-1-portrait-gap-possessive'],
  ['sort it (quality or flaw)', 'fr-a2-1-portrait-sort-traits'],
  ['sentence builder', 'fr-a2-1-portrait-sentences'],
  ['dialogue (three scenes)', 'fr-a2-1-portrait-dialogues'],
  ['flashcards', 'fr-a2-1-futur-flash-tech'],
  ['conjugation (futur simple)', 'fr-a2-1-futur-conj-futur'],
  ['gap fill (irregular futures)', 'fr-a2-1-futur-gap-irregular'],
  ['sort it (near or far future)', 'fr-a2-1-futur-sort-tense'],
  ['sentence builder', 'fr-a2-1-futur-sentences'],
  ['dialogue (three scenes)', 'fr-a2-1-futur-dialogues'],
  ['flashcards', 'fr-a2-1-cuisine-flash-kitchen'],
  ['conjugation (recipe verbs)', 'fr-a2-1-cuisine-conj-recipe'],
  ['gap fill (ne … que)', 'fr-a2-1-cuisine-gap-ne-que'],
  ['sort it (must or must not)', 'fr-a2-1-cuisine-sort-obligation'],
  ['sentence builder', 'fr-a2-1-cuisine-sentences'],
  ['dialogue (three scenes)', 'fr-a2-1-cuisine-dialogues'],
  ['flashcards', 'fr-a2-1-etudes-flash-system'],
  ['conjugation (past tenses)', 'fr-a2-1-etudes-conj-school'],
  ['gap fill (cause)', 'fr-a2-1-etudes-gap-cause'],
  ['sort it (background or event)', 'fr-a2-1-etudes-sort-past'],
  ['sentence builder', 'fr-a2-1-etudes-sentences'],
  ['dialogue (three scenes)', 'fr-a2-1-etudes-dialogues'],
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
