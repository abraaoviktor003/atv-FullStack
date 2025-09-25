import { Card, Button } from 'react-bootstrap';

function CardProduto({ nomeProduto, descricaoProduto, precoProduto, imagemProduto }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imagemProduto} />
      <Card.Body>
        <Card.Title>{nomeProduto}</Card.Title>
        <Card.Text>{descricaoProduto}</Card.Text>
        <h5>{precoProduto}</h5>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduto;
