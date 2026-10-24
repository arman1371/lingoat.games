import { expect, test } from '@playwright/test';
import content from '../src/content/a1-1';
import { activity, allActivities, captureSpeech, playPerfectly, SEED } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('learning path', () => {
  test('Home → level → unit → step-by-step play → next game in the queue', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Start your first game' })).toBeVisible();
    await page.getByTestId('level-a1-1').click();
    await expect(page.getByRole('list', { name: 'Units' }).getByRole('listitem')).toHaveCount(
      content.units.length,
    );
    await page.getByTestId('unit-a1-1-hallo').click();

    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
    await expect(steps.nth(1)).toHaveAttribute('data-state', 'open');

    // first step: flashcards, solved perfectly; the result offers the next step of the path
    await steps.first().getByRole('link').click();
    await page.getByTestId('start').click();
    for (let i = 0; i < 12; i++) {
      await page.getByTestId('card').click();
      await page.getByRole('button', { name: /Got it/ }).click();
    }
    await expect(page.getByRole('heading', { name: 'Well done!' })).toBeVisible();
    const next = content.activities.filter((a) => a.unitId === 'a1-1-hallo')[1]!;
    await expect(page.getByTestId('next-activity')).toContainText(next.title);
    await page.getByTestId('next-activity').click();
    await expect(page.getByRole('heading', { name: next.title, level: 1 })).toBeVisible();

    // back on the unit page the first step is done and the second is "up next"
    await page.getByRole('button', { name: 'Exit game' }).click();
    await expect(steps.first()).toHaveAttribute('data-state', 'done');
    await expect(steps.nth(1)).toHaveAttribute('data-state', 'current');
  });

  test('Home "Continue" jumps to the next unplayed game', async ({ page }) => {
    await playPerfectly(page, 'a1-1-hallo-flash');
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Continue where you left off' })).toBeVisible();
    await page.getByTestId('continue-cta').click();
    await expect(
      page.getByRole('heading', { name: content.activities[1]!.title, level: 1 }),
    ).toBeVisible();
  });

  test('explore view shows every game of the unit', async ({ page }) => {
    await page.goto('/levels/a1-1/units/a1-1-einkaufen');
    await page.getByRole('tab', { name: /All games/ }).click();
    const n = content.activities.filter((a) => a.unitId === 'a1-1-einkaufen').length;
    await expect(page.getByRole('list', { name: 'All games' }).getByRole('listitem')).toHaveCount(
      n,
    );
    await expect(page).toHaveURL(/view=explore/);
  });

  test('unknown routes show a friendly 404', async ({ page }) => {
    await page.goto('/this/does/not/exist');
    await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
    await page.getByRole('link', { name: 'Back to home' }).click();
    await expect(page).toHaveURL('/');
    await page.goto('/play/nope');
    await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
  });

  test('every level on Home is available and unknown levels are not found', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('level-c2-2')).toBeVisible();
    await expect(page.getByText('Coming soon')).toHaveCount(0);
    await page.goto('/levels/c9-9');
    await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
  });
});

test.describe('game library and filters', () => {
  test('filters by game type, topic and difficulty and reflects them in the URL', async ({
    page,
  }) => {
    await page.goto('/library');
    await expect(page.getByTestId('result-count')).toHaveText(`${allActivities.length} games`);
    await page.getByText(/^Filters/).click();

    await page.getByRole('button', { name: /Market stand/ }).click();
    const market = allActivities.filter((a) => a.gameType === 'market');
    await expect(page.getByTestId('result-count')).toHaveText(`${market.length} games`);
    await expect(page).toHaveURL(/type=market/);
    await expect(page.getByTestId('activity-card')).toHaveCount(market.length);

    await page.getByRole('button', { name: 'Clear filters' }).click();
    await expect(page.getByTestId('result-count')).toHaveText(`${allActivities.length} games`);
    await page.getByRole('button', { name: /Separable verbs/ }).click();
    const separable = allActivities.filter((a) => a.tags.includes('separable-verbs'));
    await expect(page.getByTestId('result-count')).toHaveText(`${separable.length} games`);
    await page.getByRole('button', { name: 'Hard' }).click();
    const hard = separable.filter((a) => a.difficulty === 3).length;
    await expect(page.getByTestId('result-count')).toHaveText(`${hard} games`);
  });

  test('filters from a shared URL, then plays the filtered games as a queue', async ({ page }) => {
    await page.goto('/library?unit=a1-1-hallo&type=quiz');
    const quizzes = content.activities.filter(
      (a) => a.unitId === 'a1-1-hallo' && a.gameType === 'quiz',
    );
    await expect(page.getByTestId('result-count')).toHaveText(`${quizzes.length} games`);
    await page.getByTestId('play-queue').click();
    await expect(page.getByRole('heading', { name: quizzes[0]!.title, level: 1 })).toBeVisible();
    await expect(page.getByText(`${quizzes.length - 1} more in queue`)).toBeVisible();
  });

  test('searches by text', async ({ page }) => {
    await page.goto('/library');
    await page.getByLabel('Search games').fill('bakery');
    await expect(page.getByTestId('activity-card').first()).toContainText('bakery', {
      ignoreCase: true,
    });
    await page.getByLabel('Search games').fill('qqqqqq');
    await expect(page.getByText('No games match these filters.')).toBeVisible();
  });
});

