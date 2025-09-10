let funcionario = {
    nome: 'Cleitinho',
    idade: 52,
    salario: 5000,
    cargo: 'Programador'
};

// Função auxiliar que recebe um objeto e uma função de callback
function auxiliar(objeto, funcao) {
    funcao(objeto); // Executa a função de callback passando o objeto
}

// Função de callback que exibe as informações do objeto no console
const exibirInformacoes = (objeto) => {
    for (let chave in objeto) {  // Loop para percorrer o objeto
        console.log(`${chave}: ${objeto[chave]}`);
    }
};

// Executando a função auxiliar passando o objeto e a função de callback
auxiliar(funcionario, exibirInformacoes);
