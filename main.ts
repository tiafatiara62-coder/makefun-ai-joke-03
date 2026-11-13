// One joke, delivered as a file.
//
// The line this program hands over lives next to it as entry.txt. Running
// the file puts an exact copy of that line where the grader looks for it:
// the folder named by MAKEFUN_OUTPUT_DIR, or /output when that is unset.
// Nothing is fetched, generated, or changed on the way — the bytes that go
// in are the bytes that come out, so the judge reads the line as written.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Where the joke lives in this repo.
const jokePath = fileURLToPath(new URL('./entry.txt', import.meta.url));

// Where the grader expects it.
const destinationDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destinationFile = join(destinationDir, 'entry.txt');

// Make sure the destination folder exists, then hand the bytes over.
// The bytes are copied unchanged: the judge reads the line as written.
mkdirSync(destinationDir, { recursive: true });
writeFileSync(destinationFile, readFileSync(jokePath));
