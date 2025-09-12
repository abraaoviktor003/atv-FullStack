  /******************************************************
         * FETCH
         * ----------------------------------------------------
         * - É uma função nativa do JavaScript para fazer
         *   requisições HTTP (buscar ou enviar dados).
         * - Sempre retorna uma Promise (promessa).
         * - Sintaxe básica: fetch("URL")
         ******************************************************/

        // URL de exemplo (API pública de usuários)
        const url = "https://jsonplaceholder.typicode.com/users"

        /******************************************************
         * THEN
         * ----------------------------------------------------
         * - Método usado para tratar o resultado de uma Promise
         *   quando ela é resolvida com sucesso.
         * - No caso do fetch, o primeiro .then() normalmente
         *   serve para converter a resposta para JSON.
         * - Podemos encadear vários .then() para processar
         *   os dados passo a passo.
         ******************************************************/

        /******************************************************
         * CATCH
         * ----------------------------------------------------
         * - Método usado para capturar erros que acontecerem
         *   durante a execução da Promise.
         * - Pode ser erro de rede, URL errada, servidor fora do ar.
         * - Sempre vem no final da cadeia de .then().
         ******************************************************/

        // Exemplo prático:
        fetch(url)
            .then(resposta => {
                // Converte a resposta para JSON
                return resposta.json()
            })
            .then(dados => {
                // Manipula os dados recebidos
                const lista = document.getElementById("lista")
                dados.forEach(usuario => {
                    const li = document.createElement("li")
                    li.textContent = `${usuario.name} - ${usuario.email}`
                    lista.appendChild(li)
                })
            })
            .catch(erro => {
                // Captura e mostra erros
                console.error("Ocorreu um erro na requisição:", erro)
            })
