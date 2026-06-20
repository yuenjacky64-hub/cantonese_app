import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ToneContour from './ToneContour';
import './Jyutping.css';

/**
 * Jyutping typesetter.
 *
 * Takes a raw jyutping string ("nei5 hou2 maa1?") and renders it as a
 * line of monospaced syllables, with each tone-bearing digit promoted to
 * a colored superscript and (optionally) a tone-contour glyph beside it.
 *
 * Syllable detection is intentionally simple: split on whitespace + any
 * non-letter/digit separator. For each token we look for the final digit
 * 1–6 and split the token into [base, toneNum, trailing]. Anything that
 * doesn't end in a tone digit (punctuation, English) renders as-is.
 */

interface JyutpingProps {
  text: string;
  /** Whether to show the tone-contour glyph beside each syllable. */
  showContour?: boolean;
  /** Font-size multiplier. The base size is set by --jyutping-size. */
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

interface Syllable {
  base: string;
  tone: number | null;
  trailing: string;
}

const TONE_DIGIT_RE = /([a-zA-Z]+)([1-6])([^a-zA-Z1-6]*)$/;

const parseSyllable = (token: string): Syllable => {
  const match = token.match(TONE_DIGIT_RE);
  if (!match) {
    return { base: token, tone: null, trailing: '' };
  }
  return {
    base: match[1],
    tone: parseInt(match[2], 10),
    trailing: match[3],
  };
};

export const Jyutping: React.FC<JyutpingProps> = ({
  text,
  showContour = true,
  className,
  size = 'md',
}) => {
  const { t } = useTranslation();
  const syllables = useMemo(() => {
    // Preserve the original whitespace structure by splitting on word
    // boundaries that keep separators as their own tokens.
    return text.split(/(\s+)/).map(parseSyllable);
  }, [text]);

  // If nothing in the input carries a tone digit, the input isn't really
  // jyutping — render it as a single span so a downstream `getByText`
  // can still find the full string.
  const hasAnyTone = syllables.some(s => s.tone !== null);
  if (!hasAnyTone) {
    return <span className={`jyutping jyutping--${size} ${className ?? ''}`}>{text}</span>;
  }

  return (
    <span className={`jyutping jyutping--${size} ${className ?? ''}`}>
      {syllables.map((syl, i) => {
        if (syl.tone === null) {
          // Whitespace or punctuation: render verbatim
          return <span key={i} className="jyutping__sep" aria-hidden="true">{syl.base}</span>;
        }
        // Screen readers get "nei, tone 5 low rising" per syllable so
        // tone information isn't conveyed only through color.
        const toneName = t(`tones.${syl.tone}`);
        const srLabel = `${syl.base}, ${t(`levels.tone`, { defaultValue: 'tone' })} ${syl.tone} ${toneName}`;
        return (
          <span key={i} className="jyutping__syllable" role="text">
            <span aria-hidden="true">
              <span className="jyutping__base">{syl.base}</span>
              <sup
                className="jyutping__tone"
                style={{ color: `var(--tone-${syl.tone})` }}
              >
                {syl.tone}
              </sup>
              {showContour && (
                <ToneContour
                  tone={syl.tone}
                  size={12}
                  className="jyutping__contour"
                  ariaHidden
                />
              )}
              {syl.trailing && (
                <span className="jyutping__trailing">{syl.trailing}</span>
              )}
            </span>
            <span className="sr-only">{srLabel}</span>
          </span>
        );
      })}
    </span>
  );
};

export default Jyutping;
