import { useState, useContext } from "react";
import { ContextoLista } from "./ContextoLista";

function FormTarefa() {
  const { adicionarTarefa } = useContext(ContextoLista);
  const [texto, setTexto] = useState("");
  const [tipo, setTipo] = useState("normal");

  function handleSubmit(e) {
    e.preventDefault();
    if (texto.trim() === "") return;
    adicionarTarefa(texto, tipo);
    setTexto("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite a tarefa"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="normal">Normal</option>
        <option value="importante">Importante</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormTarefa;
