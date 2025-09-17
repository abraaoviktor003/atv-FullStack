
    fetch("https://fakestoreapi.com/products")
      .then(resposta => resposta.json()) // converte para JSON

      .then(produtos => {

        const container = document.getElementById("produtos")

        for (let i = 0; i < produtos.length; i++) {
          const produto = produtos[i]

 
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

          container.appendChild(card)
        }
      })

      .catch(erro => {
     
        const container = document.getElementById("produtos")
        container.innerHTML = `<p class="text-danger">Erro ao carregar produtos: ${erro}</p>`
      })