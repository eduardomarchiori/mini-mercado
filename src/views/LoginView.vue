<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { entrar as fazerLogin } from "../usuario.js";

const router = useRouter();
const email = ref("");
const senha = ref("");
const erro = ref("");

function entrar() {
  if (!email.value || !senha.value) {
    erro.value = "Preencha e-mail e senha.";
    return;
  }
  fazerLogin(email.value);
  router.push("/");
}
</script>

<template>
  <div class="login-tela">
    <form class="login-card" @submit.prevent="entrar">
      <h1 class="login-logo">🛒 MiniShop</h1>
      <p class="login-sub">Entre para ver os produtos</p>

      <label>E-mail</label>
      <input v-model="email" type="email" placeholder="voce@email.com" />

      <label>Senha</label>
      <input v-model="senha" type="password" placeholder="••••••" />

      <p v-if="erro" class="login-erro">{{ erro }}</p>

      <button class="btn-principal" type="submit">Entrar</button>
      <p class="login-dica">Dica: pode usar qualquer e-mail e senha (login de teste).</p>
    </form>
  </div>
</template>
