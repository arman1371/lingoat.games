import { expect, test } from '@playwright/test';
import a11 from '../src/content/a1-1';
import b11 from '../src/content/b1-1';
import b12 from '../src/content/b1-2';
import { activity, allActivities, captureSpeech, playPerfectly, SEED } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('B1.2 – level navigation', () => {
  test('Home lists B1.2 as available', async ({ page }) => {
    await page.goto('/');
    const card = page.getByTestId('level-b1-2');
    await expect(card).toContainText('B1.2');
    await expect(card).toContainText(`0 / ${b12.activities.length} games`);
  });

  test('Home → B1.2 → unit shows the twelve units and a guided path', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('level-b1-2').click();
    await expect(page.getByRole('heading', { name: 'B1.2', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(12);
    await page.getByTestId('unit-b1-2-kollegen').click();
    await expect(page.getByRole('heading', { name: 'Unter Kollegen', level: 1 })).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      b12.activities.filter((a) => a.unitId === 'b1-2-kollegen').length,
    );
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });

  test('every B1.2 unit page opens', async ({ page }) => {
    for (const unit of b12.units) {
      await page.goto(`/levels/b1-2/units/${unit.id}`);
      await expect(page.getByRole('heading', { name: unit.title, level: 1 })).toBeVisible();
    }
  });

  test('progress in B1.2 is tracked separately from the other levels', async ({ page }) => {
    await playPerfectly(page, 'b1-2-diskussion-challenge');
    await page.goto('/');
    await expect(page.getByTestId('level-b1-2')).toContainText(
      `1 / ${b12.activities.length} games`,
    );
    await expect(page.getByTestId('level-b1-1')).toContainText(
      `0 / ${b11.activities.length} games`,
    );
    await expect(page.getByTestId('level-a1-1')).toContainText(
      `0 / ${a11.activities.length} games`,
    );
  });
});

test.describe('B1.2 – library', () => {
  test('the level facet filters to B1.2 and narrows the unit chips', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    await page.getByRole('button', { name: 'B1.2', exact: true }).click();
    await expect(page).toHaveURL(/lvl=b1-2/);
    await expect(page.getByTestId('result-count')).toHaveText(`${b12.activities.length} games`);
    await expect(page.getByRole('button', { name: /Unter Kollegen/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Glück im Alltag/ })).toHaveCount(0);
  });

  test('new B1.2 grammar and topic tags filter the games', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    for (const [label, tag] of [
      [/Passive: wurde/, 'passive-past'],
      [/Modal particles/, 'modal-particles'],
      [/indem \/ ohne dass/, 'indem-ohne-dass'],
      [/Participles as adjectives/, 'participles-as-adjectives'],
      [/Volunteering/, 'volunteering'],
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
    await page.goto('/library?view=games&lvl=b1-2&skill=pronunciation');
    const games = b12.activities.filter((a) => a.tags.includes('pronunciation'));
    expect(games.length).toBe(2);
    await expect(page.getByTestId('result-count')).toHaveText(`${games.length} games`);
    await page.getByTestId('play-queue').click();
    await expect(page.getByRole('heading', { name: games[0]!.title, level: 1 })).toBeVisible();
  });
});

test.describe('B1.2 – grammar hints', () => {
  test('a wrong modal particle explains why and shows the mini lesson', async ({ page }) => {
    const a = activity('b1-2-regeln-gap-particles');
    if (a.gameType !== 'gapfill') throw new Error('expected a gap fill');
    await page.goto(`/play/${a.id}?seed=${SEED}`);
    await page.getByTestId('start').click();
    const squash = (t: string) => t.replace(/\s+/g, ' ').trim();
    const shown = squash(await page.getByTestId('sentence').innerText());
    const item = a.config.items.find((i) => squash(i.text.replace('___', '…')) === shown)!;
    const wrong = item.options!.find((o) => o !== item.answer)!;
    await page.getByRole('button', { name: wrong, exact: true }).click();
    await expect(page.getByTestId('mistake-why')).toContainText(item.why![wrong]!);
    await expect(page.getByTestId('mini-lesson')).toHaveAttribute('data-lesson', 'modal-particles');
  });
});

/**
 * Every game engine that B1.2 uses is exercised, and every B1.2 unit is played at least once.
 * (All activities are completed through the real engines in the Vitest playability suite.)
 */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards', 'b1-2-kollegen-flash-office'],
  ['quiz (emoji)', 'b1-2-politik-quiz-pictures'],
  ['quiz (compound stress, pronunciation)', 'b1-2-heimat-quiz-stress'],
  ['memory (city and country)', 'b1-2-stadt-land-memory-city-country'],
  ['memory (participles)', 'b1-2-weiterbildung-memory-participles'],
  ['listen', 'b1-2-engagement-listen-projects'],
  ['spell (unscramble, type and dictation)', 'b1-2-geschichte-spell-history'],
  ['sentence builder', 'b1-2-kunst-sentences'],
  ['gap fill (chips: modal particles)', 'b1-2-regeln-gap-particles'],
  ['gap fill (generated adjective endings + typed)', 'b1-2-konsum-gap-partizip'],
  ['sort it (with audio: sentence melody)', 'b1-2-digital-sort-melody'],
  ['sort it (three boxes: presentation)', 'b1-2-diskussion-sort-presentation'],
  ['conjugation (passive Präteritum and Perfekt)', 'b1-2-geschichte-conj-passive-past'],
  ['blitz', 'b1-2-kollegen-blitz'],
  ['dialogue (three scenes)', 'b1-2-diskussion-dialogues'],
];

test.describe('B1.2 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every B1.2 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(b12.units.map((u) => u.id).sort());
  });
});
