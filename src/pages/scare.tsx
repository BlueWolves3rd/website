import { HomeButton } from "../components/homeButton";
import mapBrasil from "../assets/map-brasil.png";
import mapWorld from "../assets/mapWorld.png";

export const Scare = () => {
  return (
    <div className="w-full px-64">
      <div className="flex w-full mt-16">
        <div className="flex-col flex w-full gap-12 items-center">
          <HomeButton img={mapWorld} zoomImg={mapBrasil}>
            test
          </HomeButton>
          <HomeButton img={mapWorld} zoomImg={mapBrasil}>
            test
          </HomeButton>
          <HomeButton img={mapWorld} zoomImg={mapBrasil}>
            test
          </HomeButton>
        </div>
        <div className="flex-col flex w-full gap-12 items-center">
          <HomeButton img={mapWorld} zoomImg={mapBrasil}>
            test
          </HomeButton>
          <HomeButton img={mapWorld} zoomImg={mapBrasil}>
            test
          </HomeButton>
          <HomeButton img={mapWorld} zoomImg={mapBrasil}>
            test
          </HomeButton>
        </div>
        <div className="flex-col flex w-full gap-12 items-center">
          <HomeButton img={mapWorld} zoomImg={mapBrasil}>
            test
          </HomeButton>
          <HomeButton img={mapWorld} zoomImg={mapBrasil}>
            test
          </HomeButton>
          <HomeButton img={mapWorld} zoomImg={mapBrasil}>
            test
          </HomeButton>
        </div>
      </div>
    </div>
  );
};
