import { Link, Outlet, useLocation } from "react-router-dom";

export default function StockItems() {
  const { pathname } = useLocation();
  return (
    <main>
      <h1>Estoque de Itens</h1>
      <div className="tabs">
        <Link
          to="/itens"
          className={`tab ${pathname === "/itens" ? "active" : ""}`}
        >
          Todos os itens
        </Link>
        <Link
          to="/itens/new"
          className={`tab ${pathname === "/itens/new" ? "active" : ""}`}
        >
          Novo item
        </Link>
      </div>
      <Outlet />
    </main>
  );
}
