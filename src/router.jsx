import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import ListItems from "./pages/Itens/ListarItens";
import CriarItem from "./pages/Itens/CriarItem";
import MostrarItens from "./pages/Itens/MostrarItens";
import AtualizarItem from "./pages/Itens/AtualizarItem";
import StockItems from "./pages/Itens/StockItems";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> }, // Aqui será a página inicial
      {
        path: "itens", //Aqui vai ser o caminho .../itens
        element: <StockItems />,
        children: [
          { index: true, element: <ListItems /> },
          { path: "novo", element: <CriarItem /> },
          { path: ":id", element: <MostrarItens /> }, //Vamos ter valores dinamicos e com caminhos especificos
          { path: ":id/atualizar", element: <AtualizarItem /> },
        ],
      },
    ],
  },
  { path: "login", element: <Login /> },
]);

export default router;
