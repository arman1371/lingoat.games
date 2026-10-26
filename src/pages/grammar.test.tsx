import { configure, screen, within } from '@testing-library/react';
import { renderApp, resetStores } from '@/test/app';

// every render loads all levels and the library queries a large DOM; CI runs ~100 test files in
// parallel, so the default second (and even five) is too tight there
configure({ asyncUtilTimeout: 30_000 });
vi.setConfig({ testTimeout: 60_000 });

beforeEach(resetStores);

describe('unit page grammar card', () => {
  it('lists the topics of the unit with the unit note and opens a full lesson', async () => {
    const { user, router } = renderApp('/levels/a1-2/units/a1-2-wohnen');
    const card = await screen.findByTestId('unit-grammar');
    expect(within(card).getByRole('heading', { name: 'Grammar' })).toBeInTheDocument();
    expect(within(card).getByText('2 topics')).toBeInTheDocument();
    const rows = within(card).getAllByRole('link');
    expect(rows.map((r) => r.getAttribute('data-testid'))).toEqual([
      'grammar-two-way-prepositions',
      'grammar-dative',
    ]);
    expect(within(card).getByText('stehen / stellen, liegen / legen')).toBeInTheDocument();

    await user.click(screen.getByTestId('grammar-dative'));
    expect(router.state.location.pathname).toBe('/library/grammar/dative');
    expect(await screen.findByRole('heading', { level: 1, name: 'Dative (Wem?)' })).toBeVisible();
  });

  it('keeps the one-line grammar list for units without written lessons', async () => {
    renderApp('/levels/b1-1/units/b1-1-glueck');
    await screen.findByRole('list', { name: 'Guided path' });
    expect(await screen.findByText(/^Grammar:/)).toBeInTheDocument();
    expect(screen.queryByTestId('unit-grammar')).not.toBeInTheDocument();
  });
});

describe('grammar lesson page', () => {
  it('shows the full dative lesson with accessible tables', async () => {
    renderApp('/library/grammar/dative');
    expect(await screen.findByRole('heading', { level: 1, name: 'Dative (Wem?)' })).toBeVisible();
    expect(screen.queryByText(/native-reviewed/)).not.toBeInTheDocument();
    expect(screen.getByText('A1.2')).toBeInTheDocument();

    const lesson = screen.getByTestId('grammar-lesson');
    for (const heading of ['What it is', 'When it is used', 'The forms', 'Dative or accusative?']) {
      expect(within(lesson).getByRole('heading', { level: 2, name: heading })).toBeVisible();
    }
    // the article table: caption, column headers, row headers, highlighted dative row
    const table = within(lesson).getByRole('table', {
      name: 'The definite article in three cases; the dative row is highlighted.',
    });
    expect(
      within(table)
        .getAllByRole('columnheader')
        .map((h) => h.textContent),
    ).toEqual(['Case', 'masc.', 'fem.', 'neut.', 'plural']);
    const dativeRow = within(table).getByRole('row', { name: /Dative/ });
    expect(dativeRow).toHaveAttribute('data-highlight', 'true');
    expect(
      within(dativeRow)
        .getAllByRole('cell')
        .map((c) => c.textContent),
    ).toEqual(['dem', 'der', 'dem', 'den + -n']);
    // German examples are marked up as German
    expect(
      within(lesson).getAllByTestId('example')[0]!.querySelector('[lang="de"]'),
    ).not.toBeNull();
    expect(within(lesson).getByTestId('compare')).toBeInTheDocument();
    // the references live in the data and docs/grammar-sources.md, not on the page
    expect(screen.queryByRole('heading', { name: 'Sources' })).not.toBeInTheDocument();
  });

  it('links to related topics, the units that use the topic and a practice game', async () => {
    const { user, router } = renderApp('/library/grammar/dative');
    await screen.findByRole('heading', { level: 1, name: 'Dative (Wem?)' });
    const units = screen.getByRole('region', { hidden: false, name: /used in these units/i });
    expect(within(units).getAllByRole('link', { name: /A1\.2 · / }).length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: 'Accusative (Wen? Was?)' })).toHaveAttribute(
      'href',
      '/library/grammar/accusative',
    );
    const practise = screen.getByTestId('practise-topic');
    expect(practise).toHaveAttribute('href', expect.stringContaining('/play/'));
    await user.click(screen.getByRole('link', { name: 'Accusative (Wen? Was?)' }));
    expect(router.state.location.pathname).toBe('/library/grammar/accusative');
  });

  it('goes back to the grammar index when it was the first page of the session', async () => {
    renderApp('/library/grammar/perfekt');
    await screen.findByRole('heading', { level: 1, name: 'The Perfekt' });
    const back = within(screen.getByRole('main')).getByRole('link', { name: 'Grammar' });
    expect(back).toHaveAttribute('href', '/library');
  });

  it('shows not-found for a topic that does not exist', async () => {
    renderApp('/library/grammar/does-not-exist');
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });
});

