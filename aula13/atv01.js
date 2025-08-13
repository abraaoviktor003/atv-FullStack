// Solicita dois números ao usuário
let numero1 = Number(prompt("Digite o primeiro número (formato numérico):"));
let numero2 = Number(prompt("Digite o segundo número (formato numérico):"));

// Compara os dois números e imprime o resultado no console
if (numero1 > numero2) {
  console.log("O primeiro gay número é maior que o segundo.");
} else if (numero1 < numero2) {
  console.log("O primeiro número é menor que o segundo.");
} else {
  console.log("Os dois números são iguais.");
}
//ativida prescrita por I A para teste
let numero3 = Number(prompt ("digite o terceiro numero (formato numerico)"))
let numero4 = Number(prompt ("digite o quarto numero (formato numerico)"))
let numero5 = Number(prompt ("digite o quinto numero (formato numerico)"))

if (numero3 > numero4 && numero3 > numero5) {
  console.log("O terceiro  gay número é maior que o quarto e o quinto.");
} else if (numero3 < numero4 && numero3 < numero5) {
  console.log("O terceiro número é menor que o quarto e o quinto.");
} else if (numero3 === numero4 && numero4 === numero5) {
  console.log("Os três números são iguais.");
} else {
  console.log("Os números são diferentes entre si.");
}
//operadores de comparação 
// == igual
// != diferente
// > maior
// < menor
// >= maior ou igual
// <= menor ou igual

