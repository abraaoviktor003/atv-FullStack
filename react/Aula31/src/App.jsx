import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import listaProdutos from './produtos.json';
import ContainerProdutos from './ContainerProdutos';

function App() {
  return <ContainerProdutos listaProdutos={listaProdutos} />;
  
}

export default App;
