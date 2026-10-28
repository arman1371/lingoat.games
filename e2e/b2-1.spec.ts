import { expect, test } from '@playwright/test';
import a11 from '../src/content/a1-1';
import b12 from '../src/content/b1-2';
import b21 from '../src/content/b2-1';
import { activity, allActivities, captureSpeech, playPerfectly, SEED } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('B2.1 – level navigation', () => {
  test('Home lists B2.1 as available', async ({ page }) => {
    await page.goto('/');
    const card = page.getByTestId('level-b2-1');
    await expect(card).toContainText('B2.1');
    await expect(card).toContainText(`0 / ${b21.activities.length} games`);
  });

  test('Home → B2.1 → unit shows the twelve units and a guided path', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('level-b2-1').click();
    await expect(page.getByRole('heading', { name: 'B2.1', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(12);
    await page.getByTestId('unit-b2-1-beziehungen').click();
    await expect(
      page.getByRole('heading', { name: 'Beziehungen & Gefühle', level: 1 }),
    ).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      b21.activities.filter((a) => a.unitId === 'b2-1-beziehungen').length,
    );
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });

  test('every B2.1 unit page opens', async ({ page }) => {
    for (const unit of b21.units) {
      await page.goto(`/levels/b2-1/units/${unit.id}`);
      await expect(page.getByRole('heading', { name: unit.title, level: 1 })).toBeVisible();
    }
  });

  test('progress in B2.1 is tracked separately from the other levels', async ({ page }) => {
    await playPerfectly(page, 'b2-1-wohlbefinden-challenge');
    await page.goto('/');
    await expect(page.getByTestId('level-b2-1')).toContainText(
      `1 / ${b21.activities.length} games`,
    );
    await expect(page.getByTestId('level-b1-2')).toContainText(
      `0 / ${b12.activities.length} games`,
    );
    await expect(page.getByTestId('level-a1-1')).toContainText(
      `0 / ${a11.activities.length} games`,
    );
  });
});

test.describe('B2.1 – library', () => {
  test('the level facet filters to B2.1 and narrows the unit chips', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    await page.getByRole('button', { name: 'B2.1', exact: true }).click();
    await expect(page).toHaveURL(/lvl=b2-1/);
    await expect(page.getByTestId('result-count')).toHaveText(`${b21.activities.length} games`);
    await expect(page.getByRole('button', { name: /Beziehungen & Gefühle/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Unter Kollegen/ })).toHaveCount(0);
  });

  test('new B2.1 grammar and topic tags filter the games', async ({ page }) => {
    await page.goto('/library?view=games');
    await page.getByText(/^Filters/).click();
    for (const [label, tag] of [
      [/Reported speech/, 'konjunktiv-1'],
      [/Zustandspassiv/, 'state-passive'],
      [/lassen \/ sein \+ zu/, 'passive-alternatives'],
      [/Nominalisation/, 'nominalisation'],
      [/Relationships & feelings/, 'relationships'],
      [/Climate & globalisation/, 'climate-global'],
    ] as const) {
      await page.getByRole('button', { name: label }).click();
      const n = allActivities.filter((a) => a.tags.includes(tag as never)).length;
      expect(n).toBeGreaterThan(3);
      await expect(page.getByTestId('result-count')).toHaveText(`${n} games`);
      await page.getByRole('button', { name: 'Clear filters' }).click();
      await expect(page.getByTestId('result-count')).toHaveText(`${allActivities.length} games`);
    }
  });

  test('a shared URL with level and grammar filters plays as a queue', async ({ page }) => {
    await page.goto('/library?view=games&lvl=b2-1&grammar=konjunktiv-1');
    const games = b21.activities.filter((a) => a.tags.includes('konjunktiv-1'));
    expect(games.length).toBeGreaterThan(3);
    await expect(page.getByTestId('result-count')).toHaveText(`${games.length} games`);
    await page.getByTestId('play-queue').click();
    await expect(page.getByRole('heading', { name: games[0]!.title, level: 1 })).toBeVisible();
  });
});

test.describe('B2.1 – grammar hints', () => {
  test('a wrong reported-speech form explains why and shows the mini lesson', async ({ page }) => {
    const a = activity('b2-1-besitz-gap-reported');
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
    await expect(page.getByTestId('mini-lesson')).toHaveAttribute('data-lesson', 'konjunktiv-1');
  });
});

/**
 * Every game engine that B2.1 uses is exercised, and every B2.1 unit is played at least once.
 * (All activities are completed through the real engines in the Vitest playability suite.)
 */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards', 'b2-1-beziehungen-flash-bonds'],
  ['quiz (emoji)', 'b2-1-besitz-quiz-pictures'],
  ['quiz (challenge with hints)', 'b2-1-wohlbefinden-challenge'],
  ['memory (gestures)', 'b2-1-kommunikation-memory-gestures'],
  ['memory (temporal connectors)', 'b2-1-lebenswege-memory-connectors'],
  ['listen', 'b2-1-teamgeist-listen-states'],
  ['spell (unscramble, type and dictation)', 'b2-1-lebenswege-spell-education'],
  ['sentence builder', 'b2-1-gesellschaft-sentences-phrases'],
  ['gap fill (chips: conditions)', 'b2-1-wohnen-gap-conditions'],
  ['gap fill (chips + typed: nominalisation)', 'b2-1-klima-gap-nominal'],
  ['sort it (text cohesion)', 'b2-1-medien-sort-reference'],
  ['conjugation (Konjunktiv I)', 'b2-1-besitz-conj-k1'],
  ['conjugation (Zustandspassiv)', 'b2-1-teamgeist-conj-state'],
  ['blitz', 'b2-1-wissenschaft-blitz'],
  ['dialogue (two scenes)', 'b2-1-unterwegs-dialogues'],
];

test.describe('B2.1 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every B2.1 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(b21.units.map((u) => u.id).sort());
  });
});
