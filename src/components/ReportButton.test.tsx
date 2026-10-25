import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReportButton } from './ReportButton';
import type { TurnstileOptions } from '@/lib/turnstile';

const context = {
  activityId: 'a1-1-food-quiz',
  levelId: 'a1-1',
  unitId: 'a1-1-food',
  gameType: 'quiz',
  itemId: 'a1-1-apfel',
};

/** A Turnstile that answers at once; `hold` keeps it waiting, `fail` makes it report an error. */
function stubTurnstile(mode: 'ok' | 'hold' | 'fail' = 'ok') {
  const api = {
    render: vi.fn((_el: HTMLElement, o: TurnstileOptions) => {
      if (mode === 'ok') queueMicrotask(() => o.callback('tok-1'));
      if (mode === 'fail') queueMicrotask(() => o['error-callback']?.());
      return 'w1';
    }),
    reset: vi.fn(),
    remove: vi.fn(),
  };
  window.turnstile = api;
  return api;
}
const respond = () =>
  vi.fn(async (_url: string, _init?: RequestInit) => Response.json({ ok: true }));
const sent = (fetchMock: ReturnType<typeof respond>) =>
  JSON.parse(String(fetchMock.mock.calls[0]![1]!.body));

async function openAndPick(user: ReturnType<typeof userEvent.setup>, type = 'image') {
  await user.click(screen.getByTestId('report-open'));
  await user.selectOptions(screen.getByTestId('report-type'), type);
}

afterEach(() => {
  delete window.turnstile;
  vi.unstubAllGlobals();
  vi.resetModules();
  vi.unstubAllEnvs();
});

describe('ReportButton', () => {
  it('opens a form with the six problem types and a disabled Send', async () => {
    stubTurnstile('hold');
    const user = userEvent.setup();
    render(<ReportButton {...context} />);
    await user.click(screen.getByRole('button', { name: 'Report a problem' }));
    const select = screen.getByRole('combobox', { name: 'Problem type' });
    const options = Array.from(select.querySelectorAll('option')).map((o) => o.textContent);
    expect(options).toEqual([
      'Choose a type…',
      'Wrong image',
      'Wrong or unclear translation',
      'German mistake',
      'Audio or pronunciation',
      'Game bug',
      'Something else',
    ]);
    expect(screen.getByRole('textbox', { name: 'Note (optional)' })).toHaveAttribute(
      'maxlength',
      '200',
    );
    expect(screen.getByTestId('report-send')).toBeDisabled();
  });

  it('sends the type, the context and the Turnstile token, then says thank you', async () => {
    const api = stubTurnstile();
    const fetchMock = respond();
    vi.stubGlobal('fetch', fetchMock);
    const user = userEvent.setup();
    render(<ReportButton {...context} />);
    await openAndPick(user);
    await user.type(screen.getByTestId('report-note'), '  It is a pear.  ');
    expect(screen.getByText('17 / 200')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByTestId('report-send')).toBeEnabled());
    await user.click(screen.getByTestId('report-send'));

    expect(await screen.findByText('Thank you!')).toBeInTheDocument();
    expect(fetchMock.mock.calls[0]![0]).toBe('/api/report');
    expect(sent(fetchMock)).toEqual({
      type: 'image',
      activityId: 'a1-1-food-quiz',
      itemId: 'a1-1-apfel',
      levelId: 'a1-1',
      unitId: 'a1-1-food',
      gameType: 'quiz',
      note: 'It is a pear.',
      appVersion: expect.any(String),
      token: 'tok-1',
    });
    expect(api.render).toHaveBeenCalledOnce();
    await user.click(screen.getByTestId('report-done'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('leaves out the item and the note when there are none', async () => {
    stubTurnstile();
    const fetchMock = respond();
    vi.stubGlobal('fetch', fetchMock);
    const user = userEvent.setup();
    render(<ReportButton activityId="a1-1-x" />);
    await openAndPick(user, 'bug');
    await waitFor(() => expect(screen.getByTestId('report-send')).toBeEnabled());
    await user.click(screen.getByTestId('report-send'));
    await screen.findByText('Thank you!');
    expect(Object.keys(sent(fetchMock)).sort()).toEqual([
      'activityId',
      'appVersion',
      'token',
      'type',
    ]);
  });

  it('shows the busy message on 429 and a generic one on other failures, and asks for a new token', async () => {
    const api = stubTurnstile();
    const fetchMock = respond();
    fetchMock
      .mockResolvedValueOnce(Response.json({ error: 'rate-limited' }, { status: 429 }))
      .mockResolvedValueOnce(Response.json({ error: 'github' }, { status: 502 }))
      .mockRejectedValueOnce(new Error('offline'));
    vi.stubGlobal('fetch', fetchMock);
    const user = userEvent.setup();
    render(<ReportButton {...context} />);
    await openAndPick(user, 'german');
    const send = screen.getByTestId('report-send');
    await waitFor(() => expect(send).toBeEnabled());
    await user.click(send);
    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Too many reports right now. Please try again in a minute.',
    );
    expect(api.reset).toHaveBeenCalledWith('w1');
    // reset() clears the token; the stub does not issue a new one, so give it one like Cloudflare would
    const options = api.render.mock.calls[0]![1];
    act(() => options.callback('tok-2'));
    await waitFor(() => expect(send).toBeEnabled());
    await user.click(send);
    await waitFor(() =>
      expect(screen.getByRole('alert')).toHaveTextContent('Could not send your report.'),
    );
    act(() => options.callback('tok-3'));
    await waitFor(() => expect(send).toBeEnabled());
    await user.click(send);
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(3));
    await waitFor(() =>
      expect(screen.getByRole('alert')).toHaveTextContent('Could not send your report.'),
    );
    expect(screen.queryByText('Thank you!')).not.toBeInTheDocument();
  });

  it('keeps Send disabled until the check has produced a token, and reports a failing check', async () => {
    stubTurnstile('fail');
    const user = userEvent.setup();
    render(<ReportButton {...context} />);
    await openAndPick(user);
    expect(await screen.findByRole('alert')).toHaveTextContent('Could not send your report.');
    expect(screen.getByTestId('report-send')).toBeDisabled();
  });

  it('loads the Turnstile script on first use and reports a script that cannot load', async () => {
    const user = userEvent.setup();
    render(<ReportButton {...context} />);
    await user.click(screen.getByTestId('report-open'));
    const script = document.head.querySelector<HTMLScriptElement>('script[src*="turnstile"]');
    expect(script?.src).toContain('challenges.cloudflare.com/turnstile/v0/api.js');
    act(() => script!.onerror?.(new Event('error')));
    expect(await screen.findByRole('alert')).toHaveTextContent('Could not send your report.');
    script!.remove();
  });

  it('starts with an empty form every time it opens', async () => {
    stubTurnstile('hold');
    const user = userEvent.setup();
    render(<ReportButton {...context} />);
    await openAndPick(user, 'audio');
    await user.type(screen.getByTestId('report-note'), 'hello');
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    await user.click(screen.getByTestId('report-open'));
    expect(screen.getByTestId('report-type')).toHaveValue('');
    expect(screen.getByTestId('report-note')).toHaveValue('');
  });

  it('is not shown without a Turnstile site key', async () => {
    vi.stubEnv('VITE_TURNSTILE_SITE_KEY', '');
    vi.resetModules();
    const { ReportButton: Hidden } = await import('./ReportButton');
    const { container } = render(<Hidden {...context} />);
    expect(container).toBeEmptyDOMElement();
  });
});
