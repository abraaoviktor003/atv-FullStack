
     const novoProduto = {
      title: "Camisa Estilosa",
      price: 49.99,
      description: "Camisa de algodão com estampa moderna",
      category: "roupas masculinas",
      image: "https://i.imgur.com/QkY7Z4F.jpg"
    }

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(novoProduto)
    })

    .then(resposta => resposta.json())
    .then(dados => {
      console.log("✅ Produto criado com sucesso:")
      console.log(dados)
      alert("Produto criado! ID: " + dados.id)
    })

    .catch(erro => {
      console.error("❌ Erro ao criar produto:", erro)
      alert("Erro ao criar produto. Veja o console.")
    })