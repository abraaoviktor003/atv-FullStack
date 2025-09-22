import { useState } from 'react';
import lampadaAcesa from './assets/lampada-acesa.jpg';
import lampadaApagada from './assets/lampada-apagada.jpg';
import lampadaQuebrada from './assets/lampada-quebrada.jpg';
import './LampadaEstilizada.css'

function LampadaEstilizada() {
  const [estado, setEstado] = useState(lampadaAcesa);

  return (
    <div className="lampada-container">
      <img src={estado} alt="Lâmpada" className="lampada-img" />
      <div className="botoes">
        <button className="btn ligar" onClick={() => setEstado(lampadaAcesa)}>Ligar</button>
        <button className="btn desligar" onClick={() => setEstado(lampadaApagada)}>Desligar</button>
        <button className="btn quebrar" onClick={() => setEstado(lampadaQuebrada)}>Quebrar</button>
      </div>
    </div>
  );
}

export default LampadaEstilizada;

