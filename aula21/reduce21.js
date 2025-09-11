/*
O método reduce() serve para "reduzir" um array a um único valor.
Ele percorre todos os elementos do array e acumula um resultado final.

Sintaxe:
array.reduce((acumulador, valorAtual, indice, arrayOriginal) => {
    // lógica
    return novoAcumulador
}, valorInicial)

Parâmetros:
- acumulador: guarda o valor acumulado até o momento.
- valorAtual: elemento atual do array que está sendo processado.
- indice (opcional): posição do elemento no array.
- arrayOriginal (opcional): o array que está sendo percorrido.
- valorInicial (opcional, mas recomendado): valor inicial do acumulador.
*/

// ----------------------
// EXEMPLO 1: Somar todos os números de um array
// ----------------------
let numeros = [10, 20, 30, 40]

let soma = numeros.reduce((acumulador, numero) => {
    console.log(`Acumulador: ${acumulador}, Número atual: ${numero}`)
    return acumulador + numero
}, 0) // valor inicial do acumulador é 0

console.log("Soma total:", soma)
// Saída: 100

// ----------------------
// EXEMPLO 2: Somar salários de funcionários
// ----------------------
let funcionarios = [
    { nome: 'João', salario: 4000 },
    { nome: 'Maria', salario: 3000 },
    { nome: 'Pedro', salario: 5000 }
]

let totalSalarios = funcionarios.reduce((acumulador, funcionario) => {
    return acumulador + funcionario.salario
}, 0)

console.log("Total dos salários:", totalSalarios)
// Saída: 12000
