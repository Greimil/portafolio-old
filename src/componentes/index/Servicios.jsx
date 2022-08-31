import React from "react";
import Campostxtservice from "./campostxtservice/campostxtservice";
import srcv from "../../imgs-iconos/info.png";
import dinamic from "../../imgs-iconos/dinamic.png";
import ecommerce from "../../imgs-iconos/e-commerce.png";

function Servicios() {
  return (
    <div className=" bg-primary  min-h-[100%]  w-full items-center justify-center flex flex-col  " id="servicios">
      <h1 className=" h1 text-2xl text-center  text-white mb-[32px] w-full pt-8">Servicios</h1>
      <div className=" flex flex-wrap justify-center">
        <Campostxtservice
          link={srcv}
          h3="Paginas web estaticas"
          text="Las páginas web estáticas son básicamente paginas informativas y están enfocadas principalmente a mostrar una información permanente, donde el navegante se limita a obtener dicha información sin poder interactuar con la página visitada"
        />

        <Campostxtservice
         link={dinamic}
         h3="Paginas web dinamicas"
         text="Las paginas web dinamicas son perfectas para clientes que necesiten actualizar constantemente informacion, esto tiene como ventaja mantener actualizados a los visitantes de dicho sitio web, pues la informacion se puede actualizar facilmente"

        />

        <Campostxtservice
        link={ecommerce}
        h3="e-commerce"
        text="e-Commerce o comercio electronico, se trata de sitios webs enfocados en el comercio electronico, ideal para clientes que buscan vender sus productos en internet"
        />

        

      </div>
    </div>
  );
}

export default Servicios;
