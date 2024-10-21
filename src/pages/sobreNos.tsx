import bwLogo from "../assets/sobreNos/LOGO_BW-02-05.png";
import banner from "../assets/sobreNos/alex-banner-bg-blue.png";

export const SobreNos = () => {
  return (
    <div className="relative">
      <div className="flex justify-center h-[600px] items-center">
        <img
          src={banner}
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 20%" }}
        />
        <img src={bwLogo} className="w-[700px] absolute" />
      </div>

      <div className="text-white flex flex-col gap-12 font-metropolis mt-16 px-32 mb-12">
        <div className="flex flex-row h-[40vw] p-32">
          <p className="text-6xl w-1/2 text-center flex items-center justify-center">
            2021
          </p>
          <div className="text-xl w-1/2 flex items-center justify-center">
            Após vários anos em atividade, a comunidade de 3rd Strike estava em
            inatividade. Por isso, o ShadowBurn, jogador de Gouki, pediu para o
            Scarecrow (líder/dono do BW) criar um servidor do qual ele tinha
            dado ideia, com inspiração em academias de artes marciais.
          </div>
        </div>

        <div className="flex flex-row h-[40vw] text-white p-32">
          <div className="text-xl w-1/2 flex items-center justify-center">
            A comunidade do jogo no Brasil sofria de vários problemas e, dentre
            seus objetivos, o Blue Wolves visava resolvê-los: Unir os jogadores
            em um só lugar, produzir conteúdo do jogo na língua
          </div>

          <p className="text-6xl w-1/2 text-center flex items-center justify-center">
            PROBLEMAS
          </p>
        </div>

        <div className="flex flex-row h-[40vw] p-32">
          <p className="text-6xl w-1/2 text-center flex items-center justify-center">
            HOJE
          </p>
          <div className="text-xl w-1/2 flex items-center justify-center">
            Cada vez maior, o Blue Woves revitalizou a comunidade de 3rd Strike.
            Continuamos dedicados em apoiar o jogo que amamos e os jogadores que
            contribuem pra cena.
          </div>
        </div>
      </div>
    </div>
  );
};
