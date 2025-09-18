const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const FOLDERS = ['thumbNail', 'img'];

const out = [];

FOLDERS.forEach(folder => {
  const dir = path.join(PUBLIC_DIR, folder);
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    if (!/\.(png|jpe?g|webp|gif|avif)$/i.test(file)) return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    const mtime = stat.mtimeMs;
    out.push({
      folder,
      file,
      path: `/${folder}/${file}`,
      fullUrl: `https://www.mydoit.co.kr/${folder}/${file}?v=${mtime}`,
      size: stat.size,
      mtime
    });
  });
});

out.sort((a,b) => a.folder.localeCompare(b.folder) || a.file.localeCompare(b.file));
fs.writeFileSync(path.join(PUBLIC_DIR, 'image-index.json'), JSON.stringify(out, null, 2), 'utf8');
console.log(`image-index.json created. total ${out.length} images.`);