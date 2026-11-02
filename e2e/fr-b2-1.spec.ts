import { expect, test } from '@playwright/test';
import frB21 from '../src/content/fr-b2-1';
import { activity, captureSpeech, playPerfectly, SEED } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('French B2.1 – level navigation', () => {
  test('French Home lists B2.1 with its games', async ({ page }) => {
    await page.goto('/fr');
    const card = page.getByTestId('level-fr-b2-1');
    await expect(card).toContainText('B2.1');
    await expect(card).toContainText(`0 / ${frB21.activities.length} games`);
  });

  test('Home → B2.1 → unit shows the units and a guided path, all inside /fr', async ({ page }) => {
    await page.goto('/fr');
    await page.getByTestId('level-fr-b2-1').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-b2-1$/);
    await expect(page.getByRole('heading', { name: 'B2.1', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(frB21.units.length);
    await page.getByTestId('unit-fr-b2-1-identite').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-b2-1\/units\/fr-b2-1-identite$/);
    await expect(page.getByRole('heading', { name: 'Identités', level: 1 })).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      frB21.activities.filter((x) => x.unitId === 'fr-b2-1-identite').length,
    );
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });
});

test.describe('French B2.1 – grammar hints', () => {
  test('a wrong tense explains why and shows the French mini lesson', async ({ page }) => {
    const a = activity('fr-b2-1-identite-gap-imparfait-pc');
    if (a.gameType !== 'gapfill') throw new Error('expected a gap fill');
    await page.goto(`/fr/play/${a.id}?seed=${SEED}`);
    await page.getByTestId('start').click();
    const squash = (t: string) => t.replace(/\s+/g, ' ').trim();
    const shown = squash(await page.getByTestId('sentence').innerText());
    const item = a.config.items.find((i) => squash(i.text.replace('___', '…')) === shown)!;
    const wrong = item.options!.find((o) => o !== item.answer && item.why?.[o])!;
    await page.getByRole('button', { name: wrong, exact: true }).click();
    await page.getByTestId('why').click();
    await expect(page.getByTestId('mistake-why')).toContainText(item.why![wrong]!);
    const lesson = page.getByTestId('mini-lesson');
    await expect(lesson).toHaveAttribute('data-lesson', 'fr-imparfait-pc');
    await expect(lesson.locator('li').first()).toHaveAttribute('lang', 'fr');
  });
});

