<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { usuario, sair as logout } from "../usuario.js";
import { favoritos } from "../favoritos.js";
import { produtos } from "../data/produtos.js";

const router = useRouter();

const meusFavoritos = computed(() =>
  produtos.filter((p) => favoritos.value.includes(p.id))
);

function sair() {
  logout();
  router.push("/login");
}
</script>

<template>
  <section class="perfil" v-if="usuario">
    <h1 class="titulo">Meu perfil</h1>

    <div class="perfil-card">
      <div class="avatar">{{ usuario.nome.charAt(0) }}</div>
      <div>
        <h2>{{ usuario.nome }}</h2>
        <p class="perfil-email">{{ usuario.email }}</p>
        <p class="perfil-membro">Membro desde {{ usuario.membroDesde }}</p>
      </div>
    </div>

    <h2 class="subtitulo">Meus favoritos ({{ meusFavoritos.length }})</h2>
    <ul v-if="meusFavoritos.length" class="lista-fav">
      <li v-for="p in meusFavoritos" :key="p.id">
        <RouterLink :to="`/produto/${p.id}`">{{ p.nome }}</RouterLink>
        <span>R$ {{ p.preco.toFixed(2).replace(".", ",") }}</span>
      </li>
    </ul>
    <p v-else class="vazio">Você ainda não favoritou nenhum produto.</p>

    <button class="btn-sair" @click="sair">Sair da conta</button>
  </section>
</template>
