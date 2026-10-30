import { readFile } from 'node:fs/promises';
import { expect, test } from '@playwright/test';
import { captureSpeech, playPerfectly } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

const GAME = 'a1-1-hallo-flash';

test('progress and settings move to another device through an exported file', async ({
  page,
  browser,
}) => {
  await playPerfectly(page, GAME);
  await page.goto('/profile');
  await page.getByLabel('100', { exact: true }).check({ force: true });
  await page.getByLabel('Dark', { exact: true }).check({ force: true });

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export progress' }).click(),
  ]);
  expect(download.suggestedFilename()).toMatch(/^lingoat-progress-\d{4}-\d{2}-\d{2}\.json$/);
  await expect(page.getByText('Progress file saved.')).toBeVisible();
  const file = await download.path();
  const saved = JSON.parse(await readFile(file, 'utf8'));
  expect(saved).toMatchObject({ format: 'lingoat-progress', schemaVersion: 2 });
  expect(saved.progress.de.activities[GAME]).toBeTruthy();

  // a second, empty browser profile = the other device
  const other = await (await browser.newContext()).newPage();
  await captureSpeech(other);
  await other.goto('/profile');
  await other.getByTestId('import-file').setInputFiles(file);
  const dialog = other.getByRole('dialog', { name: 'Import this progress?' });
  await expect(dialog).toContainText(`${saved.progress.de.xp} XP`);
  await dialog.getByRole('button', { name: 'Cancel' }).click();
  await expect(other.getByLabel('Dark', { exact: true })).not.toBeChecked();

  await other.getByTestId('import-file').setInputFiles(file);
  await other
    .getByRole('dialog', { name: 'Import this progress?' })
    .getByRole('button', { name: 'Import' })
    .click();
  await expect(other.getByText('Progress imported.')).toBeVisible();
  await expect(other.getByLabel('Dark', { exact: true })).toBeChecked();
  await expect(other.getByLabel('100', { exact: true })).toBeChecked();

  await other.goto('/progress');
  await expect(other.getByText(`${saved.progress.de.xp}`).first()).toBeVisible();
  await other.goto('/profile');
  await expect(other.getByLabel('Dark', { exact: true })).toBeChecked();
});

test('a file that is not a progress file is refused and nothing changes', async ({ page }) => {
  await playPerfectly(page, GAME);
  await page.goto('/profile');
  const stored = () => page.evaluate(() => localStorage.getItem('lingoat.progress'));
  const before = await stored();
  expect(before).toContain(GAME);
  await page.getByTestId('import-file').setInputFiles({
    name: 'notes.json',
    mimeType: 'application/json',
    buffer: Buffer.from('{"hello":"world"}'),
  });
  const dialog = page.getByRole('dialog', { name: "Can't import this file" });
  await expect(dialog).toContainText('not a Lingoat progress file');
  await dialog.getByRole('button', { name: 'Close' }).click();
  await expect(dialog).toBeHidden();
  expect(await stored()).toBe(before);
});

test('replace makes the device an exact copy of the file', async ({ page, browser }) => {
  await playPerfectly(page, GAME);
  await page.goto('/profile');
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export progress' }).click(),
  ]);
  const file = await download.path();

  const other = await (await browser.newContext()).newPage();
  await captureSpeech(other);
  await playPerfectly(other, 'a1-1-hallo-time-of-day');
  await other.goto('/profile');
  await other.getByTestId('import-file').setInputFiles(file);
  const dialog = other.getByRole('dialog', { name: 'Import this progress?' });
  await expect(dialog.getByLabel(/^Merge/)).toBeChecked();
  await dialog.getByLabel(/^Replace/).check({ force: true });
  await dialog.getByRole('button', { name: 'Replace' }).click();
  await expect(other.getByText('Progress imported.')).toBeVisible();

  const games = await other.evaluate(() =>
    Object.keys(JSON.parse(localStorage.getItem('lingoat.progress')!).state.activities),
  );
  expect(games).toEqual([GAME]);
});
