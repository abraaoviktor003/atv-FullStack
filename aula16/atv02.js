let quantidadeProdutos = Number(prompt("Quantos produtos você vai comprar?")); // Pergunta a quantidade de produtos
let totalCompra = 0; // Acumulador para o valor total

// Loop para pedir o preço de cada produto
for (let i = 1; i <= quantidadeProdutos; i++) {
    let precoProduto = Number(prompt(`Digite o valor do produto ${i}:`)); // Lê o preço de cada produto
    totalCompra = totalCompra + precoProduto; // Acumula o valor no total
}

console.log("O total da compra é: R$", totalCompra); // Exibe o total da compra
