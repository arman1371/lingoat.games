import { screen, waitFor, within } from '@testing-library/react';
import content from '@/content/a1-1';
import a12 from '@/content/a1-2';
import a21 from '@/content/a2-1';
import a22 from '@/content/a2-2';
import b11 from '@/content/b1-1';
import b12 from '@/content/b1-2';
import b21 from '@/content/b2-1';
import b22 from '@/content/b2-2';
import c11 from '@/content/c1-1';
import c22 from '@/content/c2-2';
import { buildExport, parseImport } from '@/lib/progressTransfer';
import { initialProgress, useProgressStore } from '@/store/progressStore';
import { DEFAULT_SETTINGS, useSettingsStore } from '@/store/settingsStore';
import { activityById, allActivities, playQuiz, renderApp, resetStores } from '@/test/app';

beforeEach(resetStores);

describe('Home', () => {
  it('invites a new learner to start and lists the levels', async () => {
    renderApp('/');
    expect(
      await screen.findByRole('heading', { name: 'Start your first game' }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('continue-cta')).toHaveTextContent('Start');
    expect(screen.getByTestId('level-a1-1')).toHaveTextContent(
      '0 / ' + content.activities.length + ' games',
    );
    expect(screen.getByTestId('level-a1-2')).toHaveTextContent(
      '0 / ' + a12.activities.length + ' games',
    );
    expect(screen.getByTestId('level-a2-1')).toHaveTextContent(
      '0 / ' + a21.activities.length + ' games',
    );
    expect(screen.getByTestId('level-a2-2')).toHaveTextContent(
      '0 / ' + a22.activities.length + ' games',
    );
    expect(screen.getByTestId('level-b1-1')).toHaveTextContent(
      '0 / ' + b11.activities.length + ' games',
    );
    expect(screen.getByTestId('level-b1-2')).toHaveTextContent(
      '0 / ' + b12.activities.length + ' games',
    );
    expect(screen.getByTestId('level-b2-1')).toHaveTextContent(
      '0 / ' + b21.activities.length + ' games',
    );
    expect(screen.getByTestId('level-b2-2')).toHaveTextContent(
      '0 / ' + b22.activities.length + ' games',
    );
    expect(screen.getByTestId('level-c1-1')).toHaveTextContent(
      '0 / ' + c11.activities.length + ' games',
    );
    expect(screen.getByTestId('level-c2-2')).toHaveTextContent(
      '0 / ' + c22.activities.length + ' games',
    );
    expect(screen.queryByText('Coming soon')).not.toBeInTheDocument();
    expect(screen.getByTestId('streak')).toHaveTextContent('0');
  });

  it('continues at the next unplayed activity', async () => {
    useProgressStore
      .getState()
      .recordResult(content.activities[0]!.id, { correct: 3, total: 3, played: [], mistakes: [] });
    renderApp('/');
    expect(
      await screen.findByRole('heading', { name: 'Continue where you left off' }),
    ).toBeInTheDocument();
    expect(screen.getByText(content.activities[1]!.title)).toBeInTheDocument();
    expect(screen.getByTestId('continue-cta')).toHaveTextContent('Continue');
  });
});

describe('Level and unit pages', () => {
  it('walks Home → level → unit and shows the guided path', async () => {
    const { user } = renderApp('/');
    await user.click(await screen.findByTestId('level-a1-1'));
    const units = await screen.findByRole('list', { name: 'Units' });
    expect(within(units).getAllByTestId(/^unit-/)).toHaveLength(content.units.length);
    await user.click(screen.getByTestId('unit-a1-1-hallo'));
    const path = await screen.findByRole('list', { name: 'Guided path' });
    expect(screen.getByRole('heading', { level: 1, name: 'Hallo & Tschüss' })).toBeInTheDocument();
    const steps = within(path).getAllByRole('listitem');
    expect(steps[0]).toHaveAttribute('data-state', 'current');
    expect(steps[1]).toHaveAttribute('data-state', 'open');
    expect(within(steps[0]!).getByText('Up next')).toBeInTheDocument();
  });

  it('marks finished steps as done and moves the "up next" marker', async () => {
    const first = content.activities.find((a) => a.unitId === 'a1-1-hallo')!;
    useProgressStore
      .getState()
      .recordResult(first.id, { correct: 1, total: 1, played: [], mistakes: [] });
    renderApp('/levels/a1-1/units/a1-1-hallo');
    const path = await screen.findByRole('list', { name: 'Guided path' });
    const steps = within(path).getAllByRole('listitem');
    expect(steps[0]).toHaveAttribute('data-state', 'done');
    expect(steps[1]).toHaveAttribute('data-state', 'current');
  });

  it('switches to the explore grid and back', async () => {
    const { user } = renderApp('/levels/a1-1/units/a1-1-wer');
    await screen.findByRole('list', { name: 'Guided path' });
    await user.click(screen.getByRole('tab', { name: /All games/ }));
    expect(screen.getByRole('list', { name: 'All games' })).toBeInTheDocument();
    expect(screen.queryByRole('list', { name: 'Guided path' })).not.toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: /Step by step/ }));
    expect(screen.getByRole('list', { name: 'Guided path' })).toBeInTheDocument();
  });

  it('shows not-found for unknown levels and units', async () => {
    renderApp('/levels/zz');
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });

  it('shows not-found for unknown units', async () => {
    renderApp('/levels/a1-1/units/nope');
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });

  it('shows not-found for unknown levels', async () => {
    renderApp('/levels/c9-9');
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });
});

