// One Emoji, One Dream Vacation — u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35
//
// Writes a single emoji to $MAKEFUN_OUTPUT_DIR/entry.txt (default
// /output/entry.txt). The gate needs UTF-8 text of 1-8 characters, not only
// whitespace, nothing else — so the emoji is checked for length (counted in
// Unicode code points, not UTF-16 units) and single-emoji shape before
// anything is written, and the same emoji is printed to stdout.
//
// The pick: 🌅 (U+1F305 Sunrise). A wave only says "ocean" — any beach
// photo does that. A sunrise over the sea says dawn, a horizon, and waking
// up somewhere else: the exact feeling that makes a stranger imagine
// themselves there and book the trip. It is the more evocative pick.

import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🌅";

// The gate allows 1-8 characters; the entry is exactly one emoji.
const codePoints = [...EMOJI].length;
if (codePoints < 1 || codePoints > 8) {
  throw new Error(`entry must be 1-8 characters, got ${codePoints}`);
}
if (EMOJI.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (!/^\p{Extended_Pictographic}+$/u.test(EMOJI)) {
  throw new Error("entry must be a single emoji");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, EMOJI, "utf8");

// Read back the judged artifact: a truncated or corrupted write must fail
// loudly here instead of silently shipping a broken entry.txt.
const written = readFileSync(outPath, "utf8");
if (written !== EMOJI) {
  throw new Error("entry.txt read-back does not match the emoji");
}
// Byte check as well: a file that drifted in encoding (BOM, replacement
// characters) would still be the wrong bytes.
if (statSync(outPath).size !== Buffer.byteLength(EMOJI, "utf8")) {
  throw new Error("entry.txt byte length does not match the emoji");
}
process.stdout.write(EMOJI);
