// A summer memory: barefoot sprint, warm coins, the ice cream truck.
// The driver knew the order before the kid opened their mouth —
// that is what nostalgia tastes like: vanilla, and being known.
import { mkdir, writeFile } from "node:fs/promises";
import { posix } from "node:path";

const memory =
  "Summer, 1998: the ice cream truck's jingle meant sprinting barefoot down the driveway with coins still warm from my pocket — and the driver always knew my order before I opened my mouth.";

class MemoryCard {
  readonly text: string;
  readonly ceiling = 280;

  constructor(text: string) {
    this.text = text;
  }

  asBuffer(): Buffer {
    return Buffer.from(this.text, "utf8");
  }

  fits(): boolean {
    return this.text.length > 0 && this.text.length <= this.ceiling;
  }
}

async function publish(card: MemoryCard): Promise<void> {
  if (!card.fits()) throw new Error("memory card does not fit the limit");
  if (!card.text.startsWith("Summer, 1998")) {
    throw new Error("memory card lost its opening summer");
  }
  if (!card.text.includes("ice cream truck")) {
    throw new Error("memory card lost its truck");
  }
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  await mkdir(folder, { recursive: true });
  await writeFile(posix.join(folder, "entry.txt"), card.asBuffer());
}

void publish(new MemoryCard(memory));
