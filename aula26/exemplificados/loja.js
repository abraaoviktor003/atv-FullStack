/******************************************************
     * Passo 1: Fazer requisição GET para a API
     * ----------------------------------------------------
     * - Usamos fetch() com a URL da FakeStoreAPI
     * - A resposta será um array de produtos
     ******************************************************/
    fetch("https://fakestoreapi.com/products")
    .then(resposta => resposta.json()) // converte para JSON

    .then(produtos =>{
         /******************************************************
         * Passo 2: Selecionar a div onde os cards serão inseridos
         ******************************************************/
   
    const container = document.getElementById("produtos")
       /******************************************************
         * Passo 3: Usar um laço for para percorrer os produtos
         * ----------------------------------------------------
         * - Para cada produto, criamos um card Bootstrap
         * - Usamos template string para montar o HTML
         ******************************************************/
    for (let i = 0; i < produtos.length; i++) {
        const produtos = produtos[i];
    // Criando o card com Bootstrap 5
    const card = document.createElement("div")
    card.className = "col-md-4"

    card.innerHTML = `
    <div class="card h-100 shadow-sm">
              <img src="${produto.image}" class="card-img-top p-3" alt="${produto.title}" style="height: 250px; object-fit: contain;">
              <div class="card-body">
                <h5 class="card-title">${produto.title}</h5>
                <p class="card-text">${produto.description.substring(0, 100)}...</p>
                <p class="fw-bold text-success">R$ ${produto.price.toFixed(2)}</p>
              </div>
              <div class="card-footer text-center">
                <button class="btn btn-primary">Comprar</button>
              </div>
            </div>
    `
     // Adiciona o card à div principal
    container.appendChild(card)
    }
 })
 .catch(erro =>{
    /******************************************************
         * Passo 4: Tratamento de erro
         * ----------------------------------------------------
         * - Se a requisição falhar, mostramos uma mensagem
         ******************************************************/
    const container = document.getElementById("produtos")
    container.innerHTML = `<p class="text-danger">Erro ao carregar produtos: ${erro}</p>`

 })
