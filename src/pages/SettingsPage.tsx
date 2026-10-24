import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ConfirmDialog } from '@/components/ui/Dialog';
import { Segment } from '@/components/ui/Segment';
import { SpeakButton } from '@/components/ui/SpeakButton';
import { Toast } from '@/components/ui/Toast';
import { Toggle } from '@/components/ui/Toggle';
import { t } from '@/i18n';
import { useProgressStore } from '@/store/progressStore';
import { useSettingsStore, type MotionSetting, type ThemeSetting } from '@/store/settingsStore';

export function SettingsPage() {
  const s = useSettingsStore();
  const reset = useProgressStore((p) => p.reset);
  const [confirming, setConfirming] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-5">
      <h1 className="text-3xl font-extrabold text-ink">{t('settings.title')}</h1>
      <Card className="flex flex-col gap-5">
        <Segment<ThemeSetting>
          label={t('settings.theme')}
          value={s.theme}
          onChange={(theme) => s.set({ theme })}
          options={[
            { value: 'system', label: 'System' },
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
          ]}
        />
        <Segment<MotionSetting>
          label={t('settings.motion')}
          value={s.motion}
          onChange={(motion) => s.set({ motion })}
          options={[
            { value: 'system', label: 'System' },
            { value: 'full', label: 'Full' },
            { value: 'reduced', label: 'Reduced' },
          ]}
        />
        <Toggle
          label={t('settings.sounds')}
          checked={s.sounds}
          onChange={(sounds) => s.set({ sounds })}
        />
        <Toggle
          label={t('settings.autoSpeak')}
          checked={s.autoSpeak}
          onChange={(autoSpeak) => s.set({ autoSpeak })}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="rate" className="font-extrabold text-ink">
            {t('settings.ttsRate')}: {s.ttsRate.toFixed(1)}×
          </label>
          <div className="flex items-center gap-3">
            <input
              id="rate"
              type="range"
              min={0.5}
              max={1.2}
              step={0.1}
              value={s.ttsRate}
              onChange={(e) => s.set({ ttsRate: Number(e.target.value) })}
              className="h-11 flex-1"
            />
            <SpeakButton text="Guten Tag! Wie geht es Ihnen?" />
          </div>
        </div>
      </Card>
      <Card className="flex flex-col gap-3">
        <h2 className="font-extrabold text-ink">Your data</h2>
        <p className="text-sm text-muted">
          Progress is stored only in this browser. Clearing site data removes it.
        </p>
        <Button variant="danger" onClick={() => setConfirming(true)}>
          {t('settings.reset')}
        </Button>
      </Card>
      <ConfirmDialog
        open={confirming}
        title={t('settings.resetTitle')}
        body={t('settings.resetConfirm')}
        confirmLabel={t('settings.reset')}
        cancelLabel={t('settings.cancel')}
        tone="danger"
        onCancel={() => setConfirming(false)}
        onConfirm={() => {
          reset();
          setConfirming(false);
          setToast(t('settings.resetDone'));
        }}
      />
      <Toast message={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}

export default SettingsPage;
