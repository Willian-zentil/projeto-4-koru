// Christiane Muniz
// Exercício 5: Desafio Integrador - E-commerce
// j) Encontrar o produto com a maior média de avaliações

function media(reviews) {
    if (reviews.length === 0) return 0; 
    const total = reviews.reduce((sum, rating) => sum + rating, 0);
    return total / reviews.length;  
}

const inventory = [
    { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
    { id: 2, name: "Notebook", price: 1200, stock: 5, category: "Eletrônicos", reviews: [5, 4, 5, 5, 3] },
    { id: 3, name: "Camiseta", price: 25, stock: 20, category: "Vestuário", reviews: [4, 3, 4, 5] },
    { id: 4, name: "Cafeteira", price: 100, stock: 8, category: "Cozinha", reviews: [3, 2, 5, 4, 2] },
    { id: 5, name: "Fones de Ouvido", price: 80, stock: 15, category: "Eletrônicos", reviews: [4, 4, 5, 5, 5, 4] },
    { id: 6, name: "Calça Jeans", price: 45, stock: 0, category: "Vestuário", reviews: [4, 3, 4] },
    { id: 7, name: "Liquidificador", price: 70, stock: 3, category: "Cozinha", reviews: [3, 4, 3, 5] }
];


function produtoMaiorMedia(inventory) {
    let produtoComMaiorMedia = null;
    let maiorMedia = 0;

    for (const produto of inventory) {
        const mediaAtual = media(produto.reviews);
        if (mediaAtual > maiorMedia) {
            maiorMedia = mediaAtual;
            produtoComMaiorMedia = produto;
        }
    }

    return produtoComMaiorMedia;
}   

const produto = produtoMaiorMedia(inventory);
console.log("O produto com a maior média de avaliações é:", produto.name,"\nMédia de Avaliação:",media(produto.reviews).toFixed(2)); 
                           

    




