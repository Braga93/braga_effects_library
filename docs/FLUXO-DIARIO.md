# Fluxo diário

## Começar o trabalho

```bash
git pull
npm install
npm run check
```

## Criar um efeito CSS

```bash
npm run new:effect -- neon-text
```

Edite `src/css/neon-text.css`, abra o showcase e documente o efeito no README.

## Testar visualmente

```bash
npm run showcase
```

Abra `http://localhost:4173`.

## Salvar uma alteração

```bash
git checkout -b feat/neon-text
git add .
git commit -m "feat: adiciona efeito neon-text"
git push -u origin feat/neon-text
```

Após validar, integre na `main` pelo GitHub ou por merge local.

## Atualizar projetos consumidores

Quando o projeto usa caminho local, rode nele:

```bash
npm install ../braga_effects_library
```

Quando instala direto do GitHub:

```bash
npm install git+https://github.com/Braga93/braga_effects_library.git#main
```
