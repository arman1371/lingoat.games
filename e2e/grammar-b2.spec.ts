import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

async function expectNoViolations(page: Page, label: string) {
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();
  expect(
    results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(' | ')}`),
    `${label}: accessibility violations`,
  ).toEqual([]);
}

test.describe('B2 grammar lessons', () => {
  test('a B2.1 unit lists its topics and the Konjunktiv I lesson shows the generated forms', async ({
    page,
  }) => {
    await page.goto('/levels/b2-1/units/b2-1-besitz');
    const card = page.getByTestId('unit-grammar');
    await expect(card.getByRole('link')).toHaveCount(1);
    await card.getByTestId('grammar-konjunktiv-1').click();

    await expect(
      page.getByRole('heading', { level: 1, name: 'Reported speech: Konjunktiv I' }),
    ).toBeVisible();
    const forms = page.getByRole('table', { name: /Konjunktiv I of four important verbs/ });
    await expect(forms).toBeVisible();
    await expect(forms.getByRole('row', { name: /er\/sie\/es/ })).toContainText('sei');
    await expect(forms.getByRole('row', { name: /wir/ })).toContainText('seien');
    await expectNoViolations(page, 'Konjunktiv I lesson');
  });

  test('a B2.1 unit with two topics opens each of them', async ({ page }) => {
    await page.goto('/levels/b2-1/units/b2-1-wohnen');
    const card = page.getByTestId('unit-grammar');
    await expect(card.getByRole('link')).toHaveCount(2);
    await card.getByTestId('grammar-relative-wer').click();
    await expect(page.getByRole('heading', { level: 1, name: /wer \/ wen \/ wem/ })).toBeVisible();
    await page.goBack();
    await page.getByTestId('unit-grammar').getByTestId('grammar-conditional-b2').click();
    await expect(page.getByRole('heading', { level: 1, name: /falls, sofern/ })).toBeVisible();
  });

  test('a B2.2 unit opens its lesson and the lesson leads to practice', async ({ page }) => {
    await page.goto('/levels/b2-2/units/b2-2-netz');
    await page.getByTestId('unit-grammar').getByTestId('grammar-modal-assumption').click();
    await expect(
      page.getByRole('heading', { level: 1, name: 'Assumptions with modal verbs' }),
    ).toBeVisible();
    await expectNoViolations(page, 'modal assumption lesson');
    await page.getByTestId('practise-topic').click();
    await expect(page).toHaveURL(/\/play\//);
  });

  test('the Library lists B2.1 and B2.2 topics and a shared topic is reachable from both levels', async ({
    page,
  }) => {
    test.slow();
    await page.goto('/library?glvl=b2-2');
    const index = page.getByTestId('grammar-index');
    await expect(index.getByRole('heading', { level: 2, name: /B2\.2/ })).toBeVisible();
    await expect(index.getByTestId('grammar-modal-hearsay')).toBeVisible();
    await expect(index.getByTestId('grammar-konjunktiv-1')).toHaveCount(0);
    await page.goto('/library?glvl=b2-1');
    await expect(index.getByTestId('grammar-konjunktiv-1')).toBeVisible();
    await page.goto('/levels/b2-2/units/b2-2-druck');
    await expect(
      page.getByTestId('unit-grammar').getByTestId('grammar-konjunktiv-1'),
    ).toBeVisible();
  });
});
