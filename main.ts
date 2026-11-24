import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One satirical sentence, 1-320 chars: the lawmakers vote to govern AI while
// their own IT desk has to explain that a PDF is not a kind of printer.
// Setup (authority) first, undercut (the file) last, punch on the final words.
const roast =
  "Congress voted 412–9 to regulate artificial intelligence on the same afternoon its IT desk spent four hours explaining to the bill's author that a PDF is not a kind of printer.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), roast, "utf8");
