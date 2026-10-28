import { expect, test, type Page } from '@playwright/test';
import { activity, SEED } from './helpers';

const PHONE = { width: 390, height: 844 };

const overflow = (page: Page) =>
  page.evaluate(() => document.documentElement.scrollHeight - window.innerHeight);
const settle = (page: Page) =>
  page.evaluate(() => Promise.allSettled(document.getAnimations().map((anim) => anim.finished)));

test.describe('game screen', () => {
  test.use({ viewport: PHONE });

  test('is a clean full-height page: no stats header, no counter, nothing to scroll', async ({
    page,
  }) => {
    const quiz = activity('a1-1-hallo-time-of-day');
    if (quiz.gameType !== 'quiz') throw new Error('expected quiz');
    await page.goto(`/play/${quiz.id}?seed=${SEED}`);
    await page.getByTestId('start').click();
    await expect(page.getByTestId('prompt')).toBeVisible();

    await expect(page.getByTestId('streak')).toHaveCount(0);
    await expect(page.getByTestId('xp')).toHaveCount(0);
    await expect(page.getByRole('progressbar', { name: 'Progress' })).toBeVisible();
    expect(await overflow(page)).toBeLessThanOrEqual(0);

    const prompt = (await page.getByTestId('prompt').innerText()).trim();
    const q = quiz.config.questions.find((x) => x.prompt === prompt)!;
    await page.getByRole('button', { name: q.answer, exact: true }).click();
    await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
    await settle(page);

    // the green Continue button sits on the bottom edge and the page still does not scroll
    const box = await page.getByTestId('continue').boundingBox();
    expect(box!.y + box!.height).toBeLessThanOrEqual(PHONE.height);
    expect(box!.y + box!.height).toBeGreaterThan(PHONE.height - 40);
    expect(await overflow(page)).toBeLessThanOrEqual(0);
  });

  test('a wrong grammar answer shows a Why? button; the explanation opens in a sheet', async ({
    page,
  }) => {
    const id = 'a2-2-kunst-gap-adjectives-1';
    const gap = activity(id);
    if (gap.gameType !== 'gapfill') throw new Error('expected a gap fill');
    await page.goto(`/play/${id}?seed=${SEED}`);
    await page.getByTestId('start').click();
    const squash = (t: string) => t.replace(/\s+/g, ' ').trim();
    const shown = squash(await page.getByTestId('sentence').innerText());
    const item = gap.config.items.find((i) => squash(i.text.replace('___', '…')) === shown)!;
    const wrong = item.options!.find((o) => o !== item.answer)!;
    await page.getByRole('button', { name: wrong, exact: true }).click();

    await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    await expect(page.getByTestId('why')).toBeVisible();
    await expect(page.getByTestId('mistake-why')).toHaveCount(0);
    await expect(page.getByTestId('continue')).toBeVisible();

    await page.getByTestId('why').click();
    const sheet = page.getByTestId('why-sheet');
    await expect(sheet).toBeVisible();
    await expect(sheet.getByTestId('mistake-why')).toContainText(item.why![wrong]!);
    await expect(sheet.getByTestId('mini-lesson')).toBeVisible();
    await expect(sheet.getByTestId('full-lesson')).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(sheet).toBeHidden();
    await expect(page.getByTestId('why')).toBeFocused();
    await page.getByTestId('continue').click();
    await expect(page.getByTestId('feedback')).toHaveCount(0);
  });
});
