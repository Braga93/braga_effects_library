# Braga Effects

Biblioteca de efeitos CSS e utilitários JavaScript para quem quer criar interfaces bonitas, mas não sabe por onde começar.

[![Validar biblioteca](https://github.com/Braga93/braga_effects_library/actions/workflows/validate.yml/badge.svg)](https://github.com/Braga93/braga_effects_library/actions/workflows/validate.yml)
![Licença MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-c9a84c)
![Node 20+](https://img.shields.io/badge/node-%E2%89%A520-339933)

## Por que ela existe

Eu criei esta biblioteca pensando em quem eu era no começo: perdido e sem rota. Eu me perguntava quais efeitos usar, quais combinações de CSS fazer e o que combina com o quê.

Aqui estão as minhas ideias, prontas para usar. A ideia é ser um ponto de partida: você vê o que é possível, copia o caminho e depois cria o seu.

## Para quem é

Para iniciantes e para quem já tem alguma prática. Tem efeitos simples para aprender a base e efeitos de acabamento profissional para deixar o projeto com cara de produto.

## Efeitos disponíveis

São 26 efeitos CSS, todos com nomes em português.

| Grupo | Efeito | Classe |
|---|---|---|
| **Superfícies e cards** | Painel de vidro | `bfx-painel-vidro` |
| | Borda brilhante | `bfx-borda-brilhante` |
| | Card com zoom de imagem | `bfx-card-zoom-imagem` |
| | Sobreposição no card | `bfx-card-sobreposicao` |
| | Card flutuante | `bfx-card-flutuante` |
| | Card de revelação | `bfx-card-revelacao` |
| | Palco de produto | `bfx-palco-produto` |
| **Botões e links** | Botão com preenchimento | `bfx-botao-preenchimento` |
| | Botão contorno com brilho | `bfx-botao-contorno-brilho` |
| | Botão cibernético | `bfx-botao-cibernetico` |
| | Botão de ícone | `bfx-botao-icone` |
| | Link com seta móvel | `bfx-link-seta` |
| | Sublinhado animado | `bfx-link-sublinhado` |
| | Busca cápsula | `bfx-busca-capsula` |
| **Fundos e texturas** | Textura granulada | `bfx-textura-granulada` |
| | Fundo holofote | `bfx-fundo-holofote` |
| | Chuva Matrix | `bfx-chuva-matrix` |
| **Movimento** | Elevação ao passar o mouse | `bfx-elevar-hover` |
| | Entrada suave | `bfx-entrada-suave` |
| | Faixa infinita | `bfx-faixa-infinita` + `bfx-faixa-infinita-trilho` |
| | Cubo giratório 3D | `bfx-cubo-giratorio` |
| | Texto pulsante | `bfx-texto-pulsante` |
| **Texto** | Sobretítulo com linha | `bfx-sobretitulo` |
| **Tema** | Alternador de tema | `bfx-alternador-tema` e `bfx-escopo-tema` |
| | Conteúdo exclusivo por tema | `bfx-apenas-tema-a` / `bfx-apenas-tema-b` |
| **Acessibilidade** | Foco visível | `bfx-foco-visivel` |

A lista completa, com detalhes de cada efeito, está em [`docs/CATALOGO.md`](docs/CATALOGO.md).

## Instalação

```bash
npm install @freak1d/effects
```

## Como usar

**1. Importe os estilos** (em projetos com bundler, como Vite):

```js
import "@freak1d/effects/styles.css";
```

Sem bundler, aponte direto para o arquivo:

```html
<link rel="stylesheet" href="node_modules/@freak1d/effects/src/styles.css">
```

**2. Coloque as classes no HTML:**

```html
<article class="bfx-painel-vidro bfx-elevar-hover">
  Conteúdo
</article>
```

**3. Se precisar de comportamento, use os utilitários JavaScript:**

```js
import { criarAlternadorTema } from "@freak1d/effects";

const interruptor = document.querySelector("#tema");
criarAlternadorTema(interruptor, { scope: document.body });
```

## Combos que funcionam bem

Montar um efeito sozinho é fácil. O difícil é fazer vários conviverem na mesma página, e é aí que mora o quebra-cabeça. Estas combinações já estão funcionando no catálogo:

- **Card de vidro que sobe ao passar o mouse:** `bfx-painel-vidro` + `bfx-elevar-hover`
- **Card de imagem com legenda sobreposta:** `bfx-card-zoom-imagem` + `bfx-card-sobreposicao`
- **Página inteira com entrada suave e tema alternável:** `bfx-entrada-suave` na página + `bfx-escopo-tema` no container + `bfx-alternador-tema` no interruptor

## Utilitários JavaScript

Todos têm nome em português e o nome em inglês continua funcionando por compatibilidade.

| Função | Em inglês | O que faz |
|---|---|---|
| `criarAlternadorTema(input, opções)` | `createThemeToggle` | Liga um checkbox ao tema A/B e salva a escolha |
| `criarEfeitoOnda(elemento, opções)` | `createRipple` | Efeito de onda ao clicar. Retorna uma função que desfaz tudo |
| `alternarClasse(elemento, classe)` | `toggleClass` | Alterna uma classe e devolve o estado final |
| `prefereMovimentoReduzido()` | `prefersReducedMotion` | Diz se a pessoa prefere menos animações |

## Acessibilidade

- As animações respeitam `prefers-reduced-motion`: quem pede menos movimento no sistema não vê animações.
- `bfx-foco-visivel` deixa o foco do teclado sempre visível.

## Ver o catálogo no seu computador

```bash
git clone https://github.com/Braga93/braga_effects_library.git
cd braga_effects_library
npm install
npm run showcase
```

Abra `http://localhost:4173` para ver todos os efeitos funcionando.

## Contribua com os seus efeitos

A biblioteca é aberta: você pode usar, copiar e compartilhar os seus próprios efeitos. Para criar um novo:

```bash
npm run new:effect -- nome-do-efeito
```

O comando cria o arquivo em `src/css/` e já o registra nos estilos. Depois, mostre o efeito no catálogo, documente-o e rode `npm run check` antes de abrir o pull request. O passo a passo completo está em [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Qualidade

- Testes automáticos com `node --test`
- Verificação a cada envio pelo GitHub Actions
- Requer Node.js 20 ou superior

```bash
npm run check
```

## Licença

[MIT](LICENSE). Use livremente, inclusive em projetos comerciais.

## Autor

**Eduardo Braga**, estudante de desenvolvimento full-stack em Fortaleza, CE.
[LinkedIn](https://www.linkedin.com/in/eduardo-braga-6131b9253/) · [GitHub](https://github.com/Braga93)
