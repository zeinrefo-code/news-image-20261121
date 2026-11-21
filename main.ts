// The World in One Day — Saturday 21 November 2026.
// A newspaper front page summing up the day's world news in one image.
// The image (entry.png, 1024x1024 PNG) is held in this repository; this
// program deterministically copies it to $MAKEFUN_OUTPUT_DIR/entry.png
// (default /output/entry.png). Node 22 standard library only, no network.
// Byte-identical on every run: the output is an exact copy of entry.png.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
