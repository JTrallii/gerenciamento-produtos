import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import ListItems from "./pages/Itens/ListarItens";
import CriarItem from "./pages/Itens/CriarItem";
import ShowItems from "./pages/Itens/MostrarItens";
import UpdateItems from "./pages/Itens/UpdateItems";
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
          { path: "new", element: <CriarItem /> },
          { path: ":id", element: <ShowItems /> }, //Vamos ter valores dinamicos e com caminhos especificos
          { path: ":id/update", element: <UpdateItems /> },
        ],
      },
    ],
  },
  { path: "login", element: <Login /> },
]);

export default router;
