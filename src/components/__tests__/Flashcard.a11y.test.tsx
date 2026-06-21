import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { axe } from 'jest-axe';
import Flashcard from '../Flashcard';
import * as bookmarkUtils from '../../utils/bookmarks';

/**
 * Accessibility smoke test for Flashcard. Runs axe-core against the
 * rendered DOM and fails on any WCAG violation. Catches the common
 * regression of an icon-only button losing its aria-label.
 */

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'en' },
  }),
}));

vi.mock('../../utils/bookmarks', () => ({
  isBookmarked: vi.fn(),
  toggleBookmark: vi.fn(),
}));

vi.mock('@ionic/react', async (importOriginal) => {
  const actual = await importOriginal<Record<string, unknown>>();
  return {
    ...actual,
    IonIcon: ({ icon: _icon, ...props }: Record<string, unknown>) => (
      <span data-testid="ion-icon" {...props} aria-hidden="true" />
    ),
    IonButton: ({ children, onClick, ...props }: Record<string, unknown> & { children?: React.ReactNode; onClick?: () => void }) => (
      <button onClick={onClick} {...props} type="button">
        {children}
      </button>
    ),
    IonSpinner: () => <div data-testid="ion-spinner" />,
  };
});

describe('Flashcard a11y', () => {
  const props = {
    id: 'a11y-1',
    cantonese: 'nei5 hou2',
    english: 'Hello',
    zhTW: '你好',
    zhCN: '你好',
    example: {
      cantonese: 'nei5 hou2 maa1?',
      english: 'How are you?',
      zhTW: '你好嗎？',
      zhCN: '你好吗？',
    },
  };

  beforeEach(() => {
    (bookmarkUtils.isBookmarked as ReturnType<typeof vi.fn>).mockReturnValue(false);
  });

  it('has no axe-core violations on the front face', async () => {
    const { container } = render(<Flashcard {...props} />);
    const results = await axe(container);
    // jest-axe's toHaveNoViolations matcher doesn't auto-register in
    // vitest, so we assert on the violations array directly with a
    // helpful failure message that lists what failed.
    const failures = results.violations.map((v) => `${v.id}: ${v.help}`);
    expect(failures, failures.join('\n')).toEqual([]);
  });
});
