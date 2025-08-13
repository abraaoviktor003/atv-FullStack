let quantidade = parseInt(prompt("Quantos produtos serão vendidos?"));
let acumulador = 0; // Aqui começa o acumulador, que vai somar os valores
let iterador = 1;   // Aqui começa o iterador, que vai contar os produtos

while (iterador <= quantidade) {
    let valor = parseFloat(prompt(`Digite o valor do produto ${iterador}:`));
    acumulador += valor; // Soma o valor ao acumulador
    iterador++;          // Avança o iterador para o próximo produto
}

alert(`O valor total da compra é R$ ${acumulador.toFixed(2)}`); 