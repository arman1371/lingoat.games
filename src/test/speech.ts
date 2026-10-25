import { vi } from 'vitest';

class Utterance {
  lang = '';
  rate = 1;
  constructor(public text: string) {}
}

/** Installs a recording speechSynthesis in jsdom; call the returned `restore` in afterEach. */
export function stubSpeech() {
  const synth = { cancel: vi.fn(), speak: vi.fn<(u: Utterance) => void>(), getVoices: () => [] };
  Object.assign(window, { speechSynthesis: synth, SpeechSynthesisUtterance: Utterance });
  return {
    synth,
    spoken: () => synth.speak.mock.calls.map(([u]) => u.text),
    restore() {
      // @ts-expect-error test cleanup
      delete window.speechSynthesis;
      // @ts-expect-error test cleanup
      delete window.SpeechSynthesisUtterance;
    },
  };
}
