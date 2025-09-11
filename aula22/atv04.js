// Seleciona o elemento <ol> pelo id
        let lista = document.getElementById("minhaLista")

        // Loop para pedir 5 itens ao usuário
        for (let i = 0; i < 5; i++) {
            let itemTexto = prompt(`Digite o texto do item ${i + 1}:`)
            // Concatena o item dentro do innerHTML da lista
            lista.innerHTML += `<li>${itemTexto}</li>`
        }