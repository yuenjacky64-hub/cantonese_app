/**
 * Audio Generation Script
 *
 * This script fetches all Cantonese words and example sentences from lessons.json
 * and generates audio files using the Google Cloud TTS serverless API. The audio
 * files are saved as MP3 files in the public/audio directory for offline use.
 *
 * Generates both normal speed (1.0x) and slow speed (0.6x) versions.
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
 * @param {number} speakingRate - Speaking rate (1.0 = normal, 0.6 = slow)
 */
async function generateAudio(text, filename, speakingRate = 1.0) {
    const suffix = speakingRate < 1.0 ? '_slow' : '';
    const filePath = path.join(OUTPUT_DIR, `${filename}${suffix}.mp3`);

    // Skip if file already exists
    if (fs.existsSync(filePath)) {
        return { status: 'skipped', filename: `${filename}${suffix}` };
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
                speakingRate,
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
            console.log(`✅ Generated: ${filename}${suffix} (${speakingRate}x)`);
            return { status: 'success', filename: `${filename}${suffix}` };
        }
    } catch (error) {
        console.error(`❌ Failed: ${filename}${suffix} - ${error.message}`);
        return { status: 'failed', filename: `${filename}${suffix}` };
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
    console.log('🎙️  Cantonese Audio Generator (Normal + Slow)');
    console.log('==========================================\n');

    // Extract all Cantonese words
    const words = extractCantoneseWords();
    console.log(`📚 Found ${words.size} unique Cantonese words/phrases`);
    console.log(`📦 Will generate ${words.size * 2} audio files (normal + slow)\n`);

    let normalSuccess = 0, normalSkipped = 0, normalFailed = 0;
    let slowSuccess = 0, slowSkipped = 0, slowFailed = 0;

    // Process words one at a time to avoid rate limiting
    for (const [filename, text] of words) {
        // Generate normal speed (1.0x)
        const normalResult = await generateAudio(text, filename, 1.0);
        if (normalResult.status === 'success') normalSuccess++;
        else if (normalResult.status === 'skipped') normalSkipped++;
        else normalFailed++;

        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 150));

        // Generate slow speed (0.6x)
        const slowResult = await generateAudio(text, filename, 0.6);
        if (slowResult.status === 'success') slowSuccess++;
        else if (slowResult.status === 'skipped') slowSkipped++;
        else slowFailed++;

        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 150));
    }

    console.log('\n==========================================');
    console.log('📢 Normal Speed (1.0x):');
    console.log(`   ✅ Generated: ${normalSuccess}`);
    console.log(`   ⏭️  Skipped: ${normalSkipped}`);
    console.log(`   ❌ Failed: ${normalFailed}`);
    console.log('\n🐢 Slow Speed (0.6x):');
    console.log(`   ✅ Generated: ${slowSuccess}`);
    console.log(`   ⏭️  Skipped: ${slowSkipped}`);
    console.log(`   ❌ Failed: ${slowFailed}`);
    console.log(`\n📁 Output: ${OUTPUT_DIR}`);

    // Generate audio map JSON file for the app to use.
    // Shape: { [text]: { normal: path, slow: path } } — matches ListeningQuiz lookup.
    const audioMap = {};
    for (const [filename, text] of words) {
        audioMap[text] = {
            normal: `/audio/${filename}.mp3`,
            slow: `/audio/${filename}_slow.mp3`,
        };
    }

    const mapPath = path.join(OUTPUT_DIR, 'audio-map.json');
    fs.writeFileSync(mapPath, JSON.stringify(audioMap, null, 2));
    console.log(`\n📋 Audio map saved to: ${mapPath}`);
}

main().catch(console.error);
