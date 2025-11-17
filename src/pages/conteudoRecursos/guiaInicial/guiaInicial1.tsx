import {
    Article,
    Titulo,
    Text,
    TextDecoration,
    Header,
    Subtitulo
} from "@/components/articleNoSidebar.tsx";
import { BotaoPaginacao } from "@/components/botaoPaginacao";
import defesa from "@/assets/guiaInicial/defesa-guia1.gif";
import farofa from "@/assets/guiaInicial/farofa-guia1.gif";
import Footsies from "@/assets/guiaInicial/footsies-guia1.gif";

export const GuiaInicial1 = () => {
    const navSidebarList = [
    ];

    return (
        <Article>
            <Header level={1}>
                GUIA INICIAL - PARTE 1
            </Header>
            <Titulo >
                PRIMEIRAS DICAS
            </Titulo>
            <Subtitulo>
                DEFENDA.
                NÃO SE MATE.
                PUNA.
                APRENDA O BÁSICO.
            </Subtitulo>
            <Text>
                Essas quatro dicas são a “primeira aula” de todo jogador iniciante. 3rd Strike é um jogo que não segue certos padrões encontrados em outros jogos da franquia Street Fighter.
                Por isso, diversos jogadores começam a jogar e imediatamente utilizam especiais no oponente, sendo que a <TextDecoration bold>maior parte dos especiais em 3rd Strike, ao serem defendidos, são puníveis.</TextDecoration>
                Por isso, antes de aprender o que fazer, deve ser ensinado o que não fazer na busca pela vitória.
            </Text>
            <br></br>
            <Text>
                Defesa é um tópico vasto em 3rd Strike.
                Tão vasto e importante que é da interpretação do autor que existem “três setores” de defesa no jogo: Defesa durante o ataque, defesa durante neutralidade e defesa absoluta (defesa no turno do oponente).
                Por isso, defesa será metade duma parte individual do guia, específica para tratar com detalhes o aspecto de ataque e defesa do jogo. Aqui, porém, precisamos introduzir esse tópico de forma básica, especialmente quanto à <TextDecoration bold>movimentação e wake-up.</TextDecoration>
            </Text>
            <br></br>
            <Text>
                Pulos e dashes são tentadores para iniciantes. São movimentos rápidos que geram ataques se o oponente não impedi-los.
                Porém, ambos também são recursos de <TextDecoration bold>comprometimento:</TextDecoration> Você não pode se defender enquanto pula ou faz dash, tornando-se vulnerável. Por isso, é recomendado que inicialmente, o jogador meramente caminhe e se posicione corretamente para acertar botões.
                É aqui que a defesa na movimentação, caminhar corretamente, ou <TextDecoration bold>“defesa no neutro”</TextDecoration> se aplica.
            </Text>
            <br></br>
            <Text>
                Em todo momento que o jogador está caminhando, ele não está defendendo. Isso faz com que o oponente possa só se aproximar e bater repetidamente num médio alcance, espetando-o até a morte.
                A ideia geral, então, é <TextDecoration bold>caminhar aos poucos</TextDecoration>, parar para defender, esperar, lançar um golpe caso o oponente esteja no alcance e sempre <TextDecoration bold>defender entre pequenos passos</TextDecoration> para não ser atingindo repetidamente. Essa noção de ajustar seu posicionamento, utilizar os pokes na range certa e sair do alcance do botão do oponente para não ser acertado (potencializando possíveis whiff punishes) se chama <TextDecoration bold>footsies</TextDecoration> e é aspecto essencial em 3rd Strike..
            </Text>
            <br></br>
            <div className="flex justify-center">
                <img src={Footsies} className="h-53" />
            </div>
            <Text>
                Aqui, observamos <TextDecoration underline blue href="https://www.youtube.com/watch?v=bQ-gZY2Fuk8">
                    Kuroda e Deshiken
                </TextDecoration>{" "}, dois dos melhores jogadores de 3rd Strike de todos os tempos, jogando <TextDecoration bold>footsies</TextDecoration> numa mirror de Ken.
                Perceba o uso de botões no alcance exato, as tentativas de parry e as frequentes defesas entre os passos pequenos.
            </Text>
            <br></br>
            <Text>
                É inevitável, porém, que o oponente derrube o jogador de alguma forma ou gere turno com um pulo defendido, por exemplo.
                Nessa ocasião, é importante <TextDecoration bold>respeitar o turno do oponente com a defesa.</TextDecoration> Em outros jogos, utilizar um <TextDecoration bold>Shoryuken no levantamento</TextDecoration> é uma opção mais forte.
                Aqui, é facilmente defendida e deixa o usuário em extremo risco, permitindo full punish do oponente. Levantar com parry também não é uma boa ideia: Parry é dividido entre <TextDecoration bold>duas alturas</TextDecoration> e Throws não podem tomar parry. Logo, num momento de ataque, o oponente possui “3 formas de ataque” e o parry só cobre uma dessas formas. Matematicamente, um risco que geralmente não vale a pena. É muito fácil levantar com low parry e morrer porque o oponente optou por um confirm high.
                Por isso, da mesma forma, <TextDecoration bold>defender no levantamento por 3 segundos aproximadamente</TextDecoration>
                é importante para que o jogador não tome <TextDecoration bold>meaty.</TextDecoration>
            </Text>
            <br></br>
            <div className="flex justify-center">
                <img src={farofa} className="h-53" />
            </div>
            <Text>
                <TextDecoration underline blue href="https://www.youtube.com/watch?v=ptTgmu4WBtM">
                    Matsuken enfrenta Nitto
                </TextDecoration>{" "}, dois dos melhores com seus personagens, na final da 15ª Cooperation Cup e é derrotado por utilizar dois Shoryuken farofados.
                Defesa e punição.
            </Text>
            <br></br>
            <Text>
                Da mesma forma, utilizar especiais como <TextDecoration bold>Hadouken</TextDecoration> são uma grande tentação porque, em outros jogos como Street Fighter 2, tratam-se de recursos fortíssimos e importantes.
                Aqui, também é importante mas de forma completamente diferente. Utilizar especiais sem a certeza de que eles vão conectar é uma escolha péssima. Como mencionado antes, diversos especiais são puníveis on block. No caso do <TextDecoration bold>Hadouken</TextDecoration>, ele é punível on block no canto, punível on block situacionalmente no meio da tela, demora muito para sair (frames de start-up) e faz com que o jogador fique décadas parado, podendo sofrer um pulo e <TextDecoration bold>punição total</TextDecoration> (frames de recovery).
                Mesmo se você acertar, o Hadouken <TextDecoration bold>quase não causa dano.</TextDecoration>.
            </Text>
            <br></br>
            <Text>
                O parágrafo acima trata de um pensamento recorrente em 3rd Strike: <TextDecoration bold>Risco contra Recompensa.</TextDecoration>. No exemplo do Hadouken, o risco é enorme e a recompensa é irrelevante.
                Esse pensamento precisa ser utilizado para toda interação, escolha, etc. O que eu ganho com isso? O que eu perco com isso? Ao não ofertar chances grátis pro oponente, utilizando a lógica do Risco vs Recompensa, o jogador sobrevive por mais tempo e terá mais oportunidades para vencer.
            </Text>
            <br></br>
            <Text>
                Aqui se torna novamente evidente a necessidade de defender: Se o oponente fizer um especial de forma errada, ele ficará <TextDecoration bold>plenamente vulnerável.</TextDecoration>
                É nessa vulnerabilidade que a punição acontece.
                Da exata mesma forma que soltar um Hadouken em 3rd Strike é amplamente considerado ruim, o oponente pode fazer o mesmo erro cedo ou tarde. Por isso, defendendo, nesses momentos de vulnerabilidade, é <TextDecoration bold>absolutamente essencial</TextDecoration> que a oportunidade seja aproveitada. Nesses momentos, o jogador deve efetivar uma <TextDecoration bold>punição total</TextDecoration>, conforme a oportunidade permite. Diferentes vulnerabilidades permitem diferentes punições. Geralmente, porém, será um botão (cr.MK do Ken, por exemplo) seguido por um especial (LP DP do Ken) ou Super (SA3 do Ken). É importante não <TextDecoration bold>“punir fofo”</TextDecoration>: Punir apenas com Throw, por exemplo, geralmente é uma péssima ideia porque a maior parte das punishes será melhor em questão de dano e posicionamento do que um simples Throw.
            </Text>
            <br></br>
            <div className="flex justify-center">
                <img src={defesa} className="h-100" width="720" height="874" />
            </div>
            <Text>
                <TextDecoration underline blue href="https://www.youtube.com/watch?v=xVIsP09vE4Ie">
                    Kuroda era um verdadeiro monstro no jogo.
                </TextDecoration>{" "}
                Sua defesa era impregnável e suas reações eram absurdas.
                Defender bem em 3rd Strike gera vantagem imediata.
                Um verdadeiro exemplo dos pontos mencionados nessa parte do guia.
            </Text>
            <br></br>
            <Text>
                Por fim, <TextDecoration bold>“aprender o básico”</TextDecoration> é termo em branco. Para deixá-lo claro: <TextDecoration bold>“aprender o básico”</TextDecoration> significa <TextDecoration bold>pesquisar e praticar os recursos do personagem que traduzem para os fundamentos gerais.</TextDecoration> O Guia Inicial tem como objetivo apresentar esses tópicos de forma <TextDecoration bold>aplicável ao roster em geral</TextDecoration>, mas quando há menção de recursos ruins que não devem ser utilizados, por exemplo, cada personagem terá uma lista de opções ruins próprias.
                Punições também serão específicas: Alguns personagens podem punir mais ou menos certos erros do oponente.
                Logo, é importante <TextDecoration bold>procurar recursos do seu personagem</TextDecoration> e aplicar a <TextDecoration bold>versão de seu main</TextDecoration> dos fundamentos gerais.
            </Text>
            <br></br>
            <Text>
                Para fazer isso, você pode utilizar os diversos guias produzidos diretamente pelo Blue Wolves, mas <TextDecoration bold>não há motivo para se limitar</TextDecoration> aos guias de nossa autoria. Existem diversos guias feitos por <TextDecoration bold>jogadores competentes</TextDecoration> como 
                <TextDecoration underline blue href="https://www.youtube.com/@Sf3lp">
                    Nica K.O
                </TextDecoration>{" "} ou <TextDecoration underline blue href="https://www.youtube.com/@Feetwork101">
                    Feetwork101
                </TextDecoration>{" "} que podem ser de grande ajuda.
                <TextDecoration bold>Meramente assistir</TextDecoration> às partidas dos <TextDecoration bold>jogadores lendários</TextDecoration> de seus respectivos personagens em canais como 
                <TextDecoration underline blue href="https://www.youtube.com/@hismit3rd">
                    Hismit
                </TextDecoration>{" "}, <TextDecoration underline blue href="https://www.youtube.com/@TheShend">
                    TheShend
                </TextDecoration>{" "}, <TextDecoration underline blue href="https://www.youtube.com/@3rdSTRIKE">
                    3rd STRIKE
                </TextDecoration>{" "} ou <TextDecoration underline blue href="https://www.youtube.com/@game-newton9875">
                    Game Newton
                </TextDecoration>{" "} também é educativo, pois se pode analisar como os melhores jogadores do Japão lidam com determinados recursos.
            </Text>
            <br></br>
            <Text>
                Um jogador que “não perde sozinho” e derrota quem o faz dá um salto absurdo na sua trajetória de ir dum nível inicial prum nível intermediário.
            </Text>
            <br></br>
            <BotaoPaginacao anterior="/conteudoRecurso/guiaInicial0" />
        </Article>

    );
}