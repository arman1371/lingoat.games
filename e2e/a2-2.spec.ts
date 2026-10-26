import { expect, test } from '@playwright/test';
import a11 from '../src/content/a1-1';
import a12 from '../src/content/a1-2';
import a21 from '../src/content/a2-1';
import a22 from '../src/content/a2-2';
import { activity, allActivities, captureSpeech, playPerfectly } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('A2.2 – level navigation', () => {
  test('Home lists A2.2 as available', async ({ page }) => {
    await page.goto('/');
    const card = page.getByTestId('level-a2-2');
    await expect(card).toContainText('A2.2');
    await expect(card).toContainText(`0 / ${a22.activities.length} games`);
  });

  test('Home → A2.2 → unit shows the twelve units and a guided path', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('level-a2-2').click();
    await expect(page.getByRole('heading', { name: 'A2.2', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(12);
    await page.getByTestId('unit-a2-2-lernen').click();
    await expect(page.getByRole('heading', { name: 'Lernen & Prüfungen', level: 1 })).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      a22.activities.filter((a) => a.unitId === 'a2-2-lernen').length,
    );
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });

  test('every A2.2 unit page opens', async ({ page }) => {
    for (const unit of a22.units) {
      await page.goto(`/levels/a2-2/units/${unit.id}`);
      await expect(page.getByRole('heading', { name: unit.title, level: 1 })).toBeVisible();
    }
  });

  test('progress in A2.2 is tracked separately from the other levels', async ({ page }) => {
    await playPerfectly(page, 'a2-2-bank-challenge');
    await page.goto('/');
    await expect(page.getByTestId('level-a2-2')).toContainText(
      `1 / ${a22.activities.length} games`,
    );
    await expect(page.getByTestId('level-a2-1')).toContainText(
      `0 / ${a21.activities.length} games`,
    );
    await expect(page.getByTestId('level-a1-2')).toContainText(
      `0 / ${a12.activities.length} games`,
    );
    await expect(page.getByTestId('level-a1-1')).toContainText(
      `0 / ${a11.activities.length} games`,
    );
  });
});

test.describe('A2.2 – library', () => {
  test('the level facet filters to A2.2 and narrows the unit chips', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    await page.getByRole('button', { name: 'A2.2', exact: true }).click();
    await expect(page).toHaveURL(/lvl=a2-2/);
    await expect(page.getByTestId('result-count')).toHaveText(`${a22.activities.length} games`);
    await expect(page.getByRole('button', { name: /Lernen & Prüfungen/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Online & Apps/ })).toHaveCount(0);
    await expect(page.getByRole('button', { name: /In der Stadt/ })).toHaveCount(0);
  });

  test('new A2.2 grammar tags and the pronunciation skill filter the games', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    for (const [label, tag] of [
      [/Konjunktiv II/, 'konjunktiv-2'],
      [/Relative clauses/, 'relative-clauses'],
      [/Passive voice/, 'passive'],
      [/Pronunciation/, 'pronunciation'],
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
    await page.goto('/library?view=games&lvl=a2-2&skill=pronunciation');
    const games = a22.activities.filter((a) => a.tags.includes('pronunciation'));
    expect(games.length).toBe(4);
    await expect(page.getByTestId('result-count')).toHaveText(`${games.length} games`);
    await page.getByTestId('play-queue').click();
    await expect(page.getByRole('heading', { name: games[0]!.title, level: 1 })).toBeVisible();
  });
});

/**
 * Every game engine that A2.2 uses is exercised, and every A2.2 unit is played at least once.
 * (All activities are completed through the real engines in the Vitest playability suite.)
 */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards', 'a2-2-lernen-flash-problems'],
  ['quiz (emoji)', 'a2-2-kunst-quiz-pictures'],
  ['quiz (sentence stress, pronunciation)', 'a2-2-lernen-quiz-stress'],
  ['quiz (rise or fall, pronunciation)', 'a2-2-sport-quiz-intonation'],
  ['listen', 'a2-2-post-listen-post'],
  ['listen (r or l, pronunciation)', 'a2-2-reisen-listen-r-l'],
  ['spell (unscramble, type and dictation)', 'a2-2-bank-spell-bank'],
  ['sentence builder', 'a2-2-bank-sentences'],
  ['gap fill (chips: adjective endings)', 'a2-2-kunst-gap-adjectives-1'],
  ['gap fill (typed: um … zu)', 'a2-2-bank-gap-um-zu'],
  ['gap fill (typed: Präteritum)', 'a2-2-leben-gap-praeteritum-irregular'],
  ['sort it (three boxes)', 'a2-2-lernen-sort-connectors'],
  ['sort it (four boxes)', 'a2-2-werbung-sort-wordformation'],
  ['sort it (with audio: final b, d, g)', 'a2-2-feste-sort-final-sounds'],
  ['conjugation (passive)', 'a2-2-post-conj-post'],
  ['conjugation (Konjunktiv II)', 'a2-2-wuensche-conj-wishes'],
  ['blitz', 'a2-2-nachbarn-blitz'],
  ['dialogue (four scenes)', 'a2-2-arbeit-dialogues-work'],
];

test.describe('A2.2 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every A2.2 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(a22.units.map((u) => u.id).sort());
  });
});
