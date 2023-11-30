export const CATEGORIAS = ["Jogos", "Livros", "Brinquedos", "Acessórios"];

export default class StockItem {
  constructor({ name, descricao, quantidade, preco, categoria }) {
    this.id = Math.floor(Math.random() * 10000000);
    this.name = name;
    this.descricao = descricao;
    this.quantidade = +quantidade;
    this.preco = +preco;
    this.categoria = categoria;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.#validate();
  }

  #validate() {
    const validName = typeof this.name === "string";
    const validdescricao = typeof this.descricao === "string";
    const validquantidade =
      typeof this.quantidade === "number" && Number.isInteger(this.quantidade);
    const validpreco = typeof this.preco === "number";
    const validcategoria = CATEGORIAS.includes(this.categoria);
    if (
      !(
        validName &&
        validdescricao &&
        validquantidade &&
        validpreco &&
        validcategoria
      )
    ) {
      throw new Error("Item inválido!");
    }
  }
}
