# Braga Effects

Biblioteca privada de efeitos CSS e utilitários JavaScript extraídos dos projetos Matrix, Esnete e Nike. A API recomendada usa nomes em português.

## Abrir o catálogo

```bash
npm install
npm run showcase
```

Acesse `http://localhost:4173`.

## Usar em um projeto

```bash
npm install ../braga-effects-library
```

```js
import "@braga/effects/styles.css";
import { criarAlternadorTema } from "@braga/effects";
```

```html
<article class="bfx-painel-vidro bfx-elevar-hover">Conteúdo</article>
```

## Documentação

- `docs/CATALOGO.md`: nomes e efeitos.
- `docs/GUIA-GITHUB.md`: GitHub e uso em qualquer computador.
- `docs/AUDITORIA.md`: conferência contra os projetos originais.
- `docs/FLUXO-DIARIO.md`: rotina de manutenção.

Os nomes antigos em inglês continuam funcionando para compatibilidade.
