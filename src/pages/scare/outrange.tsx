import gif_1 from "../../assets/scare/outrange-1.gif";
import gif_2 from "../../assets/scare/outrange-2.gif";

export const Outrange = () => {
  return (
    <div className="font-metropolis-semibold text-white max-w-screen-lg mt-12 text-lg mb-8">
      <div>
        {" "}
        <h2
          className="font-metropolis px-10 py-5 bg-[#ff0030] skew-x-[-24deg]
                text-4xl inline-block font-bold"
        >
          OUTRANGE
        </h2>
      </div>

      <p className="font-metropolis font-bold my-4">
        out-range
        <br /> verbo <br />
        "(sobre uma arma ou seu usuário) Ter um alcance superior."
      </p>

      <p className="my-2">
        Você já deve ter entrado em uma partida contra um Ken e ter notado o
        oponente mantendo certa distância e usando seus cr.MPs de forma quase
        abusiva. Ao tentar se aproximar, você pode ter levado estes golpes e os
        confirms a seguir. Também pode ter engolido três cr.MPs seguidos e se
        frustrado com o efetivo uso de botões destes personagens, sendo forçado
        a pular e tomar riscos. Para lidar com esse verdadeiro spam de botões
        fortes na curta distância, há uma resposta nos footsies, via whiff pu-
        nish, sem precisar pular, dar dash ou tomar um risco maior. Botões como
        o cr.MP são muito fortes na curta distância. Eles tem pouca range,
        prejudicando a capacidade de pescar parry e de punir tanto on whiff
        quanto on parry. Eles tem start-up menor que opções como cr.MK e
        recovery rápidos para possibilitar o spam e confirms. Para lidar com
        eles, você deve dar OUTRANGE. Isto é, usar um golpe com alcance maior,
        que acertará o oponente sem que ele consiga te acertar. Golpes como
        cr.HK e st.HK do Ken, por exemplo, vencem o cr.MP dele próprio.
      </p>
      <p className="my-2">
        Os botões fortes tendem a ter maior distância, causar mais dano e terem
        maior start-up e recovery, justamente para balancear os fatores
        positivos. Portanto, para um outrange efetivo, use esses golpes no má-
        ximo da range, ou estes poderão ser defendidos e punidos. Também rele-
        vante é que se o oponente pular, ele terá todo o seu recovery para ten-
        tar punir este golpe. Use a estratégia de dar outrange em botões quando
        notar que as opções que o oponente está usando são golpes de menor dis-
        tância que o seu, como usar o st.HK do Ken acima de um cr.MK, em uma
        mirror match.
      </p>
      <p className="my-2">
        Apesar de o Ken ser usado como referência base, até por ser o persona-
        gem que representa o jogo tradicionalmente, quase todo personagem terá
        um golpe pesado para este propósito. St.HP do Gouki, Forward HP da Ma-
        koto e st.MK e HK do Oro. Sweeps também serão usadas para esse propósi-
        to, dessa vez, acertando low. Exemplos visuais serão encontrados em
        quase todo set, sendo este um princípio fundamental, presente no aspecto
        básico do jogo. Porém, vou tentar deixar alguns momentos para referência
        visual.
      </p>
      <div>
        <h2
          className="font-metropolis px-10 py-5 bg-[#ff0030] skew-x-[-24deg]
                text-4xl inline-block font-bold mt-8 mb-4"
        >
          FOOTAGE DE REFRÊNCIA
        </h2>
      </div>
      <a
        className="text-blue-500 border-b-2 border-b-solid border-b-blue-500
                    hover:text-blue-800 hover:border-blue-800 my-2"
        href="https://www.youtube.com/watch?v=oxKp97eY9-I&ab_channel=DeemoKun"
        target="_blank"
      >
        Deshiken vs Kuroda
      </a>
      <img src={gif_2} className="my-2" />
      <p className="my-2">
        Em 4:40, os dois trocam cr.MKs. Notando que seu oponente está tentando
        golpes low de range menor, Kuroda faz um st.HK, punindo um cr.LK (curta
        range).
      </p>
      <a
        className="text-blue-500 border-b-2 border-b-solid border-b-blue-500
                    hover:text-blue-800 hover:border-blue-800 my-2"
        href="https://www.youtube.com/watch?v=Q4mddINLEsg&ab_channel=DeemoKun"
        target="_blank"
      >
        Deshiken vs Mimora
      </a>

      <img src={gif_1} className="my-2" />
      <p className="my-2">
        Em 2:35, após o Ken acertar um st.HK, a Makoto tenta um cr.MP. Para dar
        outrange nesse golpe e o punir, Deshiken o acerta com um cr.HK.
      </p>
      <a
        className="text-blue-500 border-b-2 border-b-solid border-b-blue-500
                    hover:text-blue-800 hover:border-blue-800 my-2"
        href="https://www.youtube.com/watch?v=VrDrGvHk68M&ab_channel=3rdSTRIKE"
        target="_blank"
      >
        Oro
      </a>
      <p className="my-2">
        7:15 até 7:45 Fique atento enquanto assiste algum set para notar o quão
        frequente é a adaptação de um jogador bom à opção do oponente! ...Ou
        assista a um set de um
      </p>
    </div>
  );
};
