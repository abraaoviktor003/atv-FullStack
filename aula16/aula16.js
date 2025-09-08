// usando o laço 'for' finito

for (let i = 1; i <=10; i++) {
    console.log(i)
    console.log('repeti o loop mais uma vez')
}
    console.log('sair do loop')

//explicaçao mais aprofundada sobre o laço

let quantidadeNumeros = 5; // condição de parada
let somaNumeros = 0; // acumulador

// Um loop for que vai ler 5 números e somar o valor de todos eles
for (let num = 1; num <= quantidadeNumeros; num++) {
    let numero = Number(prompt('Digite um número')); // Lê o número fornecido pelo usuário
    somaNumeros = somaNumeros + numero; // Soma o número ao acumulador
}

console.log("A soma total dos números é:", somaNumeros);
