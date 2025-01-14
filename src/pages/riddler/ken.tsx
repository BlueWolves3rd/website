import { Article, Header, Text } from "../../components/article.tsx";
import kenStance from "../../assets/riddler/kenstance.gif";
import crLK from "../../assets/riddler/crLK.gif";
import crMP from "../../assets/riddler/crMP.gif";
import crMK from "../../assets/riddler/crMK.gif";
import crHK from "../../assets/riddler/crHK.gif";
import clMP from "../../assets/riddler/clMP.gif";
import farMP from "../../assets/riddler/farMP.gif";
import stHK from "../../assets/riddler/stHK.gif";
import jHK from "../../assets/riddler/jpHK.gif";
import jMK from "../../assets/riddler/jpMK.gif";
import dp from "../../assets/riddler/dp.gif";
import tatsu from "../../assets/riddler/tatsu.gif";
import hadou from "../../assets/riddler/hadou.gif";
import chunStance from "../../assets/riddler/chun-listance.gif";
import dudleyStance from "../../assets/riddler/dudleystance.gif";
import makotoStance from "../../assets/riddler/makotostance.gif";
import deshiken from "../../assets/riddler/deshiken.gif";
import matsuken from "../../assets/riddler/matsuken.gif";

import { ReactNode } from "react";

