/*****************************************************
  document.querySelector(selector)
  ----------------------------------------------------
  O que é:
  - Seleciona e retorna o PRIMEIRO elemento do DOM que
    corresponder ao seletor CSS informado.
  - Se não encontrar nada, retorna null.

  Como usar seletores:
  - Por id:      "#meuId"
  - Por classe:  ".minha-classe"
  - Por tag:     "div", "p", "h1"
  - Combinados:  "section .card > h2", "ul li.item:first-child"

  Retorno:
  - Um único Element (ou null).

  Erros comuns:
  - Esquecer o "." para classe ou "#" para id.
  - Tentar acessar propriedades quando o retorno é null.
*****************************************************/
const titulo = document.querySelector("#titulo-principal") // por id
const primeiroCard = document.querySelector(".card")       // por classe (primeiro que encontrar)
const primeiroParagrafo = document.querySelector("p")      // por tag

// Exemplo prático: alterar texto e estilo se o elemento existir
if (titulo) {
  titulo.textContent = "Título alterado via querySelector"
  titulo.style.color = "teal"
}
if (primeiroCard) {
  primeiroCard.style.border = "1px solid #ccc"
  primeiroCard.style.padding = "8px"
}
if (primeiroParagrafo) {
  primeiroParagrafo.textContent = "Este é o primeiro <p> encontrado na página."
}

/*****************************************************
  document.querySelectorAll(selector)
  ----------------------------------------------------
  O que é:
  - Seleciona e retorna TODOS os elementos que batem com
    o seletor CSS, em uma NodeList (estática).

  Iteração:
  - A NodeList aceita for...of e forEach.

  Diferenças para getElementsByClassName / TagName:
  - querySelectorAll usa seletores CSS e retorna NodeList (estática).
  - getElementsBy* retorna HTMLCollection (ao vivo/dinâmica).

  Retorno:
  - NodeList (pode estar vazia, mas nunca é null).
*****************************************************/
const itens = document.querySelectorAll(".item") // todos com classe .item

// Exemplo prático: adicionar uma classe e um estilo em todos os itens
itens.forEach((el, idx) => {
  el.classList.add("ativo")
  el.style.background = idx % 2 === 0 ? "#f7f7f7" : "#eef6ff"
})
