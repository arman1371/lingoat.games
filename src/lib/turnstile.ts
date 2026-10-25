/** Cloudflare Turnstile (the bot check behind "Report a problem"): loads its script on first use. */

/** Public by design. Set `VITE_TURNSTILE_SITE_KEY` at build time; without it the report button stays hidden. */
export const TURNSTILE_SITE_KEY: string = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? '';

export interface TurnstileOptions {
  sitekey: string;
  /** `interaction-only` stays invisible unless Cloudflare needs the visitor to do something. */
  appearance?: 'always' | 'execute' | 'interaction-only';
  callback: (token: string) => void;
  'expired-callback'?: () => void;
  'error-callback'?: () => void;
}
export interface TurnstileApi {
  render(container: HTMLElement, options: TurnstileOptions): string;
  reset(widgetId: string): void;
  remove(widgetId: string): void;
}
declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
let loading: Promise<TurnstileApi> | undefined;

export function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  loading ??= new Promise<TurnstileApi>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = SCRIPT;
    script.async = true;
    script.onload = () =>
      window.turnstile ? resolve(window.turnstile) : reject(new Error('Turnstile did not start'));
    script.onerror = () => reject(new Error('Turnstile could not be loaded'));
    document.head.append(script);
  }).catch((error: unknown) => {
    loading = undefined; // the next attempt may succeed (offline, blocked, ...)
    throw error;
  });
  return loading;
}
