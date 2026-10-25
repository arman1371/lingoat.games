/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public site key of the Cloudflare Turnstile widget; the "Report a problem" button stays hidden without it. */
  readonly VITE_TURNSTILE_SITE_KEY?: string;
}

/** Package version plus the short commit hash when the build knows it (vite.config.ts). */
declare const __APP_VERSION__: string;
