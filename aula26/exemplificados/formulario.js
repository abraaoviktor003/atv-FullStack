 /******************************************************
     * Passo 1: Capturar o formulário e os campos
     * ----------------------------------------------------
     * - document.getElementById() → pega elementos do HTML
     ******************************************************/
    const form = document.getElementById("formUsuario")
    const inputUsername = document.getElementById("username")
    const inputPassword = document.getElementById("password")
    const iputEmail = document.getElementById("email")

    /******************************************************
     * Passo 2: Adicionar evento de submit ao formulário
     * ----------------------------------------------------
     * - addEventListener("submit", função) → executa quando
     *   o formulário é enviado
     * - event.preventDefault() → impede o recarregamento da página
     ******************************************************/
    form.addEventListener("submit", function(event) {
        event.preventDefault()
         /******************************************************
       * Passo 3: Criar objeto com os dados do usuário
       * ----------------------------------------------------
       * - Pegamos os valores dos inputs com .value
       * - Montamos o objeto no formato esperado pela API
       ******************************************************/
      const novoUsuario = {
        username: inputUsername.value,
        Password: inputPassword.value,
        email: iputEmail.value,
      }
       /******************************************************
       * Passo 4: Fazer requisição POST para a API
       * ----------------------------------------------------
       * - URL: https://fakestoreapi.com/users
       * - method: "POST" → estamos enviando dados
       * - headers: tipo de conteúdo JSON
       * - body: JSON.stringify(novoUsuario) → converte objeto para JSON
       ******************************************************/
      fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novoUsuario)
      })
      /******************************************************
       * Passo 5: Tratar a resposta
       * ----------------------------------------------------
       * - Primeiro .then() → converte resposta para JSON
       * - Segundo .then() → mostra dados no console e alerta
       ******************************************************/
      .then(reposta => resposta.json())
      .then (dados =>{
        console.log ("✅ Usuário criado:", dados)
        alert ("Usuário criado com sucesso! ID: " + dados.id)
        form.reset()// limpa o formulário
      })
       /******************************************************
       * Passo 6: Tratar erros
       * ----------------------------------------------------
       * - .catch() → captura erros de rede ou execução
       ******************************************************/
      .catch(erro =>{
        console.error("❌ Erro ao criar usuário:", erro)
         alert("Erro ao criar usuário. Veja o console.")
      })
 })