// Função que altera a cor de todos os elementos com a classe "destaque"
        function mudarCor() {
            // Seleciona todos os elementos com a classe "destaque"
            // Retorna um HTMLCollection (parecido com array)
            let elementos = document.getElementsByClassName("destaque")

            // Percorre o HTMLCollection usando um loop for
            for (let i = 0; i < elementos.length; i++) {
                elementos[i].style.color = "red" // altera a cor do texto
                elementos[i].style.fontWeight = "bold" // extra: deixa o texto em negrito
            }
        }