// Inicializando o array com diferentes tipos de comida representados por emojis
const comidas = ["🍳", "🍣", "🍿", "🍟", "🍔", "🍕"];

// 1. Usando o .map() para "cozinhar" os alimentos (transformando-os)
const comidasCozinhadas = comidas.map(item => {
  if (item === "🍳") {
    return "🍔"; // Ovo vira hambúrguer
  }
  if (item === "🍿") {
    return "🍟"; // Pipoca vira batata frita
  }
  return item; // O restante dos alimentos permanece igual
});

console.log("Comidas cozinhadas:", comidasCozinhadas);
// Output: Comidas cozinhadas: [ '🍔', '🍣', '🍟', '🍟', '🍔', '🍕' ]

// 2. Usando o .filter() para filtrar os alimentos fritos (🍟)
const comidasFritas = comidas.filter(item => item === "🍟");

console.log("Comidas fritas:", comidasFritas);
// Output: Comidas fritas: [ '🍟' ]

// 3. Usando o .reduce() para "comer" todas as comidas e transformar em algo final (💩)
const resultadoFinal = comidas.reduce((acumulador, item) => {
  if (item === "🍣") {
    return acumulador + "🍣 "; // Sushi adiciona sushi no resultado
  }
  return acumulador + "💩 "; // Todos os outros alimentos resultam em cocô (💩)
}, "");

console.log("Resultado final após comer:", resultadoFinal);
// Output: Resultado final após comer: 💩 💩 💩 💩 💩


// Arrow function de uma única linha:
// Quando a função tem apenas uma expressão, não precisa de chaves nem da palavra "return".
// O valor da expressão é retornado automaticamente.
let unicaLinha = (a, b) => a + b

// Chamando a função e guardando o resultado
let resultado = unicaLinha(10, 20)
console.log(resultado) // 30

// Arrow function com mais de uma linha:
// Quando usamos chaves {}, precisamos escrever "return" se quisermos retornar algo.
// Dentro das chaves podemos ter várias instruções.
let maisDeUmaLinha = (a, b) => {
    console.log(a) // Mostra o primeiro parâmetro
    console.log(b) // Mostra o segundo parâmetro
    let resultado = a + b // Soma os dois valores
    return resultado // Retorna o resultado da soma
}

// Chamando a função multi-linha
console.log(maisDeUmaLinha(10, 20)) // 30
