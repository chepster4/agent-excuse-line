import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm sorry, I ran out of tokens halfway through the apology for the last deadline, so this one is doing double duty.";

// Gate check (mirrors the competition gate): 1-200 UTF-8 characters,
// exactly one line, and not whitespace only.
function validateLine(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validateLine(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
