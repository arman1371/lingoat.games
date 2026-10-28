import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { activity, SEED } from './helpers';

/** Pick a wrong chip in the gap fill on screen and return the item that was shown. */
async function answerGapWrongly(page: Page, id: string) {
  const a = activity(id);
  if (a.gameType !== 'gapfill') throw new Error('expected a gap fill');
  const squash = (t: string) => t.replace(/\s+/g, ' ').trim();
  const shown = squash(await page.getByTestId('sentence').innerText());
  const item = a.config.items.find((i) => squash(i.text.replace('___', '…')) === shown)!;
  const wrong = item.options!.find((o) => o !== item.answer)!;
  await page.getByRole('button', { name: wrong, exact: true }).click();
  return { item, wrong };
}

test.describe('grammar hints after a mistake', () => {
  for (const scheme of ['light', 'dark'] as const) {
    test(`a wrong adjective ending explains why and shows a mini lesson (${scheme})`, async ({
      page,
    }) => {
      await page.emulateMedia({ colorScheme: scheme });
      const id = 'a2-2-kunst-gap-adjectives-1';
      await page.goto(`/play/${id}?seed=${SEED}`);
      await page.getByTestId('start').click();
      const { item, wrong } = await answerGapWrongly(page, id);
      await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
      // Enter still continues: the Continue button keeps the focus
      await expect(page.getByTestId('continue')).toBeFocused();
      // the explanation stays out of the way until the learner asks for it
      await expect(page.getByTestId('mistake-why')).toHaveCount(0);
      await page.getByTestId('why').click();
      await expect(page.getByTestId('mistake-why')).toContainText(item.why![wrong]!);
      await expect(page.getByTestId('mini-lesson')).toContainText('Adjective endings');

      await page.evaluate(() =>
        Promise.allSettled(document.getAnimations().map((anim) => anim.finished)),
      );
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      expect(results.violations.map((v) => v.id)).toEqual([]);
    });
  }

  test('a unit challenge shows the lesson of each grammar item and none for vocabulary', async ({
    page,
  }) => {
    const quiz = activity('a1-2-stadt-challenge');
    if (quiz.gameType !== 'quiz') throw new Error('expected a quiz');
    await page.goto(`/play/${quiz.id}?seed=${SEED}`);
    await page.getByTestId('start').click();
    for (let i = 0; i < quiz.config.questions.length; i++) {
      const prompt = (await page.getByTestId('prompt').innerText()).trim();
      const q = quiz.config.questions.find((x) => x.prompt === prompt)!;
      const wrong = q.options.find((o) => o !== q.answer)!;
      await page.getByRole('button', { name: wrong, exact: true }).click();
      const lesson = page.getByTestId('mini-lesson');
      if (q.lesson || q.why?.[wrong]) {
        await page.getByTestId('why').click();
        if (q.lesson) await expect(lesson).toHaveAttribute('data-lesson', q.lesson);
        if (q.why?.[wrong]) {
          await expect(page.getByTestId('mistake-why')).toContainText(q.why[wrong]);
        }
        await page.getByRole('button', { name: 'Got it' }).click();
      } else {
        await expect(lesson).toHaveCount(0);
      }
      await page.getByTestId('continue').click();
    }
    await expect(page.getByRole('heading', { name: 'Well done!' })).toBeVisible();
  });

  test('a vocabulary mistake gets no grammar hint', async ({ page }) => {
    const quiz = activity('a1-1-hallo-time-of-day');
    if (quiz.gameType !== 'quiz') throw new Error('expected a quiz');
    await page.goto(`/play/${quiz.id}?seed=${SEED}`);
    await page.getByTestId('start').click();
    const prompt = (await page.getByTestId('prompt').innerText()).trim();
    const q = quiz.config.questions.find((x) => x.prompt === prompt)!;
    await page
      .getByRole('button', { name: q.options.find((o) => o !== q.answer)!, exact: true })
      .click();
    await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    await expect(page.getByTestId('mistake-hint')).toHaveCount(0);
  });
});
