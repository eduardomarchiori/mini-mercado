<script setup>
import NavBar from "./components/NavBar.vue";
import { usuario } from "./usuario.js";
</script>

<template>
  <NavBar v-if="usuario" />

  <main class="conteudo">
    <RouterView />
  </main>
</template>
