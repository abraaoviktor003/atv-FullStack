function somar(a, b) {
    return a + b;
}
let resultado = somar(10, 20);  // Passa 10 e 20 como argumentos
console.log(resultado);  // Vai imprimir: 30

function minhafuncaocomretorno (nome, email){
    let usuario={
        nome: nome,
        email:email,
        senha:'mudarsenha'
    }
    console.log(usuario)
    return usuario
}

