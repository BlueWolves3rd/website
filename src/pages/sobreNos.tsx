import bwLogo from "../assets/sobreNos/LOGO_BW-02-05.png";
import banner from "../assets/sobreNos/alex-banner-bg-blue.png";
import bgImage2021 from "../assets/sobreNos/20th.png";
import bgImageHoje from "../assets/sobreNos/Alex_vs_Hugo.png";
import bgImageProblemas from "../assets/sobreNos/twins.png";

export const SobreNos = () => {
  return (
    <div className="relative w-screen">
      <div className="flex justify-center h-[600px] items-center">
        <img
          src={banner}
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 20%" }}
        />
        <img src={bwLogo} className="w-[700px] absolute" />
      </div>

      <div className="flex flex-col font-metropolis mb-12">
        <div className="flex flex-row h-[600px]">
          <div
            className="text-6xl w-1/2 text-center flex items-center
                        justify-center relative"
          >
            <img
              src={bgImage2021}
              className="z-0 object-cover h-full w-full absolute"
              style={{ objectPosition: "50% 20%" }}
            />

            <p className="z-50 text-8xl text-black">2021</p>
          </div>

          <div className="text-xl w-1/2 flex items-center justify-center text-white p-16">
            Após vários anos em atividade, a comunidade de 3rd Strike estava em
            inatividade. Por isso, o ShadowBurn, jogador de Gouki, pediu para o
            Scarecrow (líder/dono do BW) criar um servidor do qual ele tinha
            dado ideia, com inspiração em academias de artes marciais.
          </div>
        </div>

        <div className="flex flex-row h-[600px] text-black relative">
          <img
            src={bgImageProblemas}
            className="z-0 object-cover h-full w-full absolute"
            style={{ objectPosition: "50% 20%" }}
          />
          <div className="text-xl w-1/2 flex items-center justify-center z-50 p-16">
            A comunidade do jogo no Brasil sofria de vários problemas e, dentre
            seus objetivos, o Blue Wolves visava resolvê-los: Unir os jogadores
            em um só lugar, produzir conteúdo do jogo na língua
          </div>

          <p className="text-6xl w-1/2 text-center flex items-center justify-center z-50">
            PROBLEMAS
          </p>
        </div>

        <div className="flex flex-row h-[600px]">
          <div className="text-xl w-1/2 flex items-center justify-center text-white p-16">
            Cada vez maior, o Blue Woves revitalizou a comunidade de 3rd Strike.
            Continuamos dedicados em apoiar o jogo que amamos e os jogadores que
            contribuem pra cena.
          </div>
          <div
            className="text-6xl w-1/2 text-center flex items-center
                        justify-center relative"
          >
            <img
              src={bgImageHoje}
              className="z-0 object-cover h-full w-full absolute"
              style={{ objectPosition: "50% 20%" }}
            />

            <p className="z-50 text-8xl text-black">HOJE</p>
          </div>
        </div>
      </div>
    </div>
  );
};
