import useStock from "../hooks/useStock";

export default function Home() {
const { items } = useStock()

const quantProdutos = items.length
const totalProdutos = items.reduce((soma, item) => +soma + +item.quantidade, 0)

  return (
    <main>
      <h1>TELA INICIAL</h1>
      <div className="row">
        <div className="dashboard-card">
          Diversidade de produtos
          <span>{quantProdutos}</span>
        </div>
        <div className="dashboard-card">
          Inventário total
          <span>{totalProdutos}</span>
        </div>
      </div>
    </main>
  );
}
