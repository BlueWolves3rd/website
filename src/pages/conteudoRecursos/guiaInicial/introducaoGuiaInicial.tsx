import {
    Article,
    Titulo,
    Text,
    TextDecoration,
} from "@/components/articleNoSidebar.tsx";
import { BotaoPaginacao } from "@/components/botaoPaginacao";

export const IntroducaoGuiaInicial = () => {
    const navSidebarList = [
    ];

    return (
        <Article>
            <Titulo>
                INTRODUÇÃO
            </Titulo>
            <Text>
                Através dos anos, centenas de guias para Street Fighter III: 3rd Strike foram produzidos, bem como inúmeros métodos de aprendizado foram utilizados.
                Nenhum método é definitivo: O aprendizado do jogador é pessoal e pode preferir texto, vídeo, áudio, cenário prático, explicações com mais ou menos detalhes, etc.
            </Text>
            <br></br>
            <Text>
                Por isso, é uma tarefa árdua escrever um guia “definitivo” que possa, de fato, levar um jogador de um nível inicial para um nível intermediário. As diversas tentativas realizadas foram, na visão deste que vos fala, tentativas não muito bem-sucedidas.
                Acabavam se tornando guias rasos, que não ensinavam de fato, ou o oposto, guias que perdiam incríveis quantias de tempo falando sobre o óbvio.
            </Text>
            <br></br>
            <Text>
                O objetivo desse guia era muito simples: Deveria conter todo o conteúdo universal, aquele que pode ser aplicado com qualquer personagem do jogo, necessário prum jogador iniciante se tornar um jogador mais experiente. Corrigir os erros do passado com um guia que, de fato, contém o que precisa ser ensinado.
                “Se o jogador efetivar tudo que aqui está, estará jogando bem”.
            </Text>
            <br></br>
            <Text>
                Testes de reação ao guia foram incrivelmente positivos e, após várias reescritas, acredito que o objetivo foi atingido. Claro, meramente ler não será o bastante. A prática precisará ser exaustiva até o entendimento realmente se concretizar.
                Apesar disso, espero que o esforço para escrever o texto gere frutos e que, se nada mais, seja tão divertido de ler quanto foi de escrever.
            </Text>
            <br></br>
            <Text>
                Nessa nota, deixo com vocês o Guia Inicial.
            </Text>
            <br></br>
            <Text>
                <TextDecoration bold>– Scarecrow, detentor de poucos títulos, autor deste guia.</TextDecoration>
            </Text>
            <BotaoPaginacao proximo="/conteudoRecurso/guiaInicial0" />
        </Article>
        
    );
}