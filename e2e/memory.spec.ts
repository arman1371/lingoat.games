import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { buildColumns } from '../src/games/memory/logic';
import { activity, SEED } from './helpers';

const memory = activity('a1-1-hallo-memory-greetings');
if (memory.gameType !== 'memory') throw new Error('expected a memory game');
const { pairs } = memory.config;
const { left, right } = buildColumns(pairs, SEED);

async function open(page: Page) {
  await page.goto(`/play/${memory.id}?seed=${SEED}`);
  await page.getByTestId('start').click();
  await expect(page.getByTestId('memory-card')).toHaveCount(pairs.length * 2);
}

const cardOf = (page: Page, pairId: string, side: 'a' | 'b') =>
  page
    .getByTestId('memory-card')
    .nth(
      side === 'a'
        ? left.findIndex((c) => c.pairId === pairId)
        : left.length + right.findIndex((c) => c.pairId === pairId),
    );

async function expectNoViolations(page: Page, label: string) {
  // let the shake / pop animations finish: axe measures contrast on the current frame
  await page.evaluate(() => Promise.allSettled(document.getAnimations().map((a) => a.finished)));
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();
  expect(
    results.violations.map((v) => v.id),
    `${label}: accessibility violations`,
  ).toEqual([]);
}

test.describe('memory: two columns', () => {
  test('shows every word and every match side by side from the start', async ({ page }) => {
    await open(page);
    const cards = page.getByTestId('memory-card');
    const viewport = page.viewportSize()!;
    const boxes = await Promise.all(
      Array.from({ length: pairs.length * 2 }, (_, i) => cards.nth(i).boundingBox()),
    );
    const leftBoxes = boxes.slice(0, pairs.length).map((b) => b!);
    const rightBoxes = boxes.slice(pairs.length).map((b) => b!);
    // two real columns, nothing wider than the screen (no sideways scrolling on phones)
    for (const b of [...leftBoxes, ...rightBoxes]) {
      expect(b.x).toBeGreaterThanOrEqual(0);
      expect(b.x + b.width).toBeLessThanOrEqual(viewport.width);
    }
    expect(Math.max(...leftBoxes.map((b) => b.x + b.width))).toBeLessThanOrEqual(
      Math.min(...rightBoxes.map((b) => b.x)),
    );
    for (const p of pairs) {
      await expect(cardOf(page, p.id, 'a')).toHaveText(p.a);
      await expect(cardOf(page, p.id, 'b')).toHaveText(p.b);
    }
    await expect(page.getByRole('group', { name: 'Word' })).toBeVisible();
    await expect(page.getByRole('group', { name: 'Match' })).toBeVisible();
  });

  test('a wrong pair shakes and stays marked until the next tap, a right pair locks', async ({
    page,
  }) => {
    await open(page);
    const [first, second] = pairs;
    await cardOf(page, first!.id, 'a').click();
    await expect(cardOf(page, first!.id, 'a')).toHaveAttribute('data-state', 'selected');
    await expectNoViolations(page, 'memory selected');
    await cardOf(page, second!.id, 'b').click();
    await expect(cardOf(page, first!.id, 'a')).toHaveAttribute('data-state', 'wrong');
    await expect(cardOf(page, second!.id, 'b')).toHaveAttribute('data-state', 'wrong');
    await expect(page.getByRole('status')).toContainText('Not a pair');
    await expectNoViolations(page, 'memory wrong pair');

    await cardOf(page, first!.id, 'a').click();
    await cardOf(page, first!.id, 'b').click();
    await expect(cardOf(page, first!.id, 'a')).toHaveAttribute('data-state', 'matched');
    await expect(cardOf(page, first!.id, 'b')).toHaveAttribute('data-state', 'matched');
    await expect(cardOf(page, second!.id, 'b')).toHaveAttribute('data-state', 'idle');
    await expect(page.getByTestId('pairs-found')).toHaveText(`1 / ${pairs.length} pairs`);
    await expectNoViolations(page, 'memory matched');
  });

  test('can be played with the keyboard only', async ({ page, isMobile }) => {
    test.skip(isMobile, 'keyboard flow is a desktop concern');
    await open(page);
    for (const p of pairs) {
      const a = cardOf(page, p.id, 'a');
      const b = cardOf(page, p.id, 'b');
      await a.focus();
      await page.keyboard.press('Enter');
      await expect(a).toHaveAttribute('aria-pressed', 'true');
      await b.focus();
      await page.keyboard.press('Space');
      await expect(a).toHaveAttribute('data-state', 'matched');
      await expect(b).toBeFocused();
    }
    await expect(page.getByRole('heading', { name: 'Well done!' })).toBeVisible();
  });
});
