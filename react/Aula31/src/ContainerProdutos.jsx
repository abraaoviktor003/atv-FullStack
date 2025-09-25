import { Container, Row, Col } from 'react-bootstrap';
import CardProduto from './CardProduto';

function ContainerProdutos({ listaProdutos }) {
  return (
    <Container className="mt-4">
      <Row>
        {listaProdutos.map((produto, index) => (
          <Col key={index} md={4} className="mb-4">
            <CardProduto
              nomeProduto={produto.nomeProduto}
              descricaoProduto={produto.descricaoProduto}
              precoProduto={produto.precoProduto}
              imagemProduto={produto.imagemProduto}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ContainerProdutos;
