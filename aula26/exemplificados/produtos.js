 /******************************************************
     * Passo 1: Criar o objeto do produto
     * ----------------------------------------------------
     * - Esse objeto representa os dados que serão enviados
     *   para a API via método POST.
     * - Os campos esperados são:
     *   title, price, description, category, image
     ******************************************************/
    const novoProduto = {
        title: "camisa estilosa",
        Price: 49.90,
        description: "camisa de algodao com estampa moderna",
        category: "roupas masculinas",
        Image: "https://i.imgur.com/QkY7Z4F.jpg"
    }
    /******************************************************
     * Passo 2: Fazer a requisição POST com fetch()
     * ----------------------------------------------------
     * - URL da API: https://fakestoreapi.com/products
     * - method: "POST" → indica que estamos enviando dados
     * - headers: define o tipo de conteúdo como JSON
     * - body: envia o objeto convertido para JSON com JSON.stringify()
     ******************************************************/
    fetch("https://fakestoreapi.com/products",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novoProduto)
    })
     /******************************************************
     * Passo 3: Tratar a resposta com .then()
     * ----------------------------------------------------
     * - O primeiro .then() converte a resposta para JSON
     * - O segundo .then() mostra os dados retornados pela API
     ******************************************************/
    .then(resposta => resposta.json())
    .then(dados =>{
        console.log("✅ Produto criado com sucesso:")
        console.log(dados)
        alert("produto criado! ID "+ dados.id)
    })
     /******************************************************
     * Passo 4: Tratar erros com .catch()
     * ----------------------------------------------------
     * - Se algo der errado (ex: sem internet, erro de sintaxe),
     *   o .catch() captura e mostra o erro no console
     ******************************************************/
    .catch(erro =>{
        console.error ("❌ Erro ao criar produto:", erro)
        alert("erro ao criar produto. veja o console.")
    })
