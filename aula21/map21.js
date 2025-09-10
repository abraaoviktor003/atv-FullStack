// Criando um array de números
let numer0s = [5, 10, 15, 20, 25]

// .map() percorre cada elemento do array e retorna um novo array
// Aqui vamos verificar se cada número é >= 15
// O operador >= (maior ou igual) retorna true se o valor da esquerda for maior ou igual ao da direita
let resultado = numer0s.map((valor) => {
    // Para cada valor do array, verificamos a condição
    return valor >= 15
})

// Mostra o array original
console.log("Array original:", numer0s)

// Mostra o novo array com true/false para cada elemento
console.log("Resultado do .map com >= :", resultado)

// Outro exemplo: usando .map() para criar um novo array apenas com números >= 15
let filtrados = numer0s.map((valor) => {
    if (valor >= 15) {
        return valor // mantém o número
    } else {
        return null // coloca null onde não atende a condição
    }
})

console.log("Array com números >= 15 (outros viram null):", filtrados)



// Foco: operador => (arrow function) — forma curta de declarar funções.

// 1) Sintaxe básica: (parâmetros) => expressão
// Retorno implícito: quando é só uma expressão, o valor é retornado sem usar "return".
const soma = (a, b) => a + b
console.log('soma(2, 3) =', soma(2, 3)) // 5

// 2) Um único parâmetro: pode omitir parênteses
const dobro = x => x * 2
console.log('dobro(7) =', dobro(7)) // 14

// 3) Sem parâmetros: usa parênteses vazios
const agora = () => new Date().toISOString()
console.log('agora() =', agora())

// 4) Corpo em bloco: precisa de chaves {} e "return" explícito
const potencia = (base, exp) => {
  const resultado = base ** exp
  return resultado
}
console.log('potencia(2, 5) =', potencia(2, 5)) // 32

// 5) Retornando objeto literal: envolva com parênteses para evitar confusão com bloco {}
const criarUsuario = (nome, idade) => ({ nome, idade })
console.log('criarUsuario("Ana", 25) =', criarUsuario('Ana', 25))

// 6) Usando => como callback (ex.: map)
// Aqui, cada número é transformado em seu quadrado.
const numeros = [1, 2, 3, 4]
const quadrados = numeros.map(n => n * n)
console.log('quadrados =', quadrados) // [1, 4, 9, 16]

// 7) Dica importante: arrow function NÃO cria seu próprio "this" (léxico).
// Exemplo prático: dentro de setTimeout, "this" continua o mesmo do contexto externo.
const obj = {
  valor: 10,
  incrementarDepois() {
    setTimeout(() => {
      // "this" aqui é o mesmo "this" de incrementarDepois (o obj), por ser arrow.
      this.valor++
      console.log('valor depois (arrow) =', this.valor) // 11
    }, 0)
  }
}
obj.incrementarDepois()

// 8) Com parâmetros padrão e rest:
const somaTudo = (...nums) => nums.reduce((acc, n) => acc + n, 0)
console.log('somaTudo(1,2,3,4) =', somaTudo(1,2,3,4)) // 10

// Resumo prático:
// - => define funções curtas.
// - Sem chaves: retorno implícito.
// - Com chaves: precisa de "return" para devolver valor.
// - Para retornar objeto literal direto, use parênteses: () => ({ ... }).
// - "this" é léxico (não muda com call/apply/bind como em funções normais).



//forEach

