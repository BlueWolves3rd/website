import bwLogo from "../assets/sobreNos/LOGO_BW-02-05.png";
import banner from "../assets/sobreNos/alex-banner-bg-blue.png";
import bgImageHoje from "../assets/sobreNos/20th.png";
import bgImage2021 from "../assets/sobreNos/ryu-vs-sagat-first-battle-drawn-by-motoki-yoshihara.jpg";
import bgImageProblemas from "../assets/sobreNos/ryu-carrying.png";

export const SobreNos = () => {
  return (
    <div className="relative w-screen bg-[#121212]">
      <div className="flex justify-center h-[600px] items-center">
        <img
          src={banner}
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 20%" }}
        />
        <img src={bwLogo} className="w-[700px] absolute" />
      </div>

      <div className="flex flex-col font-metropolis mb-12 gap-16 mt-16">
        <div className="flex flex-row h-[600px] mx-44">
          <div
            className="text-6xl w-1/2 text-center flex items-center
                        justify-center relative border-[3px] border-gray-600"
          >
            <img
              src={bgImage2021}
              className="z-0 object-cover h-full w-full absolute"
              style={{ objectPosition: "50% 20%" }}
            />

            <p className="z-50 text-8xl text-white font-outline-4">2021</p>
          </div>

          <div
            className="w-1/2 flex text-white px-24 leading-[2.25rem] text-xl
                        items-center justify-center"
          >
            A cena brasileira de 3rd Strike estava inativa. Frustrado com isso,
            um dos únicos jogadores restantes, Shadow, entrou em contato com o
            Scarecrow (líder/dono do BW). Num período de motivação temporária,
            Scarecrow descreveu um projeto com perspectiva diferente. Baseado em
            academias de artes marciais, o grupo produziria conteúdo e
            promoveria competições toda semana. O que o Scarecrow não sabia,
            porém, é que Shadow iria lhe importunar até a ideia sair do papel
            com a criação do grupo Blue Wolves.
          </div>
        </div>

        <div
          className="flex flex-row h-[600px] text-white relative px-44"
          style={{
            backgroundImage: `url(${bgImageProblemas})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-[#02011e] bg-opacity-80 absolute top-0 left-0 w-full h-full" />
          <div
            className="text-xl w-1/2 flex items-center
                        justify-center px-24 leading-[2.25rem] z-50
                        [text-shadow:_0_4px_8px_rgb(0_0_0_/_100%)]"
          >
            No passado, o jogo havia sofrido com vários dilemas. Jogadores não
            se davam muito bem sempre, então haviam vários grupos menores,
            apelidados de "panelas". A produção de conteúdo e organização de
            eventos era muito dependente de membros menos agradáveis da
            comunidade. Pouco era feito para mudar isso. Dentre seus muitos
            objetivos, a equipe do Blue Wolves estabeleceu que iria trabalhar
            nesses problemas: Produzir conteúdo na língua portuguesa, organizar
            eventos semanais e tentar unir os players sob um único teto.
          </div>

          <p
            className="text-6xl  w-1/2 text-center
                        flex items-center justify-center z-50 [text-shadow:_0_8px_16px_rgb(0_0_0_/_100%)]"
          >
            PROBLEMAS
          </p>
        </div>

        <div className="flex flex-row h-[600px] mx-44">
          <div
            className="text-6xl w-1/2 text-center flex items-center
                        justify-center relative border-[3px] border-gray-600"
          >
            <img
              src={bgImageHoje}
              className="z-0 object-cover h-full w-full absolute"
              style={{ objectPosition: "50% 20%" }}
            />
            <p className="z-50 text-8xl text-white font-outline-4">HOJE</p>
          </div>
          <div
            className="w-1/2 flex text-white px-24 leading-[2.25rem] text-xl
                        justify-center items-center"
          >
            Cada vez maior, o Blue Wolves revitalizou a comunidade brasileira de
            3rd Strike. Com diversos projetos cada vez mais ambiciosos,
            continuamos apoiando o jogo que amamos!
          </div>
        </div>
      </div>
    </div>
  );
};
