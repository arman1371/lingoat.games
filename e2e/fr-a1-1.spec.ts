import { expect, test } from '@playwright/test';
import fr11 from '../src/content/fr-a1-1';
import a11 from '../src/content/a1-1';
import { activity, captureSpeech, playPerfectly, SEED } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('French A1.1 – level navigation', () => {
  test('French Home lists A1.1 as available and no other French level has games', async ({
    page,
  }) => {
    await page.goto('/fr');
    const card = page.getByTestId('level-fr-a1-1');
    await expect(card).toContainText('A1.1');
    await expect(card).toContainText(`0 / ${fr11.activities.length} games`);
    // the German levels are not part of the French home
    await expect(page.getByTestId('level-a1-1')).toHaveCount(0);
  });

  test('Home → A1.1 → unit shows the unit and a guided path, all inside /fr', async ({ page }) => {
    await page.goto('/fr');
    await page.getByTestId('level-fr-a1-1').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-a1-1$/);
    await expect(page.getByRole('heading', { name: 'A1.1', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(fr11.units.length);
    await page.getByTestId('unit-fr-a1-1-bonjour').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-a1-1\/units\/fr-a1-1-bonjour$/);
    await expect(page.getByRole('heading', { name: 'Bonjour !', level: 1 })).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      fr11.activities.filter((x) => x.unitId === 'fr-a1-1-bonjour').length,
    );
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });

  test('progress in French stays out of German and the other way round', async ({ page }) => {
    await playPerfectly(page, 'fr-a1-1-bonjour-flash');
    await page.goto('/fr');
    await expect(page.getByTestId('level-fr-a1-1')).toContainText(
      `1 / ${fr11.activities.length} games`,
    );
    await page.goto('/');
    await expect(page.getByTestId('level-a1-1')).toContainText(
      `0 / ${a11.activities.length} games`,
    );
  });
});

test.describe('French A1.1 – library', () => {
  test('lists only the French games and no German grammar points', async ({ page }) => {
    await page.goto('/fr/library?view=games');
    await expect(page.getByTestId('result-count')).toHaveText(`${fr11.activities.length} games`);
    await page.getByText(/^Filters/).click();
    await expect(page.getByRole('button', { name: /tu or vous/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Verb conjugation/ })).toHaveCount(0);
    await page.getByRole('button', { name: /tu or vous/ }).click();
    const n = fr11.activities.filter((a) => a.tags.includes('fr-tu-vous' as never)).length;
    expect(n).toBeGreaterThan(1);
    await expect(page.getByTestId('result-count')).toHaveText(`${n} games`);
  });

  test('the Grammar tab shows no German lessons while studying French', async ({ page }) => {
    await page.goto('/fr/library');
    await expect(page.getByTestId('grammar-index')).toBeVisible();
    await expect(page.getByText('Verb in position 2')).toHaveCount(0);
  });
});

test.describe('French A1.1 – grammar hints', () => {
  test('a wrong verb form explains why and shows the French mini lesson', async ({ page }) => {
    const a = activity('fr-a1-1-bonjour-gap-greetings');
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
    await expect(lesson).toHaveAttribute('data-lesson', item.lesson ?? 'fr-questions');
    await expect(lesson.locator('li').first()).toHaveAttribute('lang', 'fr');
  });
});

