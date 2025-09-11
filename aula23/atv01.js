  const qtdTarefas = parseInt(prompt("Quantas tarefas você vai fazer hoje?"))

        const lista = document.createElement("ul")
        lista.style.listStyleType = "circle"
        lista.style.paddingLeft = "20px"

        for (let i = 1; i <= qtdTarefas; i++) {
            const tarefaTexto = prompt(`Digite a tarefa ${i}:`)
            const item = document.createElement("li")
            item.textContent = tarefaTexto
            item.style.margin = "5px 0"
            item.style.color = "#333"
            lista.appendChild(item)
        }

        document.body.appendChild(lista)