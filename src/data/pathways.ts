/**
 * Learner pathways.
 *
 * A pathway is an ordered list of category IDs that maps to a real-life
 * situation a learner is preparing for. Independent of the alphabetical
 * category catalog, so two people opening the app can take different
 * routes through the same content.
 *
 * Each pathway lists the categories most directly useful for that
 * situation — not every Cantonese category, just the ones that pay off
 * fastest for someone in that scenario.
 */

export interface Pathway {
  id: string;
  /** i18n key for the human-readable name. */
  titleKey: string;
  /** i18n key for the one-line description. */
  descriptionKey: string;
  /** Estimated total commitment, used as a subtitle. */
  estimateKey: string;
  /** Category IDs in the order a learner should walk through them. */
  categoryIds: string[];
}

export const pathways: Pathway[] = [
  {
    id: 'first-trip',
    titleKey: 'pathways.firstTrip.title',
    descriptionKey: 'pathways.firstTrip.description',
    estimateKey: 'pathways.firstTrip.estimate',
    categoryIds: [
      'greetings',
      'numbers',
      'common-phrases',
      'directions',
      'transportation',
      'ordering-dining',
      'money-bargaining',
      'immigration',
      'hotel',
      'sightseeing',
    ],
  },
  {
    id: 'first-month',
    titleKey: 'pathways.firstMonth.title',
    descriptionKey: 'pathways.firstMonth.description',
    estimateKey: 'pathways.firstMonth.estimate',
    categoryIds: [
      'greetings',
      'numbers',
      'common-phrases',
      'family',
      'pronouns',
      'time-scheduling',
      'weather',
      'housing-utilities',
      'wet-market',
      'hk-food',
      'digital-survival',
      'city-navigation',
      'social-scripts',
      'health-emergencies',
    ],
  },
  {
    id: 'workplace',
    titleKey: 'pathways.workplace.title',
    descriptionKey: 'pathways.workplace.description',
    estimateKey: 'pathways.workplace.estimate',
    categoryIds: [
      'common-phrases',
      'professions',
      'work-school',
      'making-plans',
      'respect-markers',
      'opinions-uncertainty',
      'compliments-flattery',
      'numbers-time-money',
      'cantonese-fillers',
    ],
  },
];

/**
 * Look up a pathway by id. Returns undefined if not found.
 */
export const getPathway = (id: string): Pathway | undefined =>
  pathways.find(p => p.id === id);