describe('Level A1.2', () => {
  it('walks Home → A1.2 → first unit and shows its guided path', async () => {
    const { user } = renderApp('/');
    await user.click(await screen.findByTestId('level-a1-2'));
    const units = await screen.findByRole('list', { name: 'Units' });
    expect(within(units).getAllByTestId(/^unit-/)).toHaveLength(a12.units.length);
    expect(within(units).queryByTestId('unit-a1-1-hallo')).not.toBeInTheDocument();
    await user.click(screen.getByTestId('unit-a1-2-stadt'));
    const path = await screen.findByRole('list', { name: 'Guided path' });
    expect(screen.getByRole('heading', { level: 1, name: 'In der Stadt' })).toBeInTheDocument();
    const steps = within(path).getAllByRole('listitem');
    expect(steps).toHaveLength(a12.activities.filter((a) => a.unitId === 'a1-2-stadt').length);
    expect(steps[0]).toHaveAttribute('data-state', 'current');
  });

  it('continues in A1.2 once every A1.1 game is finished', async () => {
    for (const a of content.activities)
      useProgressStore
        .getState()
        .recordResult(a.id, { correct: 1, total: 1, played: [], mistakes: [] });
    renderApp('/');
    expect(
      await screen.findByRole('heading', { name: 'Continue where you left off' }),
    ).toBeInTheDocument();
    expect(screen.getByText(a12.activities[0]!.title)).toBeInTheDocument();
    expect(screen.getByTestId('level-a1-1')).toHaveTextContent(
      `${content.activities.length} / ${content.activities.length} games`,
    );
  });

  it('filters the library by level and only offers that level’s units', async () => {
    const { user } = renderApp('/library?view=games&lvl=a1-2');
    await waitFor(() =>
      expect(screen.getByTestId('result-count')).toHaveTextContent(
        `${a12.activities.length} games`,
      ),
    );
    expect(screen.getByRole('button', { name: 'A1.2' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /In der Stadt/ })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Hallo & Tschüss/ })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'A1.2' }));
    await user.click(screen.getByRole('button', { name: 'A1.1' }));
    expect(screen.getByTestId('result-count')).toHaveTextContent(
      `${content.activities.length} games`,
    );
    expect(screen.getByRole('button', { name: /Hallo & Tschüss/ })).toBeInTheDocument();
  }, 30_000);

  it('finds the new grammar tags in the library', async () => {
    const { user } = renderApp('/library?view=games');
    await user.click(await screen.findByText(/Filters/));
    await user.click(screen.getByRole('button', { name: /Dative/ }));
    const dative = allActivities.filter((a) => a.tags.includes('dative')).length;
    expect(dative).toBeGreaterThan(10);
    expect(screen.getByTestId('result-count')).toHaveTextContent(`${dative} games`);
  }, 30_000);
});

describe('Level A2.1', () => {
  it('walks Home → A2.1 → first unit and shows its guided path', async () => {
    const { user } = renderApp('/');
    await user.click(await screen.findByTestId('level-a2-1'));
    const units = await screen.findByRole('list', { name: 'Units' });
    expect(within(units).getAllByTestId(/^unit-/)).toHaveLength(a21.units.length);
    expect(within(units).queryByTestId('unit-a1-2-stadt')).not.toBeInTheDocument();
    await user.click(screen.getByTestId('unit-a2-1-online'));
    const path = await screen.findByRole('list', { name: 'Guided path' });
    expect(screen.getByRole('heading', { level: 1, name: 'Online & Apps' })).toBeInTheDocument();
    const steps = within(path).getAllByRole('listitem');
    expect(steps).toHaveLength(a21.activities.filter((a) => a.unitId === 'a2-1-online').length);
    expect(steps[0]).toHaveAttribute('data-state', 'current');
  });

  it('filters the library by the A2.1 level and only offers its units', async () => {
    renderApp('/library?view=games&lvl=a2-1');
    await waitFor(() =>
      expect(screen.getByTestId('result-count')).toHaveTextContent(
        `${a21.activities.length} games`,
      ),
    );
    expect(screen.getByRole('button', { name: 'A2.1' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /Online & Apps/ })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /In der Stadt/ })).not.toBeInTheDocument();
  }, 30_000);
});

describe('Level A2.2', () => {
  it('walks Home → A2.2 → first unit and shows its guided path', async () => {
    const { user } = renderApp('/');
    await user.click(await screen.findByTestId('level-a2-2'));
    const units = await screen.findByRole('list', { name: 'Units' });
    expect(within(units).getAllByTestId(/^unit-/)).toHaveLength(a22.units.length);
    expect(within(units).queryByTestId('unit-a2-1-online')).not.toBeInTheDocument();
    await user.click(screen.getByTestId('unit-a2-2-lernen'));
    const path = await screen.findByRole('list', { name: 'Guided path' });
    expect(
      screen.getByRole('heading', { level: 1, name: 'Lernen & Prüfungen' }),
    ).toBeInTheDocument();
    const steps = within(path).getAllByRole('listitem');
    expect(steps).toHaveLength(a22.activities.filter((a) => a.unitId === 'a2-2-lernen').length);
    expect(steps[0]).toHaveAttribute('data-state', 'current');
  });

  it('filters the library by the A2.2 level and only offers its units', async () => {
    renderApp('/library?view=games&lvl=a2-2');
    await waitFor(() =>
      expect(screen.getByTestId('result-count')).toHaveTextContent(
        `${a22.activities.length} games`,
      ),
    );
    expect(screen.getByRole('button', { name: 'A2.2' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /Lernen & Prüfungen/ })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Online & Apps/ })).not.toBeInTheDocument();
  }, 30_000);

  it('finds the pronunciation games through the skill filter', async () => {
    renderApp('/library?view=games&lvl=a2-2&skill=pronunciation');
    const pronunciation = a22.activities.filter((a) => a.tags.includes('pronunciation')).length;
    expect(pronunciation).toBeGreaterThan(0);
    await waitFor(() =>
      expect(screen.getByTestId('result-count')).toHaveTextContent(`${pronunciation} games`),
    );
  }, 30_000);
});

