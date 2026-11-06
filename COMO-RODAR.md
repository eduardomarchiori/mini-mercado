# MiniShop — solução da Aula 14

Mini marketplace feito em **Vue 3 + Vite + Vue Router**, com **dados mockados**
(sem back-end). Telas: **Login, Home, Detalhes do produto e Perfil**.

## Como rodar

```bash
cd mini-marketplace
npm install     # baixa vue, vue-router, sweetalert2, vite
npm run dev     # http://localhost:5173
```

Abra o endereço que aparecer. No login, use **qualquer e-mail e senha** (é um login de teste).

## O que cada parte mostra

- **Vue Router + proteção de rota**: sem login, qualquer tela redireciona para `/login`
  (veja `router/index.js`, `beforeEach`).
- **Login (`LoginView`)**: formulário com `v-model` e `@submit.prevent`.
- **Home (`HomeView`)**: busca (`v-model`) + filtro por categoria, grade de produtos.
- **Detalhes (`ProdutoView`)**: lê o `:id` da URL (`useRoute`) e mostra o produto.
- **Perfil (`PerfilView`)**: dados do usuário + lista de favoritos + sair.
- **Componentes**: `ProdutoCard` e `NavBar` (props e eventos).
- **Estado compartilhado com `ref`**: `usuario.js` (login) e `favoritos.js` (favoritos)
  são apenas `ref` exportados e importados onde preciso — o mesmo valor em todas as telas.

## Estrutura

```
mini-marketplace/
  src/
    main.js
    App.vue
    router/index.js        # rotas + guard de login
    data/produtos.js       # dados mockados
    usuario.js             # ref do usuário logado
    favoritos.js           # ref com os ids favoritados
    views/
      LoginView.vue
      HomeView.vue
      ProdutoView.vue
      PerfilView.vue
    components/
      NavBar.vue
      ProdutoCard.vue
    assets/main.css
```
