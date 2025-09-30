import { useState } from "react";
import "./Calculadora.css";

function Calculadora() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operador, setOperador] = useState("");

  // Função genérica para tratar mudanças
  function handleChange(e) {
    const { name, value } = e.target; // pega o "name" e o "value" do input

    if (name === "numero1") {
      setNumero1(value);
    } else if (name === "numero2") {
      setNumero2(value);
    } else if (name === "operador") {
      setOperador(value);
    }
  }

  function calcular() {
    let resultado;
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    switch (operador) {
      case "+": resultado = n1 + n2; break;
      case "-": resultado = n1 - n2; break;
      case "*": resultado = n1 * n2; break;
      case "/": resultado = n1 / n2; break;
      default: resultado = "Operador inválido";
    }

    alert(`Resultado: ${resultado}`);
  }

  return (
    <div className="calc-container">
      <h2>Calculadora</h2>
      <div className="inputs">
        <input
          type="number"
          name="numero1"
          placeholder="Número 1"
          value={numero1}
          onChange={handleChange}
        />
        <input
          type="number"
          name="numero2"
          placeholder="Número 2"
          value={numero2}
          onChange={handleChange}
        />
        <input
          type="text"
          name="operador"
          placeholder="Operador (+, -, *, /)"
          value={operador}
          onChange={handleChange}
        />
      </div>
      <button className="btn-calc" onClick={calcular}>Calcular</button>
    </div>
  );
}

export default Calculadora;
