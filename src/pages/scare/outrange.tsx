import { ReactNode } from "react";
import gif_1 from "../../assets/scare/outrange-1.gif";
import gif_2 from "../../assets/scare/outrange-2.gif";

const Header = ({
  children,
  level,
  id,
}: {
  children: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  id: string;
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <div className="text-center" id={id}>
      <Tag
        className="font-metropolis px-10 py-5 bg-[#ff0030] skew-x-[-24deg]
                text-4xl inline-block font-bold mt-24 mb-8"
      >
        {children}
      </Tag>
    </div>
  );
};

const ContentLinkImg = ({
  children,
  img,
  href,
}: {
  children: string;
  img: string;
  href: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <a
        className="text-blue-500 border-b-2 border-b-solid border-b-blue-500
                    hover:text-blue-800 hover:border-blue-800 my-2"
        href={href}
        target="_blank"
      >
        {children}
      </a>
      <img src={img} className="mt-2 mb-6 text-justify " />
    </div>
  );
};

const Text = ({ children, mt }: { children: ReactNode; mt?: string }) => {
  return (
    <p style={{ marginTop: mt }} className="my-2 text-justify indent-12">
      {children}
    </p>
  );
};

const NavSidebar = () => {
  return (
    <div className="flex flex-col  top-40 left-0 sticky text-white h-full ml-8 ">
      <div className="p-2">Conteúdo</div>
      <div className="border-l-white border-l-2">
        <div className="ml-4 flex flex-col">
          <a
            href="#outrange"
            className="hover:bg-zinc-800 p-2 hover:text-blue-400"
          >
            Outrange
          </a>
        </div>
        <div className="ml-4 flex flex-col">
          <a
            href="#footageDeRef"
            className="hover:bg-zinc-800 p-2 hover:text-blue-400"
          >
            Footage de Referência
          </a>
        </div>
      </div>
    </div>
  );
};

export const Outrange = () => {
  return (
    <div className="w-full flex flex-grow bg-[#121212] font-metropolis-semibold pb-8">
      <NavSidebar />
      <div className=" flex justify-center text-white text-lg w-full">
        <div className="max-w-screen-lg">
          <Header level={1} id="outrange">
            OUTRANGE
          </Header>
          <p className="font-metropolis font-bold mb-4">
            out-range
            <br /> verbo <br />
            "(sobre uma arma ou seu usuário) Ter um alcance superior."
          </p>

          <Text>
            Você já deve ter entrado em uma partida contra um Ken e ter notado o
            oponente mantendo certa distância e usando seus cr.MPs de forma
            quase abusiva. Ao tentar se aproximar, você pode ter levado estes
            golpes e os confirms a seguir. Também pode ter engolido três cr.MPs
            seguidos e se frustrado com o efetivo uso de botões destes
            personagens, sendo forçado a pular e tomar riscos. Para lidar com
            esse verdadeiro spam de botões fortes na curta distância, há uma
            resposta nos footsies, via whiff punish, sem precisar pular, dar
            dash ou tomar um risco maior. Botões como o cr.MP são muito fortes
            na curta distância. Eles tem pouca range, prejudicando a capacidade
            de pescar parry e de punir tanto on whiff quanto on parry. Eles tem
            start-up menor que opções como cr.MK e recovery rápidos para
            possibilitar o spam e confirms. Para lidar com eles, você deve dar
            OUTRANGE. Isto é, usar um golpe com alcance maior, que acertará o
            oponente sem que ele consiga te acertar. Golpes como cr.HK e st.HK
            do Ken, por exemplo, vencem o cr.MP dele próprio.
          </Text>
          <Text>
            Os botões fortes tendem a ter maior distância, causar mais dano e
            terem maior start-up e recovery, justamente para balancear os
            fatores positivos. Portanto, para um outrange efetivo, use esses
            golpes no máximo da range, ou estes poderão ser defendidos e
            punidos. Também relevante é que se o oponente pular, ele terá todo o
            seu recovery para tentar punir este golpe. Use a estratégia de dar
            outrange em botões quando notar que as opções que o oponente está
            usando são golpes de menor distância que o seu, como usar o st.HK do
            Ken acima de um cr.MK, em uma mirror match.
          </Text>
          <Text>
            Apesar de o Ken ser usado como referência base, até por ser o
            personagem que representa o jogo tradicionalmente, quase todo
            personagem terá um golpe pesado para este propósito. St.HP do Gouki,
            Forward HP da Makoto e st.MK e HK do Oro. Sweeps também serão usadas
            para esse propósito, dessa vez, acertando low. Exemplos visuais
            serão encontrados em quase todo set, sendo este um princípio
            fundamental, presente no aspecto básico do jogo. Porém, vou tentar
            deixar alguns momentos para referência visual.
          </Text>

          <Header level={2} id="footageDeRef">
            FOOTAGE DE REFRÊNCIA
          </Header>

          <ContentLinkImg
            href="https://www.youtube.com/watch?v=oxKp97eY9-I&ab_channel=DeemoKun"
            img={gif_2}
          >
            Deshiken vs Kuroda
          </ContentLinkImg>
          <Text>
            Em 4:40, os dois trocam cr.MKs. Notando que seu oponente está
            tentando golpes low de range menor, Kuroda faz um st.HK, punindo um
            cr.LK (curta range).
          </Text>
          <ContentLinkImg
            href="https://www.youtube.com/watch?v=Q4mddINLEsg&ab_channel=DeemoKun"
            img={gif_1}
          >
            Deshiken vs Mimora
          </ContentLinkImg>

          <Text>
            Em 2:35, após o Ken acertar um st.HK, a Makoto tenta um cr.MP. Para
            dar outrange nesse golpe e o punir, Deshiken o acerta com um cr.HK.
          </Text>

          <Text>
            7:15 até 7:45 Fique atento enquanto assiste algum set para notar o
            quão frequente é a adaptação de um jogador bom à opção do oponente!
          </Text>
          <Text mt="12rem">
            ...Ou assista a um set de um{" "}
            <a
              className="text-blue-500 border-b-2 border-b-solid border-b-blue-500
                    hover:text-blue-800 hover:border-blue-800 my-2"
              href="https://www.youtube.com/watch?v=VrDrGvHk68M&ab_channel=3rdSTRIKE"
              target="_blank"
            >
              Oro
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
};
