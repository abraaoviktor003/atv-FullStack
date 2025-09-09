function contarLetras(palavra) {
    console.log("A palavra possui " + palavra.length + " letras.");
}
let palavrauser = prompt('digite uma palavra')
contarLetras(palavrauser);  // Saída: "A palavra possui 6 letras."
contarLetras(prompt('digite uma palavra para passar diretamente para a funcao')); // Saída: "A palavra possui 7 letras."
