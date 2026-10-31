import { adjectiveEnding, type DeclensionKind } from './adjectives';
import type { Case, Gender } from './articles';
import { PRONOUNS } from './conjugation';
import { normalize } from '@/lib/answer-check';

/**
 * What a small grammar word can be: "dem" → "masculine/neuter dative". Used to explain a wrong
 * pick between forms of the same word (den vs dem, mich vs mir) without hand-writing every case.
 */

const DEFINITE: Record<string, string> = {
  der: 'masculine nominative (or feminine dative)',
  die: 'feminine or plural, nominative/accusative',
  das: 'neuter, nominative/accusative',
  den: 'masculine accusative (or dative plural)',
  dem: 'masculine/neuter dative',
  des: 'masculine/neuter genitive',
};

/** Endings of ein, kein and the possessive articles. */
const EIN_ENDINGS: Record<string, string> = {
  '': 'masculine nominative or neuter nominative/accusative',
  e: 'feminine (or plural), nominative/accusative',
  en: 'masculine accusative (or dative plural)',
  em: 'masculine/neuter dative',
  er: 'feminine dative',
  es: 'masculine/neuter genitive',
};

const PERSONAL: Record<string, string> = {
  ich: 'subject "I" (nominative)',
  mich: 'accusative of ich (me – direct object)',
  mir: 'dative of ich (to me)',
  du: 'subject "you" (nominative)',
  dich: 'accusative of du (you – direct object)',
  dir: 'dative of du (to you)',
  er: 'subject "he/it" (nominative, masculine)',
  ihn: 'accusative of er (him/it – direct object)',
  ihm: 'dative of er/es (to him/it)',
  es: 'neuter "it" (nominative/accusative)',
  sie: '"she" or "they" (nominative/accusative)',
  wir: 'subject "we" (nominative)',
  uns: 'accusative/dative of wir (us)',
  euch: 'accusative/dative of ihr (you all)',
  Sie: 'polite "you" (nominative/accusative)',
  Ihnen: 'dative of Sie (to you, polite)',
  ihnen: 'dative of sie, plural (to them)',
  sich: 'reflexive pronoun for er/sie/es, sie and Sie',
};

const EIN_STEMS = ['ein', 'kein', 'mein', 'dein', 'sein', 'unser', 'eur'];

/** Description of a grammar word, or undefined if it is not one we know. */
export function describeForm(word: string): string | undefined {
  const w = word.trim();
  if (Object.hasOwn(PERSONAL, w)) return PERSONAL[w];
  const lower = w.toLowerCase();
  // "Sie"/"Ihnen" at the start of a sentence are ambiguous – only lower-case lookups for the rest
  if (lower !== w && Object.hasOwn(PERSONAL, lower) && !['sie', 'ihnen'].includes(lower)) {
    return PERSONAL[lower];
  }
  if (Object.hasOwn(DEFINITE, lower)) return DEFINITE[lower];
  if (lower === 'euer') return EIN_ENDINGS[''];
  for (const stem of EIN_STEMS) {
    if (!lower.startsWith(stem)) continue;
    const ending = lower.slice(stem.length);
    if (Object.hasOwn(EIN_ENDINGS, ending)) return EIN_ENDINGS[ending];
  }
  return undefined;
}

/**
 * Why a picked grammar word is not the answer, when both are forms we can describe and they differ:
 * "dem" for "den" → "dem is masculine/neuter dative – here you need den: masculine accusative …".
 */
export function contrastForms(picked: string, answer: string): string | undefined {
  const p = describeForm(picked);
  const a = describeForm(answer);
  if (!p || !a || p === a) return undefined;
  return `“${picked}” is ${p}. Here you need “${answer}”: ${a}.`;
}

// ---- adjective endings ------------------------------------------------------------------------

const CASE_NAME: Record<Case, string> = { nom: 'nominative', acc: 'accusative', dat: 'dative' };
const GENDER_NAME: Record<Gender, string> = {
  m: 'masculine',
  f: 'feminine',
  n: 'neuter',
  pl: 'plural',
};
const AFTER: Record<DeclensionKind, string> = {
  definite: 'after der/die/das',
  indefinite: 'after ein/kein/mein',
  none: 'without an article',
};
const CASES: readonly Case[] = ['nom', 'acc', 'dat'];
const GENDERS: readonly Gender[] = ['m', 'f', 'n', 'pl'];

/** "masculine accusative after der/die/das → -en" */
export function adjectiveRule(kind: DeclensionKind, gender: Gender, c: Case): string {
  return `${GENDER_NAME[gender]} ${CASE_NAME[c]} ${AFTER[kind]} → -${adjectiveEnding(kind, gender, c)}`;
}

/** Why `-wrong` is not the ending here: where that ending is used instead, and what this slot needs. */
export function adjectiveEndingWhy(
  kind: DeclensionKind,
  gender: Gender,
  c: Case,
  wrong: string,
): string {
  const uses = CASES.map((cc) => {
    const gs = GENDERS.filter((g) => adjectiveEnding(kind, g, cc) === wrong);
    return gs.length ? `${gs.map((g) => GENDER_NAME[g]).join('/')} ${CASE_NAME[cc]}` : '';
  }).filter(Boolean);
  const where = uses.length
    ? `-${wrong} ${AFTER[kind]} is for ${uses.join(', ')}.`
    : `-${wrong} is never used ${AFTER[kind]}.`;
  return `${where} Here it is ${GENDER_NAME[gender]} ${CASE_NAME[c]}, so the ending is -${adjectiveEnding(kind, gender, c)}.`;
}

// ---- verb forms -------------------------------------------------------------------------------

/**
 * "sprichst" given for er/sie/es → “sprichst” is the du form – for er/sie/es it is “spricht”.
 * Undefined when the given word is not another person's form of the same verb.
 */
export function personFormWhy(
  forms: Partial<Record<string, string>>,
  person: string,
  given: string,
  persons: readonly string[] = PRONOUNS,
): string | undefined {
  const g = normalize(given);
  if (g === normalize(forms[person] ?? '')) return undefined;
  const owners = persons.filter((p) => normalize(forms[p] ?? '') === g);
  if (!owners.length) return undefined;
  return `“${given.trim()}” is the ${owners.join(' and ')} form – for ${person} it is “${forms[person]}”.`;
}
