import { MatchupTable } from "@/components/matchupTable";
import { ChangeEvent, useState } from "react";
import grandesJogadoresChart from "@/utils/matchupData/charts.json";
import theRiddlerChart from "@/utils/matchupData/riddler.json";
import bosschart from "@/utils/matchupData/boss.json";
import kurodaChart from "@/utils/matchupData/kuroda.json";
import { Question } from "@/components/question";
import { Response } from "@/components/response";

const MatchupTableContainer = ({
  chartName,
  chart,
  table,
  average,
}: {
  chartName: string;
  chart: string;
  table: any;
  average: boolean;
}) => {
  return (
    <div
      className=" justify-center mt-1 mb-4 text-white"
      style={{
        display: chart == chartName ? "flex" : "none",
      }}
    >
      <MatchupTable charts={table} hasAverage={average} />
    </div>
  );
};

export const Matchups = () => {
  const [chart, setChart] = useState("Grandes Jogadores");
  const onChangeSelectChart = (e: ChangeEvent<HTMLSelectElement>) => {
    setChart(e.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-4 bg-primary py-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-white">
        MATCHUP CHARTS
      </h1>
      <div className="flex justify-center mt-3 text-white ">
        <select
          name="charts"
          value={chart}
          onChange={onChangeSelectChart}
          className="text-white p-2 bg-[#0b0b3d] outline-none"
        >
          <option value="Grandes Jogadores">Grandes Jogadores</option>
          <option value="The Riddler">The Riddler</option>
          <option value="Boss">Boss</option>
          <option value="Kuroda">Kuroda</option>
        </select>
      </div>
      <MatchupTableContainer
        chartName="Grandes Jogadores"
        chart={chart}
        table={grandesJogadoresChart}
        average
      />
      <MatchupTableContainer
        chartName="The Riddler"
        chart={chart}
        table={theRiddlerChart}
        average={false}
      />
      <MatchupTableContainer
        chartName="Boss"
        chart={chart}
        table={bosschart}
        average={false}
      />
      <MatchupTableContainer
        chartName="Kuroda"
        chart={chart}
        table={kurodaChart}
        average={false}
      />
      <div className="mx-96 mt-12 mb-12 flex flex-col gap-8">
        <h2 className="text-white text-5xl font-metropolis">
          FAQ - Perguntas Frequentes
        </h2>
        <h3 className="text-white text-2xl font-metropolis">
          Seguem algumas perguntas frequentes que recebemos. Elas foram pensadas
          e respondidas sem nenhuma ordem em específico.
        </h3>
        <Question number="01">
          Quais as fontes desses valores? Diversas fontes foram usadas.
        </Question>
        <Response>
          Entrevistas com os jogadores japoneses de elite que já estavam
          disponíveis na internet, consulta direta com os jogadores através de
          redes sociais além do Riddler contribuir com suas próprias MU charts.
          A chart principal é uma média desses dados (com a fonte e valor
          original ao lado), mas também colocamos MU charts separadas para fins
          de precisão.
        </Response>
        <Question number="02">
          Matchups importam? Não é tudo baseado em habilidade do jogador?
        </Question>

        <Response>
          Serve de referência para o nível de dificuldade considerando as
          interações do confronto e como as opções de um personagem interagem
          com as do personagem rival. Claro, o nível do jogador importa muito
          mais do que a MU. Se o jogador não possuir experiência para checar os
          dashes da Makoto, por exemplo, a sensação será de que a MU é bem pior,
          mas isso se deve ao uso (ou falta de uso) dos recursos do personagem e
          não dos recursos em si. Existem MUs MUITO difíceis em que até
          jogadores com resultados muito melhores no geral sofrem mais, porém.
          Essa noção teórica pode facilitar o aprendizado, justificar certos
          acontecimentos, servir de uso prático para esquematizar um evento em
          times (escolher uma MU mais fácil) ou só causar divertimento e debate.
        </Response>
        <Question number="03">
          Eu discordo com algum número. O que fazer?
        </Question>

        <Response>
          Tentamos utilizar as opiniões de top players e resultados de alto
          nível para definir a MU chart. Muito pode ser mal interpretado por
          erro do jogador (que volta para a pergunta acima). Pode sempre haver
          debate, porém, contanto que isso seja muito bem justificado com
          resultados, opiniões, exemplos, etc.
        </Response>
        <Question number="04">Como a média foi calculada?</Question>
        <Response>
          Alguns jogadores usam valores como .25 ou .75 nas suas charts. A ideia
          geral foi evitar essas especificações na média. Então .26 e .74 viram
          um .5, por exemplo. Essa forma de calcular a média, assim como esse
          FAQ, foram baseados nas versões antigas do site Goukipédia.
        </Response>

        <Question number="05">
          Por que separar a MU chart completa do Kuroda/Boss?
        </Question>
        <Response>
          Ambas possuem motivos que diminuem um pouco seu valor. A MU chart do
          Kuroda é incrivelmente curiosa porque ele tinha um entendimento
          peculiar do jogo. Ele define quase toda MU como 5-5 (completamente
          igual) com exceção dos personagens mais fortes que vencem absurdamente
          toda MU (exagero). Kuroda era conhecido por opiniões impopulares como
          o uso do SA2 do Dudley contra Hugo. Não achamos ele um narrador tão
          confiável apesar de sua absurda capacidade no jogo. Já no caso do
          Boss, a MU chart é muito datada. A compreensão de várias MUs mudou
          através dos anos e a chart do Boss tem inconsistências por esse
          motivo. Até o próprio Boss, quando questionado diretamente, deu
          valores diferentes dos presentes na MU chart completa que ele havia
          providenciado vários anos atrás. Dessa forma, preferimos não usar
          essas charts completas para a média da coleta de dados.
        </Response>

        <Question number="06">
          Sou um jogador de alto nível. Posso colocar minha chart no site?
        </Question>

        <Response>
          Preferiremos os dados dos jogadores japoneses, amplamente conhecidos
          por serem os mais fortes competitivamente no jogo, mas entre em
          contato conosco e pode haver debate para a inclusão.
        </Response>
      </div>
    </div>
  );
};

/**/
