 const lousa = document.getElementById("lousa")
        const corOriginal = lousa.style.backgroundColor

        document.getElementById("btnVermelho").addEventListener("click", () => {
            lousa.style.backgroundColor = "red"
        })

        document.getElementById("btnAzul").addEventListener("click", () => {
            lousa.style.backgroundColor = "blue"
        })

        document.getElementById("btnVerde").addEventListener("click", () => {
            lousa.style.backgroundColor = "green"
        })

        lousa.addEventListener("mouseenter", () => {
            lousa.style.backgroundColor = corOriginal
        }) 