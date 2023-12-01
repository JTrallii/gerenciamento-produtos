import { Link, useParams } from "react-router-dom";
import useStock from "../../hooks/useStock";
import BotaoExcluir from "../../components/BotaoExcluir";

export default function ShowItems() {
  const { mostrarItem } = useStock();
  const { id } = useParams();

  const item = mostrarItem(id);

  return (
    <div className="item">
      <h2>{item.name}</h2>
      <Link to={`/itens/${item.id}/atualizar`} className="button is-small">
        Atualizar
      </Link>
      <BotaoExcluir itemId={item.id} itemName={item.name} />
      <div className="row">
        <span>Categoria: {item.categoria}</span>
        <span>Quantidade em estoque: {item.quantidade}</span>
        <span>Preço: R$ {item.preco}</span>
      </div>
      <p>{item.descricao}</p>
      <div className="row">
        <p>Cadastrado em: {item.createdAt.toDateString()}</p>
        <p>Atualizado em: {item.updatedAt.toDateString()}</p>
      </div>
    </div>
  );
}
