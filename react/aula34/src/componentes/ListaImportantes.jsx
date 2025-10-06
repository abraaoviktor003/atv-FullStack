import { useContext } from "react";
import { ContextoLista } from "./ContextoLista";

function ListaImportantes() {
  const { lista } = useContext(ContextoLista);

  return (
    <div>
      <h2>Tarefas Importantes</h2>
      <ul>
        {lista.importante.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaImportantes;
