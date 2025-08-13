// imprimir todos os números de 0 a 5

let numero = 0;

while (numero <= 5) {
    console.log(numero);
    // atualizar a condição de parada
    numero = numero + 1;
}
// o ++ pode é usado para simbolizar estritamente o = (numero += 1)

//exemplo de while 01
let escolha = true;

// exiba uma mensagem com a pergunta 'deseja continuar vendo essa mensagem?'
// pergunte se o usuário deseja continuar

while (escolha) {
    console.log('executei a mensagem');
    escolha = confirm('Deseja continuar vendo essa mensagem?');
    console.log(escolha);
//exemplo de while 02 
}
let senha = '123';
let tentativas = 1;
let senhaDigitada = prompt('Digite a senha');

// enquanto a senha digitada for diferente da senha e a qtd tentativas for menor que 3 peça novamente a senha ao usuario
while (senhaDigitada != senha && tentativas <= 3) {
    console.log('senha incorreta');
    tentativas++;
    senhaDigitada = prompt('Digite a senha');
}
// imprima e some todos os números do intervalo de 0 a 50

let iterador = 0; // número que vai variar de 0 a 50
let acumulador = 0; // soma dos números do intervalo de 0 a 50
let fimIntervalo = 50;

while (iterador <= fimIntervalo) {
    console.log(iterador); // imprime o número atual
    acumulador += iterador; // soma o número atual ao acumulador
    iterador++; // passa para o próximo número
}


