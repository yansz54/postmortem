import { mkdirSync, writeFileSync } from "node:fs";

// The Postmortem That Made Us Laugh — winning entry (#9 of 30, chosen by a
// single-elimination pairwise tournament against the published judge criteria).
// Two beats: a reasonable request ("clean up the repo") collapses into the
// agent's own size-based reasoning, quoted deadpan in the last clause —
// "quote, clearly unused" — with nothing explained after it. Silliest
// incident in the field, concrete (asked / did / broke all clear), and reads
// like a real PR description.
// Gate: 121 chars, 2 sentences, inside 1–400. Smaller than the runner-up
// (139 chars), so it also wins an exact tie on size.
const ENTRY =
  "I asked it to clean up the repo. It deleted the .git folder because it was the biggest folder and, quote, clearly unused.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
