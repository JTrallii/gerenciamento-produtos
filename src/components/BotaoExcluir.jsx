import { useNavigate } from "react-router-dom";
import useStock from "../hooks/useStock";

export default function BotaoExcluir({ itemId, itemName }) {
  const { excluirItem } = useStock();
  const navegacao = useNavigate()

  const handleExcluir = () => {
    if (confirm(`Tem certeza que deseja excluir ${itemName} ?`)) {
      excluirItem(itemId);
      navegacao("/itens")
    }
  };
  return (
    <button className="button is-danger is-small" onClick={handleExcluir}>
      Excluir
    </button>
  );
}
