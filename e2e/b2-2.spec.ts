import { expect, test } from '@playwright/test';
import a11 from '../src/content/a1-1';
import b12 from '../src/content/b1-2';
import b22 from '../src/content/b2-2';
import { activity, allActivities, captureSpeech, playPerfectly, SEED } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('B2.2 – level navigation', () => {
  test('Home lists B2.2 as available', async ({ page }) => {
    await page.goto('/');
    const card = page.getByTestId('level-b2-2');
    await expect(card).toContainText('B2.2');
    await expect(card).toContainText(`0 / ${b22.activities.length} games`);
  });

  test('Home → B2.2 → unit shows the twelve units and a guided path', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('level-b2-2').click();
    await expect(page.getByRole('heading', { name: 'B2.2', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(12);
    await page.getByTestId('unit-b2-2-beziehungen').click();
    await expect(
      page.getByRole('heading', { name: 'Beziehungen & Vielfalt', level: 1 }),
    ).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      b22.activities.filter((a) => a.unitId === 'b2-2-beziehungen').length,
    );
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });

  test('every B2.2 unit page opens', async ({ page }) => {
    for (const unit of b22.units) {
      await page.goto(`/levels/b2-2/units/${unit.id}`);
      await expect(page.getByRole('heading', { name: unit.title, level: 1 })).toBeVisible();
    }
  });

  test('progress in B2.2 is tracked separately from the other levels', async ({ page }) => {
    await playPerfectly(page, 'b2-2-netz-challenge');
    await page.goto('/');
    await expect(page.getByTestId('level-b2-2')).toContainText(
      `1 / ${b22.activities.length} games`,
    );
    await expect(page.getByTestId('level-b1-2')).toContainText(
      `0 / ${b12.activities.length} games`,
    );
    await expect(page.getByTestId('level-a1-1')).toContainText(
      `0 / ${a11.activities.length} games`,
    );
  });
});

test.describe('B2.2 – library', () => {
  test('the level facet filters to B2.2 and narrows the unit chips', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    await page.getByRole('button', { name: 'B2.2', exact: true }).click();
    await expect(page).toHaveURL(/lvl=b2-2/);
    await expect(page.getByTestId('result-count')).toHaveText(`${b22.activities.length} games`);
    await expect(page.getByRole('button', { name: /Beziehungen & Vielfalt/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Unter Kollegen/ })).toHaveCount(0);
  });

  test('new B2.2 grammar and topic tags filter the games', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    for (const [label, tag] of [
      [/Reported speech \(Konjunktiv I\)/, 'konjunktiv-1'],
      [/Assumptions with modal verbs/, 'modal-assumption'],
      [/Nouns with prepositions/, 'noun-prepositions'],
      [/lassen \/ sein \+ zu/, 'passive-alternatives'],
      [/Media, internet & law/, 'media-law'],
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
    await page.goto('/library?view=games&lvl=b2-2&skill=spelling');
    const games = b22.activities.filter((a) => a.tags.includes('spelling'));
    expect(games.length).toBe(12);
    await expect(page.getByTestId('result-count')).toHaveText(`${games.length} games`);
    await page.getByTestId('play-queue').click();
    await expect(page.getByRole('heading', { name: games[0]!.title, level: 1 })).toBeVisible();
  });
});

test.describe('B2.2 – grammar hints', () => {
  test('a wrong state-passive answer explains why and shows the mini lesson', async ({ page }) => {
    const a = activity('b2-2-kunst-gap-passive');
    if (a.gameType !== 'gapfill') throw new Error('expected a gap fill');
    await page.goto(`/play/${a.id}?seed=${SEED}`);
    await page.getByTestId('start').click();
    const squash = (t: string) => t.replace(/\s+/g, ' ').trim();
    const shown = squash(await page.getByTestId('sentence').innerText());
    const item = a.config.items.find((i) => squash(i.text.replace('___', '…')) === shown)!;
    const wrong = item.options!.find((o) => o !== item.answer)!;
    await page.getByRole('button', { name: wrong, exact: true }).click();
    await expect(page.getByTestId('mistake-why')).toContainText(item.why![wrong]!);
    await expect(page.getByTestId('mini-lesson')).toHaveAttribute('data-lesson', 'state-passive');
  });
});

/**
 * Every game engine that B2.2 uses is exercised, and every B2.2 unit is played at least once.
 * (All activities are completed through the real engines in the Vitest playability suite.)
 */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards', 'b2-2-beziehungen-flash-bonds'],
  ['quiz (emoji)', 'b2-2-ernaehrung-quiz-pictures'],
  ['quiz (words)', 'b2-2-studium-quiz-words'],
  ['memory', 'b2-2-service-memory-claims'],
  ['listen', 'b2-2-gesundheit-listen-talk'],
  ['spell (unscramble, type and dictation)', 'b2-2-sprache-spell-words'],
  ['sentence builder', 'b2-2-wirtschaft-sentences'],
  ['gap fill (stative passive)', 'b2-2-kunst-gap-passive'],
  ['gap fill (assumptions with typed answer)', 'b2-2-netz-gap-modal-assumption'],
  ['gap fill (perfect with double infinitive)', 'b2-2-geschichte-gap-double-infinitive'],
  ['gap fill (adjective prepositions)', 'b2-2-stadt-gap-adjective-prepositions'],
  ['sort it (Konjunktiv I or II)', 'b2-2-druck-sort-k1-k2'],
  ['conjugation (Konjunktiv I)', 'b2-2-druck-conj-konjunktiv-1'],
  ['blitz', 'b2-2-stadt-blitz'],
  ['dialogue (two scenes)', 'b2-2-druck-dialogues'],
];

test.describe('B2.2 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every B2.2 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(b22.units.map((u) => u.id).sort());
  });
});
