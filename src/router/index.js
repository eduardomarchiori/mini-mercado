import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { usuario } from "../usuario.js";

import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import ProdutoView from "../views/ProdutoView.vue";
import PerfilView from "../views/PerfilView.vue";

const routes = [
  { path: "/login", name: "login", component: LoginView },
  { path: "/", name: "home", component: HomeView, meta: { requerLogin: true } },
  {
    path: "/produto/:id",
    name: "produto",
    component: ProdutoView,
    meta: { requerLogin: true },
  },
  {
    path: "/perfil",
    name: "perfil",
    component: PerfilView,
    meta: { requerLogin: true },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  const logado = usuario.value !== null;
  if (to.meta.requerLogin && !logado) return "/login";
  if (to.path === "/login" && logado) return "/";
});

export default router;
