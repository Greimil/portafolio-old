import React from "react";
import  {useState} from "react"
import ToggleBtn from "./toggleBtn";
import Showfront from "./Showfront";
import ShowBack from "./ShowBack";
import lenguajeData from "../../lenguaje.json"
import { useSelector } from "react-redux";



const TecnologiesUsed = (props) => {
  const [backFront, setBackFront] = useState(true)
  const {darkmodeOn} = props
  const lengaje = useSelector((state)=> state.lenguaje.value )

  return (
    <div className="   pt-[92px] pb-[92px] flex flex-col  bg-inherit ">
      <h1 className={`${darkmodeOn? "h1white  text-center  ": "h1  text-center  "} text-2xl `}  >
        {lengaje? lenguajeData.english.Sobremi.tecnologiasUsadas.h1: lenguajeData.spanish.Sobremi.tecnologiasUsadas.h1}
      </h1>
      <ToggleBtn setBackFront={setBackFront}  />

      <div className="flex justify-center flex-wrap " >
        {backFront? <Showfront/> : <ShowBack/> }
        
      </div>


    </div>
  );
};

export default TecnologiesUsed;
