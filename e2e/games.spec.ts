import { expect, test } from '@playwright/test';
import { activity, captureSpeech, playPerfectly, SEED } from './helpers';

/** One representative activity per engine, solved from the answers in the content files. */
const REPRESENTATIVE: [engine: string, activityId: string][] = [
  ['flashcards', 'a1-1-hallo-flash'],
  ['quiz', 'a1-1-hallo-time-of-day'],
  ['memory', 'a1-1-hallo-memory-greetings'],
  ['listen', 'a1-1-hallo-listen-greetings'],
  ['spell (unscramble + type)', 'a1-1-hallo-spell-polite'],
  ['spell (dictation)', 'a1-1-zahlen-dictation-phone'],
  ['sentence builder', 'a1-1-hallo-sentences'],
  ['gap fill (chips)', 'a1-1-hallo-gap-greetings'],
  ['gap fill (typing)', 'a1-1-zahlen-gap-math'],
  ['sort it', 'a1-1-hallo-sort-hello-bye'],
  ['conjugation grid', 'a1-1-wer-conj-heissen-sein'],
  ['blitz', 'a1-1-hallo-blitz'],
  ['dialogue', 'a1-1-hallo-dialogues'],
  ['clock (read)', 'a1-1-tag-clock-read'],
  ['clock (set)', 'a1-1-tag-clock-set'],
  ['market', 'a1-1-einkaufen-market-bakery'],
];

test.describe('game engines', () => {
  test.beforeEach(async ({ page }) => {
    await captureSpeech(page);
  });

  for (const [engine, id] of REPRESENTATIVE) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('wrong answers earn a lower score and fill the mistake box', async ({ page }) => {
    const quiz = activity('a1-1-hallo-time-of-day');
    if (quiz.gameType !== 'quiz') throw new Error('expected a quiz');
    await page.goto(`/play/${quiz.id}?seed=${SEED}`);
    await page.getByTestId('start').click();
    const total = quiz.config.questions.length;
    for (let i = 0; i < total; i++) {
      await expect(page.getByTestId('counter')).toHaveText(`${i + 1} / ${total}`);
      const prompt = (await page.getByTestId('prompt').innerText()).trim();
      const q = quiz.config.questions.find((x) => x.prompt === prompt)!;
      // answer the first two questions wrongly, the rest correctly
      const choice = i < 2 ? q.options.find((o) => o !== q.answer)! : q.answer;
      await page.getByRole('button', { name: choice, exact: true }).click();
      await expect(page.getByTestId('feedback')).toHaveAttribute(
        'data-kind',
        i < 2 ? 'wrong' : 'correct',
      );
      await page.getByTestId('continue').click();
    }
    await expect(page.getByRole('heading', { name: 'Well done!' })).toBeVisible();
    await expect(page.getByTestId('accuracy')).toHaveText('60% correct');
    await expect(page.getByRole('img', { name: '1 of 3 stars' })).toBeVisible();
    await expect(page.getByTestId('mistakes-note')).toContainText('2 items');
    await page.goto('/review');
    await expect(page.getByTestId('review-count')).toContainText('2 due');
  });

  test('sentence builder: tiles can be removed and dragged to reorder', async ({ page }) => {
    await page.goto(`/play/a1-1-hallo-sentences?seed=${SEED}`);
    await page.getByTestId('start').click();
    const bank = page.getByRole('group', { name: 'Word bank' });
    const line = page.getByTestId('answer-line');
    const sentences = activity('a1-1-hallo-sentences');
    if (sentences.gameType !== 'sentence') throw new Error('expected sentence builder');
    const prompt = (await page.getByTestId('prompt').innerText()).trim();
    const words = sentences.config.items.find((x) => x.translation === prompt)!.words;
    await bank.getByRole('button', { name: words[1]!, exact: true }).click();
    await bank.getByRole('button', { name: words[0]!, exact: true }).click();
    await expect(line.getByRole('button')).toHaveText([words[1]!, words[0]!]);
    const first = line.getByRole('button').nth(0);
    const second = line.getByRole('button').nth(1);
    const a = (await first.boundingBox())!;
    const b = (await second.boundingBox())!;
    await page.mouse.move(a.x + a.width / 2, a.y + a.height / 2);
    await page.mouse.down();
    await page.mouse.move(a.x + a.width / 2 + 10, a.y + a.height / 2, { steps: 4 });
    await page.mouse.move(b.x + b.width / 2 + 10, b.y + b.height / 2, { steps: 10 });
    await page.mouse.up();
    await expect(line.getByRole('button')).toHaveText([words[0]!, words[1]!]);
  });

  test('sort it: a card can be dragged into a box', async ({ page }) => {
    await page.goto(`/play/a1-1-hallo-sort-hello-bye?seed=${SEED}`);
    await page.getByTestId('start').click();
    const text = (await page.getByTestId('prompt').innerText()).trim();
    const bucket = ['Hallo', 'Guten Morgen', 'Guten Tag', 'Guten Abend', 'Moin'].includes(text)
      ? 'hello'
      : 'bye';
    const card = page
      .getByTestId('prompt')
      .locator('xpath=ancestor::div[@aria-roledescription="draggable"]');
    const target = page.getByTestId(`bucket-${bucket}`);
    const from = (await card.boundingBox())!;
    const to = (await target.boundingBox())!;
    await page.mouse.move(from.x + from.width / 2, from.y + from.height / 2);
    await page.mouse.down();
    await page.mouse.move(from.x + from.width / 2 + 12, from.y + from.height / 2 + 12, {
      steps: 4,
    });
    await page.mouse.move(to.x + to.width / 2, to.y + to.height / 2, { steps: 12 });
    await page.mouse.up();
    await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
    await expect(page.getByTestId('translation')).toBeVisible();
    await expect(target).toHaveClass(/border-success/);
    await page.getByTestId('continue').click();
    await expect(page.getByTestId('counter')).toHaveText(/^2 \//);
  });

  test('blitz relaxed mode has no countdown', async ({ page }) => {
    await page.goto(`/play/a1-1-hallo-blitz?seed=${SEED}`);
    await page.getByTestId('start').click();
    await page.getByLabel(/Relaxed mode/).check();
    await page.getByTestId('blitz-start').click();
    await expect(page.getByTestId('timer')).toHaveText('∞');
  });
});
