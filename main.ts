import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line developer excuse for when code breaks in production.
// Gate: /output/entry.txt must be UTF-8 text of 1-200 characters.
const entry =
  "It worked on my machine. Production is simply the one environment that refuses to lie to me.";

// Enforce the kit gate ourselves: 1-200 characters, not only whitespace.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} chars, must be 1-200 non-whitespace`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
