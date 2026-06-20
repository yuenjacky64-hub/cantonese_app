/**
 * Per-tone accuracy tracking.
 *
 * Every time a user answers a tone-bearing prompt (review card, game,
 * listening quiz, etc.) we record one attempt per syllable's tone digit.
 * Over time this lets us answer "which tones do you confuse?" — the
 * single most useful diagnostic for a learner of Cantonese, and one
 * that no other generic learning app surfaces.
 *
 * State is persisted to localStorage under a single key; the schema is
 * a flat `{ "1": { correct, wrong }, "2": ..., ... }` so it's trivially
 * mergeable across sessions and tabs.
 */

export type Tone = 1 | 2 | 3 | 4 | 5 | 6;

export interface ToneStat {
  correct: number;
  wrong: number;
}

export type ToneStats = Record<Tone, ToneStat>;

const STORAGE_KEY = 'tone-stats';

const emptyStats = (): ToneStats => ({
  1: { correct: 0, wrong: 0 },
  2: { correct: 0, wrong: 0 },
  3: { correct: 0, wrong: 0 },
  4: { correct: 0, wrong: 0 },
  5: { correct: 0, wrong: 0 },
  6: { correct: 0, wrong: 0 },
});

// Same regex as Jyutping component — syllable + tone digit, with
// optional trailing punctuation we strip first.
const TONE_DIGIT_RE = /([a-zA-Z]+)([1-6])([^a-zA-Z1-6]*)$/;

let cache: ToneStats | null = null;

const loadFresh = (): ToneStats => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyStats();
    const parsed = JSON.parse(raw);
    // Validate shape — fall back to empty if anything looks wrong, but
    // don't throw away unrelated tone counts.
    const result = emptyStats();
    for (const tone of [1, 2, 3, 4, 5, 6] as Tone[]) {
      const entry = parsed?.[tone];
      if (entry && typeof entry.correct === 'number' && typeof entry.wrong === 'number') {
        result[tone] = { correct: entry.correct, wrong: entry.wrong };
      }
    }
    return result;
  } catch (e) {
    console.warn('Failed to load tone stats', e);
    return emptyStats();
  }
};

const load = (): ToneStats => {
  if (cache) return cache;
  cache = loadFresh();
  return cache;
};

const persist = (stats: ToneStats): void => {
  cache = stats;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    console.warn('Failed to save tone stats', e);
  }
};

/**
 * Extract all tone digits from a jyutping phrase. Tokens without a
 * tone digit (English loanwords, punctuation, Chinese characters) are
 * skipped.
 */
export const extractTones = (jyutping: string): Tone[] => {
  if (!jyutping) return [];
  const out: Tone[] = [];
  for (const token of jyutping.split(/\s+/)) {
    if (!token) continue;
    const m = token.match(TONE_DIGIT_RE);
    if (m) out.push(parseInt(m[2], 10) as Tone);
  }
  return out;
};

/**
 * Record an attempt on a jyutping phrase. Increments `correct` or
 * `wrong` for each tone that appears in the phrase.
 *
 * Safe to call with empty / non-jyutping input — it's a no-op.
 */
export const recordToneAttempt = (jyutping: string, isCorrect: boolean): void => {
  const tones = extractTones(jyutping);
  if (tones.length === 0) return;

  const stats = { ...load() };
  for (const tone of tones) {
    const entry = stats[tone];
    stats[tone] = isCorrect
      ? { correct: entry.correct + 1, wrong: entry.wrong }
      : { correct: entry.correct, wrong: entry.wrong + 1 };
  }
  persist(stats);
};

/** Return the current stats snapshot (cloned). */
export const getToneStats = (): ToneStats => {
  const s = load();
  return {
    1: { ...s[1] }, 2: { ...s[2] }, 3: { ...s[3] },
    4: { ...s[4] }, 5: { ...s[5] }, 6: { ...s[6] },
  };
};

/** Return accuracy as a fraction (0–1), or null if the tone has no attempts yet. */
export const getToneAccuracy = (tone: Tone): number | null => {
  const s = load()[tone];
  const total = s.correct + s.wrong;
  if (total === 0) return null;
  return s.correct / total;
};

/** Total attempts across all tones — useful as a "tracking ready?" gate. */
export const getTotalAttempts = (): number => {
  const s = load();
  return Object.values(s).reduce((a, t) => a + t.correct + t.wrong, 0);
};

/** Reset all stats. Currently unused, but handy for settings / tests. */
export const resetToneStats = (): void => {
  persist(emptyStats());
};

// For tests
export const _resetToneStatsCache = (): void => {
  cache = null;
};
