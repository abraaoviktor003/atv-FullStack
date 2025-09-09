// O operador delete remove uma propriedade de um objeto.
// Após a exclusão, a propriedade deixa de existir no objeto.
delete pet.tamanho

console.log(pet)


// Trazer o nome de todas as propriedades do objeto
console.log(Object.keys(pet)) // retorna um array com as chaves (nomes das propriedades)


// Trazer o valor de todas as propriedades do objeto
console.log(Object.values(pet)) // retorna um array com os valores das propriedades


// Trazer o nome de todas as propriedades do objeto
console.log(Object.keys(pet)) // retorna um array com as chaves (nomes das propriedades)

// Trazer o valor de todas as propriedades do objeto
console.log(Object.values(pet)) // retorna um array com os valores das propriedades


// Exibir todas as informações do objeto pet
console.log(pet)

// Percorrer todas as propriedades do objeto
for (let x in pet) {
    console.log(x)        // nome da propriedade
    console.log(pet[x])   // valor da propriedade
}
