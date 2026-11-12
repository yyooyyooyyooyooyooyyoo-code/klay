// Build favicons from the green "K" mark of the original logo.
const fs = require('fs');
const path = require('path');
const root = process.argv[2] ?? path.resolve(__dirname, '..');
const sharp = require(path.join(root, 'node_modules', 'sharp'));
sharp.cache(false);

const logo = process.argv[3] ?? path.join(root, 'docs', 'brand', 'klay-logo-original.png');
const pub = path.join(root, 'public');

(async () => {
  // The K mark is the first opaque column run of the 864x297 logo (x 0..293, full height).
  // Detect its exact bounding box so the mark is centred, then pad to a square white tile.
  const { data, info } = await sharp(logo).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const alphaAt = (x, y) => data[(y * info.width + x) * info.channels + 3];
  const columnHasInk = (x) => { for (let y = 0; y < info.height; y++) if (alphaAt(x, y) > 0) return true; return false; };
  let left = 0;
  while (left < info.width && !columnHasInk(left)) left++;
  let right = left;
  while (right + 1 < info.width && columnHasInk(right + 1)) right++;
  let top = 0, bottom = info.height - 1;
  const rowHasInk = (y) => { for (let x = left; x <= right; x++) if (alphaAt(x, y) > 0) return true; return false; };
  while (top < bottom && !rowHasInk(top)) top++;
  while (bottom > top && !rowHasInk(bottom)) bottom--;
  const mark = await sharp(logo).extract({ left, top, width: right - left + 1, height: bottom - top + 1 }).toBuffer();
  console.log(`K mark bbox: x ${left}..${right}, y ${top}..${bottom}`);
  const tile = async (size, padding, rounded) => {
    const inner = Math.round(size * (1 - padding * 2));
    const k = await sharp(mark).resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
    const radius = rounded ? Math.round(size * 0.22) : 0;
    const bg = Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="#ffffff"/></svg>`);
    const offset = Math.round((size - inner) / 2);
    return sharp(bg).composite([{ input: k, left: offset, top: offset }]).png({ compressionLevel: 9 }).toBuffer();
  };
  const png48 = await tile(48, 0.1, true);
  const png32 = await tile(32, 0.08, true);
  const png16 = await tile(16, 0.04, true);
  fs.writeFileSync(path.join(pub, 'favicon-48.png'), png48);
  fs.writeFileSync(path.join(pub, 'apple-touch-icon.png'), await tile(180, 0.14, false));
  fs.writeFileSync(path.join(pub, 'icon-192.png'), await tile(192, 0.14, true));
  fs.writeFileSync(path.join(pub, 'icon-512.png'), await tile(512, 0.14, true));

  // favicon.ico with PNG-encoded 16/32/48 entries
  const images = [[16, png16], [32, png32], [48, png48]];
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(([size, data], i) => {
    const e = 6 + i * 16;
    header.writeUInt8(size, e);
    header.writeUInt8(size, e + 1);
    header.writeUInt8(0, e + 2);
    header.writeUInt8(0, e + 3);
    header.writeUInt16LE(1, e + 4);
    header.writeUInt16LE(32, e + 6);
    header.writeUInt32LE(data.length, e + 8);
    header.writeUInt32LE(offset, e + 12);
    offset += data.length;
  });
  fs.writeFileSync(path.join(pub, 'favicon.ico'), Buffer.concat([header, ...images.map(([, d]) => d)]));
  fs.writeFileSync(path.join(pub, 'site.webmanifest'), `${JSON.stringify({
    name: 'Klay Consultants',
    short_name: 'Klay',
    start_url: '/',
    scope: '/',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#0C2D48',
    background_color: '#ffffff',
    display: 'browser',
  }, null, 2)}\n`);
  console.log('favicons written');
})();
