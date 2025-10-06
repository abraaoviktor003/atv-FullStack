import { useState, useContext } from "react";
import { FuncionariosContext } from "./FuncionariosContext";

function FormularioCadastroFuncionario() {
  const { adicionarFuncionario } = useContext(FuncionariosContext);
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (nome.trim() === "" || cargo.trim() === "") return;
    adicionarFuncionario(nome, cargo);
    setNome("");
    setCargo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do funcionário"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cargo"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormularioCadastroFuncionario;
