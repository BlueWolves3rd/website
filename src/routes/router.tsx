import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import { ErrorPage } from "../pages/error";
import { Contato } from "../pages/contato";
import { Home } from "../pages/home";
import { SobreNos } from "../pages/sobreNos.tsx";
import { Faq } from "../pages/faq.tsx";
import { Scare } from "../pages/scare.tsx";
import Outrange from "../pages/scare/outrange.mdx";
import { MarkdownStyle } from "../components/markdownStyle.tsx";

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
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/scare",

        children: [
          {
            path: "/scare",
            element: <Scare />,
          },
          {
            path: "outrange",
            element: (
              <MarkdownStyle>
                <Outrange />
              </MarkdownStyle>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
