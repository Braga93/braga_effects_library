import test from "node:test";
import assert from "node:assert/strict";
import { prefersReducedMotion } from "../src/index.js";

test("prefersReducedMotion retorna false fora do navegador", () => {
  assert.equal(prefersReducedMotion(), false);
});

test("API pública de estilos inclui o card de revelação", async () => {
  const { readFile } = await import("node:fs/promises");
  const css = await readFile(new URL("../src/styles.css", import.meta.url), "utf8");
  assert.match(css, /reveal-card\.css/);
});