test.describe('progress and review', () => {
  test('progress, XP and stars persist after a reload', async ({ page }) => {
    await playPerfectly(page, 'a1-1-hallo-time-of-day');
    const xp = await page.getByTestId('xp').innerText();
    expect(xp).not.toContain('⭐ 0');
    await page.reload();
    await expect(page.getByTestId('xp')).toHaveText(xp);
    await page.goto('/levels/a1-1/units/a1-1-hallo?view=explore');
    await expect(
      page
        .getByTestId('activity-card')
        .filter({ hasText: activity('a1-1-hallo-time-of-day').title })
        .getByRole('img', { name: '3 of 3 stars' }),
    ).toBeVisible();
  });

  test('mistakes land in the Fehlerkiste and a review session clears them step by step', async ({
    page,
  }) => {
    const quiz = activity('a1-1-hallo-feelings');
    if (quiz.gameType !== 'quiz') throw new Error('expected quiz');
    await page.goto(`/play/${quiz.id}?seed=${SEED}`);
    await page.getByTestId('start').click();
    const total = quiz.config.questions.length;
    for (let i = 0; i < total; i++) {
      await expect(page.getByTestId('counter')).toHaveText(`${i + 1} / ${total}`);
      const emoji = (await page.getByTestId('emoji').innerText()).trim();
      const q = quiz.config.questions.find((x) => x.emoji === emoji)!;
      await page
        .getByRole('button', {
          name: i === 0 ? q.options.find((o) => o !== q.answer)! : q.answer,
          exact: true,
        })
        .click();
      await page.getByTestId('continue').click();
    }
    await expect(page.getByTestId('mistakes-note')).toContainText('1 item ');

    await page.goto('/review');
    await expect(page.getByTestId('review-count')).toContainText('1 due');
    await page.getByTestId('start-review').click();
    await expect(page.getByText('1 items to review')).toBeVisible();
    await page.getByTestId('start').click();
    const emoji = (await page.getByTestId('emoji').innerText()).trim();
    const q = quiz.config.questions.find((x) => x.emoji === emoji)!;
    await page.getByRole('button', { name: q.answer, exact: true }).click();
    await page.getByTestId('continue').click();
    await expect(page.getByRole('heading', { name: 'Well done!' })).toBeVisible();
    // answered correctly once → moves up a box but is not due again today
    await page.goto('/review');
    await expect(page.getByTestId('review-empty')).toBeVisible();
  });

  test('settings: theme choice is applied and survives a reload; reset clears progress', async ({
    page,
  }) => {
    await playPerfectly(page, 'a1-1-hallo-flash');
    await page.goto('/settings');
    await page.getByLabel('Dark').check({ force: true });
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await page.getByLabel('Reduced').check({ force: true });
    await expect(page.locator('html')).toHaveAttribute('data-reduced-motion', 'true');

    await page.getByRole('button', { name: 'Reset all progress' }).click();
    await page
      .getByRole('dialog', { name: 'Reset all progress?' })
      .getByRole('button', { name: 'Reset all progress' })
      .click();
    await expect(page.getByTestId('xp')).toHaveText('⭐ 0');
    await expect(page.getByText('Progress reset.')).toBeVisible();
  });
});

test('installable PWA assets are served', async ({ request }) => {
  const manifest = await request.get('/manifest.webmanifest');
  expect(manifest.ok()).toBe(true);
  expect((await manifest.json()).name).toBe('Deutsch Spielplatz');
  expect((await request.get('/favicon.svg')).ok()).toBe(true);
  // SPA fallback for deep links (what _redirects does on Cloudflare Pages)
  const deep = await request.get('/levels/a1-1/units/a1-1-hallo');
  expect(deep.ok()).toBe(true);
});
