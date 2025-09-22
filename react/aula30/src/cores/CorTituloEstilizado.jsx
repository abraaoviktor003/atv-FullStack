import { useState } from 'react';
import './CorTituloEstilizado.css';

function CorTituloEstilizado() {
  const [cor, setCor] = useState('branco');

  return (
    <div className="container">
      <h1 style={{ color: cor.toLowerCase() }}>Título na cor {cor}</h1>
      <div className="botoes">
        <button className="btn vermelho" onClick={() => setCor('Vermelho')}>Vermelho</button>
        <button className="btn azul" onClick={() => setCor('Azul')}>Azul</button>
        <button className="btn verde" onClick={() => setCor('Verde')}>Verde</button>
      </div>
    </div>
  );
}

export default CorTituloEstilizado;
