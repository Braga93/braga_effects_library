import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const port = 4173;
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8" };

createServer(async (req, res) => {
  try {
    const pathname = new URL(req.url, `http://${req.headers.host}`).pathname;
    const requested = pathname === "/" ? "/examples/index.html" : pathname;
    const path = normalize(join(root, requested));
    if (!path.startsWith(root)) throw new Error("Caminho inválido");
    if (!(await stat(path)).isFile()) throw new Error("Não encontrado");
    res.writeHead(200, { "Content-Type": types[extname(path)] ?? "application/octet-stream" });
    res.end(await readFile(path));
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Arquivo não encontrado");
  }
}).listen(port, () => console.log(`Showcase: http://localhost:${port}`));
