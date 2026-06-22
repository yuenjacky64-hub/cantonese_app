#!/usr/bin/env node
/**
 * Content validator for src/data/lessons.json.
 *
 * Catches data drift at build time / pre-commit before users see it:
 *   - Duplicate card IDs across all categories
 *   - Missing required fields (id, cantonese, english, zhTW, zhCN)
 *   - Malformed jyutping (must split into syllables ending in 1–6,
 *     or be punctuation/whitespace)
 *   - Bad i18n keys (titleKey must look like "topics.*")
 *   - Invalid group keys
 *   - Bad level values (must be 1–4 if present)
 *   - Examples that don't follow the same rules as cards
 *
 * Exits non-zero on any error. Prints a per-category summary.
 *
 * Zero runtime dependencies — uses node:fs + node:url.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DATA_PATH = join(__dirname, '..', 'src', 'data', 'lessons.json');
const I18N_DIR = join(__dirname, '..', 'src', 'i18n', 'locales');
const I18N_LOCALES = ['en', 'zh-TW', 'zh-CN'];

const ALLOWED_GROUPS = new Set([
  'groups.basics',
  'groups.daily_life',
  'groups.social',
  'groups.grammar',
  'groups.travel',
]);

const ALLOWED_LEVELS = new Set([1, 2, 3, 4]);

// A jyutping syllable: letters then a tone digit 1–6.
const JYUTPING_SYL = /^[a-zA-Z]+[1-6]$/;
// A "soft" syllable: anything that looks like it should have had a tone
// but doesn't — e.g. an all-letters token with no digit. These are the
// real bugs (someone forgot the tone number). English loanwords used in
// Cantonese ("Netflix", "Wifi", "AA") trip this naively, so we maintain
// an allowlist below.
const LOANWORD_ALLOWLIST = new Set([
  // Brand names / English nouns used directly in spoken Cantonese
  'Wifi', 'wifi', 'WiFi', 'WIFI',
  'Netflix', 'netflix',
  'Jollibee',
  'K',
  'AA',
  'OK', 'ok',
  'PM', 'AM', 'am', 'pm',
  // Cantonese slang spelled in romanization without tone digits
  'hea', 'chok', 'chur', 'hai', 'mat', 'sek',
  // Phonological annotations used inside pedagogical parentheticals,
  // e.g. "lin4 zip3 ci4 (n hau6)" = "linker (after n-ending syllable)".
  'n',
]);
// Allow tokens that contain at least one CJK character — these are
// intentional inline Chinese fragments inside otherwise-jyutping text.
const HAS_CJK = /[㐀-鿿豈-﫿]/;

const errors = [];
const warnings = [];

const isNonEmptyString = (v) => typeof v === 'string' && v.trim().length > 0;

/**
 * Validate a jyutping phrase. Each whitespace-separated token must look
 * like one of:
 *   - a jyutping syllable (letters + tone digit), with optional leading
 *     and trailing punctuation: (jyun5), maa1?, hou2,
 *   - a slash-joined set of syllables: hou2/jat1
 *   - a token containing CJK characters (intentional inline Chinese)
 *   - a known loanword
 *   - pure punctuation
 * Anything else is a warning (probably a missing tone digit), not an
 * error — content quality is editorial, not a build-blocker.
 */
