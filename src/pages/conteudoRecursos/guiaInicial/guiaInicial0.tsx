import {
    Article,
    Header,
    Text,
    Move,
    TextDecoration,
} from "@/components/article.tsx";
import { ContainerResposta, Questao, QuizMain, Resposta, RespostaButton, Titulo } from "./quizMain";
import { BotaoPaginacao } from "@/components/botaoPaginacao";
import mapBrasil from "@/assets/map-brasil.png";
import mapWorld from "@/assets/mapWorld.png"
import matsukenApontando from "@/assets/guiaInicial/matsukenApontando-guia0.jpg";

export const GuiaIncial0 = () => {
    const navSidebarList = [
        { href: "#guiaIncial0", label: "Guia Inicial - Parte 0" },
        { href: "#escolherUmMain", label: "Escolher um Main" },
        { href: "#pedirFeedback", label: "Pedir Feedback" },
        { href: "#counterplay", label: "Counterplay" },
        { href: "#passoAcima", label: "Passo Acima" },

    ];

    return (
        <Article navSidebarList={navSidebarList}>
            <Header level={1} id="guiaIncial0">
                GUIA INICIAL - PARTE 0
            </Header>
            <Titulo>
                PRÉ-DISPOSIÇÕES
            </Titulo>
            <Text>
                Antes mesmo de começar a jogar, existem noções importantes para os jogadores de 3rd Strike que serão úteis para o aprendizado.
                Essas disposições “mentais”, menos práticas, ajudarão no processo de melhora e são tão importantes quanto o aprendizado direto.
            </Text>
            <Text>
                Caso o jogador não conheça algum termo, recomenda-se o uso do site
                <TextDecoration underline blue href="https://glossary.infil.net/">
                    Fighting Game Glossary
                </TextDecoration>{" "}, um verdadeiro dicionário sobre termos de jogos de luta.
                Lá, o leitor encontrará definições para termos como “abare”, “okizeme” e determinadas notações utilizadas na comunidade de jogos de luta.
            </Text>
            <Move id="escolherUmMain">
                ESCOLHA UM MAIN
            </Move>
            <Text>
                O personagem principal de um jogador, que demonstra sua verdadeira força e esforço no jogo, se chama main.
                Esse será o personagem que o leitor deve escolher “sempre”.
            </Text>
            <Text>
                Muitos jogadores se encontram numa posição onde gostam de vários personagens e querem dividir tempo entre eles. Porém, dividir o esforço entre vários personagens afeta o progresso severamente.
                Personagens diferentes exigem memória muscular diferente, bem como táticas e peculiaridades que não são aplicáveis de forma universal.
                Como exemplo, um jogador de Ken não precisará aprender
                <TextDecoration red>
                    red parries
                </TextDecoration>{" "} para determinadas situações (seu poderoso SA3 será utilizado ao invés disso) onde outros personagens exigem esse fundamento.
                Vencer essa memória muscular e esse costume, bem como dividir o aprendizado de confirms, BNBs, opções, etc. atrasa a melhora no jogo.
                Fica explicitada a necessidade por um main.
            </Text>
            <Text>
                Motivos para a escolha do main variam: Você pode se identificar com a história e personalidade do personagem, pode ser uma questão isolada quanto à gameplay, pode ser uma soma de fatores ou enfim.
                Contanto que você esteja feliz e se divertindo com o personagem escolhido, é uma escolha válida.
                Ao escolher um main que o deixa feliz em termos de identificação e gameplay, mesmo em momentos frustrantes, o jogador não deixará o personagem de lado e não perderá a motivação. Por isso, é importante gostar e querer jogar com o personagem escolhido.
            </Text>
            <Text>
                <TextDecoration bold>
                    NOTA:
                </TextDecoration>{" "}
                Para a versão do Guia Inicial que será otimizada e disponível no site do Blue Wolves, ainda em desenvolvimento, haverá um quiz para facilitar a escolha do main ao invés dessa caixa de texto. Por ora, imaginem algo legal aqui.
            </Text>


            <QuizMain>
                <Titulo>
                    Descubra qual é o seu Main!
                </Titulo>
                <Questao option={1} id="teste"> 1 . Pergunta teste, capiche?</Questao>
                <ContainerResposta>
                    <RespostaButton img={mapWorld} zoomImg={mapBrasil} link="guiaInicial">
                        Opção A
                    </RespostaButton>
                    <RespostaButton img={mapWorld} zoomImg={mapBrasil} link="guiaInicial">
                        Opção B
                    </RespostaButton>
                    <RespostaButton img={mapWorld} zoomImg={mapBrasil} link="guiaInicial">
                        Opção C
                    </RespostaButton>
                    <RespostaButton img={mapWorld} zoomImg={mapBrasil} link="guiaInicial">
                        Opção D
                    </RespostaButton>
                </ContainerResposta>
            </QuizMain>
            <Move id="pedirFeedback">
                PEDIR FEEDBACK
            </Move>
            <Text>
                No servidor Blue Wolves, bem como nas comunidades brasileiras de 3rd Strike através dos anos, o progresso dos jogadores geralmente aconteceu pelo famigerado feedback.
                Trata-se de o player mais experiente providenciar uma série de dicas e recomendações após jogar e vencer um jogador menos experiente.
            </Text>
            <Text>
                A lógica é bem intuitiva: Um jogador experiente analisou os padrões comportamentais do jogador inexperiente para vencê-lo.
                Se o jogador inexperiente não lida bem com pulos, o jogador experiente perceberá isso e pulará incessantemente para vencer.
                Dessa forma, por causa do processo lógico que resulta na vitória, o mesmo processo pode ser explicitado após, fazendo com que o jogador menos experiente trabalhe nesse defeito, forçando os demais jogadores a acharem outras brechas de habilidade.
            </Text>
            <Text>
                Feedbacks foram cruciais para a melhora no jogo e para formar uma comunidade prestativa e comunicativa.
                Essa troca de informação favorece os jogadores e, no conhecimento do autor, não acontece frequentemente em outras comunidades.
            </Text>
            <Text>
                Claro, nem todo jogador gosta de passar feedback, tampouco todo jogador derrotado quer recebê-lo. Também não é todo jogador forte no jogo que “entende” esse processo lógico.
                <TextDecoration bold>
                    É possível ser bom em algo e não conseguir expressar essa capacidade de fato.
                </TextDecoration>{" "}
                É necessário preservar a civilidade nesse processo e entender as peculiaridades do próximo.
            </Text>
            <Move id="counterplay">
                COUNTERPLAY
            </Move>
            <Text>
                Em 3rd Strike, quase toda interação tem uma resposta.
                Porém, isso exige um entendimento dos recursos específicos do personagem utilizado e dos predicados do jogador e como isso se encaixa com os recursos do personagem oponente e das características do oponente como pessoa.
            </Text>
            <Text>
                O exemplo acima se demonstra pertinente aqui. Naquele exemplo, o jogador meramente não conseguia lidar com pulos. Isso pode ser algum deficit do personagem (Hugo, por exemplo, realmente tem menos recursos nesse departamento) ou pode ser algo mais pessoal (um jogador de Ken tem específica dificuldade com AAs apesar de o personagem poder lidar com isso).
                De qualquer forma, o jogador experiente verificou esse hábito e pensou: “Eu tenho uma característica ou recurso que lide com isso de forma que eu vença?”
            </Text>
            <Text>
                O que o oponente faz? O que eu faço? O que eu faço que vence aquilo que o oponente faz? Esse processo lógico é determinante para 3rd Strike e se ater a ele enquanto joga é difícil, mas pode definir muito o sucesso em partida e fora dela.
            </Text>
            <Text>
                Existem várias formas de pensar enquanto joga para se manter sempre afiado no aspecto de counterplay.
                Jogadores até mesmo usam cadernos ou arquivos de texto para consultar durante o jogo, falam consigo mesmos em voz alta enquanto jogam, apontam pra tela ou usam outros recursos para tentar manter esse pensamento de forma vívida.
            </Text>
            <Text>
                É essencial pensar enquanto joga e ter essa noção de counterplay.
            </Text>
            <div className="flex justify-center">
                <img src={matsukenApontando} className="h-55" />
            </div>
            <Text>
                Acima, uma imagem do Matsuken, jogador de Ken, apontando para a tela entre rounds.
                Ele fazia isso para sempre se lembrar da quantia de barra que o oponente tinha.
                Dessa forma, ele lembrava de mudar seu comportamento baseado nisso.
            </Text>
            <Move id="passoAcima">
                PASSO ACIMA
            </Move>
            <Text>
                Quando um jogador tem um hábito, lembre-se de não complicar as coisas. É importante se ater ao que o oponente faz.
            </Text>
            <Text>
                Com isso, voltamos para a questão do counterplay. Significa que se o oponente não lida com throws, você pode ignorar parcialmente as outras partes da equação e insistir bastante no throw.
                <TextDecoration bold>
                    É importante se manter apenas um passo acima do oponente.
                </TextDecoration>{" "}
                Caso contrário, pode ficar vulnerável ao tentar algo mais complexo que gastará mais energia e funcionará menos do que só spammar throw no sujeito que não consegue dar tech.
            </Text>
            <Text>
                <TextDecoration underline blue href="https://www.thepokerbank.com/strategy/psychology/multiple-level-thinking/">
                    Existem noções disso em jogos como Poker
                </TextDecoration>{" "}
                , onde se estabelecem "níveis" e o jogador bom analisa o nível do oponente e joga APENAS um nível acima.
                Calcular demais faz com que o resultado seja menos eficaz.
            </Text>
            <Text>
                Também é importante lembrar que a adaptação deverá vir
                <TextDecoration bold>
                    APÓS mudança.
                </TextDecoration>{" "}
                Então, seguindo o mesmo exemplo, se o sujeito sempre leva Throw,
                <TextDecoration bold>
                    não há motivo
                </TextDecoration>{" "}
                pra tentar confirm se ele
                <TextDecoration bold>
                    não começou
                </TextDecoration>{" "}
                a fazer tech.
                Agora, no
                <TextDecoration bold>
                    EXATO MOMENTO
                </TextDecoration>{" "}
                onde ele começa a fazer tech, simule a situação do throw e aperte botão, ficando um nível acima.
            </Text>
            <Text>
                Isso faz parte da questão analítica mencionada antes e é
                <TextDecoration bold>
                    essencial
                </TextDecoration>{" "}
                para vencer.
            </Text>
            <BotaoPaginacao anterior="/conteudoRecurso/introducaoGuiaInicial" proximo="/conteudoRecurso/guiaInicial1" />
        </Article>
    );
}