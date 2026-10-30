import { useLanguageMeta } from '@/app/language';

interface Props {
  onInsert: (char: string) => void;
}

/** The letters an English keyboard lacks in the language being studied (ä ö ü ß, é è ç …). */
export function UmlautKeyboard({ onInsert }: Props) {
  const { specialChars } = useLanguageMeta();
  return (
    <div role="group" aria-label="Special characters" className="flex flex-wrap gap-2">
      {specialChars.map((k) => (
        <button
          key={k}
          type="button"
          // keep focus in the text field while inserting
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => onInsert(k)}
          className="press min-h-11 min-w-11 rounded-xl border-2 border-line bg-surface px-3 text-lg font-extrabold shadow-[0_3px_0_var(--border)] hover:bg-surface-2"
        >
          {k}
        </button>
      ))}
    </div>
  );
}
