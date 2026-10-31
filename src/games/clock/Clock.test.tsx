import { screen } from '@testing-library/react';
import { renderGame } from '@/test/render';
import ClockMaster from './Clock';
import { AnalogClock } from './AnalogClock';
import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { LanguageContext } from '@/app/language';

describe('AnalogClock', () => {
  it('draws hands at the right angles and has an accessible label', () => {
    render(<AnalogClock time={{ hour: 3, minute: 0 }} />);
    const svg = screen.getByRole('img', { name: 'Clock showing 03:00' });
    const lines = svg.querySelectorAll('line[transform]');
    expect(lines[0]).toHaveAttribute('transform', 'rotate(90 100 100)');
    expect(lines[1]).toHaveAttribute('transform', 'rotate(0 100 100)');
  });
});

describe('ClockMaster – read mode', () => {
  const config = {
    rounds: [{ id: 'r1', time: '07:30', mode: 'read' as const, style: 'informal' as const }],
  };

  it('shows the clock and lets you pick the phrase', async () => {
    const { user, onFinish } = renderGame(ClockMaster, config);
    expect(screen.getByRole('img', { name: 'Clock showing 07:30' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'halb acht' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
    expect(screen.getByText('halb acht', { selector: 'strong' })).toBeInTheDocument();
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(expect.objectContaining({ correct: 1, total: 1 }));
  });

  it('flags a wrong phrase', async () => {
    const { user, onFinish } = renderGame(ClockMaster, config);
    const buttons = screen
      .getAllByRole('button')
      .filter((b) => /^\d/.test(b.textContent ?? '') && !/halb acht/.test(b.textContent!));
    await user.click(buttons[0]!);
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(
      expect.objectContaining({ correct: 0, mistakes: ['r1'] }),
    );
  });
});

describe('ClockMaster – set mode', () => {
  const config = {
    rounds: [{ id: 's1', time: '02:30', mode: 'set' as const, style: 'informal' as const }],
  };
  const press = async (
    user: ReturnType<typeof renderGame>['user'],
    name: string,
    times: number,
  ) => {
    for (let i = 0; i < times; i++) await user.click(screen.getByRole('button', { name }));
  };

  it('sets the clock with the steppers and accepts the right time', async () => {
    const { user, onFinish } = renderGame(ClockMaster, config);
    expect(screen.getByTestId('prompt')).toHaveTextContent('halb drei');
    expect(screen.getByTestId('digital')).toHaveTextContent('12:00');
    await press(user, 'Hour minus', 10); // 12 → 2
    await press(user, 'Minutes plus', 6); // 0 → 30
    expect(screen.getByTestId('digital')).toHaveTextContent('02:30');
    await user.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(expect.objectContaining({ correct: 1 }));
  });

  it('accepts the 12-hour equivalent for everyday speech and rejects a wrong time', async () => {
    const { user } = renderGame(ClockMaster, config);
    await press(user, 'Hour plus', 2); // 14:00
    await press(user, 'Minutes plus', 6);
    expect(screen.getByTestId('digital')).toHaveTextContent('14:30');
    await user.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
  });

  it('marks a wrong time and locks the steppers', async () => {
    const { user } = renderGame(ClockMaster, config);
    await user.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    expect(screen.getByRole('button', { name: 'Hour plus' })).toBeDisabled();
  });

  it('requires the exact 24h hour for formal style', async () => {
    const formal = {
      rounds: [{ id: 's2', time: '14:30', mode: 'set' as const, style: 'formal' as const }],
    };
    const { user } = renderGame(ClockMaster, formal);
    await press(user, 'Hour minus', 10); // 02:xx
    await press(user, 'Minutes plus', 6);
    await user.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
  });
});

describe('ClockMaster in French', () => {
  const frenchWrapper = ({ children }: { children: ReactNode }) => (
    <LanguageContext.Provider value="fr">{children}</LanguageContext.Provider>
  );

  it('asks in French and offers French phrases', async () => {
    const config = {
      rounds: [{ id: 'r1', time: '07:30', mode: 'read' as const, style: 'informal' as const }],
    };
    const { user, onFinish } = renderGame(ClockMaster, config, 1, { wrapper: frenchWrapper });
    expect(screen.getByTestId('prompt')).toHaveTextContent('Quelle heure est-il ?');
    await user.click(screen.getByRole('button', { name: 'sept heures et demie' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(expect.objectContaining({ correct: 1, total: 1 }));
  });

  it('shows the French phrase to set the clock to', () => {
    const config = {
      rounds: [{ id: 'r1', time: '14:45', mode: 'set' as const, style: 'informal' as const }],
    };
    renderGame(ClockMaster, config, 1, { wrapper: frenchWrapper });
    expect(screen.getByTestId('prompt')).toHaveTextContent('trois heures moins le quart');
  });
});
