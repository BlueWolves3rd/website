import kenSf2Idle from "../assets/character selection/ken-sf2-idle.jpeg";
import kenSf2Win from "../assets/character selection/ken-sf2-win.jpeg";
import mapBrasil from "../assets/map-brasil.png";
import mapWorld from "../assets/mapWorld.png";
import muS from "../assets/mu1.png";
import muE from "../assets/mu2.png";

import { SelectionScreen } from "../components/selectionScreen";
import { HomeButton } from "../components/homeButton";

export const Home = () => {
  return (
    <div className="w-full justify-center flex flex-grow bg-[#121212]">
      <div className="max-w-screen-lg">
        <div className="w-full  flex flex-col items-center pt-8">
          <SelectionScreen />
          <div className="flex flex-row gap-12 mt-8 w-full justify-center">
            <HomeButton img={kenSf2Idle} zoomImg={kenSf2Win} link="scare">
              Conteúdo do Scare
            </HomeButton>
            <HomeButton img={muE} zoomImg={muS}>
              Conteúdo/Recursos
            </HomeButton>
            <HomeButton
              top={-56}
              img={mapBrasil}
              zoomImg={mapWorld}
              height="130%"
            >
              Conteúdo Externo
            </HomeButton>
          </div>
        </div>
      </div>
    </div>
  );
};
