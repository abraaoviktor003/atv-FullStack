import { createContext, useState } from "react";

const FuncionariosContext = createContext();

function FuncionariosProvider({ children }) {
  const [funcionarios, setFuncionarios] = useState([
    { id: 1, nome: "Ana Silva", cargo: "Desenvolvedora Frontend" },
    { id: 2, nome: "Bruno Costa", cargo: "Desenvolvedor Backend" },
    { id: 3, nome: "Carla Souza", cargo: "UI/UX Designer" },
    { id: 4, nome: "Diego Ramos", cargo: "DevOps Engineer" },
    { id: 5, nome: "Eduarda Lima", cargo: "QA Analyst" },
    { id: 6, nome: "Felipe Alves", cargo: "Product Owner" },
    { id: 7, nome: "Gabriela Rocha", cargo: "Scrum Master" },
    { id: 8, nome: "Henrique Santos", cargo: "Mobile Developer" },
    { id: 9, nome: "Isabela Martins", cargo: "Data Scientist" },
    { id: 10, nome: "João Pereira", cargo: "Fullstack Developer" }
  ]);

  function adicionarFuncionario(nome, cargo) {
    const novo = {
      id: funcionarios.length + 1,
      nome,
      cargo
    };
    setFuncionarios([...funcionarios, novo]);
  }

  return (
    <FuncionariosContext.Provider value={{ funcionarios, adicionarFuncionario }}>
      {children}
    </FuncionariosContext.Provider>
  );
}

export { FuncionariosContext, FuncionariosProvider };

