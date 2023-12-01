import { useParams } from "react-router-dom";
import ItemForm from "../../components/ItemForm";
import useStock from "../../hooks/useStock";

export default function AtualizarItem() {
  const { mostrarItem } = useStock();
  const { id } = useParams();

  const item = mostrarItem(id);

  return (
    <>
      <h1>ATUALIZAR ITENS</h1>
      <ItemForm itemAtualizado={item} />
    </>
  );
}
