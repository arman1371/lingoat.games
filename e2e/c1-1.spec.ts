import { expect, test } from '@playwright/test';
import a11 from '../src/content/a1-1';
import b12 from '../src/content/b1-2';
import c11 from '../src/content/c1-1';
import { activity, allActivities, captureSpeech, playPerfectly, SEED } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('C1.1 – level navigation', () => {
  test('Home lists C1.1 as available', async ({ page }) => {
    await page.goto('/');
    const card = page.getByTestId('level-c1-1');
    await expect(card).toContainText('C1.1');
    await expect(card).toContainText(`0 / ${c11.activities.length} games`);
  });

  test('Home → C1.1 → unit shows the eleven units and a guided path', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('level-c1-1').click();
    await expect(page.getByRole('heading', { name: 'C1.1', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(11);
    await page.getByTestId('unit-c1-1-zeit').click();
    await expect(page.getByRole('heading', { name: 'Zeit und Tempo', level: 1 })).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(c11.activities.filter((a) => a.unitId === 'c1-1-zeit').length);
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });

  test('every C1.1 unit page opens', async ({ page }) => {
    for (const unit of c11.units) {
      await page.goto(`/levels/c1-1/units/${unit.id}`);
      await expect(page.getByRole('heading', { name: unit.title, level: 1 })).toBeVisible();
    }
  });

  test('progress in C1.1 is tracked separately from the other levels', async ({ page }) => {
    await playPerfectly(page, 'c1-1-gesellschaft-challenge');
    await page.goto('/');
    await expect(page.getByTestId('level-c1-1')).toContainText(
      `1 / ${c11.activities.length} games`,
    );
    await expect(page.getByTestId('level-b1-2')).toContainText(
      `0 / ${b12.activities.length} games`,
    );
    await expect(page.getByTestId('level-a1-1')).toContainText(
      `0 / ${a11.activities.length} games`,
    );
  });
});

test.describe('C1.1 – library', () => {
  test('the level facet filters to C1.1 and narrows the unit chips', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    await page.getByRole('button', { name: 'C1.1', exact: true }).click();
    await expect(page).toHaveURL(/lvl=c1-1/);
    await expect(page.getByTestId('result-count')).toHaveText(`${c11.activities.length} games`);
    await expect(page.getByRole('button', { name: /Zeit und Tempo/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Unter Kollegen/ })).toHaveCount(0);
  });

  test('new C1.1 grammar tags filter the games', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    for (const [label, tag] of [
      [/Reported speech/, 'konjunktiv-1'],
      [/Subjective modal verbs/, 'subjective-modals'],
      [/Nominal style/, 'nominal-style'],
      [/sein … zu \/ sich lassen/, 'modal-alternatives'],
      [/Noun-verb phrases/, 'noun-verb-phrases'],
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
    await page.goto('/library?view=games&lvl=c1-1&skill=listening');
    const games = c11.activities.filter((a) => a.tags.includes('listening'));
    expect(games.length).toBeGreaterThan(5);
    await expect(page.getByTestId('result-count')).toHaveText(`${games.length} games`);
    await page.getByTestId('play-queue').click();
    await expect(page.getByRole('heading', { name: games[0]!.title, level: 1 })).toBeVisible();
  });
});

test.describe('C1.1 – grammar hints', () => {
  test('a wrong modal alternative explains why and shows the mini lesson', async ({ page }) => {
    const a = activity('c1-1-gesellschaft-gap-modal');
    if (a.gameType !== 'gapfill') throw new Error('expected a gap fill');
    await page.goto(`/play/${a.id}?seed=${SEED}`);
    await page.getByTestId('start').click();
    const squash = (t: string) => t.replace(/\s+/g, ' ').trim();
    const shown = squash(await page.getByTestId('sentence').innerText());
    const item = a.config.items.find((i) => squash(i.text.replace('___', '…')) === shown)!;
    const wrong = item.options!.find((o) => o !== item.answer)!;
    await page.getByRole('button', { name: wrong, exact: true }).click();
    await expect(page.getByTestId('mistake-why')).toContainText(item.why![wrong]!);
    await expect(page.getByTestId('mini-lesson')).toHaveAttribute(
      'data-lesson',
      'modal-alternatives',
    );
  });
});

/**
 * Every game engine that C1.1 uses is exercised, and every C1.1 unit is played at least once.
 * (All activities are completed through the real engines in the Vitest playability suite.)
 */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards', 'c1-1-zeit-flash-tempo'],
  ['quiz', 'c1-1-studium-quiz-meaning'],
  ['memory', 'c1-1-konsum-memory-opposites'],
  ['listen', 'c1-1-studium-listen-study'],
  ['spell (unscramble, type and dictation)', 'c1-1-wirtschaft-spell-economy'],
  ['sentence builder', 'c1-1-lebenswege-sentences'],
  ['gap fill (chips: es)', 'c1-1-arbeit-gap-es'],
  ['gap fill (chips + why: modal alternatives)', 'c1-1-gesellschaft-gap-modal'],
  ['gap fill (connectors)', 'c1-1-zeit-gap-connectors'],
  ['sort it (verb position)', 'c1-1-tourismus-sort-verb-position'],
  ['conjugation (Konjunktiv I)', 'c1-1-sprache-conj-k1'],
  ['conjugation (Konjunktiv II of modals)', 'c1-1-digital-conj-k2-modals'],
  ['blitz', 'c1-1-gesellschaft-blitz'],
  ['dialogue (two scenes)', 'c1-1-manieren-dialogues'],
];

test.describe('C1.1 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every C1.1 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(c11.units.map((u) => u.id).sort());
  });
});
