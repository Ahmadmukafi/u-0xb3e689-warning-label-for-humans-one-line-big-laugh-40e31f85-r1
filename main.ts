import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// 104 chars: label wording first, then the one hazard every reader recognises.
const label = "WARNING: Contains one human. Prone to sudden silence after remembering something embarrassing from 2009.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), label, "utf8");
