<script setup>
import { ref, computed } from "vue";
import { produtos } from "../data/produtos.js";
import ProdutoCard from "../components/ProdutoCard.vue";

const busca = ref("");
const categoria = ref("Todas");

const categorias = computed(() => {
  const lista = ["Todas"];
  produtos.forEach((p) => {
    if (!lista.includes(p.categoria)) lista.push(p.categoria);
  });
  return lista;
});

const filtrados = computed(() =>
  produtos.filter((p) => {
    const casaBusca = p.nome.toLowerCase().includes(busca.value.toLowerCase());
    const casaCategoria =
      categoria.value === "Todas" || p.categoria === categoria.value;
    return casaBusca && casaCategoria;
  })
);
</script>

<template>
  <section class="home">
    <h1 class="titulo">Produtos</h1>

    <div class="filtros">
      <input v-model="busca" class="busca" placeholder="Buscar produto..." />
      <select v-model="categoria" class="select-categoria">
        <option v-for="c in categorias" :key="c">{{ c }}</option>
      </select>
    </div>

    <div class="grade">
      <ProdutoCard
        v-for="produto in filtrados"
        :key="produto.id"
        :produto="produto"
      />
    </div>

    <p v-if="filtrados.length === 0" class="vazio">
      Nenhum produto encontrado.
    </p>
  </section>
</template>
