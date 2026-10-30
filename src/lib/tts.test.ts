import {
  pickGermanVoice,
  pickVoice,
  setSpeechLanguage,
  speak,
  stopSpeaking,
  ttsSupported,
} from './tts';

const voice = (lang: string, name = lang) => ({ lang, name }) as SpeechSynthesisVoice;

describe('tts', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    // @ts-expect-error cleanup of stubs
    delete window.speechSynthesis;
    // @ts-expect-error cleanup of stubs
    delete window.SpeechSynthesisUtterance;
  });

  it('reports unsupported and no-ops without speechSynthesis', () => {
    expect(ttsSupported()).toBe(false);
    expect(speak('Hallo')).toBe(false);
    expect(() => stopSpeaking()).not.toThrow();
  });

  it('prefers de-DE, then any German voice', () => {
    expect(pickGermanVoice([voice('en-US'), voice('de-AT'), voice('de-DE')])?.lang).toBe('de-DE');
    expect(pickGermanVoice([voice('en-US'), voice('de-AT')])?.lang).toBe('de-AT');
    expect(pickGermanVoice([voice('en-US')])).toBeUndefined();
  });

  it('speaks with the chosen voice and rate', () => {
    const synth = {
      cancel: vi.fn(),
      speak: vi.fn(),
      getVoices: () => [voice('de-DE')],
    };
    class Utterance {
      lang = '';
      rate = 1;
      voice: unknown;
      onend: (() => void) | null = null;
      onerror: (() => void) | null = null;
      constructor(public text: string) {}
    }
    Object.assign(window, { speechSynthesis: synth, SpeechSynthesisUtterance: Utterance });
    const onEnd = vi.fn();
    expect(speak('Guten Tag', { rate: 0.7, onEnd })).toBe(true);
    expect(synth.cancel).toHaveBeenCalled();
    const u = synth.speak.mock.calls[0]![0] as Utterance;
    expect(u).toMatchObject({ text: 'Guten Tag', lang: 'de-DE', rate: 0.7 });
    expect(u.voice).toMatchObject({ lang: 'de-DE' });
    u.onend?.();
    expect(onEnd).toHaveBeenCalled();
    stopSpeaking();
    expect(synth.cancel).toHaveBeenCalledTimes(2);
  });

  it('picks a voice by exact locale, then by language', () => {
    expect(pickVoice([voice('en-US'), voice('fr-CA'), voice('fr-FR')], 'fr-FR')?.lang).toBe(
      'fr-FR',
    );
    expect(pickVoice([voice('en-US'), voice('fr-CA')], 'fr-FR')?.lang).toBe('fr-CA');
    expect(pickVoice([voice('de-DE')], 'fr-FR')).toBeUndefined();
  });

  it('speaks in the language the app is set to', () => {
    const synth = {
      cancel: vi.fn(),
      speak: vi.fn(),
      getVoices: () => [voice('de-DE'), voice('fr-FR')],
    };
    class Utterance {
      lang = '';
      voice: unknown;
      constructor(public text: string) {}
    }
    Object.assign(window, { speechSynthesis: synth, SpeechSynthesisUtterance: Utterance });
    setSpeechLanguage('fr-FR');
    try {
      speak('Bonjour');
      const u = synth.speak.mock.calls[0]![0] as Utterance;
      expect(u).toMatchObject({ text: 'Bonjour', lang: 'fr-FR' });
      expect(u.voice).toMatchObject({ lang: 'fr-FR' });
    } finally {
      setSpeechLanguage('de-DE');
    }
  });
});
