import styled from "styled-components";
import Botao from "./Botao";
import { useState } from "react";

const Input = styled.input`
  border: 2px solid blue;
  background-color: #000000;
  padding: 8px;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export default function PesquisarProduto() {
  const [valor, setValor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Você pesquisou por: ${valor}`);
    setValor("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Digite o produto..."
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <Botao>Pesquisar</Botao>
    </Form>
  );
}
