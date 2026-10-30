import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider } from 'react-router/dom';
import { Suspense } from 'react';
import { createTestRouter } from '@/app/router';
import a11 from '@/content/a1-1';
import a12 from '@/content/a1-2';
import a21 from '@/content/a2-1';
import a22 from '@/content/a2-2';
import b11 from '@/content/b1-1';
import c12 from '@/content/c1-2';
import b12 from '@/content/b1-2';
import b21 from '@/content/b2-1';
import b22 from '@/content/b2-2';
import c11 from '@/content/c1-1';
import c21 from '@/content/c2-1';
import c22 from '@/content/c2-2';
import type { Activity } from '@/content/schema';
import { DEFAULT_SETTINGS, useSettingsStore } from '@/store/settingsStore';
import { progressStores } from '@/store/progressStore';

export function resetStores() {
  for (const store of Object.values(progressStores)) store.getState().reset();
  useSettingsStore.setState({ ...DEFAULT_SETTINGS });
}

/** Every available level, merged – what the app loads in tests. */
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
export const allUnits = [
  ...a11.units,
  ...a12.units,
  ...a21.units,
  ...a22.units,
  ...b11.units,
  ...c12.units,
  ...b12.units,
  ...b21.units,
  ...b22.units,
  ...c11.units,
  ...c21.units,
  ...c22.units,
];

/** Render the whole app at a URL with the real A1.1 to C2.1 content. */
export function renderApp(path = '/') {
  const router = createTestRouter([path]);
  const user = userEvent.setup();
  render(
    <Suspense fallback={<p>suspense</p>}>
      <RouterProvider router={router} />
    </Suspense>,
  );
  return { router, user };
}

export const activityById = (id: string): Activity => {
  const a = allActivities.find((x) => x.id === id);
  if (!a) throw new Error(`No activity ${id}`);
  return a;
};

/** Answer every question of a quiz activity (correctly or all wrong) by reading the prompt from the screen. */
export async function playQuiz(
  user: ReturnType<typeof userEvent.setup>,
  activity: Activity,
  { correct = true } = {},
) {
  if (activity.gameType !== 'quiz') throw new Error('playQuiz needs a quiz');
  const total = activity.config.questions.length;
  for (let i = 0; i < total; i++) {
    const prompt = (await screen.findByTestId('prompt')).textContent;
    const q = activity.config.questions.find((x) => x.prompt === prompt)!;
    const label = correct ? q.answer : q.options.find((o) => o !== q.answer)!;
    await user.click(await screen.findByRole('button', { name: label }));
    await user.click(await screen.findByTestId('continue'));
  }
}
