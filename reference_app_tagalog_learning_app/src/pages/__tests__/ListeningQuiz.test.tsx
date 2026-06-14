import { describe, it, expect, vi, beforeEach, afterEach, MockInstance } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import ListeningQuiz from '../ListeningQuiz';

// Mock dependencies
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key
  })
}));

// Mock Ionic components
vi.mock('@ionic/react', async () => {
    const actual = await vi.importActual<any>('@ionic/react');
    return {
        ...actual,
        IonPage: ({ children }: { children: React.ReactNode }) => <div data-testid="ion-page">{children}</div>,
        IonContent: ({ children }: { children: React.ReactNode }) => <div data-testid="ion-content">{children}</div>,
        IonButton: ({ children, onClick, disabled, className }: any) => (
            <button onClick={onClick} disabled={disabled} className={className} data-testid="ion-button">
                {children}
            </button>
        ),
        IonIcon: () => <span data-testid="ion-icon" />,
    };
});

// Mock CommonHeader
vi.mock('../../components/CommonHeader', () => ({
    default: ({ title }: any) => <div data-testid="common-header">{title}</div>
}));

// Mock lessons data to control the quiz content
vi.mock('../data/lessons', () => {
    const mockLessons = [
        {
            id: 'test-category',
            cards: [
                { id: '1', tagalog: 'Word1', english: 'Word1-En', zhTW: '', zhCN: '' },
                { id: '2', tagalog: 'Word2', english: 'Word2-En', zhTW: '', zhCN: '' },
                { id: '3', tagalog: 'Word3', english: 'Word3-En', zhTW: '', zhCN: '' },
                { id: '4', tagalog: 'Word4', english: 'Word4-En', zhTW: '', zhCN: '' },
            ]
        }
    ];
    return {
        lessons: mockLessons,
        allCards: mockLessons.flatMap(l => l.cards)
    };
});

describe('ListeningQuiz Page', () => {
    let fetchSpy: MockInstance;

    beforeEach(() => {
        vi.useFakeTimers();

        // Mock fetch
        fetchSpy = vi.spyOn(global, 'fetch').mockImplementation((url: RequestInfo | URL) => {
            if (url.toString().includes('audio-map.json')) {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve({
                        'Word1': { normal: '/audio/word1.mp3' },
                        'Word2': { normal: '/audio/word2.mp3' }
                    })
                } as Response);
            }
            return Promise.resolve({ ok: false } as Response);
        });

        // Mock Audio play
        HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined);
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    it('should fetch audio-map.json only once', async () => {
        render(<ListeningQuiz />);

        // Fast-forward initial auto-play delay (500ms)
        await act(async () => {
            vi.advanceTimersByTime(1000);
        });

        // Check first fetch
        expect(fetchSpy).toHaveBeenCalledWith(expect.stringContaining('audio-map.json'));
        const callCountAfterFirstPlay = fetchSpy.mock.calls.filter((call: unknown[]) =>
            (call[0] as string).toString().includes('audio-map.json')
        ).length;
        expect(callCountAfterFirstPlay).toBe(1);

        // Find the play button and click it to play audio again
        const playButton = screen.getAllByRole('button')[0]; // The first button should be the play button in the audio card

        // Simulate clicking play again
        await act(async () => {
            fireEvent.click(playButton);
        });

        // Check call count again
        const callCountAfterSecondPlay = fetchSpy.mock.calls.filter((call: unknown[]) =>
            (call[0] as string).toString().includes('audio-map.json')
        ).length;

        // Optimized expectation: It fetches ONLY once
        expect(callCountAfterSecondPlay).toBe(1);
    });
});
