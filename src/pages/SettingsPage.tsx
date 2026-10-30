import { useRef, useState } from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ChoiceCards } from '@/components/ui/ChoiceCards';
import { ConfirmDialog, Dialog } from '@/components/ui/Dialog';
import { Icon } from '@/components/ui/Icon';
import { Mascot } from '@/components/ui/Mascot';
import { Segment } from '@/components/ui/Segment';
import { SpeakButton } from '@/components/ui/SpeakButton';
import { Toast } from '@/components/ui/Toast';
import { Toggle } from '@/components/ui/Toggle';
import { t } from '@/i18n';
import {
  applyImportAll,
  buildExport,
  exportFileName,
  parseImport,
  summarize,
  TRANSFER_MAX_BYTES,
  type ImportErrorCode,
  type ImportMode,
  type TransferFile,
} from '@/lib/progressTransfer';
import { useLanguage, useProgress } from '@/app/language';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { LANGUAGE_IDS, LANGUAGES, type LanguageId } from '@/content/languages';
import { progressStores, type ProgressData } from '@/store/progressStore';
import {
  DEFAULT_SETTINGS,
  useSettingsStore,
  type MotionSetting,
  type SettingsData,
  type ThemeSetting,
} from '@/store/settingsStore';

const GITHUB_REPO_URL = 'https://github.com/arman1371/lingoat.games';

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

const allProgress = () =>
  Object.fromEntries(
    LANGUAGE_IDS.map((id) => [id, pickProgress(progressStores[id].getState())]),
  ) as Record<LanguageId, ProgressData>;

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
  const language = useLanguage();
  const languageMeta = LANGUAGES[language];
  const reset = useProgress((p) => p.reset);
  const [confirming, setConfirming] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const picker = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState<TransferFile | null>(null);
  const [importMode, setImportMode] = useState<ImportMode>('merge');
  const [importError, setImportError] = useState<ImportErrorCode | null>(null);

  const exportData = () => {
    download(
      buildExport(pickSettings(useSettingsStore.getState()), allProgress(), {
        appVersion: __APP_VERSION__,
      }),
    );
    setToast(t('data.exported'));
  };

  const chooseFile = async (file: File | undefined) => {
    if (!file) return;
    const text = file.size > TRANSFER_MAX_BYTES ? '' : await file.text();
    const result = parseImport(text, file.size);
    if (result.ok) {
      setImportMode('merge');
      setPending(result.file);
    } else setImportError(result.error);
  };

  const applyImportNow = () => {
    if (!pending) return;
    const imported = applyImportAll(allProgress(), pending.progress, importMode);
    for (const id of LANGUAGE_IDS) {
      const next = imported[id];
      if (next) progressStores[id].setState(next);
    }
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
        <LanguageSwitcher variant="row" />
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
          label={t('settings.autoSpeak', { language: languageMeta.name })}
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
            <SpeakButton text={languageMeta.sampleSentence} />
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
        <p className="text-sm text-muted">{t('data.introLanguages')}</p>
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
          {t('settings.reset', { language: languageMeta.name })}
        </Button>
      </Card>
      <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="block">
        <Card interactive className="flex items-center gap-3">
          <Icon name="star" className="shrink-0 text-primary" />
          <span className="flex min-w-0 flex-1 flex-col">
            <span className="font-semibold text-ink">{t('github.link')}</span>
            <span className="text-sm text-muted">{t('github.linkHint')}</span>
          </span>
          <Icon name="external-link" size={20} className="shrink-0 text-muted" />
          <span className="sr-only">{t('github.opens')}</span>
        </Card>
      </a>
      <ConfirmDialog
        open={confirming}
        title={t('settings.resetTitle', { language: languageMeta.name })}
        body={t('settings.resetConfirm', { language: languageMeta.name })}
        confirmLabel={t('settings.reset', { language: languageMeta.name })}
        cancelLabel={t('settings.cancel')}
        tone="danger"
        onCancel={() => setConfirming(false)}
        onConfirm={() => {
          reset();
          setConfirming(false);
          setToast(t('settings.resetDone'));
        }}
      />
      <Dialog
        open={pending !== null}
        onClose={() => setPending(null)}
        title={t('data.confirmTitle')}
        actions={
          <>
            <Button variant="secondary" onClick={() => setPending(null)}>
              {t('settings.cancel')}
            </Button>
            <Button
              variant={importMode === 'replace' ? 'danger' : 'primary'}
              onClick={applyImportNow}
            >
              {importMode === 'replace' ? t('data.confirmReplace') : t('data.confirm')}
            </Button>
          </>
        }
      >
        {pending ? (
          <div className="flex flex-col gap-4">
            <p>
              {t('data.confirmBody', {
                date: new Date(pending.exportedAt).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                }),
              })}
            </p>
            <ul className="flex flex-col gap-1 font-semibold text-ink">
              {summarize(pending).languages.map((l) => (
                <li key={l.language}>
                  {t('data.languageLine', {
                    language: LANGUAGES[l.language].name,
                    xp: l.xp.toLocaleString('en-US'),
                    games: l.games,
                  })}
                </li>
              ))}
            </ul>
            <ChoiceCards<ImportMode>
              label={t('data.modeLabel')}
              value={importMode}
              onChange={setImportMode}
              options={[
                { value: 'merge', title: t('data.mergeTitle'), description: t('data.mergeHint') },
                {
                  value: 'replace',
                  title: t('data.replaceTitle'),
                  description: t('data.replaceHint'),
                },
              ]}
            />
          </div>
        ) : null}
      </Dialog>
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
