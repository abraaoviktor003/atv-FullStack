// Array de exemplo
let numeros = [5, 10, 15, 20, 25, 30]

// O método filter() percorre o array e retorna um NOVO array
// contendo apenas os elementos que passam em um teste (condição).
// Ele NÃO altera o array original.

let maioresOuIguaisA15 = numeros.filter((valor) => {
    return valor >= 15 // mantém apenas valores >= 15
})

console.log("Array original:", numeros) // [5, 10, 15, 20, 25, 30]
console.log("Filtrados (>= 15):", maioresOuIguaisA15) // [15, 20, 25, 30]

// Exemplo com strings
let nomes = ["Ana", "Bruno", "Carlos", "Amanda", "Beatriz"]

// Filtrar nomes que começam com a letra "A"
let nomesComA = nomes.filter(nome => nome.startsWith("A"))

console.log("Nomes originais:", nomes)
console.log("Nomes com A:", nomesComA) // ["Ana", "Amanda"]

// Exemplo com objetos
let produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 1200 }
]

// Filtrar produtos com preço acima de 500
let produtosCaros = produtos.filter(produto => produto.preco > 500)

console.log("Produtos caros:", produtosCaros)
// [
//   { nome: "Notebook", preco: 3500 },
//   { nome: "Monitor", preco: 1200 }
// ]
