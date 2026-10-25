import { screen, waitFor } from '@testing-library/react';
import type { QuizConfig } from '@/content/schema';
import { allActivities, allUnits, renderApp, resetStores } from '@/test/app';
import type { z } from 'zod';

beforeEach(resetStores);
afterEach(() => {
  delete window.turnstile;
  vi.unstubAllGlobals();
});

const quiz = allActivities.find((a) => a.gameType === 'quiz')!;

describe('Report a problem while playing', () => {
  it('appears once the game has started and names the activity, unit, level and the item on screen', async () => {
    window.turnstile = {
      render: (_el, o) => {
        queueMicrotask(() => o.callback('tok'));
        return 'w';
      },
      reset: vi.fn(),
      remove: vi.fn(),
    };
    const fetchMock = vi.fn(async (_url: string, _init?: RequestInit) =>
      Response.json({ ok: true }),
    );
    vi.stubGlobal('fetch', fetchMock);
    const { user } = renderApp(`/play/${quiz.id}?seed=3`);

    await screen.findByTestId('start');
    expect(screen.queryByTestId('report-open')).not.toBeInTheDocument();
    await user.click(screen.getByTestId('start'));
    await screen.findByTestId('counter'); // the game itself is loaded lazily
    await user.click(await screen.findByTestId('report-open'));
    await user.selectOptions(screen.getByTestId('report-type'), 'translation');
    await waitFor(() => expect(screen.getByTestId('report-send')).toBeEnabled());
    await user.click(screen.getByTestId('report-send'));
    await screen.findByText('Thank you!');

    const body = JSON.parse(String(fetchMock.mock.calls[0]![1]!.body));
    const ids = (quiz.config as z.infer<typeof QuizConfig>).questions.map((q) => q.id);
    expect(body).toMatchObject({
      type: 'translation',
      activityId: quiz.id,
      gameType: 'quiz',
      unitId: quiz.unitId,
      levelId: allUnits.find((u) => u.id === quiz.unitId)!.levelId,
    });
    expect(ids).toContain(body.itemId);
  });
});
