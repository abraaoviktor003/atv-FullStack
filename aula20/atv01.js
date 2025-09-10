let conta = {
    titular: "Maria Silva",
    numero: "12345-6",
    agencia: "001",
    saldo: 1000,
    limiteEmprestimo: 5000,
    divida: 0
};

function depositar(objConta, valor) {
    objConta.saldo += valor;
    return objConta;
}

function sacar(objConta, valor) {
    if (objConta.saldo >= valor) {
        objConta.saldo -= valor;
    } else {
        console.log("Saldo insuficiente!");
    }
    return objConta;
}

function emprestar(objConta, valor) {
    if (valor <= objConta.limiteEmprestimo - objConta.divida) {
        objConta.divida += valor;
    } else {
        console.log("Limite de empréstimo ultrapassado!");
    }
    return objConta;
}

function pagarDivida(objConta, valor) {
    if (objConta.divida >= valor) {
        objConta.divida -= valor;
    } else {
        console.log("Valor maior que a dívida!");
    }
    return objConta;
}
function menu (){
    let escolha = prompt ('escolha uma opereçao:/n1. depositar/n2. sacar/n3. emprestar/n4. pagar divida/n5. ver saldo da divida/n6. sair ')
}
// Função para o menu de operações
function menu() {
    let escolha = prompt("Escolha uma operação:\n1. Depositar\n2. Sacar\n3. Emprestar\n4. Pagar dívida\n5. Ver saldo e dívida\n6. Sair");

    switch (escolha) {
        case "1":
            let valorDeposito = parseFloat(prompt("Quanto deseja depositar?"));
            conta = depositar(conta, valorDeposito);
            console.log("Após depósito:", conta);
            break;
        case "2":
            let valorSaque = parseFloat(prompt("Quanto deseja sacar?"));
            conta = sacar(conta, valorSaque);
            console.log("Após saque:", conta);
            break;
        case "3":
            let valorEmprestimo = parseFloat(prompt("Quanto deseja pegar de empréstimo?"));
            conta = emprestar(conta, valorEmprestimo);
            console.log("Após empréstimo:", conta);
            break;
        case "4":
            let valorPagamento = parseFloat(prompt("Quanto deseja pagar da dívida?"));
            conta = pagarDivida(conta, valorPagamento);
            console.log("Após pagamento da dívida:", conta);
            break;
        case "5":
            console.log("Saldo atual:", conta.saldo);
            console.log("Dívida atual:", conta.divida);
            break;
        case "6":
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida.");
            break;
    }

    // Chama a função novamente para o próximo comando até o usuário escolher "Sair"
    if (escolha !== "6") {
        menu();
    }
}

// Inicia o menu
menu();