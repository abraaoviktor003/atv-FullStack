 // Pede ao usuário o CEP via prompt
        const cep = prompt("Digite o CEP da sua residência (somente números):")

        // Monta a URL da API do ViaCEP usando o CEP digitado
        const url = `https://viacep.com.br/ws/${cep}/json/`

        // Faz a requisição usando fetch
        fetch(url)
            .then(resposta => resposta.json()) // Converte a resposta para JSON
            .then(dados => {
                console.log("Rua:", dados.logradouro) // Mostra o nome da rua no console
            })
            .catch(erro => {
                console.error("Erro ao buscar o CEP:", erro) // Mostra erro no console
            })


            