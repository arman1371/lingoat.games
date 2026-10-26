import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { GRAMMAR_TOPIC_BY_ID } from '@/content/grammar';
import { ActivityLessonContext } from '@/games/shared/hints';
import { MistakeHint } from '@/games/shared/MistakeHint';
import { GrammarLesson } from './GrammarLesson';
import { GrammarSheet } from './GrammarSheet';
import { Rich } from './Rich';

const dative = GRAMMAR_TOPIC_BY_ID.get('dative')!;

describe('Rich', () => {
  it('turns **bold** into strong text and leaves the rest alone', () => {
    const { container } = render(<Rich text="mit dem **Auto** fahren" />);
    expect(container.querySelector('strong')).toHaveTextContent('Auto');
    expect(container).toHaveTextContent('mit dem Auto fahren');
  });
});

describe('GrammarLesson', () => {
  it('renders the summary and every section with the heading level it was given', () => {
    const { rerender } = render(<GrammarLesson topic={dative} />);
    expect(screen.getByText('In short')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(dative.sections.length);
    rerender(<GrammarLesson topic={dative} level={3} />);
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThanOrEqual(
      dative.sections.length,
    );
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
  });

  it('makes every table a named, keyboard-scrollable region', () => {
    render(<GrammarLesson topic={dative} />);
    const tables = screen.getAllByRole('table');
    expect(tables.length).toBeGreaterThan(0);
    for (const table of tables) {
      const region = table.parentElement!;
      expect(region).toHaveAttribute('role', 'region');
      expect(region).toHaveAttribute('tabindex', '0');
      expect(region).toHaveAccessibleName();
    }
  });
});

describe('GrammarSheet', () => {
  it('shows the lesson while open and calls onClose from both close buttons', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    const { rerender } = render(
      <MemoryRouter>
        <GrammarSheet topic={dative} open={false} onClose={onClose} />
      </MemoryRouter>,
    );
    expect(screen.queryByTestId('grammar-lesson')).not.toBeInTheDocument();
    rerender(
      <MemoryRouter>
        <GrammarSheet topic={dative} open onClose={onClose} />
      </MemoryRouter>,
    );
    const sheet = screen.getByRole('dialog', { name: 'Dative (Wem?)' });
    expect(within(sheet).getByTestId('grammar-lesson')).toBeInTheDocument();
    const closers = within(sheet).getAllByRole('button', { name: 'Close lesson' });
    expect(closers).toHaveLength(2);
    await user.click(closers[0]!);
    await user.click(closers[1]!);
    expect(onClose).toHaveBeenCalledTimes(2);
  });
});

describe('Full lesson link in the mistake hint', () => {
  it('opens the full lesson as a sheet and closes it again', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <ActivityLessonContext value="dative">
          <MistakeHint why="Because." />
        </ActivityLessonContext>
      </MemoryRouter>,
    );
    const link = await screen.findByTestId('full-lesson');
    expect(link).toHaveTextContent('Full lesson: Dative (Wem?)');
    await user.click(link);
    const sheet = await screen.findByRole('dialog', { name: 'Dative (Wem?)' });
    expect(within(sheet).getByTestId('grammar-lesson')).toBeInTheDocument();
    await user.click(within(sheet).getAllByRole('button', { name: 'Close lesson' })[0]!);
    await waitFor(() => expect(screen.queryByTestId('grammar-lesson')).not.toBeInTheDocument());
  });

  it('shows no link for a lesson that has no full version yet', async () => {
    render(
      <MemoryRouter>
        <ActivityLessonContext value="konjunktiv-2">
          <MistakeHint why="Because." />
        </ActivityLessonContext>
      </MemoryRouter>,
    );
    expect(await screen.findByTestId('mini-lesson')).toBeInTheDocument();
    await new Promise((r) => setTimeout(r, 50));
    expect(screen.queryByTestId('full-lesson')).not.toBeInTheDocument();
  });
});
