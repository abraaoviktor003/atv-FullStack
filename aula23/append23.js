/*****************************************************
  appendChild(node) vs append(...nodesOrStrings)
  ----------------------------------------------------
  appendChild:
  - Recebe APENAS um Node por vez.
  - Retorna o node inserido.
  - Mais antigo e amplamente compatível.

  append:
  - Recebe múltiplos argumentos (Nodes e/ou strings).
  - Não retorna nada (undefined).
  - Útil para adicionar texto e vários nós de uma só vez.

  Quando usar:
  - appendChild: quando você tem 1 nó e quer compatibilidade máxima.
  - append: quando quer simplicidade e adicionar vários conteúdos.

  Observação:
  - Ambos inserem no FINAL do elemento pai.
*****************************************************/
const container = document.querySelector("#container")

// Exemplo prático: criar um bloco e inserir usando os dois métodos
if (container) {
  const bloco = document.createElement("div")
  bloco.className = "bloco"
  bloco.textContent = "Bloco via appendChild"
  container.appendChild(bloco) // insere o div

  const badge = document.createElement("span")
  badge.className = "badge"
  badge.textContent = " Novo "

  // Com append, dá pra misturar nós e texto de uma vez:
  container.append(
    " | ",
    badge,
    " adicionado com append"
  )
}

//exemplo pratico de append/createselector

// primeiro passo: selecionar o elemento pai
const segundaDiv = document.querySelectorAll('div')[1]
// seleciona apenas a segunda div do nodelist

// segundo passo: criando o elemento filho
const tituloExemplo = document.createElement('h1')

// terceiro passo: adicionar o conteúdo da tag criada
tituloExemplo.innerHTML = 'Fui criado com JS e adicionado ao meu pai <3'

// quarto passo: atribuir ao pai o seu filho criado com conteúdo
segundaDiv.appendChild(tituloExemplo)
