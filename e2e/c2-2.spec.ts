import { expect, test } from '@playwright/test';
import a11 from '../src/content/a1-1';
import a22 from '../src/content/a2-2';
import c22 from '../src/content/c2-2';
import { activity, allActivities, captureSpeech, playPerfectly, SEED } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('C2.2 – level navigation', () => {
  test('Home lists C2.2 as available', async ({ page }) => {
    await page.goto('/');
    const card = page.getByTestId('level-c2-2');
    await expect(card).toContainText('C2.2');
    await expect(card).toContainText(`0 / ${c22.activities.length} games`);
  });

  test('Home → C2.2 → unit shows the nine units and a guided path', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('level-c2-2').click();
    await expect(page.getByRole('heading', { name: 'C2.2', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(9);
    await page.getByTestId('unit-c2-2-kunst').click();
    await expect(page.getByRole('heading', { name: 'Kunst & Ästhetik', level: 1 })).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(c22.activities.filter((a) => a.unitId === 'c2-2-kunst').length);
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });

  test('every C2.2 unit page opens', async ({ page }) => {
    for (const unit of c22.units) {
      await page.goto(`/levels/c2-2/units/${unit.id}`);
      await expect(page.getByRole('heading', { name: unit.title, level: 1 })).toBeVisible();
    }
  });

  test('progress in C2.2 is tracked separately from the other levels', async ({ page }) => {
    await playPerfectly(page, 'c2-2-stellung-challenge');
    await page.goto('/');
    await expect(page.getByTestId('level-c2-2')).toContainText(
      `1 / ${c22.activities.length} games`,
    );
    await expect(page.getByTestId('level-a2-2')).toContainText(
      `0 / ${a22.activities.length} games`,
    );
    await expect(page.getByTestId('level-a1-1')).toContainText(
      `0 / ${a11.activities.length} games`,
    );
  });
});

test.describe('C2.2 – library', () => {
  test('the level facet filters to C2.2 and narrows the unit chips', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    await page.getByRole('button', { name: 'C2.2', exact: true }).click();
    await expect(page).toHaveURL(/lvl=c2-2/);
    await expect(page.getByTestId('result-count')).toHaveText(`${c22.activities.length} games`);
    await expect(page.getByRole('button', { name: /Kunst & Ästhetik/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Lernen & Prüfungen/ })).toHaveCount(0);
    await expect(page.getByRole('button', { name: /In der Stadt/ })).toHaveCount(0);
  });

  test('new C2.2 grammar and topic tags filter the games', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    for (const [label, tag] of [
      [/Long participial attributes/, 'c22-participial-attributes'],
      [/Modals & modality verbs/, 'c22-subjective-modals'],
      [/Passive in every tense/, 'c22-passive-forms'],
      [/zu \+ Partizip I/, 'c22-gerundive'],
      [/angesichts \/ infolge/, 'c22-formal-genitive'],
      [/Law & justice/, 'c22-law'],
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
    await page.goto('/library?view=games&lvl=c2-2&skill=spelling');
    const games = c22.activities.filter((a) => a.tags.includes('spelling'));
    expect(games.length).toBe(9);
    await expect(page.getByTestId('result-count')).toHaveText(`${games.length} games`);
    await page.getByTestId('play-queue').click();
    await expect(page.getByRole('heading', { name: games[0]!.title, level: 1 })).toBeVisible();
  });
});

test.describe('C2.2 – grammar hints', () => {
  test('a wrong modal particle explains why and shows the mini lesson', async ({ page }) => {
    const id = 'c2-2-nuancen-gap-particles';
    const a = activity(id);
    if (a.gameType !== 'gapfill') throw new Error('expected a gap fill');
    await page.goto(`/play/${id}?seed=${SEED}`);
    await page.getByTestId('start').click();
    const squash = (t: string) => t.replace(/\s+/g, ' ').trim();
    const shown = squash(await page.getByTestId('sentence').innerText());
    const item = a.config.items.find((i) => squash(i.text.replace('___', '…')) === shown)!;
    const wrong = item.options!.find((o) => o !== item.answer)!;
    await page.getByRole('button', { name: wrong, exact: true }).click();
    await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    await expect(page.getByTestId('mistake-why')).toContainText(item.why![wrong]!);
    await expect(page.getByTestId('mini-lesson')).toContainText('Modal particles and adverbs');
  });
});

/**
 * Every game engine that C2.2 uses is exercised, and every C2.2 unit is played at least once.
 * (All activities are completed through the real engines in the Vitest playability suite.)
 */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards', 'c2-2-kunst-flash-art-world'],
  ['quiz (emoji)', 'c2-2-literatur-quiz-pictures'],
  ['quiz (transform)', 'c2-2-recht-quiz-transform'],
  ['memory', 'c2-2-nuancen-memory-words'],
  ['listen (words)', 'c2-2-staat-listen-words'],
  ['listen (sentences)', 'c2-2-klima-listen-climate'],
  ['spell (unscramble, type and dictation)', 'c2-2-klima-spell-words'],
  ['sentence builder', 'c2-2-kulturerbe-sentences'],
  ['gap fill (chips)', 'c2-2-staat-gap-prepositions'],
  ['gap fill (chips and typed)', 'c2-2-recht-gap-gerundive'],
  ['sort it (two boxes)', 'c2-2-engagement-sort-separable'],
  ['sort it (four boxes)', 'c2-2-literatur-sort-meaning'],
  ['conjugation (passive tenses)', 'c2-2-kulturerbe-conj-passive'],
  ['conjugation (modal + perfect infinitive)', 'c2-2-literatur-conj-modal-perfect'],
  ['blitz', 'c2-2-stellung-blitz'],
  ['dialogue', 'c2-2-stellung-dialogues'],
];

test.describe('C2.2 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every C2.2 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(c22.units.map((u) => u.id).sort());
  });
});
