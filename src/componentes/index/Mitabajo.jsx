import React from "react";
import Cards from "./cards/cards";
import game from "../../imgs-iconos/piedra-papel-tijera.png";
import calcu from "../../imgs-iconos/calculadora.png";
import ete from "../../imgs-iconos/ete.png";
import lenguajeData from "../../lenguaje.json"
import {useSelector} from "react-redux"

function Mitabajo() {
  const lengaje = useSelector((state)=> state.lenguaje.value )
 
  return (
    <div className="gradiente flex items-center flex-col justify-center min-h-full  "  id="mitrabajo">
      <h1 className="text-center h1 text-4xl pt-[92px]">{lengaje? lenguajeData.english.index.mitrabajo.h1: lenguajeData.spanish.index.mitrabajo.h1 }</h1>
      <div className="justify-around mt-[55px] mb-[55px] ml-[128px] mr-[128px]   flex flex-wrap w-[80%] ">
        <Cards
          titulo={lengaje? lenguajeData.english.index.mitrabajo.cards.card1: lenguajeData.spanish.index.mitrabajo.cards.card1}
          img={game}
          link="https://greimil.github.io/sicssors/"
        />

        <Cards
          titulo={lengaje? lenguajeData.english.index.mitrabajo.cards.card2: lenguajeData.spanish.index.mitrabajo.cards.card2}
          img={calcu}
          link="https://greimil.github.io/calculator/"
        />

        <Cards
          titulo={lengaje? lenguajeData.english.index.mitrabajo.cards.card3: lenguajeData.spanish.index.mitrabajo.cards.card3}
          img={ete}
          link="https://greimil.github.io/ETCH-A-SKETCH/"
        />
      </div>

      <h2 className="text-center font-semibold text-lg pb-[92px]" >
        <a href="https://github.com/Greimil?tab=repositories" className="underline"> {lengaje? lenguajeData.english.index.mitrabajo.h2 : lenguajeData.spanish.index.mitrabajo.h2} </a>{" "}
      </h2>
    </div>
  );
}

export default Mitabajo;
