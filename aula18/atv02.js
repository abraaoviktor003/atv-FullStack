// 1. Criação do objeto aluno
let aluno = {
  nome: "Carlos", // Nome do aluno
  notas: [], // Array vazio para armazenar as notas
  media: 0, // A média será calculada e atribuída aqui
  situacao: "" // Situação (aprovado ou reprovado)
};

// 2. Adicionando as notas ao array
aluno.notas.push(7.8); // Adicionando nota 7.8
aluno.notas.push(8.5); // Adicionando nota 8.5
aluno.notas.push(6.7); // Adicionando nota 6.7

// 3. Calculando a média das notas
let somaNotas = 0;
for (let i = 0; i < aluno.notas.length; i++) {
  somaNotas += aluno.notas[i]; // Somando todas as notas
}

aluno.media = somaNotas / aluno.notas.length; // Calculando a média

// 4. Avaliando a situação do aluno
if (aluno.media >= 7) {
  aluno.situacao = "Aprovado"; // Se média >= 7, aprovado
} else {
  aluno.situacao = "Reprovado"; // Se média < 7, reprovado
}

// 5. Imprimindo as informações do aluno de forma apresentável
for (let propriedade in aluno) {
  console.log(propriedade + ": " + aluno[propriedade]); // Exibe cada propriedade e seu valor
}
