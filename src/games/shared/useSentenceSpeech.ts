import { useCallback, useEffect } from 'react';
import { speak, ttsSupported } from '@/lib/tts';
import { useSettingsStore } from '@/store/settingsStore';

/**
 * Speech for games that are not listening games, behind the "Read sentences aloud" setting.
 * Each call replaces whatever is still being spoken (`speak` cancels the previous utterance).
 */
export function useSentenceSpeech() {
  const enabled = useSettingsStore((s) => s.speakSentences);
  const rate = useSettingsStore((s) => s.ttsRate);
  return useCallback(
    (text: string | undefined) => {
      if (!enabled || !text || !ttsSupported()) return;
      speak(text, { rate });
    },
    [enabled, rate],
  );
}

/** Reads `text` aloud whenever it changes. Revealing an answer does not change it, so nothing repeats. */
export function useSpeakSentence(text: string | undefined) {
  const say = useSentenceSpeech();
  useEffect(() => say(text), [text, say]);
}