describe('library menu: grammar tab first, games second', () => {
  it('is one main-menu item that opens on the grammar topics grouped by level', async () => {
    const { user, router } = renderApp('/');
    const nav = await screen.findByRole('navigation', { name: 'Main' });
    expect(
      within(nav)
        .getAllByRole('link')
        .map((l) => l.textContent),
    ).toEqual(['Learn', 'Library', 'Review', 'Progress', 'Profile']);
    await user.click(within(nav).getByRole('link', { name: 'Library' }));
    expect(router.state.location.pathname).toBe('/library');
    const tabs = await screen.findAllByRole('tab');
    expect(tabs.map((t) => t.textContent)).toEqual(['Grammar', 'Games']);
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    const index = await screen.findByTestId('grammar-index');
    expect(within(index).getByRole('heading', { level: 2, name: /A1\.1/ })).toBeInTheDocument();
    expect(within(index).getByRole('heading', { level: 2, name: /A1\.2/ })).toBeInTheDocument();
    expect(within(index).getByTestId('grammar-word-order')).toBeInTheDocument();
  });

  it('switches to the games and back', async () => {
    const { user, router } = renderApp('/library');
    await user.click(await screen.findByRole('tab', { name: 'Games' }));
    expect(router.state.location.search).toBe('?view=games');
    expect(await screen.findByTestId('result-count')).toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: 'Grammar' }));
    expect(router.state.location.search).toBe('');
    expect(await screen.findByTestId('grammar-index')).toBeInTheDocument();
  });

  it('keeps the Library item current on a lesson page', async () => {
    renderApp('/library/grammar/dative');
    await screen.findByRole('heading', { level: 1, name: 'Dative (Wem?)' });
    const nav = screen.getByRole('navigation', { name: 'Main' });
    expect(within(nav).getByRole('link', { name: 'Library' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  it('filters the topics by level', async () => {
    const { user, router } = renderApp('/library');
    const index = await screen.findByTestId('grammar-index');
    const chips = within(index).getByRole('group', { name: 'Level' });
    const levels = within(chips)
      .getAllByRole('button')
      .map((b) => b.textContent);
    expect(levels.slice(0, 3)).toEqual(['All', 'A1.1', 'A1.2']);
    expect(levels).toEqual(expect.arrayContaining(['C2.1', 'C2.2']));
    await user.click(within(chips).getByRole('button', { name: 'A1.2' }));
    expect(router.state.location.search).toBe('?glvl=a1-2');
    expect(within(index).getByTestId('grammar-dative')).toBeInTheDocument();
    expect(within(index).queryByTestId('grammar-word-order')).not.toBeInTheDocument();
    await user.click(within(chips).getByRole('button', { name: 'All' }));
    expect(within(index).getByTestId('grammar-word-order')).toBeInTheDocument();
  });

  it('searches topics and shows an empty state', async () => {
    const { user } = renderApp('/library');
    const search = await screen.findByRole('searchbox', { name: 'Search grammar topics' });
    await user.type(search, 'dativ');
    expect(await screen.findByTestId('grammar-dative')).toBeInTheDocument();
    expect(screen.queryByTestId('grammar-word-order')).not.toBeInTheDocument();
    await user.clear(search);
    await user.type(search, 'zzzz');
    expect(await screen.findByText('No grammar topics match.')).toBeInTheDocument();
  });
});

describe('level page', () => {
  it('no longer lists grammar topics under the learning path', async () => {
    renderApp('/levels/a1-2');
    await screen.findByRole('heading', { level: 1, name: 'A1.2' });
    expect(screen.queryByText('Grammar in A1.2')).not.toBeInTheDocument();
  });
});
