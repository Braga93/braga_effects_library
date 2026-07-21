# Guia de GitHub e uso em qualquer computador

## Preparação

Instale Git, Node.js 20 ou superior e VS Code. Extraia a biblioteca em uma pasta fixa.

## Primeiro envio ao GitHub

1. Crie no GitHub um repositório privado vazio chamado `braga-effects-library`. Não marque README, `.gitignore` ou licença, porque a pasta já contém esses arquivos.
2. Abra o terminal dentro da biblioteca.
3. Execute:

```bash
git init
git add .
git commit -m "feat: cria biblioteca privada de efeitos"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/braga-effects-library.git
git push -u origin main
```

## Uso no computador principal

Mantenha biblioteca e projetos como pastas irmãs:

```text
C:\Projetos\
├── braga-effects-library\
└── meu-site\
```

No projeto:

```bash
npm install ../braga-effects-library
```

Importe o CSS:

```js
import "@braga/effects/styles.css";
```

## Uso em outro computador

Clone a biblioteca:

```bash
cd C:\Projetos
git clone https://github.com/SEU-USUARIO/braga-effects-library.git
cd braga-effects-library
npm install
npm run check
```

Depois instale pelo caminho local no projeto, ou instale diretamente pelo Git:

```bash
npm install git+https://github.com/SEU-USUARIO/braga-effects-library.git#v1.4.0
```

Para repositório privado, o computador deve estar autenticado no GitHub. SSH é mais cômodo para uso frequente:

```bash
npm install git+ssh://git@github.com/SEU-USUARIO/braga-effects-library.git#v1.4.0
```

## Atualização diária

Na biblioteca:

```bash
git pull
npm install
npm run check
```

Após alterar:

```bash
git add .
git commit -m "feat: adiciona nome do efeito"
npm version patch
git push origin main --follow-tags
```

No projeto consumidor, altere a tag instalada para a versão nova.
