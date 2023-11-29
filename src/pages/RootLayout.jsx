import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
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
      <div>
        <Outlet />
      </div>
      <footer>TODOS OS DIREITOS RESERVADOS</footer>
    </>
  );
}
