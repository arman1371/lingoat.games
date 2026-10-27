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
  test.describe(`B1 grammar lessons (${scheme})`, () => {
    test.use({ colorScheme: scheme });

    test('a B1.1 unit lists its topics and opens the Plusquamperfekt lesson', async ({ page }) => {
      await page.goto('/levels/b1-1/units/b1-1-glueck');
      const card = page.getByTestId('unit-grammar');
      await expect(card).toBeVisible();
      await expect(card.getByRole('link')).toHaveCount(3);
      await card.getByTestId('grammar-plusquamperfekt').click();

      await expect(
        page.getByRole('heading', { level: 1, name: 'The Plusquamperfekt' }),
      ).toBeVisible();
      await expect(page).toHaveURL(/\/library\/grammar\/plusquamperfekt$/);
      const table = page.getByRole('table', { name: /Plusquamperfekt with haben and with sein/ });
      await expect(table.getByRole('row', { name: /ich/ })).toContainText('hatte gespielt');
      await expect(table.getByRole('row', { name: /ich/ })).toContainText('war gegangen');
      await expectNoViolations(page, 'plusquamperfekt lesson');
    });

    test('a B1.2 unit links its topic and the lesson has no violations', async ({ page }) => {
      await page.goto('/levels/b1-2/units/b1-2-geschichte');
      await page.getByTestId('unit-grammar').getByTestId('grammar-passive-past').click();
      await expect(
        page.getByRole('heading', { level: 1, name: 'The passive in the past' }),
      ).toBeVisible();
      await expectNoViolations(page, 'passive-past lesson');
    });

    test('the Library shows the B1 topics and finds them by search', async ({ page }) => {
      await page.goto('/library');
      const index = page.getByTestId('grammar-index');
      await expect(index.getByRole('heading', { level: 2, name: /B1\.1/ })).toBeVisible();
      await expect(index.getByRole('heading', { level: 2, name: /B1\.2/ })).toBeVisible();
      await page.getByRole('searchbox', { name: 'Search grammar topics' }).fill('genitive');
      await expect(index.getByTestId('grammar-genitive-prepositions')).toBeVisible();
      await expectNoViolations(page, 'library grammar tab with B1');
    });
  });
}
