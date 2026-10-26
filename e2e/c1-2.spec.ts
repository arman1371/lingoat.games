import { expect, test } from '@playwright/test';
import a11 from '../src/content/a1-1';
import b11 from '../src/content/b1-1';
import c12 from '../src/content/c1-2';
import { activity, allActivities, captureSpeech, playPerfectly } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('C1.2 – level navigation', () => {
  test('Home lists C1.2 as available', async ({ page }) => {
    await page.goto('/');
    const card = page.getByTestId('level-c1-2');
    await expect(card).toContainText('C1.2');
    await expect(card).toContainText(`0 / ${c12.activities.length} games`);
  });

  test('Home → C1.2 → unit shows all units and a guided path', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('level-c1-2').click();
    await expect(page.getByRole('heading', { name: 'C1.2', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(c12.units.length);
    await page.getByTestId('unit-c1-2-finanzen').click();
    await expect(page.getByRole('heading', { name: 'Finanzen', level: 1 })).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      c12.activities.filter((a) => a.unitId === 'c1-2-finanzen').length,
    );
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });

  test('every C1.2 unit page opens', async ({ page }) => {
    for (const unit of c12.units) {
      await page.goto(`/levels/c1-2/units/${unit.id}`);
      await expect(page.getByRole('heading', { name: unit.title, level: 1 })).toBeVisible();
    }
  });

  test('progress in C1.2 is tracked separately from the other levels', async ({ page }) => {
    await playPerfectly(page, 'c1-2-vortrag-challenge');
    await page.goto('/');
    await expect(page.getByTestId('level-c1-2')).toContainText(
      `1 / ${c12.activities.length} games`,
    );
    await expect(page.getByTestId('level-b1-1')).toContainText(
      `0 / ${b11.activities.length} games`,
    );
    await expect(page.getByTestId('level-a1-1')).toContainText(
      `0 / ${a11.activities.length} games`,
    );
  });
});

test.describe('C1.2 – library', () => {
  test('the level facet filters to C1.2 and narrows the unit chips', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    await page.getByRole('button', { name: 'C1.2', exact: true }).click();
    await expect(page).toHaveURL(/lvl=c1-2/);
    await expect(page.getByTestId('result-count')).toHaveText(`${c12.activities.length} games`);
    await expect(page.getByRole('button', { name: /Recht & Gesetz/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Glück im Alltag/ })).toHaveCount(0);
  });

  test('new C1.2 grammar tags filter the games', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    for (const [label, tag] of [
      [/Nominal style/, 'nominal-style'],
      [/Passive substitutes/, 'passive-substitutes'],
      [/Subjective modal verbs/, 'subjective-modals'],
      [/Participles & participial clauses/, 'participial-clauses'],
      [/aufgrund \/ infolge \/ anhand/, 'written-prepositions'],
    ] as const) {
      await page.getByRole('button', { name: label }).click();
      const n = allActivities.filter((a) => a.tags.includes(tag as never)).length;
      expect(n).toBeGreaterThan(2);
      await expect(page.getByTestId('result-count')).toHaveText(`${n} games`);
      await page.getByRole('button', { name: 'Clear filters' }).click();
      await expect(page.getByTestId('result-count')).toHaveText(`${allActivities.length} games`);
    }
  });
});

/**
 * Every game engine that C1.2 uses is exercised, and every C1.2 unit is played at least once.
 * (All activities are completed through the real engines in the Vitest playability suite.)
 */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards', 'c1-2-finanzen-flash-debts'],
  ['quiz', 'c1-2-gesundheit-quiz-words'],
  ['memory', 'c1-2-recht-memory-words'],
  ['listen', 'c1-2-psychologie-listen-interview'],
  ['spell (unscramble, type and dictation)', 'c1-2-stadt-spell-city'],
  ['sort it (two boxes)', 'c1-2-literatur-sort-genres'],
  ['sort it (three boxes)', 'c1-2-psychologie-sort-modals'],
  ['gap fill (chips: nominal style)', 'c1-2-kino-gap-nominal'],
  ['gap fill (typed answers: connectors)', 'c1-2-geschaeft-gap-connectors'],
  ['gap fill (participles)', 'c1-2-forschung-gap-participles'],
  ['sentence builder', 'c1-2-team-sentences'],
  ['blitz', 'c1-2-nachhaltigkeit-blitz'],
  ['dialogue (two scenes)', 'c1-2-vortrag-dialogues'],
];

test.describe('C1.2 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every C1.2 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(c12.units.map((u) => u.id).sort());
  });
});
