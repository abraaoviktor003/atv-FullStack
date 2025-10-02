import { useState, useEffect, useCallback } from "react";
import "./Activity1.css";

function Activity1() {
  const [valor1, setValor1] = useState(null);
  const [valor2, setValor2] = useState(null);

  // Botão 1: usuário passa um número para a primeira variável
  function handleBotao1() {
    const entrada = prompt("Digite um número para a variável 1:");
    if (entrada === null) return; // cancelado
    const n = parseFloat(entrada);
    if (Number.isFinite(n)) setValor1(n);
  }

  // Botão 2: usuário passa um número para a segunda variável
  function handleBotao2() {
    const entrada = prompt("Digite um número para a variável 2:");
    if (entrada === null) return; // cancelado
    const n = parseFloat(entrada);
    if (Number.isFinite(n)) setValor2(n);
  }

  // Callback: mostra os valores ao quadrado sempre que forem atualizados
  const mostrarAoQuadrado = useCallback(() => {
    if (valor1 !== null) console.log("valor1^2 =", valor1 * valor1);
    if (valor2 !== null) console.log("valor2^2 =", valor2 * valor2);
  }, [valor1, valor2]);

  // useEffect com array de dependências
  useEffect(() => {
    mostrarAoQuadrado();
  }, [mostrarAoQuadrado]);

  return (
    <div className="atividade1-card">
      <h2>Atividade 1</h2>
      <div className="botoes">
        <button onClick={handleBotao1}>Botão 1 (definir variável 1)</button>
        <button onClick={handleBotao2}>Botão 2 (definir variável 2)</button>
      </div>
    </div>
  );
}

export default Activity1;
