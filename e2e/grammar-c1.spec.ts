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
  test.describe(`C1 grammar lessons (${scheme})`, () => {
    test.use({ colorScheme: scheme });

    test('a C1.1 unit lists its topics and opens a full lesson', async ({ page }) => {
      await page.goto('/levels/c1-1/units/c1-1-zeit');
      const card = page.getByTestId('unit-grammar');
      await expect(card).toBeVisible();
      await expect(card.getByRole('link')).toHaveCount(3);
      await card.getByTestId('grammar-formal-connectors').click();

      await expect(
        page.getByRole('heading', { level: 1, name: 'andernfalls, folglich, hingegen' }),
      ).toBeVisible();
      await expect(page).toHaveURL(/\/library\/grammar\/formal-connectors$/);
      await expect(page.getByRole('table', { name: 'Three kinds of connectors.' })).toBeVisible();
      await expectNoViolations(page, 'formal-connectors lesson');
    });

    test('a C1.2 lesson opens from the Library with the C1.2 level filter', async ({ page }) => {
      test.slow();
      await page.goto('/library');
      const index = page.getByTestId('grammar-index');
      await index.getByRole('button', { name: 'C1.2' }).click();
      await expect(page).toHaveURL(/glvl=c1-2/);
      await expect(index.getByRole('heading', { level: 2, name: /C1\.1/ })).toHaveCount(0);
      await index.getByTestId('grammar-conditional-clauses').click();
      await expect(
        page.getByRole('heading', { level: 1, name: 'Conditions without wenn' }),
      ).toBeVisible();
      await expectNoViolations(page, 'conditional-clauses lesson');
    });
  });
}
