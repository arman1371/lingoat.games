// Simplified Goaty head for app icons and favicons (512 x 512 space, mirrors the Penpot "App icon" page).
// "small" drops ears and beard so the head stays bold at 16 and 32 px; "mono" is the one-colour themed variant.

export const BRAND = '#584BCA'; // color/brand/primary (brand/600)
export const BRAND_LIGHT = '#CDC9F8'; // brand/200, tuft on the brand background

const HORNS =
  '<path d="M186 204C124 190 88 138 86 72C85 54 102 52 108 68C130 112 184 132 242 152Z" fill="#D9A441"/>' +
  '<path d="M326 204C388 190 424 138 426 72C427 54 410 52 404 68C382 112 328 132 270 152Z" fill="#D9A441"/>';
const EARS =
  '<ellipse cx="116" cy="258" rx="56" ry="28" transform="rotate(-14 116 258)" fill="#F1E4D3"/>' +
  '<ellipse cx="122" cy="260" rx="30" ry="13" transform="rotate(-14 122 260)" fill="#F6B6BF"/>' +
  '<ellipse cx="396" cy="258" rx="56" ry="28" transform="rotate(14 396 258)" fill="#F1E4D3"/>' +
  '<ellipse cx="390" cy="260" rx="30" ry="13" transform="rotate(14 390 260)" fill="#F6B6BF"/>' +
  '<path d="M240 414C244 434 250 446 256 456C262 446 268 434 272 414Z" fill="#E6D8C6"/>';
const HEAD_PATH =
  'M256 140C324 140 360 196 360 262C360 338 322 420 256 420C190 420 152 338 152 262C152 196 188 140 256 140Z';
const TUFT_PATH =
  'M226 148C218 118 234 100 256 104C278 100 294 118 286 148C272 140 240 140 226 148Z';
const FACE =
  '<ellipse cx="256" cy="356" rx="70" ry="48" fill="#F5E8D8"/>' +
  '<ellipse cx="234" cy="354" rx="11" ry="14" fill="#2E2420"/>' +
  '<ellipse cx="278" cy="354" rx="11" ry="14" fill="#2E2420"/>' +
  '<ellipse cx="208" cy="266" rx="22" ry="27" fill="#2E2420"/>' +
  '<ellipse cx="304" cy="266" rx="22" ry="27" fill="#2E2420"/>' +
  '<circle cx="215" cy="256" r="7" fill="#fff"/>' +
  '<circle cx="311" cy="256" r="7" fill="#fff"/>';

const ellipsePath = (cx, cy, rx, ry) =>
  `M${cx - rx} ${cy}a${rx} ${ry} 0 1 0 ${2 * rx} 0a${rx} ${ry} 0 1 0 ${-2 * rx} 0Z`;

const glyphs = {
  full: `${HORNS}${EARS}<path d="${HEAD_PATH}" fill="#FFFBF5"/><path d="${TUFT_PATH}" fill="${BRAND_LIGHT}"/>${FACE}`,
  small: `${HORNS}<path d="${HEAD_PATH}" fill="#FFFBF5"/><path d="${TUFT_PATH}" fill="${BRAND_LIGHT}"/>${FACE}`,
  mono:
    '<g fill="#000">' +
    '<path d="M186 204C124 190 88 138 86 72C85 54 102 52 108 68C130 112 184 132 242 152Z"/>' +
    '<path d="M326 204C388 190 424 138 426 72C427 54 410 52 404 68C382 112 328 132 270 152Z"/>' +
    `<path fill-rule="evenodd" d="${HEAD_PATH}${ellipsePath(208, 266, 22, 27)}${ellipsePath(304, 266, 22, 27)}${ellipsePath(234, 354, 11, 14)}${ellipsePath(278, 354, 11, 14)}"/>` +
    `<path d="${TUFT_PATH}"/></g>`,
};

/**
 * One icon as a standalone SVG.
 * @param {{glyph: 'full'|'small'|'mono', background: string|null, radius: number, scale: number, centerY: number}} o
 *   background null = transparent; radius 0 = full bleed; scale/centerY place the glyph (centerY is the 512-space y that lands in the middle).
 */
export function iconSvg({ glyph, background, radius, scale, centerY }) {
  const bg = background
    ? `<rect width="512" height="512"${radius ? ` rx="${radius}"` : ''} fill="${background}"/>`
    : '';
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">' +
    `${bg}<g transform="translate(256 256) scale(${scale}) translate(-256 -${centerY})">${glyphs[glyph]}</g></svg>`
  );
}

// Every icon we ship. Maskable stays inside the 80 % safe circle (radius 205 of 512); the glyph is scaled to 0.8.
export const ICONS = {
  favicon: iconSvg({ glyph: 'small', background: BRAND, radius: 112, scale: 1.2, centerY: 241 }),
  appleTouch: iconSvg({ glyph: 'full', background: BRAND, radius: 0, scale: 0.95, centerY: 261 }),
  any: iconSvg({ glyph: 'full', background: BRAND, radius: 112, scale: 0.95, centerY: 261 }),
  maskable: iconSvg({ glyph: 'small', background: BRAND, radius: 0, scale: 0.8, centerY: 241 }),
  monochrome: iconSvg({ glyph: 'mono', background: null, radius: 0, scale: 0.9, centerY: 241 }),
};
