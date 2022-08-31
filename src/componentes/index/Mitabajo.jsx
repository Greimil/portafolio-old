import React from "react";
import Cards from "./cards/cards";
import game from "../../imgs-iconos/piedra-papel-tijera.png";
import calcu from "../../imgs-iconos/calculadora.png";
import ete from "../../imgs-iconos/ete.png";

function Mitabajo() {
  return (
    <div className="gradiente flex items-center flex-col justify-center min-h-full  "  id="mitrabajo">
      <h1 className="text-center h1 text-4xl pt-[92px]">Mi trabajo</h1>
      <div className="justify-around mt-[55px] mb-[55px] ml-[128px] mr-[128px]   flex flex-wrap w-[80%] ">
        <Cards
          titulo="piedra papel o tijera"
          img={game}
          link="https://greimil.github.io/sicssors/"
        />

        <Cards
          titulo="Calculadora JavaScrip"
          img={calcu}
          link="https://greimil.github.io/calculator/"
        />

        <Cards
          titulo="Etch-a-sketch"
          img={ete}
          link="https://greimil.github.io/ETCH-A-SKETCH/"
        />
      </div>

      <h2 className="text-center font-semibold text-lg pb-[92px]" >
        <a href="https://github.com/Greimil?tab=repositories" className="underline"> Ver mas trabajos </a>{" "}
      </h2>
    </div>
  );
}

export default Mitabajo;
