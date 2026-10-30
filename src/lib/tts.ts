export interface SpeakOptions {
  rate?: number; // 0.5 – 1.5
  onEnd?: () => void;
}

export function ttsSupported(): boolean {
  return (
    typeof window !== 'undefined' &&
    'speechSynthesis' in window &&
    'SpeechSynthesisUtterance' in window
  );
}

/** Language the browser voice speaks; the app sets it from the language being studied. */
let speechLanguage = 'de-DE';

export const setSpeechLanguage = (bcp47: string): void => {
  speechLanguage = bcp47;
};

/** Exact locale first (fr-FR), then any voice of the same language (fr-CA, fr-BE). */
export function pickVoice(
  voices: readonly SpeechSynthesisVoice[],
  bcp47: string,
): SpeechSynthesisVoice | undefined {
  const base = bcp47.split('-')[0]!.toLowerCase();
  return (
    voices.find((v) => v.lang === bcp47) ??
    voices.find((v) => v.lang.toLowerCase().startsWith(base)) ??
    undefined
  );
}

export const pickGermanVoice = (voices: readonly SpeechSynthesisVoice[]) =>
  pickVoice(voices, 'de-DE');

/** Speak text in the active language with the browser's built-in voice. Returns false when speech is unavailable. */
export function speak(text: string, { rate = 0.9, onEnd }: SpeakOptions = {}): boolean {
  if (!ttsSupported()) return false;
  const synth = window.speechSynthesis;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = speechLanguage;
  utterance.rate = rate;
  const voice = pickVoice(synth.getVoices(), speechLanguage);
  if (voice) utterance.voice = voice;
  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = onEnd;
  }
  synth.speak(utterance);
  return true;
}

export function stopSpeaking(): void {
  if (ttsSupported()) window.speechSynthesis.cancel();
}
