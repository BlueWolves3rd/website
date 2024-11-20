const Question = ({
  children,
  number,
}: {
  children: string;
  number: string;
}) => {
  return (
    <div className="z-0">
      <h2 className="text-white text-2xl ">{`#${number}: ${children}`}</h2>
    </div>
  );
};

const Response = ({
  children,
}: {
  children: Array<JSX.Element> | JSX.Element;
}) => {
  return (
    <div className="bg-white p-5 text-xl flex flex-col gap-3 z-0">
      {children}
    </div>
  );
};

export const Faq = () => {
  return (
    <div className="w-screen min-h-screen font-metropolis-semibold">
      <div className="mx-96 mt-12 mb-12 flex flex-col gap-8">
        <h2 className="text-white text-5xl font-metropolis">
          FAQ - Perguntas Frequentes
        </h2>
        <h3 className="text-white text-2xl font-metropolis">
          Seguem algumas perguntas frequentes que recebemos. Elas foram pensadas
          e respondidas sem nenhuma ordem em específico.
        </h3>
        <Question number={"01"}>
          Por que o nome do site/grupo é Blue Wolves?
        </Question>
        <Response>
          <p>
            A temática foi (roubada) inspirada num jogo de cartas chamado
            Monster Rancher: Battle Card Episode 2 do Playstation 1. Nesse jogo,
            existem grupos de jogadores. Grupo dos músicos, grupo dos dragões,
            enfim. Blue Wolves é o grupo dos jogadores mais suspeitos.
            Trapaceiros, mentirosos, irritados e abusam de certos detalhes ou
            acordos menos desejáveis.
          </p>
          <p>Por óbvio, o nosso Blue Wolves é bem mais adequado.</p>
        </Response>

        <Question number={"02"}>
          Por que jogar 3rd Strike? Esse jogo sequer é balanceado?
        </Question>

        <Response>
          <p>
            De todos os jogos de luta, 3rd Strike é um dos mais interessantes
            porque nenhuma opção é invencível. Cada movimento tem resposta então
            muito cai nas escolhas, reações e inteligências do jogador.
          </p>

          <p>
            Isso fica cada vez mais complexo com a mecânica de parry, que
            permite vencer opções que geralmente seriam bem mais difíceis de
            lidar.
          </p>

          <p>
            Por essa pluralidade de escolhas, também há abertura para vários
            estilos de jogar com os mesmos personagens, uma grande expressão do
            jogador.
          </p>

          <p>
            3rd Strike possui personagens bem fortes em comparações aos outros,
            mas há mecânicas do jogo (que incluem alguns bugs, não vamos negar)
            que fazem essa força de personagem ser bem menos relevante que a
            força do jogador. O jogo possui uma das cenas competitivas mais
            notórias dos jogos de luta e apesar de todo problema no lançamento,
            sobreviveu o teste do tempo.
          </p>

          <p>Por isso, adoramos o jogo e achamos "balanceado" nesse sentido.</p>
        </Response>

        <Question number={"03"}>
          Pra que serve cada parte do site? Não consegui me localizar direito.
        </Question>

        <Response>
          <p>
            Na tela inicial, a seleção de personagens levará para os guias do
            Riddler. Feitos pelo melhor jogador da América Latina, eles serão
            essenciais para o aprendizado no jogo.
          </p>

          <p>
            Abaixo, mais conteúdo do jogo: Guias/Textos produzidos pelo
            Scarecrow, outro jogador notório e dono/líder do BW, outros
            conteúdos e recursos do jogo produzidos pelo Blue Wolves, como tier
            lists e match-up charts, e por fim, conteúdo externo, NÃO produzido
            pelo Blue Wolves, mas que certamente será útil para o aprendizado
            alheio.
          </p>

          <p>
            No header, acima, há um link que leva diretamente de volta para a
            página inicial e algumas páginas para apresentar o Blue Wolves, como
            essa própria página de perguntas frequentes.
          </p>
        </Response>

        <Question number={"04"}>
          Jogos mais recentes não dão mais dinheiro? Qual o lucro ao jogar 3S?
        </Question>

        <Response>
          <p>
            Nenhum de nós está realmente jogando esse jogo para fins lucrativos.
            Em tempo recente, o Blue Wolves começou a aceitar doações, mas houve
            muita resistência para sequer permitir isso. Monetizar projetos
            passionais acaba complicando bastante as coisas e, na prática,
            amamos o jogo, jogamos e produzimos conteúdo pelo amor ao jogo e
            qualquer lucro é descartável ou, ao menos, altamente secundário.
          </p>
        </Response>

        <Question number={"05"}>
          De onde vocês tiram essas informações? Quais são as fontes usadas?
        </Question>

        <Response>
          <p>
            Tiramos principalmente do Riddler e do Scarecrow que, por sua vez,
            se baseiam em décadas de experiência no jogo, no conteúdo disponível
            dos japoneses, nos torneios japoneses e assim por diante.
          </p>
        </Response>

        <Question number={"06"}>Como instalar e jogar 3rd Strike?</Question>

        <Response>
          <p>
            Existem algumas formas de jogar 3rd Strike online, mas usamos a
            plataforma Fightcade 2 para tal. No Youtube, existem guias para a
            instalação e configuração do Fightcade 2.
          </p>
        </Response>

        <Question number={"07"}>
          Quero participar do grupo! Como proceder?
        </Question>

        <Response>
          <p>Entre em contato; Use a página de 'Contato'.</p>
        </Response>

        <Question number={"08"}>
          É fácil de aprender? Quanto tempo vou demorar pra ser bom?
        </Question>

        <Response>
          <p>
            3rd Strike é um jogo complicado. Jogos de luta por si só tendem a
            serem mais difíceis de aprender e, pela pluralidade de opções e
            mecânicas, 3S não está entre os mais simples dentre eles.
          </p>

          <p>
            Cada jogador é diferente e aprende em velocidade diferente, mas os
            mais talentosos chegaram no alto nível em 1~2 anos de jogatina.
          </p>
        </Response>

        <Question number={"09"}>
          Não quero aprender o jogo! Só quero jogar casualmente!
        </Question>

        <Response>
          <p>
            Sinta-selivre! Não há método errado de jogar um jogo contanto que
            você se divirta, mas 3rd Strike tende a ser mais divertido quando
            vencemos e
          </p>

          <p>"O caminho da virtude é o mesmo da felicidade" – Aristóteles</p>
        </Response>
        <Question number={"10"}>
          Eu discordo de algo daqui! O que fazer?
        </Question>

        <Response>
          <p>
            Sinta-se livre para fazer uma pesquisa diversa e tentar fundamentar
            um contra-argumento. Apesar disso, com as décadas desde o lançamento
            do jogo, muita coisa já é consolidada e há pouca margem para erro ou
            debate.
          </p>
        </Response>

        <Question number={"11"}>
          Esses papos de "match-ups" e "tier lists" não importam. Não é tudo
          baseado em habilidade?
        </Question>

        <Response>
          <p>
            Habilidade tem maior peso no jogo, mas não é o único fator. O
            esforço e recursos dos personagens são diferentes e tier lists,
            match-up charts e semelhantes ajudam a entender o jogo melhor para
            buscar resultados mais positivos.
          </p>

          <p>
            Dito isso, é bem teórico. Esses recursos sempre assumem que os dois
            jogadores terão a exata mesma habilidade e isso é impossível.
            Existem vários fatores no jogo. É útil compreender o jogo mais e
            tentar explorar esse aspecto, mas sinta-se livre para levar com uma
            pitada de sal.
          </p>
        </Response>

        <Question number={"12"}>
          As artes presentes no site foram produzidas por vocês?
        </Question>

        <Response>
          <p>
            Parte foi comissionado para uso no site. Parte é de autoria alheia e
            os créditos são dos respectivos autores e donos (como o Motoki
            Yoshihara).
          </p>
        </Response>

        <Question number={"13"}>
          Posso usar o conteúdo aqui de referência?
        </Question>

        <Response>
          <p>Por favor! Só lembre-se de tentar dar crédito.</p>
        </Response>
      </div>
    </div>
  );
};
