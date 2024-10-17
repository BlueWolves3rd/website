import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import { ErrorPage } from "../pages/error";
import { Contato } from "../pages/contato";
import { Home } from "../pages/home";
import { SobreNos } from "../pages/sobreNos.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobrenos",
        element: <SobreNos />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
    ],
  },
]);

export default router;
