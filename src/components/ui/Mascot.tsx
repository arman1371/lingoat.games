import { MASCOT_MOODS, MASCOT_SHAPES, type MascotMood } from './mascotData';

export type { MascotMood };

interface Props {
  mood?: MascotMood;
  size?: number;
  /** Accessible name; the mascot is decorative when omitted. */
  title?: string;
  className?: string;
}

/** Goaty, the lingoat mascot, as inline SVG. */
export function Mascot({ mood = 'happy', size = 96, title, className }: Props) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
      data-mood={mood}
    >
      {title ? <title>{title}</title> : null}
      {MASCOT_MOODS[mood].map((i) => {
        const s = MASCOT_SHAPES[i]!;
        return (
          <path
            key={i}
            d={s.d}
            fill={s.fill ?? 'none'}
            fillOpacity={s.opacity}
            stroke={s.stroke}
            strokeWidth={s.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      })}
    </svg>
  );
}