/** Every engine that the units use is exercised through the real UI (the Vitest suite plays all of them). */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards', 'fr-b2-1-identite-flash-identity'],
  ['quiz', 'fr-b2-1-identite-quiz-meaning'],
  ['memory', 'fr-b2-1-identite-memory-traits'],
  ['listen', 'fr-b2-1-identite-listen-identity'],
  ['gap fill (imparfait or passé composé)', 'fr-b2-1-identite-gap-imparfait-pc'],
  ['sort it (three past tenses)', 'fr-b2-1-identite-sort-tenses'],
  ['conjugation (imparfait, plus-que-parfait)', 'fr-b2-1-identite-conj-pasts'],
  ['gap fill (plus-que-parfait)', 'fr-b2-1-identite-gap-plus-que-parfait'],
  ['sentence builder', 'fr-b2-1-identite-sentences'],
  ['spell', 'fr-b2-1-identite-spell-identity'],
  ['quiz (understand the story)', 'fr-b2-1-identite-quiz-text'],
  ['dialogue (three scenes)', 'fr-b2-1-identite-dialogues'],
  ['blitz', 'fr-b2-1-identite-blitz'],
  ['flashcards', 'fr-b2-1-parcours-flash-a'],
  ['gap fill (participle agreement)', 'fr-b2-1-parcours-gap-agreement'],
  ['gap fill (time conjunctions)', 'fr-b2-1-parcours-gap-time'],
  ['sort it (indicative or subjunctive)', 'fr-b2-1-parcours-sort-mood'],
  ['sentence builder', 'fr-b2-1-parcours-sentences'],
  ['dialogue', 'fr-b2-1-parcours-dialogues'],
  ['blitz', 'fr-b2-1-parcours-blitz'],
  ['quiz', 'fr-b2-1-parcours-challenge'],
  ['gap fill (conditional)', 'fr-b2-1-sante-gap-conditional'],
  ['gap fill (ways to advise)', 'fr-b2-1-sante-gap-advice'],
  ['sort it (soft or firm)', 'fr-b2-1-sante-sort-advice'],
  ['conjugation (conditional)', 'fr-b2-1-sante-conj-conditional'],
  ['sentence builder', 'fr-b2-1-sante-sentences'],
  ['dialogue', 'fr-b2-1-sante-dialogues'],
  ['blitz', 'fr-b2-1-sante-blitz'],
  ['quiz', 'fr-b2-1-sante-quiz-text'],
  ['gap fill (subjunctive forms)', 'fr-b2-1-doute-gap-forms'],
  ['gap fill (sure or not sure)', 'fr-b2-1-doute-gap-mood'],
  ['sort it (indicative or subjunctive)', 'fr-b2-1-doute-sort-mood'],
  ['conjugation (subjunctive)', 'fr-b2-1-doute-conj-subjunctive'],
  ['sentence builder', 'fr-b2-1-doute-sentences'],
  ['dialogue', 'fr-b2-1-doute-dialogues'],
  ['blitz', 'fr-b2-1-doute-blitz'],
  ['quiz', 'fr-b2-1-doute-challenge'],
  ['gap fill (que or de)', 'fr-b2-1-sentiments-gap-infinitive'],
  ['gap fill (past subjunctive)', 'fr-b2-1-sentiments-gap-past-subjunctive'],
  ['sort it (now or before)', 'fr-b2-1-sentiments-sort-time'],
  ['conjugation (past subjunctive)', 'fr-b2-1-sentiments-conj-past-subjunctive'],
  ['sentence builder', 'fr-b2-1-sentiments-sentences'],
  ['dialogue', 'fr-b2-1-sentiments-dialogues'],
  ['blitz', 'fr-b2-1-sentiments-blitz'],
  ['quiz', 'fr-b2-1-sentiments-challenge'],
  ['gap fill (cause conjunctions)', 'fr-b2-1-migrations-gap-conj'],
  ['gap fill (cause prepositions)', 'fr-b2-1-migrations-gap-prep'],
  ['sort it (conjunction or preposition)', 'fr-b2-1-migrations-sort-kind'],
  ['sentence builder', 'fr-b2-1-migrations-sentences'],
  ['dialogue', 'fr-b2-1-migrations-dialogues'],
  ['blitz', 'fr-b2-1-migrations-blitz'],
  ['quiz', 'fr-b2-1-migrations-challenge'],
  ['gap fill (connectors of purpose)', 'fr-b2-1-demarches-gap-connector'],
  ['gap fill (subjunctive after pour que)', 'fr-b2-1-demarches-gap-form'],
  ['sort it (one subject or two)', 'fr-b2-1-demarches-sort-subject'],
  ['sentence builder', 'fr-b2-1-demarches-sentences'],
  ['dialogue', 'fr-b2-1-demarches-dialogues'],
  ['blitz', 'fr-b2-1-demarches-blitz'],
  ['quiz', 'fr-b2-1-demarches-challenge'],
  ['gap fill (consequence)', 'fr-b2-1-cause-gap-consequence'],
  ['gap fill (verbs of cause)', 'fr-b2-1-cause-gap-verbs'],
  ['sort it (cause or result)', 'fr-b2-1-cause-sort-side'],
  ['sentence builder', 'fr-b2-1-cause-sentences'],
  ['dialogue', 'fr-b2-1-cause-dialogues'],
  ['blitz', 'fr-b2-1-cause-blitz'],
  ['quiz', 'fr-b2-1-cause-challenge'],
  ['gap fill (passé simple)', 'fr-b2-1-recit-gap-simple'],
  ['gap fill (passé antérieur)', 'fr-b2-1-recit-gap-anterior'],
  ['sort it (which tense)', 'fr-b2-1-recit-sort-tense'],
  ['conjugation (passé simple)', 'fr-b2-1-recit-conj-simple'],
  ['sentence builder', 'fr-b2-1-recit-sentences'],
  ['dialogue', 'fr-b2-1-recit-dialogues'],
  ['blitz', 'fr-b2-1-recit-blitz'],
  ['quiz', 'fr-b2-1-recit-challenge'],
];

test.describe('French B2.1 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the games above cover every French B2.1 unit that exists so far', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(frB21.units.map((u) => u.id).sort());
  });
});
