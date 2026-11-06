<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Swal from "sweetalert2";
import { acharProduto } from "../data/produtos.js";
import { ehFavorito, alternarFavorito } from "../favoritos.js";

const route = useRoute();
const router = useRouter();

const produto = computed(() => acharProduto(route.params.id));

function formatar(preco) {
  return preco.toFixed(2).replace(".", ",");
}

function comprar() {
  Swal.fire({
    title: "Compra realizada!",
    text: `Você comprou: ${produto.value.nome}.`,
    icon: "success",
    confirmButtonColor: "#4f46e5",
    heightAuto: false,
  });
}
</script>

<template>
  <section class="detalhe" v-if="produto">
    <button class="voltar" @click="router.push('/')">← Voltar</button>

    <div class="detalhe-card">
      <img :src="produto.imagem" :alt="produto.nome" class="detalhe-img" />
      <div class="detalhe-info">
        <span class="detalhe-categoria">{{ produto.categoria }}</span>
        <h1 class="detalhe-nome">{{ produto.nome }}</h1>
        <p class="detalhe-descricao">{{ produto.descricao }}</p>
        <span class="detalhe-preco">R$ {{ formatar(produto.preco) }}</span>

        <div class="detalhe-acoes">
          <button class="btn-principal" @click="comprar">Comprar</button>
          <button
            class="fav-btn grande"
            :class="{ ativo: ehFavorito(produto.id) }"
            @click="alternarFavorito(produto.id)"
          >
            {{ ehFavorito(produto.id) ? "♥ Favorito" : "♡ Favoritar" }}
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="detalhe" v-else>
    <p class="vazio">Produto não encontrado.</p>
    <button class="voltar" @click="router.push('/')">← Voltar</button>
  </section>
</template>
