import { expect, test } from '@playwright/test';

test('the profile links to the GitHub repo in a new tab', async ({ page }) => {
  await page.goto('/profile');
  const link = page.getByRole('link', { name: /Star Lingoat on GitHub/ });
  await link.scrollIntoViewIfNeeded();
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute('href', 'https://github.com/arman1371/lingoat.games');
  await expect(link).toHaveAttribute('target', '_blank');
  await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
});
