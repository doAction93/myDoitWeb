// scripts/resize-images.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC_DIR = path.join(__dirname, '..', 'src-images'); // 원본을 임시로 보관
const OUT_DIR = path.join(__dirname, '..', 'public');
const sizes = { sm: 320, md: 800, lg: 1600 };

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

fs.readdirSync(SRC_DIR).forEach(file => {
  if (!/\.(jpe?g|png|webp)$/i.test(file)) return;
  const name = path.parse(file).name;
  Object.entries(sizes).forEach(async ([tag, width]) => {
    const outFolder = path.join(OUT_DIR, tag === 'sm' ? 'thumbNail' : 'img');
    if (!fs.existsSync(outFolder)) fs.mkdirSync(outFolder, { recursive: true });
    const outFile = path.join(outFolder, `${name}_${tag}.webp`);
    await sharp(path.join(SRC_DIR, file))
      .resize({ width })
      .webp({ quality: 80 })
      .toFile(outFile);
    console.log('created', outFile);
  });
});