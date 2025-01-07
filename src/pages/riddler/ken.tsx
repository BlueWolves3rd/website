import { Article, Header, Text } from "../../components/article.tsx";
import kenStance from "../../assets/riddler/kenstance.gif";
import crLK from "../../assets/riddler/crLK.gif";
import crMP from "../../assets/riddler/crMP.gif";

const Move = ({ children, src }: { children: string; src: string }) => {
  return (
    <div>
      <ul
        className="mt-8 before:content-[''] before:absolute before:left-0
                    before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2
                    before:bg-white before:rounded-full relative"
      >
        <li className="font-metropolis text-white">{children}</li>
      </ul>
      <div className="flex ml-4 mt-6 mb-8">
        <img src={src} className="h-24" />
      </div>
    </div>
  );
};

const Bold = ({
  children,
  color,
  underline,
}: {
  children: string;
  color?: string;
  underline?: boolean;
}) => {
  return (
    <>
      {" "}
      <span
        className="font-metropolis"
        style={{
          color: color ? color : "white",
          textDecorationLine: underline ? "underline" : "none",
        }}
      >
        {children}
      </span>{" "}
    </>
  );
};
export const Ken = () => {
  const navSidebarList = [
    { href: "#Ken", label: "Ken" },
    { href: "#introducao", label: "Introducção" },
    { href: "#golpesNormais", label: "Golpes Normaiis" },
    { href: "#specials", label: "Specials" },
    { href: "#SA", label: "Super Art (SA)" },
    { href: "#tecnicas", label: "Técninas Avançadas" },
    { href: "#MU", label: "Mutchups" },
    { href: "#topPLayers", label: "Top Players" },
  ];

  return (
    <Article navSidebarList={navSidebarList}>
      <Header level={1} id="ken">
        KEN (ケン)
      </Header>
      <div className="flex justify-center">
        <img src={kenStance} className="h-48" />
      </div>
      <Header level={1} id="introducao">
        Introdução
      </Header>
      <Text>
        O Ken é possivelmente o personagem mais equilibrado de 3rd Strike, no
        sentido de possuir ferramentas para lidar com todo tipo de situação. É
        dono de golpes formidáveis no chão, um Shoryuken fraco que pode levar a
        outro para muito dano, um Shoryuken forte com invulnerabilidade (sem
        gastar barra), um EX Tatsumaki aéreo muito bom para fugir do corner e um
        Super extremamente rápido que pode ser encaixado de inúmeras formas.
        Pode ser jogado de maneira mais reservada ou mais agressiva. Por esses
        motivos, costuma-se dizer que o Ken é ótimo para jogadores iniciantes
        que não têm preferência por personagem algum. Ele incentiva o usuário a
        aprender os fundamentos do jogo com um gameplay relativamente simples,
        mas muito completo e que favorece diferentes estilos. Recomendado para
        todos os níveis.
      </Text>
      <Header level={1} id="golpesNormais">
        Golpes Normais
      </Header>
      <Text>Os principais golpes normais do Ken são:</Text>
      <Move src={crLK}>cr.LK</Move>
      <Text>
        Mais importante do que o cr.LP por ser um <Bold>golpe baixo</Bold>
        quase tão rápido quanto ele, o cr.LK é fundamental para os
        <Bold>ticks</Bold> do Ken, ou seja, as sequências em que se faz um golpe
        (geralmente rápido) seguido de um throw ou golpe mais forte ou, ainda,
        tentativa de confirm. Desta forma, o tick throw mais comum do Ken é
        cr.LK em throw.
      </Text>
      <Text>
        Uma <Bold>frame trap</Bold> (tick em normal) clássica é cr.LK seguido de
        <Bold>cr.MP</Bold> (confirm) ou <Bold>cr.MK</Bold> (que pode ser
        cancelado em EX Hadou, por exemplo).
      </Text>
      <Text>
        O cr.LK é, portanto, o <Bold>low tick</Bold> do Ken. Ele possui um high
        tick também para <Bold>contornar</Bold>{" "}
        <Bold color="#6b6efa">low parries</Bold>, como se verá adiante.
      </Text>
      <Text>
        Além da função de tick, o cr.LK possui outras duas interessantes, quais
        sejam, a de
        <Bold underline color="#6b6efa">
          confirm
        </Bold>
        (por meio de chain) e a de <Bold>bait/dash check</Bold>
        (interromper dashes e baitar whiff punishes em alto nível).
      </Text>
      <Move src={crMP}>cr.MP</Move>
      <Header level={1} id="specials">
        Specials
      </Header>
      <Header level={1} id="SA">
        Super Art (SA)
      </Header>
      <Header level={1} id="tecnicas">
        Técnicas Avançadas
      </Header>
      <Header level={1} id="MU">
        Matchups
      </Header>
      <Header level={1} id="topPlayers">
        Top Players
      </Header>
    </Article>
  );
};
