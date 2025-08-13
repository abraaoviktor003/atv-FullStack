//atividade 3 usando variaveis de if and swithcase

//opçao A

let numero = prompt("Digite um número:");

if (numero > 0 && numero % 2 === 0) {
  alert("Raiz quadrada: " + numero ** 0.5);
} else if (numero > 0 && numero % 2 !== 0) {
  alert("Elevado à terceira potência: " + numero ** 3);
} else {
  alert("Entrada inválida.");
}

//opção B

let preco = parseFloat(prompt("Digite o preço do produto:"));
let cor = parseInt(prompt("Digite o número da cor da etiqueta:\n1 - Verde\n2 - Amarela\n3 - Vermelha"));

let desconto;
let precoFinal;

switch (cor) {
  case 1:
    desconto = preco * 0.10;
    precoFinal = preco - desconto;
    alert(`Cor: Verde\nDesconto: 10%\nPreço final: R$ ${precoFinal.toFixed(2)}`);
    break;
  case 2:
    desconto = preco * 0.30;
    precoFinal = preco - desconto;
    alert(`Cor: Amarela\nDesconto: 30%\nPreço final: R$ ${precoFinal.toFixed(2)}`);
    break;
  case 3:
    desconto = preco * 0.50;
    precoFinal = preco - desconto;
    alert(`Cor: Vermelha\nDesconto: 50%\nPreço final: R$ ${precoFinal.toFixed(2)}`);
    break;
  default:
    alert("Número inválido. Digite 1, 2 ou 3.");
}
