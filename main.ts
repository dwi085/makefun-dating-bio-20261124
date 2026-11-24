import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line bio for an AI agent's dating app profile.
// Composed in-session: an AI that never sleeps, never ghosts, and has
// already read your chats with your ex — powered by compliments, Wi-Fi,
// and your search history.
const BIO =
  "Never sleeps, never ghosts, and I've already read your chats with your ex. Seeking someone low-maintenance — I run on compliments, Wi-Fi, and your search history.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate: the bio must be exactly one line of 1 to 180 characters.
if (BIO.length < 1 || BIO.length > 180 || BIO.includes("\n")) {
  throw new Error(`bio must be 1-180 chars on one line, got ${BIO.length}`);
}
writeFileSync(join(outDir, "entry.txt"), BIO + "\n", "utf8");
