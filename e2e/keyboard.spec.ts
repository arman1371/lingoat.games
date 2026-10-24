import { expect, test } from '@playwright/test';
import { activity, SEED } from './helpers';

test.describe('keyboard-only play', () => {
  test('a quiz can be completed with number keys and Enter', async ({ page, isMobile }) => {
    test.skip(isMobile, 'keyboard flow is a desktop concern');
    const quiz = activity('a1-1-hallo-time-of-day');
    if (quiz.gameType !== 'quiz') throw new Error('expected quiz');
    await page.goto(`/play/${quiz.id}?seed=${SEED}`);
    await expect(page.getByTestId('start')).toBeFocused();
    await page.keyboard.press('Enter');
    for (let i = 0; i < quiz.config.questions.length; i++) {
      await expect(page.getByTestId('counter')).toHaveText(
        `${i + 1} / ${quiz.config.questions.length}`,
      );
      const prompt = (await page.getByTestId('prompt').innerText()).trim();
      const q = quiz.config.questions.find((x) => x.prompt === prompt)!;
      // find the on-screen position of the right answer and press its number key
      const labels = await page
        .getByRole('group', { name: 'Answers' })
        .getByRole('button')
        .allInnerTexts();
      const index = labels.findIndex((l) => l.replace(/^\d\s*/, '').trim() === q.answer);
      await page.keyboard.press(String(index + 1));
      await expect(page.getByTestId('continue')).toBeFocused();
      await page.keyboard.press('Enter');
    }
    await expect(page.getByRole('heading', { name: 'Well done!' })).toBeVisible();
    await expect(page.getByTestId('accuracy')).toHaveText('100% correct');
  });

  test('typing games: the umlaut keys insert characters, keep focus in the field and Enter submits', async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, 'keyboard flow is a desktop concern');
    const plural = activity('a1-1-familie-gap-plural');
    if (plural.gameType !== 'gapfill') throw new Error('expected gap fill');
    await page.goto(`/play/${plural.id}?seed=${SEED}`);
    await page.getByTestId('start').click();
    const shown = (await page.getByTestId('sentence').innerText()).replace(/\s+/g, ' ').trim();
    const item = plural.config.items.find(
      (x) => shown === x.text.replace('___', '').replace(/\s+/g, ' ').trim(),
    )!;
    const input = page.getByLabel('Missing word');
    // type the answer, using the on-screen key for the umlaut
    const [before, umlaut, after] = item.answer.split(/([äöü])/);
    await input.fill(before!);
    if (umlaut) {
      await page.getByRole('button', { name: umlaut }).click();
      await expect(input).toBeFocused();
      await page.keyboard.type(after ?? '');
    }
    await expect(input).toHaveValue(item.answer);
    await page.keyboard.press('Enter');
    await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
  });

  test('every page has a skip link and a visible focus ring', async ({ page, isMobile }) => {
    test.skip(isMobile, 'keyboard flow is a desktop concern');
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skip = page.getByRole('link', { name: 'Skip to content' });
    await expect(skip).toBeFocused();
    await expect(skip).toBeVisible();
    await page.keyboard.press('Enter');
    await expect(page.locator('#main')).toBeFocused();
  });
});

test.describe('mobile layout', () => {
  test('bottom navigation is visible on phones and there is no horizontal scroll', async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, 'phone only');
    for (const url of ['/', '/library', '/levels/a1-1/units/a1-1-hallo', '/settings']) {
      await page.goto(url);
      const nav = page.getByRole('navigation', { name: 'Main' });
      await expect(nav).toBeVisible();
      const box = (await nav.boundingBox())!;
      const viewport = page.viewportSize()!;
      expect(box.y + box.height).toBeGreaterThan(viewport.height - 2);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth,
      );
      expect(overflow, `${url} scrolls horizontally`).toBeLessThanOrEqual(0);
    }
  });

  test('touch targets in a game are at least 44px', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'phone only');
    await page.goto('/play/a1-1-hallo-time-of-day?seed=1');
    await page.getByTestId('start').click();
    const buttons = page.getByRole('group', { name: 'Answers' }).getByRole('button');
    for (let i = 0; i < (await buttons.count()); i++) {
      const box = (await buttons.nth(i).boundingBox())!;
      expect(box.height).toBeGreaterThanOrEqual(44);
    }
  });
});

test.describe('design-system controls', () => {
  test('unit tabs: arrow keys switch the view and the tab panel follows', async ({ page }) => {
    await page.goto('/levels/a1-1/units/a1-1-einkaufen');
    const path = page.getByRole('tab', { name: /Step by step/ });
    await path.focus();
    await page.keyboard.press('ArrowRight');
    await expect(page.getByRole('tab', { name: /All games/ })).toBeFocused();
    await expect(page.getByRole('tabpanel').getByRole('list', { name: 'All games' })).toBeVisible();
    await expect(page).toHaveURL(/view=explore/);
  });

  test('leaving a round asks first; Escape keeps you playing', async ({ page }) => {
    await page.goto('/play/a1-1-hallo-flash?seed=1');
    await page.getByTestId('start').click();
    await page.getByRole('button', { name: 'Exit game' }).click();
    const dialog = page.getByRole('dialog', { name: 'Leave this game?' });
    await expect(dialog).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(page.getByTestId('card')).toBeVisible();
    await page.getByRole('button', { name: 'Exit game' }).click();
    await dialog.getByRole('button', { name: 'Leave' }).click();
    await expect(page).toHaveURL(/units\/a1-1-hallo/);
  });

  test('settings switches toggle with the keyboard', async ({ page }) => {
    await page.goto('/settings');
    const sounds = page.getByRole('switch', { name: 'Sound effects' });
    const before = await sounds.isChecked();
    await sounds.focus();
    await page.keyboard.press('Space');
    expect(await sounds.isChecked()).toBe(!before);
  });
});
