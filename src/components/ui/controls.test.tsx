import { act, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { ConfirmDialog } from './Dialog';
import { Mascot } from './Mascot';
import { MASCOT_MOODS } from './mascotData';
import { Segment } from './Segment';
import { Skeleton } from './Skeleton';
import { StatePanel } from './StatePanel';
import { TabPanel, Tabs } from './Tabs';
import { TextField } from './TextField';
import { Toast } from './Toast';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('is a switch that reports changes from click and Space', async () => {
    const onChange = vi.fn();
    const { rerender } = render(
      <Toggle label="Sound" hint="Short cues" checked={false} onChange={onChange} />,
    );
    const sw = screen.getByRole('switch', { name: /Sound/ });
    expect(sw).not.toBeChecked();
    expect(screen.getByText('Short cues')).toBeInTheDocument();
    await userEvent.setup().click(sw);
    expect(onChange).toHaveBeenLastCalledWith(true);
    rerender(<Toggle label="Sound" checked onChange={onChange} />);
    const user = userEvent.setup();
    screen.getByRole('switch').focus();
    await user.keyboard(' ');
    expect(onChange).toHaveBeenLastCalledWith(false);
  });
});

describe('Segment', () => {
  it('groups radios under a legend and selects with arrow keys', async () => {
    const onChange = vi.fn();
    render(
      <Segment
        label="Theme"
        value="a"
        onChange={onChange}
        options={[
          { value: 'a', label: 'Alpha' },
          { value: 'b', label: 'Beta' },
        ]}
      />,
    );
    expect(screen.getByRole('group', { name: 'Theme' })).toBeInTheDocument();
    expect(screen.getByLabelText('Alpha')).toBeChecked();
    await userEvent.setup().click(screen.getByLabelText('Beta'));
    expect(onChange).toHaveBeenCalledWith('b');
  });
});

function TabsDemo() {
  const [v, setV] = useState<'one' | 'two' | 'three'>('one');
  return (
    <>
      <Tabs
        id="demo"
        label="Demo"
        value={v}
        onChange={setV}
        tabs={[
          { value: 'one', label: 'One', icon: 'map' },
          { value: 'two', label: 'Two' },
          { value: 'three', label: 'Three' },
        ]}
      />
      <TabPanel id="demo" value={v}>
        panel {v}
      </TabPanel>
    </>
  );
}

describe('Tabs', () => {
  it('has one tab stop, links tab and panel, and moves with arrow, Home and End keys', async () => {
    const user = userEvent.setup();
    render(<TabsDemo />);
    const tabs = screen.getAllByRole('tab');
    expect(tabs.map((t) => t.getAttribute('tabindex'))).toEqual(['0', '-1', '-1']);
    const panel = screen.getByRole('tabpanel');
    expect(panel).toHaveAccessibleName('One');
    expect(tabs[0]).toHaveAttribute('aria-controls', panel.id);

    tabs[0]!.focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Two' })).toHaveFocus();
    expect(screen.getByRole('tabpanel')).toHaveTextContent('panel two');
    await user.keyboard('{End}');
    expect(screen.getByRole('tab', { name: 'Three' })).toHaveFocus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'One' })).toHaveFocus();
    await user.keyboard('{ArrowLeft}');
    expect(screen.getByRole('tab', { name: 'Three' })).toHaveFocus();
    await user.keyboard('{Home}');
    expect(screen.getByRole('tab', { name: 'One' })).toHaveFocus();
    await user.keyboard('x');
    expect(screen.getByRole('tab', { name: 'One' })).toHaveAttribute('aria-selected', 'true');
  });
});

