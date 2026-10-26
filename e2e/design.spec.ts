import { expect, test } from '@playwright/test';

/** The Penpot design tokens must reach the browser: brand colour, fonts and the design icon set. */
test('design tokens are applied', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('main')).toBeVisible();
  const tokens = await page.evaluate(() => {
    const root = getComputedStyle(document.documentElement);
    return {
      primary: root.getPropertyValue('--primary').trim(),
      bg: root.getPropertyValue('--bg').trim(),
      bodyFont: getComputedStyle(document.body).fontFamily,
    };
  });
  expect(tokens.primary).toBe('#584bca');
  expect(tokens.bg).toBe('#fbfaf8');
  expect(tokens.bodyFont).toContain('Plus Jakarta Sans');
});

test('headings use the display font', async ({ page }) => {
  await page.goto('/library?view=games');
  const family = await page
    .getByRole('heading', { level: 1 })
    .first()
    .evaluate((el) => getComputedStyle(el).fontFamily);
  expect(family).toContain('Fredoka');
});
