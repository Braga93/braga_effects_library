import { appendFile, writeFile, access } from "node:fs/promises";

const rawName = process.argv[2];
if (!rawName || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(rawName)) {
  console.error("Uso: npm run new:effect -- nome-em-kebab-case");
  process.exit(1);
}

const file = `src/css/${rawName}.css`;
try {
  await access(file);
  console.error(`O efeito ${rawName} já existe.`);
  process.exit(1);
} catch {}

const className = `.bfx-${rawName}`;
await writeFile(file, `${className} {\n  /* Adicione o efeito aqui. */\n}\n`, "utf8");
await appendFile("src/styles.css", `@import "./css/${rawName}.css";\n`, "utf8");
console.log(`Criado: ${file}\nClasse inicial: ${className}`);
