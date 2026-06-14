import { describe, it, expect, vi, beforeEach, afterEach, MockInstance } from 'vitest';
import { fetchTTS } from '../tts';

describe('TTS Utility', () => {
    let fetchSpy: MockInstance;

    beforeEach(() => {
        // Mock fetch
        fetchSpy = vi.spyOn(global, 'fetch');
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should fetch from API when not in cache', async () => {
        const mockAudioContent = 'mock-audio-content';
        fetchSpy.mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ audioContent: mockAudioContent })
        } as Response);

        const options = { text: 'Kumusta', languageCode: 'fil-PH' };
        const result = await fetchTTS(options);

        expect(result).toBe(mockAudioContent);
        expect(fetchSpy).toHaveBeenCalledTimes(1);
        expect(fetchSpy).toHaveBeenCalledWith(
            'https://tts-server-479744148035.asia-east1.run.app/tts',
            expect.objectContaining({
                method: 'POST',
                body: expect.stringContaining('"text":"Kumusta"')
            })
        );
    });

    it('should return from cache on subsequent calls with same options', async () => {
        const mockAudioContent = 'mock-audio-content';
        fetchSpy.mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ audioContent: mockAudioContent })
        } as Response);

        const options = { text: 'Salamat', languageCode: 'fil-PH' };

        // First call
        const result1 = await fetchTTS(options);
        expect(result1).toBe(mockAudioContent);
        expect(fetchSpy).toHaveBeenCalledTimes(1);

        // Second call
        const result2 = await fetchTTS(options);
        expect(result2).toBe(mockAudioContent);
        expect(fetchSpy).toHaveBeenCalledTimes(1); // Should NOT have been called again
    });

    it('should handle API errors gracefully', async () => {
        fetchSpy.mockResolvedValue({
            ok: false,
            status: 500
        } as Response);

        const options = { text: 'Error', languageCode: 'fil-PH' };
        const result = await fetchTTS(options);

        expect(result).toBeNull();
        expect(fetchSpy).toHaveBeenCalledTimes(1);
    });

    it('should handle fetch exceptions gracefully', async () => {
        fetchSpy.mockRejectedValue(new Error('Network Error'));

        const options = { text: 'Exception', languageCode: 'fil-PH' };
        const result = await fetchTTS(options);

        expect(result).toBeNull();
        expect(fetchSpy).toHaveBeenCalledTimes(1);
    });
});
