/**
 * What to read aloud for a gap-fill sentence: the text around the blank, never the missing word.
 * The parts are joined with a comma so the voice pauses where the gap is; a part without a letter
 * (e.g. the trailing "." of "Ich trinke ___.") is dropped because voices read it out or glitch.
 */
export function spokenWithoutGap(before: string, after: string): string {
  return [before, after]
    .map((part) => part.trim())
    .filter((part) => /\p{L}/u.test(part))
    .join(', ');
}
