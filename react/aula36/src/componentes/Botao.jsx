import styled from "styled-components";

const BotaoEstilizado = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #0a7a0a;
  }
`;

export default function Botao({ children, ...props }) {
  return <BotaoEstilizado {...props}>{children}</BotaoEstilizado>;
}
