/// <reference types="vitest/config" />
import { createReadStream, existsSync } from 'node:fs';
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

export default defineConfig({
  plugins: [
    localWordPhotos(),
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'lingoat',
        short_name: 'lingoat',
        description: 'Play your way through German, level by level.',
        theme_color: '#1d4ed8',
        background_color: '#f8fafc',
        display: 'standalone',
        start_url: '/',
        icons: [{ src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }],
      },
      workbox: {
        navigateFallback: '/index.html',
        globPatterns: ['**/*.{js,css,html,svg,woff2}'],
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
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.test.{ts,tsx}', 'src/test/**', 'src/main.tsx', 'src/vite-env.d.ts'],
      thresholds: { lines: 80, functions: 80, statements: 80, branches: 70 },
    },
  },
});
