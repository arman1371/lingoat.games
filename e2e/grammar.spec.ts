import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { activity, SEED } from './helpers';

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
  test.describe(`grammar lessons (${scheme})`, () => {
    test.use({ colorScheme: scheme });

    test('a unit lists its topics and each opens a full lesson', async ({ page }) => {
      await page.goto('/levels/a1-2/units/a1-2-wohnen');
      const card = page.getByTestId('unit-grammar');
      await expect(card).toBeVisible();
      await expect(card.getByRole('link')).toHaveCount(2);
      await card.getByTestId('grammar-dative').click();

      await expect(page.getByRole('heading', { level: 1, name: 'Dative (Wem?)' })).toBeVisible();
      await expect(page).toHaveURL(/\/library\/grammar\/dative$/);
      await expect(page.getByText(/native-reviewed/)).toHaveCount(0);
      const table = page.getByRole('table', {
        name: /definite article in three cases; the dative/,
      });
      await expect(table).toBeVisible();
      await expect(table.getByRole('row', { name: /Dative/ })).toContainText('den + -n');
      await expectNoViolations(page, 'dative lesson');

      // the lesson links back to units and on to a practice game
      await page.getByTestId('practise-topic').click();
      await expect(page).toHaveURL(/\/play\//);
    });

    test('A2 units link to their lessons, which render generated tables', async ({ page }) => {
      await page.goto('/levels/a2-2/units/a2-2-kunst');
      const card = page.getByTestId('unit-grammar');
      await expect(card.getByRole('link')).toHaveCount(2);
      await card.getByTestId('grammar-adjective-endings').click();
      await expect(
        page.getByRole('heading', { level: 1, name: 'Adjective endings' }),
      ).toBeVisible();
      const table = page.getByRole('table', { name: /Adjective endings after der, die, das/ });
      await expect(table.getByRole('row', { name: /Accusative/ })).toContainText('den neuen Film');
      await expect(table.getByRole('row', { name: /Dative/ })).toContainText('den neuen Liedern');
      await expectNoViolations(page, 'adjective endings lesson');

      await page.goto('/levels/a2-1/units/a2-1-wetter');
      await page.getByTestId('unit-grammar').getByTestId('grammar-superlative').click();
      await expect(page.getByRole('heading', { level: 1, name: 'The superlative' })).toBeVisible();
      await expectNoViolations(page, 'superlative lesson');
    });

    test('the Library opens on grammar with a level filter and search, games are the second tab', async ({
      page,
    }) => {
      test.slow();
      await page.goto('/');
      await page
        .getByRole('navigation', { name: 'Main' })
        .getByRole('link', { name: 'Library' })
        .click();
      await expect(page).toHaveURL(/\/library$/);
      await expect(page.getByRole('tab', { name: 'Grammar' })).toHaveAttribute(
        'aria-selected',
        'true',
      );
      const index = page.getByTestId('grammar-index');
      await expect(index.getByRole('heading', { level: 2, name: /A1\.1/ })).toBeVisible();
      await expectNoViolations(page, 'library grammar tab');
      await index.getByRole('button', { name: 'A1.2' }).click();
      await expect(index.getByRole('heading', { level: 2, name: /A1\.1/ })).toHaveCount(0);
      await index.getByRole('button', { name: 'All' }).click();
      await page.getByRole('searchbox', { name: 'Search grammar topics' }).fill('perfekt');
      await expect(index.getByTestId('grammar-perfekt')).toBeVisible();
      await expect(index.getByTestId('grammar-dative')).toHaveCount(0);
      await index.getByTestId('grammar-perfekt').click();
      await expect(page.getByRole('heading', { level: 1, name: 'The Perfekt' })).toBeVisible();

      await page.goto('/library');
      await page.getByRole('tab', { name: 'Games' }).click();
      await expect(page).toHaveURL(/\/library\?view=games$/);
      await expect(page.getByTestId('result-count')).toBeVisible();
    });

    test('after a mistake the full lesson opens over the game and keeps the round', async ({
      page,
    }) => {
      const id = 'a1-2-wohnen-gap-wo';
      const a = activity(id);
      if (a.gameType !== 'gapfill') throw new Error('expected a gap fill');
      await page.goto(`/play/${id}?seed=${SEED}`);
      await page.getByTestId('start').click();
      const squash = (t: string) => t.replace(/\s+/g, ' ').trim();
      const shown = squash(await page.getByTestId('sentence').innerText());
      const item = a.config.items.find((i) => squash(i.text.replace('___', '…')) === shown)!;
      const wrong = item.options!.find((o) => o !== item.answer)!;
      await page.getByRole('button', { name: wrong, exact: true }).click();
      await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');

      const open = page.getByTestId('full-lesson');
      await expect(open).toContainText('Full lesson: Wo? or Wohin?');
      await open.click();
      const sheet = page.getByRole('dialog', { name: 'Wo? or Wohin?' });
      await expect(sheet).toBeVisible();
      await expect(sheet.getByTestId('grammar-lesson')).toBeVisible();
      await expectNoViolations(page, 'lesson sheet');

      await page.keyboard.press('Escape');
      await expect(sheet).toBeHidden();
      await expect(open).toBeFocused();
      // still on the same question, feedback intact
      await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
      await expect(page).toHaveURL(new RegExp(`/play/${id}`));
    });
  });
}
