import {
  Article,
  Header,
  Text,
  Move,
  TextDecoration,
} from "../../components/article.tsx";

import makotoStance from "../../assets/riddler/makoto/makotostance.gif";
import crLK from "../../assets/riddler/makoto/crLK.gif";
import stLK from "../../assets/riddler/makoto/stLK.gif";
import crMP from "../../assets/riddler/makoto/crMP.gif";
import stMP from "../../assets/riddler/makoto/stMP.gif";
import crMK from "../../assets/riddler/makoto/crMK.gif";
import _6mp from "../../assets/riddler/makoto/6mp.gif";
import crHP from "../../assets/riddler/makoto/crHP.gif";
import crHK from "../../assets/riddler/makoto/crHK.gif";
import _6hp from "../../assets/riddler/makoto/6HP.gif";
import jMK from "../../assets/riddler/makoto/jMK.gif";
import jHK from "../../assets/riddler/makoto/jHK.gif";
import jHP from "../../assets/riddler/makoto/jHP.gif";
import hayate from "../../assets/riddler/makoto/hayate.gif";
import karakusa from "../../assets/riddler/makoto/karakusa.gif";
import oroshi from "../../assets/riddler/makoto/oroshi.gif";
import tsurugi from "../../assets/riddler/makoto/tsurugi.gif";
import fukiage from "../../assets/riddler/makoto/fuki.gif";
import mimora from "../../assets/riddler/mimora.gif";
import tominaga from "../../assets/riddler/tominaga.gif";
import haitani from "../../assets/riddler/haitani.gif";

