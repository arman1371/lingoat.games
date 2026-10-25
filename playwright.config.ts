import { defineConfig, devices } from '@playwright/test';

// In the sandbox Playwright's bundled browser revision may not match the pre-installed one.
const executablePath = process.env.PW_CHROMIUM_PATH || undefined;
const launchOptions = executablePath ? { executablePath, args: ['--no-sandbox'] } : {};

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: { baseURL: 'http://localhost:4173', trace: 'on-first-retry', launchOptions },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], launchOptions } },
    { name: 'mobile', use: { ...devices['Pixel 7'], launchOptions } },
  ],
  webServer: {
    // CI builds once in its own job and hands `dist/` to every e2e shard.
    command: process.env.CI ? 'npm run preview' : 'npm run build && npm run preview',
    url: 'http://localhost:4173',
    // Cloudflare's always-passing Turnstile test key makes the "Report a problem" button appear in the build
    env: { VITE_TURNSTILE_SITE_KEY: '1x00000000000000000000AA' },
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
