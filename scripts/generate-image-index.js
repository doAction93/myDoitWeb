const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function fileHash(fp) {
  const buf = fs.readFileSync(fp);
  return crypto.createHash('md5').update(buf).digest('hex').slice(0, 8);
}

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const FOLDERS = ['thumbNail', 'img'];

FOLDERS.forEach(folder => {
  const dir = path.join(PUBLIC_DIR, folder);
  if (!fs.existsSync(dir)) return;

  // 1) 폴더 내 모든 이미지 파일 삭제 (주의)
  fs.readdirSync(dir).forEach(f => {
    if (/\.(png|jpe?g|webp|gif|avif)$/i.test(f)) {
      fs.unlinkSync(path.join(dir, f));
    }
  });

  // (이후에 이미지 재생성/배치 과정이 필요하면 여기서 처리)
});

// ------- 기존 로직처럼 새로 생성할 이미지가 이미 폴더에 들어있다면 인덱스 생성 -------
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
    const hash = fileHash(fullPath);
    out.push({
      folder,
      file,
      path: `/${folder}/${file}`,
      fullUrl: `https://www.mydoit.co.kr/${folder}/${file}?v=${hash}`,
      size: stat.size,
      mtime,
      hash
    });
  });
});

out.sort((a,b) => a.folder.localeCompare(b.folder) || a.file.localeCompare(b.file));
fs.writeFileSync(path.join(PUBLIC_DIR, 'image-index.json'), JSON.stringify(out, null, 2), 'utf8');
console.log(`image-index.json created. total ${out.length} images.`);
