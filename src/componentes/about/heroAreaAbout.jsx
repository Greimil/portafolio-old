import React from "react";
import { useSelector } from "react-redux";
import Wave from "../iconos/wave";
import profile from "../../imgs-iconos/profile.jpg";
import lenguajeData from "../../lenguaje.json"

function HeroAreaAbout() {
  const { darkmodeOn } = useSelector((state) => state.theme);
  const lengaje = useSelector((state)=> state.lenguaje.value )



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
          {lengaje? lenguajeData.english.Sobremi.heroArea.h1: lenguajeData.spanish.Sobremi.heroArea.h1}
        </h1>

        <h3
          className={`${
            darkmodeOn ? "text-white" : "text-black"
          } text-justify text-lg lg:text-2xl lg:w-4/5 z-40 pb-16`}
        >
           {lengaje? lenguajeData.english.Sobremi.heroArea.h3: lenguajeData.spanish.Sobremi.heroArea.h3}
        </h3></div>  
      </div>

      <Wave className="hidden lg:h-[300px] lg:block h-[150px]  bottom-4 "></Wave>
    </div>
  );
}

export default HeroAreaAbout;
