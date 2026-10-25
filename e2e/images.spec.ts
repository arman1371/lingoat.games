import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { captureSpeech, SEED } from './helpers';

/** 8×8 green WebP: stands in for a photo served from /img/. */
const PHOTO = Buffer.from(
  'UklGRjAAAABXRUJQVlA4ICQAAABwAQCdASoIAAgAA4BaJaACdAFAAAD+u7b1ovBfxv9WvkyHAAA=',
  'base64',
);

// the service worker would answer /img/ requests before page.route sees them
test.use({ serviceWorkers: 'block' });

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

/** Serve a photo for the words in `served`; every other /img/ request fails like a missing file. */
async function servePhotos(page: Page, served: string[]) {
  await page.route('**/img/*.webp', (route) => {
    const id = new URL(route.request().url()).pathname.replace('/img/', '').replace('.webp', '');
    return served.includes(id)
      ? route.fulfill({ status: 200, contentType: 'image/webp', body: PHOTO })
      : route.fulfill({ status: 404, body: 'not found' });
  });
}

const FOOD_CARDS = '/play/a1-1-einkaufen-flash-food';

test.describe('word photos', () => {
  test('a flashcard shows the photo of a word that has one', async ({ page }) => {
    await servePhotos(page, ['a1-1-einkaufen-brot']);
    await page.goto(`${FOOD_CARDS}?seed=${SEED}`);
    await page.getByTestId('start').click();
    // the cards come in a fixed order for a seed: walk until the one with a photo shows up
    const photo = page.locator('[data-testid=word-photo][src$="einkaufen-brot.webp"]');
    await expect(page.getByTestId('card')).toBeVisible();
    for (let i = 0; i < 16 && !(await photo.count()); i++) {
      await page.getByTestId('card').click();
      await page.getByRole('button', { name: /Got it/ }).click();
    }
    await expect(photo).toBeVisible();
    await expect(photo).toHaveAttribute('alt', '');
    await expect
      .poll(() => photo.evaluate((img: HTMLImageElement) => img.naturalWidth))
      .toBeGreaterThan(0);
  });

  test('a photo that fails to load falls back to the emoji', async ({ page }) => {
    await servePhotos(page, []);
    await page.goto(`${FOOD_CARDS}?seed=${SEED}`);
    await page.getByTestId('start').click();
    await expect(page.getByTestId('emoji')).toBeVisible();
    await expect(page.getByTestId('word-photo')).toHaveCount(0);
  });

  test('the quiz question keeps its emoji for words without a photo', async ({ page }) => {
    await servePhotos(page, []);
    await page.goto(`/play/a1-1-einkaufen-quiz-food?seed=${SEED}`);
    await page.getByTestId('start').click();
    await expect(page.getByTestId('prompt')).toBeVisible();
    await expect(page.getByTestId('emoji')).toBeVisible();
  });
});

test.describe('image credits', () => {
  test('are reachable from the profile and link to Pixabay', async ({ page }) => {
    await servePhotos(page, []);
    await page.goto('/profile');
    await page.getByRole('link', { name: /Image credits/ }).click();
    await expect(page.getByRole('heading', { name: 'Image credits', level: 1 })).toBeVisible();
    await page.getByRole('searchbox', { name: 'Search words' }).fill('apfel');
    const link = page.getByRole('link', { name: /der Apfel/ }).first();
    await expect(link).toHaveAttribute('href', /^https:\/\/pixabay\.com\/photos\//);
    await expect(link).toHaveAttribute('target', '_blank');
  });

  for (const scheme of ['light', 'dark'] as const) {
    test(`have no accessibility violations (${scheme})`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme });
      await servePhotos(page, []);
      await page.goto('/credits');
      await expect(page.getByRole('heading', { name: 'Image credits', level: 1 })).toBeVisible();
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      expect(results.violations.map((v) => v.id)).toEqual([]);
    });
  }
});
