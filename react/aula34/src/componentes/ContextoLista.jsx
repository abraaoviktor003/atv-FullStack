import { createContext, useState } from "react";

const ContextoLista = createContext();

function ContextoListaProvider({ children }) {
  const [lista, setLista] = useState({
    normal: [],
    importante: []
  });

  function adicionarTarefa(texto, tipo) {
    if (tipo === "normal") {
      setLista((prev) => ({
        ...prev,
        normal: [...prev.normal, texto]
      }));
    } else {
      setLista((prev) => ({
        ...prev,
        importante: [...prev.importante, texto]
      }));
    }
  }

  return (
    <ContextoLista.Provider value={{ lista, adicionarTarefa }}>
      {children}
    </ContextoLista.Provider>
  );
}

export { ContextoLista, ContextoListaProvider };
