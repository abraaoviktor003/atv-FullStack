import { Link } from "react-router-dom";
import "./Navegacao.css";

export default function Navegacao() {
    return(
        <nav className="nav">
            <h1 className="logo">Meu Site</h1>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre nós</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>

        </nav>
    );
}