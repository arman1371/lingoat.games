export type AnswerVerdict = 'correct' | 'almost' | 'wrong';

/** Lowercase, trim, collapse spaces, drop punctuation that learners often vary. */
export function normalize(input: string): string {
  return input
    .normalize('NFC')
    .toLowerCase()
    .replace(/[.,!?;:"“”„'’]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Replace umlauts/ß with their ASCII spellings so "ae" matches "ä". */
export function foldUmlauts(input: string): string {
  return input.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');
}

/** Drop the dots: "Größe" → "grosse" (typing without umlauts on an English keyboard). */
export function stripUmlauts(input: string): string {
  return input.replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss');
}

/** Drop every accent: "élève" → "eleve", "cœur" → "coeur" (typing French on an English keyboard). */
export function stripAccents(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/ß/g, 'ss');
}

const unhyphen = (input: string): string => input.replace(/-/g, ' ');

/**
 * - correct: identical after normalising case/spaces/punctuation
 * - almost: only differs by umlaut/ß or accent spelling (ae or a instead of ä, e instead of é) or by a hyphen
 * - wrong: anything else
 */
export function checkAnswer(given: string, accepted: string | readonly string[]): AnswerVerdict {
  const list = typeof accepted === 'string' ? [accepted] : accepted;
  const g = normalize(given);
  if (g === '') return 'wrong';
  if (list.some((a) => normalize(a) === g)) return 'correct';
  const gf = foldUmlauts(g);
  if (list.some((a) => foldUmlauts(normalize(a)) === gf)) return 'almost';
  const gs = stripUmlauts(g);
  if (list.some((a) => stripUmlauts(normalize(a)) === gs || foldUmlauts(normalize(a)) === gs)) {
    return 'almost';
  }
  const ga = stripAccents(g);
  if (list.some((a) => stripAccents(normalize(a)) === ga)) return 'almost';
  // dix-sept / dix sept: a missing or extra hyphen is a spelling slip, not a wrong word
  const gh = unhyphen(ga);
  if (list.some((a) => unhyphen(stripAccents(normalize(a))) === gh)) return 'almost';
  return 'wrong';
}

/** Strip spaces/dashes/slashes — used for phone numbers and house numbers. */
export function normalizeDigits(input: string): string {
  return input.replace(/[\s\-/()+.]/g, '');
}

export function checkNumeric(given: string, accepted: string): AnswerVerdict {
  const g = normalizeDigits(given);
  return g !== '' && g === normalizeDigits(accepted) ? 'correct' : 'wrong';
}

/** Parse "3,50", "3.50", "3 €", "3,5" into cents. Returns null if not a price. */
export function parsePriceToCents(input: string): number | null {
  const cleaned = input
    .replace(/€|eur(o)?/gi, '')
    .replace(/\s+/g, '')
    .replace(',', '.');
  if (!/^\d+(\.\d{1,2})?$/.test(cleaned)) return null;
  return Math.round(Number(cleaned) * 100);
}