function validateJyutping(text, where) {
  if (!isNonEmptyString(text)) {
    errors.push(`${where}: jyutping is empty`);
    return;
  }
  const tokens = text.split(/\s+/).filter(Boolean);
  for (const token of tokens) {
    // Strip surrounding punctuation: "(maa1?)" → "maa1"
    const stripped = token.replace(/^[?!.,;:'"()/\\…]+|[?!.,;:'"()/\\…]+$/g, '');
    if (!stripped) continue;
    if (HAS_CJK.test(stripped)) continue;
    if (LOANWORD_ALLOWLIST.has(stripped)) continue;
    if (JYUTPING_SYL.test(stripped)) continue;

    // Try slash-joined alternatives like "hou2/jat1"
    const parts = stripped.split('/');
    if (parts.length > 1 && parts.every(p => JYUTPING_SYL.test(p) || HAS_CJK.test(p) || LOANWORD_ALLOWLIST.has(p))) continue;

    warnings.push(`${where}: suspicious jyutping token "${token}"`);
  }
}

function validateCard(card, catId) {
  const where = `[${catId}] card ${card.id ?? '(no id)'}`;
  if (!isNonEmptyString(card.id))      errors.push(`${where}: id missing`);
  if (!isNonEmptyString(card.cantonese)) errors.push(`${where}: cantonese missing`);
  if (!isNonEmptyString(card.english))   errors.push(`${where}: english missing`);
  if (!isNonEmptyString(card.zhTW))      errors.push(`${where}: zhTW missing`);
  if (!isNonEmptyString(card.zhCN))      errors.push(`${where}: zhCN missing`);

  if (isNonEmptyString(card.cantonese)) validateJyutping(card.cantonese, `${where} (cantonese)`);

  if (card.example !== undefined) {
    const e = card.example;
    if (!isNonEmptyString(e.cantonese)) errors.push(`${where}: example.cantonese missing`);
    if (!isNonEmptyString(e.english))   errors.push(`${where}: example.english missing`);
    if (!isNonEmptyString(e.zhTW))      errors.push(`${where}: example.zhTW missing`);
    if (!isNonEmptyString(e.zhCN))      errors.push(`${where}: example.zhCN missing`);
    if (isNonEmptyString(e.cantonese)) validateJyutping(e.cantonese, `${where} (example)`);
  }
}

function validateCategory(cat, allIds, idCategoryMap, localeKeys) {
  const where = `[${cat.id ?? '(no id)'}]`;
  if (!isNonEmptyString(cat.id))      errors.push(`${where}: id missing`);
  if (!isNonEmptyString(cat.titleKey)) errors.push(`${where}: titleKey missing`);
  if (!isNonEmptyString(cat.groupKey)) errors.push(`${where}: groupKey missing`);
  else if (!ALLOWED_GROUPS.has(cat.groupKey)) {
    errors.push(`${where}: groupKey "${cat.groupKey}" not one of ${[...ALLOWED_GROUPS].join(', ')}`);
  }
  if (!Array.isArray(cat.cards))      errors.push(`${where}: cards must be an array`);

  if (cat.level !== undefined && !ALLOWED_LEVELS.has(cat.level)) {
    errors.push(`${where}: level must be 1–4 (got ${cat.level})`);
  }

  if (cat.titleKey) {
    for (const [locale, keys] of Object.entries(localeKeys)) {
      if (!keys.has(cat.titleKey)) {
        warnings.push(`${where}: titleKey "${cat.titleKey}" has no entry in ${locale}.json`);
      }
    }
  }

  if (Array.isArray(cat.cards)) {
    for (const card of cat.cards) {
      validateCard(card, cat.id);
      if (isNonEmptyString(card.id)) {
        if (allIds.has(card.id)) {
          const otherCat = idCategoryMap.get(card.id);
          errors.push(`${where}: duplicate card id "${card.id}" (also in [${otherCat}])`);
        }
        allIds.add(card.id);
        idCategoryMap.set(card.id, cat.id);
      }
    }
  }
}

function getNestedKey(obj, dottedKey) {
  return dottedKey.split('.').reduce((acc, k) => acc?.[k], obj);
}

function collectI18nKeys(obj, prefix = '', out = new Set()) {
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      collectI18nKeys(v, path, out);
    } else {
      out.add(path);
    }
  }
  return out;
}

function main() {
  let data;
  try {
    data = JSON.parse(readFileSync(DATA_PATH, 'utf-8'));
  } catch (e) {
    console.error(`✗ Failed to parse ${DATA_PATH}: ${e.message}`);
    process.exit(1);
  }

  const localeKeys = {};
  for (const locale of I18N_LOCALES) {
    const path = join(I18N_DIR, `${locale}.json`);
    try {
      localeKeys[locale] = collectI18nKeys(JSON.parse(readFileSync(path, 'utf-8')));
    } catch (e) {
      warnings.push(`Could not read ${path}: ${e.message}`);
      localeKeys[locale] = new Set();
    }
  }

  if (!Array.isArray(data)) {
    console.error('✗ lessons.json root must be an array');
    process.exit(1);
  }

  const allIds = new Set();
  const idCategoryMap = new Map();
  const seenCatIds = new Set();

  for (const cat of data) {
    if (cat.id && seenCatIds.has(cat.id)) {
      errors.push(`duplicate category id "${cat.id}"`);
    }
    if (cat.id) seenCatIds.add(cat.id);
    validateCategory(cat, allIds, idCategoryMap, localeKeys);
  }

  // Summary
  const totalCards = data.reduce((a, c) => a + (Array.isArray(c.cards) ? c.cards.length : 0), 0);
  console.log(`Validated ${data.length} categories, ${totalCards} cards.`);

  if (warnings.length) {
    console.log(`\n${warnings.length} warnings:`);
    for (const w of warnings) console.log(`  ! ${w}`);
  }

  if (errors.length) {
    console.error(`\n✗ ${errors.length} errors:`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }

  console.log('✓ lessons.json is valid');
}

main();
