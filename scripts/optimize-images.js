import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const CARDS_DIR = path.join(PUBLIC_DIR, 'CardsandBanner');

async function optimizeImage(inputPath, width) {
    const ext = path.extname(inputPath);
    const outputPath = inputPath.replace(ext, '.webp');

    try {
        await sharp(inputPath)
            .resize({ width: width, withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(outputPath);

        console.log(`Optimized: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    } catch (error) {
        console.error(`Error optimizing ${inputPath}:`, error);
    }
}

async function main() {
    console.log('Starting image optimization...');

    // Optimize CardsandBanner images
    if (fs.existsSync(CARDS_DIR)) {
        const files = fs.readdirSync(CARDS_DIR).filter(file => /\.(jpg|jpeg|png)$/i.test(file));
        for (const file of files) {
            await optimizeImage(path.join(CARDS_DIR, file), 800);
        }
    }

    // Optimize root public images (about_us, etc.)
    const publicFiles = fs.readdirSync(PUBLIC_DIR).filter(file => /\.(jpg|jpeg|png)$/i.test(file));
    for (const file of publicFiles) {
        // Optimize about_us images, but maybe skip small icons if needed. 
        // For now, resize all large jpgs to 1200 (hero/banner size)
        if (file.includes('about_us')) {
            await optimizeImage(path.join(PUBLIC_DIR, file), 1200);
        } else if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
            // Other random jpgs
            await optimizeImage(path.join(PUBLIC_DIR, file), 1200);
        }
    }

    console.log('Image optimization complete!');
}

main();
