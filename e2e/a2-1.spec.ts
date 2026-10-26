import { expect, test } from '@playwright/test';
import a11 from '../src/content/a1-1';
import a12 from '../src/content/a1-2';
import a21 from '../src/content/a2-1';
import { activity, allActivities, captureSpeech, playPerfectly } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('A2.1 – level navigation', () => {
  test('Home lists A2.1 as available', async ({ page }) => {
    await page.goto('/');
    const card = page.getByTestId('level-a2-1');
    await expect(card).toContainText('A2.1');
    await expect(card).toContainText(`0 / ${a21.activities.length} games`);
  });

  test('Home → A2.1 → unit shows the ten units and a guided path', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('level-a2-1').click();
    await expect(page.getByRole('heading', { name: 'A2.1', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(10);
    await page.getByTestId('unit-a2-1-online').click();
    await expect(page.getByRole('heading', { name: 'Online & Apps', level: 1 })).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      a21.activities.filter((a) => a.unitId === 'a2-1-online').length,
    );
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });

  test('every A2.1 unit page opens', async ({ page }) => {
    for (const unit of a21.units) {
      await page.goto(`/levels/a2-1/units/${unit.id}`);
      await expect(page.getByRole('heading', { name: unit.title, level: 1 })).toBeVisible();
    }
  });

  test('progress in A2.1 is tracked separately from A1.1 and A1.2', async ({ page }) => {
    await playPerfectly(page, 'a2-1-wetter-challenge');
    await page.goto('/');
    await expect(page.getByTestId('level-a2-1')).toContainText(
      `1 / ${a21.activities.length} games`,
    );
    await expect(page.getByTestId('level-a1-2')).toContainText(
      `0 / ${a12.activities.length} games`,
    );
    await expect(page.getByTestId('level-a1-1')).toContainText(
      `0 / ${a11.activities.length} games`,
    );
  });
});

test.describe('A2.1 – library', () => {
  test('the level facet filters to A2.1 and narrows the unit chips', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    await page.getByRole('button', { name: 'A2.1', exact: true }).click();
    await expect(page).toHaveURL(/lvl=a2-1/);
    await expect(page.getByTestId('result-count')).toHaveText(`${a21.activities.length} games`);
    await expect(page.getByRole('button', { name: /Online & Apps/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /In der Stadt/ })).toHaveCount(0);
    await expect(page.getByRole('button', { name: /Hallo & Tschüss/ })).toHaveCount(0);
  });

  test('new A2.1 grammar tags filter the games', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    for (const [label, tag] of [
      [/Reflexive verbs/, 'reflexive-verbs'],
      [/Genitive \(Annas/, 'genitive'],
      [/weil \/ wenn clauses/, 'subordinate-clauses'],
    ] as const) {
      await page.getByRole('button', { name: label }).click();
      const n = allActivities.filter((a) => a.tags.includes(tag as never)).length;
      expect(n).toBeGreaterThan(3);
      await expect(page.getByTestId('result-count')).toHaveText(`${n} games`);
      await page.getByRole('button', { name: 'Clear filters' }).click();
      await expect(page.getByTestId('result-count')).toHaveText(`${allActivities.length} games`);
    }
  });

  test('a shared URL with level and topic filters plays as a queue', async ({ page }) => {
    await page.goto('/library?view=games&lvl=a2-1&topic=weather&type=gapfill');
    const games = a21.activities.filter(
      (a) => a.tags.includes('weather') && a.gameType === 'gapfill',
    );
    expect(games.length).toBeGreaterThan(0);
    await expect(page.getByTestId('result-count')).toHaveText(`${games.length} games`);
    await page.getByTestId('play-queue').click();
    await expect(page.getByRole('heading', { name: games[0]!.title, level: 1 })).toBeVisible();
  });
});

/**
 * Every game engine is exercised with A2.1 content, and every A2.1 unit is played at least once.
 * (All activities are completed through the real engines in the Vitest playability suite.)
 */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards', 'a2-1-online-flash-devices'],
  ['quiz (emoji)', 'a2-1-familie-quiz-family'],
  ['quiz (reading a flat ad)', 'a2-1-wohnung-quiz-ad'],
  ['memory', 'a2-1-jobsuche-memory-jobs'],
  ['listen (weather forecast)', 'a2-1-wetter-listen-forecast'],
  ['spell (unscramble, type and years)', 'a2-1-beruf-spell-cv'],
  ['sentence builder', 'a2-1-schule-sentences'],
  ['gap fill (chips: dative prepositions)', 'a2-1-bahn-gap-dative'],
  ['gap fill (typed: weil-clause verb)', 'a2-1-schule-gap-weil-verb'],
  ['sort it (four boxes)', 'a2-1-aemter-sort-offices'],
  ['conjugation (reflexive verbs)', 'a2-1-jobsuche-conj-reflexive'],
  ['blitz', 'a2-1-freizeit-blitz'],
  ['dialogue (three scenes)', 'a2-1-aemter-dialogues-offices'],
  ['clock (timetable times)', 'a2-1-bahn-clock-timetable'],
  ['market (furniture)', 'a2-1-wohnung-market-furniture'],
];

test.describe('A2.1 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every A2.1 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(a21.units.map((u) => u.id).sort());
  });
});
