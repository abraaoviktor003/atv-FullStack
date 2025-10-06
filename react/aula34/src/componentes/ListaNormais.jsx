import { useContext } from "react";
import { ContextoLista } from "./ContextoLista";

function ListaNormais() {
  const { lista } = useContext(ContextoLista);

  return (
    <div>
      <h2>Tarefas Normais</h2>
      <ul>
        {lista.normal.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaNormais;
