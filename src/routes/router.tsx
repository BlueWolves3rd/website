import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Guides from "../pages/guides";
import { ErrorPage } from "../pages/error";
import { MarkdownStyle } from "../components/markdownStyle";
import KenGuide from "../pages/kenGuide.mdx";
import { Matchups } from "../pages/matchups";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/guides",
        element: <Guides />,
      },
      {
        path: "/matchups",
        element: <Matchups />,
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
