import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  alternarClasse,
  criarEfeitoOnda,
  criarAlternadorTema,
  prefereMovimentoReduzido
} from "../src/index.js";

test("API JavaScript em português está exportada", () => {
  assert.equal(typeof alternarClasse, "function");
  assert.equal(typeof criarEfeitoOnda, "function");
  assert.equal(typeof criarAlternadorTema, "function");
  assert.equal(typeof prefereMovimentoReduzido, "function");
});

test("API CSS em português está presente", async () => {
  const arquivos = [
    "glass-panel.css",
    "theme-toggle.css",
    "reveal-card.css",
    "text-pulse.css",
    "focus-ring.css"
  ];
  const textos = await Promise.all(
    arquivos.map((nome) => readFile(new URL(`../src/css/${nome}`, import.meta.url), "utf8"))
  );
  const css = textos.join("\n");
  for (const classe of [
    "bfx-painel-vidro",
    "bfx-alternador-tema",
    "bfx-card-revelacao",
    "bfx-texto-pulsante",
    "bfx-foco-visivel"
  ]) {
    assert.match(css, new RegExp(classe));
  }
});
