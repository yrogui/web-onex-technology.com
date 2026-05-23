const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');
const FR_DIR = path.join(OUT_DIR, 'fr');

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

if (!fs.existsSync(FR_DIR)) {
  console.error('ERROR: out/fr/ does not exist. Build may have failed.');
  process.exit(1);
}

console.log('Copying out/fr/* to out/ (FR locale at root)...');

const entries = fs.readdirSync(FR_DIR);
let count = 0;
for (const entry of entries) {
  const src = path.join(FR_DIR, entry);
  const dest = path.join(OUT_DIR, entry);
  copyRecursive(src, dest);
  count++;
}

console.log(`Copied ${count} entries from out/fr/ to out/`);
console.log('FR now served at /, /services, /a-propos, etc.');
console.log('EN remains at /en/, AR at /ar/');
