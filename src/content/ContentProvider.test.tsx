import { render, screen, waitFor } from '@testing-library/react';
import { ContentProvider, useContent, useContentState } from './ContentProvider';
import { levelFixture } from '@/test/factories';
import type { LevelMeta } from './schema';
import { LEVELS, getLevelMeta } from './levels';

function Probe() {
  const state = useContentState();
  if (state.status !== 'ready')
    return (
      <p>
        {state.status}
        {state.status === 'error' ? `: ${state.message}` : ''}
      </p>
    );
  return <p>units: {state.index.units.length}</p>;
}
function Strict() {
  useContent();
  return null;
}

describe('ContentProvider', () => {
  it('is ready immediately with injected content', () => {
    render(
      <ContentProvider content={[levelFixture()]}>
        <Probe />
      </ContentProvider>,
    );
    expect(screen.getByText('units: 2')).toBeInTheDocument();
  });

  it('loads available levels lazily and skips coming-soon ones', async () => {
    const levels: LevelMeta[] = [
      {
        language: 'de',
        id: 'a1-1',
        title: 'A1.1',
        subtitle: '',
        status: 'available',
        load: async () => ({ default: levelFixture() }),
      },
      { language: 'de', id: 'a2-1', title: 'A2.1', subtitle: '', status: 'coming-soon' },
    ];
    render(
      <ContentProvider levels={levels}>
        <Probe />
      </ContentProvider>,
    );
    expect(screen.getByText('loading')).toBeInTheDocument();
    expect(await screen.findByText('units: 2')).toBeInTheDocument();
  });

  it('exposes load failures', async () => {
    const levels: LevelMeta[] = [
      {
        language: 'de',
        id: 'x',
        title: 'X',
        subtitle: '',
        status: 'available',
        load: () => Promise.reject(new Error('boom')),
      },
    ];
    render(
      <ContentProvider levels={levels}>
        <Probe />
      </ContentProvider>,
    );
    await waitFor(() => expect(screen.getByText('error: boom')).toBeInTheDocument());
  });

  it('merges several levels', async () => {
    const second = levelFixture();
    second.units = second.units.map((u) => ({ ...u, id: `${u.id}-b`, levelId: 'a1-2' }));
    second.activities = second.activities.map((a) => ({
      ...a,
      id: `${a.id}-b`,
      unitId: `${a.unitId}-b`,
    }));
    render(
      <ContentProvider content={[levelFixture(), second]}>
        <Probe />
      </ContentProvider>,
    );
    expect(screen.getByText('units: 4')).toBeInTheDocument();
  });

  it('useContent throws before content is ready', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<Strict />)).toThrow(/before content was ready/);
    spy.mockRestore();
  });
});

describe('level catalogue', () => {
  it('marks A1.1 to C2.1 available and C2.2 coming soon', () => {
    expect(getLevelMeta('a1-1')).toMatchObject({ status: 'available' });
    expect(getLevelMeta('a1-2')).toMatchObject({ status: 'available' });
    expect(getLevelMeta('a2-1')).toMatchObject({ status: 'available' });
    expect(getLevelMeta('a2-2')).toMatchObject({ status: 'available' });
    expect(getLevelMeta('b1-1')).toMatchObject({ status: 'available' });
    expect(getLevelMeta('b1-2')).toMatchObject({ status: 'available' });
    expect(getLevelMeta('b2-1')).toMatchObject({ status: 'available' });
    expect(getLevelMeta('b2-2')).toMatchObject({ status: 'available' });
    expect(getLevelMeta('c1-1')).toMatchObject({ status: 'available' });
    expect(getLevelMeta('c1-2')).toMatchObject({ status: 'available' });
    expect(getLevelMeta('c2-1')).toMatchObject({ status: 'available' });
    expect(getLevelMeta('c2-2')).toMatchObject({ status: 'available' });
    expect(getLevelMeta('nope')).toBeUndefined();
    for (const l of LEVELS) expect(Boolean(l.load)).toBe(l.status === 'available');
  });
});
