/**
 * Audio Generation Script
 *
 * This script fetches all Cantonese words and example sentences from lessons.json
 * and generates audio files using the Google Cloud TTS serverless API. The audio
 * files are saved as MP3 files in the public/audio directory for offline use.
 *
 * Slow playback is handled client-side via HTMLAudioElement.playbackRate, so no
 * separate slow audio files are generated.
 *
 * Usage: node scripts/generate-audio.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TTS_API_URL = 'https://tts-server-446058742621.asia-east1.run.app/tts';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'audio');

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Sanitize filename - remove special characters and convert to lowercase
 */
function sanitizeFilename(text) {
    return text
        .toLowerCase()
        .replace(/[?!.,;:'"()\/\\]/g, '')
        .replace(/\s+/g, '_')
        .trim();
}

/**
 * Fetch audio from TTS API and save to file
 * @param {string} text - Text to convert to speech
 * @param {string} filename - Output filename (without extension)
 */
async function generateAudio(text, filename) {
    const filePath = path.join(OUTPUT_DIR, `${filename}.mp3`);

    // Skip if file already exists
    if (fs.existsSync(filePath)) {
        return { status: 'skipped', filename };
    }

    try {
        const response = await fetch(TTS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text,
                languageCode: 'yue-HK',
                voiceName: 'yue-HK-Standard-A',
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (data.audioContent) {
            // Decode base64 and save to file
            const audioBuffer = Buffer.from(data.audioContent, 'base64');
            fs.writeFileSync(filePath, audioBuffer);
            console.log(`✅ Generated: ${filename}`);
            return { status: 'success', filename };
        }
    } catch (error) {
        console.error(`❌ Failed: ${filename} - ${error.message}`);
        return { status: 'failed', filename };
    }
}

/**
 * Parse lessons.json to extract all Cantonese words and example sentences
 */
function extractCantoneseWords() {
    const lessonsPath = path.join(__dirname, '..', 'src', 'data', 'lessons.json');
    const content = JSON.parse(fs.readFileSync(lessonsPath, 'utf-8'));

    const words = new Map();

    const addWord = (raw) => {
        if (!raw || typeof raw !== 'string') return;
        const trimmed = raw.trim();
        if (!trimmed) return;
        const filename = sanitizeFilename(trimmed);
        if (filename && !words.has(filename)) {
            words.set(filename, trimmed);
        }
    };

    for (const category of content) {
        for (const card of category.cards) {
            addWord(card.cantonese);
            if (card.example) {
                addWord(card.example.cantonese);
            }
        }
    }

    return words;
}

/**
 * Main function
 */
async function main() {
    console.log('🎙️  Cantonese Audio Generator');
    console.log('==========================================\n');

    // Extract all Cantonese words
    const words = extractCantoneseWords();
    console.log(`📚 Found ${words.size} unique Cantonese words/phrases`);
    console.log(`📦 Will generate ${words.size} audio files\n`);

    let normalSuccess = 0, normalSkipped = 0, normalFailed = 0;

    // Process words one at a time to avoid rate limiting
    for (const [filename, text] of words) {
        const normalResult = await generateAudio(text, filename);
        if (normalResult.status === 'success') normalSuccess++;
        else if (normalResult.status === 'skipped') normalSkipped++;
        else normalFailed++;

        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 150));
    }

    console.log('\n==========================================');
    console.log(`   ✅ Generated: ${normalSuccess}`);
    console.log(`   ⏭️  Skipped: ${normalSkipped}`);
    console.log(`   ❌ Failed: ${normalFailed}`);
    console.log(`\n📁 Output: ${OUTPUT_DIR}`);

    // Generate audio map JSON file for the app to use.
    // Shape: { [text]: { normal: path } } — matches ListeningQuiz lookup.
    const audioMap = {};
    for (const [filename, text] of words) {
        audioMap[text] = {
            normal: `/audio/${filename}.mp3`,
        };
    }

    const mapPath = path.join(OUTPUT_DIR, 'audio-map.json');
    fs.writeFileSync(mapPath, JSON.stringify(audioMap, null, 2));
    console.log(`\n📋 Audio map saved to: ${mapPath}`);
}

main().catch(console.error);
