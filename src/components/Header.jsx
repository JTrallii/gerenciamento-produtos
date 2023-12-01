import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        SUA LOGO
      </Link>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/itens">Produtos</Link>
        <Link to="/login">Entrar</Link>
      </nav>
    </header>
  );
}
