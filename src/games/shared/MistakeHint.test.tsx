import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mistakeWhy, ActivityLessonContext } from './hints';
import { MistakeHint } from './MistakeHint';

describe('MistakeHint', () => {
  it('renders nothing without a why or a lesson', () => {
    const { container } = render(<MistakeHint />);
    expect(container).toBeEmptyDOMElement();
  });

  it('keeps the explanation behind a Why? button until it is tapped', async () => {
    const user = userEvent.setup();
    render(<MistakeHint why="Because." />);
    expect(screen.getByTestId('why')).toHaveTextContent('Why?');
    expect(screen.queryByTestId('mistake-why')).not.toBeInTheDocument();
    await user.click(screen.getByTestId('why'));
    expect(screen.getByTestId('mistake-why')).toHaveTextContent('Why not? Because.');
    await user.click(screen.getByRole('button', { name: 'Got it' }));
    expect(screen.queryByTestId('mistake-why')).not.toBeInTheDocument();
  });

  it('uses the activity lesson when the item has none', async () => {
    const user = userEvent.setup();
    render(
      <ActivityLessonContext value="dative">
        <MistakeHint why="Because." />
      </ActivityLessonContext>,
    );
    await user.click(screen.getByTestId('why'));
    expect(screen.getByTestId('mistake-why')).toHaveTextContent('Why not? Because.');
    expect(screen.getByTestId('mini-lesson')).toHaveAttribute('data-lesson', 'dative');
    expect(screen.getAllByRole('listitem')[0]).toHaveAttribute('lang', 'de');
  });

  it('prefers the item lesson', async () => {
    const user = userEvent.setup();
    render(
      <ActivityLessonContext value="dative">
        <MistakeHint lesson="accusative" />
      </ActivityLessonContext>,
    );
    await user.click(screen.getByTestId('why'));
    expect(screen.getByTestId('mini-lesson')).toHaveAttribute('data-lesson', 'accusative');
  });
});

describe('mistakeWhy', () => {
  it('matches the item why loosely and falls back to grammar-word contrasts', () => {
    const item = { answer: 'den', why: { Dem: 'dative!' } };
    expect(mistakeWhy(item, ' dem ')).toBe('dative!');
    expect(mistakeWhy(item, 'der')).toContain('“der” is masculine nominative');
    expect(mistakeWhy({ answer: 'Hund' }, 'Katze')).toBeUndefined();
  });
});
