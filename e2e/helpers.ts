/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect, type Page } from '@playwright/test';
import a11 from '../src/content/a1-1';
import a12 from '../src/content/a1-2';
import a21 from '../src/content/a2-1';
import a22 from '../src/content/a2-2';
import b11 from '../src/content/b1-1';
import c12 from '../src/content/c1-2';
import b12 from '../src/content/b1-2';
import b21 from '../src/content/b2-1';
import b22 from '../src/content/b2-2';
import c11 from '../src/content/c1-1';
import c21 from '../src/content/c2-1';
import c22 from '../src/content/c2-2';
import type { Activity, Vocab } from '../src/content/schema';
import { parseTime, timeToGerman } from '../src/lib/german/time';
import { totalCents } from '../src/games/market/logic';
import { buildColumns } from '../src/games/memory/logic';
import { priceToGerman } from '../src/lib/german/numbers';

export const SEED = 1;

/** Every activity of every available level. */
export const allActivities: Activity[] = [
  ...a11.activities,
  ...a12.activities,
  ...a21.activities,
  ...a22.activities,
  ...b11.activities,
  ...c12.activities,
  ...b12.activities,
  ...b21.activities,
  ...b22.activities,
  ...c11.activities,
  ...c21.activities,
  ...c22.activities,
];

/** Every vocabulary entry of every available level. */
export const allVocab: Vocab[] = [
  a11,
  a12,
  a21,
  a22,
  b11,
  c12,
  b12,
  b21,
  b22,
  c11,
  c21,
  c22,
].flatMap((level) => level.vocab);

export const activity = (id: string): Activity => {
  const a = allActivities.find((x) => x.id === id);
  if (!a) throw new Error(`Unknown activity ${id}`);
  return a;
};

/** Replace speechSynthesis.speak with a recorder so listening games can be "heard" by the test. */
export async function captureSpeech(page: Page) {
  await page.addInitScript(() => {
    const w = window as any;
    w.__spoken = [];
    const synth = window.speechSynthesis;
    synth.speak = (u: SpeechSynthesisUtterance) => {
      w.__spoken.push(u.text);
      setTimeout(() => (u.onend as any)?.(new Event('end')), 0);
    };
    synth.cancel = () => {};
  });
}

const lastSpoken = (page: Page) =>
  page.evaluate(() => ((window as any).__spoken as string[]).at(-1) ?? '');

/** Wait until the app has spoken one of the given sentences and return it. */
async function waitForSpoken(page: Page, candidates: Set<string>): Promise<string> {
  await page.waitForFunction(
    (list) => list.includes(((window as any).__spoken as string[]).at(-1) ?? ''),
    [...candidates],
  );
  return lastSpoken(page);
}

const norm = (s: string | null) => (s ?? '').replace(/\s+/g, ' ').trim();
const prompt = async (page: Page) => norm(await page.getByTestId('prompt').innerText());
const cont = (page: Page) => page.getByTestId('continue').click();

async function waitForRound(page: Page, index: number, total: number) {
  await expect(page.getByTestId('counter')).toHaveText(`${index + 1} / ${total}`);
}

type Solver = (page: Page, config: any) => Promise<void>;

