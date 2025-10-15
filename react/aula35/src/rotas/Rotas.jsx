import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../paginas/Home";
import SobreNos from "../paginas/SobreNos";
import Contato from "../paginas/Contato";
import PaginaNaoEncontrada from "../paginas/PaginaNaoEncontrada";
import Navegacao from "../componentes/Navegacao";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Navegacao />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<SobreNos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}
