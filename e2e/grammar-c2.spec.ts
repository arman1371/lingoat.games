import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

async function expectNoViolations(page: Page, label: string) {
  await page.evaluate(() =>
    Promise.allSettled(document.getAnimations().map((anim) => anim.finished)),
  );
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();
  expect(
    results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(' | ')}`),
    `${label}: accessibility violations`,
  ).toEqual([]);
}

for (const scheme of ['light', 'dark'] as const) {
  test.describe(`C2 grammar lessons (${scheme})`, () => {
    test.use({ colorScheme: scheme });

    test('a C2.1 unit lists its topics and opens a full lesson', async ({ page }) => {
      await page.goto('/levels/c2-1/units/c2-1-digital');
      const card = page.getByTestId('unit-grammar');
      await expect(card).toBeVisible();
      await expect(card.getByRole('link')).toHaveCount(2);
      await card.getByTestId('grammar-c21-futur-2').click();

      await expect(page.getByRole('heading', { level: 1, name: 'Futur II' })).toBeVisible();
      await expect(page).toHaveURL(/\/library\/grammar\/c21-futur-2$/);
      await expect(page.getByRole('table', { name: 'Forms of the Futur II.' })).toBeVisible();
      await expectNoViolations(page, 'c21-futur-2 lesson');
    });

    test('a C2.2 lesson opens from the Library with the C2.2 level filter', async ({ page }) => {
      test.slow();
      await page.goto('/library');
      const index = page.getByTestId('grammar-index');
      await index.getByRole('button', { name: 'C2.2' }).click();
      await expect(page).toHaveURL(/glvl=c2-2/);
      await expect(index.getByRole('heading', { level: 2, name: /C2\.1/ })).toHaveCount(0);
      await index.getByTestId('grammar-c22-passive-forms').click();
      await expect(
        page.getByRole('heading', { level: 1, name: 'Passive in every tense' }),
      ).toBeVisible();
      await expect(page.getByRole('table', { name: 'Vorgangspassiv of “bauen”.' })).toBeVisible();
      await expectNoViolations(page, 'c22-passive-forms lesson');
    });
  });
}