const solvers: Record<Activity['gameType'], Solver> = {
  async flashcards(page, c) {
    for (let i = 0; i < c.cards.length; i++) {
      await waitForRound(page, i, c.cards.length);
      await page.getByTestId('card').click();
      await page.getByRole('button', { name: /Got it/ }).click();
    }
  },

  async quiz(page, c) {
    for (let i = 0; i < c.questions.length; i++) {
      await waitForRound(page, i, c.questions.length);
      const p = await prompt(page);
      const emoji = (await page.getByTestId('emoji').count())
        ? norm(await page.getByTestId('emoji').innerText())
        : undefined;
      const q = c.questions.find((x: any) => x.prompt === p && (x.emoji ?? undefined) === emoji);
      await page.getByRole('button', { name: q.answer, exact: true }).click();
      await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
      await cont(page);
    }
  },

  async listen(page, c) {
    const remaining = new Set<string>(c.items.map((x: any) => x.speak));
    for (let i = 0; i < c.items.length; i++) {
      await waitForRound(page, i, c.items.length);
      const spoken = await waitForSpoken(page, remaining);
      remaining.delete(spoken);
      const q = c.items.find((x: any) => x.speak === spoken);
      await page.getByRole('button', { name: q.answer, exact: true }).click();
      await cont(page);
    }
  },

  async memory(page, c) {
    // the ?seed= URL parameter makes the deck order reproducible
    const { left, right } = buildColumns(c.pairs, SEED);
    const cards = page.getByTestId('memory-card');
    for (const p of c.pairs) {
      const a = cards.nth(left.findIndex((d) => d.pairId === p.id));
      const b = cards.nth(left.length + right.findIndex((d) => d.pairId === p.id));
      await a.click();
      await b.click();
      await expect(a).toHaveAttribute('data-state', 'matched');
    }
  },

  async spell(page, c) {
    const remainingDictation = new Set<string>(
      c.items.filter((x: any) => x.mode === 'dictation').map((x: any) => x.speak),
    );
    for (let i = 0; i < c.items.length; i++) {
      await waitForRound(page, i, c.items.length);
      const p = await prompt(page);
      let item: any;
      if (p === 'Type what you hear') {
        const spoken = await waitForSpoken(page, remainingDictation);
        remainingDictation.delete(spoken);
        item = c.items.find((x: any) => x.speak === spoken && x.mode === 'dictation');
      } else {
        item = c.items.find((x: any) => x.hint === p);
      }
      if (item.mode === 'unscramble') {
        for (const ch of item.answer) {
          await page
            .getByRole('group', { name: 'Letters' })
            .locator('button:not([disabled])')
            .filter({ hasText: new RegExp(`^${ch}$`) })
            .first()
            .click();
        }
        await page.getByRole('button', { name: 'Check' }).click();
      } else {
        await page.getByLabel('Your answer').fill(item.answer);
        await page.getByLabel('Your answer').press('Enter');
      }
      await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
      await cont(page);
    }
  },

  async sentence(page, c) {
    for (let i = 0; i < c.items.length; i++) {
      await waitForRound(page, i, c.items.length);
      const p = await prompt(page);
      const item = c.items.find((x: any) => x.translation === p);
      for (const w of item.words) {
        await page
          .getByRole('group', { name: 'Word bank' })
          .getByRole('button', { name: w, exact: true })
          .first()
          .click();
      }
      await page.getByRole('button', { name: 'Check' }).click();
      await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
      await cont(page);
    }
  },

  async gapfill(page, c) {
    for (let i = 0; i < c.items.length; i++) {
      await waitForRound(page, i, c.items.length);
      const shown = norm(await page.getByTestId('sentence').innerText());
      const item = c.items.find((x: any) => {
        const [b, a] = x.text.split('___');
        return shown === norm(`${b}${x.options ? '…' : ''}${a}`);
      });
      if (item.options) await page.getByRole('button', { name: item.answer, exact: true }).click();
      else {
        await page.getByLabel('Missing word').fill(item.answer);
        await page.getByLabel('Missing word').press('Enter');
      }
      await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
      await cont(page);
    }
  },

  async sortit(page, c) {
    for (let i = 0; i < c.items.length; i++) {
      await waitForRound(page, i, c.items.length);
      const p = await prompt(page);
      const item = c.items.find((x: any) => x.text === p);
      await page.getByTestId(`bucket-${item.bucket}`).click();
      await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
      await cont(page);
    }
  },

  async conjugation(page, c) {
    for (let i = 0; i < c.tables.length; i++) {
      await waitForRound(page, i, c.tables.length);
      const verb = await prompt(page);
      const ids = await page
        .locator('input[id^="cell-"]')
        .evaluateAll((els) => els.map((e) => e.id.replace('cell-', '')));
      const table = c.tables.find(
        (t: any) =>
          t.verb === verb &&
          t.blanks.length === ids.length &&
          t.blanks.every((b: string) => ids.includes(b)),
      );
      for (const id of ids) await page.locator(`[id="cell-${id}"]`).fill(table.forms[id]);
      await page.getByRole('button', { name: 'Check' }).click();
      await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
      await cont(page);
    }
  },

  async blitz(page, c) {
    await page.getByTestId('blitz-start').click();
    for (let i = 0; i < c.statements.length; i++) {
      await waitForRound(page, i, c.statements.length);
      const text = await prompt(page);
      const statement = c.statements.find((x: any) => x.text === text);
      await page.getByRole('button', { name: statement.isTrue ? /Correct/ : /Wrong/ }).click();
    }
  },

  async dialogue(page, c) {
    for (const scene of c.scenes) {
      for (const turn of scene.turns) {
        if (turn.kind !== 'you') continue;
        await page
          .getByRole('button', { name: turn.options.find((o: any) => o.correct).text, exact: true })
          .click();
      }
      await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
      await cont(page);
    }
  },

  async clock(page, c) {
    for (let i = 0; i < c.rounds.length; i++) {
      await waitForRound(page, i, c.rounds.length);
      const isSet = (await page.getByTestId('digital').count()) > 0;
      if (!isSet) {
        const label = (await page.getByTestId('analog-clock').getAttribute('aria-label'))!.replace(
          'Clock showing ',
          '',
        );
        const round = c.rounds.find(
          (r: any) => r.mode === 'read' && r.time.padStart(5, '0') === label,
        );
        await page
          .getByRole('button', { name: timeToGerman(parseTime(label), round.style), exact: true })
          .click();
      } else {
        const phrase = (await prompt(page)).replace('🔊', '').trim();
        const round = c.rounds.find(
          (r: any) => r.mode === 'set' && timeToGerman(parseTime(r.time), r.style) === phrase,
        );
        const t = parseTime(round.time);
        for (let k = 0; k < (t.hour - 12 + 24) % 24; k++)
          await page.getByRole('button', { name: 'Hour plus' }).click();
        for (let k = 0; k < t.minute / 5; k++)
          await page.getByRole('button', { name: 'Minutes plus' }).click();
        await page.getByRole('button', { name: 'Check' }).click();
      }
      await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
      await cont(page);
    }
  },

  async market(page, c) {
    for (let i = 0; i < c.orders.length; i++) {
      await waitForRound(page, i, c.orders.length);
      const shown = await prompt(page);
      const order = c.orders.find((o: any) => shown.startsWith(o.request));
      for (const it of order.items) {
        const name = c.products.find((p: any) => p.id === it.product).name;
        for (let k = 0; k < it.qty; k++)
          await page.getByRole('button', { name: `Add ${name}`, exact: true }).click();
      }
      await page.getByRole('button', { name: 'Check basket' }).click();
      const cents = totalCents(order.items, c.products);
      await page
        .getByLabel(/Was kostet das zusammen/)
        .fill((cents / 100).toFixed(2).replace('.', ','));
      await page.getByLabel(/Was kostet das zusammen/).press('Enter');
      await expect(page.getByText(priceToGerman(cents), { exact: false }).first()).toBeVisible();
      await expect(page.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
      await cont(page);
    }
  },
};

/** Open an activity, press Start, solve it perfectly and wait for the result screen. */
export async function playPerfectly(page: Page, id: string, extraQuery = '') {
  const a = activity(id);
  await page.goto(`/play/${id}?seed=${SEED}${extraQuery}`);
  await expect(page.getByRole('heading', { name: a.title, level: 1 })).toBeVisible();
  await page.getByTestId('start').click();
  await solvers[a.gameType](page, a.config);
  await expect(page.getByRole('heading', { name: 'Well done!' })).toBeVisible({ timeout: 10_000 });
  await expect(page.getByTestId('accuracy')).toHaveText('100% correct');
  return a;
}
