import { describe, it, expect, beforeEach, vi } from 'vitest';

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((k: string) => store[k] ?? null),
    setItem: vi.fn((k: string, v: string) => { store[k] = v; }),
    clear: vi.fn(() => { store = {}; }),
    removeItem: vi.fn((k: string) => { delete store[k]; }),
  };
})();
Object.defineProperty(global, 'localStorage', { value: localStorageMock });

import {
  recordToneAttempt,
  getToneStats,
  getToneAccuracy,
  getTotalAttempts,
  resetToneStats,
  extractTones,
  _resetToneStatsCache,
} from '../toneStats';

describe('toneStats', () => {
  beforeEach(() => {
    localStorageMock.clear();
    _resetToneStatsCache();
  });

  describe('extractTones', () => {
    it('pulls every tone digit from a jyutping phrase', () => {
      expect(extractTones('nei5 hou2 maa1?')).toEqual([5, 2, 1]);
    });

    it('skips non-jyutping tokens', () => {
      expect(extractTones('hou2 Netflix 嬲 maa1')).toEqual([2, 1]);
    });

    it('returns [] for empty/non-tonal input', () => {
      expect(extractTones('')).toEqual([]);
      expect(extractTones('hello world')).toEqual([]);
    });
  });

  describe('recordToneAttempt', () => {
    it('records one correct per tone digit', () => {
      recordToneAttempt('nei5 hou2 maa1?', true);
      const s = getToneStats();
      expect(s[5].correct).toBe(1);
      expect(s[2].correct).toBe(1);
      expect(s[1].correct).toBe(1);
      expect(s[1].wrong).toBe(0);
    });

    it('records one wrong per tone digit', () => {
      recordToneAttempt('nei5 hou2', false);
      const s = getToneStats();
      expect(s[5].wrong).toBe(1);
      expect(s[2].wrong).toBe(1);
      expect(s[5].correct).toBe(0);
    });

    it('is a no-op for empty input', () => {
      recordToneAttempt('', true);
      expect(getTotalAttempts()).toBe(0);
    });

    it('persists across cache resets', () => {
      recordToneAttempt('hou2', true);
      _resetToneStatsCache();
      expect(getToneStats()[2].correct).toBe(1);
    });
  });

  describe('getToneAccuracy', () => {
    it('returns null when there are no attempts', () => {
      expect(getToneAccuracy(1)).toBeNull();
    });

    it('returns the correct fraction', () => {
      recordToneAttempt('hou2', true);
      recordToneAttempt('hou2', true);
      recordToneAttempt('hou2', false);
      expect(getToneAccuracy(2)).toBeCloseTo(2 / 3);
    });
  });

  describe('resetToneStats', () => {
    it('clears all counters', () => {
      recordToneAttempt('hou2 maa1', true);
      resetToneStats();
      expect(getTotalAttempts()).toBe(0);
    });
  });
});
