import { ref } from "vue";

export const favoritos = ref([]);

export function alternarFavorito(id) {
  const i = favoritos.value.indexOf(id);
  if (i === -1) favoritos.value.push(id);
  else favoritos.value.splice(i, 1);
}

export function ehFavorito(id) {
  return favoritos.value.includes(id);
}
