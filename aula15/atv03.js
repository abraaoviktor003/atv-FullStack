//escreva um algoritmo que exiba todos os numeros pares de  ao numero passado pelo usuario

let limite = Number(prompt('digite um limite de numero'));
let interador = 0;
while (interador <= limite) {
if (interador % 2===0) {
    console.log(interador); //exibe o numero se for par
}
    interador++; // passa para o proximo numero
}

