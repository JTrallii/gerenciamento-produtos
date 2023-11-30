import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";

export default function ItensTabela() {
  const { items } = useStock();

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Em Estoque</th>
          <th>Categoria</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantidade} unid.</td>
            <td>{item.categoria}</td>
            <td>
              <Link
                to={`/itens/${item.id}`}
                className="button is-primary is-small"
              >
                Ver
              </Link>
              <Link to={`/itens/${item.id}/update`} className="button is-small">
                Atualizar
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
