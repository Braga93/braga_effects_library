# Auditoria dos projetos originais

## Resultado

A biblioteca contém os padrões visuais reutilizáveis dos três projetos. Layouts completos, conteúdo, imagens, logos e regras específicas de cada página não foram transformados em efeitos, pois isso criaria componentes rígidos e pouco reutilizáveis.

## Portfólio Matrix

Extraídos: textura granulada, cabeçalho translúcido por composição, sublinhado de navegação, botão contorno/brilho, cubo 3D, texto pulsante, chuva Matrix, botão cyber, card de revelação, zoom de imagem, elevação, borda/glow, alternador vermelho/azul e conteúdo condicional por tema.

Não extraídos como efeitos independentes: grid das seções, disposição do cabeçalho, textos, imagens Morpheus/Smith, links de WhatsApp, formulário e breakpoints específicos. Esses itens são estrutura ou conteúdo do projeto.

## Esnete

Extraídos: grain, busca cápsula com `focus-within`, botão com preenchimento lateral, link com seta, palco/zoom de produto, card flutuante, faixa infinita, card com overlay e botão de ícone.

Não extraídos como efeitos independentes: composição completa do hero, posição exata das etiquetas, grid do rodapé, identidade visual e imagens da marca. O card flutuante aceita variáveis e cobre tanto o selo quanto o card auxiliar.

## Nike

Extraídos: fundo holofote radial, palco de produto, botão circular de ícone, busca cápsula, foco visível e elevação/zoom de cards.

Não extraídos como efeitos independentes: grade de três colunas, tipografia “Just Do It”, anel puramente decorativo ligado ao layout e estrutura do rodapé. O anel já faz parte do componente `bfx-palco-produto`.

## Correções feitas na revisão 1.4.0

- API em português adicionada sem remover a API anterior.
- Texto pulsante do Matrix adicionado.
- Utilitário de foco visível adicionado.
- Catálogo convertido para usar os nomes em português.
- Testes ampliados para conferir importações, aliases, alternador de tema e cards de revelação.
