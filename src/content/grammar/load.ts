/**
 * The lessons are a separate chunk: the unit page, the lesson page and the wrong-answer hint load
 * them on demand instead of shipping every explanation with the first paint.
 */
export type GrammarModule = typeof import('./index');

let pending: Promise<GrammarModule> | undefined;

export function loadGrammar(): Promise<GrammarModule> {
  return (pending ??= import('./index'));
}
