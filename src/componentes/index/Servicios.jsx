import React from "react";
import Campostxtservice from "./campostxtservice/campostxtservice";
import srcv from "../../imgs-iconos/info.png";
import dinamic from "../../imgs-iconos/dinamic.png";
import ecommerce from "../../imgs-iconos/e-commerce.png";
import { useSelector } from "react-redux";
import lenguajeData from "../../lenguaje.json"

function Servicios() {
  const lengaje = useSelector((state)=> state.lenguaje.value )
  
  return (

    <div className=" bg-primary  min-h-[100%]  w-full items-center justify-center flex flex-col  " id="servicios">
      <h1 className=" h1 text-2xl text-center  text-white mb-[32px] w-full pt-8">{lengaje? lenguajeData.english.index.servicios.h1: lenguajeData.spanish.index.servicios.h1 }</h1>
      <div className=" flex flex-wrap justify-center">
        <Campostxtservice
          link={srcv}
          h3={lengaje? lenguajeData.english.index.servicios.Campostxtservice.camptxt1.h3: lenguajeData.spanish.index.servicios.Campostxtservice.camptxt1.h3 }
          text={lengaje? lenguajeData.english.index.servicios.Campostxtservice.camptxt1.descripcion: lenguajeData.spanish.index.servicios.Campostxtservice.camptxt1.descripcion }
        />

        <Campostxtservice
         link={dinamic}
         h3={lengaje? lenguajeData.english.index.servicios.Campostxtservice.camptxt2.h3: lenguajeData.spanish.index.servicios.Campostxtservice.camptxt2.h3 }
        text={lengaje? lenguajeData.english.index.servicios.Campostxtservice.camptxt2.descripcion: lenguajeData.spanish.index.servicios.Campostxtservice.camptxt2.descripcion }

        />

        <Campostxtservice
        link={ecommerce}
        h3={lengaje? lenguajeData.english.index.servicios.Campostxtservice.camptxt3.h3: lenguajeData.spanish.index.servicios.Campostxtservice.camptxt3.h3 }
        text={lengaje? lenguajeData.english.index.servicios.Campostxtservice.camptxt3.descripcion: lenguajeData.spanish.index.servicios.Campostxtservice.camptxt3.descripcion }
        />

        

      </div>
    </div>
  );
}

export default Servicios;