describe('Level B1.1', () => {
  it('walks Home → B1.1 → first unit and shows its guided path', async () => {
    const { user } = renderApp('/');
    await user.click(await screen.findByTestId('level-b1-1'));
    const units = await screen.findByRole('list', { name: 'Units' });
    expect(within(units).getAllByTestId(/^unit-/)).toHaveLength(b11.units.length);
    expect(within(units).queryByTestId('unit-a2-2-lernen')).not.toBeInTheDocument();
    await user.click(screen.getByTestId('unit-b1-1-glueck'));
    const path = await screen.findByRole('list', { name: 'Guided path' });
    expect(screen.getByRole('heading', { level: 1, name: 'Glück im Alltag' })).toBeInTheDocument();
    const steps = within(path).getAllByRole('listitem');
    expect(steps).toHaveLength(b11.activities.filter((a) => a.unitId === 'b1-1-glueck').length);
    expect(steps[0]).toHaveAttribute('data-state', 'current');
  });

  it('filters the library by the B1.1 level and only offers its units', async () => {
    renderApp('/library?view=games&lvl=b1-1');
    await waitFor(() =>
      expect(screen.getByTestId('result-count')).toHaveTextContent(
        `${b11.activities.length} games`,
      ),
    );
    expect(screen.getByRole('button', { name: 'B1.1' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /Glück im Alltag/ })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Lernen & Prüfungen/ })).not.toBeInTheDocument();
  }, 30_000);
});

describe('Level B1.2', () => {
  it('walks Home → B1.2 → first unit and shows its guided path', async () => {
    const { user } = renderApp('/');
    await user.click(await screen.findByTestId('level-b1-2'));
    const units = await screen.findByRole('list', { name: 'Units' });
    expect(within(units).getAllByTestId(/^unit-/)).toHaveLength(b12.units.length);
    expect(within(units).queryByTestId('unit-b1-1-glueck')).not.toBeInTheDocument();
    await user.click(screen.getByTestId('unit-b1-2-kollegen'));
    const path = await screen.findByRole('list', { name: 'Guided path' });
    expect(screen.getByRole('heading', { level: 1, name: 'Unter Kollegen' })).toBeInTheDocument();
    const steps = within(path).getAllByRole('listitem');
    expect(steps).toHaveLength(b12.activities.filter((a) => a.unitId === 'b1-2-kollegen').length);
    expect(steps[0]).toHaveAttribute('data-state', 'current');
  });

  it('filters the library by the B1.2 level and only offers its units', async () => {
    renderApp('/library?view=games&lvl=b1-2');
    await waitFor(() =>
      expect(screen.getByTestId('result-count')).toHaveTextContent(
        `${b12.activities.length} games`,
      ),
    );
    expect(screen.getByRole('button', { name: 'B1.2' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /Unter Kollegen/ })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Glück im Alltag/ })).not.toBeInTheDocument();
  }, 30_000);
});

describe('Level B2.1', () => {
  it('walks Home → B2.1 → first unit and shows its guided path', async () => {
    const { user } = renderApp('/');
    await user.click(await screen.findByTestId('level-b2-1'));
    const units = await screen.findByRole('list', { name: 'Units' });
    expect(within(units).getAllByTestId(/^unit-/)).toHaveLength(b21.units.length);
    expect(within(units).queryByTestId('unit-b1-2-kollegen')).not.toBeInTheDocument();
    await user.click(screen.getByTestId('unit-b2-1-beziehungen'));
    const path = await screen.findByRole('list', { name: 'Guided path' });
    expect(
      screen.getByRole('heading', { level: 1, name: b21.units[0]!.title }),
    ).toBeInTheDocument();
    const steps = within(path).getAllByRole('listitem');
    expect(steps).toHaveLength(
      b21.activities.filter((a) => a.unitId === 'b2-1-beziehungen').length,
    );
    expect(steps[0]).toHaveAttribute('data-state', 'current');
  });

  it('filters the library by the B2.1 level and only offers its units', async () => {
    renderApp('/library?view=games&lvl=b2-1');
    await waitFor(() =>
      expect(screen.getByTestId('result-count')).toHaveTextContent(
        `${b21.activities.length} games`,
      ),
    );
    expect(screen.getByRole('button', { name: 'B2.1' })).toHaveAttribute('aria-pressed', 'true');
    expect(
      screen.getByRole('button', { name: new RegExp(b21.units[0]!.title) }),
    ).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Unter Kollegen/ })).not.toBeInTheDocument();
  }, 30_000);
});

