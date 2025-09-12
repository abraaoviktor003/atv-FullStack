/*****************************************************
  document.querySelector(seletorCSS)
  ----------------------------------------------------
  O que é:
  - É um método do DOM usado para selecionar o PRIMEIRO
    elemento que corresponda ao seletor CSS informado.
  - Se não encontrar nenhum elemento, retorna null.

  Como funciona:
  - Recebe como parâmetro uma string que representa um
    seletor CSS válido.
  - Pode selecionar por:
      • ID → "#meuId"
      • Classe → ".minhaClasse"
      • Tag → "div", "p", "h1"
      • Seletor combinado → "section .card > h2"
      • Pseudo-classes → "ul li:first-child"

  Retorno:
  - Um único elemento (o primeiro que bater com o seletor).
  - null se não encontrar nada.

  Diferença para querySelectorAll():
  - querySelector → retorna apenas o primeiro elemento.
  - querySelectorAll → retorna TODOS os elementos que
    correspondem ao seletor, em uma NodeList.

  Cuidados:
  - Sempre verifique se o retorno não é null antes de
    manipular o elemento, para evitar erros.
  - O seletor precisa ser válido no padrão CSS.

*****************************************************/

// ===== EXEMPLO PRÁTICO =====

// HTML de exemplo:
// <h1 id="titulo">Título original</h1>
// <p class="descricao">Primeiro parágrafo</p>
// <p class="descricao">Segundo parágrafo</p>

// Selecionando por ID
const titulo = document.querySelector("#titulo")

// Selecionando por classe (pega só o primeiro .descricao)
const primeiraDescricao = document.querySelector(".descricao")

// Selecionando por tag (pega o primeiro <p>)
const primeiroParagrafo = document.querySelector("p")

// Manipulando os elementos encontrados
if (titulo) {
  titulo.textContent = "Título alterado com querySelector"
  titulo.style.color = "darkblue"
}

if (primeiraDescricao) {
  primeiraDescricao.textContent = "Este é o primeiro elemento com a classe .descricao"
  primeiraDescricao.style.fontWeight = "bold"
}

if (primeiroParagrafo) {
  primeiroParagrafo.style.backgroundColor = "#f0f0f0"
}
