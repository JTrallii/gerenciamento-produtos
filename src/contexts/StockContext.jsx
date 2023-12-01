import { createContext, useState } from "react";
import Proptypes from "prop-types";

export const StockContext = createContext({});

StockContextProvider.prototype = {
  children: Proptypes.node,
};

export function StockContextProvider({ children }) {
  //Usando o state pra retornar o valor dele para salvar no local storage
  const [items, setItems] = useState(() => {
    const localStorageNav = localStorage.getItem("gerenciamento-produtos");
    if (!localStorageNav) return []; //Caso não tenha itens no storage, retorne um array vazio
    const items = JSON.parse(localStorageNav);
    items.forEach((item) => {
      item.createdAt = new Date(item.createdAt); //convertendo a data em formatdo de data
      item.updatedAt = new Date(item.updatedAt); //convertendo a data em formatdo de data
    });
    return items;
  });

  const adicionarItem = (item) => {
    setItems((currentState) => {
      const novoItem = [item, ...currentState];
      localStorage.setItem("gerenciamento-produtos", JSON.stringify(novoItem));
      return novoItem;
    });
  };

  const mostrarItem = (itemId) => {
    return items.find(item => item.id === +itemId)
  }

  const atualizarItem = (itemId, novoAtributo) => {
    setItems(currentState => {
      const indexItem = currentState.findIndex(item => item.id === +itemId)
      const itemAtualizado = [...currentState]
      Object.assign(itemAtualizado[indexItem], novoAtributo, { updatedAt: new Date() })
      localStorage.setItem("gerenciamento-produtos", JSON.stringify(itemAtualizado));
      return itemAtualizado
    })
  }

  const excluirItem = (itemId) => {
    setItems((currentState) => {
      const itemExcluido = currentState.filter((item) => item.id !== itemId);
      localStorage.setItem(
        "gerenciamento-produtos",
        JSON.stringify(itemExcluido)
      );
      return itemExcluido;
    });
  };

  const stock = {
    items,
    adicionarItem,
    excluirItem,
    mostrarItem,
    atualizarItem
  };
  return (
    <StockContext.Provider value={stock}>{children}</StockContext.Provider>
  );
}
