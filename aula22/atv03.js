 let textoUsuario = prompt("Digite um texto:")

        let elemento = document.getElementById("importante")

        elemento.innerHTML = `<strong>${textoUsuario}</strong>`

        // Toque extra: cor e tamanho para destacar o texto
        elemento.style.color = "darkred"
        elemento.style.fontSize = "20px"