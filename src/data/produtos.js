export const produtos = [
  {
    id: 1,
    nome: "Fone Bluetooth",
    categoria: "Áudio",
    preco: 199.9,
    imagem: "https://placehold.co/400x300/4f46e5/fff?text=Fone",
    descricao:
      "Fone de ouvido sem fio com cancelamento de ruído e até 20h de bateria.",
  },
  {
    id: 2,
    nome: "Mouse Gamer",
    categoria: "Periféricos",
    preco: 149.9,
    imagem: "https://placehold.co/400x300/0ea5e9/fff?text=Mouse",
    descricao: "Mouse com 6 botões, 12.000 DPI e iluminação RGB.",
  },
  {
    id: 3,
    nome: "Teclado Mecânico",
    categoria: "Periféricos",
    preco: 329.9,
    imagem: "https://placehold.co/400x300/10b981/fff?text=Teclado",
    descricao: "Teclado mecânico compacto, switches azuis e ABNT2.",
  },
  {
    id: 4,
    nome: "Monitor 24\"",
    categoria: "Monitores",
    preco: 899.0,
    imagem: "https://placehold.co/400x300/f59e0b/fff?text=Monitor",
    descricao: "Monitor Full HD de 24 polegadas, 75Hz, ideal para trabalho.",
  },
  {
    id: 5,
    nome: "Webcam HD",
    categoria: "Acessórios",
    preco: 129.9,
    imagem: "https://placehold.co/400x300/ef4444/fff?text=Webcam",
    descricao: "Webcam 1080p com microfone embutido para chamadas e aulas.",
  },
  {
    id: 6,
    nome: "Caixa de Som",
    categoria: "Áudio",
    preco: 249.9,
    imagem: "https://placehold.co/400x300/8b5cf6/fff?text=Som",
    descricao: "Caixa de som portátil, à prova d'água, com som potente.",
  },
];

export function acharProduto(id) {
  return produtos.find((p) => p.id === Number(id));
}
