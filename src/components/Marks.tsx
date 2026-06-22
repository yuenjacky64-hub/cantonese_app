import React from 'react';

/**
 * Custom marks — replace the generic emoji iconography (🔥, 🏆, ✅, ❌)
 * with simple geometric SVGs styled in the app's neon palette.
 *
 * Why: emoji renders differently per OS, has no relationship to the
 * brand, and is the visual shorthand of every learning app. A small
 * custom mark set is a cheap way to look intentional.
 */

interface MarkProps {
  size?: number;
  className?: string;
}

const baseProps = (size: number, label: string) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  role: 'img',
  'aria-label': label,
  style: { display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 },
});

/** A streak mark — vertical neon-stripe stack. Replaces 🔥. */
export const StreakMark: React.FC<MarkProps> = ({ size = 18, className }) => (
  <svg {...baseProps(size, 'streak')} className={className}>
    <rect x="3" y="10" width="3" height="11" rx="1" fill="var(--sodium)" />
    <rect x="9" y="6" width="3" height="15" rx="1" fill="var(--neon-hot)" />
    <rect x="15" y="2" width="3" height="19" rx="1" fill="var(--neon-ice)" />
  </svg>
);

/** Trophy: a single horizontal hairline + an upward neon arc. Replaces 🏆. */
export const TrophyMark: React.FC<MarkProps> = ({ size = 28, className }) => (
  <svg {...baseProps(size, 'trophy')} className={className}>
    <path
      d="M5 4h14v3a7 7 0 0 1-14 0V4Z"
      stroke="var(--neon-hot)"
      strokeWidth="2"
      fill="none"
    />
    <path d="M12 11v5" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 20h10" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/** Affirmative check, jade-colored. Replaces ✅. */
export const CheckMark: React.FC<MarkProps> = ({ size = 18, className }) => (
  <svg {...baseProps(size, 'correct')} className={className}>
    <circle cx="12" cy="12" r="10" fill="var(--jade)" />
    <path
      d="M7.5 12.5 11 16l6-7"
      stroke="#fff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

/** Negative cross, hot-pink. Replaces ❌. */
export const CrossMark: React.FC<MarkProps> = ({ size = 18, className }) => (
  <svg {...baseProps(size, 'wrong')} className={className}>
    <circle cx="12" cy="12" r="10" fill="var(--neon-hot)" />
    <path
      d="M8 8l8 8M16 8l-8 8"
      stroke="#fff"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Score-tier mark — used on game-over screens. Returns one of five
 * marks based on percentage, replacing 🏆 / 🌟 / 😊 / 💪 / 📚.
 * Each is a single rendered SVG, not a per-tier swap, so the visual
 * language stays consistent.
 */
export const ScoreTierMark: React.FC<{ percentage: number; size?: number }> = ({
  percentage,
  size = 56,
}) => {
  // Five concentric arcs filled progressively
  const filled = percentage >= 100 ? 5
    : percentage >= 80 ? 4
      : percentage >= 60 ? 3
        : percentage >= 40 ? 2
          : 1;

  const tierColors = [
    'var(--graphite-soft)', // 1 — keep learning
    'var(--sodium)',        // 2
    'var(--neon-ice)',      // 3
    'var(--neon-hot)',      // 4
    'var(--jade)',          // 5 perfect
  ];
  const activeColor = tierColors[filled - 1];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      style={{ display: 'inline-block' }}
      role="img"
      aria-label={`score tier ${filled} of 5`}
    >
      {/* Five concentric arcs. The first `filled` of them get the
          active color; the rest sit as hairlines. */}
      {[24, 19, 14, 9, 4].map((r, i) => {
        const isActive = filled > i;
        return (
          <circle
            key={r}
            cx="28"
            cy="28"
            r={r}
            fill="none"
            stroke={isActive ? activeColor : 'var(--hairline)'}
            strokeWidth={isActive ? 3 : 1.5}
          />
        );
      })}
    </svg>
  );
};
