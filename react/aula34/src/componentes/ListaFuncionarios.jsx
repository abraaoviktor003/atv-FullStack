import { useContext } from "react";
import { FuncionariosContext } from "./FuncionariosContext";

function ListaFuncionarios() {
  const { funcionarios } = useContext(FuncionariosContext);

  return (
    <div className="lista">
      <h2>Lista de Funcionários</h2>
      <ul>
        {funcionarios.map((f) => (
          <li key={f.id}>
            <strong>{f.nome}</strong> — {f.cargo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaFuncionarios;
