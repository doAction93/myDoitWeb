// scripts/cleanup-stale-hash.js
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function fileHash(fp) {
  const buf = fs.readFileSync(fp);
  return crypto.createHash('md5').update(buf).digest('hex').slice(0, 8);
}

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const FOLDERS = ['thumbNail', 'img'];
const ARCHIVE_BASE = path.join(PUBLIC_DIR, '_archive_hashed');
fs.mkdirSync(ARCHIVE_BASE, { recursive: true });

// hashed file pattern: base.<8hex>.<ext>
const HASHED_RE = /^(.+)\.([0-9a-f]{8})(\.[^.]+)$/i;

FOLDERS.forEach(folder => {
  const dir = path.join(PUBLIC_DIR, folder);
  if (!fs.existsSync(dir)) return;

  fs.readdirSync(dir).forEach(fname => {
    const m = fname.match(HASHED_RE);
    if (!m) return; // 해시 형식 아님

    const base = m[1];       // 원본 이름(확장자 제외)
    const hashPart = m[2];   // 파일에 붙은 hash
    const ext = m[3];        // .webp 등
    const hashedPath = path.join(dir, fname);
    const originalPath = path.join(dir, base + ext);

    if (fs.existsSync(originalPath)) {
      const curHash = fileHash(originalPath);
      if (curHash !== hashPart) {
        // 원본이 존재하지만 현재 해시와 다르면 오래된 해시 파일 -> 아카이브
        const destDir = path.join(ARCHIVE_BASE, folder);
        fs.mkdirSync(destDir, { recursive: true });
        fs.renameSync(hashedPath, path.join(destDir, fname));
        console.log('archived old hash:', path.join(folder, fname));
      }
    } else {
      // 원본이 없으면 orphan (더 이상 참조 안 될 가능성 높음) -> 아카이브/orphan으로 이동
      const destDir = path.join(ARCHIVE_BASE, folder, 'orphan');
      fs.mkdirSync(destDir, { recursive: true });
      fs.renameSync(hashedPath, path.join(destDir, fname));
      console.log('archived orphan hashed file:', path.join(folder, fname));
    }
  });
});
