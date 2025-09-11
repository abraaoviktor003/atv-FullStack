// Primeiro, criamos um array chamado "funcionarios".
// Cada elemento desse array é um OBJETO que representa um funcionário.
// Cada funcionário tem as propriedades: nome, departamento, filhos e salario.
let funcionarios = [
  { nome: 'João', departamento: 'TI', filhos: 0, salario: 4000 },
  { nome: 'Maria', departamento: 'RH', filhos: 2, salario: 3000 },
  { nome: 'Pedro', departamento: 'Financeiro', filhos: 1, salario: 5000 },
  { nome: 'Ana', departamento: 'TI', filhos: 1, salario: 4500 },
  { nome: 'Lucas', departamento: 'RH', filhos: 0, salario: 2800 },
  { nome: 'Carla', departamento: 'Financeiro', filhos: 0, salario: 6000 },
  { nome: 'Bruno', departamento: 'TI', filhos: 0, salario: 3600 }
]

// (a) Criar um array para cada departamento
// Aqui usamos o método filter() para percorrer o array "funcionarios".
// O filter() cria um NOVO array contendo apenas os elementos que passam no teste lógico.
// No caso, o teste é: "func.departamento === 'TI'".
// Isso significa: "Pegue apenas os funcionários cujo departamento seja exatamente 'TI'".
let funcionariosTI = funcionarios.filter(func => func.departamento === 'TI')

// Fazemos o mesmo para o departamento de RH.
let funcionariosRH = funcionarios.filter(func => func.departamento === 'RH')

// E também para o departamento Financeiro.
let funcionariosFinanceiro = funcionarios.filter(func => func.departamento === 'Financeiro')

// Exibimos no console os três novos arrays criados.
console.log("Funcionários do departamento de TI:", funcionariosTI)
console.log("Funcionários do departamento de RH:", funcionariosRH)
console.log("Funcionários do departamento Financeiro:", funcionariosFinanceiro)

// (b) Filtrar funcionários do TI, sem filhos e com salário > 3500
// Aqui o filter() vai ter uma condição composta usando o operador lógico && (E).
// A condição é:
// 1. O funcionário deve trabalhar no departamento de TI.
// 2. O funcionário deve ter exatamente 0 filhos.
// 3. O salário do funcionário deve ser maior que 3500.
let funcionariosTIsemFilhosSalarioAlto = funcionarios.filter(func => 
    func.departamento === 'TI' && func.filhos === 0 && func.salario > 3500
)

// Exibimos o resultado final dessa filtragem.
console.log("Funcionários de TI sem filhos e com salário acima de 3500:", funcionariosTIsemFilhosSalarioAlto)
