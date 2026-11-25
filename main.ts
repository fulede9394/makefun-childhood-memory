// A summer memory: barefoot sprint, warm coins, the ice cream truck that knew your order.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Summer, 1998: the ice cream truck's jingle meant sprinting barefoot down the driveway with coins still warm from my pocket — and the driver always knew my order before I opened my mouth.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
