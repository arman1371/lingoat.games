import { useEffect } from 'react';
import { speak, ttsSupported } from '@/lib/tts';
import { useSettingsStore } from '@/store/settingsStore';

/** Speaks `text` whenever it changes, if the player enabled "Read aloud automatically". */
export function useAutoSpeak(text: string | undefined, enabled = true) {
  const autoSpeak = useSettingsStore((s) => s.autoSpeak);
  const rate = useSettingsStore((s) => s.ttsRate);
  useEffect(() => {
    if (!text || !enabled || !autoSpeak || !ttsSupported()) return;
    speak(text, { rate });
  }, [text, enabled, autoSpeak, rate]);
}
