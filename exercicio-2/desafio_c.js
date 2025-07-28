// Exercício 2: forEach e map

const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
];

// 1. Usando forEach para imprimir todos os produtos
console.log("Lista de Produtos:");
products.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name} - R$${product.price}`);
});

// C) Combine forEach com um acumulador externo para calcular o valor total de todos os produtos
//verificacao de valor total
let soma_precos = 0;

products.forEach((product) => {
  let preco_uni = product.price;
  soma_precos = soma_precos + preco_uni;
});

console.log("\nO valor total dos produtos eh: ", soma_precos);
