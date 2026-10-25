import { useState } from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ConfirmDialog } from '@/components/ui/Dialog';
import { Mascot } from '@/components/ui/Mascot';
import { Segment } from '@/components/ui/Segment';
import { SpeakButton } from '@/components/ui/SpeakButton';
import { Toast } from '@/components/ui/Toast';
import { Toggle } from '@/components/ui/Toggle';
import { t } from '@/i18n';
import { useProgressStore } from '@/store/progressStore';
import { useSettingsStore, type MotionSetting, type ThemeSetting } from '@/store/settingsStore';

type DailyGoalOption = '20' | '50' | '100';

export function SettingsPage() {
  const s = useSettingsStore();
  const reset = useProgressStore((p) => p.reset);
  const [confirming, setConfirming] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-5">
      <header className="flex items-center gap-4">
        <Mascot mood="happy" size={72} />
        <div>
          <h1 className="text-3xl font-semibold text-ink">{t('profile.title')}</h1>
          <p className="text-muted">{t('profile.subtitle')}</p>
        </div>
      </header>
      <Card className="flex flex-col gap-5">
        <h2 className="text-xl font-semibold text-ink">{t('settings.title')}</h2>
        <Segment<DailyGoalOption>
          label={t('dailyGoal.setting')}
          value={String(s.dailyGoal) as DailyGoalOption}
          onChange={(goal) => s.set({ dailyGoal: Number(goal) })}
          options={[
            { value: '20', label: '20' },
            { value: '50', label: '50' },
            { value: '100', label: '100' },
          ]}
        />
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
        <Toggle
          label={t('settings.speakSentences')}
          checked={s.speakSentences}
          onChange={(speakSentences) => s.set({ speakSentences })}
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
      <Link to="/credits" className="block">
        <Card interactive className="flex items-center justify-between gap-3">
          <span className="font-semibold text-ink">{t('credits.link')}</span>
          <span className="text-sm font-bold text-muted">{t('credits.linkHint')}</span>
        </Card>
      </Link>
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
