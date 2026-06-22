import { describe, it, expect } from 'vitest';
import en from '../locales/en.json';
import zhTW from '../locales/zh-TW.json';
import zhCN from '../locales/zh-CN.json';

/**
 * Collect every dotted key reachable in a translation object. Leaves
 * are anything that isn't a plain object (strings, arrays, numbers).
 */
const collectKeys = (obj: unknown, prefix = '', out: Set<string> = new Set()): Set<string> => {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    if (prefix) out.add(prefix);
    return out;
  }
  for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      collectKeys(v, path, out);
    } else {
      out.add(path);
    }
  }
  return out;
};

const diff = (a: Set<string>, b: Set<string>): string[] => [...a].filter((k) => !b.has(k)).sort();

describe('i18n locale parity', () => {
  const enKeys = collectKeys(en);
  const twKeys = collectKeys(zhTW);
  const cnKeys = collectKeys(zhCN);

  it('zh-TW.json has every key present in en.json', () => {
    expect(diff(enKeys, twKeys)).toEqual([]);
  });

  it('zh-CN.json has every key present in en.json', () => {
    expect(diff(enKeys, cnKeys)).toEqual([]);
  });

  it('en.json has every key present in zh-TW.json', () => {
    expect(diff(twKeys, enKeys)).toEqual([]);
  });

  it('en.json has every key present in zh-CN.json', () => {
    expect(diff(cnKeys, enKeys)).toEqual([]);
  });
});
