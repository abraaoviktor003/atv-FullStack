// Criar o array com as informações do ônibus
let onibus = [1, 24, 42, 8]; // [porta, janelas, bancos, rodas]

// a) Criando a variável que armazena as informações do ônibus
console.log("Informações iniciais do ônibus:");
console.log("Portas: " + onibus[0]);
console.log("Janelas: " + onibus[1]);
console.log("Bancos: " + onibus[2]);
console.log("Rodas: " + onibus[3]);

// b) Atualizar a quantidade de portas para 2
onibus[0] = 2;  // Atualizando o valor da quantidade de portas

console.log("\nApós atualizar as portas:");
console.log("Portas: " + onibus[0]);

// c) Inserir a informação da placa
let placa = "hhh-123";  // Adicionando a placa como uma nova variável

console.log("\nInformações completas do ônibus:");
console.log("Placa: " + placa);
