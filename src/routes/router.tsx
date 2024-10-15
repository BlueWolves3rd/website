import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Guides from "../pages/guides";
import { ErrorPage } from "../pages/error";
import { MarkdownStyle } from "../components/markdownStyle";
import KenGuide from "../pages/kenGuide.mdx";
import { Contato } from "../pages/contato";
import { Home } from "../pages/home";

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
        path: "/guides",
        element: <Guides />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "/guides/ken",
        element: (
          <MarkdownStyle>
            <KenGuide />
          </MarkdownStyle>
        ),
      },
    ],
  },
]);

export default router;
