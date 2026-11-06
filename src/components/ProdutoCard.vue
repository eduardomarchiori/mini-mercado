<script setup>
import { ehFavorito, alternarFavorito } from "../favoritos.js";

defineProps({
  produto: { type: Object, required: true },
});

function formatar(preco) {
  return preco.toFixed(2).replace(".", ",");
}
</script>

<template>
  <div class="produto-card">
    <RouterLink :to="`/produto/${produto.id}`" class="produto-link">
      <img :src="produto.imagem" :alt="produto.nome" class="produto-img" />
      <h3 class="produto-nome">{{ produto.nome }}</h3>
    </RouterLink>

    <span class="produto-categoria">{{ produto.categoria }}</span>
    <div class="produto-rodape">
      <span class="produto-preco">R$ {{ formatar(produto.preco) }}</span>
      <button
        class="fav-btn"
        :class="{ ativo: ehFavorito(produto.id) }"
        @click="alternarFavorito(produto.id)"
      >
        {{ ehFavorito(produto.id) ? "♥" : "♡" }}
      </button>
    </div>
  </div>
</template>