export const Makoto = () => {
  const navSidebarList = [
    { href: "#makoto", label: "makoto" },
    { href: "#introducao", label: "Introdução" },
    { href: "#golpesNormais", label: "Golpes Normaiis" },
    { href: "#specials", label: "Specials" },
    { href: "#SA", label: "Super Art (SA)" },
    { href: "#combos", label: "Combos, Punições e Confirms" },
    { href: "#tecnicas", label: "Técninas Avançadas" },
    { href: "#topPLayers", label: "Top Players" },
  ];

  return (
    <Article navSidebarList={navSidebarList}>
      <Header level={1} id="makoto">
        MAKOTO (まこと)
      </Header>
      <div className="flex justify-center">
        <img src={makotoStance} className="h-48" />
      </div>
      <Header level={2} id="introducao">
        Introdução
      </Header>
      <Text>
        A Makoto é um personagem com pressão assustadora e relativamente fácil
        de se aplicar. Parece frágil e lenta ao andar, mas possui o melhor dash
        do jogo, um ótimo backstep, alguns dos melhores golpes no chão e no ar
        e, ainda, o infame Karakusa, um grab que leva a combos de alto dano e
        stun. Quando bem utilizada, é bastante elusiva e capaz de retomar a
        ofensiva em instantes. Seus mix-ups são tão rápidos e perigosos que
        forçam o adversário a adivinhar o que virá a seguir, sob pena de perder
        sem ter reagido a tempo. Por isso, a Makoto é muito boa para jogadores
        que gostam de agressividade e velocidade. Recomendada também para
        iniciantes por sua força bruta e estilo “simples, mas efetivo”.
      </Text>
      <Header level={2} id="golpesNormais">
        Golpes Normais
      </Header>
      <Text>A Makoto possui ótimos golpes normais. Os importantes são:</Text>
      <Move src={crLK} width="402px">
        cr.LK
      </Move>
      <Text>
        Este é, de longe, o golpe baixo mais importante da Makoto.
        Extraordinariamente rápido e cancelável, é{" "}
        <TextDecoration underline>
          utilizado tanto ofensiva quanto defensivamente.
        </TextDecoration>
      </Text>
      <Text>
        No ataque, funciona como o low tick da Makoto e pode ser seguido de uma
        infinidade de opções:{" "}
        <TextDecoration underline>
          Karakusa; st.MP; cr.MK; cr.MP; cr.HP; algum outro golpe que tire pulos
          (st.MK ou cr.HK); <TextDecoration blue>parry</TextDecoration>; dash ou
          backstep.
        </TextDecoration>{" "}
        Pode ser{" "}
        <TextDecoration underline blue href="#crLkHayateSA1">
          cancelado em Hayate fraco
        </TextDecoration>{" "}
        também para uma punição rápida ou uma leitura arriscada durante o
        rushdown. Mas o{" "}
        <TextDecoration underline>
          melhor cancel ofensivo do cr.LK é em{" "}
          <TextDecoration underline blue href="#oroshi">
            EX Oroshi
          </TextDecoration>
        </TextDecoration>
        , um overhead seguro se defendido que causa knockdown se acertar.
      </Text>
      <Text>
        Na defesa, o cr.LK é facilmente o principal abare da Makoto, isto é, o
        contragolpe desrespeitoso para cortar a sequência do adversário.{" "}
        <TextDecoration underline>
          Pode ser feito puro ou{" "}
          <TextDecoration underline blue href="#crLkHayateSA1">
            cancelado em Hayate fraco
          </TextDecoration>
        </TextDecoration>
        ; este, por sua vez, pode levar a confirm em Seichusen (SA1), então o
        cr.LK é bastante perigoso se conseguir quebrar a ofensa do oponente.
      </Text>
      <Text>
        Por fim, vale notar que o cr.LK recua a hurtbox da Makoto (que já é
        baixa quando ela está abaixada), o que significa que frequentemente
        vence/corta golpes sem nem levar trade.
      </Text>

      <Move src={stLK} width="338px">
        st.LK
      </Move>
      <Text>
        Inicialmente, há pouca vantagem em utilizar o st.LK no lugar do cr.LK;
        este é low, enquanto aquele não é. Mas o st.LK é um golpe igualmente
        veloz (mesmo start-up de 4F) e que{" "}
        <TextDecoration underline>
          empurra a Makoto um pouco para a frente
        </TextDecoration>
        . Por isso, funciona um pouco melhor do que o cr.LK para punições
        rápidas (cancelado em Hayate fraco){" "}
        <TextDecoration underline>
          quando a Makoto está um pouquinho afastada
        </TextDecoration>
        . Da mesma forma, funciona melhor para a Makoto continuar perto do
        oponente ao cancelar em Hayate/EX Oroshi após já ter acertado um cr.LK x
        Hayate, porque outro cancel com o cr.LK afastaria a Makoto e arriscaria
        não encaixar o special.
      </Text>
      <Text>
        Outra utilização importante é para{" "}
        <TextDecoration underline blue href="#kara-karakusa">
          kara-cancels
        </TextDecoration>
        . O st.LK possui uma propriedade única de poder ser cancelado{" "}
        <TextDecoration underline>on whiff</TextDecoration> durante seus{" "}
        <TextDecoration underline>frames ativos</TextDecoration>; diferentemente
        dos outros golpes, ele não faz kara-cancel no seu start-up.
      </Text>
      <Text>
        A Makoto ainda possui um pequeno target combo com o st.LK em st.MK. Não
        é tão útil, mas funciona bem contra personagens grandes (Hugo) para
        pressionar após um Hayate sem o mesmo risco de um novo cancel em Hayate.
      </Text>

      <Move src={crMP} width="338px" id="crMP">
        cr.MP
      </Move>
      <Text>
        Este é o principal golpe de footsies da Makoto, de maneira semelhante ao
        cr.MK dos Shotos, mas sem ser low. Faz{" "}
        <TextDecoration underline>
          combo com Hayate médio e forte
        </TextDecoration>
        também, então pode punir de longe, desde que alcance o oponente.
      </Text>
      <Text>
        O cr.MP também funciona muito bem com{" "}
        <TextDecoration underline blue href="#crMPHayate">
          buffer de Hayate
        </TextDecoration>{" "}
        para pegar algum dash, golpe ou walk forward do adversário; quando
        utilizado desta forma, ele deve ser posicionado na frente do adversário
        para que só encoste se este avançar. Esta aplicação do golpe é
        particularmente perigosa quando combinada com o{" "}
        <TextDecoration bold>backstep</TextDecoration> da Makoto, que permite
        contornar e punir rapidamente throws e golpes.
      </Text>
      <Text>
        Por fim, o cr.MP pode ser usado como simples{" "}
        <TextDecoration bold>golpe de ataque</TextDecoration>, geralmente após
        um tick, como cr.LK ou cr.MK.
      </Text>

      <Move src={stMP} width="282px">
        st.MP
      </Move>
      <Text>
        <TextDecoration underline>
          {" "}
          O principal golpe alto da Makoto
        </TextDecoration>
        , pois funciona muito bem como{" "}
        <TextDecoration bold>meaty</TextDecoration>
        (possui muitos frames ativos), serve como{" "}
        <TextDecoration underline>high tick</TextDecoration> e{" "}
        <TextDecoration underline>permite frame traps</TextDecoration> e
        <TextDecoration bold>confirms</TextDecoration>.
      </Text>
      <Text>
        Como high meaty, o st.MP{" "}
        <TextDecoration underline>
          contorna{" "}
          <TextDecoration underline blue>
            low parries
          </TextDecoration>{" "}
          e tira eventuais fugas do Karakusa
        </TextDecoration>
        , prendendo o oponente no chão ou mesmo tirando ele do ar, situações em
        que a Makoto pode voltar a pressioná-lo. Isto por si só já cria um{" "}
        <TextDecoration bold>mix-up</TextDecoration> no qual{" "}
        <TextDecoration underline>
          o oponente precisa lidar tanto com um possível Karakusa quanto um
          meaty st.MP, depois do qual pode novamente vir o Karakusa ou alguma
          outra opção
        </TextDecoration>
        . Dito isso,{" "}
        <TextDecoration bold>
          é importante ter um jogo forte de low aqui
        </TextDecoration>
        , do contrário o oponente simplesmente começará a variar entre fugir
        (pulo/backstep) do Karakusa e arriscar{" "}
        <TextDecoration blue>high parry</TextDecoration> para punir o st.MP.
      </Text>
      <Text>
        Sua utilidade como tick faz com que ele seja facilmente seguido de
        Karakusa ou algum golpe. O tick Karakusa funciona bem porque o st.MP
        concede bastante vantagem mesmo que defendido, logo o Karakusa{" "}
        <TextDecoration underline>
          quase sempre vence abare (contragolpe)
        </TextDecoration>
        . É possível até fazer{" "}
        <TextDecoration bold>st.MP, dash Karakusa</TextDecoration> para{" "}
        <TextDecoration underline>
          alcançar o oponente e vencer tentativas de backstep (também pode
          vencer alguns abare)
        </TextDecoration>
        .
      </Text>
      <Text>
        Para variar, é importante fazer frame traps (ticks em golpes)
        ocasionais, senão o adversário sempre escapará do Karakusa. Os
        principais golpes de follow-up (para suceder o st.MP de tick) são:{" "}
        <TextDecoration bold>cr.HP</TextDecoration>
        (sweep que <TextDecoration blue>vence high parry</TextDecoration>, jump
        e backstep se o st.MP for colado);
        <TextDecoration bold>outro st.MP</TextDecoration> (permite cr.HP, dash
        ou Kara-Karakusa); <TextDecoration bold>st.HP</TextDecoration> (contra
        oponentes grandes porque acerta ainda que estejam abaixados, pode ser
        confirmado em Hayate); <TextDecoration bold>6MP</TextDecoration> (menos
        utilizado, mas bom quando outro st.MP não alcança para vencer{" "}
        <TextDecoration blue>low parry</TextDecoration> e manter a pressão).
      </Text>
      <Text>
        Assim como o cr.LK, o st.MP também pode ser{" "}
        <TextDecoration bold>cancelado em EX Oroshi</TextDecoration> para aquela
        pressão de overhead. Se o st.MP estiver meio longe para que o EX Oroshi
        alcance de imediato, a Makoto pode fazer{" "}
        <TextDecoration bold>st.MP, st.LK x EX Oroshi</TextDecoration>; funciona
        tanto se o st.LK encostar quanto on whiff (Kara-EX Oroshi), mas costuma
        ser mais efetivo quando o golpe encosta para surpreender o adversário
        que não pode apertar botões de volta.{" "}
      </Text>
      <Text>
        Ainda, o st.MP pode confirmar um{" "}
        <TextDecoration underline>Seichusen (SA1)</TextDecoration> diretamente
        ou um link de{" "}
        <TextDecoration underline>st.LK x Hayate fraco</TextDecoration>, que
        também pode levar a Seichusen no final. A função de confirm no st.LK x
        Hayate é importante para que ele não aja apenas como tick;{" "}
        <TextDecoration underline>
          se o st.MP acertar, a Makoto pode ver e garantir um dano e stun extra,
          sem abrir mão da pressão
        </TextDecoration>{" "}
        que ela quase sempre tem ao final. O confirm na SA só é importante para
        matar ou deixar perto da morte.
      </Text>

      <Move src={crMK} width="398px">
        cr.MK
      </Move>
      <Text>
        Um excelente abare da Makoto que{" "}
        <TextDecoration underline>
          costuma vencer quaisquer golpes normais no chão, bem como interromper
          dashes
        </TextDecoration>
        . O cr.MK pode vir também após um cr.LK (tick) e ele mesmo funciona como
        tick para varias opções, como
        <TextDecoration underline>
          cr.MP, cr.HP,{" "}
          <TextDecoration underline blue>
            parry
          </TextDecoration>
          , backstep, dash ou EX Tsurugi
        </TextDecoration>
        .
      </Text>
      <Text>
        O cr.MK, assim como o st.MP da Makoto, pode acertar o oponente no ar, o
        que resulta em um{" "}
        <TextDecoration bold>
          air reset, situação perfeita para um dash Karakusa
        </TextDecoration>
        , porque é mais difícil ou impossível fazer guard jump (OS defensiva
        muito forte para lidar com golpe e Karakusa ao mesmo tempo) após um bom
        air reset. O j.MK permite o mesmo tipo de air reset quando utilizado
        como air-to-air. Para não depender sempre do dash Karakusa, é possível
        variar com algo como cr.LK x EX Oroshi após o dash.
      </Text>
      <Text>
        Por fim, vale ressaltar que é muito difícil fazer whiff punish no cr.MK.
        A janela entre os frames ativos e o final da recovery é pequena, então a
        Makoto quase sempre já pode agir de novo antes de ser atingida. Ela pode
        até utilizá-lo como um <TextDecoration bold>bait</TextDecoration> e{" "}
        <TextDecoration underline>
          pescar <TextDecoration blue>parry</TextDecoration> ou fazer backstep
        </TextDecoration>{" "}
        para tentar punir um whiff do adversário.
      </Text>

      <Move src={_6mp} width="266px">
        6MP
      </Move>
      <Text>
        O 6MP (frente + MP) da Makoto é um golpe peculiar que serve dois
        propósitos: <TextDecoration bold>atacar diretamente</TextDecoration> (de
        uma distância da qual ela geralmente não alcança com outro golpe alto) e{" "}
        <TextDecoration bold>mover-se para a frente</TextDecoration>. A primeira
        aplicação não é tão comum; é só uma opção adicional que ela possui,
        principalmente <TextDecoration underline>após um st.MP</TextDecoration>,
        para atacar com high e continuar a pressão sem levar{" "}
        <TextDecoration bold blue>
          low parry
        </TextDecoration>
        , uma vez que o oponente geralmente espera um cr.HP (low) dessa
        distância ou mais rushdown (Karakusa, dash etc.).
      </Text>
      <Text>
        É a segunda aplicação que faz o golpe ser digno de menção nesta lista. É
        sabido que a Makoto possui o melhor dash do jogo; porém, ele percorre
        uma distância muito grande. Sem ele, a Makoto tem problemas para avançar
        pelo chão. Andar não é uma opção viável. O 6MP resolve esse problema:
        serve como um <TextDecoration bold>“dash curto”</TextDecoration> para
        avançar sem o total comprometimento do dash. Extremamente útil para
        colocar-se no{" "}
        <TextDecoration underline>
          posicionamento ideal para um cr.MP/cr.HP
        </TextDecoration>
        . Ainda, serve de <TextDecoration bold>finta</TextDecoration> para
        ameaçar um dash/6HP, o que pode confundir jogadores que reagem a essas
        opções. Por isso, o 6MP é utilizado no jogo de chão da Makoto, por volta
        da distância máxima do dash dela, em conjunto com o próprio dash e o
        6HP.
      </Text>

      <Move src={crHP} width="336px">
        cr.HP
      </Move>
      <Text>
        A <TextDecoration bold>sweep</TextDecoration> (rasteira) da Makoto, o
        que é curioso, porque trata-se de soco e não de chute. Também notável
        por ser safe quando defendido na maioria dos casos (o Ken com SA3 é um
        dos poucos que podem punir).
      </Text>
      <Text>
        É o <TextDecoration bold>segundo low</TextDecoration> dela, muito útil
        de mid-range pela segurança mencionada acima, pelo alcance e por causar
        knockdown, o que{" "}
        <TextDecoration bold>reseta a pressão da Makoto</TextDecoration>; em
        outras palavras, quando ela acerta uma sweep, pode imediatamente fazer
        dash e{" "}
        <TextDecoration underline>
          escolher entre Karakusa, outra sweep e algum golpe alto/overhead
        </TextDecoration>{" "}
        (st.MP ou EX Oroshi).
      </Text>
      <Text>
        Recomenda-se cautela, porém, ao abusar deste golpe, pois ele
        frequentemente{" "}
        <TextDecoration underline>
          é o único golpe da Makoto que alcança logo após um st.MP ou cr.LK de
          max range
        </TextDecoration>
        , por exemplo, o que o deixa suscetível a{" "}
        <TextDecoration bold blue>
          parries defensivos
        </TextDecoration>
        .
      </Text>

      <Move src={crHK} width="352px">
        cr.HK
      </Move>
      <Text>
        Um chute semelhante ao st.HK do Ryu (roundhouse). Serve como{" "}
        <TextDecoration bold>anti-air preventivo</TextDecoration>,
        principalmente{" "}
        <TextDecoration underline>contra personagens grandes</TextDecoration>, e
        para pegar algumas tentativas de pulo (para fora do Karakusa) quando a
        Makoto não está em condições de puxar uma opção melhor (st.MP/st.HP), ou
        seja, não está colada no adversário. O st.MK dela serve propósito
        parecido, mas com recompensa e risco menores. O{" "}
        <TextDecoration underline>
          cr.HK é arriscado e pode ser facilmente punido por personagens de
          porte médio ou pequeno se ficarem abaixados
        </TextDecoration>
        , então deve ser utilizado raramente contra eles.
      </Text>

      <Move src={_6hp} width="464px">
        6HP
      </Move>
      <Text>
        Um soco lento de longo alcance,{" "}
        <TextDecoration underline>
          utilizado de longe, de modo a punir dash check (certos golpes que
          interrompem o dash da Makoto) e assim criar um mix-up com o dash
        </TextDecoration>
        : o oponente precisa adivinhar se virá o dash instantâneo ou o 6HP,
        correndo o risco de ser punido se apertar botão para impedir o dash.
        Desta forma, também{" "}
        <TextDecoration bold>pune meter-building</TextDecoration> (spam de
        botões para ganho de barra).
      </Text>
      <Text>
        o mix-up de longe seja importante, o 6HP é um golpe{" "}
        <TextDecoration underline>bastante lento</TextDecoration> que geralmente
        só pega o adversário no chão e, por isso, é muito{" "}
        <TextDecoration bold>vulnerável contra jump-in</TextDecoration>. Deve
        ser utilizado moderadamente contra personagens com jump-in forte.
      </Text>
      <Text>
        É possível fazer soco forte de novo durante o golpe para que a Makoto
        faça 3 hits, mas isso costuma ser inútil em partidas sérias, já que não
        se pode confirmar o primeiro hit e, portanto, apenas colocaria a Makoto
        em risco. O primeiro hit é o que importa.
      </Text>

      <Move src={jMK} width="382px">
        j.MK
      </Move>
      <Text>
        Possivelmente o golpe aéreo mais importante e irritante da Makoto.{" "}
        <TextDecoration underline>
          Tem muito alcance e fica ativo por muito tempo e, por isso, é ótimo
          contra oponentes que permanecem no chão
        </TextDecoration>
        . Se a Makoto tiver pulado e puxado o golpe antes do pulo do oponente,
        também terá vantagem contra air-to-air.
      </Text>

      <Text>
        <TextDecoration underline>
          A maior fraqueza do j.MK é levar{" "}
          <TextDecoration bold blue>
            parry
          </TextDecoration>{" "}
          e punish no chão
        </TextDecoration>
        . Para contornar isso, é importante que a Makoto faça o golpe do máximo
        alcance, pois pode evitar punições assim ocasionalmente (a punição pode
        não alcançar). É de igual importância que a Makoto estabeleça um{" "}
        <TextDecoration bold>mix-up aéreo</TextDecoration> com os outros golpes
        aéreos dela (mencionados a seguir) e o Tsurugi, de modo a variar o
        timing e a abordagem.
      </Text>

      <Text>
        <TextDecoration underline>
          Uma vez que o oponente foi atingido ou forçado a defender o j.MK, a
          vantagem é da Makoto
        </TextDecoration>
        : ela pode puxar{" "}
        <TextDecoration underline blue href="#karakusa">
          Karakusa
        </TextDecoration>{" "}
        (se estiver perto),{" "}
        <TextDecoration underline blue href="#karakusa">
          dash Karakusa
        </TextDecoration>{" "}
        (se estiver longe) ou variar com outros golpes de modo a pegar eventuais
        fugas do grab, como por exemplo com{" "}
        <TextDecoration underline blue href="#oroshi">
          cr.LK x EX Oroshi
        </TextDecoration>
        . Vale lembrar que, quanto mais baixo o golpe aéreo (mais perto do
        chão), maior a vantagem que ele proporciona no chão para seguir com
        outras opções.
      </Text>

      <Move src={jHK} width="394px">
        j.HK
      </Move>
      <Text>
        O principal air-to-air da Makoto. Este golpe possui tamanho alcance e
        prioridade que pode vencer até o Tatsumaki aéreo dos Shotos (Ken e
        Gouki) para fora do corner.{" "}
        <TextDecoration underline>
          É possivelmente o melhor golpe normal de air-to-air do jogo
        </TextDecoration>
        . A Makoto pode frequentemente pular para trás com j.HK e afastar o
        oponente (caso este tenha pulado junto) ou sair ilesa (caso ele tenha
        ficado no chão).
      </Text>
      <Text>
        <TextDecoration bold>Pulos verticais com o j.HK</TextDecoration> também
        são muito importantes: eles não apenas servem de air-to-air como também{" "}
        <TextDecoration underline>
          permitem Karakusa ou cr.LK em algo ao aterrissar na distância correta
        </TextDecoration>{" "}
        (fora de throw range, dentro de range para essas opções da Makoto). Isso
        cria um mix-up bastante forte, principalmente com o oponente no corner.
        Se o adversário tentar fugir pulando, ele leva o j.HK; se ele fica no
        chão, arrisca levar o Karakusa ou o cr.LK cancelado em algo (Hayate ou
        EX Oroshi).
      </Text>
      <Text>
        Enquanto a Makoto abusar do longo alcance do golpe,{" "}
        <TextDecoration underline>
          a sua maior fraqueza tende a ser{" "}
          <TextDecoration underline blue>
            air parry
          </TextDecoration>{" "}
          ou um golpe air-to-air que tenha vindo primeiro
        </TextDecoration>
        . Para resolver as duas, a própria Makoto pode pescar{" "}
        <TextDecoration blue bold>
          air parry
        </TextDecoration>{" "}
        e puxar o j.HK em seguida; trata-se de um{" "}
        <TextDecoration underline blue>
          OS parry
        </TextDecoration>
        . Significa dizer que ela faz o parry seguido imediatamente de golpe, de
        modo que o golpe sairá com ou sem do parry. Caso o parry saia, terá
        protegido ela do air-to-air adiantado do adversário; caso não saia,
        serve como delay para contornar o próprio air parry inimigo.
      </Text>

      <Move src={jHP} width="274px">
        j.HP
      </Move>
      <Text>
        O último golpe aéreo realmente importante da Makoto. Pode ser
        considerado o jump-in mais agressivo dela. A versão que importa é sempre
        a de pulos diagonais, em geral para a frente; o golpe é diferente e
        consideravelmente pior durante pulos verticais.{" "}
        <TextDecoration underline>
          Deve ser utilizado de perto, pois o ângulo do golpe é favorecido
          quando o oponente está logo abaixo da Makoto
        </TextDecoration>
        . O dano e a vantagem serão maiores do que seriam com um
        <TextDecoration bold>j.MK</TextDecoration>.
      </Text>
      <Text>
        Também é útil após Hayate, com um pulo para a frente para pegar pulos
        com medo do Karakusa. Nesses casos, pode ser feito com hi-jump. A
        vantagem do hi-jump é cair mais longe caso o adversário fique no chão; a
        Makoto também cai mais perto para pressionar se acertar o oponente no
        ar.
      </Text>
      <Text>
        Por fim, o j.HP para a frente é o golpe aéreo de mais dano da Makoto;
        deve ser utilizado sempre que possível para{" "}
        <TextDecoration underline>
          otimizar o dano de combos quando o oponente estiver stunado
        </TextDecoration>
        .
      </Text>
      <Header level={2} id="specials">
        Specials
      </Header>
      <Text>
        Quase todos os specials da Makoto são importantes. Exceção é a versão
        normal do Oroshi. Segue a explicação desses golpes:
      </Text>
      <Move src={hayate} width="490px">
        Hayate
      </Move>
      <Text>
        <TextDecoration underline>O especial de BnB da Makoto</TextDecoration>,
        ou seja, é utilizado nos combos e punições. Por isso, a versão fraca do
        Hayate anda junto com o cr.LK da Makoto, enquanto a versão média (e
        ocasionalmente a forte) anda com o cr.MP. Essas aplicações nos cancels
        são melhor explicadas posteriormente.
      </Text>
      <Text>
        O Hayate é <TextDecoration bold>punível</TextDecoration> se defendido,
        logo raramente deve ser usado fora de punições e combos garantidos.
        Exceção é puxar{" "}
        <TextDecoration underline>mais um Hayate fraco</TextDecoration>
        (direto ou cancelado de LK){" "}
        <TextDecoration underline>
          logo após ter acertado um Hayate
        </TextDecoration>{" "}
        para pegar algo (pulo, botão etc.) e continuar a pressão, mas essa
        aplicação, embora válida, tem seus riscos e também deve ser moderada.
      </Text>
      <Text>
        <TextDecoration underline>
          A versão EX é a única safe se defendida
        </TextDecoration>
        , mas o brilho pode entregar a opção e facilitar um{" "}
        <TextDecoration bold blue>
          parry
        </TextDecoration>
        , então é bom evitar spam disso.{" "}
        <TextDecoration underline>
          O EX Hayate é mais utilizado em{" "}
          <TextDecoration underline blue>
            combos garantidos por meio do Karakusa
          </TextDecoration>
        </TextDecoration>{" "}
        e, ocasionalmente, para pegar um pulo para trás ou botão do outro lado
        da tela.
      </Text>
      <Text>
        Cada Hayate tem um alcance diferente. Mesmo que mais de uma versão
        alcance o oponente, é interessante sempre puxar uma que, ao acertar,
        deixe a Makoto levemente afastada, para diminuir os riscos de levar
        throw.{" "}
        <TextDecoration underline>
          Quando perfeitamente espaçado, o Hayate pode até sair impune, mesmo
          que defendido
        </TextDecoration>{" "}
        (mas não é bom contar muito com isso).
      </Text>
      <Text>
        O Hayate on hit cria um dos mix-ups mais comuns e fortes da Makoto.
        Alguns dos principais <TextDecoration bold>follow-ups</TextDecoration>{" "}
        são:
      </Text>
      <ol className="list-decimal ml-24">
        <li>Karakusa (grab);</li>
        <li>Dash Karakusa (pune bem um backstep);</li>
        <li>cr.LK/st.LK x Hayate fraco (low que reseta a situação);</li>
        <li>Hayate fraco direto (high que reseta a situação);</li>
        <li>cr.HP (low que vence backstep);</li>
        <li>
          <TextDecoration bold blue>
            Parry
          </TextDecoration>{" "}
          (pune abare/botão);
        </li>
        <li>Backstep (pune throws defensivos).</li>
      </ol>
      <Text>
        O Hayate ainda possui duas peculiaridades. A primeira é que{" "}
        <TextDecoration underline>
          o Hayate forte serve de whiff punish na reação a golpes razoavelmente
          lentos do adversário
        </TextDecoration>
        , como o cr.MK ou cr.HK do Ken. Quando utilizado dessa forma, é
        interessante fazer com uso do{" "}
        <TextDecoration bold>backstep</TextDecoration> da Makoto para contornar
        e então punir o golpe se for lento. É uma resposta difícil, mas bastante
        forte quando combinada com o Seichusen (SA1) para roubar um round. Vale
        lembrar, porém, que o Hayate não é a única opção da Makoto nessa
        situação; se ela não tiver certeza do golpe inimigo ou não quiser
        arriscar, pode fazer 6HP ou dash throw/Karakusa.
      </Text>
      <Text>
        A segunda é que o Hayate pode ser{" "}
        <TextDecoration bold blue>
          segurado,
        </TextDecoration>{" "}
        o que serve como finta.
      </Text>

      <Move src={karakusa} width="310px" id="karakusa">
        Karakusa
      </Move>
      <Text>
        <TextDecoration underline>
          O infame command grab da Makoto
        </TextDecoration>
        . Quanto maior a força, maior o alcance, mas também levemente mais lento
        o startup e a recovery do golpe. Por isso, sempre que a Makoto ficar
        claramente colada no oponente (logo após um dash), é interessante
        utilizar o Karakusa fraco, reservando os outros usos para quando o
        alcance maior for necessário.
      </Text>

      <Text>
        <TextDecoration underline>
          Essa velocidade maior do Karakusa fraco
        </TextDecoration>{" "}
        também permite um backup bastante conhecido no corner: se o oponente
        pular para trás a fim de escapar do Karakusa fraco, permanecendo no
        corner, a Makoto se recupera a tempo e consegue fazer parry (no golpe
        aéreo) e outro Karakusa fraco. Em outras palavras, o Karakusa fraco
        volta rápido o bastante para não ser punível por pulos defensivos.
      </Text>

      <Text>
        O Karakusa tem as vantagens de um command grab, o que significa que o
        <TextDecoration bold>Karakusa NÃO pode levar throw tech</TextDecoration>{" "}
        do oponente (
        <TextDecoration underline>
          embora ele mesmo possa fazer tech para proteger a Makoto caso ela
          fosse levar um throw no exato momento do input do chute
        </TextDecoration>
        ).
      </Text>
      <Text>
        <TextDecoration bold>
          Para escapar do Karakusa, é necessário pular ou fazer backstep
        </TextDecoration>{" "}
        (se o personagem tiver um bom). O backstep também não funcionará se for
        um “meaty” Karakusa; é bom reservá-lo para escapar quando o Karakusa não
        tiver tanta vantagem assim, como por exemplo logo após um Hayate on hit.
      </Text>

      <Text>As principais formas de se encaixar um Karakusa são:</Text>
      <ol className="list-decimal ml-24">
        <li>Dash</li>
        <li>Tick</li>
        <li>“Meaty” (Karakusa direto);</li>
        <li>
          <TextDecoration bold blue>
            Parry
          </TextDecoration>
        </li>
      </ol>
      <Text>
        O dash é autoexplicativo; a Makoto entra rapidamente no alcance e puxa o
        Karakusa. Apenas um detalhe merece menção: o Karakusa ainda é levemente
        mais lento do que um throw, então o dash Karakusa é menos seguro do que
        um dash throw, outra opção bem forte da Makoto. Em compensação, o dash
        Karakusa pode vencer um throw tech do oponente na reação ao dash, porque
        esses tech geralmente são feitos com um leve atraso (não é fácil reagir
        ao dash). É bom levar essa diferença de segurança e força na hora de
        escolher entre dash throw e dash Karakusa; em geral,{" "}
        <TextDecoration underline>
          dash Karakusa é mais arriscado e mais recompensador (high risk/high
          reward) em relação a dash throw
        </TextDecoration>
        .
      </Text>
      <Text>
        Uma outra utilização do dash para Karakusa é o{" "}
        <TextDecoration bold>dash under</TextDecoration> (dash por baixo de
        pulos). Ele contorna a fraqueza dos dashes (botões no chão) e permite um
        Karakusa praticamente garantido se a Makoto parar perto da aterrissagem
        do adversário. E o risco de levar jump-in é inexistente, pois ela estará
        nas costas (mas é bom cuidar com cross-ups).{" "}
        <TextDecoration underline>
          O dash under é uma opção especialmente forte de SA2
        </TextDecoration>
        .
      </Text>
      <Text>
        Ticks são uma forma extremamente forte de encaixar o Karakusa, pois o
        oponente não tem como saber se virá outro golpe ou o grab, o que
        favorece a pressão da Makoto. E, como nem todo personagem tem um
        backstep rápido, boa parte do cast do jogo se obriga a pular para fora
        ou “farofar” algum special.{" "}
        <TextDecoration underline>
          Os principais ticks são: st.LP, st.MP, cr.LK e j.MK
        </TextDecoration>
        .
      </Text>
      <Text>
        <TextDecoration underline>
          O st.LP (para tick em Karakusa) é mais utilizado logo após um dash
        </TextDecoration>
        , porque dash st.LP é tão rápido que pode forçar o oponente a defender
        antes que ele consiga fazer qualquer coisa, até mesmo um throw (tech) na
        reação ao dash.{" "}
        <TextDecoration underline>
          Esse dash st.LP gera um mix-up forte entre seguir com Karakusa ou mais
          pressão de botões (st.MP)
        </TextDecoration>
        . Com Seichusen (SA1), a Makoto também pode usar esse dash st.LP para
        encaixar um cr.LK x Hayate sorrateiro, linkar na SA e roubar a vantagem.
      </Text>
      <Text>
        <TextDecoration underline>
          O st.MP e o cr.LK de tick são usados de maneira mais convencional,
          durante a pressão
        </TextDecoration>
        . Se a Makoto já tiver optado pelo st.MP como meaty no okizeme, o
        Karakusa é uma opção forte.{" "}
        <TextDecoration underline>
          O cr.LK aqui é o low do mix-up, uma alternativa para contornar o{" "}
          <TextDecoration bold blue>
            high parry
          </TextDecoration>{" "}
          que o st.MP (meaty de escolha da Makoto) poderia levar
        </TextDecoration>
        .
      </Text>
      <Text>
        E a Makoto tem muitas outras opções após o st.MP/cr.LK para vencer o que
        fugiria de um Karakusa: o cr.HP pode pegar um backstep, um cr.HK ou
        air-to-air pode pegar um pulo etc.
      </Text>
      <Text>
        Para finalizar os ticks,{" "}
        <TextDecoration underline>
          o j.MK é um bastante usado porque trata-se de um ótimo air normal
          contra quem fica no chão. Se a Makoto cair com j.MK perto o bastante
          para o Karakusa, ele é uma opção
        </TextDecoration>
        . E ela pode variar com algum cancel em EX Oroshi para pegar fugas.
        Quando a Makoto não cai perto o bastante para o Karakusa, ela ainda pode
        fazer um dash Karakusa inesperado, mas já não será mais um tick Karakusa
        propriamente dito.
      </Text>
      <Text>
        <TextDecoration underline>
          Quanto ao “meaty” Karakusa, a aplicação óbvia é de imediato no okizeme
        </TextDecoration>
        , ou seja, no wake-up do adversário. Mas não é a única. A Makoto ainda
        conta com diversos <TextDecoration bold>air resets</TextDecoration> que
        favorecem o Karakusa, dos quais os principais são o{" "}
        <TextDecoration bold>j.MK</TextDecoration> e o{" "}
        <TextDecoration bold>cr.MK</TextDecoration>,{" "}
        <TextDecoration underline>quando pegam o oponente no ar</TextDecoration>
        . Eles permitem, na maioria dos casos, um dash Karakusa que funciona
        como “meaty” também,{" "}
        <TextDecoration underline>
          vencendo botões,{" "}
          <TextDecoration bold blue>
            parries
          </TextDecoration>{" "}
          e throws defensivos. Até guard jump parece perder contra esse Karakusa
          após air reset
        </TextDecoration>
        . Pulo (imediato) e “farofa” (Shoryu etc.) são as únicas opções do
        oponente para escapar. Variar com um atraso (defesa) de vez em quando
        resolve o problema da “farofa”.
      </Text>
      <Text>
        <TextDecoration underline>
          A última grande forma de se encaixar o Karakusa é por meio de{" "}
          <TextDecoration blue bold>
            parry
          </TextDecoration>
        </TextDecoration>
        . Logo após um parry, a Makoto geralmente tem vantagem suficiente para
        puxar o Karakusa e punir. Isso inclui tanto parries no chão quanto o
        famoso <TextDecoration bold>“parry de anti-air”</TextDecoration> para
        punir jump-ins, mas vale notar que uma variação no timing do jump-in
        pode vencer o parry, logo{" "}
        <TextDecoration underline>
          esta utilização é meio arriscada; a Makoto pode levar um full jump-in
          combo se errar o parry de anti-air
        </TextDecoration>
        . Em geral, é melhor reservar esses parries para situações ofensivas nas
        quais a Makoto esteja no controle.{" "}
        <TextDecoration underline>
          O guess{" "}
          <TextDecoration bold blue>
            parry
          </TextDecoration>
          com Karakusa em situação defensiva só costuma valer a pena se a Makoto
          estiver de Tosanami (SA2)
        </TextDecoration>
        , pois o retorno é tão grande que pode virar e garantir o round, e ela
        provavelmente precisaria do Karakusa para encaixar a SA de qualquer
        forma.
      </Text>

      <Move src={fukiage} width="274px">
        Fukiage
      </Move>
      <Text>
        Um soco para cima que parece um anti-air. A primeira coisa a ser dita é
        que o <TextDecoration bold>Fukiage NÃO é um Shoryuken</TextDecoration>;
        ele não funciona bem como reversal, nem mesmo a versão EX. E não é
        utilizado como anti-air da mesma forma, porque a hitbox do golpe é bem
        em cima da Makoto e não na frente. Em vez disso, este special é bastante
        situacional.
      </Text>
      <Text>
        O maior uso dele (sem mencionar os combos de SA2) é, sim,{" "}
        <TextDecoration underline>
          como anti-air, mas em casos muito específicos onde o oponente pularia
          POR CIMA da Makoto
        </TextDecoration>
        . Significa que ele é ótimo para pegar pulos que fugiriam do corner por
        cima, quando a Makoto já se encontra posicionada para tal.
      </Text>

      <Text>
        <TextDecoration underline>
          O EX Fukiage também pode ser usado de anti-air, mas ele avança um
          pouco para a frente
        </TextDecoration>
        ; a distância para usá-lo, portanto, é outra. É um bom anti-air quando
        feito de modo que passe por baixo e acerte o adversário pelas costas,{" "}
        <TextDecoration underline>
          mas deve ser usado com moderação porque esse gasto de barra nem sempre
          é justificado; a Makoto pode simplesmente passar por baixo do pulo e
          guardar a barra para SA
        </TextDecoration>
        .
      </Text>

      <Text>
        A outra aplicação importante é como{" "}
        <TextDecoration bold>anti-air de multihit</TextDecoration>, ou seja,
        como anti-parry contra um{" "}
        <TextDecoration bold blue>
          air parry
        </TextDecoration>
        .{" "}
        <TextDecoration underline>
          A Makoto pode fazer o st.MP de anti-air e cancelar em (EX) Fukiage
          caso o adversário faça air parry
        </TextDecoration>
        . É sempre utilizado o Fuki fraco ou o EX para isso; os outros são muito
        lentos. Dois detalhes importantes. Primeiro,{" "}
        <TextDecoration underline>
          o avanço que ocorre durante o EX Fukiage precisa ser levado em
          consideração na hora de escolher a versão, porque depende do
          posicionamento da Makoto em relação ao oponente
        </TextDecoration>
        . Se ela estiver longe demais para o Fukiage fraco, o EX é melhor; se
        ela, ao contrário, estiver perto o bastante na hora do air parry para
        que fique logo abaixo do oponente, é melhor o Fuki fraco, porque o EX
        erraria. Segundo, esse cancel em Fukiage contra air parries é melhor se
        feito na reação, mas isto é difícil; o usuário precisa estar ciente de
        que, se cancelar sem reagir, a Makoto pode ficar vulnerável no chão,
        pois,{" "}
        <TextDecoration underline>
          na falta do{" "}
          <TextDecoration bold blue>
            air parry
          </TextDecoration>
          , o st.MP pode acertar e causar um air reset, fazendo com que o
          Fukiage não acerte.
        </TextDecoration>
      </Text>

      <Text>
        Por fim, vale mencionar{" "}
        <TextDecoration underline>
          o que se faz após acertar um Fukiage
        </TextDecoration>
        . As principais opções são:
      </Text>
      <ol className="list-decimal ml-24">
        <li>
          <TextDecoration bold>cr.HK</TextDecoration>. É a opção mais fácil e
          garantida. Causa bom stun e air reset para que a Makoto pressione
          mais. É o que geralmente se faz quando não se puxa o hi-jump a tempo
          para otimizar.
        </li>
        <li>
          <TextDecoration bold>Hayate médio</TextDecoration>. Um juggle decente
          se a Makoto quiser o corner carry.
        </li>
        <li>
          <TextDecoration bold>Hi-jump com j.HP</TextDecoration>. É o maior stun
          possível sem gastar mais barra. É, portanto, o follow-up otimizado,
          mas requer preparo, pois o Fukiage precisa ser{" "}
          <TextDecoration bold>cancelado em hi-jump</TextDecoration>.{" "}
          <TextDecoration underline>
            Utiliza-se hi-jump j.HP para a frente após Fukiage normal e hi-jump
            HP vertical após EX Fukiage
          </TextDecoration>
          .
        </li>
      </ol>

      <Move src={tsurugi} width="466px" id="tsurugi">
        Tsurugi
      </Move>
      <Text>
        <TextDecoration underline>
          Special de chute da Makoto no ar
        </TextDecoration>
        . Funciona como jump-in diferenciado, como air-to-air ocasional (na
        read) e, na sua versão EX, como ferramenta de pressão inesperada e
        relativamente segura.
      </Text>
      <Text>
        Como jump-in, a versão mais usada é a forte. É a única versão que causa
        knockdown, algo que a Makoto valoriza bastante. O Tsurugi forte feito da
        distância certa vence muitas opções e é difícil de punir. Mesmo um
        adversário bem posicionado pode calcular mal o momento de utilizar um
        golpe para punir a aterrissagem, o que faz com que seja atingido pelo
        Tsurugi. Se, por qualquer motivo,{" "}
        <TextDecoration underline>
          o Tsurugi médio for utilizado com o oponente no chão, vale notar que a
          falta de knockdown pode ser usada a favor da Makoto
        </TextDecoration>
        : se acertar, ela pode seguir com um combo simples de Hayate (geralmente
        st.LK x Hayate fraco); ou ela pode simplesmente usar a vantagem para
        fazer (dash) Karakusa ou algo em EX Oroshi.
      </Text>
      <Text>
        Como air-to-air, o Tsurugi fraco/médio deve ser usado, pois permite
        juggle de double Hayate ou um Hayate e cr.HK (no corner). Isso acontece
        mais frequentemente quando se pula de longe e espera que o oponente pule
        também, ou percebe que ele pulou.
      </Text>
      <Text>
        Pode ser feito no okizeme também, para pegar um pulo defensivo, mas esta
        utilização é mais situacional, porque, neste caso, o Tsurugi deixa a
        Makoto exposta se o oponente permanecer no chão. Para contornar este
        problema,{" "}
        <TextDecoration underline>é melhor fazer o EX Tsurugi</TextDecoration>,
        que é mais rápido, seguro e ainda permite o double Hayate no corner se
        feito da distância certa, de modo que apenas um hit do EX acerte. Se os
        dois hits acertarem, também não é tão ruim, porque causa knockdown, até
        mesmo se pegar o oponente no chão.
      </Text>
      <Text>
        Por falar nele,{" "}
        <TextDecoration underline>
          é importante praticar para que se faça o EX Tsurugi perto do chão, sem
          demora
        </TextDecoration>
        . Desta forma, ele acerta o oponente no chão, o que o transforma numa
        ferramenta extremamente flexível que{" "}
        <TextDecoration underline>
          pode ser feita quase a qualquer momento desde que a Makoto esteja
          perto o bastante. Por sair do chão, ele contorna throws e golpes
          baixos. Não é incomum, portanto, a Makoto fazer dash EX Tsurugi ou
          tick (cr.LK ou cr.MK) EX Tsurugi
        </TextDecoration>{" "}
        para tentar pegar algo sem correr tanto risco. Também não é tão fácil
        acertar{" "}
        <TextDecoration bold blue>
          parry
        </TextDecoration>{" "}
        no EX; esse parry exige um pequeno delay.
        <TextDecoration underline>
          Finalmente, o EX Tsurugi pode ser utilizado até como ferramenta
          defensiva em conjunto com o guard jump; desta forma, a Makoto defende
          (por um instante) e já pula com o EX Tsurugi em seguida para roubar o
          turno
        </TextDecoration>
        .
      </Text>
      <Text>
        Um último uso notável do Tsurugi é como{" "}
        <TextDecoration bold>finta</TextDecoration>.{" "}
        <TextDecoration underline>
          O Tsurugi normal pode ser feito mais perto do chão para que não acerte
          de propósito, o que permite um rápido Karakusa
        </TextDecoration>{" "}
        (ou cr.LK x Hayate fraco) para surpreender o oponente. Essa finta com
        Karakusa pode ser feita pela frente ou pelas costas. Para aterrissar e
        puxar o Karakusa pelas costas, o Tsurugi precisa passar por cima e
        também ser feito perto do chão. Existem duas formas de se executar o
        Tsurugi com essa finalidade: a primeira é pular de modo que o pulo só
        inverta o lado no final, executando o Tsurugi ainda pela frente, quando
        a Makoto começa a cair; a segunda é pular de modo que a Makoto passe por
        cima ainda no vértice do pulo e só então comece a cair, devendo executar
        o Tsurugi já para o outro lado.
      </Text>

      <Move src={oroshi} width="274px" id="oroshi">
        EX Oroshi
      </Move>
      <Text>
        <TextDecoration underline>Special overhead da Makoto</TextDecoration>.
        Praticamente só se utiliza a versão EX: um
        <TextDecoration bold>overhead</TextDecoration> extremamente rápido que
        causa <TextDecoration bold>knockdown</TextDecoration> e que, embora não
        seja um combo, pode ser{" "}
        <TextDecoration underline>cancelado de cr.LK ou st.LK</TextDecoration>{" "}
        para pressionar o adversário, que muito provavelmente será atingido se
        estiver com medo do Karakusa.
      </Text>
      <Text>
        <TextDecoration underline>
          O EX Oroshi pode até ser utilizado sem cancel algum, diretamente no
          wake-up do oponente
        </TextDecoration>
        . Desta forma, o EX Oroshi completa um mix-up com o Karakusa e outros
        golpes, como o cr.HP, pois{" "}
        <TextDecoration underline>
          o oponente precisa adivinhar se virá o EX (overhead), o Karakusa
          (grab) ou o cr.HP (low)
        </TextDecoration>
        . E cada uma dessas opções acaba em knockdown (o Karakusa normalmente
        leva a st.HP x EX Hayate), o que reseta a pressão no corner.
      </Text>
      <Text>
        Por fim, o j.HP para a frente é o golpe aéreo de mais dano da Makoto;
        deve ser utilizado sempre que possível para{" "}
        <TextDecoration underline>
          otimizar o dano de combos quando o oponente estiver stunado
        </TextDecoration>
        .
      </Text>

      <Header level={2} id="SA">
        Super Art (SA)
      </Header>
      <Text>
        A Makoto possui duas SA que são consideradas viáveis competitivamente:
        <TextDecoration bold>SA1</TextDecoration> e{" "}
        <TextDecoration bold>SA2</TextDecoration>.{" "}
        <TextDecoration underline>
          A SA3 da Makoto já foi utilizada no cenário competitivo, mais
          notavelmente pelo jogador K.O e ainda hoje pelo Otouto!, mas, apesar
          de seu potencial alto de dano, não é considerada viável
        </TextDecoration>{" "}
        por sua falta de defesa (a Makoto só pode fazer parry) e dependência de
        read (utilização dos frames de invulnerabilidade do startup) para matar
        o oponente rápido sem levar counter, o que a deixa menos efetiva do que
        as outras duas. O próprio K.O utilizava outras SA quando jogava mais
        seriamente, enquanto o Otouto! não alcançou o mesmo nível de sucesso que
        outros jogadores.{" "}
        <TextDecoration underline>
          A SA3, portanto, só é utilizada em partidas casuais e não é levada
          muito a sério em partidas competitivas
        </TextDecoration>
        .
      </Text>
      <Move>Seichusen Godanzuki (SA1)</Move>
      <Text>
        Este é considerado{" "}
        <TextDecoration underline>
          o Super mais versátil e sólido da Makoto
        </TextDecoration>{" "}
        e, por isso, é a escolha da maioria dos jogadores japoneses.
        Extremamente rápido e fácil de usar, possui dano alto e o potencial de
        finalizar os rounds quando bem utilizado.
      </Text>
      <Text>
        Pode ser utilizado diretamente para punir algo, mas{" "}
        <TextDecoration underline>
          o uso mais comum é após um cr.MP x Hayate (de mid-range) ou um cr.LK x
          Hayate (de perto)
        </TextDecoration>
        , pois o Super pode ser linkado após o Hayate, o que transforma esses
        golpes em verdadeiras ameaças quando a Makoto tem barra.
      </Text>
      <Text>
        Outros confirms menos utilizados são o st.MP ou o cr.MK com link em
        Seichusen. O st.MP é mais ofensivo (pressão), enquanto o cr.MK é mais
        defensivo (controle). O confirm com esses links do normal direto em
        Super causam muito dano devido ao scaling menor.
      </Text>
      <Text>
        Ainda, principalmente com um Karakusa prévio,{" "}
        <TextDecoration bold>
          um st.HP x Hayate pode ser confirmado em Seichusen para completar o
          stun
        </TextDecoration>
        . Esta jogada costuma garantir o round, porque o stun ainda permitirá um
        combo completo de jump-in em seguida. O segredo está em identificar
        quando o stun é suficiente para que o Seichusen deixe o oponente
        stunado.
      </Text>
      <Text>
        Em regra,{" "}
        <TextDecoration bold>
          não se utiliza o Seichusen cedo demais no round
        </TextDecoration>
        , pois o momentum é completamente perdido; a Makoto gasta toda a barra
        de uma vez só e, embora cause dano significativo, joga o oponente para
        longe e fica sem vantagem para continuar a pressão. Em vez disso, é
        recomendado que a SA seja guardada para um momento que deixe o oponente
        (quase) morto.
      </Text>
      <Text>
        Exceção à regra é no começo do segundo round,{" "}
        <TextDecoration underline>
          em matchups que a Makoto controle bem
        </TextDecoration>{" "}
        (e tenha que controlar), como Hugo, Dudley etc. Em outras palavras,
        contra oponentes grandes. O motivo para isso é afastar logo esses
        personagens, causar dano e voltar a administrar a partida enquanto se
        enche barra novamente com segurança. Quando executada corretamente, esta
        estratégia permite começar o terceiro round (se houver) com barra
        (quase) cheia para EX ou um novo Seichusen.
      </Text>

      <Move>Abare Tosanami (SA2)</Move>
      <Text>
        <TextDecoration underline>
          Este é o Super da Makoto focado em combos de alto stun e dano a partir
          de um Karakusa
        </TextDecoration>
        . O jogo inteiro dele gira em torno de mix-ups que coloquem a Makoto em
        posição perfeita para encaixar um Karakusa de costas para a extremidade
        da tela (não precisa ser o corner) e então segui-lo com st.HP cancelado
        no Tosanami, pois o Super{" "}
        <TextDecoration underline>
          só faz combo se as costas da Makoto não estiverem tão longe dessa
          extremidade
        </TextDecoration>
        ; no máximo, o oponente pode ficar embaixo do timer durante o Karakusa e
        ainda levará o Super.{" "}
        <TextDecoration bold>
          A SA2 é recomendada contra oponentes grandes (Hugo, Urien, Alex, Q,
          Dudley)
        </TextDecoration>{" "}
        porque eles possuem mobilidade reduzida e podem ser atingidos de ainda
        mais longe pelo Super após Karakusa (podem passar um pouquinho do timer
        e ainda serão atingidos).
      </Text>
      <Text>
        <TextDecoration underline>
          A força do Tosanami varia de acordo com a distância da extremidade da
          tela
        </TextDecoration>
        . Se a Makoto estiver colada no fim da tela durante o Karakusa, deve
        utilizar a versão fraca; se ela estiver um pouco afastada da
        extremidade, deve fazer a versão média; se o oponente está mais ou menos
        embaixo do timer durante o Karakusa, a Makoto precisa fazer a versão
        forte.
      </Text>
      <Text>
        As formas mais comuns de se encaixar um Karakusa propício para o
        Tosanami (sempre com a Makoto de costas para a extremidade da tela) são:
      </Text>
      <ol className="list-decimal ml-24">
        <li>
          {" "}
          <TextDecoration bold blue>
            Parry
          </TextDecoration>{" "}
          Karakusa;
        </li>
        <li>Tick Karakusa; </li>
        <li>Dash por baixo (de pulo) e Karakusa pelas costas;</li>
        <li>
          <TextDecoration underline blue href="#tsurugi">
            Tsurugi por cima de finta
          </TextDecoration>{" "}
          caindo com Karakusa pelas costas.
        </li>
      </ol>
      <Text>
        Há também formas de criar um{" "}
        <TextDecoration underline>
          mix-up perigoso onde a Makoto pode fazer o Karakusa ou puxar o Super
          direto (versão forte) para pegar um pulo do oponente
        </TextDecoration>
        . Se ela escolher corretamente, tem o potencial de matar o adversário;
        além disso, esse Super não é tão arriscado caso o oponente fique no
        chão, pois a Makoto passará por cima e apenas irá para o outro lado da
        tela em segurança.
      </Text>
      <Text>Este mix-up geralmente começa com:</Text>

      <ol className="list-decimal ml-24">
        <li>Dash throw para trás;</li>
        <li>
          Air reset (st.LP ou j.LK enquanto o oponente está no ar) e dash por
          baixo;
        </li>
        <li>Tick.</li>
      </ol>
      <Text>
        No caso do{" "}
        <TextDecoration bold>
          air reset seguido de dash por baixo
        </TextDecoration>
        , a Makoto pode fazer
        <TextDecoration underline>
          Karakusa ou tentar meaty st.HP cancelado em Super médio/forte
        </TextDecoration>{" "}
        de acordo com a distância (mais arriscado porque pode ser defendido e
        punido).
      </Text>
      <Text>
        No caso do{" "}
        <TextDecoration underline>dash throw para trás</TextDecoration>, ainda
        existe a opção do{" "}
        <TextDecoration underline>
          Karakusa (Kara-Karakusa se houver quick stand
        </TextDecoration>
        ), mas a Makoto{" "}
        <TextDecoration underline>
          dificilmente poderá optar pelo Tosanami sem que ele seja feito puro e
          arrisque ser defendido se o oponente ficar no chão (o st.HP não
          alcançará na maioria dos casos, mesmo com micro walk)
        </TextDecoration>
        , então é mais difícil criar um mix-up forte. Mas o 50/50 existe se não
        for feito quick stand após o throw, e{" "}
        <TextDecoration underline>
          este mix-up ocorre até mesmo quando o knockdown é causado por EX
          Tsurugi sem quick stand, caso em que a Makoto pode só pular para o
          outro lado
        </TextDecoration>
        .
      </Text>
      <Text>
        No caso dos{" "}
        <TextDecoration underline>
          ticks em Tosanami forte direto
        </TextDecoration>
        , os mais comuns são:
      </Text>

      <ol className="list-decimal ml-24">
        <li>cr.LK x Hayate;</li>
        <li>st.MP;</li>
        <li>j.MK vertical ou para trás (no corner).</li>
      </ol>
      <Text>
        Todos esses setups exigem que a Makoto esteja naquele mesmo
        posicionamento de costas para a extremidade da tela e com o oponente
        próximo. São mais comuns no corner, com a Makoto encurralada. É
        importante criar esse mix-up com a{" "}
        <TextDecoration bold>
          SA forte, sem medo, contra oponentes que sempre pulam com medo do
          Karakusa
        </TextDecoration>
        .
      </Text>

      <Text>
        Existem{" "}
        <TextDecoration underline blue href="#combo10">
          vários combos diferentes com a SA2
        </TextDecoration>
        , alguns focados em stun (uns mais difíceis do que outros) e um focado
        em dano e corner carry. Uma série desses combos permite{" "}
        <TextDecoration bold>100% de stun</TextDecoration> em boa parte do
        elenco e é bem infame por isso; esse combo (com variações) é conhecido
        como{" "}
        <TextDecoration underline blue href="#combo13">
          W Fuki
        </TextDecoration>
        (Double Fukiage) no Japão porque envolve uma{" "}
        <TextDecoration underline blue href="#kara-fuki">
          técnica de kara-cancel
        </TextDecoration>
        específica para encaixar o Fukiage duas vezes no mesmo combo, o que
        resulta em muito stun.
      </Text>

      <Text>
        Por fim, vale mencionar que{" "}
        <TextDecoration bold>
          encaixar a SA2 é apenas uma das win conditions da Makoto com este
          Super
        </TextDecoration>
        . Com a barra adicional, ela pode
        <TextDecoration underline>abusar de golpes EX</TextDecoration>. Isso
        permite um jogo de mix-ups muito forte com o oponente encurralado, de
        modo que, se ele não é pego pela Makoto por um Karakusa quando ela está
        mais recuada, então pode valer mais a pena para ela exercer um rushdown
        e matar o oponente encurralado. Este mix-up essencialmente utiliza
        knockdowns para resetar a situação e matar o oponente após várias
        escolhas difíceis de adivinhar, por meio das seguintes opções:
      </Text>
      <ol className="list-decimal ml-24">
        <li>Karakusa (com st.HP x EX Hayate);</li>
        <li>EX Oroshi (com ou sem cr.LK cancelado);</li>
        <li>cr.HP.</li>
      </ol>
      <Text>
        Qualquer uma das opções causa knockdown e força o adversário a adivinhar
        mais uma vez. Trata-se de um jogo de{" "}
        <TextDecoration bold>
          pedra-papel-tesoura com grab/overhead/low
        </TextDecoration>{" "}
        no qual o oponente continua sob pressão se não adivinhar corretamente. O
        Karakusa com EX Hayate causa muito dano e stun, enquanto o EX Oroshi e o
        cr.HP causam dano razoável, punem tentativas de fuga e ainda possuem a
        vantagem de ser safe on block (o cr.HP da Makoto bem posicionado
        praticamente só é punível pelos Supers do Ken e da Chun-Li).{" "}
        <TextDecoration bold>
          Esta é a segunda win condition da Makoto com Tosanami, sem utilizar o
          Super
        </TextDecoration>
        .
      </Text>

      <Header level={2} id="combos">
        Combos, Punições e Confirms
      </Header>

      <Move id="crLkHayateSA1">cr.LK x Hayate fraco (SA1)</Move>
      <Text>
        O combo mais básico da Makoto para{" "}
        <TextDecoration bold>
          punir rapidamente, ou seja, quando não há tempo de fazer algo melhor
          (Karakusa)
        </TextDecoration>
        . Por terminar em Hayate,
        <TextDecoration underline>
          leva a confirms em Seichusen (SA1)
        </TextDecoration>{" "}
        e, exatamente por isso, é usado algumas vezes na pressão da Makoto (fora
        de punição),{" "}
        <TextDecoration underline>
          logo após um dash st.LP ou um pulo vertical com j.HK de finta
        </TextDecoration>
        , por exemplo. Este tipo de jogada é arriscado porque o Hayate defendido
        é punível, como já foi explicado. Porém, com o alto retorno do
        Seichusen,{" "}
        <TextDecoration underline>
          é justificável quando a Makoto precisa muito virar o jogo e vai
          garantir o round com isso, o que cria um mix-up forte com o Karakusa
          (qualquer um dos dois pode deixar o oponente morto ou quase morto)
        </TextDecoration>
        .
      </Text>
      <Text>
        Vale lembrar que o Hayate bem afastado, que encosta bem na ponta, é
        muito mais seguro e difícil de punir. Por esse motivo, é possível fazer
        um tick nessa sequência, da seguinte forma:{" "}
        <TextDecoration underline>cr.LK (tick), cr.LK x Hayate</TextDecoration>.
        Desta forma, o cr.LK x Hayate pressiona sem tanto risco de punição, mas
        só funciona bem em matchups onde o adversário tem certa dificuldade para
        punir o Hayate afastado, como Urien, Dudley e Ibuki. E, se o primeiro
        cr.LK (tick) for utilizado de maneira previsível (meaty), pode levar{" "}
        <TextDecoration bold blue>
          parry
        </TextDecoration>{" "}
        e punish, então recomenda-se cautela.
      </Text>
      <Text>
        Por fim, é interessante reforçar que esse mesmo{" "}
        <TextDecoration underline>
          cr.LK x Hayate on hit é um tick no Tosanami (SA2) forte se a Makoto
          estiver de costas para a extremidade da tela
        </TextDecoration>
        . Com essa SA, existe, portanto, o mix-up nessa situação entre fazer
        Karakusa ou o Tosanami forte, sendo que qualquer uma das duas rotas é
        letal.
      </Text>

      <Move>st.LK x Hayate fraco (SA1)</Move>
      <Text>
        <TextDecoration underline>
          Alternativa quando a Makoto quer punição rápida, mas está um pouco
          afastada demais para punir com o cr.LK x Hayate
        </TextDecoration>
        , ou seja, quando o Hayate não faz combo após o cr.LK porque este acerta
        na ponta.
      </Text>
      <Text>
        Igualmente, pode ser utilizado com base no mesmo fundamento durante a
        pressão da Makoto, logo após acertar um cr.LK x Hayate, quando se quer
        manter a pressão ao cortar algum abare (botão defensivo desrespeitoso),
        embora seja mais comum fazer outro Hayate fraco direto.
      </Text>

      <Move id="crMPHayate">cr.MP x Hayate médio/forte (SA1)</Move>
      <Text>
        <TextDecoration underline>
          A punição de mid-range da Makoto
        </TextDecoration>
        , quando o Karakusa não alcança. Se possível, é melhor utilizar a versão
        média do Hayate para que a Makoto não pare colada no oponente; desta
        forma, ela fica melhor posicionada para pressionar sem tanto risco de
        levar um throw defensivo (sem precisar fazer backstep contra isso). Mas
        nem sempre o Hayate médio alcança, então é necessário fazer o forte
        quando o cr.MP só encosta na ponta.
      </Text>
      <Text>
        Este combo também funciona com{" "}
        <TextDecoration underline blue href="#crMP">
          buffer
        </TextDecoration>{" "}
        na mid-range: a Makoto intencionalmente faz o cr.MP x Hayate de uma
        distância que não alcança, a menos que o oponente ande, faça um dash ou
        um golpe que mova ele para a frente. O Hayate só sai se o oponente
        avançar e levar o cr.MP; do contrário, só sai o cr.MP. Esse buffer,
        combinado com a utilização do
        <TextDecoration bold>backstep (para contornar throws)</TextDecoration>,
        com o retorno que a Makoto tem se acertar e com a dificuldade de fazer
        whiff punish no cr.MP, torna o cr.MP uma arma muito forte no neutro.
      </Text>
      <Text>
        Quanto ao cr.MP direto, embora talvez seja possível até confirmar o
        cr.MP x Hayate que encosta diretamente, o mais comum é não confiar muito
        <TextDecoration underline>
          e só cancelar no Hayate em situação de punição. O cr.MP pode ser
          utilizado puro, apenas como poke
        </TextDecoration>
        . Existem até sequências de golpes normais, como cr.LK cr.MK cr.MP,
        muito utilizadas pelo Tominaga. E o cr.MP, como quase qualquer outro
        golpe rápido da Makoto no chão, pode ser seguido de dash. Mas é preciso
        ter cuidado, pois sequências previsíveis podem levar counter — depois de
        um golpe, outro golpe óbvio pode levar parry, enquanto o dash pode ser
        interrompido. Há também uma alternativa: a{" "}
        <TextDecoration underline blue href="#hayateSegurado">
          finta de Hayate
        </TextDecoration>
        . Sem a garantia de que o cr.MP acertará, a finta pode ajudar a manter a
        pressão.
      </Text>

      <Move>Karakusa, st.HP x Hayate médio (segurado)/forte/EX</Move>
      <Text>
        <TextDecoration underline>O verdadeiro BnB da Makoto</TextDecoration>; a
        punição que se faz sempre que o Karakusa é possível, sem a utilização de
        SA. Entre o Hayate forte e o médio, é melhor fazer o médio levemente
        segurado antes de soltar, na verdade, devido ao posicionamento melhor.
      </Text>
      <Text>
        <TextDecoration bold>
          O EX Hayate causa mais stun, knockdown e corner carry
        </TextDecoration>{" "}
        (joga o oponente bem longe, com o potencial de jogá-lo no corner), logo
        a sua utilização ou não depende do stun e do posicionamento do oponente
        ao momento de levar o Karakusa.
      </Text>
      <Text>
        Em geral, se o oponente ficará stunado ou quase stunado (com o EX, mas
        não com o Hayate normal) e não há a necessidade de SA para garantir o
        round, é melhor usar o EX.Além disso, é quase sempre melhor fazer o EX
        Hayate contra todos os personagens que levam juggle fácil no corner,
        quando eles foram pegos lá. O retorno é simplesmente muito alto.{" "}
        <TextDecoration underline>
          Abaixo, uma breve lista dos principais juggles após EX Hayate
        </TextDecoration>
        :
      </Text>
      <ol className="list-decimal ml-24">
        <li>Hayate fraco (Chun-Li, Makoto, Oro, Elena, Q, Remy, Gouki*);</li>
        <li>Hayate médio (Urien); </li>
        <li>st.HP x Hayate de finta (Hugo e Alex); </li>
        <li>6LK (universal, único juggle contra Yun e Yang);</li>
        <li>st.MK (Ken, Gouki, Ryu, Necro, Twelve, Sean); </li>
        <li>cr.MP (Dudley, Ibuki).</li>
      </ol>
      <Text>
        Em geral, foram listadas as opções recomendadas contra cada personagem.
        Hugo e Alex também levam Hayate, e todos que levam Hayate também levam
        air reset com normal, mas há pouco motivo para se fazer isso quando uma
        opção melhor está quase sempre disponível (embora o Hayate seja melhor
        no Hugo e no Alex quando a Makoto não parar colada neles no corner ao
        momento do EX Hayate, pois o st.HP pode whiffar nesses casos).
      </Text>
      <Text>
        O cr.MP também funciona em quem leva st.MK, mas o st.MK é levemente
        melhor.
      </Text>
      <Text>
        Por fim, os Shotos (Ryu, Ken, Gouki e Sean) levam{" "}
        <TextDecoration blue underline href="#kara-karakusa">
          Kara-Hayate fraco
        </TextDecoration>
        , técnica um pouco difícil.
      </Text>
      <Text>
        *O Gouki pode levar Hayate fraco sem ser kara, mas o timing é estrito.
      </Text>
      <Move>st.MP, st.LK x Hayate fraco (SA1)</Move>

      <Text>
        <TextDecoration underline>
          Um confirm decente da Makoto a partir do st.MP
        </TextDecoration>{" "}
        e o único que ela tem com esse golpe sem a SA1. Utiliza-se o st.MP na
        pressão e depois se segue com link de st.LK x Hayate caso o st.MP
        acerte. Não há problema em fazer o st.LK ainda que o oponente tenha
        defendido o st.MP, mas o Hayate não pode sair na defesa, porque é
        punível.
      </Text>
      <Text>
        A sequência termina em Hayate, então a Makoto ainda pode fazer Seichusen
        depois se quiser, mas isso{" "}
        <TextDecoration underline>
          só é realmente importante para completar o stun ou a barra
        </TextDecoration>
        , porque confirmar diretamente o st.MP em Seichusen fará quase o mesmo
        dano, enquanto cr.MK em Seichusen (em caso de punição) fará exatamente o
        mesmo dano.
      </Text>

      <Move>st.LP, st.LK x Hayate fraco (SA1)</Move>
      <Text>
        Semelhante ao combo acima, porém começa com o st.LP, que leva{" "}
        <TextDecoration blue>parry</TextDecoration> nas duas direções, mas é um
        golpe mais rápido do que o st.MP.{" "}
        <TextDecoration underline>É utilizado após dash</TextDecoration>, porque
        dash st.LP é uma ferramenta muito forte de começar pressão com a Makoto,
        e a utilização do st.LP após dash no neutro também dificulta o{" "}
        <TextDecoration blue>parry</TextDecoration> nesse golpe.{" "}
        <TextDecoration underline>
          O combo em questão serve para aproveitar o dash st.LP que acertou o
          oponente no chão
        </TextDecoration>
        . É possível até linkar dois st.LP antes do st.LK x Hayate, mas isso não
        tem muita utilidade além de dificultar o combo.{" "}
        <TextDecoration underline>
          A maior utilidade desse combo é garantir o confirm (em Seichusen) a
          partir do próprio dash st.LP, sem a necessidade de acertar mais um
          st.MP ou cr.LK x Hayate após o jab
        </TextDecoration>
        . É um confirm difícil e menos utilizado.
      </Text>

      <Move id="combo7">st.HP x Hayate médio/forte segurado (SA1)</Move>
      <Text>
        Basicamente o que já se faz ao acertar um Karakusa e segui-lo com Hayate
        normal, mas sem o Karakusa.{" "}
        <TextDecoration bold>
          Faz muito stun e, com a SA1 no final, pode garantir o round se o
          oponente for stunado
        </TextDecoration>
        .{" "}
        <TextDecoration underline>
          A ideia é{" "}
          <TextDecoration underline blue href="#hayateSegurado">
            segurar levemente o Hayate
          </TextDecoration>{" "}
          antes de soltá-lo
        </TextDecoration>
        , de modo que, com o hitstun imenso do st.HP, seja possível confirmar o
        combo inteiro. Em outras palavras, a Makoto faz o soco forte, cancela em
        Hayate, segura o soco brevemente e, ao ver que o soco acertou,
        simplesmente solta o Hayate; se o st.HP for defendido, basta interromper
        o carregamento ao apertar chute.
      </Text>
      <Text>
        <TextDecoration underline>
          É especialmente útil contra oponentes grandes como Hugo, Urien, Q,
          Dudley e até Gouki (não funciona no Alex)
        </TextDecoration>
        , pois eles são atingidos pelo st.HP{" "}
        <TextDecoration bold>mesmo que abaixados</TextDecoration>. Nesses casos,
        portanto, não há risco de whiff punish no st.HP. Contra eles, a Makoto
        pode chegar perto com{" "}
        <TextDecoration bold>dash st.LP e puxar o st.HP</TextDecoration> para
        esse confirm.{" "}
        <TextDecoration underline>
          É arriscado contra personagens pequenos porque eles podem contornar e
          punir o st.HP se ficarem abaixados
        </TextDecoration>
        . Pode funcionar com moderação para garantir o stun em alguns casos,
        como contra Yun e Yang, pois eles ficam bastante tentados a pular e
        podem ser pegos (ainda no chão) antes que fujam. Na maioria das vezes,
        porém, não vale o risco contra personagens menores.
      </Text>

      <Move>st.MP, SA1</Move>
      <Text>
        O confirm mais comum entre os dois de golpe normal direto em SA1. Útil
        porque o st.MP só leva <TextDecoration blue>parry alto</TextDecoration>,
        fica bastante ativo e permite tempo considerável para o confirm. Além
        disso, confirmar diretamente na SA desta forma diminui o scaling de
        dano, o que significa que o dano total do combo será maior do que a
        maioria dos combos de Hayate em SA1. Por esse motivo, não é incomum
        utilizar esse combo mesmo quando um Karakusa acerta, para diminuir o
        scaling e tentar matar com a SA. Mas o dano é naturalmente maior se
        confirmado sem o Karakusa, pois este adiciona muito scaling ao combo.
      </Text>
      <Text>
        Vale notar que o st.MP é cancelável, mas, para que seja um confirm,{" "}
        <TextDecoration bold>
          é importante que a SA1 seja um link ou late cancel, e nunca um cancel
          imediato
        </TextDecoration>
        . Em outras palavras, a{" "}
        <TextDecoration underline>
          SA deve ser feita ao final do st.MP
        </TextDecoration>
        , com um leve atraso para que se consiga ver se o st.MP acertou ou não
        antes de puxar a SA1.
      </Text>

      <Move>cr.MK, SA1</Move>
      <Text>
        O confirm menos comum entre os dois de golpe normal em SA1.
        Diferentemente do st.MP, leva{" "}
        <TextDecoration blue>parry nas duas direções</TextDecoration> e precisa
        ser um link, pois o cr.MK não é cancelável. Por esse motivo, é mais
        utilizado defensivamente, isto é,{" "}
        <TextDecoration underline>
          o cr.MK é feito para manter o oponente afastado e, caso acerte no
          chão, a Makoto ainda pode seguir o golpe com a SA1
        </TextDecoration>
        .
      </Text>
      <Text>
        Da mesma forma que o confirm acima, ele causa dano considerável
        (aproximadamente metade da vida), devido ao scaling menor (sem Karakusa
        e sem Hayate).
      </Text>

      <Move id="combo10">
        Karakusa, st.HP xx SA2, dash Fukiage forte/médio, hi-jump (cancel)
        vertical j.HP
      </Move>
      <Text>
        <TextDecoration underline>
          O combo de stun mais simples com a SA2
        </TextDecoration>
        . O Fukiage é feito para o outro lado (costas), pois a Makoto inverte o
        lado com o dash. Funciona em praticamente todos os personagens e costuma
        ser o primeiro a se aprender.
      </Text>
      <Text>
        <TextDecoration bold>
          É suficiente para stunar completamente o Gouki e o Remy e, por isso, é
          quase sempre utilizado contra eles
        </TextDecoration>
        . Também deixa outros personagens de barra média de stun muito perto de
        serem stunados se estavam zerados ao tempo do Karakusa; se já haviam
        levado alguns golpes, é bem possível que também sejam stunados.
      </Text>
      <Text>
        Como a maioria dos combos de SA2 para stun da Makoto, ele{" "}
        <TextDecoration underline>
          só pode ser feito no meio da tela
        </TextDecoration>
        ; se o adversário for jogado muito perto do corner com a SA2, é
        necessário utilizar o combo padrão para dano, listado abaixo.
      </Text>

      <Move>
        Karakusa, st.HP xx SA2, hi-jump (cancel) para a frente com Tsurugi
        médio, Hayate médio x2
      </Move>
      <Text>
        <TextDecoration underline>
          O combo padrão de dano com a SA2
        </TextDecoration>
        ; utilizado em dois casos: quando o adversário está muito perto do
        corner para levar um combo de stun ou quando o adversário não levará
        stun de qualquer forma, porque ele{" "}
        <TextDecoration underline>
          já foi stunado ou morrerá sem a necessidade de stun
        </TextDecoration>
        .
      </Text>
      <Text>É um combo extremamente simples, sem grande dificuldades.</Text>
      <Text>
        <TextDecoration underline>
          Se mesmo este combo deixar o oponente próximo de stun, pode ser feito
          um cr.HK no lugar do segundo Hayate para finalizar o stun
        </TextDecoration>
        .
      </Text>
      <Move>
        Karakusa, st.HP xx SA2, hi-jump (cancel) para a frente com Tsurugi
        médio, Fukiage médio/fraco, hi-jump (cancel) para a frente com j.HP
      </Move>
      <Text>
        <TextDecoration underline>
          Este é o combo padrão de stun contra a maioria dos personagens
        </TextDecoration>
        . Conhecido no Japão como “
        <TextDecoration bold>Shiroitachi combo</TextDecoration>” porque
        supostamente foi inventado/descoberto pelo antigo jogador Shiroitachi.
        Causa uns 95% de stun na maioria do cast e stuna qualquer personagem de
        stun médio que já tenha levado algum poke. Se o foco for stun, só não se
        faz este combo quando se arrisca um melhor ainda (100% de stun), listado
        abaixo.
      </Text>
      <Text>
        Observações importantes: o{" "}
        <TextDecoration bold>
          Tsurugi médio precisa ser feito bem cedo
        </TextDecoration>
        ; o Fukiage precisa ser feito para o outro lado (costas) e{" "}
        <TextDecoration underline>
          levemente atrasado (com o oponente perto do chão)
        </TextDecoration>{" "}
        e o j.HP precisa ser feito imediatamente após sair do chão com hi-jump.
      </Text>
      <Text>
        Se o Tsurugi não for feito cedo o bastante, o Fukiage não sai porque a
        Makoto aterrissa incorretamente (provavelmente sairá Oroshi); se o
        Fukiage não for feito com atraso suficiente, o j.HP não acerta, ainda
        que executado corretamente.
      </Text>

      <Move id="combo13">
        Karakusa, st.HP xx SA2, dash Kara-Fukiage* médio/fraco, dash Fukiage
        fraco
      </Move>
      <Text>
        O “<TextDecoration bold>W Fuki</TextDecoration>” (double Fukiage),{" "}
        <TextDecoration underline>
          infame combo de 100% de stun da Makoto na maioria do cast
        </TextDecoration>
        ; só não stuna imediatamente os personagens de barra longa se estiverem
        zerados de stun quando levam Karakusa.{" "}
        <TextDecoration underline>
          É, portanto, o melhor combo de stun da Makoto sempre que possível, mas
          exige execução precisa
        </TextDecoration>
        .
      </Text>
      <Text>
        *Este primeiro{" "}
        <TextDecoration blue underline href="#kara-fuki">
          Kara-Fukiage
        </TextDecoration>{" "}
        no combo é feito com o st.HK e move a Makoto para trás.
      </Text>
      <Text>
        O combo <TextDecoration underline>funciona</TextDecoration> em: Shotos
        (Ryu, Ken, Gouki, Sean), Makoto, Dudley, Urien, Necro, Twelve, Yun,
        Yang, Elena, Remy, Alex* e Hugo*.
      </Text>
      <Text>
        <TextDecoration bold>NÃO funciona</TextDecoration> em: Chun-Li, Q**,
        Ibuki***, Oro***.
      </Text>
      <Text>Algumas observações:</Text>
      <Text>
        É levemente mais difícil no <TextDecoration bold>Yun</TextDecoration> e
        no <TextDecoration bold>Yang</TextDecoration> (precisa ser feito mais
        rápido).
      </Text>
      <Text>
        Na <TextDecoration underline>Elena</TextDecoration>, recomenda-se a{" "}
        <TextDecoration underline>
          versão fraca para o primeiro Fukiage
        </TextDecoration>{" "}
        também, porque ela cai mais rápido. É possível que o médio não acerte a
        tempo, ou seja muito mais difícil.
      </Text>
      <Text>
        Não há motivo para fazer no{" "}
        <TextDecoration underline>Gouki</TextDecoration> e no{" "}
        <TextDecoration underline>Remy</TextDecoration>, pois eles têm barra
        menor de stun e são facilmente stunados pelos combos mais simples.
        Exceção é para completar o stun quando a SA2 acertar diretamente (sem
        Karakusa ou st.HP).
      </Text>
      <Text>
        *No Alex e no Hugo, o combo é possível{" "}
        <TextDecoration underline>
          sem a necessidade de qualquer kara-cancel
        </TextDecoration>
        ; basta fazer dash Fukiage x2. Recomenda-se a versão fraca do primeiro
        Fukiage no Alex para facilitar o combo, porque o timing é estrito se o
        médio for utilizado.
      </Text>
      <Text>
        **No <TextDecoration bold>Q</TextDecoration>, existe um combo mais fácil
        que permite dois Fukiage e será explicado adiante; essa versão do Q{" "}
        <TextDecoration underline>também funciona na Elena</TextDecoration>.
      </Text>
      <Text>
        ***Na <TextDecoration bold>Ibuki</TextDecoration> e no{" "}
        <TextDecoration bold>Oro</TextDecoration>, funciona um combo quase
        idêntico, mais difícil porque exige dois kara-cancels, explicado abaixo.
      </Text>
      <Text>
        No <TextDecoration bold>Dudley</TextDecoration>, embora o combo
        normalmente não complete o stun, a Makoto tem um{" "}
        <TextDecoration underline>
          mix-up extremamente ambíguo após o combo
        </TextDecoration>
        : ela pode fazer Hayate forte imediatamente após o segundo Fuki, para
        inverter o lado, e escolher se faz dash ou não.{" "}
        <TextDecoration underline>
          Se o Dudley fizer quick stand, o dash atravessa ele e permite à Makoto
          escolher entre Karakusa, st.MP/st.HP (x Hayate segurado) e (tick)
          cr.LK x Hayate fraco
        </TextDecoration>
        . Em outras palavras, ela escolhe entre grab, high (confirmável) e low.
      </Text>
      <Text>
        <TextDecoration bold>
          Qualquer uma dessas opções completa o stun se acertar
        </TextDecoration>
        .
      </Text>
      <Text>
        <TextDecoration underline>
          E o cr.LK x Hayate fraco fica mais seguro contra o Dudley após tick
          (cr.LK)
        </TextDecoration>
        , porque a Makoto fica mais afastada e não pode ser punida pelo st.HK
        dele, só pelo st.HP.
      </Text>
      <Text>
        Este mix-up com o dash no quick stand provavelmente funciona na Ibuki
        após o combo abaixo.
      </Text>

      <Move id="combo14">
        Karakusa, st.HP xx SA2, dash Kara-Fukiage* médio/fraco, dash
        Kara-Fukiage* fraco
      </Move>
      <Text>
        <TextDecoration underline>
          A versão do combo anterior para a Ibuki e o Oro
        </TextDecoration>
        . É quase idêntico, mas exige{" "}
        <TextDecoration bold>
          um segundo Kara-Fukiage, feito com o cr.HK
        </TextDecoration>
        , que move a Makoto levemente para a frente. Em outras palavras, a
        Makoto{" "}
        <TextDecoration underline>
          precisa acertar dois Kara-Fukiage diferentes
        </TextDecoration>
        : um médio/fraco com o st.HK (voltando para o neutro antes de apertar o
        botão) e outro fraco com o cr.HK (segurando para a diagonal). Se errar
        um dos dois, o combo não funcionará.
      </Text>
      <Text>
        <TextDecoration underline>
          Os inputs desse segundo Kara-Fukiage são muito semelhantes ao
          <TextDecoration underline blue href="/ken">
            Kara-Shoryu do Ken
          </TextDecoration>
        </TextDecoration>
        .
      </Text>
      <Text>
        Em notação numérica (do lado esquerdo):{" "}
        <TextDecoration bold>623 (segura diagonal) + HK ~ LP</TextDecoration>
      </Text>
      <Text>
        Se os dois Fukiage acertarem, os kara-cancels foram executados
        corretamente.
      </Text>
      <Text>
        Um ponto interessante é que esse segundo Kara-Fukiage no combo também
        serve de <TextDecoration bold>backup</TextDecoration> em quase todos os
        personagens que levam o W Fuki convencional. Significa dizer que, ainda
        que não seja necessário neles,
        <TextDecoration underline>
          se a Makoto errar o primeiro Kara-Fukiage e soltar um Fukiage normal,
          ela ainda pode puxar esse segundo kara-cancel para salvar o W Fuki
        </TextDecoration>
        .
        <TextDecoration bold>
          Funciona na lista do combo anterior (Dudley, Necro, Urien, Makoto
          etc.), menos nos Shotos
        </TextDecoration>
        .
      </Text>
      <Text>
        Para saber se é questão de fazer o backup (kara) no segundo ou Fukiage
        normal, deve-se atentar para o posicionamento do soco da Makoto durante
        o primeiro Fukiage em relação ao oponente:{" "}
        <TextDecoration underline>
          se o soco acertou exatamente na cabeça do personagem, foi Fukiage
          normal e precisa de backup
        </TextDecoration>
        ; se ele acertou um pouco mais para o lado da cabeça, o kara-cancel foi
        executado com sucesso e o segundo não será necessário.
      </Text>

      <Move>
        Karakusa, st.HP xx SA2, dash Fukiage forte/médio, Kara-Fukiage fraco
      </Move>
      <Text>
        <TextDecoration underline>A versão do W Fuki no Q</TextDecoration>. Vale
        notar que este segundo Kara-Fukiage é feito com o{" "}
        <TextDecoration bold>st.LK,</TextDecoration> da mesma forma que o
        Kara-Karakusa, que será explicado mais tarde. Trata-se, portanto, de um
        kara-cancel convencional da Makoto, diferentemente dos Kara-Fukiage
        listados até agora nos combos de SA2.
      </Text>
      <Text>
        Os inputs em notação numérica (do lado esquerdo) desse Kara-Fukiage são:
      </Text>
      <Text>
        <TextDecoration bold>st.LK, 623 (rapidamente) + LP</TextDecoration>
      </Text>
      <Text>
        O combo é bastante simples comparado aos anteriores. Desde que a Makoto
        execute rapidamente o Kara-Fukiage sem soltar acidentalmente um 6LK (no
        lugar do st.LK), deve acertar o combo sem maiores dificuldades.
      </Text>
      <Text>
        Como mencionado nas observações do W Fuki convencional,{" "}
        <TextDecoration underline>
          esta versão do combo no Q também deve funcionar na Elena
        </TextDecoration>
        , então qual versão utilizar contra ela{" "}
        <TextDecoration underline>fica a critério do jogador</TextDecoration> de
        Makoto. Talvez seja possível utilizar esta versão como backup se, por
        erro de execução, a Makoto soltar o primeiro Fukiage fraco normal (sem
        ser kara).
      </Text>

      <Move>
        Karakusa, st.HP xx SA2, dash Fukiage fraco, Kara-Fukiage fraco
      </Move>
      <Text>
        <TextDecoration underline>Versão do W Fuki na Chun-Li</TextDecoration>,
        aparentemente idêntica ao combo listado acima para o Q, com o mesmo
        Kara-Hayate (feito com st.LK) e a suposta única diferença do Fuki fraco
        no lugar do forte/médio. Mas é só aparência: enquanto a versão no Q é a
        mais fácil,{" "}
        <TextDecoration bold>
          esta na Chun-Li é considerada a versão mais difícil de todos os W Fuki
        </TextDecoration>
        .
      </Text>
      <Text>
        O motivo da dificuldade não está na execução dos Fuki em si, mas no
        posicionamento específico para acertá-los; até o movimento da tela é um
        fator. A Makoto precisa atrasar o dash (antes do primeiro Fuki) por um
        tempo específico e/ou andar para trás antes do Fukiage, por meio dos
        seguintes inputs (do lado esquerdo):
      </Text>
      <Text>
        <TextDecoration bold>6234 + LP</TextDecoration>
      </Text>
      <Text>
        O combo foi aparentemente descoberto/inventado pelo jogador americano
        <TextDecoration bold>telesniperXBL</TextDecoration>, que o demonstra{" "}
        <TextDecoration
          blue
          underline
          href="https://www.youtube.com/watch?v=10afDcJ5VXA&ab_channel=telesniperXBL"
        >
          aqui
        </TextDecoration>{" "}
        (existem outros vídeos relacionados ao combo no canal). Ele teria
        entrado em contato anos atrás com o famoso jogador japonês{" "}
        <TextDecoration bold>Tominaga</TextDecoration>, que, com a ajuda da
        tradução de outro jogador chamado Julian, passou a executar o W Fuki na
        Chun-Li com relativa consistência desde então.
      </Text>
      <Text>
        Por fim, vale ressaltar que, devido à sua peculiar dificuldade e aos
        problemas que a Makoto já sofre para acertar uma boa SA2 na Chun-Li (em
        um ponto da tela, nem a versão média do Super nem a forte acertam a
        Chun),{" "}
        <TextDecoration underline>
          este combo só serve para aqueles jogadores muito esforçados que o
          praticaram bastante e insistem em utilizar a SA2 contra a Chun
        </TextDecoration>
        . Em geral, é muito mais fácil simplesmente trocar para a SA1 nesta
        matchup.
      </Text>

      <Move> Air-to-air Tsurugi médio/EX (1 hit), Hayate, Hayate</Move>
      <Text>
        Conversão que a Makoto tem quando acerta Tsurugi de air-to-air. Funciona
        com todas as versões do Tsurugi exceto a forte. No caso do EX, só
        funciona quando acertar um único hit. Hayate forte para alcançar de
        longe, Hayate médio se já estiver perto o bastante do corner.
      </Text>
      <Text>
        No caso do EX Tsurugi no meio da tela, é necessário fazer um dash logo
        após o Tsurugi e antes do primeiro Hayate (forte) para alcançar. Também
        é possível optar pelo EX Hayate, mas o gasto de barra não é recomendado.
      </Text>

      <Move>Air-to-air Tsurugi médio/EX (1 hit), Hayate, cr.HK</Move>
      <Text>
        Versão do combo anterior que termina com cr.HK para mais stun e reset
        (se o oponente já não ficar stunado). Só funciona no corner.
      </Text>

      <Header level={2} id="tecnicas">
        Técnicas Avançadas
      </Header>

      <Move id="kara-karakusa"> Kara-Karakusa e outros kara-cancels </Move>
      <Text>
        A Makoto não tem um kara-throw útil porque nenhum golpe dela a move para
        a frente no primeiro frame, mas o st.LK dela é peculiar: além de avançar
        consideravelmente no start-up,{" "}
        <TextDecoration underline>
          ele pode ser kara-cancelado durante os frames ativos
        </TextDecoration>
        . Isto significa que ela tem kara-cancels com o st.LK (on whiff) da
        mesma forma que cancelaria para combo no oponente;{" "}
        <TextDecoration underline>
          ela pode fazer o st.LK sem encostar e rapidamente cancelar em qualquer
          special do chão
        </TextDecoration>
        .
      </Text>
      <Text>
        O{" "}
        <TextDecoration bold>
          kara-cancel mais importante de st.LK
        </TextDecoration>{" "}
        da Makoto é o <TextDecoration bold>Kara-Karakusa</TextDecoration>, no
        qual{" "}
        <TextDecoration underline>
          ela faz um st.LK (que não encoste) e rapidamente executa um Karakusa
          antes que a perna volte
        </TextDecoration>
        . Quando feito corretamente e na distância certa, a Makoto avançará com
        o st.LK e já seguirá com um Karakusa que alcança de muito mais longe.{" "}
        <TextDecoration bold>
          É fundamental que o st.LK não encoste, senão o Karakusa não acertará
        </TextDecoration>
        . Ela precisa encontrar a distância máxima do st.LK e executar o
        kara-cancel um pouquinho mais longe do que isso, ligeiramente fora do
        alcance do st.LK.
      </Text>
      <Text>
        Existe uma série de <TextDecoration bold>setups</TextDecoration> que
        facilitam o Kara-Karakusa. Alguns exemplos:
      </Text>

      <ol className="list-decimal ml-24">
        <li>
          Throw para a frente ou para trás, Kara-Karakusa (se fizerem quick
          stand).
        </li>
        <li>cr.HP de perto, Kara-Karakusa (se fizerem quick stand).</li>
        <li>st.MP (colado), st.MP, Kara-Karakusa.</li>
        <li>6MP (colado), Kara-Karakusa.</li>
        <li>st.LP com o oponente no ar (air reset), Kara-Karakusa.</li>
      </ol>

      <Text>
        Em geral, recomenda-se o{" "}
        <TextDecoration underline>Karakusa forte</TextDecoration> pelo alcance
        maior (pode pegar o oponente andando para trás no meio da tela), mas a
        Makoto pode optar por uma versão mais rápida (Karakusa médio) se não
        precisar de tanto alcance, como no exemplo do air reset ou quando
        estiver com o oponente no corner.
      </Text>
      <Text>
        Além do Kara-Karakusa, a Makoto pode utilizar o st.LK da mesma forma
        para fazer{" "}
        <TextDecoration underline>
          kara-cancels com os outros specials
        </TextDecoration>
        . Segue uma explicação breve sobre cada um deles.
      </Text>
      <Text>
        O <TextDecoration underline>Kara-EX Oroshi</TextDecoration> pode ser
        útil ocasionalmente para pressionar com o referido overhead de uma
        distância um pouco maior.{" "}
        <TextDecoration underline>
          E, neste caso, não há problema se a Makoto encostar com o st.LK
        </TextDecoration>
        , diferentemente do que acontece com o Karakusa.
      </Text>
      <Text>
        O <TextDecoration underline>Kara-Fukiage (com st.LK)</TextDecoration>{" "}
        pode servir como um{" "}
        <TextDecoration underline>
          anti-air semelhante ao EX Fukiage
        </TextDecoration>
        , porém mais lento e sem gastar barra. Seria, portanto,{" "}
        <TextDecoration underline>
          uma alternativa de recompensa igual e sem custo, mas risco maior de
          erro
        </TextDecoration>
        .
      </Text>
      <Text>
        O <TextDecoration underline>Kara-Hayate (com st.LK)</TextDecoration> só
        serve de muito longe e geralmente{" "}
        <TextDecoration underline>
          é usado com as fintas de Hayate carregado
        </TextDecoration>{" "}
        (explicado abaixo).{" "}
        <TextDecoration underline>
          Enquanto os backsteps movem a Makoto para trás, o Kara-Hayate
          carregado move ela para a frente
        </TextDecoration>
        . Em conjunto, eles reposicionam a Makoto a qualquer tempo no neutro
        antes de um possível Hayate de whiff punish em golpes mais lentos. Desta
        forma, se a Makoto está longe demais para um Hayate forte, ela pode
        fazer um Kara-Hayate com st.LK (para entrar em range) e carregá-lo
        brevemente para observar se o oponente fará um whiff punível, caso em
        que basta soltar o Hayate. Se o whiff não vier, ela pode tranquilamente
        interromper o carregamento ao apertar um chute e seguir o jogo.
      </Text>
      <Text>
        Por fim, ela pode fazer até um{" "}
        <TextDecoration underline>Kara-Seichusen (SA1)</TextDecoration> com o
        st.LK, que já foi visto em partidas reais para punir whiffs, mas{" "}
        <TextDecoration underline>
          é muito extravagante e não é muito útil
        </TextDecoration>
        ; requer um buffer de SA durante o st.LK (um buffer de Hadou antes do
        st.LK e outro depois) seguido de soco. Essa necessidade de buffer{" "}
        <TextDecoration underline>
          atrapalha a flexibilidade para lidar com outras opções
        </TextDecoration>{" "}
        caso o oponente não faça exatamente o que a Makoto queria. Em vez disso,{" "}
        <TextDecoration bold>
          vale muito mais a pena simplesmente buscar whiff punishes
          convencionais com Hayate
        </TextDecoration>{" "}
        e, se for o caso, seguir com a SA1.
      </Text>

      <Move id="hayateSegurado"> Hayate segurado/carregado</Move>
      <Text>
        Como mencionado, o Hayate também pode ser “
        <TextDecoration bold>segurado</TextDecoration>” ou “
        <TextDecoration bold>carregado</TextDecoration>”;
        <TextDecoration underline>
          basta segurar o soco em vez de só apertá-lo
        </TextDecoration>
        . Este carregamento pode inclusive ser “cancelado”{" "}
        <TextDecoration underline>
          se um chute for pressionado enquanto ele carrega
        </TextDecoration>
        , de modo que a Makoto não faz o soco do Hayate e simplesmente volta
        para o neutro.
      </Text>
      <Text>
        O Hayate carregado para realmente acertar só tem uma pequena utilização
        prática no combo de{" "}
        <TextDecoration underline blue href="#combo7">
          st.HP x Hayate
        </TextDecoration>
        . Já o carregamento interrompido do Hayate (por meio do chute) serve de{" "}
        <TextDecoration bold>finta</TextDecoration> e pode ser utilizado para
        ameaçar um <TextDecoration bold>Hayate de longe</TextDecoration> (logo
        antes de fazer um dash ou alguma outra opção) e também durante{" "}
        <TextDecoration underline>
          cancels de LK ou cr.MP x Hayate
        </TextDecoration>{" "}
        para pressionar de maneira inesperada com outros golpes, dashes, parries
        etc.
      </Text>
      <Text>
        Importante:{" "}
        <TextDecoration underline>
          NÃO se deve substituir um combo garantido (punição ou após Karakusa)
          por uma finta de Hayate a fim de encaixar outro Karakusa ou algo
          parecido
        </TextDecoration>
        . Isso é trocar o certo pelo incerto. Não vale a pena.
      </Text>

      <Move id="kara-fuki">Kara-Fukiage do W Fuki</Move>
      <Text>
        No combo de “W Fuki” ou “100% da Makoto”, é preciso executar um
        Kara-Fukiage diferenciado para reposicionar a Makoto e permitir um
        segundo Fukiage.
      </Text>
      <Text>
        O Kara-Fukiage utilizado nesse combo NÃO é como os kara-cancels
        convencionais da Makoto (com st.LK) que já foram explicados; em vez
        disso, ele é{" "}
        <TextDecoration bold>
          feito com st.HK e serve para mover a Makoto para trás
        </TextDecoration>
        , o que a reposiciona no momento do combo e permite que o segundo dash
        Fukiage também acerte. É importante que a Makoto{" "}
        <TextDecoration bold>
          retorne para o neutro antes de fazer o HK
        </TextDecoration>
        , senão pode sair cr.HK por acidente. Para voltar ao neutro, basta não
        estar mais segurando a direção no momento de apertar o botão.
      </Text>
      <Text>
        Os inputs seriam (do lado esquerdo):{" "}
        <TextDecoration bold>
          6235 (volta pro neutro) + HK ~ LP/MP
        </TextDecoration>
      </Text>
      <Text>
        Vale lembrar que esse Kara-Fukiage com st.HK{" "}
        <TextDecoration underline>
          é sempre o primeiro Fukiage do combo
        </TextDecoration>
        . Em alguns casos,{" "}
        <TextDecoration underline>
          também é exigido um segundo Kara-Fukiage
        </TextDecoration>{" "}
        para completar o combo. Este é feito com cr.HK e serve principalmente
        para um
        <TextDecoration underline blue href="#combo14">
          combo específico contra a Ibuki e o Oro
        </TextDecoration>
        ; vale repetir, os inputs deste segundo Kara-Fukiage são muito
        semelhantes ao{" "}
        <TextDecoration underline blue href="/ken#karaDP">
          Kara-Shoryu do Ken
        </TextDecoration>
        :
      </Text>
      <Text>
        Em notação numérica (do lado esquerdo):{" "}
        <TextDecoration bold>623 (segura diagonal) + HK ~ LP</TextDecoration>
      </Text>
      <Text>
        São, portanto, dois Kara-Fukiage diferentes específicos para os combos
        de SA2, sem utilidade fora desses combos.{" "}
        <TextDecoration bold>
          O primeiro Kara-Fukiage é muito mais importante porque garante o W
          Fuki na maior parte do elenco do jogo
        </TextDecoration>
        ; o segundo é extremamente específico para Ibuki, Oro e como backup
        contra os outros caso o primeiro erre (não funciona nos Shotos).
      </Text>

      <Header level={2} id="topPLayers">
        Top Players
      </Header>

      <Move src={mimora} width="238px">
        Mimora (ミモラ)
      </Move>
      <Text>
        Um dos melhores jogadores de Makoto da história, se não o melhor.{" "}
        <TextDecoration underline>
          Mimora é provavelmente o melhor usuário de Seichusen (SA1)
        </TextDecoration>{" "}
        — o jogador que mais poderia contestar esse título é o Haitani, que se
        encontra inativo.{" "}
        <TextDecoration bold>
          Com um estilo rápido, agressivo e elegante
        </TextDecoration>
        , Mimora costuma finalizar seus oponentes em instantes com uma rápida
        sequência de counters e mix-ups que eventualmente culminam em SA. Gosta
        bastante de utilizar os “Hayate segurados” para ameaçar algo e continuar
        a pressão.
      </Text>
      <Text>
        Mimora possui alguns dos melhores resultados em FT10:{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=xqbT5yzmh3o&ab_channel=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%B3GAME-NEWTON"
        >
          deu algum trabalho para o Deshiken
        </TextDecoration>{" "}
        (melhor Ken e candidato a melhor do mundo),{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=hVOoNONwP18&ab_channel=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%B3GAME-NEWTON"
        >
          perdeu um set equilibrado para o SHO (YU)
        </TextDecoration>
        ,{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=3CIaAHCQuqU&ab_channel=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%B3GAME-NEWTON"
        >
          venceu o RX (UR)
        </TextDecoration>{" "}
        e o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=1KoLMKAiigI&ab_channel=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%B3GAME-NEWTON"
        >
          Yomoda (DU)
        </TextDecoration>{" "}
        e venceu convincentemente o Tominaga (MA) em dois sets diferentes:{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=ZJ3KORAGS_Y&ab_channel=hismit"
        >
          uma FT10 extremamente unilateral
        </TextDecoration>{" "}
        e{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=bAmjpyWgDcg&ab_channel=3rdSTRIKEeeee"
        >
          outro set longo, porém mais casual
        </TextDecoration>{" "}
        (não foi FT10) em que trocaram de SA em determinado momento (o Mimora
        venceu mesmo com SA2). Por fim, vale mencionar que{" "}
        <TextDecoration
          underline
          blue
          href="http://www.game-versus.net/danisen/grade_old.html"
        >
          o Mimora se encontra entre os nomes mais avançados na primeira lista
          de Danisen
        </TextDecoration>
        , acima de vários outros jogadores renomados.
      </Text>

      <Move src={tominaga} width="238px">
        Tominaga (トミナガ)
      </Move>
      <Text>
        <TextDecoration underline>
          Indubitavelmente o melhor usuário de Tosanami (SA2) do jogo
        </TextDecoration>
        . Tominaga é o motivo pelo qual essa SA é tão infame e temida: ele{" "}
        <TextDecoration bold>
          dominou e aperfeiçoou um estilo de jogo voltado para o 100% de stun
        </TextDecoration>
        , com mix-ups que levam à morte em um único guess errado.
      </Text>
      <Text>
        Utiliza os botões da Makoto de maneira irritante,{" "}
        <TextDecoration underline>
          contorna bem com backstep e volta com dash throw
        </TextDecoration>{" "}
        e, quando o oponente comete um deslize, garante o Karakusa (tanto
        ofensiva quanto defensivamente) para matar de uma vez só. Quando isso
        não funciona,{" "}
        <TextDecoration underline>gasta a barra acumulada em EX</TextDecoration>
        opressores da Makoto para finalizar o oponente no corner em alguns
        mix-ups.
      </Text>
      <Text>
        O canal <TextDecoration bold>Feetwork 101</TextDecoration> fez uma série
        de vídeos, chamados de “Film Rooms”, para explicar melhor a mentalidade
        de alguns top players;{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=sfXWKB84TVE&ab_channel=Feetwork101"
        >
          neste aqui
        </TextDecoration>
        , analisa as jogadas do Tominaga.
      </Text>
      <Text>
        Tominaga possui uma série de resultados impressionantes: anos atrás, em
        FT10,{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=gC-fO0XQKQs&ab_channel=hismit"
        >
          venceu o Yakkun (YU)
        </TextDecoration>
        , o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=01ySdYijh8s&ab_channel=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%B3GAME-NEWTON"
        >
          Hirai (KE)
        </TextDecoration>{" "}
        e o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=MU7tiZtp_qE&ab_channel=hismit"
        >
          YSB (HU)
        </TextDecoration>
        ; mais recentemente, venceu o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=TP56bJp3yR0&ab_channel=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%B3GAME-NEWTON"
        >
          Kuni (RY)
        </TextDecoration>{" "}
        em um set extremamente disputado e também{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=u_N8RATK7qA&ab_channel=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%B3GAME-NEWTON"
        >
          venceu convincentemente o RB (UR)
        </TextDecoration>
        . Ainda,{" "}
        <TextDecoration underline>
          Tominaga é um dos jogadores de maior sucesso nos Danisen e torneios de
          3rd MANIAX
        </TextDecoration>
        ; não apenas teve seu nome entre os mais altos da
        <TextDecoration
          underline
          blue
          href="http://www.game-versus.net/danisen/grade_old.html"
        >
          antiga lista do Danisen
        </TextDecoration>{" "}
        (juntamente com Mimora), como também{" "}
        <TextDecoration
          underline
          blue
          href="http://www.game-versus.net/danisen/grade.html"
        >
          foi o primeiro colocado da segunda lista
        </TextDecoration>{" "}
        (em meados de 2015 e 2016) e, nas edições do MANIAX de 2022,{" "}
        <TextDecoration
          underline
          blue
          href="https://docs.google.com/document/d/e/2PACX-1vQosl-SqmH-i5FSDlnOpmK3r-YXRu16UAuJnWVoYX_6waEqa4xsdcCSrvwmr8PrISIsXDu3vBX2TjCI/pub"
        >
          foi um dos jogadores de maior pontuação
        </TextDecoration>{" "}
        em um sistema feito pelo jogador brasileiro{" "}
        <TextDecoration bold>Kuroneko</TextDecoration> baseado em vitórias,
        derrotas e classificações nas finais.
      </Text>

      <Move src={haitani} width="238px">
        Haitani (ハイタニ)
      </Move>
      <Text>
        <TextDecoration underline>
          Outro candidato a melhor Makoto da história
        </TextDecoration>
        , Haitani também utilizava Seichusen (SA1), mas, diferentemente do
        Mimora, tinha um{" "}
        <TextDecoration bold>
          estilo mais equilibrado entre uma ofensa rápida e uma defesa paciente
        </TextDecoration>
        . Às vezes, aproveita para fazer um jogo de alta mobilidade e pegar o
        oponente desprevenido com counters precisos, mas também gosta de jogar
        em torno de opções mais simples, com abuso de golpes de alta prioridade
        (j.MK e cr.MK) e uso de EX Oroshi na pressão. Por isso, pode ser visto
        como um meio-termo entre os outros dois.
      </Text>
      <Text>
        Haitani conquistou diversas vitórias em grandes eventos. Venceu
        unilateralmente o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=8-FoRkcEes4&ab_channel=PALBARABARA"
        >
          Yuki Otoko (GO)
        </TextDecoration>{" "}
        em uma FT10 em 2010. Seu time foi
        <TextDecoration underline>vice-campeão da SBO 2010</TextDecoration>,
        onde Haitani venceu o{" "}
        <TextDecoration
          underline
          blue
          href="https://youtu.be/xQk_-vseL0M?t=582"
        >
          Nitto (YU)
        </TextDecoration>{" "}
        mas perdeu para o MOV (CH) nas grand finals. Fez uma OCV lendária ao{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=gWl0kIAQ2tA&ab_channel=karozzo"
        >
          vencer SHO (YU), Kuni (RY) e Tokura (YA)
        </TextDecoration>{" "}
        durante um 3rd MANIAX de 2016, contribuindo para que seu time fosse
        campeão. Venceu um time praticamente sozinho durante a{" "}
        <TextDecoration
          underline
          href="https://www.youtube.com/watch?v=ZKBRkm1WC6w&ab_channel=3rdSTRIKE"
        >
          16ª Coop Cup
        </TextDecoration>{" "}
        e ajudou seu time a{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=sEuxit7s9ZI&t=3459s&ab_channel=ANIMEILLUMINATI"
        >
          vencer a 17ª edição
        </TextDecoration>
        , com vitórias notáveis sobre o K (CH), o Tokura (YA), o Furo (YA) e uma
        partida acirrada contra o Kuni (RY) durante o Top 8.
      </Text>
      <Text>
        Haitani também venceu o lendário{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=gUMdTH1isqM&ab_channel=TheShend"
        >
          Kuroda (DU)
        </TextDecoration>{" "}
        em FT10 (de 3 rounds cada partida) e teve alguns outros desempenhos
        impressionantes, como esta streak de{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=pBNbyPVIYi0&ab_channel=3rdSTRIKE"
        >
          6 vitórias seguidas em Danisen contra jogadores de elite
        </TextDecoration>
        .
      </Text>

      <Move src={haitani} width="238px">
        Chance (チャンス)
      </Move>

      <Text>
        Um dos mais fortes ainda ativos, Chance tem um{" "}
        <TextDecoration bold>
          jogo mais fundamentado e bem completo
        </TextDecoration>
        . Parece incorporar elementos dos jogadores acima, alternando entre um
        rushdown rápido, fintas ocasionais e counters poderosos. Quase sempre
        utiliza SA1, mas{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=JXkUP8zSCcg&ab_channel=3rdSTRIKE"
        >
          já jogou com a SA2 e demonstrou execução impecável
        </TextDecoration>
        .
      </Text>

      <Text>
        Chance joga há muito tempo e já tinha um desempenho impressionante desde
        o começo; nos sets antigos de melhor de 10 (não FT10), venceu o renomado
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=EuM7Lvp8yHg&ab_channel=TheShend"
        >
          Aiku (DU)
        </TextDecoration>{" "}
        de 6 x 4 (enquanto o Mimora perdeu de 6 x 4), já foi vencedor de Coop
        Cup (12ª edição) e venceu uma FT10 contra o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=f0MfCoFmwSU&ab_channel=hismit"
        >
          Wantaren (YA)
        </TextDecoration>{" "}
        anos atrás. Na 16ª Coop Cup, teve uma FT1 memorável contra o lendário{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=Ptsu0EwRLP4&ab_channel=3rdSTRIKE"
        >
          MOV (CH)
        </TextDecoration>
        . Além disso, seus resultados são alguns dos melhores dentre os
        jogadores de Makoto em atividade: durante streams da Inoculture, venceu
        unilateralmente o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=eqAyMZbbKHI&t=3075s&ab_channel=%E3%82%A4%E3%83%8E%E3%82%AB%E3%83%AB%E3%83%81%E3%83%A5%E3%82%A22nd"
        >
          Inoue (OR)
        </TextDecoration>{" "}
        e o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=LDs7ibGXGME&t=4790s&ab_channel=%E3%82%A4%E3%83%8E%E3%82%AB%E3%83%AB%E3%83%81%E3%83%A5%E3%82%A2inocultureStreetFighterIII3rdSTRIKE"
        >
          RB (UR)
        </TextDecoration>{" "}
        (resultado ligeiramente melhor do que o do Tominaga) e teve sets
        relativamente disputados contra o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=LDs7ibGXGME&t=29010s&ab_channel=%E3%82%A4%E3%83%8E%E3%82%AB%E3%83%AB%E3%83%81%E3%83%A5%E3%82%A2inocultureStreetFighterIII3rdSTRIKE"
        >
          Yuri (YA)
        </TextDecoration>
        , o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=LDs7ibGXGME&t=33670s&ab_channel=%E3%82%A4%E3%83%8E%E3%82%AB%E3%83%AB%E3%83%81%E3%83%A5%E3%82%A2inocultureStreetFighterIII3rdSTRIKE"
        >
          Ushi!? (YU)
        </TextDecoration>{" "}
        e o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=PqfiQXEaA_E&t=39740s&ab_channel=%E3%82%A4%E3%83%8E%E3%82%AB%E3%83%AB%E3%83%81%E3%83%A5%E3%82%A22nd"
        >
          Deshiken (KE)
        </TextDecoration>{" "}
        (placar semelhante ao do Mimora contra ele).
      </Text>

      <Move>Outros</Move>
      <Text>
        <TextDecoration bold>J</TextDecoration> provavelmente foi o jogador que
        popularizou a Makoto, um competidor forte nos torneios durante a era do
        Daigo que ficou{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=6ORCql6G66M&ab_channel=arindam43"
        >
          famoso por vencer alguns dos melhores da época
        </TextDecoration>
        , mas infelizmente ele parou de jogar não muito tempo depois.
      </Text>
      <Text>
        <TextDecoration bold>Boss (ボス)</TextDecoration> começou com o Yang e
        utiliza mais o Yun e o Ken hoje em dia, mas ele ficou mais conhecido
        pela Makoto, que{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=xMAZqDw55vM&t=131s&ab_channel=cccloner999"
        >
          tinha nível para vencer o famoso K.O (YA)
        </TextDecoration>{" "}
        e, mais recentemente, venceu o Mester (YU) em FT10 com algum esforço.
      </Text>
      <Text>
        <TextDecoration bold>LUKA</TextDecoration> é um jogador bem decente que
        teve um set antigo de melhor de 10 contra o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=ve_Sm5b4CH4&ab_channel=TheShend"
        >
          Mimora (MA)
        </TextDecoration>
        , um{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=4LkoFePULUQ&ab_channel=3rdSTRIKE"
        >
          set curto
        </TextDecoration>{" "}
        e{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=PeofjSh7KHY&ab_channel=3rdSTRIKE"
        >
          outro mais longo contra o Hayao (HU)
        </TextDecoration>
        , um momento em que venceu{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=w09mhPe9JxI&ab_channel=3rdSTRIKE"
        >
          o Afro (UR) e o Masa (Q)
        </TextDecoration>{" "}
        2x seguidas cada, uma FT5 acirrada contra o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=yxu__IYlb3U&ab_channel=%E3%82%A2%E3%83%83%E3%83%97%E3%83%AB%E5%A4%A7%E4%BA%95%E5%B7%9D"
        >
          Uraken (GO)
        </TextDecoration>{" "}
        e uma{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=lzB7A9w5H5s&ab_channel=3rdSTRIKE"
        >
          streak contra vários jogadores de elite
        </TextDecoration>
        .
      </Text>
      <Text>
        <TextDecoration bold>Shino (シノ)</TextDecoration> é uma Makoto que já
        participava de eventos, mas evoluiu bastante nos últimos anos, com
        direito a uma{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=KyrHY8geoNs&ab_channel=3rdSTRIKE"
        >
          OCV em MANIAX
        </TextDecoration>{" "}
        e resultados respeitáveis em FT10 contra o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=mrPJReKSviY&ab_channel=3rdSTRIKEMATSUDO"
        >
          Tominaga (MA)
        </TextDecoration>
        , o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=yNKxgHeJIAI&ab_channel=3rdSTRIKEMATSUDO"
        >
          Yone (YU) duas vezes
        </TextDecoration>
        , o
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=QBukem_LCbs&ab_channel=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%B3GAME-NEWTON"
        >
          Taihei (UR)
        </TextDecoration>
        , o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=QBukem_LCbs&ab_channel=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%B3GAME-NEWTON"
        >
          Togashi (UR)
        </TextDecoration>
        , o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=lTzkvBl8Bps&ab_channel=3rdSTRIKEMATSUDO"
        >
          Mabodofu (KE)
        </TextDecoration>{" "}
        e o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=Paw9fj73V-Y&ab_channel=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%B3GAME-NEWTON"
        >
          Dudleyman (DU)
        </TextDecoration>
        .
      </Text>
      <Text>
        <TextDecoration bold>Araki (荒木)</TextDecoration> é um jogador que
        apareceu nos últimos anos com{" "}
        <TextDecoration
          underline
          blue
          href="https://www.twitch.tv/araki_sf3rdstrike"
        >
          sua própria stream no arcade Cube Koenji
        </TextDecoration>
        onde enfrenta vários jogadores de elite como Roshihikari (YA), Rori (DU)
        etc. e teve uma vitória recente em FT10 contra o{" "}
        <TextDecoration
          underline
          blue
          href="https://www.youtube.com/watch?v=p5RBCyNEft4&ab_channel=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%B3GAME-NEWTON"
        >
          Shaboten (RY)
        </TextDecoration>
        .
      </Text>
    </Article>
  );
};
