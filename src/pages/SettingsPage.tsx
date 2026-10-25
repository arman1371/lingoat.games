import { useRef, useState } from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ConfirmDialog, Dialog } from '@/components/ui/Dialog';
import { Icon } from '@/components/ui/Icon';
import { Mascot } from '@/components/ui/Mascot';
import { Segment } from '@/components/ui/Segment';
import { SpeakButton } from '@/components/ui/SpeakButton';
import { Toast } from '@/components/ui/Toast';
import { Toggle } from '@/components/ui/Toggle';
import { t } from '@/i18n';
import {
  buildExport,
  exportFileName,
  mergeProgress,
  parseImport,
  summarize,
  TRANSFER_MAX_BYTES,
  type ImportErrorCode,
  type TransferFile,
} from '@/lib/progressTransfer';
import { useProgressStore, type ProgressData } from '@/store/progressStore';
import {
  DEFAULT_SETTINGS,
  useSettingsStore,
  type MotionSetting,
  type SettingsData,
  type ThemeSetting,
} from '@/store/settingsStore';

type DailyGoalOption = '20' | '50' | '100';

const pickSettings = (s: SettingsData): SettingsData =>
  Object.fromEntries(
    Object.keys(DEFAULT_SETTINGS).map((key) => [key, s[key as keyof SettingsData]]),
  ) as unknown as SettingsData;

const pickProgress = (p: ProgressData): ProgressData => ({
  xp: p.xp,
  streak: p.streak,
  activities: p.activities,
  mistakes: p.mistakes,
  lastActivityId: p.lastActivityId,
  daily: p.daily,
});

function download(file: TransferFile) {
  const url = URL.createObjectURL(
    new Blob([JSON.stringify(file, null, 2)], { type: 'application/json' }),
  );
  const link = document.createElement('a');
  link.href = url;
  link.download = exportFileName(new Date(file.exportedAt));
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export function SettingsPage() {
  const s = useSettingsStore();
  const reset = useProgressStore((p) => p.reset);
  const [confirming, setConfirming] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const picker = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState<TransferFile | null>(null);
  const [importError, setImportError] = useState<ImportErrorCode | null>(null);

  const exportData = () => {
    download(
      buildExport(
        pickSettings(useSettingsStore.getState()),
        pickProgress(useProgressStore.getState()),
        {
          appVersion: __APP_VERSION__,
        },
      ),
    );
    setToast(t('data.exported'));
  };

  const chooseFile = async (file: File | undefined) => {
    if (!file) return;
    const text = file.size > TRANSFER_MAX_BYTES ? '' : await file.text();
    const result = parseImport(text, file.size);
    if (result.ok) setPending(result.file);
    else setImportError(result.error);
  };

  const applyImport = () => {
    if (!pending) return;
    useProgressStore.setState(
      mergeProgress(pickProgress(useProgressStore.getState()), pending.progress),
    );
    s.set(pending.settings);
    setPending(null);
    setToast(t('data.imported'));
  };

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
        <h2 className="font-extrabold text-ink">{t('data.title')}</h2>
        <p className="text-sm text-muted">{t('data.intro')}</p>
        <Button variant="secondary" icon={<Icon name="download" />} onClick={exportData}>
          {t('data.export')}
        </Button>
        <Button
          variant="secondary"
          icon={<Icon name="upload" />}
          onClick={() => picker.current?.click()}
        >
          {t('data.import')}
        </Button>
        <input
          ref={picker}
          type="file"
          accept="application/json,.json"
          hidden
          data-testid="import-file"
          onChange={(e) => {
            void chooseFile(e.target.files?.[0]);
            e.target.value = '';
          }}
        />
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
      <ConfirmDialog
        open={pending !== null}
        title={t('data.confirmTitle')}
        body={
          pending
            ? t('data.confirmBody', {
                date: new Date(summarize(pending).exportedAt).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                }),
                xp: summarize(pending).xp.toLocaleString('en-US'),
                games: summarize(pending).games,
              })
            : null
        }
        confirmLabel={t('data.confirm')}
        cancelLabel={t('settings.cancel')}
        onCancel={() => setPending(null)}
        onConfirm={applyImport}
      />
      <Dialog
        open={importError !== null}
        onClose={() => setImportError(null)}
        title={t('data.errorTitle')}
        actions={
          <>
            <Button variant="secondary" onClick={() => setImportError(null)}>
              {t('data.errorClose')}
            </Button>
            <Button
              onClick={() => {
                setImportError(null);
                picker.current?.click();
              }}
            >
              {t('data.errorRetry')}
            </Button>
          </>
        }
      >
        {importError ? t(`data.errors.${importError}`) : null}
      </Dialog>
      <Toast message={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}

export default SettingsPage;
