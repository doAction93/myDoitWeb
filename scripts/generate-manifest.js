// scripts/generate-manifest.js
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '..', 'public', 'img');
const outFile = path.join(imgDir, 'images.json');

if (!fs.existsSync(imgDir)) {
  console.error('public/img 폴더가 없습니다.');
  process.exit(1);
}

const files = fs.readdirSync(imgDir).filter(f => {
  // 원하는 확장자 필터
  return /\.(png|jpg|jpeg|webp|gif)$/i.test(f);
});

// manifest: [{ fileName, url }]
const manifest = files.map(f => ({
  fileName: f,
  url: `/img/${encodeURIComponent(f)}`
}));

fs.writeFileSync(outFile, JSON.stringify(manifest, null, 2), 'utf8');
console.log(`images.json 생성: ${manifest.length}개 항목`);
