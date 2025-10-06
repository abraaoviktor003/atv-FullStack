import { FuncionariosProvider } from "./componentes/FuncionariosContext";
import TotalFuncionarios from "./componentes/TotalFuncionarios";
import ListaFuncionarios from "./componentes/ListaFuncionarios";
import FormularioCadastroFuncionario from "./componentes/FormularioCadastroFuncionario";
import "./App.css";

function App() {
  return (
    <FuncionariosProvider>
      <h1>Gestão de Funcionários</h1>
      <TotalFuncionarios />
      <FormularioCadastroFuncionario />
      <ListaFuncionarios />
    </FuncionariosProvider>
  );
}

export default App;

