import { expect, test } from '@playwright/test';

for (const [path, heading] of [
  ['/impressum', 'Impressum'],
  ['/datenschutz', 'Datenschutzerklärung'],
] as const) {
  test(`${path} names the operator and is noindex`, async ({ page }) => {
    await page.goto(path);
    await expect(page.getByRole('heading', { level: 1, name: heading })).toBeVisible();
    await expect(page.getByText('Musterstr. 1').first()).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, nofollow',
    );
  });
}

test('the home page stays indexable and links to the legal pages', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('meta[name="robots"]')).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'Impressum' })).toHaveAttribute('href', '/impressum');
  await expect(page.getByRole('link', { name: 'Datenschutz' })).toHaveAttribute(
    'href',
    '/datenschutz',
  );
});

test('the footer warns that lessons are AI-generated and links to the disclaimer', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByRole('link', { name: /AI-generated and may contain mistakes/ }).click();
  await expect(page).toHaveURL(/\/haftungsausschluss$/);
  await expect(
    page.getByRole('heading', { level: 1, name: 'Haftungsausschluss und KI-Hinweis' }),
  ).toBeVisible();
});

test('a game screen has no legal links', async ({ page }) => {
  await page.goto('/play/a1-1-food-flashcards');
  await expect(page.getByRole('main')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Impressum' })).toHaveCount(0);
});
