/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect, test, type Page } from '@playwright/test';
import { activity, captureSpeech, SEED } from './helpers';

const spoken = (page: Page) => page.evaluate(() => [...((window as any).__spoken as string[])]);

const sentences = activity('a1-1-hallo-sentences');
const gaps = activity('a1-1-zahlen-gap-math');
const dialogues = activity('a1-1-hallo-dialogues');
if (sentences.gameType !== 'sentence') throw new Error('expected a sentence builder');
if (gaps.gameType !== 'gapfill') throw new Error('expected a gap fill');
if (dialogues.gameType !== 'dialogue') throw new Error('expected a dialogue');

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test('sentence builder speaks every word as it is tapped', async ({ page }) => {
  await page.goto(`/play/${sentences.id}?seed=${SEED}`);
  await page.getByTestId('start').click();
  const prompt = (await page.getByTestId('prompt').innerText()).trim();
  const words = sentences.config.items.find((x) => x.translation === prompt)!.words;
  expect(await spoken(page)).toEqual([]);
  const bank = page.getByRole('group', { name: 'Word bank' });
  for (const word of words) await bank.getByRole('button', { name: word, exact: true }).click();
  expect(await spoken(page)).toEqual(words);
});

test('gap fill reads the sentence without the missing word, once', async ({ page }) => {
  await page.goto(`/play/${gaps.id}?seed=${SEED}`);
  await page.getByTestId('start').click();
  await expect.poll(async () => (await spoken(page)).length).toBe(1);
  const [said] = await spoken(page);
  const item = gaps.config.items.find(
    (x) =>
      x.text
        .split('___')
        .map((p) => p.trim())
        .filter((p) => /\p{L}/u.test(p))
        .join(', ') === said,
  )!;
  expect(item).toBeTruthy();
  expect(said).not.toContain('___');
  const field = page.getByLabel('Missing word');
  await field.fill(item.answer);
  await field.press('Enter');
  await expect(page.getByTestId('feedback')).toBeVisible();
  expect(await spoken(page)).toEqual([said]);
});

test('dialogue speaks the speaker lines as they appear', async ({ page }) => {
  await page.goto(`/play/${dialogues.id}?seed=${SEED}`);
  await page.getByTestId('start').click();
  await expect.poll(async () => (await spoken(page)).length).toBe(1);
  const scene = dialogues.config.scenes[0]!;
  const first = scene.turns.find((t) => t.kind === 'npc')!;
  expect((await spoken(page))[0]).toBe(first.kind === 'npc' ? first.text : '');
});

test('"Read sentences aloud" can be switched off in settings and stays off', async ({ page }) => {
  await page.goto('/settings');
  const toggle = page.getByRole('switch', { name: 'Read sentences aloud' });
  await expect(toggle).toBeChecked();
  await toggle.uncheck();
  await page.reload();
  await expect(toggle).not.toBeChecked();

  await page.goto(`/play/${sentences.id}?seed=${SEED}`);
  await page.getByTestId('start').click();
  await page.getByRole('group', { name: 'Word bank' }).getByRole('button').first().click();
  await page.goto(`/play/${gaps.id}?seed=${SEED}`);
  await page.getByTestId('start').click();
  await expect(page.getByTestId('sentence')).toBeVisible();
  expect(await spoken(page)).toEqual([]);
});
