import PropTypes from "prop-types";
import StockItem, { CATEGORIAS } from "../entities/EstoqueItem";
import { useRef, useState } from "react";
import useStock from "../hooks/useStock";

ItemForm.propTypes = {
  itemAtualizado: PropTypes.object,
};

export default function ItemForm({ itemAtualizado }) {
  const defaultItem = {
    name: "",
    descricao: "",
    quantidade: 0,
    preco: 0,
    categoria: "",
  };

  const [item, setItem] = useState(
    itemAtualizado ? itemAtualizado : defaultItem
  ); //Se for passado a prop, sera o estado inicial da prop, caso contrario, o defaultItem
  const { adicionarItem, atualizarItem } = useStock();
  const inputRef = useRef(null);

  const handleChange = (ev) => {
    setItem((current) => ({ ...current, [ev.target.name]: ev.target.value }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    try {
      if (itemAtualizado) {
        atualizarItem(itemAtualizado.id, item);
        alert("Item atualizado com sucesso!");
      } else {
        const validItem = new StockItem(item);
        adicionarItem(validItem);
        setItem(defaultItem);
        alert("Item cadastrado com sucesso!");
      }
    } catch (err) {
      console.log(err.message);
      alert("Ocorreu um erro.");
    } finally {
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            ref={inputRef}
            value={item.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantidade">Quantidade</label>
          <input
            type="number"
            name="quantidade"
            id="quantidade"
            required
            min={0}
            step={1}
            value={item.quantidade}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            name="preco"
            id="preco"
            required
            min={0.0}
            step={0.01}
            value={item.preco}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="categoria">Categoria</label>
          <select
            name="categoria"
            id="categoria"
            required
            value={item.categoria}
            onChange={handleChange}
          >
            <option disabled value="">
              Selecione uma categoria...
            </option>
            {CATEGORIAS.map((categoria) => (
              <option
                key={categoria}
                value={categoria}
                defaultChecked={item.categoria === categoria}
              >
                {categoria}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="descricao">Descrição</label>
        <textarea
          name="descricao"
          id="descricao"
          required
          rows={6}
          value={item.descricao}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="button is-primary is-large">Salvar</button>
    </form>
  );
}
