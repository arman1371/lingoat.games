/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public site key of the Cloudflare Turnstile widget; the "Report a problem" button stays hidden without it. */
  readonly VITE_TURNSTILE_SITE_KEY?: string;
  /** Operator of this deployment, shown in the Impressum and privacy policy (docs/legal.md). */
  readonly VITE_OPERATOR_NAME?: string;
  readonly VITE_OPERATOR_STREET?: string;
  readonly VITE_OPERATOR_CITY?: string;
  readonly VITE_OPERATOR_EMAIL?: string;
}

/** Package version plus the short commit hash when the build knows it (vite.config.ts). */
declare const __APP_VERSION__: string;
