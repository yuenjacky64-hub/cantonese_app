
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Home from '../Home';

// Mock dependencies

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: any) => {
      if (key === 'home.dueCount') return `${options?.count}`;
      if (key === 'home.cardsCount') return `${options?.count} cards`;
      if (key === 'home.lessonsCount') return `${options?.count} lessons`;
      return key;
    }
  })
}));

// Mock Ionic components
vi.mock('@ionic/react', async () => {
    const actual = await vi.importActual<any>('@ionic/react');
    return {
        ...actual,
        useIonRouter: () => ({ push: vi.fn(), back: vi.fn(), canGoBack: () => false, routeInfo: {} }),
        IonPage: ({ children }: { children: React.ReactNode }) => <div data-testid="ion-page">{children}</div>,
        IonContent: ({ children }: { children: React.ReactNode }) => <div data-testid="ion-content">{children}</div>,
        IonHeader: ({ children }: { children: React.ReactNode }) => <div data-testid="ion-header">{children}</div>,
        IonToolbar: ({ children }: { children: React.ReactNode }) => <div data-testid="ion-toolbar">{children}</div>,
        IonTitle: ({ children }: { children: React.ReactNode }) => <div data-testid="ion-title">{children}</div>,
        IonButton: ({ children, onClick }: any) => (
            <button onClick={onClick} data-testid="ion-button">
                {children}
            </button>
        ),
        IonIcon: (_props: any) => <span data-testid="ion-icon" />,
        IonSearchbar: ({ value, onIonInput, onIonClear, placeholder }: any) => (
            <input
                data-testid="ion-searchbar"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onIonInput({ detail: { value: e.target.value } })}
                onKeyDown={(e) => {
                    if (e.key === 'Escape' && onIonClear) onIonClear();
                }}
            />
        ),
        IonList: ({ children }: any) => <ul>{children}</ul>,
        IonItem: ({ children }: any) => <li>{children}</li>,
        IonLabel: ({ children }: any) => <span>{children}</span>,
        IonListHeader: ({ children }: any) => <h3>{children}</h3>,
        IonAccordionGroup: ({ children }: any) => <div>{children}</div>,
        IonAccordion: ({ children }: any) => <div>{children}</div>,
    };
});

// Mock CommonHeader
vi.mock('../../components/CommonHeader', () => ({
    default: ({ title }: any) => <div data-testid="common-header">{title}</div>
}));

// Mock Footer
vi.mock('../../components/Footer', () => ({
    default: () => <div data-testid="footer">Footer</div>
}));

// Mock utils
vi.mock('../../utils/srs', () => ({
    getSRSStats: () => ({ dueCount: 5 })
}));

vi.mock('../../utils/streak', () => ({
    getStreakInfo: () => ({ streak: 3, isActiveToday: true, longestStreak: 5, totalDays: 10 })
}));

// Mock lessons data
vi.mock('../../data/lessons', () => {
    const mockLessons = [
        {
            id: 'greetings',
            titleKey: 'topics.greetings',
            group: 'basics',
            groupKey: 'groups.basics',
            cards: [
                { id: '1', cantonese: 'Nei hou?', english: 'How are you?', zhTW: '', zhCN: '' },
                { id: '2', cantonese: 'Salamat', english: 'Thank you', zhTW: '', zhCN: '' }
            ]
        },
        {
            id: 'animals',
            titleKey: 'topics.animals',
            group: 'daily_life',
            groupKey: 'groups.daily_life',
            cards: [
                { id: 'ani1', cantonese: 'Aso', english: 'Dog', zhTW: '', zhCN: '' },
                { id: 'ani2', cantonese: 'Pusa', english: 'Cat', zhTW: '', zhCN: '' }
            ]
        }
    ];
    return {
        lessons: mockLessons,
        allCards: mockLessons.flatMap(l => l.cards)
    };
});

describe('Home Page', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render home content', () => {
        render(<Home />);
        expect(screen.getByTestId('common-header')).toHaveTextContent('common.appTitle');
        // Initial state shows pods
        expect(screen.getByText('home.welcome')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument(); // Due count from mock
    });

    it('should display categories initially (grouped)', () => {
        render(<Home />);
        // By default, it shows root categories (groups)
        expect(screen.getByText('groups.basics')).toBeInTheDocument();
        expect(screen.getByText('groups.daily_life')).toBeInTheDocument();
    });

    it('should filter lessons when searching by title', async () => {
        render(<Home />);
        const searchInput = screen.getByTestId('ion-searchbar');

        fireEvent.change(searchInput, { target: { value: 'greetings' } });

        // topics.greetings should be visible
        expect(screen.getByText('topics.greetings')).toBeInTheDocument();
        // topics.animals should NOT be visible
        expect(screen.queryByText('topics.animals')).not.toBeInTheDocument();
    });

    it('should filter lessons when searching by card content', async () => {
        render(<Home />);
        const searchInput = screen.getByTestId('ion-searchbar');

        fireEvent.change(searchInput, { target: { value: 'Dog' } });

        // topics.animals should be visible because it contains Dog
        expect(screen.getByText('topics.animals')).toBeInTheDocument();
        // topics.greetings should NOT be visible
        expect(screen.queryByText('topics.greetings')).not.toBeInTheDocument();
    });

    it('should show no results message when no match found', async () => {
        render(<Home />);
        const searchInput = screen.getByTestId('ion-searchbar');

        fireEvent.change(searchInput, { target: { value: 'NonExistentTerm' } });

        expect(screen.getByText('home.noResults')).toBeInTheDocument();
        expect(screen.queryByText('topics.greetings')).not.toBeInTheDocument();
        expect(screen.queryByText('topics.animals')).not.toBeInTheDocument();
    });
});
