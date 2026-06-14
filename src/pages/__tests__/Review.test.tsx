
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import Review from '../Review';
import * as srs from '../../utils/srs';

// Mock dependencies
vi.mock('react-router-dom', () => ({
  useHistory: () => ({ push: vi.fn() }),
  Link: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: any) => {
      if (key === 'review.progress') return `Card ${options?.current} of ${options?.total}`;
      return key;
    }
  })
}));

// Mock Ionic components
vi.mock('@ionic/react', async () => {
    const actual = await vi.importActual<any>('@ionic/react');
    return {
        ...actual,
        IonPage: ({ children }: { children: React.ReactNode }) => <div data-testid="ion-page">{children}</div>,
        IonContent: ({ children }: { children: React.ReactNode }) => <div data-testid="ion-content">{children}</div>,
        IonFooter: ({ children }: { children: React.ReactNode }) => <div data-testid="ion-footer">{children}</div>,
        IonToolbar: ({ children }: { children: React.ReactNode }) => <div data-testid="ion-toolbar">{children}</div>,
        IonButton: ({ children, onClick, disabled, routerLink }: any) => (
            <button onClick={onClick} disabled={disabled} data-testid="ion-button" data-router-link={routerLink}>
                {children}
            </button>
        ),
        IonIcon: ({ icon }: any) => <span data-testid="ion-icon" />,
        IonText: ({ children }: any) => <span>{children}</span>,
    };
});

// Mock CommonHeader
vi.mock('../../components/CommonHeader', () => ({
    default: ({ title }: any) => <div data-testid="common-header">{title}</div>
}));

// Mock Flashcard component
vi.mock('../../components/Flashcard', () => ({
    default: ({ cantonese, english }: any) => (
        <div data-testid="flashcard">
            <div>{cantonese}</div>
            <div>{english}</div>
        </div>
    )
}));

// Mock SRS utils
vi.mock('../../utils/srs', () => ({
    getDueCards: vi.fn(),
    updateCardSRS: vi.fn(),
    getSRSStats: vi.fn(() => ({ totalCards: 10, reviewedCount: 5, dueCount: 2 }))
}));

describe('Review Page', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render review session with due cards', () => {
        const mockCards = [
            { id: '1', cantonese: 'Ako', english: 'Me', zhTW: '', zhCN: '' },
            { id: '2', cantonese: 'Ikaw', english: 'You', zhTW: '', zhCN: '' }
        ];
        vi.spyOn(srs, 'getDueCards').mockReturnValue(mockCards);

        render(<Review />);

        expect(screen.getByTestId('common-header')).toHaveTextContent('review.title');
        expect(screen.getByText('Card 1 of 2')).toBeInTheDocument();
        expect(screen.getByText('Ako')).toBeInTheDocument();
        expect(screen.getByText('Me')).toBeInTheDocument();
    });

    it('should handle correct answer and move to next card', async () => {
        const mockCards = [
            { id: '1', cantonese: 'Ako', english: 'Me', zhTW: '', zhCN: '' },
            { id: '2', cantonese: 'Ikaw', english: 'You', zhTW: '', zhCN: '' }
        ];
        vi.spyOn(srs, 'getDueCards').mockReturnValue(mockCards);
        const updateSpy = vi.spyOn(srs, 'updateCardSRS');

        render(<Review />);

        // Click Correct
        const correctBtn = screen.getByText('review.correct');
        fireEvent.click(correctBtn);

        // Wait for animation delay (mocked implicitly via waitFor or real timers if not mocked)
        // The component has a 450ms timeout.
        await waitFor(() => {
            expect(updateSpy).toHaveBeenCalledWith('1', true);
        }, { timeout: 1000 });

        // Should see next card
        await waitFor(() => {
             expect(screen.getByText('Card 2 of 2')).toBeInTheDocument();
             expect(screen.getByText('Ikaw')).toBeInTheDocument();
        });
    });

    it('should handle wrong answer and move to next card', async () => {
        const mockCards = [
            { id: '1', cantonese: 'Ako', english: 'Me', zhTW: '', zhCN: '' },
            { id: '2', cantonese: 'Ikaw', english: 'You', zhTW: '', zhCN: '' }
        ];
        vi.spyOn(srs, 'getDueCards').mockReturnValue(mockCards);
        const updateSpy = vi.spyOn(srs, 'updateCardSRS');

        render(<Review />);

        // Click Wrong
        const wrongBtn = screen.getByText('review.wrong');
        fireEvent.click(wrongBtn);

        await waitFor(() => {
            expect(updateSpy).toHaveBeenCalledWith('1', false);
        }, { timeout: 1000 });

        // Should see next card
        await waitFor(() => {
            expect(screen.getByText('Card 2 of 2')).toBeInTheDocument();
            expect(screen.getByText('Ikaw')).toBeInTheDocument();
       });
    });

    it('should show finished screen when all cards are reviewed', async () => {
        const mockCards = [
            { id: '1', cantonese: 'Ako', english: 'Me', zhTW: '', zhCN: '' }
        ];
        vi.spyOn(srs, 'getDueCards').mockReturnValue(mockCards);

        render(<Review />);

        // Click Correct
        const correctBtn = screen.getByText('review.correct');
        fireEvent.click(correctBtn);

        await waitFor(() => {
            expect(screen.getByText('review.impactReport')).toBeInTheDocument();
        }, { timeout: 1000 });
    });

    it('should render empty state if no cards due', () => {
        vi.spyOn(srs, 'getDueCards').mockReturnValue([]);

        render(<Review />);

        expect(screen.getByText('review.impactReport')).toBeInTheDocument();
    });
});
