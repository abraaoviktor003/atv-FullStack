/*****************************************************
  document.createElement(tagName)
  ----------------------------------------------------
  O que é:
  - Cria um novo elemento (desanexado do DOM).
  - Só aparece na página quando você o adiciona (append/appendChild/etc.).

  Passos comuns:
  1) Criar o elemento
  2) Configurar conteúdo/atributos/estilos
  3) Inserir no DOM (append/appendChild/insertBefore)

  Dicas:
  - Use textContent para texto puro (seguro).
  - Use innerHTML se precisar inserir HTML (cuidado com entradas do usuário).
*****************************************************/
const novoItem = document.createElement("li")
novoItem.textContent = "Item criado dinamicamente"
novoItem.setAttribute("data-id", "123")
novoItem.style.padding = "6px 8px"

const lista = document.querySelector("ul#lista-compras")
if (lista) {
  // Exemplo prático: criar e adicionar um li à lista
  lista.appendChild(novoItem)
}
