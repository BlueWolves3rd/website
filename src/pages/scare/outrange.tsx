import gif_1 from "../../assets/scare/outrange-1.gif";
import gif_2 from "../../assets/scare/outrange-2.gif";
import {
  Text,
  Header,
  ContentLinkImg,
  Article,
} from "../../components/article";

export const Outrange = () => {
  const navSidebarList = [
    { href: "#outrange", label: "Outrange" },
    { href: "#footageDeRef", label: "Footage de Referência" },
  ];

  return (
    <Article navSidebarList={navSidebarList}>
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
        oponente mantendo certa distância e usando seus cr.MPs de forma quase
        abusiva. Ao tentar se aproximar, você pode ter levado estes golpes e os
        confirms a seguir. Também pode ter engolido três cr.MPs seguidos e se
        frustrado com o efetivo uso de botões destes personagens, sendo forçado
        a pular e tomar riscos. Para lidar com esse verdadeiro spam de botões
        fortes na curta distância, há uma resposta nos footsies, via whiff
        punish, sem precisar pular, dar dash ou tomar um risco maior. Botões
        como o cr.MP são muito fortes na curta distância. Eles tem pouca range,
        prejudicando a capacidade de pescar parry e de punir tanto on whiff
        quanto on parry. Eles tem start-up menor que opções como cr.MK e
        recovery rápidos para possibilitar o spam e confirms. Para lidar com
        eles, você deve dar OUTRANGE. Isto é, usar um golpe com alcance maior,
        que acertará o oponente sem que ele consiga te acertar. Golpes como
        cr.HK e st.HK do Ken, por exemplo, vencem o cr.MP dele próprio.
      </Text>
      <Text>
        Os botões fortes tendem a ter maior distância, causar mais dano e terem
        maior start-up e recovery, justamente para balancear os fatores
        positivos. Portanto, para um outrange efetivo, use esses golpes no
        máximo da range, ou estes poderão ser defendidos e punidos. Também
        relevante é que se o oponente pular, ele terá todo o seu recovery para
        tentar punir este golpe. Use a estratégia de dar outrange em botões
        quando notar que as opções que o oponente está usando são golpes de
        menor distância que os seus, como usar o st.HK do Ken acima de um cr.MK,
        em uma mirror match.
      </Text>
      <Text>
        Apesar de o Ken ser usado como referência base, até por ser o personagem
        que representa o jogo tradicionalmente, quase todo personagem terá um
        golpe pesado para este propósito. st.HP e st.MK do Gouki, 6HP da Makoto,
        st.MK e st.HK do Oro, dentre vários outros. Sweeps (geralmente cr.HK)
        também serão usadas para esse propósito, dessa vez, acertando low.
        Porém, seguem alguns momentos para referência visual:
      </Text>

      <Header level={2} id="footageDeRef">
        FOOTAGE DE REFERÊNCIA
      </Header>

      <ContentLinkImg
        href="https://www.youtube.com/watch?v=oxKp97eY9-I&ab_channel=DeemoKun"
        img={gif_2}
      >
        Deshiken vs Kuroda
      </ContentLinkImg>
      <Text>
        Em 4:40, os dois trocam cr.MKs. Notando que seu oponente está tentando
        golpes low de range menor, Kuroda faz um st.HK, punindo um cr.LK (curta
        range).
      </Text>
      <ContentLinkImg
        href="https://www.youtube.com/watch?v=Q4mddINLEsg&ab_channel=DeemoKun"
        img={gif_1}
      >
        Deshiken vs Mimora
      </ContentLinkImg>

      <Text>
        Em 2:35, após o Ken acertar um st.HK, a Makoto tenta um cr.MP. Para dar
        outrange nesse golpe e o punir, Deshiken o acerta com um cr.HK.
      </Text>

      <Text>
        Fique atento enquanto assiste algum set para notar o quão frequente é a
        adaptação de um jogador bom à opção do oponente!
      </Text>
      <div className="text-[#121212] hover:text-white group">
        <Text mt="12rem">
          ...Ou assista um set de um{" "}
          <a
            className="border-b-2 border-b-solid  border-[#121212]
                    my-2 
                    group-hover:text-blue-500 group-hover:border-b-blue-500"
            href="https://www.youtube.com/watch?v=VrDrGvHk68M&ab_channel=3rdSTRIKE"
            target="_blank"
          >
            Oro
          </a>
          . 7:15 até 7:45
        </Text>
      </div>
    </Article>
  );
};
