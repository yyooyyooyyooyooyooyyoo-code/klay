// Converts PNG/JPG images in public/images/blog/ to web-ready WebP files.
//
//   npm run images
//
// For every `name.png|jpg|jpeg` it writes `name.webp` (max 1600px wide) and `name-800.webp`
// (800px wide, used on phones via srcset), then deletes the original.
// File names should be lowercase-kebab-case, e.g. `uae-golden-visa-guide.png`.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'public', 'images', 'blog');
const SIZES = [
  { suffix: '', width: 1600, quality: 78 },
  { suffix: '-800', width: 800, quality: 74 },
];

const files = (await fs.readdir(dir)).filter((file) => /\.(png|jpe?g)$/i.test(file));
if (!files.length) {
  console.log('No PNG/JPG images to optimize in public/images/blog/.');
  process.exit(0);
}

let before = 0;
let after = 0;
let converted = 0;
for (const file of files) {
  const source = path.join(dir, file);
  const name = file.replace(/\.(png|jpe?g)$/i, '');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) {
    console.warn(`Skipping "${file}": rename it to lowercase-kebab-case first.`);
    continue;
  }
  const input = await fs.readFile(source);
  before += input.length;
  for (const size of SIZES) {
    const output = path.join(dir, `${name}${size.suffix}.webp`);
    const data = await sharp(input)
      .rotate() // apply the EXIF orientation (phone photos), since the metadata is not kept
      .resize({ width: size.width, withoutEnlargement: true })
      .webp({ quality: size.quality, effort: 6 })
      .toBuffer();
    await fs.writeFile(output, data);
    if (!size.suffix) after += data.length;
  }
  await fs.unlink(source);
  converted += 1;
}
const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1);
console.log(`Optimized ${converted} of ${files.length} images: ${mb(before)} MB -> ${mb(after)} MB (plus 800px versions).`);
