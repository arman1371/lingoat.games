import { useEffect, useId, useRef, useState } from 'react';
import { goToLanguage, useLanguage } from '@/app/language';
import { Button } from '@/components/ui/Button';
import { ChoiceCards } from '@/components/ui/ChoiceCards';
import { Icon } from '@/components/ui/Icon';
import { LANGUAGE_IDS, LANGUAGES, type LanguageId } from '@/content/languages';
import { levelOfActivityId } from '@/content/levels';
import { t } from '@/i18n';
import { getProgressStore } from '@/store/progressStore';

/** "A1.2 · 1,240 XP", or "Not started" for a language that has no progress yet. */
function LanguageStatus({ language }: { language: LanguageId }) {
  const store = getProgressStore(language);
  const xp = store((s) => s.xp);
  const lastActivityId = store((s) => s.lastActivityId);
  const started = xp > 0 || lastActivityId !== null;
  if (!started) return <>{t('language.notStarted')}</>;
  const level = lastActivityId ? levelOfActivityId(lastActivityId) : undefined;
  return (
    <>
      {t('language.status', {
        level: level?.title ?? '–',
        xp: xp.toLocaleString('en-US'),
      })}
    </>
  );
}

interface SheetProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Bottom sheet on a phone, a popover above the sidebar chip on a desktop. Native `<dialog>`: focus is
 * trapped, Escape closes it and focus returns to the control that opened it.
 */
export function LanguageSheet({ open, onClose }: SheetProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const current = useLanguage();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClose={onClose}
      data-testid="language-sheet"
      className="mx-auto mb-0 mt-auto w-full max-w-lg rounded-b-none rounded-t-3xl border-2 border-b-0 border-line bg-surface p-0 text-ink shadow-(--shadow-4) backdrop:bg-overlay md:mb-4 md:ml-4 md:mr-auto md:w-80 md:rounded-3xl md:border-b-2"
    >
      {open ? (
        <div className="flex flex-col gap-4 p-4 pb-6">
          <h2 id={titleId} className="font-display text-2xl font-semibold">
            {t('language.sheetTitle')}
          </h2>
          <ChoiceCards<LanguageId>
            label={t('language.label')}
            value={current}
            onChange={(language) => {
              if (language === current) onClose();
              else goToLanguage(language);
            }}
            options={LANGUAGE_IDS.map((id) => ({
              value: id,
              title: (
                <>
                  <span aria-hidden="true">{LANGUAGES[id].flag}</span> {LANGUAGES[id].name}
                </>
              ),
              description: <LanguageStatus language={id} />,
            }))}
          />
          <p className="text-sm text-muted">{t('language.note')}</p>
          <Button variant="secondary" block onClick={onClose}>
            {t('language.close')}
          </Button>
        </div>
      ) : null}
    </dialog>
  );
}

type Variant = 'chip' | 'sidebar' | 'row';

const TRIGGER: Record<Variant, string> = {
  chip: 'inline-flex min-h-11 items-center gap-2 self-start rounded-full border-2 border-line bg-surface px-4 text-sm font-bold text-ink hover:bg-surface-2',
  sidebar:
    'flex min-h-12 w-full items-center gap-3 rounded-xl border-2 border-line bg-surface px-4 text-base font-bold text-ink hover:bg-surface-2',
  row: 'flex min-h-14 w-full items-center gap-3 rounded-2xl border-2 border-line bg-surface px-4 text-left font-semibold text-ink hover:bg-surface-2',
};

/** The control that shows the language being studied and opens the language sheet. */
export function LanguageSwitcher({ variant }: { variant: Variant }) {
  const [open, setOpen] = useState(false);
  const language = LANGUAGES[useLanguage()];
  return (
    <>
      <button
        type="button"
        data-testid={`language-${variant}`}
        aria-label={t('language.change', { language: language.name })}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className={TRIGGER[variant]}
      >
        <span aria-hidden="true">{language.flag}</span>
        {variant === 'row' ? (
          <span className="flex min-w-0 flex-1 flex-col text-left">
            <span className="text-sm font-bold text-muted">{t('language.label')}</span>
            <span>{language.name}</span>
          </span>
        ) : (
          <span className={variant === 'sidebar' ? 'flex-1 text-left' : ''}>{language.name}</span>
        )}
        <Icon name="chevron-down" size={16} aria-hidden="true" />
      </button>
      <LanguageSheet open={open} onClose={() => setOpen(false)} />
    </>
  );
}
