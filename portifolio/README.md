# Portfólio — Guilherme Israel

Portfólio arcade/synthwave em React + Vite + TypeScript, sem bibliotecas de UI ou de animação.

## Rodar localmente

```bash
npm i
npm run dev      # http://localhost:5173
npm run build    # typecheck + build estático em dist/
npm run preview  # serve o build
```

## Onde editar

- `src/data/projects.ts`: os 6 projetos (fases)
- `src/data/certs.ts`: as certificações
- `src/data/stack.ts`: inventário e faixa de stacks
- `src/data/profile.ts`: textos do hero, sobre, formação, contato e rodapé
- `public/foto.jpeg`: foto do Player Card
- `public/og-preview.png`: imagem de preview (1200×630)
- `index.html`: SEO e Open Graph (troque o domínio `guilhermeisrael.vercel.app` pelo seu)

## Deploy

**Vercel:** importe o repositório em vercel.com/new, defina *Root Directory* = `portifolio`.
O Vite é detectado sozinho (build `npm run build`, saída `dist`). O `vercel.json` faz
`/projeto/:slug` funcionar ao recarregar a página.

**Netlify:** base `portifolio`, build `npm run build`, publish `dist`. O `public/_redirects` cuida das rotas.

Extra: tente ↑ ↑ ↓ ↓ ← → ← → B A.
