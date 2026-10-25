import { useCallback, useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { Dialog } from '@/components/ui/Dialog';
import { Icon } from '@/components/ui/Icon';
import { IconButton } from '@/components/ui/IconButton';
import { Mascot } from '@/components/ui/Mascot';
import { t } from '@/i18n';
import {
  NOTE_MAX,
  REPORT_PATH,
  REPORT_TYPES,
  type ReportPayload,
  type ReportType,
} from '@/lib/report';
import { TURNSTILE_SITE_KEY, loadTurnstile } from '@/lib/turnstile';

/** Where the player is, as far as the play page knows; the item comes from the game on screen. */
export interface ReportContext {
  activityId: string;
  levelId?: string;
  unitId?: string;
  gameType?: string;
  itemId?: string;
}

/** Flag button for the play header; opens the report dialog. Hidden until a Turnstile site key is configured. */
export function ReportButton(context: ReportContext) {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(0);
  if (!TURNSTILE_SITE_KEY) return null;
  return (
    <>
      <IconButton
        icon="flag"
        aria-label={t('report.open')}
        aria-haspopup="dialog"
        data-testid="report-open"
        onClick={() => {
          setSession((n) => n + 1); // a fresh form every time
          setOpen(true);
        }}
      />
      <ReportDialog key={session} open={open} onClose={() => setOpen(false)} context={context} />
    </>
  );
}

type Status = 'form' | 'sending' | 'sent';

/** The invisible Turnstile check: a token as soon as Cloudflare is satisfied, `failed` when it cannot run. */
function useTurnstileToken(active: boolean) {
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!active || !container.current) return;
    const element = container.current;
    let cancelled = false;
    loadTurnstile()
      .then((api) => {
        if (cancelled) return;
        widget.current = api.render(element, {
          sitekey: TURNSTILE_SITE_KEY,
          appearance: 'interaction-only',
          callback: setToken,
          'expired-callback': () => setToken(null),
          'error-callback': () => setFailed(true),
        });
      })
      .catch(() => !cancelled && setFailed(true));
    return () => {
      cancelled = true;
      if (widget.current) window.turnstile?.remove(widget.current);
      widget.current = null;
    };
  }, [active]);

  /** A token works once: ask for a new one after every attempt. */
  const renew = useCallback(() => {
    setToken(null);
    if (widget.current) window.turnstile?.reset(widget.current);
  }, []);
  return { container, token, failed, renew };
}

function ReportDialog({
  open,
  onClose,
  context,
}: {
  open: boolean;
  onClose: () => void;
  context: ReportContext;
}) {
  const [type, setType] = useState<ReportType | ''>('');
  const [note, setNote] = useState('');
  const [status, setStatus] = useState<Status>('form');
  const [error, setError] = useState<string | null>(null);
  const { container, token, failed, renew } = useTurnstileToken(open);
  const ids = { type: useId(), note: useId(), hint: useId(), error: useId() };

  const submit = async (event?: FormEvent) => {
    event?.preventDefault();
    if (!type || !token || status !== 'form') return;
    setStatus('sending');
    setError(null);
    const report: ReportPayload & { token: string } = {
      type,
      activityId: context.activityId,
      ...(context.itemId && { itemId: context.itemId }),
      ...(context.levelId && { levelId: context.levelId }),
      ...(context.unitId && { unitId: context.unitId }),
      ...(context.gameType && { gameType: context.gameType }),
      ...(note.trim() && { note: note.trim() }),
      appVersion: __APP_VERSION__,
      token,
    };
    try {
      const res = await fetch(REPORT_PATH, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(report),
      });
      if (res.ok) return setStatus('sent');
      setError(res.status === 429 ? t('report.errorBusy') : t('report.error'));
    } catch {
      setError(t('report.error'));
    }
    renew();
    setStatus('form');
  };

  if (status === 'sent')
    return (
      <Dialog
        open={open}
        onClose={onClose}
        title={t('report.sentTitle')}
        hero={<Mascot mood="happy" size={96} />}
        actions={
          <Button size="lg" onClick={onClose} data-testid="report-done">
            {t('report.backToGame')}
          </Button>
        }
      >
        <p className="text-center">{t('report.sentBody')}</p>
      </Dialog>
    );

  const message = error ?? (failed ? t('report.error') : null);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={t('report.title')}
      actions={
        <>
          <Button variant="ghost" onClick={onClose}>
            {t('report.cancel')}
          </Button>
          <Button
            size="lg"
            type="submit"
            form={`${ids.type}-form`}
            disabled={!type || !token || status === 'sending'}
            data-testid="report-send"
          >
            {status === 'sending' ? t('report.sending') : t('report.send')}
          </Button>
        </>
      }
    >
      <form id={`${ids.type}-form`} className="flex flex-col gap-4" onSubmit={submit}>
        <p>{t('report.intro')}</p>
        <div className="flex flex-col gap-2 text-ink">
          <label htmlFor={ids.type} className="text-sm font-bold">
            {t('report.typeLabel')}
          </label>
          <div className="relative">
            <select
              id={ids.type}
              value={type}
              onChange={(e) => setType(e.target.value as ReportType | '')}
              data-testid="report-type"
              className="min-h-12 w-full appearance-none rounded-xl border-2 border-line-strong bg-surface pr-11 pl-4 text-base text-ink"
            >
              <option value="">{t('report.typePlaceholder')}</option>
              {REPORT_TYPES.map((id) => (
                <option key={id} value={id}>
                  {t(`report.types.${id}`)}
                </option>
              ))}
            </select>
            <Icon
              name="chevron-down"
              size={20}
              className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-muted"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-ink">
          <div className="flex items-baseline justify-between gap-3">
            <label htmlFor={ids.note} className="text-sm font-bold">
              {t('report.noteLabel')}
            </label>
            <span className="text-xs font-medium text-muted" aria-hidden="true">
              {t('report.noteCount', { n: note.length, max: NOTE_MAX })}
            </span>
          </div>
          <textarea
            id={ids.note}
            value={note}
            maxLength={NOTE_MAX}
            rows={3}
            placeholder={t('report.notePlaceholder')}
            aria-describedby={ids.hint}
            onChange={(e) => setNote(e.target.value)}
            data-testid="report-note"
            className="min-h-24 w-full resize-none rounded-xl border-2 border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-muted"
          />
          <p id={ids.hint} className="text-xs font-medium text-muted">
            {t('report.privacy')}
          </p>
        </div>
        <div ref={container} />
        <p
          id={ids.error}
          role="alert"
          className={message ? 'flex items-start gap-2 text-sm font-bold text-danger' : 'sr-only'}
        >
          {message ? (
            <>
              <Icon name="warning" size={20} className="shrink-0" />
              <span>{message}</span>
            </>
          ) : null}
        </p>
      </form>
    </Dialog>
  );
}
