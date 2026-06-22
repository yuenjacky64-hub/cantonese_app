import React from 'react';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';

/**
 * Tone-coloured level badge (A1–B2) shown on a category pod. Color is
 * driven by the tone palette so levels feel part of the design system:
 * L1 → tone-1 (the most-introductory color), L4 → tone-4 (the "deepest").
 */
export const LevelBadge: React.FC<{ level: 1 | 2 | 3 | 4 }> = ({ level }) => {
  const { t } = useTranslation();
  const shortLabel = t(`levels.${level}.short`, { defaultValue: `L${level}` });
  const fullLabel = t(`levels.${level}`);
  return (
    <span
      className="level-badge"
      style={{ color: `var(--tone-${level})`, borderColor: `var(--tone-${level})` }}
      aria-label={fullLabel}
      title={fullLabel}
    >
      {shortLabel}
    </span>
  );
};

interface ItemPodProps {
  icon: string;
  title: string;
  subtitle: string;
  onClick: () => void;
  ariaLabel?: string;
  level?: 1 | 2 | 3 | 4;
  animationDelay?: string;
  /** Add fade-in-up class for staggered entrance animation. */
  fadeIn?: boolean;
}

/**
 * Single reusable "pod" row used across the Home dashboard for
 * categories, group folders, and games. Stays a <div> because the
 * .item-pod styling collides with native <button> defaults — Enter and
 * Space activation is wired up so keyboard users aren't locked out.
 */
const ItemPod: React.FC<ItemPodProps> = ({
  icon,
  title,
  subtitle,
  onClick,
  ariaLabel,
  level,
  animationDelay,
  fadeIn = true,
}) => {
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`item-pod${fadeIn ? ' fade-in-up' : ''}`}
      style={animationDelay ? { animationDelay } : undefined}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel ?? title}
      onClick={onClick}
      onKeyDown={handleKey}
    >
      <div className="pod-icon-box">
        <IonIcon icon={icon} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3>{title}</h3>
        <span>{subtitle}</span>
      </div>
      {level && <LevelBadge level={level} />}
      <IonIcon icon={chevronForwardOutline} style={{ color: 'var(--graphite-soft)' }} />
    </div>
  );
};

export default ItemPod;
