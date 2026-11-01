import { expect, test } from '@playwright/test';
import fr22 from '../src/content/fr-c2-2';
import { activity, captureSpeech, playPerfectly } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('French C2.2 – level navigation', () => {
  test('French Home lists C2.2 with its games', async ({ page }) => {
    await page.goto('/fr');
    const card = page.getByTestId('level-fr-c2-2');
    await expect(card).toContainText('C2.2');
    await expect(card).toContainText(`0 / ${fr22.activities.length} games`);
  });

  test('Home → C2.2 → unit shows the guided path, all inside /fr', async ({ page }) => {
    await page.goto('/fr');
    await page.getByTestId('level-fr-c2-2').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-c2-2$/);
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(fr22.units.length);
    await page.getByTestId('unit-fr-c2-2-arts').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-c2-2\/units\/fr-c2-2-arts$/);
    await expect(
      page.getByRole('heading', { name: 'Arts et expositions', level: 1 }),
    ).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      fr22.activities.filter((x) => x.unitId === 'fr-c2-2-arts').length,
    );
  });

  test('the unit has a full grammar lesson page', async ({ page }) => {
    await page.goto('/fr/library/grammar/fr-c22-participe-present');
    await expect(page.getByRole('main')).toContainText(
      'Participe présent, gérondif or adjectif verbal?',
    );
  });
});

test.describe('French C2.2 – grammar hints', () => {
  test('a wrong -ant form explains why and shows the French mini lesson', async ({ page }) => {
    const a = activity('fr-c2-2-arts-gap-participes');
    if (a.gameType !== 'gapfill') throw new Error('expected a gap fill');
    await page.goto(`/fr/play/${a.id}?seed=1`);
    await page.getByTestId('start').click();
    const squash = (t: string) => t.replace(/\s+/g, ' ').trim();
    const shown = squash(await page.getByTestId('sentence').innerText());
    const item = a.config.items.find(
      (i) => i.options && squash(i.text.replace('___', '…')) === shown,
    )!;
    const wrong = item.options!.find((o) => o !== item.answer)!;
    await page.getByRole('button', { name: wrong, exact: true }).click();
    await page.getByTestId('why').click();
    const lesson = page.getByTestId('mini-lesson');
    await expect(lesson).toHaveAttribute('data-lesson', 'fr-c22-participe-present');
    await expect(lesson.locator('li').first()).toHaveAttribute('lang', 'fr');
  });
});

/** Every engine that unit 1 uses is exercised through the real UI; Vitest plays all activities. */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards', 'fr-c2-2-arts-flash-monde'],
  ['quiz (pictures)', 'fr-c2-2-arts-quiz-pictures'],
  ['listen', 'fr-c2-2-arts-listen-juger'],
  ['memory', 'fr-c2-2-arts-memory-juger'],
  ['spell (accents, dictation)', 'fr-c2-2-arts-spell-monde'],
  ['gap fill (chips and typed)', 'fr-c2-2-arts-gap-participes'],
  ['sort it (-ant forms)', 'fr-c2-2-arts-sort-forms'],
  ['quiz (rewrite with -ant)', 'fr-c2-2-arts-quiz-transform'],
  ['sentence builder', 'fr-c2-2-arts-sentences'],
  ['dialogue (three scenes)', 'fr-c2-2-arts-dialogues'],
  ['blitz', 'fr-c2-2-arts-blitz'],
  ['challenge', 'fr-c2-2-arts-challenge'],
  ['flashcards (theatre)', 'fr-c2-2-litterature-flash-scene'],
  ['quiz (books and stage)', 'fr-c2-2-litterature-quiz-pictures'],
  ['listen (theatre)', 'fr-c2-2-litterature-listen-scene'],
  ['memory (book world)', 'fr-c2-2-litterature-memory-livre'],
  ['spell (dictation)', 'fr-c2-2-litterature-spell-livre'],
  ['gap fill (participle agreement)', 'fr-c2-2-litterature-gap-accord'],
  ['sort it (agreement or not)', 'fr-c2-2-litterature-sort-accord'],
  ['quiz (pick the participle)', 'fr-c2-2-litterature-quiz-participes'],
  ['sentence builder', 'fr-c2-2-litterature-sentences'],
  ['dialogue (three scenes)', 'fr-c2-2-litterature-dialogues'],
  ['blitz', 'fr-c2-2-litterature-blitz'],
  ['challenge', 'fr-c2-2-litterature-challenge'],
  ['flashcards (film language)', 'fr-c2-2-cinema-flash-critique'],
  ['quiz (behind the camera)', 'fr-c2-2-cinema-quiz-pictures'],
  ['listen (film terms)', 'fr-c2-2-cinema-listen-critique'],
  ['memory (film terms)', 'fr-c2-2-cinema-memory-critique'],
  ['spell (dictation)', 'fr-c2-2-cinema-spell-film'],
  ['gap fill (passive)', 'fr-c2-2-cinema-gap-passif'],
  ['sort it (four ways to say it)', 'fr-c2-2-cinema-sort-formes'],
  ['quiz (change the voice)', 'fr-c2-2-cinema-quiz-transform'],
  ['sentence builder', 'fr-c2-2-cinema-sentences'],
  ['dialogue (three scenes)', 'fr-c2-2-cinema-dialogues'],
  ['blitz', 'fr-c2-2-cinema-blitz'],
  ['challenge', 'fr-c2-2-cinema-challenge'],
  ['flashcards (history)', 'fr-c2-2-patrimoine-flash-histoire'],
  ['quiz (sites and ruins)', 'fr-c2-2-patrimoine-quiz-pictures'],
  ['listen (history words)', 'fr-c2-2-patrimoine-listen-histoire'],
  ['memory (history words)', 'fr-c2-2-patrimoine-memory-histoire'],
  ['spell (dictation)', 'fr-c2-2-patrimoine-spell-sites'],
  ['gap fill (relative pronouns)', 'fr-c2-2-patrimoine-gap-relatifs'],
  ['sort it (which relative)', 'fr-c2-2-patrimoine-sort-relatifs'],
  ['quiz (join the sentences)', 'fr-c2-2-patrimoine-quiz-join'],
  ['sentence builder', 'fr-c2-2-patrimoine-sentences'],
  ['dialogue (three scenes)', 'fr-c2-2-patrimoine-dialogues'],
  ['blitz', 'fr-c2-2-patrimoine-blitz'],
  ['challenge', 'fr-c2-2-patrimoine-challenge'],
];

test.describe('French C2.2 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every unit built so far', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(fr22.units.map((u) => u.id).sort());
  });
});
