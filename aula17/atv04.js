// O Banco do Cleitinho distribuiu 8 senhas. Existe uma fila de atendimento.
let atendimento = ['Maria', 'João', 'Paula', 'Joana', 'Ana', 'Joaquim', 'Pedro', 'Igor'];

// Fila de clientes que já foram atendidos
let jaAtendidos = [];

// Chegando uma prioridade (Cliente Personalité passará na frente de todos os demais na ordem de chegada)
let clienteEspecial = 'Helena de Manuel Carlos';

// Adicionando o cliente especial na frente da fila
atendimento.unshift(clienteEspecial);

// Laço de atendimento: retirando os clientes da fila e armazenando na lista de atendidos
for (let i = 0; i < atendimento.length; i++) {
    // Retira o cliente do início da fila
    let clienteAtendido = atendimento.shift();
    // Adiciona o cliente ao final da lista de já atendidos
    jaAtendidos.push(clienteAtendido);
}

// Imprimir a ordem dos atendimentos
console.log("Ordem de atendimento:");
for (let i = 0; i < jaAtendidos.length; i++) {
    console.log(jaAtendidos[i]);
}
