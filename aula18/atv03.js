// 1. Criando a lista com 5 produtos
let produtos = [
  { nome: "Produto A", preco: 100, quantidade: 2, desconto: 10 },
  { nome: "Produto B", preco: 200, quantidade: 1, desconto: 20 },
  { nome: "Produto C", preco: 50, quantidade: 5, desconto: 5 },
  { nome: "Produto D", preco: 80, quantidade: 3, desconto: 15 },
  { nome: "Produto E", preco: 150, quantidade: 4, desconto: 30 }
];

// 2. Laço for para iterar sobre a lista de produtos
for (let i = 0; i < produtos.length; i++) {
  // 3. Calcular o valor com desconto: preço - desconto
  produtos[i].valorComDesconto = produtos[i].preco - produtos[i].desconto;
  
  // 4. Calcular o valor total: (preço - desconto) * quantidade
  produtos[i].valorTotal = produtos[i].valorComDesconto * produtos[i].quantidade;
}

// 5. Imprimir as informações dos produtos de forma apresentável
for (let i = 0; i < produtos.length; i++) {
  console.log("Produto: " + produtos[i].nome);
  console.log("Preço: R$ " + produtos[i].preco);
  console.log("Quantidade: " + produtos[i].quantidade);
  console.log("Desconto: R$ " + produtos[i].desconto);
  console.log("Valor com Desconto: R$ " + produtos[i].valorComDesconto);
  console.log("Valor Total (com desconto e quantidade): R$ " + produtos[i].valorTotal);
  console.log("------------------------------");
}