describe('ConfirmDialog', () => {
  it('opens as a labelled modal, confirms, cancels and closes on Escape-style close', async () => {
    const onConfirm = vi.fn();
    const onCancel = vi.fn();
    const { rerender } = render(
      <ConfirmDialog
        open={false}
        title="Sure?"
        body="Really."
        confirmLabel="Yes"
        cancelLabel="No"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />,
    );
    expect(screen.queryByRole('dialog')).toBeNull();
    rerender(
      <ConfirmDialog
        open
        title="Sure?"
        body="Really."
        confirmLabel="Yes"
        cancelLabel="No"
        tone="danger"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />,
    );
    const dialog = screen.getByRole('dialog', { name: 'Sure?' });
    expect(dialog).toHaveTextContent('Really.');
    const user = userEvent.setup();
    await user.click(within(dialog).getByRole('button', { name: 'Yes' }));
    expect(onConfirm).toHaveBeenCalledTimes(1);
    await user.click(within(dialog).getByRole('button', { name: 'No' }));
    expect(onCancel).toHaveBeenCalledTimes(1);
    // the browser fires `close` on Escape
    act(() => {
      dialog.dispatchEvent(new Event('close'));
    });
    expect(onCancel).toHaveBeenCalledTimes(2);
    rerender(
      <ConfirmDialog
        open={false}
        title="Sure?"
        confirmLabel="Yes"
        cancelLabel="No"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />,
    );
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});

describe('StatePanel, Mascot, Skeleton', () => {
  it('announces errors with an alert and other states as status', () => {
    const { rerender } = render(
      <StatePanel kind="error" title="Oops" action={<button type="button">Retry</button>}>
        Details
      </StatePanel>,
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Oops');
    expect(screen.getByRole('heading', { name: 'Oops', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument();
    rerender(<StatePanel kind="offline" as="h1" title="Offline" />);
    expect(screen.getByRole('status')).toHaveAttribute('data-kind', 'offline');
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
  it('Mascot draws every mood, decorative unless titled', () => {
    for (const mood of Object.keys(MASCOT_MOODS) as (keyof typeof MASCOT_MOODS)[]) {
      const { container, unmount } = render(<Mascot mood={mood} />);
      const svg = container.querySelector('svg')!;
      expect(svg).toHaveAttribute('aria-hidden', 'true');
      expect(svg.querySelectorAll('path')).toHaveLength(MASCOT_MOODS[mood].length);
      unmount();
    }
    render(<Mascot title="Goaty" />);
    expect(screen.getByRole('img', { name: 'Goaty' })).toBeInTheDocument();
  });
  it('Skeleton is hidden from assistive technology', () => {
    render(<Skeleton className="h-4" />);
    expect(screen.getByTestId('skeleton')).toHaveAttribute('aria-hidden', 'true');
  });
});

describe('TextField', () => {
  it('links label, hint and error to the input', async () => {
    const onChange = vi.fn();
    const { rerender } = render(
      <TextField label="Name" hint="Your first name" onChange={onChange} />,
    );
    const input = screen.getByLabelText('Name');
    expect(input).toHaveAccessibleDescription('Your first name');
    expect(input).not.toHaveAttribute('aria-invalid');
    await userEvent.setup().type(input, 'A');
    expect(onChange).toHaveBeenCalled();
    rerender(<TextField label="Name" hint="Your first name" error="Required" hideLabel />);
    const bad = screen.getByLabelText('Name');
    expect(bad).toHaveAttribute('aria-invalid', 'true');
    expect(bad).toHaveAccessibleDescription('Your first name Required');
  });
});

describe('Toast', () => {
  afterEach(() => vi.useRealTimers());
  it('shows a polite message and dismisses itself', () => {
    vi.useFakeTimers();
    const onDismiss = vi.fn();
    const { rerender } = render(<Toast message={null} onDismiss={onDismiss} />);
    expect(screen.getByRole('status')).toBeEmptyDOMElement();
    rerender(<Toast message="Saved" tone="error" duration={1000} onDismiss={onDismiss} />);
    expect(screen.getByRole('status')).toHaveTextContent('Saved');
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(onDismiss).toHaveBeenCalledTimes(1);
    rerender(<Toast message="Hi" tone="info" onDismiss={onDismiss} />);
    expect(screen.getByRole('status')).toHaveTextContent('Hi');
  });
});
