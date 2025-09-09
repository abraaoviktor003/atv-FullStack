// Função para calcular a média
function calcularMedia(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 4 && media < 7) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}
const nota1=parseFloat(prompt('digite a primeira nota'))
const nota2=parseFloat(prompt('digite a segunda nota'))
const nota3=parseFloat(prompt('digite a terceira nota'))

const resultado = calcularMedia(nota1,nota2,nota3); 
alert(`resultado:${resultado}`)