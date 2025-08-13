/* revisao da ativade 6 do notion*/
let peso = Number(prompt("Digite seu peso em kg:"));
let altura = Number(prompt("Digite sua altura em metros (ex: 1.75):"));

let imc = peso / (altura * altura);

if (imc < 18.5) {
  alert("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  alert("Peso normal");
} else if (imc >= 25 && imc < 30) {
  alert("Acima do peso");
} else {
  alert("Obeso");
}
// letras chaves usadas;
// && = and
// ||= or 

//exemplo logico:
let idade = Number(prompt("Digite sua idade:"));
let habilitado = prompt("Você é habilitado? (sim ou não)");

if (idade >= 18 && habilitado === "sim") {
  alert("O carro pode ser alugado.");
} else {
  alert("O carro não pode ser alugado.");
}
//atividade 01 dando uso ao &&, usando o confirm 



