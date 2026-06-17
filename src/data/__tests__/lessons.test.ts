/**
 * Unit tests for Lessons data structure
 * Validates the integrity and format of lesson data
 */
import { describe, it, expect } from 'vitest';
import { lessons, allCards, Category, Flashcard } from '../../data/lessons';

describe('Lessons Data Structure', () => {
    it('should export allCards as a flattened array of all lesson cards', () => {
        const expectedCount = lessons.reduce((acc, l) => acc + l.cards.length, 0);
        expect(Array.isArray(allCards)).toBe(true);
        expect(allCards.length).toBe(expectedCount);

        // Verify allCards contains actual card objects
        if (allCards.length > 0) {
            expect(allCards[0]).toHaveProperty('cantonese');
            expect(allCards[0]).toHaveProperty('english');
        }
    });

    describe('lessons array', () => {
        it('should be a non-empty array', () => {
            expect(Array.isArray(lessons)).toBe(true);
            expect(lessons.length).toBeGreaterThan(0);
        });

        it('should have all required lesson properties', () => {
            lessons.forEach((lesson: Category) => {
                expect(lesson).toHaveProperty('id');
                expect(lesson).toHaveProperty('titleKey');
                expect(lesson).toHaveProperty('cards');
                expect(typeof lesson.id).toBe('string');
                expect(typeof lesson.titleKey).toBe('string');
                expect(Array.isArray(lesson.cards)).toBe(true);
            });
        });

        it('should have unique lesson IDs', () => {
            const ids = lessons.map(l => l.id);
            const uniqueIds = new Set(ids);
            expect(uniqueIds.size).toBe(ids.length);
        });
    });

    describe('flashcards', () => {
        it('should have all required card properties', () => {
            lessons.forEach((lesson) => {
                lesson.cards.forEach((card: Flashcard) => {
                    expect(card).toHaveProperty('id');
                    expect(card).toHaveProperty('cantonese');
                    expect(card).toHaveProperty('english');
                    expect(typeof card.id).toBe('string');
                    expect(typeof card.cantonese).toBe('string');
                    expect(typeof card.english).toBe('string');
                });
            });
        });

        it('should have unique card IDs across all lessons', () => {
            const allCardIds: string[] = [];
            lessons.forEach((lesson) => {
                lesson.cards.forEach((card: Flashcard) => {
                    allCardIds.push(card.id);
                });
            });
            const uniqueIds = new Set(allCardIds);
            expect(uniqueIds.size).toBe(allCardIds.length);
        });

        it('should have non-empty cantonese and english text', () => {
            lessons.forEach((lesson) => {
                lesson.cards.forEach((card: Flashcard) => {
                    expect(card.cantonese.trim().length).toBeGreaterThan(0);
                    expect(card.english.trim().length).toBeGreaterThan(0);
                });
            });
        });

        it('should have optional example property with correct format', () => {
            lessons.forEach((lesson) => {
                lesson.cards.forEach((card: Flashcard) => {
                    if (card.example) {
                        expect(typeof card.example.cantonese).toBe('string');
                        expect(typeof card.example.english).toBe('string');
                        expect(card.example.cantonese.length).toBeGreaterThan(0);
                        expect(card.example.english.length).toBeGreaterThan(0);
                        expect(card.example.zhTW).toBeDefined();
                        expect(typeof card.example.zhTW).toBe('string');
                        expect(card.example.zhTW!.trim().length).toBeGreaterThan(0);
                        expect(card.example.zhCN).toBeDefined();
                        expect(typeof card.example.zhCN).toBe('string');
                        expect(card.example.zhCN!.trim().length).toBeGreaterThan(0);
                    }
                });
            });
        });
    });

    describe('lesson groups', () => {
        it('should have group property when defined', () => {
            const lessonsWithGroups = lessons.filter(l => l.group);
            lessonsWithGroups.forEach((lesson) => {
                expect(typeof lesson.group).toBe('string');
                expect(lesson.group!.length).toBeGreaterThan(0);
            });
        });
    });
});
