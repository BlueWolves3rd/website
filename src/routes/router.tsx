import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import { ErrorPage } from "@/pages/error";
import { Contato } from "@/pages/contato";
import { Home } from "@/pages/home";
import { SobreNos } from "@/pages/sobreNos.tsx";
import { Faq } from "@/pages/faq.tsx";
import { Scare } from "@/pages/scare.tsx";
import { Outrange } from "@/pages/scare/outrange.tsx";
import { Ken } from "@/pages/riddler/ken.tsx";
import { LidandoComMakoto } from "@/pages/scare/lidandoComMakoto.tsx";
import { NocoesIniciais } from "@/pages/scare/nocoesIniciais.tsx";
import { Makoto } from "@/pages/riddler/makoto.tsx";
import { Matchups } from "@/pages/matchups.tsx";
import { ConteudoRecurso } from "@/pages/conteudoRecurso";
import { GuiaIncial0 } from "@/pages/conteudoRecursos/guiaInicial/guiaInicial0";
import { WorkInProgress } from "@/pages/workInProgress";
import { IntroducaoGuiaInicial } from "@/pages/conteudoRecursos/guiaInicial/introducaoGuiaInicial";
import { GuiaInicial1 } from "@/pages/conteudoRecursos/guiaInicial/guiaInicial1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <WorkInProgress />,
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
        path: "/outrange",
        element: <Outrange />,
      },
      {
        path: "/lidandoComMakoto",
        element: <LidandoComMakoto />,
      },
      {
        path: "/ken",
        element: <Ken />,
      },
      {
        path: "/makoto",
        element: <Makoto />,
      },
      {
        path: "/nocoes",
        element: <NocoesIniciais />,
      },
      {
        path: "/mu",
        element: <Matchups />,
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
            element: <Outrange />,
          },
        ],
      },
      {
        path: "/conteudoRecurso",
        children: [
        {
          path:"/conteudoRecurso",
          element: <ConteudoRecurso/>
        },
        {
          path:"introducaoGuiaInicial",
          element: <IntroducaoGuiaInicial/>
        },
        {
          path:"guiaInicial0",
          element: <GuiaIncial0/>
        },
        {
          path:"GuiaInicial1",
          element: <GuiaInicial1/>
        },
        {
          path:"workInProgress",
          element: <WorkInProgress/>
        },
       ],
      },
    ],
  },
]);

export default router;