describe('Level B2.2', () => {
  it('walks Home → B2.2 → first unit and shows its guided path', async () => {
    const { user } = renderApp('/');
    await user.click(await screen.findByTestId('level-b2-2'));
    const units = await screen.findByRole('list', { name: 'Units' });
    expect(within(units).getAllByTestId(/^unit-/)).toHaveLength(b22.units.length);
    expect(within(units).queryByTestId('unit-b2-1-beziehungen')).not.toBeInTheDocument();
    await user.click(screen.getByTestId('unit-b2-2-beziehungen'));
    const path = await screen.findByRole('list', { name: 'Guided path' });
    expect(
      screen.getByRole('heading', { level: 1, name: 'Beziehungen & Vielfalt' }),
    ).toBeInTheDocument();
    const steps = within(path).getAllByRole('listitem');
    expect(steps).toHaveLength(
      b22.activities.filter((a) => a.unitId === 'b2-2-beziehungen').length,
    );
    expect(steps[0]).toHaveAttribute('data-state', 'current');
  });

  it('filters the library by the B2.2 level and only offers its units', async () => {
    renderApp('/library?view=games&lvl=b2-2');
    await waitFor(() =>
      expect(screen.getByTestId('result-count')).toHaveTextContent(
        `${b22.activities.length} games`,
      ),
    );
    expect(screen.getByRole('button', { name: 'B2.2' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /Beziehungen & Vielfalt/ })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Beziehungen & Gefühle/ })).not.toBeInTheDocument();
  }, 30_000);
});

describe('Level C1.1', () => {
  it('walks Home → C1.1 → first unit and shows its guided path', async () => {
    const { user } = renderApp('/');
    await user.click(await screen.findByTestId('level-c1-1'));
    const units = await screen.findByRole('list', { name: 'Units' });
    expect(within(units).getAllByTestId(/^unit-/)).toHaveLength(c11.units.length);
    expect(within(units).queryByTestId('unit-b1-2-kollegen')).not.toBeInTheDocument();
    await user.click(screen.getByTestId('unit-c1-1-zeit'));
    const path = await screen.findByRole('list', { name: 'Guided path' });
    expect(screen.getByRole('heading', { level: 1, name: 'Zeit und Tempo' })).toBeInTheDocument();
    const steps = within(path).getAllByRole('listitem');
    expect(steps).toHaveLength(c11.activities.filter((a) => a.unitId === 'c1-1-zeit').length);
    expect(steps[0]).toHaveAttribute('data-state', 'current');
  });

  it('filters the library by the C1.1 level and only offers its units', async () => {
    renderApp('/library?view=games&lvl=c1-1');
    await waitFor(() =>
      expect(screen.getByTestId('result-count')).toHaveTextContent(
        `${c11.activities.length} games`,
      ),
    );
    expect(screen.getByRole('button', { name: 'C1.1' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /Zeit und Tempo/ })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Unter Kollegen/ })).not.toBeInTheDocument();
  }, 30_000);
});

describe('Level C2.2', () => {
  it('walks Home → C2.2 → first unit and shows its guided path', async () => {
    const { user } = renderApp('/');
    await user.click(await screen.findByTestId('level-c2-2'));
    const units = await screen.findByRole('list', { name: 'Units' });
    expect(within(units).getAllByTestId(/^unit-/)).toHaveLength(c22.units.length);
    expect(within(units).queryByTestId('unit-b1-1-glueck')).not.toBeInTheDocument();
    await user.click(screen.getByTestId('unit-c2-2-kunst'));
    const path = await screen.findByRole('list', { name: 'Guided path' });
    expect(screen.getByRole('heading', { level: 1, name: 'Kunst & Ästhetik' })).toBeInTheDocument();
    const steps = within(path).getAllByRole('listitem');
    expect(steps).toHaveLength(c22.activities.filter((a) => a.unitId === 'c2-2-kunst').length);
    expect(steps[0]).toHaveAttribute('data-state', 'current');
  });

  it('filters the library by the C2.2 level and only offers its units', async () => {
    renderApp('/library?view=games&lvl=c2-2');
    await waitFor(() =>
      expect(screen.getByTestId('result-count')).toHaveTextContent(
        `${c22.activities.length} games`,
      ),
    );
    expect(screen.getByRole('button', { name: 'C2.2' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /Kunst & Ästhetik/ })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Glück im Alltag/ })).not.toBeInTheDocument();
  }, 30_000);
});

