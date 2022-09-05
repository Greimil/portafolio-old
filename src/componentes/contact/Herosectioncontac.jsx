import React from "react";
import { useSelector } from "react-redux";
import AcordeonMenu from "./AcordeonMenu";
import lenguajeData from "../../lenguaje.json"

function Herosectioncontac() {
  const lengaje = useSelector((state)=> state.lenguaje.value)
  return (
    <div className="gradiente min-h-[100%]  flex items-center  ">
      <div className="lg:ml-[128px] lg:mr-[128px] p-3  max-w-[600px]   ">
        <h1 className="h2 text-2xl ">
          {lengaje ? lenguajeData.english.contacto.heroArea.h1: lenguajeData.spanish.contacto.heroArea.h1}
        </h1>
        <AcordeonMenu
          title={lengaje? lenguajeData.english.contacto.heroArea.AcordeonMenu1.title: lenguajeData.spanish.contacto.heroArea.AcordeonMenu1.title }
          content={lengaje? lenguajeData.english.contacto.heroArea.AcordeonMenu1.content: lenguajeData.spanish.contacto.heroArea.AcordeonMenu1.content }
          
        />

        <AcordeonMenu
         title={lengaje? lenguajeData.english.contacto.heroArea.AcordeonMenu2.title: lenguajeData.spanish.contacto.heroArea.AcordeonMenu2.title }
         content={lengaje? lenguajeData.english.contacto.heroArea.AcordeonMenu2.content: lenguajeData.spanish.contacto.heroArea.AcordeonMenu2.content }
        />

        <AcordeonMenu
          title={lengaje? lenguajeData.english.contacto.heroArea.AcordeonMenu3.title: lenguajeData.spanish.contacto.heroArea.AcordeonMenu3.title }
          content={lengaje? lenguajeData.english.contacto.heroArea.AcordeonMenu3.content: lenguajeData.spanish.contacto.heroArea.AcordeonMenu3.content }
        />

        <AcordeonMenu
          title={lengaje? lenguajeData.english.contacto.heroArea.AcordeonMenu4.title: lenguajeData.spanish.contacto.heroArea.AcordeonMenu4.title }
          content={lengaje? lenguajeData.english.contacto.heroArea.AcordeonMenu4.content: lenguajeData.spanish.contacto.heroArea.AcordeonMenu4.content }
        />
      </div>
    </div>
  );
}

export default Herosectioncontac;
