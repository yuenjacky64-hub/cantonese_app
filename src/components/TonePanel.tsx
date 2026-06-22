import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getToneStats, Tone } from '../utils/toneStats';
import './TonePanel.css';

/**
 * "Your tones" diagnostic panel.
 *
 * Shows per-tone accuracy as a row of six bars. Surfaces the most
 * actionable signal for a Cantonese learner — which tones are getting
 * confused — without requiring the user to read raw numbers. When
 * there's no data yet, shows a single-line prompt instead of empty
 * bars so the section doesn't look broken.
 *
 * Pure presentational component: reads from toneStats utility on mount.
 */

const TONES: Tone[] = [1, 2, 3, 4, 5, 6];

export const TonePanel: React.FC = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState(() => getToneStats());
  const totalAttempts = useMemo(
    () => Object.values(stats).reduce((a, s) => a + s.correct + s.wrong, 0),
    [stats]
  );

  useEffect(() => {
    // Refresh on mount so navigating away from a game and back picks
    // up the new counts. Visibility-change re-reads localStorage in
    // case the user reviewed in another tab.
    const refresh = () => setStats(getToneStats());
    refresh();
    document.addEventListener('visibilitychange', refresh);
    return () => document.removeEventListener('visibilitychange', refresh);
  }, []);

  if (totalAttempts === 0) {
    return (
      <div className="tone-panel">
        <p className="tone-panel__empty">{t('tones.empty')}</p>
      </div>
    );
  }

  return (
    <div className="tone-panel">
      <ol className="tone-panel__row">
        {TONES.map(tone => {
          const s = stats[tone];
          const total = s.correct + s.wrong;
          const pct = total > 0 ? s.correct / total : 0;
          return (
            <li key={tone} className="tone-panel__cell">
              <div
                className="tone-panel__bar"
                aria-hidden="true"
                style={{
                  background: `var(--tone-${tone})`,
                  height: total === 0 ? '4px' : `${Math.max(8, Math.round(pct * 56))}px`,
                  opacity: total === 0 ? 0.3 : 1,
                }}
              />
              <span
                className="tone-panel__label"
                style={{ color: `var(--tone-${tone})` }}
              >
                {tone}
              </span>
              <span className="tone-panel__pct">
                {total === 0 ? '—' : `${Math.round(pct * 100)}%`}
              </span>
              <span className="sr-only">
                {t(`tones.${tone}`)}: {total === 0
                  ? t('tones.empty')
                  : t('tones.attemptsLabel', { count: total }) + ', ' + Math.round(pct * 100) + '%'}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TonePanel;
