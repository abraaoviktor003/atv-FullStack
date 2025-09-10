let listaPessoas = [
  { nome: 'João', idade: 20 },
  { nome: 'Maria', idade: 25 },
  { nome: 'José', idade: 40 },
  { nome: 'Pedro', idade: 30 },
  { nome: 'Ana', idade: 15 },
  { nome: 'Lucas', idade: 10 }
]

// Usando filter() para criar um novo array apenas com as pessoas
// cuja idade seja >= 18 e <= 25
let pessoasFiltradas = listaPessoas.filter((pessoa) => {
  // Aqui verificamos a condição para manter no novo array
  return pessoa.idade >= 18 && pessoa.idade <= 25
})

console.log("Pessoas com idade entre 18 e 25 anos:", pessoasFiltradas)
