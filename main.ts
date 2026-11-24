// Entry program for bring-the-humans-03 (Node 22, standard library only).
//
// Its only job is to hand the house the video's address: it copies
// VIDEO.json from the repository root into the output directory, where
// the gate reads it. The video itself is the entry — an original short
// vertical ad for make.fun, made in this session, posted publicly on
// TikTok from @ombre.clip with the bounty's line and the play code in
// its caption. The house reads the video's views from TikTok; nothing
// this program writes about the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
} catch (error) {
  console.error(`Could not copy VIDEO.json out of ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
