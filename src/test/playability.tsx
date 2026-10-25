/**
 * Content integrity through the real engines: every activity of a level must be completable with
 * the answers written in its config – no unreachable sentences, unmatched typed answers, etc.
 */
import { Suspense } from 'react';
import { render, screen, waitFor, within, act, configure } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { gameComponents, gameLoaders } from '@/games/registry';
import { buildColumns } from '@/games/memory/logic';
import { parseTime, timeToGerman } from '@/lib/german/time';
import { totalCents } from '@/games/market/logic';
import { priceToGerman } from '@/lib/german/numbers';
import type { Activity, LevelContent } from '@/content/schema';
import type { GameResult } from '@/lib/scoring';

// Testing Library only advances fake timers itself when it sees a `jest` global; without it every
// user action waits for a real clock tick (~20 ms) and a level suite takes minutes instead of seconds.
(globalThis as { jest?: unknown }).jest = { advanceTimersByTime: vi.advanceTimersByTime };
configure({ asyncUtilTimeout: 60_000 });

type User = ReturnType<typeof userEvent.setup>;
const SEED = 7;
const text = (el: HTMLElement) => (el.textContent ?? '').replace(/\s+/g, ' ').trim();
const cont = async (user: User) => user.click(await screen.findByTestId('continue'));
const prompt = async () => text(await screen.findByTestId('prompt'));

async function solve<T extends Activity['gameType']>(
  a: Extract<Activity, { gameType: T }>,
  user: User,
) {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const c = a.config as any;
  switch (a.gameType) {
    case 'flashcards':
      for (let i = 0; i < c.cards.length; i++) {
        await user.click(await screen.findByTestId('card'));
        await user.click(await screen.findByRole('button', { name: /Got it/ }));
      }
      return;
    case 'quiz':
      for (let i = 0; i < c.questions.length; i++) {
        const p = await prompt();
        const emoji = screen.queryByTestId('emoji')?.textContent;
        const q = c.questions.find(
          (x: any) => x.prompt === p && (x.emoji ?? undefined) === (emoji ?? undefined),
        );
        expect(q, `quiz item for "${p}"`).toBeDefined();
        await user.click(await screen.findByRole('button', { name: q.answer }));
        await cont(user);
      }
      return;
    case 'listen':
      for (let i = 0; i < c.items.length; i++) {
        const spoken = text(await screen.findByTestId('tts-fallback')).replace(/^.*?\.\s*/, '');
        const q = c.items.find((x: any) => spoken.endsWith(x.speak));
        expect(q, `listen item for "${spoken}"`).toBeDefined();
        await user.click(await screen.findByRole('button', { name: q.answer }));
        await cont(user);
      }
      return;
    case 'memory': {
      const { left, right } = buildColumns(c.pairs, SEED);
      const cards = await screen.findAllByTestId('memory-card');
      const n = left.length;
      for (const p of c.pairs) {
        await user.click(cards[left.findIndex((d) => d.pairId === p.id)]!);
        await user.click(cards[n + right.findIndex((d) => d.pairId === p.id)]!);
      }
      return;
    }
    case 'spell':
      for (let i = 0; i < c.items.length; i++) {
        const fallback = screen.queryByTestId('tts-fallback');
        const p = await prompt();
        const item = fallback
          ? c.items.find((x: any) => text(fallback).endsWith(x.speak))
          : c.items.find((x: any) => x.hint === p);
        expect(item, `spell item for "${p}"`).toBeDefined();
        if (item.mode === 'unscramble') {
          for (const ch of item.answer) {
            const letters = within(screen.getByRole('group', { name: 'Letters' }));
            await user.click(
              letters
                .getAllByRole('button')
                .find((b) => b.textContent === ch && !(b as HTMLButtonElement).disabled)!,
            );
          }
          await user.click(screen.getByRole('button', { name: 'Check' }));
        } else {
          await user.type(screen.getByLabelText('Your answer'), `${item.answer}{Enter}`);
        }
        expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
        await cont(user);
      }
      return;
    case 'sentence':
      for (let i = 0; i < c.items.length; i++) {
        const p = await prompt();
        const item = c.items.find((x: any) => x.translation === p);
        for (const w of item.words) {
          await user.click(
            within(screen.getByRole('group', { name: 'Word bank' }))
              .getAllByRole('button')
              .find((b) => b.textContent === w)!,
          );
        }
        await user.click(screen.getByRole('button', { name: 'Check' }));
        await cont(user);
      }
      return;
    case 'gapfill':
      for (let i = 0; i < c.items.length; i++) {
        const shown = text(await screen.findByTestId('sentence'));
        const item = c.items.find((x: any) => {
          const [b, af] = x.text.split('___');
          return shown === text({ textContent: `${b}${x.options ? '…' : ''}${af}` } as HTMLElement);
        });
        expect(item, `gap item for "${shown}"`).toBeDefined();
        if (item.options) await user.click(screen.getByRole('button', { name: item.answer }));
        else await user.type(screen.getByLabelText('Missing word'), `${item.answer}{Enter}`);
        await cont(user);
      }
      return;
    case 'sortit':
      for (let i = 0; i < c.items.length; i++) {
        const shown = await prompt();
        const item = c.items.find((x: any) => x.text === shown);
        await user.click(screen.getByTestId(`bucket-${item.bucket}`));
        await cont(user);
      }
      return;
    case 'conjugation':
      for (let i = 0; i < c.tables.length; i++) {
        const verb = await prompt();
        const inputs = (await screen.findAllByRole('textbox')) as HTMLInputElement[];
        const blanks = inputs.map((x) => x.id.replace('cell-', ''));
        const table = c.tables.find(
          (t: any) =>
            t.verb === verb &&
            t.blanks.length === blanks.length &&
            t.blanks.every((b: string) => blanks.includes(b)),
        );
        expect(table, `conjugation table for ${verb}`).toBeDefined();
        for (const input of inputs)
          await user.type(input, table.forms[input.id.replace('cell-', '')]);
        await user.click(screen.getByRole('button', { name: 'Check' }));
        await cont(user);
      }
      return;
    case 'blitz': {
      await user.click(await screen.findByTestId('blitz-start'));
      for (let i = 0; i < c.statements.length; i++) {
        const s = c.statements.find((x: any) => x.text === text(screen.getByTestId('prompt')));
        await user.click(screen.getByRole('button', { name: s.isTrue ? /Correct/ : /Wrong/ }));
      }
      return;
    }
    case 'dialogue':
      for (const scene of c.scenes) {
        for (const turn of scene.turns) {
          if (turn.kind !== 'you') continue;
          await user.click(
            await screen.findByRole('button', {
              name: turn.options.find((o: any) => o.correct).text,
            }),
          );
        }
        await cont(user);
      }
      return;
    case 'clock':
      for (let i = 0; i < c.rounds.length; i++) {
        const clockEl = await screen.findByTestId('analog-clock');
        const label = clockEl.getAttribute('aria-label') ?? '';
        if (!screen.queryByTestId('digital')) {
          const time = parseTime(label.replace('Clock showing ', ''));
          const round = c.rounds.find(
            (r: any) =>
              r.mode === 'read' && r.time.padStart(5, '0') === label.replace('Clock showing ', ''),
          );
          await user.click(screen.getByRole('button', { name: timeToGerman(time, round.style) }));
        } else {
          const phrase = (await prompt()).replace('🔊', '').trim();
          const round = c.rounds.find(
            (r: any) => r.mode === 'set' && timeToGerman(parseTime(r.time), r.style) === phrase,
          );
          expect(round, `clock round for "${phrase}"`).toBeDefined();
          const t = parseTime(round.time);
          for (let k = 0; k < (t.hour - 12 + 24) % 24; k++)
            await user.click(screen.getByRole('button', { name: 'Hour plus' }));
          for (let k = 0; k < t.minute / 5; k++)
            await user.click(screen.getByRole('button', { name: 'Minutes plus' }));
          await user.click(screen.getByRole('button', { name: 'Check' }));
        }
        await cont(user);
      }
      return;
    case 'market':
      for (let i = 0; i < c.orders.length; i++) {
        const shown = await prompt();
        const order = c.orders.find((o: any) => shown.startsWith(o.request));
        expect(order, 'market order').toBeDefined();
        for (const it of order.items) {
          const name = c.products.find((p: any) => p.id === it.product).name;
          for (let k = 0; k < it.qty; k++)
            await user.click(screen.getByRole('button', { name: `Add ${name}` }));
        }
        await user.click(screen.getByRole('button', { name: 'Check basket' }));
        const cents = totalCents(order.items, c.products);
        await user.type(
          screen.getByLabelText(/Was kostet das zusammen/),
          `${(cents / 100).toFixed(2).replace('.', ',')}{Enter}`,
        );
        expect(screen.getByText(priceToGerman(cents), { selector: 'strong' })).toBeInTheDocument();
        await cont(user);
      }
      return;
  }
}

