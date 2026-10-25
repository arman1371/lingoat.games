import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { activity, SEED } from './helpers';

const quiz = activity('a1-1-hallo-time-of-day');

/**
 * The build in CI carries Cloudflare's test site key. Turnstile itself is replaced by a stub that hands out a
 * token at once, and `/api/report` (served by the Worker in production, not by `vite preview`) is answered here.
 */
async function stubNetwork(page: Page, reply: { status: number; body?: object }[]) {
  const requests: Record<string, unknown>[] = [];
  await page.route('https://challenges.cloudflare.com/**', (route) =>
    route.fulfill({
      contentType: 'text/javascript',
      body: `(() => {
        let options;
        const issue = () => setTimeout(() => options.callback('e2e-token'), 0);
        window.turnstile = {
          render(el, o) { options = o; issue(); return 'w'; },
          reset: issue,
          remove() {},
        };
      })();`,
    }),
  );
  await page.route('**/api/report', async (route) => {
    requests.push(route.request().postDataJSON());
    const next = reply[Math.min(requests.length - 1, reply.length - 1)]!;
    await route.fulfill({
      status: next.status,
      contentType: 'application/json',
      body: JSON.stringify(next.body ?? { ok: true }),
    });
  });
  return requests;
}

async function startQuiz(page: Page) {
  await page.goto(`/play/${quiz.id}?seed=${SEED}`);
  await expect(page.getByTestId('report-open')).toHaveCount(0); // not on the intro screen
  await page.getByTestId('start').click();
  await expect(page.getByTestId('counter')).toBeVisible();
}

test.describe('report a problem', () => {
  test('a player reports a wrong image in a few taps and sees a thank-you', async ({ page }) => {
    const requests = await stubNetwork(page, [{ status: 200 }]);
    await startQuiz(page);
    await page.getByTestId('report-open').click();

    const dialog = page.getByRole('dialog', { name: 'Report a problem' });
    await expect(dialog).toBeVisible();
    await expect(page.getByTestId('report-send')).toBeDisabled();
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    expect(axe.violations.map((v) => v.id)).toEqual([]);

    await page.getByRole('combobox', { name: 'Problem type' }).selectOption('image');
    await page.getByRole('textbox', { name: 'Note (optional)' }).fill('It shows a pear');
    await expect(page.getByTestId('report-send')).toBeEnabled();
    await page.getByTestId('report-send').click();

    await expect(page.getByRole('heading', { name: 'Thank you!' })).toBeVisible();
    expect(requests).toHaveLength(1);
    expect(requests[0]).toMatchObject({
      type: 'image',
      activityId: quiz.id,
      gameType: 'quiz',
      note: 'It shows a pear',
      token: 'e2e-token',
    });
    expect(typeof requests[0]!.itemId).toBe('string');

    await page.getByTestId('report-done').click();
    await expect(dialog).toBeHidden();
    await expect(page.getByTestId('counter')).toBeVisible(); // still in the same game
  });

  test('the whole flow works from the keyboard and Escape closes it', async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, 'keyboard flow is a desktop concern');
    await stubNetwork(page, [{ status: 200 }]);
    await startQuiz(page);
    await page.getByTestId('report-open').focus();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('dialog', { name: 'Report a problem' })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).toBeHidden();
    await expect(page.getByTestId('report-open')).toBeFocused();

    await page.keyboard.press('Enter');
    await page.getByTestId('report-type').focus();
    await page.keyboard.press('ArrowDown'); // first real type
    await expect(page.getByTestId('report-send')).toBeEnabled();
    await page.getByTestId('report-send').focus();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('heading', { name: 'Thank you!' })).toBeVisible();
  });

  test('a busy or failing server shows an error and the form can be sent again', async ({
    page,
  }) => {
    const requests = await stubNetwork(page, [
      { status: 429, body: { error: 'rate-limited' } },
      { status: 502, body: { error: 'github' } },
      { status: 200 },
    ]);
    await startQuiz(page);
    await page.getByTestId('report-open').click();
    await page.getByTestId('report-type').selectOption('german');
    const send = page.getByTestId('report-send');
    await send.click();
    await expect(page.getByRole('alert')).toContainText('Too many reports right now');
    await expect(send).toBeEnabled(); // a new token was requested after the failed attempt
    await send.click();
    await expect(page.getByRole('alert')).toContainText('Could not send your report');
    await send.click();
    await expect(page.getByRole('heading', { name: 'Thank you!' })).toBeVisible();
    expect(requests).toHaveLength(3);
  });
});
