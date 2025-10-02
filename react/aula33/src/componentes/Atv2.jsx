import { useState, useEffect } from "react";
import "./Atv2.css";

function Atv2() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState(null);

  // Atualiza o nome na tela quando o usuário é montado (form enviado)
  useEffect(() => {
    if (usuario) {
      console.log("Form enviado. Usuário:", usuario);
    }
  }, [usuario]);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "nome") setNome(value);
    if (name === "email") setEmail(value);
    if (name === "senha") setSenha(value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // impede envio padrão
    const novoUsuario = { nome, email, senha }; // objeto com os valores
    setUsuario(novoUsuario);

    // limpa os campos
    setNome("");
    setEmail("");
    setSenha("");
  }

  return (
    <div className="atv2-card">
      <h2>Cadastro de usuário</h2>

      <form onSubmit={handleSubmit} className="form">
        <div className="field">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            name="senha"
            type="password"
            placeholder="Sua senha"
            value={senha}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>

      {usuario && (
        <>
          <p className="boas-vindas">Bem-vindo, {usuario.nome}!</p>

          <div className="tabela-container">
            <h3>Dados enviados</h3>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Senha</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{usuario.nome}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.senha}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Atv2;
