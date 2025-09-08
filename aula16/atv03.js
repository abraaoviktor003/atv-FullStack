let faturamentoLojaA = 0; // Acumulador para o faturamento da Loja A
let faturamentoLojaB = 54000; // Faturamento da Loja B
let quantidadeClientes = 5; // A quantidade de clientes a serem cadastrados

// Loop que irá rodar 5 vezes, uma para cada cliente
for (let i = 1; i <= quantidadeClientes; i++) {
    let faturamentoCliente = Number(prompt(`Digite o faturamento do cliente ${i}:`)); // Lê o faturamento de cada cliente
    faturamentoLojaA += faturamentoCliente; // Acumula o faturamento da loja A
}

// Verificando se o faturamento da Loja A superou o da Loja B
if (faturamentoLojaA > faturamentoLojaB) {
    console.log(`O faturamento da Loja A superou o da Loja B em R$ ${faturamentoLojaA - faturamentoLojaB}.`);
} else {
    console.log("O faturamento da Loja A não superou o faturamento da Loja B.");
}

