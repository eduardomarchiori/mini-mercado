import { ref } from "vue";

export const usuario = ref(null);

export function entrar(email) {
  usuario.value = { nome: "Aluno Senac", email, membroDesde: "2026" };
}

export function sair() {
  usuario.value = null;
}
