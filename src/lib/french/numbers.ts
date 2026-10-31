const ONES = [
  'zéro',
  'un',
  'deux',
  'trois',
  'quatre',
  'cinq',
  'six',
  'sept',
  'huit',
  'neuf',
  'dix',
  'onze',
  'douze',
  'treize',
  'quatorze',
  'quinze',
  'seize',
  'dix-sept',
  'dix-huit',
  'dix-neuf',
];
const TENS = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante'];

/**
 * 0–99. France counts 70 as "sixty-ten" and 80 as "four-twenty": soixante-dix, quatre-vingts,
 * quatre-vingt-dix. `end` is true when nothing follows, because only then quatre-vingts keeps its -s.
 */
function below100(n: number, end: boolean): string {
  if (n < 20) return ONES[n] as string;
  const t = Math.floor(n / 10);
  const o = n % 10;
  if (t === 7 || t === 9) {
    const base = t === 7 ? 'soixante' : 'quatre-vingt';
    const teen = 10 + o;
    if (t === 7) return o === 1 ? 'soixante et onze' : `${base}-${ONES[teen]}`;
    return `${base}-${ONES[teen]}`;
  }
  if (t === 8)
    return o === 0 ? (end ? 'quatre-vingts' : 'quatre-vingt') : `quatre-vingt-${ONES[o]}`;
  const ten = TENS[t] as string;
  if (o === 0) return ten;
  return o === 1 ? `${ten} et un` : `${ten}-${ONES[o]}`;
}

function below1000(n: number, end: boolean): string {
  if (n < 100) return below100(n, end);
  const h = Math.floor(n / 100);
  const rest = n % 100;
  const head = h === 1 ? 'cent' : `${ONES[h]} cent`;
  if (rest === 0) return end && h > 1 ? `${head}s` : head;
  return `${head} ${below100(rest, end)}`;
}

/** Cardinal numbers 0–999 999 in the French of France, e.g. 21 → "vingt et un", 80 → "quatre-vingts". */
export function numberToFrench(n: number): string {
  if (!Number.isInteger(n) || n < 0 || n > 999_999)
    throw new RangeError(`Unsupported number: ${n}`);
  if (n < 1000) return below1000(n, true);
  const thousands = Math.floor(n / 1000);
  const rest = n % 1000;
  const head = thousands === 1 ? 'mille' : `${below1000(thousands, false)} mille`;
  return rest === 0 ? head : `${head} ${below1000(rest, true)}`;
}

/**
 * A phone number as it is read in France: in pairs, "06 12 34 56 78" → "zéro six, douze, trente-quatre,
 * cinquante-six, soixante-dix-huit". A leading zero of a pair is read as "zéro".
 */
export function digitsToFrench(digits: string): string {
  const d = digits.replace(/\D/g, '');
  const pairs = d.match(/\d{1,2}/g) ?? [];
  return pairs
    .map((p) =>
      p.startsWith('0') ? [...p].map((c) => ONES[Number(c)]).join(' ') : numberToFrench(Number(p)),
    )
    .join(', ');
}

/** Letter names in French, used by the spelling games. */
export const LETTER_NAMES_FR: Record<string, string> = {
  a: 'a',
  b: 'bé',
  c: 'cé',
  d: 'dé',
  e: 'e',
  f: 'effe',
  g: 'gé',
  h: 'ache',
  i: 'i',
  j: 'ji',
  k: 'ka',
  l: 'elle',
  m: 'emme',
  n: 'enne',
  o: 'o',
  p: 'pé',
  q: 'ku',
  r: 'erre',
  s: 'esse',
  t: 'té',
  u: 'u',
  v: 'vé',
  w: 'double vé',
  x: 'iks',
  y: 'i grec',
  z: 'zède',
  é: 'e accent aigu',
  è: 'e accent grave',
  ê: 'e accent circonflexe',
  à: 'a accent grave',
  ç: 'c cédille',
  '-': 'trait d’union',
};

/** "Léa" → "elle, e accent aigu, a": the name read out letter by letter. */
export function spellOutFr(word: string): string {
  return [...word.toLowerCase()].map((c) => LETTER_NAMES_FR[c] ?? c).join(', ');
}
