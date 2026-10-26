import { configure, screen, within } from '@testing-library/react';
import { renderApp, resetStores } from '@/test/app';

// the first render of a file loads every level, which can take longer than the default second
configure({ asyncUtilTimeout: 5000 });
vi.setConfig({ testTimeout: 15000 });

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
  it('shows the full dative lesson with accessible tables and a draft note', async () => {
    renderApp('/library/grammar/dative');
    expect(await screen.findByRole('heading', { level: 1, name: 'Dative (Wem?)' })).toBeVisible();
    expect(screen.getByTestId('draft-note')).toHaveTextContent('not yet native-reviewed');
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
    expect(screen.getByRole('link', { name: 'Wikipedia (German): Dativ' })).toHaveAttribute(
      'href',
      'https://de.wikipedia.org/wiki/Dativ',
    );
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
    const back = await screen.findByRole('link', { name: 'Grammar' });
    expect(back).toHaveAttribute('href', '/library?view=grammar');
  });

  it('shows not-found for a topic that does not exist', async () => {
    renderApp('/library/grammar/does-not-exist');
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });
});

describe('grammar index in the library', () => {
  it('switches between games and grammar and groups topics by level', async () => {
    const { user, router } = renderApp('/library');
    await user.click(await screen.findByRole('tab', { name: /Grammar/ }));
    expect(router.state.location.search).toBe('?view=grammar');
    const index = await screen.findByTestId('grammar-index');
    expect(within(index).getByRole('heading', { level: 2, name: /A1\.1/ })).toBeInTheDocument();
    expect(within(index).getByRole('heading', { level: 2, name: /A1\.2/ })).toBeInTheDocument();
    expect(within(index).getByTestId('grammar-word-order')).toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: /Games/ }));
    expect(await screen.findByTestId('result-count')).toBeInTheDocument();
  });

  it('searches topics and shows an empty state', async () => {
    const { user } = renderApp('/library?view=grammar');
    const search = await screen.findByRole('searchbox', { name: 'Search grammar topics' });
    await user.type(search, 'dativ');
    expect(await screen.findByTestId('grammar-dative')).toBeInTheDocument();
    expect(screen.queryByTestId('grammar-word-order')).not.toBeInTheDocument();
    await user.clear(search);
    await user.type(search, 'zzzz');
    expect(await screen.findByText('No grammar topics match.')).toBeInTheDocument();
  });
});

describe('level page grammar list', () => {
  it('lists each topic of the level once', async () => {
    renderApp('/levels/a1-2');
    const list = await screen.findByTestId('level-grammar');
    expect(within(list).getByRole('heading', { name: 'Grammar in A1.2' })).toBeInTheDocument();
    const ids = within(list)
      .getAllByRole('link')
      .map((l) => l.getAttribute('data-testid'));
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids).toContain('grammar-dative');
    expect(ids).toContain('grammar-perfekt');
  });

  it('shows nothing for a level without lessons', async () => {
    renderApp('/levels/b1-1');
    await screen.findByRole('heading', { level: 1, name: 'B1.1' });
    expect(screen.queryByTestId('level-grammar')).not.toBeInTheDocument();
  });
});