describe('Library', () => {
  it('lists every game and filters by game type, topic and unit', async () => {
    const { user } = renderApp('/library?view=games');
    const total = allActivities.length;
    await waitFor(
      () => expect(screen.getByTestId('result-count')).toHaveTextContent(`${total} games`),
      { timeout: 20_000 },
    );

    await user.click(screen.getByText(/Filters/));
    await user.click(screen.getByRole('button', { name: /Market stand/ }));
    const market = allActivities.filter((a) => a.gameType === 'market').length;
    expect(screen.getByTestId('result-count')).toHaveTextContent(`${market} games`);
    expect(screen.getAllByTestId('activity-card')).toHaveLength(market);

    await user.click(screen.getByRole('button', { name: 'Clear filters' }));
    await user.click(screen.getByRole('button', { name: /Accusative/ }));
    const acc = allActivities.filter((a) => a.tags.includes('accusative')).length;
    expect(screen.getByTestId('result-count')).toHaveTextContent(`${acc} games`);

    await user.click(screen.getByRole('button', { name: /Hard/ }));
    const hard = allActivities.filter(
      (a) => a.tags.includes('accusative') && a.difficulty === 3,
    ).length;
    expect(screen.getByTestId('result-count')).toHaveTextContent(`${hard} games`);
  }, 90_000);

  it('searches by text and shows an empty state', async () => {
    const { user } = renderApp('/library?view=games');
    await screen.findByLabelText('Search games');
    await user.type(screen.getByLabelText('Search games'), 'zzzzzz');
    expect(screen.getByText('No games match these filters.')).toBeInTheDocument();
    expect(screen.queryByTestId('play-queue')).not.toBeInTheDocument();
  }, 30_000);

  it('restores filters from the URL and builds a play queue in the shown order', async () => {
    renderApp('/library?view=games&type=blitz&unit=a1-1-hallo');
    await waitFor(() => expect(screen.getByTestId('result-count')).toHaveTextContent('1 games'));
    expect(screen.getByRole('button', { name: /Blitz/ })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByTestId('play-queue')).toHaveAttribute('href', '/play/a1-1-hallo-blitz');
  }, 30_000);

  it('puts the rest of the results into the queue', async () => {
    renderApp('/library?view=games&unit=a1-1-hallo&type=quiz');
    const quizzes = content.activities.filter(
      (a) => a.unitId === 'a1-1-hallo' && a.gameType === 'quiz',
    );
    await waitFor(() =>
      expect(screen.getByTestId('result-count')).toHaveTextContent(`${quizzes.length} games`),
    );
    const href = screen.getByTestId('play-queue').getAttribute('href')!;
    expect(href).toBe(
      `/play/${quizzes[0]!.id}?q=${quizzes
        .slice(1)
        .map((a) => a.id)
        .join('%2C')}`,
    );
  }, 30_000);
});

describe('Unit map', () => {
  it('marks finished units, the current unit and the rest of the map', async () => {
    const [first, second, third] = content.units;
    for (const a of content.activities.filter((x) => x.unitId === first!.id)) {
      useProgressStore
        .getState()
        .recordResult(a.id, { correct: 3, total: 3, played: [], mistakes: [] });
    }
    renderApp('/levels/a1-1');
    const units = await screen.findByRole('list', { name: 'Units' });
    expect(within(units).getByTestId(`unit-${first!.id}`)).toHaveAttribute('data-state', 'done');
    expect(within(units).getByTestId(`unit-${second!.id}`)).toHaveAttribute(
      'data-state',
      'current',
    );
    expect(within(units).getByTestId(`unit-${third!.id}`)).toHaveAttribute('data-state', 'open');
    expect(screen.getByRole('progressbar', { name: /progress/ })).toBeInTheDocument();
  });
});

describe('Play flow', () => {
  const quiz = activityById('a1-1-hallo-time-of-day');

  it('shows an intro, plays a quiz, records progress and offers the next game', async () => {
    const next = activityById('a1-1-hallo-feelings');
    const { user } = renderApp(`/play/${quiz.id}?seed=1&q=${next.id}`);
    expect(await screen.findByRole('heading', { name: quiz.title })).toBeInTheDocument();
    await user.click(screen.getByTestId('start'));
    await playQuiz(user, quiz);
    expect(await screen.findByRole('heading', { name: 'Well done!' })).toBeInTheDocument();
    expect(screen.getByTestId('accuracy')).toHaveTextContent('100% correct');
    expect(document.querySelector('[data-mood="celebrate"]')).not.toBeNull();
    expect(screen.getByTestId('next-activity')).toHaveTextContent(next.title);
    expect(screen.queryByTestId('mistakes-note')).not.toBeInTheDocument();
    const progress = useProgressStore.getState();
    expect(progress.activities[quiz.id]).toMatchObject({ stars: 3, plays: 1 });
    expect(progress.xp).toBeGreaterThan(0);
    expect(screen.getByTestId('xp-gained')).toBeInTheDocument();
  });

  it('shows a clean game page without the stats header', async () => {
    const { user } = renderApp(`/play/${quiz.id}?seed=1`);
    await user.click(await screen.findByTestId('start'));
    expect(await screen.findByTestId('prompt')).toBeInTheDocument();
    expect(screen.queryByTestId('xp')).not.toBeInTheDocument();
    expect(screen.queryByTestId('streak')).not.toBeInTheDocument();
    // the progress bar sits in the page's top row, beside the close button
    const bar = screen.getByRole('progressbar', { name: 'Progress' });
    expect(bar.parentElement).toBe(
      screen.getByRole('button', { name: 'Exit game' }).nextElementSibling,
    );
  });

  it('collects mistakes in the mistake box and lets you play again', async () => {
    const { user } = renderApp(`/play/${quiz.id}?seed=2`);
    await user.click(await screen.findByTestId('start'));
    await playQuiz(user, quiz, { correct: false });
    expect(await screen.findByTestId('mistakes-note')).toHaveTextContent('5 items');
    expect(Object.keys(useProgressStore.getState().mistakes)).toHaveLength(5);
    await user.click(screen.getByTestId('replay'));
    expect(await screen.findByTestId('prompt')).toBeInTheDocument();
    expect(screen.getByTestId('counter')).toHaveTextContent('1 / 5');
  });

  it('lets you leave with Exit and returns to the unit', async () => {
    const { user, router } = renderApp(`/play/${quiz.id}?seed=1`);
    await user.click(await screen.findByRole('button', { name: 'Exit game' }));
    await waitFor(() =>
      expect(router.state.location.pathname).toBe('/levels/a1-1/units/a1-1-hallo'),
    );
  });

  it('asks before leaving a round in progress, and Keep playing stays', async () => {
    const { user, router } = renderApp(`/play/${quiz.id}?seed=1`);
    await user.click(await screen.findByTestId('start'));
    await user.click(screen.getByRole('button', { name: 'Exit game' }));
    const dialog = await screen.findByRole('dialog', { name: 'Leave this game?' });
    await user.click(within(dialog).getByRole('button', { name: 'Keep playing' }));
    expect(router.state.location.pathname).toBe(`/play/${quiz.id}`);
    await user.click(screen.getByRole('button', { name: 'Exit game' }));
    await user.click(
      within(await screen.findByRole('dialog')).getByRole('button', { name: 'Leave' }),
    );
    await waitFor(() =>
      expect(router.state.location.pathname).toBe('/levels/a1-1/units/a1-1-hallo'),
    );
  });

  it('shows not-found for an unknown activity', async () => {
    renderApp('/play/does-not-exist');
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });

  it('hides the main navigation while playing', async () => {
    renderApp(`/play/${quiz.id}`);
    await screen.findByTestId('start');
    expect(screen.queryByRole('navigation', { name: 'Main' })).not.toBeInTheDocument();
  });
});

