const form = document.getElementById("formUsuario")
    const inputUsername = document.getElementById("username")
    const inputPassword = document.getElementById("password")
    const inputEmail = document.getElementById("email")

    form.addEventListener("submit", function(event) {
      event.preventDefault()

      const novoUsuario = {
        username: inputUsername.value,
        password: inputPassword.value,
        email: inputEmail.value
      }

      fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(novoUsuario)
      })
      .then(resposta => resposta.json())
      .then(dados => {
       
        const usuarioCompleto = { id: dados.id, ...novoUsuario }

        console.log("✅ Usuário criado com sucesso:")
        console.log(usuarioCompleto)

        alert(
          `Usuário criado!\n\nID: ${usuarioCompleto.id}\nUsername: ${usuarioCompleto.username}\nEmail: ${usuarioCompleto.email}`
        )

        form.reset()
      })
      .catch(erro => {
        console.error("❌ Erro ao criar usuário:", erro)
        alert("Erro ao criar usuário. Veja o console.")
      })
    })