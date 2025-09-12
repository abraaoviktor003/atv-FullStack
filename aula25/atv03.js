/******************************************************
         * Passo 1: Capturar elementos do HTML
         * ----------------------------------------------------
         * - document.getElementById("btn2023") → botão 2023
         * - document.getElementById("btn2024") → botão 2024
         * - document.getElementById("btn2025") → botão 2025
         * - document.getElementById("divFeriados") → área onde
         *   vamos mostrar a lista de feriados
         ******************************************************/
        const btn2023 = document.getElementById("btn2023")
        const btn2024 = document.getElementById("btn2024")
        const btn2025 = document.getElementById("btn2025")
        const divFeriados = document.getElementById("divFeriados")

        /******************************************************
         * Passo 2: Criar função para buscar e mostrar feriados
         * ----------------------------------------------------
         * - Recebe o ano como parâmetro
         * - Monta a URL da API: https://brasilapi.com.br/api/feriados/v1/{ano}
         * - Usa fetch() para buscar os dados
         * - Converte a resposta para JSON
         * - Limpa a div antes de mostrar os novos feriados
         * - Cria elementos <p> para cada feriado e adiciona na div
         ******************************************************/
        function buscarFeriados(ano) {
            const url = `https://brasilapi.com.br/api/feriados/v1/${ano}`

            fetch(url)
                .then(resposta => resposta.json()) 
                // .json() → converte a resposta para objeto JavaScript

                .then(dados => {
                    divFeriados.innerHTML = `<h2>Feriados ${ano}</h2>` // título

                    dados.forEach(feriado => {
                        const p = document.createElement("p")
                        p.textContent = `${feriado.date} - ${feriado.name}`
                        divFeriados.appendChild(p)
                    })
                })

                .catch(erro => {
                    /******************************************************
                     * Passo 3: Tratamento de erros
                     * ----------------------------------------------------
                     * - .catch() captura erros de rede ou execução
                     * - Mostramos mensagem de erro na div
                     ******************************************************/
                    divFeriados.innerHTML = `<p style="color:red;">Erro ao buscar feriados: ${erro}</p>`
                })
        }

        /******************************************************
         * Passo 4: Ligar eventos de clique aos botões
         * ----------------------------------------------------
         * - addEventListener("click", () => buscarFeriados(ano))
         * - Quando o botão for clicado, chamamos a função com o ano certo
         ******************************************************/
        btn2023.addEventListener("click", () => buscarFeriados(2023))
        btn2024.addEventListener("click", () => buscarFeriados(2024))
        btn2025.addEventListener("click", () => buscarFeriados(2025))