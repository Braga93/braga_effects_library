import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("catálogo demonstra o alternador de tema", async () => {
  const html = await readFile(new URL("../examples/index.html", import.meta.url), "utf8");
  assert.match(html, /bfx-alternador-tema-entrada/);
  assert.match(html, /criarAlternadorTema/);
  assert.match(html, /Pílula vermelha/);
  assert.match(html, /Pílula azul/);
});

test("catálogo demonstra três cards de revelação", async () => {
  const html = await readFile(new URL("../examples/index.html", import.meta.url), "utf8");
  const matches = html.match(/class="bfx-card-revelacao"/g) ?? [];
  assert.equal(matches.length, 3);
  assert.match(html, /Cards de revelação/);
});

test("catálogo demonstra a textura granulada", async () => {
  const html = await readFile(new URL("../examples/index.html", import.meta.url), "utf8");
  assert.match(html, /bfx-textura-granulada/);
});

test("catálogo usa nomes em português", async () => {
  const html = await readFile(new URL("../examples/index.html", import.meta.url), "utf8");
  assert.match(html, /bfx-painel-vidro/);
  assert.match(html, /bfx-chuva-matrix/);
  assert.match(html, /bfx-texto-pulsante/);
});