describe('Review', () => {
  it('is empty at first', async () => {
    renderApp('/review');
    expect(await screen.findByTestId('review-empty')).toBeInTheDocument();
  });

  it('lists mistakes and replays only those items', async () => {
    const quiz = activityById('a1-1-hallo-time-of-day');
    const first = (quiz.config as { questions: { id: string }[] }).questions[0]!.id;
    useProgressStore
      .getState()
      .recordResult(quiz.id, { correct: 4, total: 5, played: [first], mistakes: [first] });
    const { user } = renderApp('/review');
    expect(await screen.findByTestId('review-count')).toHaveTextContent('1 due');
    await user.click(screen.getByTestId('start-review'));
    expect(await screen.findByText('1 items to review · ~2 min')).toBeInTheDocument();
    await user.click(screen.getByTestId('start'));
    const prompt = (await screen.findByTestId('prompt')).textContent;
    const q = (
      quiz.config as { questions: { id: string; prompt: string; answer: string }[] }
    ).questions.find((x) => x.id === first)!;
    expect(prompt).toBe(q.prompt);
    await user.click(await screen.findByRole('button', { name: q.answer }));
    await user.click(await screen.findByTestId('continue'));
    expect(await screen.findByRole('heading', { name: 'Well done!' })).toBeInTheDocument();
    // review mode does not touch star stats, but advances the Leitner box
    expect(useProgressStore.getState().activities[quiz.id]).toMatchObject({ plays: 1 });
    expect(Object.values(useProgressStore.getState().mistakes)[0]!.box).toBe(2);
  });
});

describe('Settings', () => {
  it('changes theme, motion and speech options and persists them', async () => {
    const { user } = renderApp('/settings');
    await user.click(await screen.findByLabelText('Dark'));
    expect(useSettingsStore.getState().theme).toBe('dark');
    await waitFor(() => expect(document.documentElement.dataset.theme).toBe('dark'));
    await user.click(screen.getByLabelText('Reduced'));
    await waitFor(() => expect(document.documentElement.dataset.reducedMotion).toBe('true'));
    await user.click(screen.getByLabelText('Speak German automatically'));
    expect(useSettingsStore.getState().autoSpeak).toBe(false);
    await user.click(screen.getByLabelText('Sound effects'));
    expect(useSettingsStore.getState().sounds).toBe(false);
    expect(screen.getByLabelText('Read sentences aloud')).toBeChecked();
    await user.click(screen.getByLabelText('Read sentences aloud'));
    expect(useSettingsStore.getState().speakSentences).toBe(false);
  });

  it('resets progress only after confirmation', async () => {
    useProgressStore
      .getState()
      .recordResult('x', { correct: 1, total: 1, played: [], mistakes: [] });
    const { user } = renderApp('/settings');
    await user.click(await screen.findByRole('button', { name: 'Reset all progress' }));
    const dialog = await screen.findByRole('dialog', { name: 'Reset all progress?' });
    await user.click(within(dialog).getByRole('button', { name: 'Cancel' }));
    expect(useProgressStore.getState().xp).toBeGreaterThan(0);
    await user.click(screen.getByRole('button', { name: 'Reset all progress' }));
    await user.click(
      within(await screen.findByRole('dialog')).getByRole('button', { name: 'Reset all progress' }),
    );
    expect(useProgressStore.getState().xp).toBe(0);
    expect(await screen.findByText('Progress reset.')).toBeInTheDocument();
  });
});

