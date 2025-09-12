const qtd = parseInt(prompt("Quantas atividades você vai fazer hoje?"))

        const lista = document.createElement("ul")

        for (let i = 1; i <= qtd; i++) {
            const texto = prompt(`Digite o texto da atividade ${i}:`)
            const urgente = prompt("Essa atividade é urgente? (sim/não)").toLowerCase()

            const item = document.createElement("li")
            item.textContent = texto

            if (urgente === "sim") {
                item.classList.add("urgente")
            } else {
                item.classList.add("naourgente")
            }

            lista.appendChild(item)
        }

        document.body.appendChild(lista)