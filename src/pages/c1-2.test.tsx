import { screen, waitFor, within } from '@testing-library/react';
import c12 from '@/content/c1-2';
import { renderApp, resetStores } from '@/test/app';

beforeEach(resetStores);

describe('Level C1.2', () => {
  it('is listed on Home with its game count', async () => {
    renderApp('/');
    expect(await screen.findByTestId('level-c1-2')).toHaveTextContent(
      '0 / ' + c12.activities.length + ' games',
    );
  });

  it('walks Home → C1.2 → first unit and shows its guided path', async () => {
    const { user } = renderApp('/');
    await user.click(await screen.findByTestId('level-c1-2'));
    const units = await screen.findByRole('list', { name: 'Units' });
    expect(within(units).getAllByTestId(/^unit-/)).toHaveLength(c12.units.length);
    expect(within(units).queryByTestId('unit-b1-1-glueck')).not.toBeInTheDocument();
    await user.click(screen.getByTestId('unit-c1-2-finanzen'));
    const path = await screen.findByRole('list', { name: 'Guided path' });
    expect(screen.getByRole('heading', { level: 1, name: 'Finanzen' })).toBeInTheDocument();
    const steps = within(path).getAllByRole('listitem');
    expect(steps).toHaveLength(c12.activities.filter((a) => a.unitId === 'c1-2-finanzen').length);
    expect(steps[0]).toHaveAttribute('data-state', 'current');
  });

  it('filters the library by the C1.2 level and only offers its units', async () => {
    renderApp('/library?view=games&lvl=c1-2');
    await waitFor(() =>
      expect(screen.getByTestId('result-count')).toHaveTextContent(
        `${c12.activities.length} games`,
      ),
    );
    expect(screen.getByRole('button', { name: 'C1.2' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /Recht & Gesetz/ })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Glück im Alltag/ })).not.toBeInTheDocument();
  }, 30_000);
});