describe('Export and import', () => {
  const play = () =>
    useProgressStore
      .getState()
      .recordResult('a1-1-hallo-flash', { correct: 4, total: 4, played: ['a'], mistakes: [] });

  const chooseFile = async (user: ReturnType<typeof renderApp>['user'], text: string) => {
    const file = new File([text], 'progress.json', { type: 'application/json' });
    await user.upload(await screen.findByTestId('import-file'), file);
  };

  it('exports settings and progress as a file', async () => {
    play();
    useSettingsStore.getState().set({ theme: 'dark' });
    let blob: Blob | undefined;
    const create = vi.fn((b: Blob) => ((blob = b), 'blob:x'));
    Object.assign(URL, { createObjectURL: create, revokeObjectURL: vi.fn() });
    const click = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});
    const { user } = renderApp('/profile');
    await user.click(await screen.findByRole('button', { name: 'Export progress' }));
    expect(click).toHaveBeenCalledOnce();
    const parsed = parseImport(await blob!.text());
    expect(parsed.ok && parsed.file.progress.xp).toBe(useProgressStore.getState().xp);
    expect(parsed.ok && parsed.file.settings.theme).toBe('dark');
    expect(await screen.findByText('Progress file saved.')).toBeInTheDocument();
    click.mockRestore();
  });

  it('asks before importing, merges progress and takes the settings from the file', async () => {
    const source = buildExport(
      { ...DEFAULT_SETTINGS, theme: 'dark', dailyGoal: 100 },
      { ...initialProgress(), xp: 900, daily: { day: 1, xp: 0 } },
    );
    play();
    const before = useProgressStore.getState().activities['a1-1-hallo-flash'];
    const { user } = renderApp('/profile');
    await chooseFile(user, JSON.stringify(source));
    const dialog = await screen.findByRole('dialog', { name: 'Import this progress?' });
    expect(dialog).toHaveTextContent('900 XP');
    expect(within(dialog).getByLabelText(/^Merge/)).toBeChecked();
    expect(useProgressStore.getState().xp).toBeLessThan(900);
    await user.click(within(dialog).getByRole('button', { name: 'Cancel' }));
    expect(useProgressStore.getState().xp).toBeLessThan(900);
    expect(useSettingsStore.getState().theme).toBe('system');

    await chooseFile(user, JSON.stringify(source));
    await user.click(
      within(await screen.findByRole('dialog')).getByRole('button', { name: 'Import' }),
    );
    expect(useProgressStore.getState().xp).toBe(900);
    expect(useProgressStore.getState().activities['a1-1-hallo-flash']).toEqual(before);
    expect(useSettingsStore.getState()).toMatchObject({ theme: 'dark', dailyGoal: 100 });
    expect(await screen.findByText('Progress imported.')).toBeInTheDocument();
  });

  it('can replace this device with the file instead of merging', async () => {
    const source = buildExport(
      { ...DEFAULT_SETTINGS, dailyGoal: 20 },
      { ...initialProgress(), xp: 15, daily: { day: 1, xp: 0 } },
    );
    play();
    expect(useProgressStore.getState().xp).toBeGreaterThan(15);
    const { user } = renderApp('/profile');
    await chooseFile(user, JSON.stringify(source));
    const dialog = await screen.findByRole('dialog', { name: 'Import this progress?' });
    await user.click(within(dialog).getByLabelText(/^Replace/));
    await user.click(within(dialog).getByRole('button', { name: 'Replace' }));
    expect(useProgressStore.getState().xp).toBe(15);
    expect(useProgressStore.getState().activities).toEqual({});
    expect(useSettingsStore.getState().dailyGoal).toBe(20);
    expect(await screen.findByText('Progress imported.')).toBeInTheDocument();

    // the next file starts on Merge again
    await chooseFile(user, JSON.stringify(source));
    expect(
      within(await screen.findByRole('dialog', { name: 'Import this progress?' })).getByLabelText(
        /^Merge/,
      ),
    ).toBeChecked();
  });

  it('explains what is wrong with a bad file and changes nothing', async () => {
    play();
    const xp = useProgressStore.getState().xp;
    const { user } = renderApp('/profile');
    await chooseFile(user, 'hello');
    const dialog = await screen.findByRole('dialog', { name: "Can't import this file" });
    expect(dialog).toHaveTextContent('not a Lingoat progress file');
    await user.click(within(dialog).getByRole('button', { name: 'Close' }));
    await chooseFile(
      user,
      JSON.stringify({ ...buildExport(DEFAULT_SETTINGS, initialProgress()), schemaVersion: 99 }),
    );
    expect(await screen.findByRole('dialog', { name: "Can't import this file" })).toHaveTextContent(
      'newer version',
    );
    expect(useProgressStore.getState().xp).toBe(xp);
  });
});

describe('Routing', () => {
  it('shows a 404 page with a way home', async () => {
    const { user, router } = renderApp('/nope/nothing');
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
    await user.click(screen.getByRole('link', { name: 'Back to home' }));
    await waitFor(() => expect(router.state.location.pathname).toBe('/'));
  });

  it('has a skip link and the main nav with the review badge', async () => {
    useProgressStore
      .getState()
      .recordResult('act', { correct: 0, total: 2, played: ['a', 'b'], mistakes: ['a', 'b'] });
    renderApp('/');
    expect(await screen.findByRole('link', { name: 'Skip to content' })).toHaveAttribute(
      'href',
      '#main',
    );
    expect(screen.getByLabelText('2 items to review')).toBeInTheDocument();
    for (const name of ['Learn', 'Library', 'Review', 'Progress', 'Profile']) {
      expect(
        within(screen.getByRole('navigation', { name: 'Main' })).getByRole('link', {
          name: new RegExp(name),
        }),
      ).toBeInTheDocument();
    }
  });
});

