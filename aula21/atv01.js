let listaPrecos = [100, 200, 300, 400, 500];

// Usando uma arrow function para aplicar o desconto de 15%
let precosDescontados = listaPrecos.map(preco => preco - (preco * 0.15));

console.log(precosDescontados);
