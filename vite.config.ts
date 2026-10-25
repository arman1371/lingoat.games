/// <reference types="vitest/config" />
import { createReadStream, existsSync, readFileSync } from 'node:fs';
import { fileURLToPath, URL } from 'node:url';
import type { Connect, Plugin } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

/**
 * Local word photos: `npm run images:fetch` writes them to `.image-cache/images`; serve them at `/img/` so the
 * dev and preview servers behave like production (where the Worker serves them from R2, see docs/images.md).
 */
const localWordPhotos = (): Plugin => {
  const dir = fileURLToPath(new URL('./.image-cache/images/', import.meta.url));
  const serve: Connect.NextHandleFunction = (req, res, next) => {
    const name = /^\/img\/([a-z0-9-]+\.webp)$/.exec(req.url ?? '')?.[1];
    if (!name || !existsSync(dir + name)) return next();
    res.setHeader('Content-Type', 'image/webp');
    createReadStream(dir + name).pipe(res);
  };
  return {
    name: 'local-word-photos',
    configureServer: (server) => void server.middlewares.use(serve),
    configurePreviewServer: (server) => void server.middlewares.use(serve),
  };
};

/** Shown in problem reports: the package version, plus the commit when the build environment names it. */
const appVersion = (): string => {
  const { version } = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));
  const sha =
    process.env.WORKERS_CI_COMMIT_SHA ?? process.env.CF_PAGES_COMMIT_SHA ?? process.env.GITHUB_SHA;
  return sha ? `${version}+${sha.slice(0, 7)}` : version;
};

export default defineConfig({
  define: { __APP_VERSION__: JSON.stringify(appVersion()) },
  plugins: [
    localWordPhotos(),
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Lingoat',
        short_name: 'Lingoat',
        description: 'Play your way through German, level by level.',
        theme_color: '#584bca',
        background_color: '#fbfaf8',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          {
            src: 'icons/icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'icons/icon-monochrome-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'monochrome',
          },
        ],
      },
      workbox: {
        navigateFallback: '/index.html',
        globPatterns: ['**/*.{js,css,html,svg,woff2,png,ico}'],
        // word photos are fetched on demand and then kept for offline play
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/img/'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'word-photos',
              expiration: { maxEntries: 600, maxAgeSeconds: 60 * 60 * 24 * 90 },
              cacheableResponse: { statuses: [200] },
            },
          },
        ],
      },
    }),
  ],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}', 'scripts/**/*.test.ts', 'worker/**/*.test.ts'],
    css: false,
    // the real site key is a build setting; this is Cloudflare's always-passing test key
    env: { VITE_TURNSTILE_SITE_KEY: '1x00000000000000000000AA' },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.test.{ts,tsx}', 'src/test/**', 'src/main.tsx', 'src/vite-env.d.ts'],
      thresholds: { lines: 80, functions: 80, statements: 80, branches: 70 },
    },
  },
});