describe('Play flow – queues', () => {
  it('keeps the play header to the exit button; progress lives in the game itself', async () => {
    const first = activityById('a1-1-hallo-time-of-day');
    const next = activityById('a1-1-hallo-feelings');
    const { user } = renderApp(`/play/${first.id}?seed=1&q=${next.id}`);
    await user.click(await screen.findByTestId('start'));
    expect(await screen.findByRole('progressbar', { name: 'Progress' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Exit game' })).toBeInTheDocument();
    expect(screen.queryByText(/more in queue/)).not.toBeInTheDocument();
  });

  it('offers the full grammar lesson on the intro of a grammar game, and not on a vocabulary game', async () => {
    const grammar = activityById('a1-2-wohnen-gap-wo');
    const { user } = renderApp(`/play/${grammar.id}?seed=1`);
    const link = await screen.findByTestId('full-lesson');
    expect(link).toHaveTextContent('Read first: Wo? or Wohin?');
    await user.click(link);
    expect(await screen.findByRole('dialog', { name: 'Wo? or Wohin?' })).toBeInTheDocument();
  });

  it('shows no lesson link on the intro of a vocabulary game', async () => {
    renderApp(`/play/${activityById('a1-1-hallo-time-of-day').id}?seed=1`);
    expect(await screen.findByTestId('start')).toBeInTheDocument();
    expect(screen.queryByTestId('full-lesson')).not.toBeInTheDocument();
  });

  it('"Next up" starts a fresh intro for the next game instead of keeping the old result', async () => {
    const first = activityById('a1-1-hallo-time-of-day');
    const next = activityById('a1-1-hallo-feelings');
    const { user, router } = renderApp(`/play/${first.id}?seed=1&q=${next.id}`);
    await user.click(await screen.findByTestId('start'));
    await playQuiz(user, first);
    await user.click(await screen.findByTestId('next-activity'));
    await waitFor(() => expect(router.state.location.pathname).toBe(`/play/${next.id}`));
    expect(await screen.findByRole('heading', { level: 1, name: next.title })).toBeInTheDocument();
    expect(screen.getByTestId('start')).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Well done!' })).not.toBeInTheDocument();
  });
});

describe('Library – filter panel', () => {
  it('stays open when filters are cleared and starts open when the URL has filters', async () => {
    const { user } = renderApp('/library?view=games&type=market');
    const panel = await screen.findByTestId('filters', {}, { timeout: 20_000 });
    expect(panel).toHaveAttribute('open');
    await user.click(screen.getByRole('button', { name: 'Clear filters' }));
    expect(panel).toHaveAttribute('open');
  }, 60_000);
});

describe('Progress and Profile', () => {
  it('shows the progress page with stats and per-level bars', async () => {
    useProgressStore
      .getState()
      .recordResult('a1-1-hallo-time-of-day', { correct: 5, total: 5, played: [], mistakes: [] });
    const { user } = renderApp('/progress');
    expect(await screen.findByRole('heading', { name: 'Progress', level: 1 })).toBeInTheDocument();
    const stats = screen.getByRole('region', { name: 'Your stats' });
    expect(within(stats).getByText('Total XP')).toBeInTheDocument();
    expect(within(stats).getByText('Games played')).toBeInTheDocument();
    expect(screen.getByRole('progressbar', { name: 'A1.1 progress' })).toHaveAttribute(
      'aria-valuenow',
      expect.stringMatching(/^[1-9]/),
    );
    await user.click(screen.getByRole('link', { name: /A1\.2/ }));
    expect(await screen.findByRole('heading', { name: /A1\.2/, level: 1 })).toBeInTheDocument();
  });

  it('links the mistake box from the progress page', async () => {
    useProgressStore
      .getState()
      .recordResult('act', { correct: 0, total: 1, played: ['a'], mistakes: ['a'] });
    const { user, router } = renderApp('/progress');
    await user.click(await screen.findByRole('link', { name: /Mistake box/ }));
    expect(router.state.location.pathname).toBe('/review');
  });

  it('serves settings on /profile and redirects the old /settings URL', async () => {
    const { router } = renderApp('/settings');
    expect(await screen.findByRole('heading', { name: 'Profile', level: 1 })).toBeInTheDocument();
    expect(router.state.location.pathname).toBe('/profile');
  });

  it('marks the current destination in the main navigation', async () => {
    renderApp('/progress');
    await screen.findByRole('heading', { name: 'Progress', level: 1 });
    const nav = screen.getByRole('navigation', { name: 'Main' });
    expect(within(nav).getByRole('link', { name: 'Progress' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(within(nav).getByRole('link', { name: 'Learn' })).not.toHaveAttribute('aria-current');
  });
});

describe('Daily goal', () => {
  it("shows today's XP on Home and follows the goal chosen in the profile", async () => {
    useProgressStore
      .getState()
      .recordResult('a1-1-hallo-time-of-day', { correct: 5, total: 5, played: [], mistakes: [] });
    const gained = useProgressStore.getState().daily.xp;
    expect(gained).toBeGreaterThan(0);
    const { user } = renderApp('/profile');
    await user.click(await screen.findByLabelText('100'));
    expect(useSettingsStore.getState().dailyGoal).toBe(100);
    await user.click(
      within(screen.getByRole('navigation', { name: 'Main' })).getByRole('link', { name: 'Learn' }),
    );
    const card = await screen.findByTestId('daily-goal');
    expect(card).toHaveTextContent(`${gained} of 100 XP collected`);
  });

  it('links the home game shortcuts to the library filter', async () => {
    const { user, router } = renderApp('/');
    await user.click(await screen.findByTestId('home-game-quiz'));
    expect(router.state.location.search).toBe('?view=games&type=quiz');
  });
});
