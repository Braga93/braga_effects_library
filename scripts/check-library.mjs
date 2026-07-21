import { access, readFile } from "node:fs/promises";

const required = ["src/index.js", "src/styles.css", "README.md", "package.json"];
await Promise.all(required.map((file) => access(file)));
const packageJson = JSON.parse(await readFile("package.json", "utf8"));
if (!packageJson.exports?.["."] || !packageJson.exports?.["./styles.css"]) {
  throw new Error("package.json sem exportações públicas obrigatórias.");
}
console.log("Estrutura da biblioteca válida.");
