import { Article, Header, Text } from "../../components/article";

export const LidandoComMakoto = () => {
  const navSidebarList = [
    { href: "#lidando", label: "Lidando Com Makoto" },
    { href: "#aproximacao", label: "Aproximação" },
    { href: "#defesa", label: "Defesa" },
  ];
  return (
    <Article navSidebarList={navSidebarList}>
      <Header level={1} id="lidando">
        Lidando Com Makoto
      </Header>
      <p className="font-metropolis font-bold mb-4">
        CHESTO!
        <br /> CHESTO!
        <br /> CHESTO!
      </p>
      <Text>
        A Makoto é um personagem forte. Ela está entre os melhores personagens
        do jogo e tem diversas forças. Porém, ela não é imbatível. Para cada
        opção, existe uma resposta. Nesse guide, haverão demonstrações de certas
        forças da Makoto e como lidar com elas.
      </Text>

      <Header level={2} id="aproximacao">
        Aproximação
      </Header>
      <Text>
        Por não ter uma walk speed relevante, a Makoto precisa usar um de dois
        recursos na sua movimentação: Pulos e dashes. Ela vai ter que usar um
        desses dois recursos inevitavelmente no neutro caso o oponente não faça
        algum erro. Para vencer dashes, você *não* vai reagir, na maior parte do
        tempo. O dash da Makoto é muito rápido e, por isso, de difícil reação,
        mesmo entre os melhores jogadores. Fora isso, ela pode esperar um botão
        mais pesado e dar o dash no seu recovery, o famoso dash de whiff punish.
        Para vencer o dash da Makoto, use golpes rápidos de forma preventiva.
        Você notará que certas Makotos tem hábitos de fazerem dashes em tempos
        parecidos. Depois de tick. Depois de backdash. Aproveite para fazer
        alguns botões rápidos nesse momento ou, proativamente, no neutro, sem
        nenhum "tell" anterior. Para shotos, isso é spammar cr.LK para tirar os
        dashes. Demais personagens também terão um golpe rápido spammável,
        geralmente na forma do cr.LP ou cr.LK.
      </Text>
      <Text>
        Além disso, A Makoto tem um controle do ar muito competente, já que o
        j.MK controla muito espaço, serve de tick e ela tem uma velocidade e
        arco de pulo complicados. Mas, de qualquer jeito, os anti-aéreos seguem
        funcionando: Utilizar um especial dedicado como um Shoryuken, colocar
        botões antes do especial caso a Makoto comece a fazer parry, air-to-airs
        rápidos e firmes, dashes por baixo do pulo e parries no botões aéreos.
        Especificamente, j.MK da Makoto toma parry de forma mais fácil por causa
        da quantia relevante de frames ativos, permitindo punishes firmes logo
        após.
      </Text>
      <Text>
        Por fim, a Makoto, quando estiver sendo anulada, vai tentar usar seus
        botões e seu neutro pra abrir oportunidades. A maior parte dos botões
        bons da Makoto são mid, então ao pescar parry o neutro, pesque parry
        high. Isso cobrirá o cr.MK e o cr.MP dela, dois botões importantíssimos
        para a personagem. Dessa forma, ela irá ser forçada a usar opções mais
        arriscadas e menos vantajosas como cr.LK e cr.HP. Para vencer os golpes
        rápidos anti-dash, a Makoto irá usar o 6HP eventualmente. Nesses
        momentos, ela já estará mais defensiva, precisando pensar na sua próxima
        opção, permitindo pulos por cima dos botões ou dashes de whiff punish da
        sua parte, voltando pra um jogo "em igualdade".
      </Text>
      <Header level={2} id="defesa">
        Defesa
      </Header>
      <Text>
        Cedo ou tarde, a Makoto acertará algo e você será forçado a defender.
        Seguem alguns conselhos para lidar com os mix-ups da Makoto.
      </Text>
      <Text>
        Primeiro, após um Hayate, a Makoto tem vantagem total. Ela vai fazer
        algum mix-up. Ela pode apertar um botão low e repetir o Hayate ou então
        fazer Karakusa imediatamente após. Por isso, Guard Jump, de início,
        elimina quase toda opção da personagem, pois vai defender o golpe e
        também escapar do grab. Ademais, é possível fazer um OS parry em throw
        nessa situação. Para não correr o risco do low, a Makoto voltará usar
        seus botões mid. High parry cobre esse espaço e, logo após, o throw
        roubará o start-up do movimento da karateca. Também vale lembrar que
        Hayate defendido é COMPLETAMENTE PUNÍVEL, então em caso de defesa, é
        necessário aproveitar a oportunidade apresentada.
      </Text>
      <Text>
        Segundo, o Karakusa tem um start-up relevante. Um golpe de 3 FRAMES de
        start-up pode vencer o Karakusa. Portanto, de Yang, Ken, Gouki e outros
        personagens, você pode farofar botão/Shoryu quando achar que ela for
        fazer Karakusa pós-Hayate. É um risco, mas visto que a Makoto
        frequentemente vai abusar do ataque, querendo te forçar a escolher uma
        opção e "não largará o osso", uma ou outra farofa será benéfica, fazendo
        ela ter mais medo de pressionar, atrasar suas opções e abrir espaço para
        reações e contra-golpes.
      </Text>
      <Text>
        Terceiro, no corner, a Makoto não vai mais tentar mix-up de Hayate, via
        de regra. Faça questão de usar bastante Guard Jump quando a Makoto
        estiver próxima para não cair em Karakusa e tentar fugir do corner (use
        o pulo do Guard Jump na direção oposta do corner). Se ela estiver muito
        próxima, o mesmo OS parry em throw de antes também funcionará, cobrindo
        a opção high e aproximando com um throw, que pode, dessa vez, jogar a
        Makoto pro canto ao invés disso, muito útil ao levar em conta a falta de
        recursos defensivos da personagem. Se a Makoto pular durante a pressão,
        preste atenção e busque algum anti-aéreo, com preferência ao dash under,
        para também passar por baixo, deixando ela direcionada ao canto, ou
        escapar da pressão dela, recuperando o neutro. Tome cuidado, a Makoto
        possui recursos para atacar de todo ângulo do jogo: Overhead, high, low,
        grabs e ainda pode usar pulos e parries pra variar ainda mais.
      </Text>
      <Text>
        Com todas essas dicas, você provavelmente vai ter melhor entendimento
        dessa match-up complicada. Mesmo os personagens mais fracos do jogo
        tendem a possuir recursos equivalentes aos anotados aqui. Explore suas
        opções e boa sorte!
      </Text>
    </Article>
  );
};
