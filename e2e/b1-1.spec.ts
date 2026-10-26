import { expect, test } from '@playwright/test';
import a11 from '../src/content/a1-1';
import a22 from '../src/content/a2-2';
import b11 from '../src/content/b1-1';
import { activity, allActivities, captureSpeech, playPerfectly } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('B1.1 – level navigation', () => {
  test('Home lists B1.1 as available', async ({ page }) => {
    await page.goto('/');
    const card = page.getByTestId('level-b1-1');
    await expect(card).toContainText('B1.1');
    await expect(card).toContainText(`0 / ${b11.activities.length} games`);
  });

  test('Home → B1.1 → unit shows the twelve units and a guided path', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('level-b1-1').click();
    await expect(page.getByRole('heading', { name: 'B1.1', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(12);
    await page.getByTestId('unit-b1-1-glueck').click();
    await expect(page.getByRole('heading', { name: 'Glück im Alltag', level: 1 })).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      b11.activities.filter((a) => a.unitId === 'b1-1-glueck').length,
    );
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });

  test('every B1.1 unit page opens', async ({ page }) => {
    for (const unit of b11.units) {
      await page.goto(`/levels/b1-1/units/${unit.id}`);
      await expect(page.getByRole('heading', { name: unit.title, level: 1 })).toBeVisible();
    }
  });

  test('progress in B1.1 is tracked separately from the other levels', async ({ page }) => {
    await playPerfectly(page, 'b1-1-pannen-challenge');
    await page.goto('/');
    await expect(page.getByTestId('level-b1-1')).toContainText(
      `1 / ${b11.activities.length} games`,
    );
    await expect(page.getByTestId('level-a2-2')).toContainText(
      `0 / ${a22.activities.length} games`,
    );
    await expect(page.getByTestId('level-a1-1')).toContainText(
      `0 / ${a11.activities.length} games`,
    );
  });
});

test.describe('B1.1 – library', () => {
  test('the level facet filters to B1.1 and narrows the unit chips', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    await page.getByRole('button', { name: 'B1.1', exact: true }).click();
    await expect(page).toHaveURL(/lvl=b1-1/);
    await expect(page.getByTestId('result-count')).toHaveText(`${b11.activities.length} games`);
    await expect(page.getByRole('button', { name: /Glück im Alltag/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Lernen & Prüfungen/ })).toHaveCount(0);
    await expect(page.getByRole('button', { name: /In der Stadt/ })).toHaveCount(0);
  });

  test('new B1.1 grammar and topic tags filter the games', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    for (const [label, tag] of [
      [/Plusquamperfekt/, 'plusquamperfekt'],
      [/Futur I(?!I)/, 'futur-1'],
      [/Infinitive with zu/, 'infinitive-zu'],
      [/hätte gemacht/, 'konjunktiv-2-past'],
      [/Environment/, 'environment'],
    ] as const) {
      await page.getByRole('button', { name: label }).click();
      const n = allActivities.filter((a) => a.tags.includes(tag as never)).length;
      expect(n).toBeGreaterThan(3);
      await expect(page.getByTestId('result-count')).toHaveText(`${n} games`);
      await page.getByRole('button', { name: 'Clear filters' }).click();
      await expect(page.getByTestId('result-count')).toHaveText(`${allActivities.length} games`);
    }
  });

  test('a shared URL with level and skill filters plays as a queue', async ({ page }) => {
    await page.goto('/library?view=games&lvl=b1-1&skill=pronunciation');
    const games = b11.activities.filter((a) => a.tags.includes('pronunciation'));
    expect(games.length).toBe(3);
    await expect(page.getByTestId('result-count')).toHaveText(`${games.length} games`);
    await page.getByTestId('play-queue').click();
    await expect(page.getByRole('heading', { name: games[0]!.title, level: 1 })).toBeVisible();
  });
});

/**
 * Every game engine that B1.1 uses is exercised, and every B1.1 unit is played at least once.
 * (All activities are completed through the real engines in the Vitest playability suite.)
 */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards', 'b1-1-glueck-flash-luck'],
  ['quiz (emoji)', 'b1-1-unterhaltung-quiz-pictures'],
  ['quiz (word stress, pronunciation)', 'b1-1-sprachen-quiz-stress'],
  ['memory (opposites)', 'b1-1-freundschaft-memory-opposites'],
  ['listen', 'b1-1-feiern-listen-invitations'],
  ['listen (consonant clusters, pronunciation)', 'b1-1-gesundheit-listen-clusters'],
  ['spell (unscramble, type and dictation)', 'b1-1-pannen-spell-mishaps'],
  ['sentence builder', 'b1-1-umwelt-sentences'],
  ['gap fill (chips: two-part conjunctions)', 'b1-1-wohnen-gap-two-part'],
  ['gap fill (typed: brauchen … zu)', 'b1-1-beruf-gap-brauchen'],
  ['sort it (with audio: n, ng, nk)', 'b1-1-glueck-sort-n-ng-nk'],
  ['sort it (four boxes: rubbish)', 'b1-1-umwelt-sort-bins'],
  ['conjugation (Futur I)', 'b1-1-zukunft-conj-futur'],
  ['conjugation (Konjunktiv II past)', 'b1-1-pannen-conj-k2-past'],
  ['conjugation (passive with modal verbs)', 'b1-1-gesundheit-conj-passive-modal'],
  ['blitz', 'b1-1-service-blitz'],
  ['dialogue (three scenes)', 'b1-1-feiern-dialogues'],
];

test.describe('B1.1 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every B1.1 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(b11.units.map((u) => u.id).sort());
  });
});
