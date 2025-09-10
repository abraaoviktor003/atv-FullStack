// Array de exemplo
let numeros = [1, 2, 3, 4, 5]

// O método forEach() serve para percorrer TODOS os elementos de um array.
// Ele executa uma função (callback) para cada elemento, na ordem.
// Diferente do .map(), ele NÃO cria um novo array — apenas executa ações.
// É ideal quando você quer "fazer algo" com cada item, mas não precisa guardar o resultado.

numeros.forEach((valor, indice, arrayOriginal) => {
    console.log(`Valor: ${valor}`)        // valor atual do elemento
    console.log(`Índice: ${indice}`)      // posição do elemento no array
    console.log(`Array: ${arrayOriginal}`)// o array completo sendo percorrido
    console.log('---')
})

// Exemplo prático: somar todos os números usando forEach
let soma = 0
numeros.forEach(num => {
    soma += num
})
console.log(`Soma total = ${soma}`) // 15

// Outro exemplo: criar uma string com todos os números separados por vírgula
let texto = ''
numeros.forEach((num, i) => {
    texto += (i === numeros.length - 1) ? num : num + ', '
})
console.log(`Lista formatada: ${texto}`) // "1, 2, 3, 4, 5"
