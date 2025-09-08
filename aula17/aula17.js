//array exemplos praticos usados para exercitar

let numero = 1;
console.log(numero);

let gato = ['cleitinho', 'laranja', 13,'Paulista', numero, true]; // ha 4 informaçoes
console.log(gato[0]);
console.log(`O gato é ${gato[1]}`); // especificando
// atualizando o nome
user[0] = 'Cleitinho Lima';
console.log(user);
user[3] = 'nova informação adiciona por indice';
console.log(user);


//exemplo pratico em uso:
let user = ['Cleitinho Oliver Nicole Lima da Silva', 'cleitinho@gato.com', 'cleitinhoGato'];
console.log(`Nome: ${user[0]}`);
console.log(`Email: ${user[1]}`);
console.log(`Nome de Usuário: ${user[2]}`);

// correção de 19:16
console.log(user);

// atualizando o nome
user[0] = 'Cleitinho Lima';
console.log(user);

// nova informação adiciona por índice
console.log(user);


//exemplos praticos METODOS!
let frutas = ['banana', 'maçã'];

// Adiciona no final
frutas.push('laranja'); // ['banana', 'maçã', 'laranja']

// Remove do final
frutas.pop(); // ['banana', 'maçã']

// Adiciona no início
frutas.unshift('morango'); // ['morango', 'banana', 'maçã']

// Remove do início
frutas.shift(); // ['banana', 'maçã']

console.log(frutas);
