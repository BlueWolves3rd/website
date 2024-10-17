import bwLogo from "../assets/bw3.png";
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
        <img src={bwLogo} className="w-[500px] absolute" />
        <div
          className="text-white font-bold font-pRegular text-[0.6rem] 
                    gap-24 flex flex-col absolute  text-center"
        >
          <p>BLUE WOLVES</p>
          <p>FIGHT FOR THE FUTURE</p>
        </div>
      </div>

      <div className="text-white flex flex-col gap-12 font-metropolis mt-16 px-32 mb-12">
        <div className="flex flex-row h-[350px] p-4">
          <p className="text-5xl w-1/2">2021</p>
          <div className="w-1/2 text-xl">
            Após vários anos em atividade, a comunidade de 3rd Strike estava em
            inatividade. Por isso, o ShadowBurn, jogador de Gouki, pediu para o
            Scarecrow (líder/dono do BW) criar um servidor do qual ele tinha
            dado ideia, com inspiração em academias de artes marciais.
          </div>
        </div>

        <div className="flex flex-row h-[350px] bg-white text-black p-4">
          <p className="text-5xl w-1/2">PROBLEMAS</p>
          <div className="w-1/2 text-xl">
            A comunidade do jogo no Brasil sofria de vários problemas e, dentre
            seus objetivos, o Blue Wolves visava resolvê-los: Unir os jogadores
            em um só lugar, produzir conteúdo do jogo na língua
          </div>
        </div>

        <div className="flex flex-row h-[350px] p-4">
          <p className="text-5xl w-1/2">HOJE</p>
          <div className="w-1/2 text-xl">
            Cada vez maior, o Blue Woves revitalizou a comunidade de 3rd Strike.
            Continuamos dedicados em apoiar o jogo que amamos e os jogadores que
            contribuem pra cena.
          </div>
        </div>
      </div>
    </div>
  );
};
