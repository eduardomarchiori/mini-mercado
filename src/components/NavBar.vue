<script setup>
import { useRouter } from "vue-router";
import { sair as logout } from "../usuario.js";

const router = useRouter();

function sair() {
  logout();
  router.push("/login");
}
</script>

<template>
  <header class="navbar">
    <RouterLink class="logo" to="/">🛒 MiniShop</RouterLink>
    <nav class="links">
      <RouterLink to="/">Produtos</RouterLink>
      <RouterLink to="/perfil">Perfil</RouterLink>
      <button class="sair-btn" @click="sair">Sair</button>
    </nav>
  </header>
</template>
