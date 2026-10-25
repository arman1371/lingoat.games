// Renders the Goaty app icons from scripts/icons/goaty.mjs into public/ (SVG, PNG, ICO).
// Run `npm run icons` after changing goaty.mjs; the generated files are committed.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';
import { ICONS } from './goaty.mjs';

const publicDir = resolve(dirname(fileURLToPath(import.meta.url)), '../../public');

/** [file, svg key, pixel size] for every raster icon. */
const PNGS = [
  ['apple-touch-icon.png', 'appleTouch', 180],
  ['icons/icon-192.png', 'any', 192],
  ['icons/icon-512.png', 'any', 512],
  ['icons/icon-maskable-512.png', 'maskable', 512],
  ['icons/icon-monochrome-512.png', 'monochrome', 512],
];
const ICO_SIZES = [16, 32, 48];

/** ICO container holding PNG images (supported by every browser since IE 11). */
function buildIco(images) {
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, png }, i) => {
    const entry = 6 + 16 * i;
    header.writeUInt8(size, entry); // width
    header.writeUInt8(size, entry + 1); // height
    header.writeUInt16LE(1, entry + 4); // colour planes
    header.writeUInt16LE(32, entry + 6); // bits per pixel
    header.writeUInt32LE(png.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += png.length;
  });
  return Buffer.concat([header, ...images.map((i) => i.png)]);
}

const browser = await chromium.launch({
  executablePath: process.env.PW_CHROMIUM_PATH || undefined,
});
try {
  const page = await browser.newPage({ deviceScaleFactor: 1 });
  const render = async (svg, size) => {
    await page.setViewportSize({ width: size, height: size });
    await page.setContent(
      `<body style="margin:0;background:transparent"><div style="width:${size}px;height:${size}px">${svg.replace('<svg ', `<svg width="${size}" height="${size}" `)}</div></body>`,
    );
    return page.screenshot({
      omitBackground: true,
      clip: { x: 0, y: 0, width: size, height: size },
    });
  };

  await mkdir(resolve(publicDir, 'icons'), { recursive: true });
  await writeFile(resolve(publicDir, 'favicon.svg'), `${ICONS.favicon}\n`);
  for (const [file, key, size] of PNGS)
    await writeFile(resolve(publicDir, file), await render(ICONS[key], size));
  const ico = [];
  for (const size of ICO_SIZES) ico.push({ size, png: await render(ICONS.favicon, size) });
  await writeFile(resolve(publicDir, 'favicon.ico'), buildIco(ico));
} finally {
  await browser.close();
}
console.log('Icons written to public/');
