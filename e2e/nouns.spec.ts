import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { buildNounIndex, findGapNoun, sentenceNouns } from '../src/lib/german/nouns';
import { activity, allVocab, SEED } from './helpers';

const nouns = buildNounIndex(allVocab);
const squash = (t: string) => t.replace(/\s+/g, ' ').trim();

/** A gap fill with chips: pick the right chip on `right` rounds and a wrong one otherwise. */
async function play(page: Page, id: string, right: (round: number) => boolean) {
  const a = activity(id);
  if (a.gameType !== 'gapfill') throw new Error('expected a gap fill');
  await page.goto(`/play/${id}?seed=${SEED}`);
  await page.getByTestId('start').click();
  const seen: { text: string; answer: string; expected: string | null }[] = [];
  for (let round = 0; round < a.config.items.length; round++) {
    const shown = squash(await page.getByTestId('sentence').innerText());
    const item = a.config.items.find((i) => squash(i.text.replace('___', '…')) === shown)!;
    const pick = right(round) ? item.answer : item.options!.find((o) => o !== item.answer)!;
    await page.getByRole('button', { name: pick, exact: true }).click();
    const found = findGapNoun(item.text, item.answer, nouns);
    const expected = found ? `${found.article} ${found.noun}` : null;
    seen.push({ text: item.text, answer: item.answer, expected });
    await expect(page.getByTestId('feedback')).toHaveAttribute(
      'data-kind',
      right(round) ? 'correct' : 'wrong',
    );
    if (expected) await expect(page.getByTestId('noun-article-noun')).toHaveText(expected);
    else await expect(page.getByTestId('noun-article')).toHaveCount(0);
    await page.getByTestId('continue').click();
  }
  return seen;
}

test.describe('noun article in the answer feedback', () => {
  test('shows the noun and its article after a right and after a wrong answer', async ({
    page,
  }) => {
    const seen = await play(page, 'a1-1-einkaufen-gap-accusative', (round) => round % 2 === 0);
    // the activity is about den/einen before masculine nouns, so most rounds carry the row
    expect(seen.filter((s) => s.expected).length).toBeGreaterThanOrEqual(3);
  });

  test('stays out of gaps that do not depend on an article', async ({ page }) => {
    const id = 'a1-1-hallo-gap-greetings';
    const a = activity(id);
    if (a.gameType !== 'gapfill') throw new Error('expected a gap fill');
    const seen = await play(page, id, () => false);
    expect(seen.every((s) => s.expected === null)).toBe(true);
  });

  for (const scheme of ['light', 'dark'] as const) {
    test(`the noun row passes axe on a wrong answer (${scheme})`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme });
      await page.goto(`/play/a1-1-einkaufen-gap-accusative?seed=${SEED}`);
      await page.getByTestId('start').click();
      const a = activity('a1-1-einkaufen-gap-accusative');
      if (a.gameType !== 'gapfill') throw new Error('expected a gap fill');
      const shown = squash(await page.getByTestId('sentence').innerText());
      const item = a.config.items.find((i) => squash(i.text.replace('___', '…')) === shown)!;
      await page
        .getByRole('button', { name: item.options!.find((o) => o !== item.answer)!, exact: true })
        .click();
      await expect(page.getByTestId('noun-article')).toBeVisible();
      await page.evaluate(() =>
        Promise.allSettled(document.getAnimations().map((anim) => anim.finished)),
      );
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      expect(results.violations.map((v) => v.id)).toEqual([]);
    });
  }
});

test.describe('noun articles up front in a case drill', () => {
  const CASE_DRILL = 'a2-1-wohnung-gap-wohin';

  test('lists the articles of the sentence before the player answers', async ({ page }) => {
    const a = activity(CASE_DRILL);
    if (a.gameType !== 'gapfill') throw new Error('expected a gap fill');
    await page.goto(`/play/${CASE_DRILL}?seed=${SEED}`);
    await page.getByTestId('start').click();
    for (let round = 0; round < a.config.items.length; round++) {
      const shown = squash(await page.getByTestId('sentence').innerText());
      const item = a.config.items.find((i) => squash(i.text.replace('___', '…')) === shown)!;
      const expected = sentenceNouns(item.text, nouns).map((n) => `${n.article} ${n.noun}`);
      if (expected.length) {
        await expect(page.getByTestId('sentence-noun')).toHaveText(expected);
      } else {
        await expect(page.getByTestId('sentence-nouns')).toHaveCount(0);
      }
      await page.getByRole('button', { name: item.answer, exact: true }).click();
      await page.getByTestId('continue').click();
    }
  });

  test('stays out of a game that practises the article itself', async ({ page }) => {
    await page.goto(`/play/a1-1-einkaufen-gap-articles?seed=${SEED}`);
    await page.getByTestId('start').click();
    await expect(page.getByTestId('sentence')).toBeVisible();
    await expect(page.getByTestId('sentence-nouns')).toHaveCount(0);
  });

  for (const scheme of ['light', 'dark'] as const) {
    test(`the noun row passes axe (${scheme})`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme });
      await page.goto(`/play/${CASE_DRILL}?seed=${SEED}`);
      await page.getByTestId('start').click();
      await expect(page.getByTestId('sentence-nouns')).toBeVisible();
      await page.evaluate(() =>
        Promise.allSettled(document.getAnimations().map((anim) => anim.finished)),
      );
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      expect(results.violations.map((v) => v.id)).toEqual([]);
    });
  }
});
