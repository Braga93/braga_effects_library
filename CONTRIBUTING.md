# Como contribuir

Obrigado por querer somar. A Braga Effects é uma biblioteca aberta: a ideia é que qualquer pessoa possa usar e também compartilhar os seus próprios efeitos.

## O que cabe aqui

- Efeitos CSS reutilizáveis, que funcionem em mais de um projeto (não um layout inteiro).
- Pequenos utilitários JavaScript que ajudem a usar os efeitos.
- Correções de bugs, melhorias de acessibilidade e de documentação.

## Passo a passo para criar um efeito

1. Faça um fork do repositório e crie uma branch com o nome do efeito.
2. Instale as dependências e confirme que tudo passa antes de mexer em qualquer coisa:

   ```bash
   npm install
   npm run check
   ```

3. Crie o arquivo do efeito:

   ```bash
   npm run new:effect -- nome-do-efeito
   ```

   O comando cria `src/css/nome-do-efeito.css` e já o registra em `src/styles.css`.
4. Escreva o efeito. Combinações que funcionam melhor:
   - Classe com o prefixo `bfx-` e nome em português, por exemplo `bfx-borda-neon`.
   - Cores, tempos e raios vindos das variáveis de `src/css/tokens.css`, para o efeito acompanhar o tema.
   - Se o efeito tem animação, inclua-o em `src/css/reduced-motion.css` para respeitar quem pede menos movimento.
5. Mostre o efeito no catálogo, em `examples/index.html`, e rode:

   ```bash
   npm run showcase
   ```

   Abra `http://localhost:4173` e confira o resultado, inclusive alternando o tema.
6. Documente o efeito em `docs/CATALOGO.md` (nome, classe e uma linha explicando para que serve).
7. Rode `npm run check` de novo e abra o pull request.

## Como deve ser o pull request

- Explique em poucas linhas o que o efeito faz e em que situação ele ajuda.
- Inclua um print ou GIF do efeito funcionando.
- Diga se ele combina bem com algum outro efeito da biblioteca. Os combos são uma das partes mais úteis para quem está começando.

## Licença das contribuições

Ao enviar uma contribuição, você concorda que ela seja distribuída sob a [licença MIT](LICENSE) do projeto.
