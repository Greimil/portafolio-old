import React from "react";
import { useSelector } from "react-redux";
import Wave from "../iconos/wave";
// ${darkmodeOn ? "text-white": "text-black"}//
import profile from "../../imgs-iconos/profile.jpg";

function HeroAreaAbout(props) {
  const { darkmodeOn } = useSelector((state) => state.theme);

  // mt-[128]

  return (
    <div className=" bg-inherit ">
      <div className="p-3 lg:w-2/4  max-w-[860px] lg:ml-[128px] bg-inherit  ">
        
        <div className="h-[300px] w-4/5 m-auto lg:hidden relative">
          <img src={profile} className="h-full w-full  rounded-[10px] object-cover" alt="Grey" />
        </div>

        <div className="relative top-24" ><h1
          className={`${
            darkmodeOn ? "h1white" : "h1"
          } text-center lg:text-left text-xl lg:text-4xl mb-2`}
        >
          SOY GREIMIL NUÑEZ
        </h1>

        <h3
          className={`${
            darkmodeOn ? "text-white" : "text-black"
          } text-justify text-lg lg:text-2xl lg:w-4/5 z-40 pb-16`}
        >
          Soy una persona apasionada por la informatica, desde muy joven me
          gustaron las computadoras, me fascinaba ver a mi padre usar la
          computadora y siempre me preguntaba lo mismo, "¿Como funciona la
          computadora en su interior?", esa sed de conocmientos me hizo
          decantarme por estudiar la licenciatura en informatica, pero no solo
          eso sino tambien me animo aprender programacion, despues de casi un
          año estudiando programacion descubri el mundo del desarrolllo web lo
          cual me llamo mucho la atencion, y desde ese entonces he estado
          aprendiendo tecnologias de desarrollo web y puliendo mis habilidades.
        </h3></div>  
      </div>

      <Wave className="hidden lg:h-[300px] lg:block h-[150px]  bottom-4 "></Wave>
    </div>
  );
}

export default HeroAreaAbout;
