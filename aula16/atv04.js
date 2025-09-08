let numero = Number(prompt("Digite um número para ver a tabuada:")); // Lê o número do usuário

// Loop para calcular e exibir a tabuada
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i; // Calcula o resultado da multiplicação
    console.log(`${numero} x ${i} = ${resultado}`); // Exibe o resultado no console
}
