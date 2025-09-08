// Criar a lista de atividades
let atividades = [];

// Pedir ao usuário quantas atividades serão adicionadas
let quantidade = prompt("Quantas atividades você quer adicionar?");

// Laço de repetição para adicionar as atividades
for (let i = 0; i < quantidade; i++) {
    let atividade = prompt("Digite a atividade " + (i + 1) + ":");
    atividades.unshift(atividade); // Adiciona a atividade no começo da lista
}

// Mostrar as atividades
console.log("Atividades:", atividades);
