import { expect, test } from '@playwright/test';
import a11 from '../src/content/a1-1';
import a12 from '../src/content/a1-2';
import { activity, allActivities, captureSpeech, playPerfectly, SEED } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('A1.2 – level navigation', () => {
  test('Home lists A1.2 as available', async ({ page }) => {
    await page.goto('/');
    const card = page.getByTestId('level-a1-2');
    await expect(card).toContainText('A1.2');
    await expect(card).toContainText(`0 / ${a12.activities.length} games`);
  });

  test('Home → A1.2 → unit shows the ten units and a guided path', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('level-a1-2').click();
    await expect(page.getByRole('heading', { name: 'A1.2', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(10);
    await page.getByTestId('unit-a1-2-stadt').click();
    await expect(page.getByRole('heading', { name: 'In der Stadt', level: 1 })).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(a12.activities.filter((a) => a.unitId === 'a1-2-stadt').length);
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });

  test('every A1.2 unit page opens', async ({ page }) => {
    for (const unit of a12.units) {
      await page.goto(`/levels/a1-2/units/${unit.id}`);
      await expect(page.getByRole('heading', { name: unit.title, level: 1 })).toBeVisible();
    }
  });

  test('progress in A1.2 is tracked separately from A1.1', async ({ page }) => {
    await playPerfectly(page, 'a1-2-stadt-quiz-places');
    await page.goto('/');
    await expect(page.getByTestId('level-a1-2')).toContainText(
      `1 / ${a12.activities.length} games`,
    );
    await expect(page.getByTestId('level-a1-1')).toContainText(
      `0 / ${a11.activities.length} games`,
    );
  });
});

test.describe('A1.2 – library', () => {
  test('the level facet filters by level, is reflected in the URL and narrows the unit chips', async ({
    page,
  }) => {
    await page.goto('/library');
    await page.getByText(/^Filters/).click();
    await page.getByRole('button', { name: 'A1.2', exact: true }).click();
    await expect(page).toHaveURL(/lvl=a1-2/);
    await expect(page.getByTestId('result-count')).toHaveText(`${a12.activities.length} games`);
    await expect(page.getByRole('button', { name: /In der Stadt/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Hallo & Tschüss/ })).toHaveCount(0);

    await page.getByRole('button', { name: 'A1.2', exact: true }).click();
    // wait until the deselection is rendered; otherwise the next click still sees A1.2 as selected
    await expect(page.getByTestId('result-count')).toHaveText(`${allActivities.length} games`);
    await page.getByRole('button', { name: 'A1.1', exact: true }).click();
    await expect(page).toHaveURL(/lvl=a1-1$/);
    await expect(page.getByTestId('result-count')).toHaveText(`${a11.activities.length} games`);
  });

  test('new grammar tags filter the games (Dative, Perfekt, Wo? / Wohin?)', async ({ page }) => {
    await page.goto('/library');
    await page.getByText(/^Filters/).click();
    for (const [label, tag] of [
      [/Dative/, 'dative'],
      [/Perfekt/, 'perfekt'],
      [/Wo\? \/ Wohin\?/, 'two-way-prepositions'],
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
    await page.goto('/library?lvl=a1-2&topic=housing&type=sortit');
    const games = a12.activities.filter(
      (a) => a.tags.includes('housing') && a.gameType === 'sortit',
    );
    expect(games.length).toBeGreaterThan(0);
    await expect(page.getByTestId('result-count')).toHaveText(`${games.length} games`);
    await page.getByTestId('play-queue').click();
    await expect(page.getByRole('heading', { name: games[0]!.title, level: 1 })).toBeVisible();
  });
});

/**
 * Every game engine is exercised with A1.2 content, and every A1.2 unit is played at least once.
 * (All activities are completed through the real engines in the Vitest playability suite.)
 */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards', 'a1-2-stadt-flash-places'],
  ['quiz (emoji)', 'a1-2-gesundheit-quiz-body'],
  ['memory', 'a1-2-aemter-memory-forms'],
  ['listen (dates)', 'a1-2-feste-listen-dates'],
  ['spell (unscramble + type)', 'a1-2-stadt-spell-places'],
  ['spell (dictation incl. e-mail address)', 'a1-2-termine-dictation'],
  ['sentence builder', 'a1-2-reisen-sentences'],
  ['gap fill (chips, Wo?)', 'a1-2-stadt-gap-wo'],
  ['gap fill (typed imperative)', 'a1-2-gesundheit-gap-imperative'],
  ['gap fill (typed + chips: Perfekt)', 'a1-2-arbeit-gap-perfekt'],
  ['sort it (four boxes)', 'a1-2-wohnen-sort-rooms'],
  ['conjugation (war / hatte)', 'a1-2-arbeit-conj-past'],
  ['blitz', 'a1-2-alltag-blitz'],
  ['dialogue (three scenes)', 'a1-2-alltag-dialogues-life'],
  ['clock (read + set)', 'a1-2-termine-clock-appointments'],
  ['market (clothes)', 'a1-2-kleidung-market-clothes'],
];

test.describe('A1.2 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every A1.2 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(a12.units.map((u) => u.id).sort());
  });

  test('a wrong answer in a grammar game goes to the mistake box and is reviewed', async ({
    page,
  }) => {
    const gapfill = activity('a1-2-stadt-gap-wo');
    if (gapfill.gameType !== 'gapfill') throw new Error('expected gap fill');
    await page.goto(`/play/${gapfill.id}?seed=${SEED}`);
    await page.getByTestId('start').click();
    const total = gapfill.config.items.length;
    for (let i = 0; i < total; i++) {
      const shown = (await page.getByTestId('sentence').innerText()).replace(/\s+/g, ' ').trim();
      const item = gapfill.config.items.find((x) => {
        const [b, a] = x.text.split('___');
        return shown === `${b}${x.options ? '…' : ''}${a}`.replace(/\s+/g, ' ').trim();
      })!;
      const choice = i === 0 ? item.options!.find((o) => o !== item.answer)! : item.answer;
      await page.getByRole('button', { name: choice, exact: true }).click();
      await expect(page.getByTestId('feedback')).toHaveAttribute(
        'data-kind',
        i === 0 ? 'wrong' : 'correct',
      );
      await page.getByTestId('continue').click();
    }
    await expect(page.getByTestId('mistakes-note')).toContainText('1 item');
    await page.goto('/review');
    await expect(page.getByTestId('review-count')).toContainText('1 due');
  });
});
