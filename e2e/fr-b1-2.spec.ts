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
  ['flashcards (landscapes)', 'fr-b1-2-paysages-flash-landscapes'],
  ['listen (forecast)', 'fr-b1-2-paysages-listen-forecast'],
  ['sort it (future forms)', 'fr-b1-2-paysages-sort-future-forms'],
  ['conjugation (futur simple outdoors)', 'fr-b1-2-paysages-conj-future'],
  ['gap fill (which future)', 'fr-b1-2-paysages-gap-future-choice'],
  ['sentence builder (weather)', 'fr-b1-2-paysages-sentences'],
  ['sort it (si clauses)', 'fr-b1-2-hypotheses-sort-si'],
  ['conjugation (conditional)', 'fr-b1-2-hypotheses-conj-conditional'],
  ['gap fill (si + tense)', 'fr-b1-2-hypotheses-gap-si'],
  ['gap fill (conditional)', 'fr-b1-2-hypotheses-gap-conditional'],
  ['dialogue (hypotheses)', 'fr-b1-2-hypotheses-dialogues'],
  ['blitz (hypotheses)', 'fr-b1-2-hypotheses-blitz'],
  ['sort it (past or present)', 'fr-b1-2-regrets-sort-time'],
  ['conjugation (plus-que-parfait)', 'fr-b1-2-regrets-conj-pqp'],
  ['conjugation (past conditional)', 'fr-b1-2-regrets-conj-cond-past'],
  ['gap fill (past hypotheses)', 'fr-b1-2-regrets-gap-past-hypothesis'],
  ['dialogue (apologies)', 'fr-b1-2-regrets-dialogues'],
  ['sentence builder (regrets)', 'fr-b1-2-regrets-sentences'],
  ['flashcards (verbs with prepositions)', 'fr-b1-2-planete-flash-prepositions'],
  ['sort it (prepositions)', 'fr-b1-2-planete-sort-prepositions'],
  ['conjugation (environment verbs)', 'fr-b1-2-planete-conj-actions'],
  ['gap fill (prepositions)', 'fr-b1-2-planete-gap-prepositions'],
  ['dialogue (small actions)', 'fr-b1-2-planete-dialogues'],
  ['blitz (prepositions)', 'fr-b1-2-planete-blitz'],
  ['sort it (gérondif meanings)', 'fr-b1-2-convaincre-sort-gerund'],
  ['conjugation (verbs of persuasion)', 'fr-b1-2-convaincre-conj-persuasion'],
  ['gap fill (gérondif)', 'fr-b1-2-convaincre-gap-gerund'],
  ['gap fill (linking words)', 'fr-b1-2-convaincre-gap-connectors'],
  ['dialogue (convince me)', 'fr-b1-2-convaincre-dialogues'],
  ['blitz (gérondif)', 'fr-b1-2-convaincre-blitz'],
  ['flashcards (indefinite pronouns)', 'fr-b1-2-ville-flash-pronouns'],
  ['sort it (people, things, amounts)', 'fr-b1-2-ville-sort-pronouns'],
  ['conjugation (city verbs)', 'fr-b1-2-ville-conj-city'],
  ['gap fill (indefinite pronouns)', 'fr-b1-2-ville-gap-pronouns'],
  ['dialogue (a complaint)', 'fr-b1-2-ville-dialogues'],
  ['blitz (pronouns)', 'fr-b1-2-ville-blitz'],
  ['sort it (direct or reported)', 'fr-b1-2-rapporter-sort-speech'],
  ['conjugation (imparfait)', 'fr-b1-2-rapporter-conj-imparfait'],
  ['gap fill (reported speech)', 'fr-b1-2-rapporter-gap-reported'],
  ['gap fill (formal questions)', 'fr-b1-2-rapporter-gap-inversion'],
  ['dialogue (what did they say)', 'fr-b1-2-rapporter-dialogues'],
  ['blitz (reported speech)', 'fr-b1-2-rapporter-blitz'],
  ['sort it (relative pronouns)', 'fr-b1-2-etudes-sort-relatives'],
  ['conjugation (study verbs)', 'fr-b1-2-etudes-conj-study'],
  ['gap fill (relative pronouns)', 'fr-b1-2-etudes-gap-relatives'],
  ['sentence builder (relatives)', 'fr-b1-2-etudes-sentences'],
  ['dialogue (student life)', 'fr-b1-2-etudes-dialogues'],
  ['blitz (relative pronouns)', 'fr-b1-2-etudes-blitz'],
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
