/**
 * Lesson data — TypeScript surface.
 *
 * The actual content lives in `lessons.json` so that authors can edit
 * cards without touching React code and so the dataset can be validated
 * via `scripts/validate-lessons.mjs`. This file is the typed re-export
 * the rest of the app imports from.
 */

import rawLessons from './lessons.json';

export interface Flashcard {
  id: string;
  cantonese: string;
  english: string;
  zhTW: string;
  zhCN: string;
  example?: {
    cantonese: string;
    english: string;
    zhTW: string;
    zhCN: string;
  };
}

export interface Category {
  id: string;
  title: string;
  titleKey: string;
  group: string;
  groupKey: string;
  /** CEFR-style difficulty: 1=A1, 2=A2, 3=B1, 4=B2. Optional for
   *  backwards-compat with unannotated categories. */
  level?: 1 | 2 | 3 | 4;
  cards: Flashcard[];
}

export const lessons: Category[] = rawLessons as Category[];

// Pre-calculate flattened list of all cards once at the data level.
export const allCards: Flashcard[] = lessons.flatMap(l => l.cards);
