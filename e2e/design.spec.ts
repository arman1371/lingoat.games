import { expect, test } from '@playwright/test';

/** The DESIGN/ tokens must reach the browser: lagoon teal brand colour, fonts and the design icon set. */
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
  expect(tokens.primary).toBe('#0f766e');
  expect(tokens.bg).toBe('#fff'); // the build minifies #ffffff
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

test('dark theme uses the DESIGN teal-tinted canvas', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/');
  await expect(page.getByRole('main')).toBeVisible();
  const tokens = await page.evaluate(() => {
    const root = getComputedStyle(document.documentElement);
    return {
      primary: root.getPropertyValue('--primary').trim(),
      bg: root.getPropertyValue('--bg').trim(),
    };
  });
  expect(tokens.primary).toBe('#14b8a6');
  expect(tokens.bg).toBe('#0f1a1c');
});
