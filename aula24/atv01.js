        const entrada = document.getElementById("entrada")
        const prato = document.getElementById("prato")
        const sobremesa = document.getElementById("sobremesa")
        const bebida = document.getElementById("bebida")
        const totalSpan = document.getElementById("total")

        function atualizarTotal() {
            const soma = 
                Number(entrada.value) +
                Number(prato.value) +
                Number(sobremesa.value) +
                Number(bebida.value)

            totalSpan.textContent = soma.toFixed(2).replace(".", ",")
        }

        // Evento change em todos os inputs
        entrada.addEventListener("change", atualizarTotal)
        prato.addEventListener("change", atualizarTotal)
        sobremesa.addEventListener("change", atualizarTotal)
        bebida.addEventListener("change", atualizarTotal)
