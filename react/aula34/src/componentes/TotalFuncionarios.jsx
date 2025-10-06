import { useContext } from "react";
import { FuncionariosContext } from "./FuncionariosContext";

function TotalFuncionarios() {
  const { funcionarios } = useContext(FuncionariosContext);

  return (
    <div className="total">
      <h2>Total de Funcionários: {funcionarios.length}</h2>
    </div>
  );
}

export default TotalFuncionarios;