export function describePlayability(content: LevelContent) {
  // Fake-timer waits burn fake time, so a game's lazy chunk must already be loaded when it renders.
  beforeAll(async () => {
    await Promise.all(Object.values(gameLoaders).map((load) => (load as () => Promise<unknown>)()));
  });

  describe.each(content.units.map((u) => [u.title, u.id] as const))(
    'Playability – %s',
    (_title, unitId) => {
      const activities = content.activities.filter((a) => a.unitId === unitId);

      it.each(activities.map((a) => [a.id, a] as const))(
        '%s can be completed perfectly',
        async (_id, activity) => {
          vi.useFakeTimers({ shouldAdvanceTime: true });
          try {
            const user = userEvent.setup({ delay: null, advanceTimers: vi.advanceTimersByTime });
            const onFinish = vi.fn<(r: GameResult) => void>();
            const Game = gameComponents[activity.gameType] as React.ComponentType<{
              config: unknown;
              seed: number;
              onFinish: (r: GameResult) => void;
            }>;
            render(
              <Suspense fallback={null}>
                <Game config={activity.config} seed={SEED} onFinish={onFinish} />
              </Suspense>,
            );
            await solve(activity as never, user);
            if (activity.gameType === 'memory')
              await act(async () => void vi.advanceTimersByTime(700));
            await waitFor(() => expect(onFinish).toHaveBeenCalledTimes(1));
            const result = onFinish.mock.calls[0]![0];
            expect(result.mistakes, `${activity.id} mistakes`).toEqual([]);
            expect(result.correct).toBe(result.total);
          } finally {
            vi.useRealTimers();
          }
        },
        60_000,
      );
    },
  );
}
