/*****************************************************
  removeChild()
  ----------------------------------------------------
  O que é:
  - É um método do DOM usado para remover um elemento
    filho (child node) de um elemento pai (parent node).

  Como funciona:
  - Você precisa ter uma referência para o elemento pai
    e também para o elemento filho que deseja remover.
  - A chamada é feita assim:
        elementoPai.removeChild(elementoFilho)

  Regras importantes:
  1) O elemento que você quer remover PRECISA ser filho
     direto do elemento pai que você está usando no método.
     Caso contrário, vai gerar um erro.
  2) O método retorna o próprio nó removido (caso precise
     reutilizar ou inspecionar depois).
  3) Se o elemento filho não existir dentro do pai, o
     JavaScript lança um erro do tipo:
        "NotFoundError: Node was not found"

  Diferença para outros métodos:
  - `remove()` → remove o próprio elemento diretamente,
    sem precisar acessar o pai.
  - `removeChild()` → exige que você acesse o pai e passe
    o filho como argumento.

  Quando usar:
  - Quando você já tem o pai e quer remover um filho
    específico.
  - Quando precisa garantir que está removendo de um
    contexto específico (por exemplo, uma lista dentro
    de um container).

*****************************************************/

// ===== EXEMPLO PRÁTICO =====

// 1) Criar um elemento pai (ul) e alguns filhos (li)
const lista = document.createElement("ul")
lista.id = "minhaLista"

const item1 = document.createElement("li")
item1.textContent = "Item 1"

const item2 = document.createElement("li")
item2.textContent = "Item 2"

const item3 = document.createElement("li")
item3.textContent = "Item 3"

// Adiciona os itens à lista
lista.appendChild(item1)
lista.appendChild(item2)
lista.appendChild(item3)

// Adiciona a lista ao body
document.body.appendChild(lista)

// 2) Remover o segundo item (item2) usando removeChild
lista.removeChild(item2)

// Agora a lista terá apenas "Item 1" e "Item 3"
