import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { ActivityCard } from '../ActivityCard';
import { quizActivity } from '@/test/factories';
import { useSettingsStore, DEFAULT_SETTINGS } from '@/store/settingsStore';
import { Button } from './Button';
import { Card } from './Card';
import { Chip, Tag } from './Chip';
import { Confetti } from './Confetti';
import { Icon, type IconName } from './Icon';
import { ICON_PATHS } from './iconPaths';
import { DailyGoalCard } from '../DailyGoalCard';
import { GAME_TYPES } from '@/content/gameTypes';
import { GameTile } from './GameTile';
import { IconButton } from './IconButton';
import { ProgressRing } from './ProgressRing';
import { Logo } from './Logo';
import { StatCard } from './StatCard';
import { StatPill } from './StatPill';
import { FeedbackBanner } from './FeedbackBanner';
import { FeedbackFooter } from '@/games/shared/GameFrame';
import { ProgressBar } from './ProgressBar';
import { SpeakButton } from './SpeakButton';
import { Stars } from './Stars';
import { UmlautKeyboard } from './UmlautKeyboard';

describe('Button', () => {
  it('renders variants, icon and fires clicks unless disabled', async () => {
    const onClick = vi.fn();
    const { rerender } = render(
      <Button icon="🔁" onClick={onClick}>
        Again
      </Button>,
    );
    await userEvent.setup().click(screen.getByRole('button', { name: /Again/ }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    rerender(
      <Button disabled onClick={onClick} block size="sm" variant="danger">
        Nope
      </Button>,
    );
    await userEvent.setup().click(screen.getByRole('button', { name: 'Nope' }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });
});

describe('Card, Tag, Chip', () => {
  it('render content', () => {
    render(
      <>
        <Card data-testid="card">x</Card>
        <Tag tone="success">ok</Tag>
      </>,
    );
    expect(screen.getByTestId('card')).toHaveTextContent('x');
    expect(screen.getByText('ok')).toBeInTheDocument();
  });
  it('Chip toggles and exposes aria-pressed', async () => {
    const onToggle = vi.fn();
    const { rerender } = render(
      <Chip selected={false} onToggle={onToggle}>
        Food
      </Chip>,
    );
    const chip = screen.getByRole('button', { name: 'Food' });
    expect(chip).toHaveAttribute('aria-pressed', 'false');
    await userEvent.setup().click(chip);
    expect(onToggle).toHaveBeenCalled();
    rerender(
      <Chip selected onToggle={onToggle}>
        Food
      </Chip>,
    );
    expect(chip).toHaveAttribute('aria-pressed', 'true');
  });
});

describe('ProgressBar / Stars / Confetti / FeedbackBanner', () => {
  it('clamps progress to 0–100', () => {
    const { rerender } = render(<ProgressBar value={0.456} label="p" />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '46');
    rerender(<ProgressBar value={3} label="p" tone="success" />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
    rerender(<ProgressBar value={-1} label="p" />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  });
  it('labels stars for screen readers', () => {
    render(<Stars count={2} />);
    expect(screen.getByRole('img', { name: '2 of 3 stars' })).toBeInTheDocument();
  });
  it('renders decorative confetti', () => {
    render(<Confetti count={5} />);
    expect(screen.getByTestId('confetti')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByTestId('confetti').children).toHaveLength(5);
  });
  it('announces feedback politely', () => {
    render(
      <FeedbackBanner kind="almost" title="Almost!">
        Check umlauts
      </FeedbackBanner>,
    );
    const banner = screen.getByRole('status');
    expect(banner).toHaveAttribute('aria-live', 'polite');
    expect(banner).toHaveAttribute('data-kind', 'almost');
    expect(banner).toHaveTextContent('Check umlauts');
  });
  it('puts the detail under the badge row so it spans the full card width', () => {
    render(
      <FeedbackBanner kind="wrong" title="Not quite.">
        <p>Detail text</p>
      </FeedbackBanner>,
    );
    const title = screen.getByText('Not quite.');
    const detail = screen.getByText('Detail text');
    const header = title.parentElement as HTMLElement;
    expect(header.querySelector('svg')).not.toBeNull();
    expect(header.contains(detail)).toBe(false);
    expect(detail.parentElement?.parentElement).toBe(header.parentElement);
  });
  it('shows a verdict badge and colours the Continue button by verdict', () => {
    const { rerender } = render(
      <FeedbackFooter kind="correct" title="Correct!" isLast={false} onNext={() => {}} />,
    );
    expect(screen.getByTestId('feedback').querySelector('svg')).not.toBeNull();
    expect(screen.getByTestId('continue').className).toContain('bg-success');
    rerender(<FeedbackFooter kind="wrong" title="Not quite" isLast={false} onNext={() => {}} />);
    expect(screen.getByTestId('continue').className).toContain('bg-danger');
    rerender(<FeedbackFooter kind="almost" title="Almost" isLast onNext={() => {}} />);
    expect(screen.getByTestId('continue').className).toContain('bg-primary');
  });
});

describe('UmlautKeyboard', () => {
  it('inserts special characters', async () => {
    const onInsert = vi.fn();
    render(<UmlautKeyboard onInsert={onInsert} />);
    const user = userEvent.setup();
    for (const ch of ['ä', 'ö', 'ü', 'ß'])
      await user.click(screen.getByRole('button', { name: ch }));
    expect(onInsert.mock.calls.map((c) => c[0])).toEqual(['ä', 'ö', 'ü', 'ß']);
  });
});

describe('SpeakButton', () => {
  afterEach(() => {
    // @ts-expect-error test cleanup
    delete window.speechSynthesis;
    // @ts-expect-error test cleanup
    delete window.SpeechSynthesisUtterance;
    useSettingsStore.setState({ ...DEFAULT_SETTINGS });
  });

  it('is disabled when speech is unavailable', () => {
    render(<SpeakButton text="Hallo" />);
    expect(screen.getByRole('button', { name: 'Listen: Hallo' })).toBeDisabled();
  });

  it('speaks with the configured rate when available', async () => {
    const synth = { cancel: vi.fn(), speak: vi.fn(), getVoices: () => [] };
    class U {
      constructor(public text: string) {}
      lang = '';
      rate = 1;
      onend: (() => void) | null = null;
      onerror: (() => void) | null = null;
    }
    Object.assign(window, { speechSynthesis: synth, SpeechSynthesisUtterance: U });
    useSettingsStore.setState({ ttsRate: 0.6 });
    render(<SpeakButton text="Guten Tag" label="Play" size="lg" />);
    await userEvent.setup().click(screen.getByRole('button', { name: 'Play' }));
    expect(synth.speak).toHaveBeenCalledTimes(1);
    expect(synth.speak.mock.calls[0]![0]).toMatchObject({
      text: 'Guten Tag',
      rate: 0.6,
      lang: 'de-DE',
    });
  });
});

describe('ActivityCard', () => {
  it('links to the game and shows meta, tags and stars', () => {
    render(
      <MemoryRouter>
        <ActivityCard
          activity={quizActivity('a', 'u', { title: 'My quiz' })}
          to="/play/a"
          stars={2}
          badge="Up next"
          unitTitle="Unit One"
        />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /My quiz/ });
    expect(link).toHaveAttribute('href', '/play/a');
    expect(link).toHaveTextContent('Quiz');
    expect(link).toHaveTextContent('Easy');
    expect(link).toHaveTextContent('3 min');
    expect(link).toHaveTextContent('Vocabulary');
    expect(link).toHaveTextContent('Up next');
    expect(screen.getByRole('img', { name: '2 of 3 stars' })).toBeInTheDocument();
    expect(screen.getByText('Unit: Unit One')).toBeInTheDocument();
  });
});

describe('Icon and IconButton', () => {
  it('Icon is decorative by default and named when given a title', () => {
    const { container, rerender } = render(<Icon name="star" />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    expect(container.querySelectorAll('path')).toHaveLength(1);
    rerender(<Icon name="trophy" title="Trophy" filled size={32} />);
    expect(screen.getByRole('img', { name: 'Trophy' })).toHaveAttribute('width', '32');
    expect(container.querySelectorAll('path').length).toBeGreaterThan(1);
  });
  it('every icon path set is non-empty', () => {
    const names = Object.keys(ICON_PATHS) as IconName[];
    expect(names).toHaveLength(62);
    for (const n of names) expect(ICON_PATHS[n].length).toBeGreaterThan(5);
  });
  it('IconButton is named by aria-label and fires clicks', async () => {
    const onClick = vi.fn();
    render(<IconButton icon="close" aria-label="Close" onClick={onClick} />);
    await userEvent.setup().click(screen.getByRole('button', { name: 'Close' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe('design-system tones', () => {
  it('Tag supports every tone and Chip shows a check when selected', () => {
    render(
      <>
        {(
          ['neutral', 'primary', 'success', 'warning', 'error', 'info', 'xp', 'streak'] as const
        ).map((tone) => (
          <Tag key={tone} tone={tone}>
            {tone}
          </Tag>
        ))}
        <Chip selected onToggle={() => {}}>
          Picked
        </Chip>
      </>,
    );
    expect(screen.getByText('streak')).toHaveClass('bg-streak-soft');
    expect(screen.getByRole('button', { name: 'Picked' }).querySelector('svg')).not.toBeNull();
  });
  it('ProgressBar has XP and streak tones; Card can be interactive or selected', () => {
    const { container } = render(
      <>
        <ProgressBar value={0.5} label="xp" tone="xp" />
        <ProgressBar value={0.5} label="streak" tone="streak" />
        <Card interactive data-testid="i">
          a
        </Card>
        <Card selected data-testid="s">
          b
        </Card>
      </>,
    );
    expect(container.querySelector('[aria-label="xp"] > div')).toHaveClass('bg-accent');
    expect(screen.getByTestId('s')).toHaveClass('border-primary');
    expect(screen.getByTestId('i').className).toContain('0_3px_0');
  });
});

describe('StatPill, StatCard, Logo', () => {
  it('StatPill is one named image with the value inside', () => {
    render(
      <StatPill icon="flame" tone="streak" value={12} label="12-day streak" data-testid="s" />,
    );
    const pill = screen.getByRole('img', { name: '12-day streak' });
    expect(pill).toHaveTextContent('12');
    expect(screen.getByTestId('s')).toBe(pill);
  });
  it('StatCard shows value, label and optional hint', () => {
    render(<StatCard icon="zap" tone="xp" value={1240} label="Total XP" hint="Best: 3" />);
    expect(screen.getByText('1240')).toBeInTheDocument();
    expect(screen.getByText('Total XP')).toBeInTheDocument();
    expect(screen.getByText('Best: 3')).toBeInTheDocument();
  });
  it('Logo is decorative and can drop the wordmark', () => {
    const { container, rerender } = render(<Logo />);
    expect(container).toHaveTextContent('lingoat');
    rerender(<Logo showWordmark={false} />);
    expect(container).not.toHaveTextContent('lingoat');
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });
});

describe('GameTile and ProgressRing', () => {
  it('GameTile shows a decorative icon with the game colours for every game type', () => {
    const { container } = render(
      <>
        {GAME_TYPES.map((g) => (
          <GameTile key={g} type={g} size="sm" />
        ))}
      </>,
    );
    const tiles = container.querySelectorAll('[data-game]');
    expect(tiles).toHaveLength(GAME_TYPES.length);
    for (const tile of tiles) {
      expect(tile).toHaveAttribute('aria-hidden', 'true');
      expect(tile.querySelector('svg')).not.toBeNull();
      expect(tile.className).toContain(`game-${tile.getAttribute('data-game')}-bg`);
    }
  });
  it('ProgressRing exposes a clamped percentage as a progressbar', () => {
    const { rerender } = render(<ProgressRing value={0.64} label="Goal" />);
    const ring = screen.getByRole('progressbar', { name: 'Goal' });
    expect(ring).toHaveAttribute('aria-valuenow', '64');
    expect(ring).toHaveTextContent('64%');
    rerender(<ProgressRing value={3} label="Goal" tone="xp" />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
    rerender(<ProgressRing value={-1} label="Goal" />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  });
  it('DailyGoalCard shows what is left and then the reached state', () => {
    const { rerender } = render(<DailyGoalCard xp={32} goal={50} />);
    expect(screen.getByText('32 of 50 XP collected')).toBeInTheDocument();
    expect(screen.getByText('18 XP to go')).toBeInTheDocument();
    rerender(<DailyGoalCard xp={60} goal={50} />);
    expect(screen.getByText('Goal reached!')).toBeInTheDocument();
    expect(screen.getByRole('progressbar', { name: 'Daily goal' })).toHaveAttribute(
      'aria-valuenow',
      '100',
    );
  });
});
