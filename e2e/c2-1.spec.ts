import { expect, test } from '@playwright/test';
import a11 from '../src/content/a1-1';
import b12 from '../src/content/b1-2';
import c21 from '../src/content/c2-1';
import { activity, allActivities, captureSpeech, playPerfectly, SEED } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('C2.1 – level navigation', () => {
  test('Home lists C2.1 as available', async ({ page }) => {
    await page.goto('/');
    const card = page.getByTestId('level-c2-1');
    await expect(card).toContainText('C2.1');
    await expect(card).toContainText(`0 / ${c21.activities.length} games`);
  });

  test('Home → C2.1 → unit shows the nine units and a guided path', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('level-c2-1').click();
    await expect(page.getByRole('heading', { name: 'C2.1', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(9);
    await page.getByTestId('unit-c2-1-sprache').click();
    await expect(
      page.getByRole('heading', { name: 'Sprache & Zwischentöne', level: 1 }),
    ).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      c21.activities.filter((a) => a.unitId === 'c2-1-sprache').length,
    );
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });

  test('every C2.1 unit page opens', async ({ page }) => {
    for (const unit of c21.units) {
      await page.goto(`/levels/c2-1/units/${unit.id}`);
      await expect(page.getByRole('heading', { name: unit.title, level: 1 })).toBeVisible();
    }
  });

  test('progress in C2.1 is tracked separately from the other levels', async ({ page }) => {
    await playPerfectly(page, 'c2-1-debatte-challenge');
    await page.goto('/');
    await expect(page.getByTestId('level-c2-1')).toContainText(
      `1 / ${c21.activities.length} games`,
    );
    await expect(page.getByTestId('level-b1-2')).toContainText(
      `0 / ${b12.activities.length} games`,
    );
    await expect(page.getByTestId('level-a1-1')).toContainText(
      `0 / ${a11.activities.length} games`,
    );
  });
});

test.describe('C2.1 – library', () => {
  test('the level facet filters to C2.1 and narrows the unit chips', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    await page.getByRole('button', { name: 'C2.1', exact: true }).click();
    await expect(page).toHaveURL(/lvl=c2-1/);
    await expect(page.getByTestId('result-count')).toHaveText(`${c21.activities.length} games`);
    await expect(page.getByRole('button', { name: /Sprache & Zwischentöne/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Glück im Alltag/ })).toHaveCount(0);
  });

  test('new C2.1 grammar and topic tags filter the games', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    for (const [label, tag] of [
      [/Futur II/, 'c21-futur-2'],
      [/Konjunktiv I \(reported speech\)/, 'c21-reported-speech'],
      [/Noun-verb combinations/, 'c21-noun-verb'],
      [/weil → wegen/, 'c21-nominal-style'],
      [/Medicine & health systems/, 'c21-medicine'],
    ] as const) {
      await page.getByRole('button', { name: label }).click();
      const n = allActivities.filter((a) => a.tags.includes(tag as never)).length;
      expect(n).toBeGreaterThan(3);
      await expect(page.getByTestId('result-count')).toHaveText(`${n} games`);
      await page.getByRole('button', { name: 'Clear filters' }).click();
      await expect(page.getByTestId('result-count')).toHaveText(`${allActivities.length} games`);
    }
  });
});

test.describe('C2.1 – grammar hints', () => {
  test('a wrong reported-speech form explains why and shows the mini lesson', async ({ page }) => {
    const a = activity('c2-1-ki-gap-k1');
    if (a.gameType !== 'gapfill') throw new Error('expected a gap fill');
    await page.goto(`/play/${a.id}?seed=${SEED}`);
    await page.getByTestId('start').click();
    const squash = (t: string) => t.replace(/\s+/g, ' ').trim();
    const shown = squash(await page.getByTestId('sentence').innerText());
    const item = a.config.items.find((i) => squash(i.text.replace('___', '…')) === shown)!;
    const wrong = item.options!.find((o) => o !== item.answer)!;
    await page.getByRole('button', { name: wrong, exact: true }).click();
    await page.getByTestId('why').click();
    await expect(page.getByTestId('mistake-why')).toContainText(item.why![wrong]!);
    await expect(page.getByTestId('mini-lesson')).toHaveAttribute(
      'data-lesson',
      'c21-reported-speech',
    );
  });
});

/**
 * Every game engine that C2.1 uses is exercised, and every C2.1 unit is played at least once.
 * (All activities are completed through the real engines in the Vitest playability suite.)
 */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards', 'c2-1-sprache-flash-style'],
  ['quiz (meanings)', 'c2-1-arbeit-quiz-world'],
  ['memory (noun-verb combinations)', 'c2-1-arbeit-memory-nvv'],
  ['listen', 'c2-1-digital-listen-news'],
  ['spell (unscramble, type and dictation)', 'c2-1-ki-spell-research'],
  ['sentence builder', 'c2-1-medizin-sentences'],
  ['gap fill (chips: connectors)', 'c2-1-wirtschaft-gap-connectors'],
  ['gap fill (chips and typed: concession)', 'c2-1-debatte-gap-concession'],
  ['sort it (three boxes: relations)', 'c2-1-wirtschaft-sort-relations'],
  ['sort it (three boxes: unreal)', 'c2-1-psyche-sort-unreal'],
  ['conjugation (Konjunktiv I)', 'c2-1-ki-conj-k1'],
  ['conjugation (Futur II)', 'c2-1-digital-conj-futur2'],
  ['conjugation (hindsight with modal verbs)', 'c2-1-psyche-conj-hindsight'],
  ['blitz', 'c2-1-medien-blitz'],
  ['dialogue (two scenes)', 'c2-1-debatte-dialogues'],
];

test.describe('C2.1 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every C2.1 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(c21.units.map((u) => u.id).sort());
  });
});
