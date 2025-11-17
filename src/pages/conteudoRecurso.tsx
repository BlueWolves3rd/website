import { HomeButton } from "@/components/homeButton";
import mapBrasil from "@/assets/map-brasil.png";
import mapWorld from "@/assets/mapWorld.png";

export const ConteudoRecurso = () =>{
    return (
        <div className="w-full px-64 bg-primary min-h-screen">
      <div className="flex w-full mt-16">
        <div className="flex-col flex w-full gap-12 items-center">
          <HomeButton img={mapWorld} zoomImg={mapBrasil} link="introducaoGuiaInicial">
            Guia Inicial
          </HomeButton>
          <HomeButton img={mapWorld} zoomImg={mapBrasil} link="workInProgress" >
            Teste WIP
          </HomeButton>
          <HomeButton img={mapWorld} zoomImg={mapBrasil} link="introducaoGuiaInicial">
            test
          </HomeButton>
        </div>
      </div>
    </div>
    );

}