const Move = ({
  children,
  src,
  height,
}: {
  children: string;
  src?: string;
  height?: string;
}) => {
  return (
    <div>
      <ul
        className="mt-8 before:content-[''] before:absolute before:left-[-1.5rem]
                    before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2
                    before:bg-white before:rounded-full relative "
      >
        <li className="font-metropolis text-white">{children}</li>
      </ul>
      {src ? (
        <div className="flex ml-4 mt-6 mb-8">
          <img src={src} style={{ height: height ? height : "8rem" }} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const TextDecoration = ({
  children,
  blue,
  red,
  underline,
  bold,
}: {
  children: ReactNode | string;
  blue?: boolean;
  underline?: boolean;
  bold?: boolean;
  red?: boolean;
}) => {
  return (
    <>
      {" "}
      <span
        style={{
          color: blue ? "#6b63fa" : red ? "red" : "white",
          textDecorationLine: underline ? "underline" : "none",
          fontFamily: bold ? "Metropolis-Black" : "Metropolis-semibold",
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
    { href: "#combos", label: "Combos, Punições e Confirms" },
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
        Mais importante do que o cr.LP por ser um{" "}
        <TextDecoration bold>golpe baixo</TextDecoration>
        quase tão rápido quanto ele, o cr.LK é fundamental para os
        <TextDecoration bold>ticks</TextDecoration> do Ken, ou seja, as
        sequências em que se faz um golpe (geralmente rápido) seguido de um
        throw ou golpe mais forte ou, ainda, tentativa de confirm. Desta forma,
        o tick throw mais comum do Ken é cr.LK em throw.
      </Text>
      <Text>
        Uma <TextDecoration bold>frame trap</TextDecoration> (tick em normal)
        clássica é cr.LK seguido de
        <TextDecoration bold>cr.MP</TextDecoration> (confirm) ou{" "}
        <TextDecoration bold>cr.MK</TextDecoration> (que pode ser cancelado em
        EX Hadou, por exemplo).
      </Text>
      <Text>
        O cr.LK é, portanto, o <TextDecoration bold>low tick</TextDecoration> do
        Ken. Ele possui um high tick também para{" "}
        <TextDecoration bold>contornar</TextDecoration>
        <TextDecoration blue bold>
          low parries
        </TextDecoration>
        , como se verá adiante.
      </Text>
      <Text>
        Além da função de tick, o cr.LK possui outras duas interessantes, quais
        sejam, a de
        <TextDecoration underline blue bold>
          confirm
        </TextDecoration>
        (por meio de chain) e a de
        <TextDecoration bold>bait/dash check</TextDecoration>
        (interromper dashes e baitar whiff punishes em alto nível).
      </Text>
      <Move src={crMP}>cr.MP</Move>
      <Text>
        Este é um dos golpes mais fortes do Ken no chão, porque
        <TextDecoration underline>
          interrompe dashes, serve para encher barra, é mais seguro do que o
          cr.MK
        </TextDecoration>
        (apesar do alcance menor) e, como se verá depois,
        <TextDecoration bold>é confirmável em SA.</TextDecoration>
        Muito versátil,
        <TextDecoration>
          é importante tanto ofensiva quanto defensivamente
        </TextDecoration>
        . As funções mais básicas do golpe são, portanto, a de meter-building
        (encher barra) de longe e, ao mesmo tempo, de dash check (interromper
        possíveis dashes
        <TextDecoration underline>
          se o Ken estiver dentro do range do dash do oponente).
        </TextDecoration>
      </Text>
      <Text>
        É difícil de se punir, então é um golpe seguro a menos que seja spammado
        (feito em demasia).
        <TextDecoration bold>Serve como tick</TextDecoration> mais lento do que
        o cr.LK, podendo ser seguido de
        <TextDecoration bold>dash throw</TextDecoration> ou um golpe como{" "}
        <TextDecoration bold>cr.MK</TextDecoration>
        (baixo) ou <TextDecoration bold>st.HK</TextDecoration> (alto).
      </Text>
      <Text>
        A maior fraqueza do golpe, além do alcance menor, é
        <TextDecoration underline>
          levar <TextDecoration blue>parry</TextDecoration> em ambas as direções
        </TextDecoration>
        , mas isto é evitado ao não se fazer o golpe em momentos óbvios. Um
        exemplo disto seria
        <TextDecoration bold>atrasar levemente</TextDecoration> o cr.MP para
        <TextDecoration bold>
          contornar o timing de
          <TextDecoration bold blue>
            parry
          </TextDecoration>
          .
        </TextDecoration>
      </Text>
      <Text>
        Pode ser feito também como crouch tech. Por isso e por ser mais rápido
        do que o cr.MK, o
        <TextDecoration bold>cr.MP é um bom golpe defensivo</TextDecoration>
        (ressalvado o risco de parry); ele e o far MP são os principais
        <TextDecoration bold>abare</TextDecoration> (contragolpes) do Ken. A
        função de crouch tech, porém, assim como a de confirm, será elaborada
        mais tarde.
      </Text>
      <Move src={crMK}>cr.MK</Move>
      <Text>
        O outro golpe mais importante no chão. Trata-se de um
        <TextDecoration underline>
          golpe baixo de range considerável
        </TextDecoration>
        , que permite <TextDecoration bold>ataques e punições</TextDecoration>
        perigosos em conjunto com Shoryu ou SA. Por isso, é seguro dizer que
        este é o <TextDecoration bold>low mais forte do Ken.</TextDecoration>
      </Text>
      <Text>
        O cr.MK geralmente é o golpe que segue os ticks do Ken.
        <TextDecoration bold>
          Como golpe de ataque, é melhor não ser cancelado em specials
        </TextDecoration>
        , para que o Ken fique mais seguro. Exceção é o cancel em EX Hadou para
        uma pressão relativamente segura.
      </Text>
      <Text>
        É o golpe geralmente utilizado para punir o adversário quando o Ken não
        estiver colado.
        <TextDecoration bold>
          Nos casos de punição garantida, cancela-se nos specials ou SA
        </TextDecoration>
        . Cancelar ou não o cr.MK é, portanto, uma questão que
        <TextDecoration underline>
          depende se o golpe for usado para atacar diretamente ou para punir um
          erro do adversário
        </TextDecoration>
        .
      </Text>
      <Text>
        Conforme o nível de jogo aumenta, este golpe se torna mais arriscado:
        apesar de suas vantagens, ele possui recovery relativamente lenta, ou
        seja, deixa o Ken um pouco exposto na volta. Pode sofrer
        <TextDecoration bold>whiff punish</TextDecoration> de um jogador
        veterano. Dito isso, este é o golpe que o próprio Ken utiliza para whiff
        punish, então é uma
        <TextDecoration underline>
          ferramenta essencial dos footsies
        </TextDecoration>
        do personagem. Deve ser usado com um bom posicionamento que permita
        essas punições sem que o Ken seja punido.
      </Text>
      <Move src={crHK}> cr.HK </Move>
      <Text>
        A sweep do Ken é um golpe decente, mas
        <TextDecoration underline>
          deve ser usada com muita moderação
        </TextDecoration>
        . Apesar de ter range ligeiramente maior do que o cr.MK, deixa o usuário
        exposto se for defendida perto o bastante, diferentemente do cr.MK, que
        é seguro. Por isso,
        <TextDecoration bold>
          deve ser reservada para punições de longe sem barra
        </TextDecoration>
        — faz mais dano e ganha mais barra do que o cr.MK, além do knockdown —,
        o que inclui <TextDecoration bold>whiff punish</TextDecoration> nos
        footsies.
      </Text>
      <Text>
        <TextDecoration bold>O cr.HK não é golpe defensivo</TextDecoration>.
        Além de punível se o adversário defender de perto, o cr.HK é lento para
        um golpe defensivo.
      </Text>
      <Move src={clMP}>cl.MP</Move>
      <Text>
        Provavelmente{" "}
        <TextDecoration underline>
          o golpe alto mais rápido e importante do Ken
        </TextDecoration>
        . Embora exija que o usuário esteja perto, é o
        <TextDecoration bold>high tick</TextDecoration> mencionado anteriormente
        que possibilita pressão sem que o oponente abuse de
        <TextDecoration blue>low parry</TextDecoration> contra os golpes do Ken,
        já que quase todos levam esse parry: cr.LK, cr.MK, cr.MP…
        <TextDecoration underline>
          O cl.MP complementa, portanto, o cr.LK do Ken como tick
        </TextDecoration>
        . Força o oponente a ter que se preocupar com um golpe alto.
      </Text>
      <Text>
        Por ser um tick, permite throw em seguida ou pressão com mais golpes
        (cr.MP, cr.MK ou far MP) ou, ainda, tentativas de confirm.
      </Text>
      <Text>
        Outra vantagem do cl.MP é a de levar a um
        <TextDecoration bold>target combo</TextDecoration> importantíssimo do
        Ken, que serve tanto como
        <TextDecoration blue>punição rápida e básica</TextDecoration>
        de perto quanto
        <TextDecoration blue>confirm</TextDecoration>.
      </Text>
      <Move src={farMP}>far MP</Move>
      <Text>
        O far MP do Ken é, basicamente,{" "}
        <TextDecoration underline>a versão em pé do cr.MP</TextDecoration>:
        serve como
        <TextDecoration bold>counterpoke/abare</TextDecoration> (golpe
        defensivo) e, na ofensa, permite confirm em SA. As principais vantagens
        do far MP sobre o cr.MP são:{" "}
        <TextDecoration underline>
          levar somente <TextDecoration blue>high parry</TextDecoration>, ter
          range um pouco maior, funcionar como anti-air e cortar pulos
          defensivos para fora do corner.
        </TextDecoration>
      </Text>
      <Text>
        A função de <TextDecoration bold>anti-air</TextDecoration> exige
        posicionamento adequado, para que não saia um cl.MP por acidente. Quando
        feito da distância correta, se o oponente tiver tentado{" "}
        <TextDecoration blue>air parry</TextDecoration>, o{" "}
        <TextDecoration underline>
          Ken ainda pode fazer Shoryuken
        </TextDecoration>
        , geralmente forte ou médio, em seguida (não é um cancel). Isto tende a
        cortar qualquer golpe que o oponente faça após o air parry a menos que
        seja um golpe fraco, sendo que os golpes fracos aéreos nem sempre
        alcançam a tempo.
      </Text>
      <Text>
        Como mencionado, o far MP também é bom para{" "}
        <TextDecoration bold>tirar pulos de fuga do corner</TextDecoration>.
        Para isso, precisa ser usado de{" "}
        <TextDecoration bold>forma preventiva</TextDecoration> — não se reage ao
        pulo, apenas se tenta o golpe na leitura. Vale notar que,{" "}
        <TextDecoration underline>contra personagens pequenos</TextDecoration>,
        há o <TextDecoration bold>risco de whiff on crouching</TextDecoration>,
        isto é, pode não encostar se ficarem abaixados. Isto deixa o Ken
        vulnerável, então recomenda-se cautela.
      </Text>
      <Move src={stHK}> st.HK</Move>
      <Text>
        É o <TextDecoration underline>golpe alto de longe</TextDecoration> do
        Ken. Utilizado como <TextDecoration bold>poke</TextDecoration> (golpe
        ofensivo), cria um pequeno mix-up entre ele mesmo (golpe alto) e o cr.MK
        e o cr.HK (golpes baixos). Serve, portanto, para “punir”{" "}
        <TextDecoration underline>
          tentativas de <TextDecoration blue>low parry</TextDecoration> e de
          golpes da mid-range
        </TextDecoration>{" "}
        (que não alcancem). Causa bastante dano se pegar o oponente abaixado.
      </Text>
      <Text>
        Muitos players iniciantes/intermediários de Ken, quando acertam um
        throw, puxam cr.HK ou st.HK de meaty no quick stand do oponente. Este é
        um uso bastante perigoso, pois{" "}
        <TextDecoration bold>
          o retorno de um poke pode não justificar o risco de se levar um{" "}
          <TextDecoration bold blue>
            guess parry
          </TextDecoration>{" "}
          fácil
        </TextDecoration>{" "}
        (timing fixo do wake-up).
      </Text>
      <Text>
        Ainda, o st.HK é um golpe lento. Se feito incorretamente, o adversário
        pode pular por cima ou punir o whiff do golpe. Funciona melhor como
        tentativa de{" "}
        <TextDecoration bold>“punição” do meter-building</TextDecoration> do
        oponente, ou em{" "}
        <TextDecoration bold>
          strings quando o Ken tem a vantagem
        </TextDecoration>
        , como após um cr.LK de max range (na ponta).
      </Text>
      <Move src={jHK}>j.HK</Move>
      <Text>
        O <TextDecoration bold>jump-in</TextDecoration> do Ken. Autoexplicativo.
        Quase sempre que o Ken pular para atacar{" "}
        <TextDecoration bold>pela frente</TextDecoration>, deve utilizar o j.HK.{" "}
        <TextDecoration underline>
          Exceção é se ele não tiver certeza de que cairá na frente ou nas
          costas, caso em que pode usar o j.MK
        </TextDecoration>
        . Como jump-in, pode ser utilizado de perto ou longe.
      </Text>
      <Text>
        De perto, ele pode ser confirmado em combo, ou seja,{" "}
        <TextDecoration bold>se acertar</TextDecoration>, o Ken pode puxar cr.MK
        e cancelar em Shoryuken ou SA.{" "}
        <TextDecoration bold>
          Se não acertar, não se faz o cancel
        </TextDecoration>
        . Para que o combo funcione, o j.HK{" "}
        <TextDecoration bold>
          precisa ter acertado baixo o suficiente (mais perto do chão)
        </TextDecoration>
        ; do contrário, o cr.MK não acerta a tempo.
      </Text>
      <Text>
        De longe, principalmente quando sai mais perto do chão, o j.HK serve
        mais para{" "}
        <TextDecoration bold>
          se aproximar e colocar o oponente na defensiva
        </TextDecoration>
        . Desta forma, o Ken pode chegar perto e pressionar com confirm ou
        throw, como se o j.HK fosse um{" "}
        <TextDecoration bold>tick</TextDecoration> qualquer. Quanto mais baixo o
        j.HK sair, maior a vantagem do Ken para se aproximar.
      </Text>
      <Text>
        O j.HK também é o{" "}
        <TextDecoration bold>air-to-air normal</TextDecoration> do Ken. Possui
        bom alcance e dano. Mas,{" "}
        <TextDecoration underline>
          como qualquer normal de air-to-air, deixa o usuário exposto se o
          oponente não tiver pulado
        </TextDecoration>
        . Portanto, é importante{" "}
        <TextDecoration bold>
          só puxar o j.HK lá no alto se vir que o oponente também pulou
        </TextDecoration>
        .
      </Text>
      <Text>
        De forma geral,{" "}
        <TextDecoration bold>
          o j.HK é o golpe aéreo que se usa para tudo menos cross-up
        </TextDecoration>
        .
      </Text>
      <Move src={jMK}>j.MK</Move>
      <Text>
        O <TextDecoration bold>cross-up</TextDecoration> do Ken é provavelmente
        o melhor do jogo quando analisado o kit inteiro à disposição do Ken ao
        cair. Sempre que o Ken pular de modo que caia{" "}
        <TextDecoration bold>nas costas</TextDecoration> do oponente, deve
        utilizar o j.MK. Desde que aterrisse na distância correta,
        <TextDecoration bold>
          anti-airs normais não funcionarão contra o cross-up.
        </TextDecoration>
      </Text>
      <Text>
        As principais opções que o Ken tem após o cross-up são quatro:
        <TextDecoration bold>
          {" "}
          1. back throw, 2. tick em back throw (com cr.LK ou cl.MP), 3. target
          combo (confirm alto), 4. cr.LK x2 ou cr.LK cr.LP cr.LK (confirm baixo)
        </TextDecoration>
        . O Ken deverá utilizar uma dessas quatro opções de{" "}
        <TextDecoration bold>acordo com a barra</TextDecoration> (se tem SA ou
        não para confirmar) e{" "}
        <TextDecoration bold>as tendências defensivas</TextDecoration> do
        oponente (se ele tenta <TextDecoration blue>parry</TextDecoration>/
        <TextDecoration red>red</TextDecoration> parry após o cross-up, se puxa
        throw sempre etc.).{" "}
        <TextDecoration bold>
          O back throw direto é a mais segura
        </TextDecoration>
        , pois o oponente não pode contornar o throw;{" "}
        <TextDecoration underline>é obrigado a tentar tech</TextDecoration>.
        Porém, é a com o menor retorno e joga a vantagem fora se o oponente
        acertar o tech. É importante variar bem com as outras. Também é
        importante ressaltar que o
        <TextDecoration underline>
          low do Ken após o cross-up é consideravelmente mais fraco quando ele
          não tem barra
        </TextDecoration>
        , porque ele fica sem o confirm baixo. Enquanto isso, o target combo
        pode ser utilizado mesmo sem barra, porque serve para confirmar em
        Shoryuken.
      </Text>
      <Text>
        Existe ainda uma quinta opção ao acertar o cross-up, que é o{" "}
        <TextDecoration bold>backstep</TextDecoration>, mas este é menos comum.
        É uma forma de se tentar{" "}
        <TextDecoration underline>
          punir em cheio a tentativa de throw tech
        </TextDecoration>
        , sem o risco de levar o throw que haveria ao se atrasar levemente o
        target combo, por exemplo.{" "}
        <TextDecoration bold>
          O backstep só faz sentido se o Ken tiver barra para puxar cr.MK em SA
        </TextDecoration>
        .
      </Text>
      <Header level={1} id="specials">
        Specials
      </Header>
      <Text> Os principais specials do Ken são:</Text>
      <Move src={dp} height={"18rem"}>
        Shoryuken
      </Move>
      <Text>
        O special mais importante do Ken, de longe. Tem múltiplas funções:
        <TextDecoration underline>anti-air, reversal</TextDecoration> e,
        principalmente,{" "}
        <TextDecoration underline>combos e punições</TextDecoration>.
      </Text>
      <Text>
        Como anti-air, deve ser usado o Shoryu{" "}
        <TextDecoration underline>forte ou médio</TextDecoration>, nunca o
        fraco, pois este é anulado por um único{" "}
        <TextDecoration blue>air parry</TextDecoration>; os outros são melhores
        contra isso por serem{" "}
        <TextDecoration underline>multi-hit</TextDecoration>. O Shoryu forte
        possui invulnerabilidade e, portanto, vence qualquer jump-in se feito{" "}
        <TextDecoration underline>
          na hora e da distância corretas
        </TextDecoration>
        , mas pode levar <TextDecoration blue>full parry</TextDecoration> se o
        oponente reagir à animação única de fogo; já o Shoryu médio NÃO é
        invulnerável, mas pode confundir o oponente pela animação semelhante à
        do fraco, induzindo-o ao erro e acertando o segundo hit. Contra um
        oponente que abuse de <TextDecoration blue>air parry</TextDecoration>,
        pode-se{" "}
        <TextDecoration bold blue underline>
          fazer primeiro um far MP
        </TextDecoration>{" "}
        e segui-lo com Shoryu médio ou forte após o air parry.
      </Text>
      <Text>
        Como a maioria dos <TextDecoration bold>reversals</TextDecoration>, o
        Shoryuken é arriscado quando feito dessa forma. Basta o oponente
        defender para que o estrago seja feito. Dito isso, às vezes é necessário
        desrespeitar a pressão alheia. Para este fim, deve ser utilizado o
        Shoryu <TextDecoration underline>fraco ou forte</TextDecoration>, nunca
        o médio. O forte é{" "}
        <TextDecoration underline>invulnerável</TextDecoration> pela maior
        parte, como já foi dito, então é o melhor para reversal. O fraco pode
        ser utilizado <TextDecoration underline>ocasionalmente</TextDecoration>{" "}
        quando o oponente não{" "}
        <TextDecoration underline>estiver colado</TextDecoration>, porque acerta
        um único hit e já faz knockdown; o forte possui o problema de acertar só
        alguns hits sem tirar o oponente no chão e errar o resto se não estiver
        tão perto, deixando o Ken exposto. Em geral, não se{" "}
        <TextDecoration bold>usa o EX Shoryuken</TextDecoration>. O Shoryu forte
        já possui invulnerabilidade suficiente, realizando o trabalho que o EX
        faria sem gastar qualquer barra.
      </Text>
      <Text>
        A utilização do Shoryu para{" "}
        <TextDecoration bold>combos e punições</TextDecoration> será tratada no
        momento apropriado, mas pode-se adiantar que{" "}
        <TextDecoration underline>o fraco é o mais usado</TextDecoration>, pelo
        mesmo motivo que pode ser utilizado como anti-air em algumas situações:
        <TextDecoration bold>segurança</TextDecoration>. Há menos risco de o
        Shoryu fraco errar pela distância.
      </Text>
      <Move src={tatsu}>EX Tatsumaki aéreo</Move>
      <Text>
        É a única versão realmente importante do Tatsumaki do Ken neste jogo,,
        por dois motivos: <TextDecoration bold>fugir do corner</TextDecoration>{" "}
        e punir pesado alguns pulos (
        <TextDecoration bold>air-to-air</TextDecoration>).
      </Text>
      <Text>
        A principal aplicação do EX Tatsumaki é para{" "}
        <TextDecoration bold>escapar do corner</TextDecoration>. Com barra e uma
        brecha para pular, o Ken consegue escapar impune do corner na maioria
        dos casos. Para isso, é importante que ele observe atentamente a{" "}
        <TextDecoration underline>distância do oponente</TextDecoration> (não
        pode estar colado nem muito longe, embaixo do timer) e, claro, que tenha
        a <TextDecoration underline>barra</TextDecoration> para isso. Em alguns
        casos, pode ser utilizado o{" "}
        <TextDecoration underline>hi-jump</TextDecoration> para ir ainda mais
        longe, mas é bom cuidar para não ir de um corner a outro.
      </Text>
      <Text>
        Como <TextDecoration bold>air-to-air</TextDecoration>, é muito difícil
        (embora possível) fazer o EX Tatsumaki na reação ao pulo do oponente.
        Por esse motivo, ele é muito mais usado
        <TextDecoration bold>na leitura</TextDecoration>, em situações prontas
        para que o Ken esteja{" "}
        <TextDecoration underline>posicionado corretamente</TextDecoration> e
        pegue o pulo ou caia com segurança se o oponente tiver permanecido no
        chão. Exemplos seriam tentativas de confirm (TC; cr.LK cr.LP cr.LK;
        cr.LK x2) defendidas, seguidas de EX Tatsumaki. Novamente, é importante
        cuidar para <TextDecoration bold>não parar no corner</TextDecoration>.
      </Text>
      <Text>
        Se o EX Tatsumaki (air-to-air) acertar{" "}
        <TextDecoration underline>mais do que 2 hits</TextDecoration>, deve ser
        seguido de um Shoryu médio. Se acertar{" "}
        <TextDecoration underline>apenas 1 ou 2 hits</TextDecoration>, é
        possível fazer{" "}
        <TextDecoration underline>Shoryu fraco, Kara-Shoryu</TextDecoration>{" "}
        (vide técnicas avançadas).
      </Text>
      <Text>
        Como <TextDecoration bold>cross-up</TextDecoration>, o EX Tatsu é
        recomendado principalmente contra{" "}
        <TextDecoration underline>oponentes grandes</TextDecoration>, como Hugo,
        Urien e Dudley, porque acerta mais facilmente neles, ainda que estejam{" "}
        <TextDecoration underline>abaixados</TextDecoration>. Contra outros
        personagens, é mais arriscado, pois eles podem{" "}
        <TextDecoration bold>
          ficar abaixados no chão para punir o EX Tatsumaki aéreo
        </TextDecoration>
        . Por isso, não se deve abusar desse cross-up, nem fazê-lo se o oponente
        estiver muito longe. Se o EX Tatsumaki de cross-up acertar, pode-se
        fazer um <TextDecoration underline>st.MK</TextDecoration> para dano
        extra. É possível ainda, em vez disso, fazer dash Shoryu fraco seguido
        de Kara-Shoryu, mas é difícil.
      </Text>
      <Text>
        <TextDecoration underline>
          O Tatsumaki do Ken no chão é praticamente inútil
        </TextDecoration>
        , exceto contra Dudley.
      </Text>
      <Move src={hadou}>EX Hadouken</Move>
      <Text>
        A versão EX do Hadouken funciona principalmente como{" "}
        <TextDecoration bold>safe poke</TextDecoration>, feito puro ou{" "}
        <TextDecoration underline>cancelado de um cr.MK</TextDecoration>. Se
        acertar, é knockdown; se for defendido, o Ken permanece seguro (exceto
        contra uma Chun-Li com barra). O knockdown é bastante útil, dada a
        pressão forte do Ken no corner. Mas é fundamental{" "}
        <TextDecoration underline>administrar bem a barra</TextDecoration>. Em
        regra, o Ken não prospera se gastar toda a barra em EX.{" "}
        <TextDecoration underline>Ele precisa da SA</TextDecoration>.
      </Text>
      <Text>
        O Hadouken normal do Ken é muito lento e raramente é utilizado fora de
        confirms (cancelado de TC ou cr.MK de perto).
      </Text>
      <Header level={1} id="SA">
        Super Art (SA)
      </Header>
      <Text>
        O Ken possui somente uma SA viável competitivamente: SA3. As demais SA
        são consideradas inviáveis e nunca são utilizadas em partidas sérias;
        possuem barras longas demais, curto alcance e, consequentemente,
        permitem menos confirms, punições e EX. O dano maior não justifica a
        falta de versatilidade perante a SA3 claramente superior.
      </Text>
      <Move>Shippu Jinraikyaku (SA3)</Move>
      <Text>
        Os motivos para a escolha são vários: este Super é{" "}
        <TextDecoration underline>
          consideravelmente mais rápido e possui maior alcance
        </TextDecoration>{" "}
        do que os demais, o que permite diversos{" "}
        <TextDecoration underline>confirms e punições</TextDecoration>; é dotado
        de três barras, o que garante um
        <TextDecoration underline>
          acesso maior aos EX specials
        </TextDecoration>{" "}
        supracitados sem ficar com SA indisponível e ainda permite{" "}
        <TextDecoration underline>acesso mais rápido à SA</TextDecoration> em
        virtude da barra curta.
      </Text>
      <Text>
        <TextDecoration underline>
          A SA3 transforma o cr.MK do Ken em uma ameaça
        </TextDecoration>
        . Qualquer <TextDecoration blue>parry</TextDecoration> da mid-range pode
        levar a cr.MK xx SA. Da mesma forma, qualquer whiff punish de cr.MK pode
        levar a SA. De perto, os confirms também são mais ameaçadores, porque{" "}
        <TextDecoration underline>
          o Ken não precisa estar colado para confirmar
        </TextDecoration>{" "}
        do cr.MP ou de cr.LK x2, por exemplo.
      </Text>
      <Text>
        Por fim, a SA3 permite <TextDecoration bold>PA (taunt)</TextDecoration>{" "}
        na maioria das matchups se acertar um oponente{" "}
        <TextDecoration underline>no corner</TextDecoration> e permite setplay
        se deixá-lo no meio da tela. O
        <TextDecoration bold>setplay</TextDecoration> será explicado em momento
        oportuno.
      </Text>
      <Header level={1} id="combos">
        Combos, Punições e Confirms
      </Header>
      <Text>
        A seguir serão listadas as principais formas de conversão do Ken no
        chão:
      </Text>
      <Move>cr.MK x Shoryuken</Move>
      <Text>
        <TextDecoration underline>
          O BnB (punição) do Ken da mid-range sem barra
        </TextDecoration>
        . Quando não quiser/puder usar SA, é isto que ele deve fazer sempre que
        estiver perto o bastante para conectar o Shoryuken após cr.MK e longe
        demais para começar com algo melhor (TC/cl.HP).
      </Text>
      <Text>
        É costumeiro utilizar-se o{" "}
        <TextDecoration underline>
          Shoryu fraco do Ken para combos
        </TextDecoration>
        , por ser mais difícil de whiffar pela distância (o forte pode voar sem
        acertar após o primeiro hit), por permitir{" "}
        <TextDecoration underline>melhor frame advantage</TextDecoration> (o Ken
        pode fazer dash mais livremente após o Shoryu) e por{" "}
        <TextDecoration underline>possibilitar Kara-Shoryu</TextDecoration>
        quando cancelado de cr.MK ou cl.MP.
      </Text>
      <Text>
        Com esta regra em mente,{" "}
        <TextDecoration bold>na dúvida, o Shoryu fraco basta</TextDecoration>.
        Mas é interessante substituí-lo pelo{" "}
        <TextDecoration underline>
          Shoryu forte para otimizar o dano, sempre que o Kara-Shoryu
          subsequente não for uma opção
        </TextDecoration>
        . Ex: Punir Dudley, Alex, Oro (no meio da tela) etc.
      </Text>
      <Move>Target Combo (cl.MP cl.HP) x Shoryuken fraco</Move>
      <Text>
        <TextDecoration underline>
          O BnB do Ken de perto sem barra
        </TextDecoration>
        . Novamente, sem SA, o Shoryuken é a melhor opção. Neste caso,{" "}
        <TextDecoration bold>somente o Shoryu fraco</TextDecoration> funciona e
        mesmo ele pode errar se o TC for feito da distância máxima, então{" "}
        <TextDecoration underline>
          é importante estar colado no oponente
        </TextDecoration>
        .
      </Text>
      <Text>
        Vale ressaltar que o{" "}
        <TextDecoration underline>
          TC é mais seguro do que qualquer golpe singular do Ken para cancelar
          em Shoryuken/SA
        </TextDecoration>
        , pois <TextDecoration bold>é possível confirmar o TC</TextDecoration>,
        ou seja, não soltar o Shoryuken/SA a menos que o TC tenha acertado.
        Desta forma, o Ken não fica exposto.
      </Text>
      <Text>
        Uma forma interessante de encaixar o TC quase sempre colado é logo após
        um{" "}
        <TextDecoration underline blue>
          cross-up j.MK
        </TextDecoration>
        , mas é fundamental não se tornar previsível, pois o TC é a opção mais
        tentadora sem barra (sempre leva a conversão com Shoryu, diferentemente
        de cr.LK x2).
      </Text>
      <Move>cl.HP x Shoryuken médio xx SA3</Move>
      <Text>
        <TextDecoration underline>
          A punição do Ken otimizada com barra
        </TextDecoration>
        . Precisa estar colado no oponente. Trata-se de punição somente, o que
        significa que o Ken não deve puxar o cl.HP sem ter uma punição garantida
        (ex: Shoryuken ou SA defendida, com o oponente totalmente exposto e
        colado). Logo, se o oponente cometer erro grave e ficar completamente
        punível bem próximo do Ken com SA, esta é a melhor punição.
      </Text>
      <Text>
        Na mesma situação,{" "}
        <TextDecoration underline>
          se o Ken não tiver certeza quanto ao tempo disponível para fazer o
          cl.HP, pode substituí-lo por cl.MP; o dano será um pouco menor, mas é
          mais garantido por tratar-se de golpe mais rápido
        </TextDecoration>
        .
      </Text>
      <Text>
        O Shoryu médio é utilizado aqui porque o fraco tira o oponente do chão e
        faz com que a SA não acerte direito, enquanto o forte faz menos dano se
        cancelado na SA devido ao damage scaling.
      </Text>
      <Move>cr.MK x EX Hadouken</Move>
      <Text>
        O principal cancel em EX Hadouken, para encaixá-lo a partir de golpe
        baixo.{" "}
        <TextDecoration underline>
          Utilizado quando não se tem uma garantia de que o Shoryuken acertará
        </TextDecoration>{" "}
        e, portanto, é mais seguro gastar um pouco de barra para buscar o
        knockdown sem ser punido caso o oponente defenda. Dito isso, deve ser
        <TextDecoration underline>
          usado com moderação para não gastar toda a barra e não deve ser feito
          no corner
        </TextDecoration>{" "}
        por ser punível lá. O{" "}
        <TextDecoration bold>EX Hadouken não é punição</TextDecoration>.
      </Text>
      <Text>
        Em geral, não vale a pena cancelar outro golpe em EX Hadouken, pois os
        demais golpes são melhor usados para Shoryuken ou SA3.
      </Text>
      <Move>cr.MK xx SA3</Move>
      <Text>
        <TextDecoration underline>
          A punição de longe (mid-range) do Ken com barra
        </TextDecoration>
        . Deve ser feita sempre que o Ken estiver com SA disponível e só tiver
        range para cr.MK/cr.HK para punir. Extremamente importante, pois é esta
        punição que dá tanto poder ao Ken mesmo quando ele está afastado.{" "}
        <TextDecoration underline>
          Opção forte quando combinada com o backstep
        </TextDecoration>{" "}
        para contornar e punir golpes.{" "}
        <TextDecoration bold>É a principal whiff punish do Ken</TextDecoration>.
      </Text>
      <Text>
        Esta opção pode ser utilizada também no neutro como “
        <TextDecoration bold>OS buffer”, ou</TextDecoration>
        seja, o Ken pode fazer o cr.MK{" "}
        <TextDecoration underline>
          longe o bastante para que normalmente não acerte
        </TextDecoration>{" "}
        e, durante a animação do golpe, esconder um buffer de SA3. Se feito
        corretamente,{" "}
        <TextDecoration underline>
          a SA não sai a menos que o oponente avance
        </TextDecoration>{" "}
        e tropece no cr.MK.
      </Text>
      <Move>Target Combo (cl.MP cl.HP) (x Hadouken) xx SA3</Move>
      <Text>
        <TextDecoration underline>
          O high confirm de perto do Ken em SA3
        </TextDecoration>
        . Muito útil quando se usa o TC para pressionar sem a garantia de que o
        oponente estará colado para levar Shoryuken.{" "}
        <TextDecoration underline>
          Cancelar o TC em Hadou antes da SA facilita o confirm
        </TextDecoration>
        (a execução da SA aproveita o buffer do Hadou, basta fazer mais uma
        motion de Hadou para a SA),{" "}
        <TextDecoration underline>
          mas o Hadou pode levar <TextDecoration blue>parry</TextDecoration> e
          punish se o oponente tiver defendido o TC
        </TextDecoration>
        , então é um pouco mais arriscado se o confirm não entrar.
      </Text>
      <Move>cr.LK cr.LP cr.LK xx SA3</Move>
      <Text>
        <TextDecoration underline>
          O low confirm mais fácil do Ken em SA3
        </TextDecoration>
        . É a versão fácil do outro low confirm (cr.LK x2), mas, diferentemente
        dele,{" "}
        <TextDecoration underline>
          exige que o oponente esteja colado e não funciona no Q, no Necro e no
          Urien se estiverem em pé.
        </TextDecoration>
      </Text>
      <Text>
        <TextDecoration bold>
          Contra a maior parte do elenco, é possível fazer cr.LK x3 se o Ken
          estiver colado
        </TextDecoration>
        . O Ken pode até fazer o primeiro cr.LK como um tick e depois puxar
        cr.LK x2 sem precisar andar nesses casos. Ou, ainda, pode fazer{" "}
        <TextDecoration underline>
          cr.LP (crouch tech) cr.LK cr.LK
        </TextDecoration>
        , o que é útil quando feito atrasado no okizeme ou após um dash, para
        não levar throw. Mas estas versões alternativas, além de não funcionarem
        nos três personagens elencados acima,{" "}
        <TextDecoration bold>
          também não funcionam nos Shotos em pé
        </TextDecoration>
        , razão pela qual se usa o cr.LK cr.LP cr.LK nestes últimos.
      </Text>
      <Move>cr.LK cr.LK xx SA3</Move>
      <Text>
        <TextDecoration underline>O melhor low confirm do Ken</TextDecoration>,
        pois não precisa que o oponente esteja completamente colado, ou seja,
        possui um alcance levemente maior do que o cr.LK cr.LP cr.LK. Ademais,
        possui a vantagem de funcionar contra todos os personagens, estejam eles
        em pé ou abaixados. Por fim, em alto nível, é menos arriscado do que o
        anterior contra tentativas de{" "}
        <TextDecoration red>red parry</TextDecoration>.
      </Text>
      <Move>cr.MP, SA3</Move>
      <Text>
        <TextDecoration underline>
          Confirm muito forte com alcance um pouco maior do que o anterior
        </TextDecoration>
        . O cr.MP é um golpe forte por inúmeras razões, conforme já demonstrado.
        A sua capacidade de confirmar SA3 dessa distância (por volta do max
        range do cr.MP) é o que consolida este como um dos principais golpes do
        Ken, superior ao cr.MP do Ryu e do Gouki.
      </Text>
      <Text>
        Qualquer tick de perto pode ser seguido do cr.MP para uma{" "}
        <TextDecoration bold>frame trap que</TextDecoration>
        poderá punir pesado uma tentativa de contragolpe ou de throw defensivo.
      </Text>
      <Text>
        O Ken também pode aproveitar um{" "}
        <TextDecoration bold>cr.MP defensivo</TextDecoration> e confirmar em SA
        caso acerte. Por isso, avançar no Ken torna-se um risco ainda maior do
        que se tivesse que cuidar somente com o cr.MK.{" "}
        <TextDecoration underline>
          Este cr.MP defensivo fica ainda mais forte quando feito como crouch
          tech
        </TextDecoration>
        , o que será explicado mais adiante.
      </Text>
      <Text>
        Vale notar que o confirm do cr.MP é um{" "}
        <TextDecoration underline>link</TextDecoration>, e não um cancel.
        Deve-se começar as motions da SA durante o cr.MP
      </Text>
      <Move>far MP, SA3</Move>
      <Text>
        Muito semelhante ao confirm anterior, possivelmente com alcance um pouco
        maior, porém envolve golpe alto e, portanto, contorna tentativas de{" "}
        <TextDecoration blue>low parry</TextDecoration>. Em contrapartida,{" "}
        <TextDecoration underline>
          o far MP não acerta diversos personagens abaixados, então é mais forte
          contra personagens de porte médio ou grande; não deve ser muito
          utilizado contra personagens pequenos.
        </TextDecoration>
      </Text>
      <Text>
        Da mesma forma que o confirm de cr.MP, o de far MP é um{" "}
        <TextDecoration bold>link</TextDecoration>. A SA precisa vir{" "}
        <TextDecoration underline>após</TextDecoration> a animação do golpe.
      </Text>
      <Move>4MK (on crouching), SA3</Move>
      <Text>
        4MK é o chute overhead do Ken, o chute médio para trás. Faz 2 hits e
        confirma em SA3 se pegar o oponente abaixado. Bem simples. Basta
        confirmar que o oponente foi atingido abaixado e acertar o link de SA3.
      </Text>
      <Text>
        Também é a única utilidade deste normal (além do{" "}
        <TextDecoration underline blue>
          kara-back throw
        </TextDecoration>
        ), por isso ele não foi listado.
      </Text>
      <Text>
        Observação:{" "}
        <TextDecoration underline>
          em alguns personagens, como Chun-Li e Ibuki, apenas 1 hit (o segundo)
          do 4MK acerta
        </TextDecoration>{" "}
        quando estão abaixados, mas o confirm ainda funciona. É preciso apenas
        um cuidado para reagir a tempo e executar o link no tempo correto.
      </Text>
      <Move>Leap, SA3</Move>
      <Text>
        O Leap, também conhecido como{" "}
        <TextDecoration bold>Universal Overhead (UOH)</TextDecoration>, funciona
        como um confirm{" "}
        <TextDecoration underline>quando acerta bem afastado</TextDecoration>,
        na ponta, o que faz com que seja bem meaty e permita link em SA. Vários
        personagens podem fazer isso e o Ken não é exceção, pois sua SA é rápida
        e tem bom alcance. O link é mais fácil se acertar o oponente abaixado.
      </Text>
      <Text>
        Existem diversos <TextDecoration bold>ticks</TextDecoration> que servem
        de{" "}
        <TextDecoration underline>
          setup para a distância correta do Leap
        </TextDecoration>
        . Em geral, esses ticks são tentativas de confirm defendidas que
        permitem o Leap como um backup para encaixar a SA em seguida. Mas é bom
        ter cuidado para não telegrafar o Leap.
      </Text>
      <Text>
        As principais opções que servem de tick para o Leap bem posicionado são:
      </Text>
      <ol className="list-decimal ml-24">
        <li>cr.LK x2 (colado), micro walk para trás;</li>
        <li>
          cr.LK x2 (afastado), micro walk para a frente (também funciona com
          cr.LK cr.LP cr.LK ou cr.LK x3 colado no oponente);
        </li>
        <li>TC (cl.MP cl.HP), micro walk para a frente;</li>
        <li>
          SA3 que acertou no corner (o Ken pode fazer taunt contra a maioria).
        </li>
      </ol>
      <Text>
        Naturalmente, no caso dos cr.LK, o Ken não precisa sempre fazer duas
        vezes. Basta que o último cr.LK deixe na distância apropriada, então um
        jogador experiente pode fazer um único cr.LK e usá-lo como tick se
        desejar.
      </Text>
      <Text>
        É importante enfatizar que o{" "}
        <TextDecoration bold>
          Leap afastado para confirm NÃO é o mesmo que fazer meaty Leap colado
          no wake-up do oponente
        </TextDecoration>
        . É verdade que o Ken pode fazer meaty Leap no okizeme, colado, o que é
        bastante útil no corner para acertar dois Shoryuken. Esta aplicação do
        Leap no wake-up inimigo, porém, é um meaty convencional que pode levar{" "}
        <TextDecoration blue>parry</TextDecoration> facilmente se o adversário
        adivinhar certo, porque o timing é sempre o mesmo. Não é necessário
        correr esse risco para confirmar em SA, uma vez que a SA faz combo após
        o Leap afastado, logo{" "}
        <TextDecoration underline>
          o Leap para SA deve ser feito sempre com base no espaçamento
        </TextDecoration>
        , e não no timing de meaty no okizeme, como é feito quando se quer
        Shoryu no corner.
      </Text>
      <Move>cr.MK x Hadouken xx SA3</Move>
      <Text>
        Um confirm mais utilizado{" "}
        <TextDecoration underline>após dash</TextDecoration>, porque exige que o
        Ken esteja perto para que o Super encaixe no combo.
      </Text>
      <Text>
        Realizado da seguinte forma: (dash) cr.MK x Hadou forte e começa a fazer
        o buffer da SA; se acertar, é só finalizar a SA. Do contrário, acaba no
        Hadouken.
      </Text>
      <Text>
        É útil porque tem alcance um pouco maior do que o outro confirm low
        (cr.LK x2), mas deve ser usado com moderação e somente em casos onde o
        Ken não possa ser punido. Não deve ser feito, por exemplo, contra uma
        Chun-Li com barra, porque Hoyoku (SA2 dela) pune o Hadou defendido.
        Outro cuidado importante é evitar este confirm contra jogadores que
        façam <TextDecoration red>red parry</TextDecoration> no Hadou.
      </Text>
      <Text>
        É recomendado contra personagens que gostam de ficar perto e não punem o
        Hadou, como:{" "}
        <TextDecoration underline>Hugo, Oro, Dudley, Ryu.</TextDecoration>O dash
        e o alcance extra do cr.MK x Hadou permitem um low confirm surpresa
        contra eles.
      </Text>
      <Text>
        Contra-indicado contra:{" "}
        <TextDecoration underline>
          Chun-Li, Ken, Yun, Necro, Alex.
        </TextDecoration>
        Personagens que punem o Hadou facilmente, pelo menos com barra (o Yun
        não precisa de barra).
      </Text>
      <Move>Air-to-air EX Tatsumaki aéreo (3 ou 4 hits), Shoryuken médio</Move>
      <Text>
        Conversão simples que o Ken tem de um EX Tatsumaki aéreo que acerte o
        adversário no ar. É o melhor que ele tem nesse caso. Shoryu forte faz
        menos dano porque nunca acerta todos os hits. Shoryu fraco faz menos
        dano e não vale a pena já que não será possível acertar um segundo
        Shoryu por limitação do jogo.
      </Text>
      <Move>
        Air-to-air EX Tatsumaki aéreo (1 ou 2 hits), Shoryuken fraco,
        Kara-Shoryuken fraco
      </Move>
      <Text>
        Versão melhor do combo acima, mas{" "}
        <TextDecoration underline>
          só funciona quando o EX Tatsu aéreo acertar menos de 3 hits
        </TextDecoration>
        . É possível fazer kara nos dois Shoryu para aumentar as chances de
        acerto, mas, além de difícil, isso raramente é necessário.
      </Text>
      <Text>
        <TextDecoration underline>
          Contra personagens que nunca levam o{" "}
          <TextDecoration blue>Kara-Shoryuken</TextDecoration> (após o primeiro
          Shoryu) no meio da tela, é melhor só fazer Shoryuken médio
        </TextDecoration>{" "}
        após o EX Tatsu, como no combo anterior. Fazer kara nesse Shoryu médio
        ajuda a garantir o alcance, mas isso é avançado.{" "}
      </Text>
      <Header level={1} id="tecnicas">
        Técnicas Avançadas
      </Header>
      <Move>Crouch tech com cr.MP</Move>
      <Text>
        O crouch tech universal é feito com cr.LP+LK. Se o throw inimigo vier no
        tempo esperado, ocorre um throw tech; do contrário, sai um cr.LP.
      </Text>
      <Text>
        É possível fazer isso dentro de outros golpes, como o cr.MP do Ken. A
        <TextDecoration underline>nova execução seria</TextDecoration>:{" "}
        <TextDecoration bold>cr.MP + LP + LK</TextDecoration>.<br /> Desta
        forma,{" "}
        <TextDecoration underline>
          caso o tech não ocorra, em vez de sair um cr.LP, sairá um cr.MP
        </TextDecoration>
        . Isto é extremamente útil para o Ken, pois o cr.MP é um golpe
        relativamente rápido e que{" "}
        <TextDecoration underline>
          pode levar a confirm se acertar
        </TextDecoration>
        .
      </Text>
      <Move>DED (cr.MK xx SA3)</Move>
      <Text>
        Alguns personagens podem tirar proveito de um exploit chamado “DED” (
        <TextDecoration underline blue>
          o nome parece vir de um jogador de Ken que popularizou a técnica
        </TextDecoration>
        ), que serve como uma espécie de{" "}
        <TextDecoration bold>“auto confirm” baseado na barra</TextDecoration>.
        Quando o Ken ainda não tem nem uma barra de Super completa, mas fica{" "}
        <TextDecoration underline>
          exatamente a um cr.MK de completá-la, ele pode simplesmente fazer
          cr.MK xx SA3
        </TextDecoration>{" "}
        sem medo de soltar o Super na defesa do oponente, pois o{" "}
        <TextDecoration underline>
          Super só sai se o cr.MK acertar
        </TextDecoration>
        . Isto ocorre porque o ganho de barra é maior quando o golpe acerta do
        que quando ele é defendido ou leva parry. O Ken é o personagem que mais
        se beneficia de DED, porque é difícil realmente confirmar o cr.MK em SA
        e, no caso do DED do Ken, não há risco de sair um special indesejado
        (Shoryu) se o cr.MK for defendido, já que o Super é com chute.
      </Text>
      <Text>
        <TextDecoration underline blue>
          Este vídeo antigo, feito pelo jogador C-Royd
        </TextDecoration>
        , explica a técnica e serve como uma boa referência visual para a
        quantidade de barra. Mesmo assim, segue abaixo uma explicação detalhada
        sobre sua utilização.
      </Text>
      <Text>
        Para os jogadores que gostam de números, o ponto certo para o DED de
        cr.MK é quando faltam aproximadamente 10% para completar a{" "}
        <TextDecoration bold>primeira barra</TextDecoration>. Mais precisamente,
        a barra de SA3 do Ken possui 80 pontos no total (ele ganha um Super no
        81º ponto de barra);{" "}
        <TextDecoration bold>
          ele precisa estar com 70 a 74 pontos para ter o DED de cr.MK pronto
        </TextDecoration>{" "}
        (recomenda-se utilizar o
        <TextDecoration underline blue>
          training mode com lua script no Fightcade
        </TextDecoration>{" "}
        para praticar e familiarizar-se com a quantidade correta). A partir
        desse ponto, o Ken não pode encher barra demais;{" "}
        <TextDecoration underline>
          se ela estiver um pouco mais cheia do que deveria (75 ou mais), o DED
          não funcionará
        </TextDecoration>{" "}
        porque o chute completará a barra mesmo se defendido, o que fará com que
        o Super saia na defesa e possa ser punido pelo oponente. E, claro, se
        estiver mais vazia do que isso, o golpe não completará o Super ainda que
        acerte. Por esses motivos,{" "}
        <TextDecoration bold>
          é fundamental ter cuidado com a quantidade de barra
        </TextDecoration>
        ; o jogador precisa saber quando já passou do ponto para não tentar mais
        o DED.
      </Text>
      <Text>
        É possível fazer DED com o cl.HP e com o cr.LK também, obviamente com
        quantidades de barra diferentes. Para o cl.HP, é preciso ter uma barra
        por volta dos 80% (62 a 70 pontos); já para o cr.LK, só pode haver um
        “fio” de espaço entre a barra azul e o fim do medidor (exatamente 79
        pontos). De qualquer forma, o{" "}
        <TextDecoration underline>
          DED de cr.MK é de longe o mais útil e o único realmente importante.
        </TextDecoration>
      </Text>
      <Move>Kara-Shoryuken</Move>
      <Text>
        Kara-cancel é o ato de se cancelar o começo (geralmente o primeiro
        frame) de um golpe normal em um special ou SA.
        <br />O Ken possui um Kara-Shoryuken, ou seja, um kara-cancel que
        envolve o <TextDecoration bold>Shoryuken fraco</TextDecoration>.
      </Text>
      <Text>
        O Kara-Shoryu do Ken serve para encaixar um segundo Shoryu fraco que
        normalmente não seria possível. É mais utilizado no meio da tela, uma
        vez que quase todos os personagens já levam um segundo Shoryu
        normalmente no corner. Mas pode ser feito no corner contra aqueles que
        não levam um segundo Shoryu normal, como Yun, Yang, Oro e Remy.
      </Text>
      <Text>
        O golpe utilizado para o kara-cancel pode ser o cr.MK ou o cr.HK. Após
        um Shoryuken fraco, o Ken deve fazer as motions de um próximo Shoryu,
        <TextDecoration underline>segurar para a diagonal</TextDecoration> e,
        assim que retornar completamente da animação, apertar o MK ou HK e,{" "}
        <TextDecoration underline>imediatamente após</TextDecoration>, o LP, de
        modo que o chute e o soco sejam pressionados quase ao mesmo tempo, mas
        não exatamente. Na realidade, virá o MK/HK e depois o LP, em rápida
        sucessão. Esta técnica para apertar os botões também é conhecida como “
        <TextDecoration bold>P-Link</TextDecoration>” ou “
        <TextDecoration bold>plink</TextDecoration>” e é utilizada para quase
        todos os kara-cancels. A execução ficaria a seguinte (do lado esquerdo),
        com o teclado numérico como referência:{" "}
        <TextDecoration underline>
          623 (segura diagonal) + HK/MK ~ LP
        </TextDecoration>
      </Text>
      <Text>
        Não basta acertar a execução. É necessário fazer tudo no timing correto:
        o chute somente após a animação do primeiro Shoryu e só então o
        restante. Do contrário, o Kara-Shoryu não sairá porque o chute não veio
        no neutro e, portanto, não saiu para efetivamente conceder alcance
        adicional ao Shoryu.
      </Text>
      <Text>
        Se feito corretamente, o Ken conseguirá acertar um Shoryu fraco no chão
        e, em seguida, outro Shoryu fraco, no meio da tela, contra boa parte do
        elenco. Partindo de um <TextDecoration bold>cr.MK</TextDecoration> ou{" "}
        <TextDecoration bold>cl.MP (colados)</TextDecoration>, isto faz
        praticamente o mesmo dano que cr.MK xx SA3, mas sem gastar barra (o Ken
        ganha barra ao invés de gastar). Qualquer Shoryu fraco será muito mais
        perigoso. Mas só funciona se o Ken estiver colado no oponente quando
        fizer o primeiro Shoryu.
      </Text>
      <Text>
        Existem alguns <TextDecoration bold>tutoriais</TextDecoration> sobre o
        Kara-Shoryuken no YouTube.{" "}
        <TextDecoration blue underline>
          Este
        </TextDecoration>
        , do jogador <TextDecoration bold>AC-Slayer</TextDecoration> (postado
        pelo grande colaborador <TextDecoration bold>TheShend</TextDecoration>),
        é provavelmente o mais antigo e um dos mais simples e conhecidos.
        Bastante curto, explica brevemente os requisitos e demonstra
        suficientemente bem a execução.{" "}
        <TextDecoration blue underline>
          Aqui
        </TextDecoration>
        , o famoso jogador americano{" "}
        <TextDecoration bold>Nica K.O</TextDecoration> (um dos mais fortes)
        pratica o Kara-Shoryu e explica por um período mais extenso. Há também
        <TextDecoration underline blue>
          este mais recente
        </TextDecoration>
        , feito pelo jogador Bola385 especialmente para os brasileiros que não
        entendem inglês. Ele utiliza até um método com metrônomo para facilitar
        o timing.
      </Text>
      <Text>
        Abaixo, os personagens que levam Kara-Shoryu no meio da tela e, em
        seguida, aqueles que só são acertados por Kara-Shoryu no corner. As
        listas foram baseadas e adaptadas a partir da listagem do jogador
        americano <TextDecoration bold>Mopreme</TextDecoration>, que pode ser
        encontrada{" "}
        <TextDecoration underline blue>
          aqui
        </TextDecoration>
        .
      </Text>
      <Text>
        <TextDecoration underline>
          A regra é cl.MP/cr.MK (colado) x Shoryu, Kara-Shoryu.
        </TextDecoration>
      </Text>
      <Text>
        <TextDecoration bold>No meio da tela (midscreen)</TextDecoration>: Ryu,
        Ken, Gouki, Chun-Li, Makoto, Necro, Urien, Twelve, Sean.
      </Text>
      <Text>
        A Chun, o Necro, a Makoto e aparentemente o Twelve podem levar
        Kara-Shoryu a partir de{" "}
        <TextDecoration bold>cl.HP x Shoryu</TextDecoration> também, em virtude
        da hurtbox generosa desses personagens.
      </Text>
      <Text>
        <TextDecoration bold>No corner</TextDecoration>: Yun, Yang, Ibuki, Oro,
        Remy, Hugo.
      </Text>
      A Ibuki, o Remy e o Hugo aparentemente podem levar também TC x Shoryu,
      Kara-Shoryu (mais dano); os outros três, somente a regra de cl.MP ou cr.MK
      x Shoryu.
      <Text>Algumas observações:</Text>
      <Text>
        O <TextDecoration bold>Q</TextDecoration> leva TC x Shoryu, Shoryu{" "}
        <TextDecoration underline>
          em qualquer lugar da tela, sem a necessidade de kara
        </TextDecoration>
        .
      </Text>
      <Text>
        O <TextDecoration bold>Dudley</TextDecoration> e o{" "}
        <TextDecoration bold>Alex</TextDecoration>{" "}
        <TextDecoration underline>
          nunca levam um segundo Shoryuken quando pegos no chão.
        </TextDecoration>
      </Text>
      <Text>
        A <TextDecoration bold>Elena</TextDecoration> é listada pelo Mopreme
        como passível de Kara-Shoryu midscreen, mas na realidade parece exigir{" "}
        <TextDecoration underline>
          Shoryu fraco normal (sem kara)
        </TextDecoration>
        , desde que o Ken esteja bem colado ao fazer o primeiro Shoryu. O
        Kara-Shoryu não parece acertar a tempo.
      </Text>
      <Move>Setplay após SA3</Move>
      <Text>
        Varia de acordo com o personagem, mas sempre envolve um{" "}
        <TextDecoration underline>pulo normal ou hi-jump</TextDecoration> que
        costuma ser ambíguo, isto é, difícil de dizer se o Ken cairá na frente
        ou atrás. Isso permite um mix-up forte principalmente entre j.MK que
        acerta pela frente, j.MK que acerta as costas (cross-up), cair direto
        com TC (de qualquer um dos lados), cair direto com low (cr.LK x2 ou
        cr.MK) e cair direto com back throw. O Ken ainda tem boa parte dessas
        opções mesmo que faça o j.MK; neste caso, o j.MK serve pra combo no TC
        ou funciona como tick para as outras opções (back throw, cr.LK x2 etc.).
        Não se recomenda usar o setplay para pescar parry porque o Ken cairá
        colado no oponente.
      </Text>
      <Text>
        Uma observação importante antes da listagem:{" "}
        <TextDecoration bold>
          existe diferença no setplay do Ken entre o Player 1 e o Player 2
        </TextDecoration>
        .{" "}
        <TextDecoration blue underline>
          Este vídeo
        </TextDecoration>{" "}
        do <TextDecoration bold>Nica K.O</TextDecoration> explica bem a
        diferença. Basicamente, se o Ken for o P2, em regra, ele “avança menos”
        e costuma cair na frente mesmo quando o P1 cairia atrás do oponente. Em
        outras palavras, é mais difícil para o P2 inverter os lados. A lista
        abaixo parte da perspectiva do P1. Com alguns ajustes, o P2 também pode
        fazer setplay, mas precisará andar um pouco mais para a frente (ou menos
        para trás) na maioria dos casos.
      </Text>
      <Text>
        Contra Shotos (
        <TextDecoration bold>Ryu, Ken, Gouki, Sean</TextDecoration>) e{" "}
        <TextDecoration bold>Urien</TextDecoration>: far MP (whiff), (micro walk
        para a frente) hi-jump para a frente (j.MK). Sem a micro walk antes do
        hi-jump, o Ken cai na frente; com a micro walk, o Ken cai atrás.
      </Text>
      <Text>
        Contra <TextDecoration underline>Makoto</TextDecoration>: (micro walk
        para trás) brevíssimo delay (só o tempo de ver o Ken no neutro), hi-jump
        para a frente. Sem a micro walk antes do hi-jump, o Ken cai atrás; com a
        micro walk, o Ken cai na frente.
      </Text>
      <Text>
        Contra <TextDecoration bold>Chun-Li</TextDecoration>: dash, cr.MP
        (whiff), micro walk para trás, pulo normal para a frente. Sem a micro
        walk (ou se ela for muito insignificante), o Ken cai atrás; com a micro
        walk, ele cai na frente.
      </Text>
      <Text>
        Vale notar que a Chun-Li possui wake-up normal mais lento do que os
        demais. É por isso que, após{" "}
        <TextDecoration underline>SA3 no corner</TextDecoration> contra ela, há
        tempo suficiente para um{" "}
        <TextDecoration underline>dash antes do taunt</TextDecoration>.
      </Text>
      <Text>
        Contra
        <TextDecoration bold>
          {" "}
          Dudley, Yun, Yang e possivelmente o resto
        </TextDecoration>
        : (micro walk para a frente) hi-jump imediato para a frente (j.MK). Sem
        a micro walk antes do hi-jump, o Ken cai na frente; com o hi-jump, ele
        cai atrás.
      </Text>
      <Text>
        Importante ressaltar que o Dudley possui{" "}
        <TextDecoration underline>reversal Corkscrew Blow (SA3)</TextDecoration>
        que pode anular o setplay acima com auto correct às vezes, o que
        significa que{" "}
        <TextDecoration bold>
          não importa de que lado o Ken vai cair, ele pode levar a SA se ainda
          estiver no ar
        </TextDecoration>
        . Por isso, contra o Dudley, recomenda-se apenas um{" "}
        <TextDecoration underline>
          hi-jump imediato (sem micro walk) para cair sempre pela frente,
          defender brevemente (enquanto ele se levanta) e escolher entre back
          throw e tentativa de confirm.
        </TextDecoration>
      </Text>
      <Text>
        Alternativamente, contra{" "}
        <TextDecoration bold>Yun e Yang</TextDecoration>, o Ken pode
        simplesmente fazer
        <TextDecoration underline>
          hi-jump para a frente e escolher se faz Tatsumaki aéreo perto do chão.
        </TextDecoration>
        Sem o Tatsumaki aéreo (empty jump), ele cai na frente; com o Tatsumaki,
        ele cai atrás.
      </Text>
      <Text>
        Vale notar que esses mesmos personagens (Dudley, Yun, Yang) possuem
        wake-up mais rápido do que a maioria. É por isso que,{" "}
        <TextDecoration underline>após SA3 no corner</TextDecoration>
        contra eles, é melhor{" "}
        <TextDecoration bold>não fazer taunt</TextDecoration>.
      </Text>
      <Move>Kara-back throw</Move>
      <Text>
        O Ken não possui kara-throw muito forte como a Chun-Li, o Q, o Remy etc.
        Dito isso, o back throw dele é de longe o melhor do jogo, por causa do
        corner carry enorme: ele quase sempre joga o oponente direto para o
        corner, independentemente de onde estiver. Por esse motivo e para
        garantir esse back throw, jogadores de elite fazem kara-back throw de
        Ken em alguns casos, principalmente após ticks e{" "}
        <TextDecoration underline>
          após pescar parry de perto (sem estar colado)
        </TextDecoration>
        . Pode ser a diferença entre acertar e errar o back throw após um tick
        no meio da tela.
      </Text>
      <Text>
        O kara-back throw do Ken é realizado com{" "}
        <TextDecoration bold>4MK</TextDecoration> (o chute overhead). Importante
        observar que o kara-throw{" "}
        <TextDecoration underline>ainda exige micro walk antes</TextDecoration>.
      </Text>
      <Text>
        Logo, os inputs seriam:{" "}
        <TextDecoration bold>
          micro walk para a frente, trás + MK ~ LP + LK.
        </TextDecoration>{" "}
        O jogador deve ser rápido para andar para a frente, apertar rapidamente
        para trás e só então executar o kara-throw.
      </Text>
      <Text>
        Obviamente, o kara-back throw não é necessário quando o Ken faz um dash
        antes do throw e fica colado. Em geral, se a intenção for dash throw, é
        melhor calcular o dash para que o throw sempre acerte normalmente.
      </Text>
      <Header level={1} id="MU">
        Matchups
      </Header>
      <Move src={chunStance}>Chun-Li</Move>
      <Text>
        Provavelmente a matchup mais difícil do Ken e de muitos outros
        personagens.{" "}
        <TextDecoration underline>
          A Chun-Li tende a vencer os footsies
        </TextDecoration>{" "}
        por causa do cr.MK dela, que é muito rápido, difícil de punir e confirma
        Super. Se o Ken fizer muitos whiffs de cr.MK, ela pode punir com st.HP e
        encher barra rapidamente, o que só piora a situação.
      </Text>
      <Text>
        <TextDecoration bold>
          Recomenda-se um jogo mais agressivo enquanto ela ainda não tem barra
        </TextDecoration>
        , para aproveitar a falta de punições pesadas. O Ken deve encontrar uma
        abertura no neutro, por meio de golpes como st.HK e cr.HK (se for
        defendido na ponta, ela não pune sem SA) e de bons pulos com j.HK
        afastado ou j.MK de cross-up. A ideia é conseguir uma vantagem e{" "}
        <TextDecoration underline>jogá-la logo para o corner</TextDecoration>{" "}
        (com back throw) para pressioná-la antes que ela consiga controlar o
        jogo. Enquanto ela não tiver Super, o Ken pode até arriscar mais cr.MK x
        Shoryu no corner, já que a recompensa é altíssima. Além disso, é melhor
        fazer{" "}
        <TextDecoration underline>
          parry alto no corner contra ela
        </TextDecoration>
        , porque as duas principais respostas dela (cr.LP e cl.HK) levam parry
        alto.
      </Text>
      <Text>
        <TextDecoration bold>
          Quando ela enche a barra de Super, o jogo muda completamente
        </TextDecoration>
        . Todo cuidado é pouco.{" "}
        <TextDecoration underline>
          Não é bom responder com cr.MP sob pressão
        </TextDecoration>{" "}
        porque o cr.MK dela vence esse golpe com alcance maior. O Ken precisará
        tentar vencer o cr.MK da Chun-Li no neutro com{" "}
        <TextDecoration underline>cr.MK de whiff</TextDecoration> punish
        (difícil de fazer na reação) ou{" "}
        <TextDecoration underline>parry guard</TextDecoration> (parry seguido de
        defesa). No caso de acertar o parry no cr.MK dela, existe uma técnica
        avançada de atrasar levemente a punição (cr.MK) de modo que, se a
        Chun-Li cancelar em Super, este será defendido porque o golpe do Ken
        ainda não saiu.{" "}
        <TextDecoration underline>
          Backstep é essencial contra Chun-Li
        </TextDecoration>{" "}
        para contornar e punir o kara-throw e os golpes fortes dela (far HK/6HK
        e 4HP) com cr.MK xx SA3.
      </Text>
      <Move src={dudleyStance}>Dudley</Move>
      <Text>
        Outra matchup difícil para o Ken, apesar de mais ou menos equilibrada.
        <TextDecoration underline>
          Mesmo sem barra, a recompensa do Dudley é geralmente maior
        </TextDecoration>{" "}
        se acertar qualquer coisa. Some-se a isso o fato de que o Dudley tem
        bastante vida, ótimos golpes para disputar no chão, um dos melhores
        jump-ins do jogo e nunca leva o combo de Shoryu fraco x2 se pego no
        chão, o que significa que ele estará recebendo menos dano do Ken se
        comparado a outros personagens.
      </Text>
      <Text>
        <TextDecoration bold>
          Recomenda-se um jogo cauteloso no chão
        </TextDecoration>
        , a fim de evitar as principais forças do Dudley, quais sejam: o st.HK
        (x EX MGB), o cr.HK (“Kanipan”) e o jump-in dele. Um posicionamento que
        costuma funcionar bem é{" "}
        <TextDecoration underline>
          em torno do alcance máximo do cr.MK
        </TextDecoration>
        , para incomodar o Dudley com esse golpe e forçá-lo a pular (evitando 2
        das 3 forças); quando ele começar a pular por cima, o Ken precisa estar
        preparado para responder de alguma forma; além do Shoryuken,{" "}
        <TextDecoration underline>
          o cr.HP e o far HP funcionam muito bem como anti-air preventivos
          contra o Dudley
        </TextDecoration>{" "}
        porque podem tirar tanto o começo do pulo quanto do Kanipan. E ainda
        pode optar por um air-to-air (j.HK) porque, mesmo que perca, não sofrerá
        combo no chão. Só não pode deixar o jump-in passar toda vez, porque o
        Dudley ganha pressão forte com o 50/50 dele. Excepcionalmente{" "}
        <TextDecoration underline>
          nesta matchup, o Tatsu terrestre do Ken tem utilidade
        </TextDecoration>
        : o fraco pode vir cancelado de TC ou cr.MK de perto só para encher
        barra de graça, enquanto a{" "}
        <TextDecoration underline>
          versão EX é boa cancelada do cr.MK em buffers e punições para sair do
          corner sem gastar Super
        </TextDecoration>
        .
      </Text>
      <Text>
        <TextDecoration underline>
          Depois de conseguir vantagem no corner, o Ken pode pressionar mais
        </TextDecoration>
        . Isto porque, apesar de ter alguns golpes rápidos para revidar, o
        Dudley sofre mais na defesa se não tiver espaço para fazê-los. O Ken
        pode ameaçar mais com throws e tentativas de confirm (TC/cr.LK x2), ou
        atacar com cr.MP ou far MP no máximo alcance destes golpes (após um leve
        atraso se estiver preocupado com reversal do Dudley). EX Tatsu aéreo de
        cross-up com o Dudley no corner também pode irritá-lo, mas é melhor só
        fazer isso se realmente for necessário, senão o Ken arrisca ficar no
        corner e ter que lutar para sair de lá.
      </Text>
      <Move src={makotoStance}>Makoto</Move>
      <Text>
        Uma personagem que costuma infernizar os jogadores iniciantes. Porém, o
        Ken tem vantagem nesta matchup. Isto porque o{" "}
        <TextDecoration bold>
          cr.MP e o cr.LK dele atrapalham bastante o dash da Makoto
        </TextDecoration>
        , que é uma das suas maiores forças. É importante fazer estes golpes
        preventivamente para cortar os dashes. Sem conseguir dash e sem
        conseguir abusar de golpes contra o Ken, ela terá mais dificuldade e
        buscará outras respostas que o Ken também pode vencer.
      </Text>
      <Text>
        <TextDecoration bold>
          Por isso, o foco está em anular o dash da Makoto
        </TextDecoration>{" "}
        e forçá-la a tentar o 6HP dela ou pular. Se ela começar a fazer o 6HP,
        arrisca levar um jump-in por cima, ou Shoryu fraco na reação (avançado).
        Se ela pular,{" "}
        <TextDecoration underline>
          o Ken tem boas respostas com Shoryuken, air-to-air, dash por baixo ou
          até parry seguido de guard
        </TextDecoration>{" "}
        (defesa) para lidar com o j.MK dela e o Tsurugi ao mesmo tempo (parry
        pega o j.MK e permite cr.MK xx SA, enquanto a defesa logo após protege
        contra o Tsurugi).
      </Text>
      <Text>
        Ademais,{" "}
        <TextDecoration underline>
          depois que o Ken consegue vantagem no corner, não tem tanta
          dificuldade em pressionar a Makoto
        </TextDecoration>
        . Basta cuidar com parries em Karakusa e o eventual dash throw que ela
        deve tentar quando achar uma brecha. O jogo defensivo da Makoto não é
        muito forte, ainda mais se não tiver SA2 para matar com uma boa leitura.
      </Text>
      <Text>
        <TextDecoration underline>
          O perigo está em deixar a Makoto entrar com facilidade
        </TextDecoration>
        , porque a ofensiva dela ainda é muito forte com o Karakusa e outros
        golpes. Se o Ken cair em desvantagem, precisará escapar com uma boa
        defesa (guard jump ou parry), para não contar somente com o Shoryuken.
      </Text>
      <Header level={1} id="topPlayers">
        Top Players
      </Header>
      <Move src={deshiken}>Deshiken (弟子犬)</Move>
      <Text>
        Incontestavelmente{" "}
        <TextDecoration underline>
          o melhor jogador de Ken da história
        </TextDecoration>{" "}
        e o jogador mais forte que continua ativo. Embora tenha demorado mais do
        que o famoso Daigo Umehara a ficar conhecido no ocidente, Deshiken{" "}
        <TextDecoration underline blue>
          joga desde o começo do cenário competitivo e já se destacava nos
          grandes eventos
        </TextDecoration>
        , com um número expressivo de vitórias notáveis.
      </Text>
      <Text>
        É conhecido pela cor verde, por jogadas{" "}
        <TextDecoration bold>rápidas e sofisticadas</TextDecoration>, como whiff
        punishes de SA3 pura, e pela consistência em Kara-Shoryu. Embora seja o
        Ken mais forte, Deshiken não é recomendado como{" "}
        <TextDecoration bold>referência para iniciantes</TextDecoration>, em
        razão de seu{" "}
        <TextDecoration underline>estilo muito agressivo</TextDecoration> e
        jogadas muito difíceis de se replicar, que exigem reação e execução
        afiadas.
      </Text>
      <Text>
        O canal <TextDecoration bold>Feetwork 101</TextDecoration> fez uma série
        de vídeos, chamados de “Film Rooms”, para explicar melhor a mentalidade
        de alguns top players;{" "}
        <TextDecoration underline blue>
          neste aqui
        </TextDecoration>
        , analisa as jogadas do Deshiken.
      </Text>
      <Text>
        Possui os melhores resultados em sets e torneios nos últimos anos,
        apesar de viver longe dos maiores arcades. Venceu, entre outros, os
        jogadores de elite{" "}
        <TextDecoration underline blue>
          K.O (YA)
        </TextDecoration>
        ,{" "}
        <TextDecoration underline blue>
          Kokujin (DU)
        </TextDecoration>{" "}
        e{" "}
        <TextDecoration underline blue>
          Mimora (MA)
        </TextDecoration>{" "}
        em FT10, bem como os lendários{" "}
        <TextDecoration underline blue>
          Kuroda (KE)
        </TextDecoration>
        , em FT5, e{" "}
        <TextDecoration underline blue>
          Boss (KE)
        </TextDecoration>
        , em FT20.
      </Text>
      <Text>
        Em um evento Random 3v3 postado em 3 partes (os jogadores aleatoriamente
        formavam trios e se enfrentavam), agraciado com a participação dos
        gigantes{" "}
        <TextDecoration underline>
          Kuroda (Q/HU), RX (UR), Boss (KE/YU/CH), MOV (CH), Match (GO) e Vanao
          (RY)
        </TextDecoration>
        , o Deshiken teve o que pode ser considerado o melhor resultado final,
        com <TextDecoration underline>17 vitórias e 6 derrotas</TextDecoration>.
      </Text>
      <Text>
        Deshiken afastou-se do jogo por um tempo, com a aparente ambição de
        tornar-se jogador competitivo de Street Fighter 5, mas eventualmente
        retornou ao 3rd Strike (durante a pandemia do COVID-19) e desde então
        permanece{" "}
        <TextDecoration underline blue>
          ativo nas streams do canal Inoculture
        </TextDecoration>
        , onde enfrenta (e geralmente vence) jogadores muito fortes, como{" "}
        <TextDecoration underline blue>
          Ushi!? (YU)
        </TextDecoration>
        , <TextDecoration underline>RB (UR)</TextDecoration>,
        <TextDecoration underline>Ikego (EL)</TextDecoration>,{" "}
        <TextDecoration underline>Yuri (YA)</TextDecoration> e o{" "}
        <TextDecoration underline blue>
          próprio Inoue (OR)
        </TextDecoration>
        . Em transmissões recentes do canal, venceu alguns dos jogadores mais
        fortes da atualidade, como o
        <TextDecoration underline blue>
          Chance (MA)
        </TextDecoration>
        , o{" "}
        <TextDecoration underline blue>
          Michael-tan (CH)
        </TextDecoration>{" "}
        e o{" "}
        <TextDecoration underline blue>
          SHO (YU)
        </TextDecoration>
        .
      </Text>
      <Move src={matsuken}>Matsuken (マツケン)</Move>
      <Text>
        Muito provavelmente{" "}
        <TextDecoration underline>
          o segundo melhor Ken main da história
        </TextDecoration>
        . “O Ken que espera”, Matsuken é conhecido pela cor azul e pelo{" "}
        <TextDecoration bold>estilo paciente e defensivo</TextDecoration>,
        sempre em busca de estar um pouco longe demais para ser pego pelas
        opções do adversário. Utiliza muito bem o posicionamento para encaixar
        confirms de cr.MP de max range.{" "}
        <TextDecoration bold>
          É recomendado como referência para iniciantes
        </TextDecoration>{" "}
        pelo jogo mais{" "}
        <TextDecoration underline>
          seguro, simples e fundamentado (sólido)
        </TextDecoration>
        , sem jogadas muito arriscadas. Infelizmente, não tem aparecido em
        vídeos recentes e parece ter abandonado o jogo, mas deixou seu legado
        para os futuros jogadores de Ken.
      </Text>
      <Text>
        Entre seus resultados notáveis, estão as vitórias em FT10 contra o
        fortíssimo{" "}
        <TextDecoration underline blue>
          Nitto (YU)
        </TextDecoration>
        , o famoso{" "}
        <TextDecoration underline blue>
          Sugiyama (NE)
        </TextDecoration>
        , o sólido <TextDecoration underline>Higa (IB)</TextDecoration> (parte
        <TextDecoration underline blue>
          1
        </TextDecoration>{" "}
        e{" "}
        <TextDecoration underline blue>
          2
        </TextDecoration>
        ) e um set extremamente unilateral contra o{" "}
        <TextDecoration underline blue>
          TM (Q)
        </TextDecoration>
        . Também teve uma FT10 acirrada contra o lendário{" "}
        <TextDecoration underline blue>
          Kuroda (KE)
        </TextDecoration>
        .
      </Text>
      <Text>
        Em um evento{" "}
        <TextDecoration underline blue>
          Random 3v3
        </TextDecoration>{" "}
        (os jogadores aleatoriamente formavam trios e se enfrentavam), que
        contou com a presença dos jogadores de elite{" "}
        <TextDecoration underline>
          Kuroda (YA), RB (UR), Genki (AL), Higa (IB) e Shinta (YU)
        </TextDecoration>
        , o Matsuken teve um desempenho ímpar:{" "}
        <TextDecoration underline>
          venceu 12 partidas no total e perdeu apenas uma
        </TextDecoration>
        (contra o Dudley do Genki), o que lhe rendeu o comentário “o Matsuken
        não perde” (“Matsuken-san makenai desu ne”).
      </Text>
      Ainda, tinha bons resultados nos torneios de SBO e 3rd MANIAX e, nos
      Danisen,{" "}
      <TextDecoration underline blue>
        garantiu sua colocação entre os primeiros da primeira lista
      </TextDecoration>{" "}
      e foi o{" "}
      <TextDecoration underline blue>
        segundo colocado da segunda lista
      </TextDecoration>
      , atrás somente do Tominaga.
      <Move src={deshiken}>Boss (ボス)</Move>
      <Text>
        Um dos melhores jogadores em geral, extremamente forte com vários
        personagens, Boss tem no Ken talvez o seu personagem mais forte
        (juntamente com o Yun). Recomendado como referência pelo seu jogo
        relativamente simples e efetivo, porém{" "}
        <TextDecoration underline>
          mais agressivo do que o do Matsuken
        </TextDecoration>
        , com a ressalva de que realiza{" "}
        <TextDecoration underline>
          algumas jogadas um pouco mais arriscadas
        </TextDecoration>
        . Por esse motivo, pode ser visto como um meio-termo entre os outros
        dois jogadores.
      </Text>
      <Text>
        Boss é pelo menos tão forte quanto o Matsuken, pois conseguiu jogar uma
        FT5 muito equilibrada contra o{" "}
        <TextDecoration underline blue>
          Deshiken (KE)
        </TextDecoration>{" "}
        antes de perder a FT20 subsequente. Também teve FT10 bem unilaterais
        contra o{" "}
        <TextDecoration underline blue>
          Mester (YU)
        </TextDecoration>{" "}
        e o
        <TextDecoration underline blue>
          Uraken (GO)
        </TextDecoration>
        , venceu convincentemente o{" "}
        <TextDecoration underline blue>
          Raoh (CH)
        </TextDecoration>{" "}
        e venceu o{" "}
        <TextDecoration underline blue>
          Hirai (KE)
        </TextDecoration>
        .
      </Text>
      <Text>
        Mais recentemente, venceu o{" "}
        <TextDecoration underline blue>
          Heboryu (KE)
        </TextDecoration>{" "}
        em FT10 com facilidade, saiu na vantagem durante um set casual contra o{" "}
        <TextDecoration underline blue>
          Yomoda (DU)
        </TextDecoration>
        , estava vencendo o
        <TextDecoration underline blue>
          Kuni (RY)
        </TextDecoration>{" "}
        antes de curiosamente resetar a máquina e sair do set sem finalizá-lo e
        deu trabalho para o{" "}
        <TextDecoration underline blue>
          SHO (YU)
        </TextDecoration>{" "}
        em uma FT10.
      </Text>
      <Move>Outros</Move>
      <Text>
        <TextDecoration bold>Kuroda (クロダ)</TextDecoration> é uma lenda no
        jogo com quase todos os personagens, não sendo o Ken uma exceção; teve
        um bom set contra o{" "}
        <TextDecoration underline blue>
          Deshiken (KE)
        </TextDecoration>{" "}
        e venceu o{" "}
        <TextDecoration underline blue>
          Matsuken (KE)
        </TextDecoration>{" "}
        em FT10 (de 3 rounds cada partida).
      </Text>
      <Text>
        <TextDecoration bold>Shie (しえ)</TextDecoration> e{" "}
        <TextDecoration bold>Kashi (かし)</TextDecoration> são outros jogadores
        extremamente fortes, mas não têm aparecido com muita frequência; o Shie
        venceu uma FT10 contra o
        <TextDecoration underline blue>
          Hayao (HU)
        </TextDecoration>{" "}
        anos atrás e garantiu{" "}
        <TextDecoration underline>OCV contra um quinteto de Yun</TextDecoration>{" "}
        de elite durante a Pré-Coop Cup 2019, enquanto o Kashi teve ótimos sets
        contra o<TextDecoration underline>Tominaga (MA)</TextDecoration> e o{" "}
        <TextDecoration underline>Shinobu (UR)</TextDecoration>.
      </Text>
      <Text>
        <TextDecoration bold>Mabodofu (マーボードーフ)</TextDecoration> teve
        sets acirrados em FT10 contra o Yone (YU)
        <TextDecoration underline blue>
          duas vezes
        </TextDecoration>
        , o{" "}
        <TextDecoration underline blue>
          Shino (MA)
        </TextDecoration>
        , o{" "}
        <TextDecoration underline blue>
          Mimora (MA)
        </TextDecoration>{" "}
        e o{" "}
        <TextDecoration underline blue>
          Dudleyman (DU)
        </TextDecoration>
        .
      </Text>
      <Text>
        <TextDecoration bold>Heboryu (へぼりう)</TextDecoration> tem alguns
        resultados notáveis: já venceu convincentemente o{" "}
        <TextDecoration underline blue>
          Misawa (KE)
        </TextDecoration>{" "}
        e o{" "}
        <TextDecoration underline blue>
          Decoy (GO)
        </TextDecoration>{" "}
        em FT10, não foi mal contra o{" "}
        <TextDecoration underline blue>
          Kuni (RY)
        </TextDecoration>
        , deu algum trabalho para o{" "}
        <TextDecoration underline blue>
          Tominaga (MA)
        </TextDecoration>{" "}
        em set casual e, mais recentemente, deu trabalho para o{" "}
        <TextDecoration underline blue>
          Yakkun (YU)
        </TextDecoration>{" "}
        em set curto.
      </Text>
      <Text>
        <TextDecoration bold>Misawa (ミサワ)</TextDecoration> é um Ken que
        apareceu mais nos últimos anos; venceu o
        <TextDecoration underline blue>
          Match (GO)
        </TextDecoration>{" "}
        e o{" "}
        <TextDecoration underline blue>
          Tokura (YA)
        </TextDecoration>{" "}
        em FT10.
      </Text>
      <Text>
        <TextDecoration bold>Shigeki (しげき)</TextDecoration> e{" "}
        <TextDecoration bold>Shinta (しんた)</TextDecoration> são bons jogadores
        de Ken que já fizeram OCV contra times de elite; o Shigeki venceu um
        time que contava com{" "}
        <TextDecoration underline blue>
          Dudleyman (DU) e Ruu (UR)
        </TextDecoration>
        , já o Shinta venceu um time que incluía
        <TextDecoration underline blue>
          YSB (HU) e Kuni (RY)
        </TextDecoration>
        .
      </Text>
      <Text>
        <TextDecoration bold>Hirai (平井)</TextDecoration> é um jogador veterano
        que não foi mal contra o{" "}
        <TextDecoration underline blue>
          Boss (KE)
        </TextDecoration>{" "}
        em FT10 nem contra o{" "}
        <TextDecoration underline blue>
          Tominaga (MA)
        </TextDecoration>
        , mas parece não jogar mais.
      </Text>
    </Article>
  );
};
