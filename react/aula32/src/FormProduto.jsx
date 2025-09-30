import { useState } from "react";
import produtos from "./ProdutosArray";
import "./FormProduto.css";

function FormProduto() {
  const [form, setForm] = useState({
    nome: "",
    imagem: "",
    preco: "",
    descricao: ""
  });

  const [lista, setLista] = useState(produtos);

  // Atualiza os campos dinamicamente
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  // Submete o formulário
  function handleSubmit(e) {
    e.preventDefault();
    setLista([...lista, form]); // adiciona o produto na lista
    setForm({ nome: "", imagem: "", preco: "", descricao: "" }); // limpa os campos
  }

  return (
    <div className="form-card">
      <h2>Cadastrar Produto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do produto"
          value={form.nome}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imagem"
          placeholder="URL da imagem"
          value={form.imagem}
          onChange={handleChange}
        />
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={form.preco}
          onChange={handleChange}
        />
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <div className="produtos-lista">
        {lista.map((p, i) => (
          <div key={i} className="produto-card">
            <img src={p.imagem} alt={p.nome} />
            <h3>{p.nome}</h3>
            <p>{p.descricao}</p>
            <span>R$ {p.preco}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormProduto;
