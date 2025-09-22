import './CardProduto.css';
import produtoEletronico from './assets/produto-eletronico.jpg';
import produtoCozinha from './assets/produto-cozinha.jpg';
import produtoPapelaria from './assets/produto-papelaria.jpg';

function CardProduto() {
  const produtos = [
    {
      img: produtoEletronico,
      nome: "Câmera Fotográfica",
      preco: "R$ 2.500,00",
      descricao: "Câmera profissional com lente 50mm, ideal para fotos de alta qualidade."
    },
    {
      img: produtoCozinha,
      nome: "Kit de Utensílios de Cozinha",
      preco: "R$ 150,00",
      descricao: "Conjunto com 12 peças em silicone resistente ao calor."
    },
    {
      img: produtoPapelaria,
      nome: "Kit Papelaria",
      preco: "R$ 80,00",
      descricao: "Kit com cadernos, canetas e marcadores para organização e estudos."
    }
  ];

  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
      {produtos.map((produto, index) => (
        <div key={index} className="card-produto">
          <img src={produto.img} alt={produto.nome} className="card-img" />
          <h2 className="card-nome">{produto.nome}</h2>
          <h3 className="card-preco">{produto.preco}</h3>
          <p className="card-descricao">{produto.descricao}</p>
        </div>
      ))}
    </div>
  );
}

export default CardProduto;
