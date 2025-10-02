import { useState, useEffect } from "react";
import "./Atv3.css"

function Atv3() {
    const [ano, setAno] = useState("2025");
    const [feriados, setFeriados] = useState([]);

    useEffect(() => {
        buscarFeriados(ano);
    }, []);

    async function buscarFeriados(anoEscolhido) {
        try{
            const resposta = await fetch(`https://brasilapi.com.br/api/feriados/v1/${anoEscolhido}`)
            const dados = await resposta.json();
            setFeriados(dados);
        }   catch (erro) {
            console.error("erro ao buscar feriados:", erro)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        buscarFeriados(ano);
    }

    return (
        <div className="atv3-card">
            <h2>Feriados Nacionais</h2>

            <form onSubmit={handleSubmit} className="form">
                <input
                    type="number"
                    value={ano}
                    onChange={(e) => setAno(e.target.value)}
                    placeholder="Digite o ano" 
                    />
                    <button type="submit">Buscar</button>
            </form>

            <div className="lista-feriados">
        {feriados.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Nome</th>
              </tr>
            </thead>
            <tbody>
              {feriados.map((f, i) => (
                <tr key={i}>
                  <td>{f.date}</td>
                  <td>{f.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Nenhum feriado encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default Atv3;