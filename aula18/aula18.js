// Array de frutas
let frutas = ['banana', 'maca', 'laranja', 'abacaxi']

// O método .includes() verifica se um elemento existe no array.
// Retorna true se encontrar o valor, ou false se não encontrar.
console.log(frutas.includes('banana'))     // true
console.log(frutas.includes('jabuticaba')) // false
console.log(frutas.includes('maca'))       // true

// Array de frutas para exemplo
let frutass = ['banana', 'maca', 'laranja', 'abacaxi', 'banana']

// indexOf() retorna o índice da primeira ocorrência do elemento.
// Se não encontrar, retorna -1.
console.log(frutas.indexOf('banana'))     // 0
console.log(frutas.indexOf('cleitinho'))  // -1

// lastIndexOf() retorna o índice da última ocorrência do elemento.
console.log(frutas.lastIndexOf('banana')) // 4

// Contar quantas vezes um elemento aparece no array
let quantidade = 0
for (let index = 0; index < frutas.length; index++) {
    const element = frutas[index]
    if (element === 'banana') {
        quantidade++
    }
}
console.log(`A fruta "banana" aparece ${quantidade} vezes.`)


// Exclusão de elementos no meio do array usando splice()
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

console.log('Array original:', letras)

// splice(índiceInicial, quantidade) remove elementos a partir do índice informado
let removido = letras.splice(5, 2) // remove 2 elementos a partir do índice 5


console.log('Array após remoção:', letras)
console.log('Elementos removidos:', removido)


// Criando um array de frutas, onde cada elemento do array é um sub-array contendo
// o nome da fruta e a quantidade dela.
let frutaS = [ 
  // O primeiro sub-array: ['banana', 5] -> 'banana' é o nome da fruta e 5 é a quantidade
  ['banana', 5], 
  
  // O segundo sub-array: ['maca', 10] -> 'maca' é o nome da fruta e 10 é a quantidade
  ['maca', 10], 
  
  // O terceiro sub-array: ['laranja', 15] -> 'laranja' é o nome da fruta e 15 é a quantidade
  ['laranja', 15], 
  
  // O quarto sub-array: ['abacaxi', 20] -> 'abacaxi' é o nome da fruta e 20 é a quantidade
  ['abacaxi', 20]
];

// Exibindo o array completo no console
console.log(frutas);

// Exibindo o primeiro sub-array (primeira fruta) no console
console.log(frutas[0]);

// Exibindo o valor da quantidade da primeira fruta (banana) no console
console.log(frutas[0][1]);  // 5 é o valor da quantidade de bananas
