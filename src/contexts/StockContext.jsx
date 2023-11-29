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

  const stock = {
    items,
    adicionarItem,
  };
  return (
    <StockContext.Provider value={stock}>
      {children}
    </StockContext.Provider>
  );
}
