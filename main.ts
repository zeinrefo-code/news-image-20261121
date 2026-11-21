// The World in One Day — Saturday 21 November 2026.
// A newspaper front page summing up the day's world news in one image.
// Revised design: instead of dense columns of small print, the page is one
// bold front page — a dominant engraving-style Lady Justice illustration for
// the lead story (the World Court's genocide verdict on Myanmar), a single
// huge headline plus one short sub-headline, and a bottom strip of four
// large, short secondary headlines. No small body text anywhere.
// The image (entry.png, 1024x1024 PNG) is held in this repository; this
// program deterministically copies it to $MAKEFUN_OUTPUT_DIR/entry.png
// (default /output/entry.png) and then verifies the copy's integrity by
// comparing file sizes. Node 22 standard library only, no network.
// Byte-identical on every run: the output is an exact copy of entry.png.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const srcPath = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outPath = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(srcPath, outPath);

// Integrity check: the delivered file must be a complete, exact-size copy
// of the poster held in this repository — a truncated copy is a hard error.
const srcSize = statSync(srcPath).size;
const outSize = statSync(outPath).size;
if (outSize !== srcSize) {
  throw new Error(
    `Integrity check failed: output is ${outSize} bytes, expected ${srcSize} bytes (exact copy of entry.png).`
  );
}
