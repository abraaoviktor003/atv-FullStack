/******************************************************
         * Passo 1: Capturar os elementos do HTML
         * ----------------------------------------------------
         * - document.getElementById("btnGato") → pega o botão
         * - document.getElementById("divGatinho") → pega a div
         ******************************************************/
        const botao = document.getElementById("btnGato")
        const divGatinho = document.getElementById("divGatinho")

        /******************************************************
         * Passo 2: Criar a função que busca a imagem na API
         * ----------------------------------------------------
         * - fetch() → faz a requisição HTTP para a The Cat API
         * - URL usada: https://api.thecatapi.com/v1/images/search
         *   Essa rota retorna um array com 1 objeto contendo a
         *   propriedade "url" da imagem do gato.
         ******************************************************/
        function mostrarGatinho() {
            fetch("https://api.thecatapi.com/v1/images/search")
                .then(resposta => resposta.json()) 
                // .json() → converte a resposta para objeto JavaScript

                .then(dados => {
                    /******************************************************
                     * Passo 3: Criar o elemento <img> dinamicamente
                     * ----------------------------------------------------
                     * - document.createElement("img") → cria uma tag <img>
                     * - img.src = dados[0].url → define a URL da imagem
                     * - Limpar a div antes de adicionar a nova imagem
                     * - appendChild(img) → insere a imagem dentro da div
                     ******************************************************/
                    const img = document.createElement("img")
                    img.src = dados[0].url
                    img.alt = "Gatinho fofo"
                    img.style.maxWidth = "300px"
                    img.style.border = "2px solid #333"

                    divGatinho.innerHTML = "" // limpa a div
                    divGatinho.appendChild(img) // adiciona a imagem
                })

                .catch(erro => {
                    /******************************************************
                     * Passo 4: Tratamento de erros
                     * ----------------------------------------------------
                     * - .catch() → captura erros de rede ou execução
                     * - console.error() → mostra o erro no console
                     ******************************************************/
                    console.error("Erro ao buscar o gatinho:", erro)
                })
        }

        /******************************************************
         * Passo 5: Ligar o clique do botão à função
         * ----------------------------------------------------
         * - addEventListener("click", mostrarGatinho)
         *   → executa a função quando o botão for clicado
         ******************************************************/
        botao.addEventListener("click", mostrarGatinho)