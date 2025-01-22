import { Article, Header, Text } from "../../components/article.tsx";
export const NocoesIniciais = () => {
  const navSidebarList = [
    { href: "#nocoes", label: "Noções Iniciais" },
    { href: "#movimentacao", label: "Movimentação" },
    { href: "#punicoes", label: "Punições e Defesa" },
  ];
  return (
    <div>
      <Article navSidebarList={navSidebarList}>
        <Header level={1} id="nocoes">
          NOÇÕES INICIAIS
        </Header>
        <Text>
          Você começou a jogar 3rd Strike! Parabéns! Bem-vindo ao jogo. É um dos
          melhores jogos de luta da história e ainda recebe amor dos fãs mesmo
          após anos de seu lançamento.
        </Text>
        <Text>
          Dito isso, melhorar nesse jogo é uma tarefa difícil. Até mais difícil
          do que outros jogos de luta. Então, nesse guia e nos próximos, estarão
          alguns pontos e pensamentos para facilitar esse processo de
          aprendizado!
        </Text>
        <Header level={1} id="movimentacao">
          MOVIMENTAÇÃO
        </Header>
        <Text>
          {" "}
          Antes de apertar qualquer botão, você vai ter de se posicionar com o
          seu personagem. Pulos e dashes são tentadores, mas ambos tem um risco:
          Você não pode defender durante a duração dos mesmos. Por isso,
          caminhar lentamente e ir defendendo quando entrar/sair de range do
          oponente é importante.
        </Text>
        <Text>
          Um grande ponto do jogo é apenas em se posicionar. Seu objetivo é
          andar, entrar no alcance do seu golpe e apertá-lo no oponente, ao
          invés de jogar o golpe no vento. Isso porque cada golpe também possui
          um risco onde um golpe oponente logo após pode bater no seu botão e
          vencer.{" "}
        </Text>
        <Text>
          Por isso, frequentemente, você verá jogadores de todos os níveis
          tentando entrar e sair do alcance para fazer ele errar botões e
          acertar seu próprio.
        </Text>
        <Text>
          Esse processo de se posicionar pelo chão e tentar achar a range dos
          seus botões se chama "footsies" e bater num botão errado do oponente
          se chama "whiff punish".
        </Text>
        <Text>
          São dois pilares bem importantes de todos os jogos de luta e são muito
          frequentes em 3rd Strike!
        </Text>
        <Header level={1} id="punicoes">
          PUNIÇÕES E DEFESA
        </Header>
        <Text>
          3rd Strike é um jogo com amplo foco na defesa e nas reações do
          jogador. É mais lento e pesado que outros jogos de luta e com a adição
          do parry, quase tudo tem uma solução defensiva. É hábito de jogadores
          iniciantes, acostumados com outros jogos de luta, levantarem (wake-up)
          com golpes especiais ou jogarem muitos golpes especiais na defesa do
          oponente.
        </Text>
        <Text>
          A questão é que, em 3rd Strike, se não usar esses golpes de maneira
          inteligente, o jogador mais experiente vai meramente defender,
          deixando o usuário em TREMENDA DESVANTAGEM.
        </Text>
        <Text>
          Por isso, tome muito cuidado ao usar especiais de forma aleatória. Um
          dos grandes pontos do jogo é justamente defender esses riscos do
          oponente e bater no oponente nesses momentos de desvantagem,
          aproveitando a chance que o erro adversário permitiu.
        </Text>
        <Text>
          Além disso, sempre tente levantar e defender abaixado por uns 3
          segundos para garantir que não levará um ataque imediato. Após se
          acostumar com a ideia de que terá de defender bastante, o jogador
          achará mais brechas no ataque inimigo, permitindo mais punições.
        </Text>
      </Article>
    </div>
  );
};