/**
 * Every game engine that unit 1 uses is exercised through the real UI. (All activities are completed
 * through the real engines in the Vitest playability suite.)
 */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards', 'fr-a1-1-bonjour-flash'],
  ['quiz', 'fr-a1-1-bonjour-quiz-meaning'],
  ['memory', 'fr-a1-1-bonjour-memory-greetings'],
  ['listen', 'fr-a1-1-bonjour-listen-greetings'],
  ['spell (unscramble and type, with an accent)', 'fr-a1-1-bonjour-spell-polite'],
  ['sentence builder', 'fr-a1-1-bonjour-sentences'],
  ['gap fill', 'fr-a1-1-bonjour-gap-greetings'],
  ['sort it (tu or vous)', 'fr-a1-1-bonjour-sort-tu-vous'],
  ['blitz', 'fr-a1-1-bonjour-blitz'],
  ['dialogue (three scenes)', 'fr-a1-1-bonjour-dialogues'],
  ['flashcards (countries)', 'fr-a1-1-presenter-flash-countries'],
  ['quiz (flags)', 'fr-a1-1-presenter-quiz-flags'],
  ['memory (country and nationality)', 'fr-a1-1-presenter-memory-nationalities'],
  ['listen (jobs and nationalities)', 'fr-a1-1-presenter-listen-people'],
  ['sort it (masculine or feminine)', 'fr-a1-1-presenter-sort-gender'],
  ['conjugation (être and avoir, j’ai)', 'fr-a1-1-presenter-conj-etre-avoir'],
  ['conjugation (-er verbs and s’appeler)', 'fr-a1-1-presenter-conj-er'],
  ['gap fill (verbs, articles, gender)', 'fr-a1-1-presenter-gap-introductions'],
  ['sentence builder', 'fr-a1-1-presenter-sentences'],
  ['spell (accented letters)', 'fr-a1-1-presenter-spell-people'],
  ['dialogue (three scenes)', 'fr-a1-1-presenter-dialogues'],
  ['blitz', 'fr-a1-1-presenter-blitz'],
  ['flashcards (numbers)', 'fr-a1-1-nombres-flash-numbers'],
  ['quiz (digits to words)', 'fr-a1-1-nombres-quiz-digits'],
  ['memory (the tens)', 'fr-a1-1-nombres-memory-tens'],
  ['sort it (70s, 80s, 90s)', 'fr-a1-1-nombres-sort-seventies'],
  ['listen (numbers)', 'fr-a1-1-nombres-listen-numbers'],
  ['spell (hyphenated numbers)', 'fr-a1-1-nombres-spell-numbers'],
  ['gap fill (sums)', 'fr-a1-1-nombres-gap-math'],
  ['dictation (phone numbers in pairs)', 'fr-a1-1-nombres-dictation-phone'],
  ['quiz (alphabet)', 'fr-a1-1-nombres-alphabet'],
  ['dictation (a spelled name)', 'fr-a1-1-nombres-dictation-names'],
  ['gap fill (avoir for the age)', 'fr-a1-1-nombres-gap-age'],
  ['sentence builder', 'fr-a1-1-nombres-sentences'],
  ['dialogue (three scenes)', 'fr-a1-1-nombres-dialogues'],
  ['blitz', 'fr-a1-1-nombres-blitz'],
  ['flashcards (family)', 'fr-a1-1-famille-flash-family'],
  ['quiz (who is this)', 'fr-a1-1-famille-quiz-emoji'],
  ['memory (man and woman)', 'fr-a1-1-famille-memory-pairs'],
  ['listen (family words)', 'fr-a1-1-famille-listen-family'],
  ['sort it (mon, ma, mes)', 'fr-a1-1-famille-sort-possessives'],
  ['gap fill (possessives)', 'fr-a1-1-famille-gap-possessives'],
  ['gap fill (adjective agreement)', 'fr-a1-1-famille-gap-adjectives'],
  ['sort it (c’est or il est)', 'fr-a1-1-famille-sort-cest-il-est'],
  ['gap fill (plurals)', 'fr-a1-1-famille-gap-plurals'],
  ['sentence builder', 'fr-a1-1-famille-sentences'],
  ['spell (œ and a hyphen)', 'fr-a1-1-famille-spell-family'],
  ['dialogue (three scenes)', 'fr-a1-1-famille-dialogues'],
  ['blitz', 'fr-a1-1-famille-blitz'],
  ['flashcards (free time)', 'fr-a1-1-loisirs-flash-activities'],
  ['quiz (what are they doing)', 'fr-a1-1-loisirs-quiz-emoji'],
  ['listen (activity verbs)', 'fr-a1-1-loisirs-listen-activities'],
  ['conjugation (aimer, préférer)', 'fr-a1-1-loisirs-conj-likes'],
  ['gap fill (likes)', 'fr-a1-1-loisirs-gap-likes'],
  ['sort it (jouer à, jouer de, faire)', 'fr-a1-1-loisirs-sort-jouer-faire'],
  ['conjugation (faire, irregular)', 'fr-a1-1-loisirs-conj-faire'],
  ['gap fill (ne … pas)', 'fr-a1-1-loisirs-gap-negation'],
  ['sentence builder', 'fr-a1-1-loisirs-sentences'],
  ['spell (a hyphen and an accent)', 'fr-a1-1-loisirs-spell-free-time'],
  ['dialogue (three scenes)', 'fr-a1-1-loisirs-dialogues'],
  ['blitz', 'fr-a1-1-loisirs-blitz'],
  ['flashcards (food)', 'fr-a1-1-table-flash-food'],
  ['quiz (what is this food)', 'fr-a1-1-table-quiz-emoji'],
  ['listen (food and French prices)', 'fr-a1-1-table-listen-shop'],
  ['gap fill (du, de la, des)', 'fr-a1-1-table-gap-partitive'],
  ['sort it (du, de la, des)', 'fr-a1-1-table-sort-partitive'],
  ['conjugation (prendre, vouloir, boire)', 'fr-a1-1-table-conj-irregular'],
  ['conjugation (choisir, finir)', 'fr-a1-1-table-conj-ir'],
  ['gap fill (quantities)', 'fr-a1-1-table-gap-quantities'],
  ['market (French prices in euros)', 'fr-a1-1-table-market'],
  ['sentence builder', 'fr-a1-1-table-sentences'],
  ['spell (accents and a hyphen)', 'fr-a1-1-table-spell-food'],
  ['dialogue (three scenes)', 'fr-a1-1-table-dialogues'],
  ['blitz', 'fr-a1-1-table-blitz'],
  ['flashcards (places)', 'fr-a1-1-ville-flash-places'],
  ['quiz (which place)', 'fr-a1-1-ville-quiz-emoji'],
  ['listen (places)', 'fr-a1-1-ville-listen-places'],
  ['gap fill (prepositions of place)', 'fr-a1-1-ville-gap-prepositions'],
  ['sort it (au, à la, à l’, aux)', 'fr-a1-1-ville-sort-contractions'],
  ['gap fill (au, aux, du)', 'fr-a1-1-ville-gap-contractions'],
  ['conjugation (aller, irregular)', 'fr-a1-1-ville-conj-aller'],
  ['gap fill (imperative)', 'fr-a1-1-ville-gap-imperative'],
  ['quiz (understand directions)', 'fr-a1-1-ville-quiz-route'],
  ['sentence builder', 'fr-a1-1-ville-sentences'],
  ['spell (accents)', 'fr-a1-1-ville-spell-places'],
  ['dialogue (three scenes)', 'fr-a1-1-ville-dialogues'],
  ['blitz', 'fr-a1-1-ville-blitz'],
  ['flashcards (days)', 'fr-a1-1-temps-flash-days'],
  ['flashcards (months and seasons)', 'fr-a1-1-temps-flash-months'],
  ['flashcards (time and weather)', 'fr-a1-1-temps-flash-weather'],
  ['quiz (season or weather)', 'fr-a1-1-temps-quiz-emoji'],
  ['listen (days)', 'fr-a1-1-temps-listen-days'],
  ['clock (French time, read and set)', 'fr-a1-1-temps-clock-time'],
  ['flashcards (clothes and colours)', 'fr-a1-1-temps-flash-clothes'],
  ['gap fill (ce, cet, cette, ces)', 'fr-a1-1-temps-gap-demonstratives'],
  ['sort it (ce, cet, cette, ces)', 'fr-a1-1-temps-sort-demonstratives'],
  ['gap fill (near future)', 'fr-a1-1-temps-gap-futur'],
  ['sort it (adjective position)', 'fr-a1-1-temps-sort-position'],
  ['sentence builder', 'fr-a1-1-temps-sentences'],
  ['spell (days and clothes)', 'fr-a1-1-temps-spell-time'],
  ['dialogue (three scenes)', 'fr-a1-1-temps-dialogues'],
  ['blitz', 'fr-a1-1-temps-blitz'],
];

test.describe('French A1.1 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every French A1.1 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(fr11.units.map((u) => u.id).sort());
  });
});
