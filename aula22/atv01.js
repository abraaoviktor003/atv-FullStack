// 1. Usamos prompt() para pedir o nome do usuário.
        // O valor digitado será armazenado na variável "nomeUsuario".
        let nomeUsuario = prompt("Digite seu nome:")

        // 2. Selecionamos o elemento <h1> usando getElementsByTagName().
        // Esse método retorna uma HTMLCollection (parecida com um array) com todos os elementos <h1>.
        // Como só temos um <h1>, pegamos o índice [0].
        let titulo = document.getElementsByTagName("h1")[0]

        // 3. Alteramos o conteúdo do <h1> usando innerHTML.
        // innerHTML define o conteúdo HTML/texto dentro da tag.
        titulo.innerHTML = `Bem-vindo, ${nomeUsuario}!`