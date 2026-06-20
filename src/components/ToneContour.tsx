import React from 'react';

/**
 * Tone-contour glyph.
 *
 * Renders one Cantonese lexical tone as a tiny line drawing: a low/mid/high
 * baseline + arrowhead trajectory. This is the design system's signature
 * element — every jyutping syllable gets one beside it, in its tone hue,
 * so learners can see the contour at the same time as the romanization.
 *
 * The six tones (Yale jyutping numbering):
 *   1 — high level    ˥˥
 *   2 — high rising   ˧˥
 *   3 — mid level     ˧˧
 *   4 — low falling   ˨˩
 *   5 — low rising    ˨˧
 *   6 — low level     ˨˨
 *
 * Each contour is two waypoints (start, end) mapped to a 16×16 viewBox.
 * The vertical axis is pitch (top = high, bottom = low). Color comes from
 * --tone-N CSS tokens; the component itself only ships geometry.
 */

type Tone = 1 | 2 | 3 | 4 | 5 | 6;

const TONE_POINTS: Record<Tone, [number, number, number, number]> = {
  1: [2, 3, 14, 3],    // high level
  2: [2, 11, 14, 3],   // high rising
  3: [2, 8, 14, 8],    // mid level
  4: [2, 11, 14, 14],  // low falling
  5: [2, 13, 14, 8],   // low rising
  6: [2, 12, 14, 12],  // low level
};

interface ToneContourProps {
  tone: number;
  size?: number;
  className?: string;
  ariaHidden?: boolean;
}

export const ToneContour: React.FC<ToneContourProps> = ({
  tone,
  size = 16,
  className,
  ariaHidden = true,
}) => {
  if (tone < 1 || tone > 6) return null;
  const [x1, y1, x2, y2] = TONE_POINTS[tone as Tone];
  const color = `var(--tone-${tone})`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      aria-hidden={ariaHidden}
      style={{ display: 'inline-block', verticalAlign: 'baseline', flexShrink: 0 }}
    >
      {/* The baseline staff — three faint horizontal guides */}
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.18">
        <line x1="1" y1="3" x2="15" y2="3" />
        <line x1="1" y1="8" x2="15" y2="8" />
        <line x1="1" y1="13" x2="15" y2="13" />
      </g>
      {/* The contour itself */}
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* End dot — anchors the trajectory */}
      <circle cx={x2} cy={y2} r="1.6" fill={color} />
    </svg>
  );
};

export default ToneContour;
