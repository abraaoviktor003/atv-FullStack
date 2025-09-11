// Nosso array de funcionários (mesmo formato usado antes)
let funcionarios = [
  { nome: 'João', departamento: 'TI', filhos: 0, salario: 4000 },
  { nome: 'Maria', departamento: 'RH', filhos: 2, salario: 3000 },
  { nome: 'Pedro', departamento: 'Financeiro', filhos: 1, salario: 5000 },
  { nome: 'Ana', departamento: 'TI', filhos: 1, salario: 4500 },
  { nome: 'Lucas', departamento: 'RH', filhos: 0, salario: 2800 },
  { nome: 'Carla', departamento: 'Financeiro', filhos: 0, salario: 6000 },
  { nome: 'Bruno', departamento: 'TI', filhos: 0, salario: 3600 }
]

// Usando reduce() para somar todos os salários
// O reduce() percorre o array e acumula um valor final.
// Ele recebe dois parâmetros principais na função callback:
// 1. acumulador → guarda o valor acumulado até o momento
// 2. elementoAtual → o item atual do array que está sendo processado
// O segundo argumento do reduce (0) é o valor inicial do acumulador.
let totalSalarios = funcionarios.reduce((acumulador, funcionario) => {
    // Em cada passo, somamos o salário do funcionário ao acumulador
    return acumulador + funcionario.salario
}, 0) // Começamos com 0 para iniciar a soma

console.log("Valor total dos salários:", totalSalarios)
