import React from "react";

import AcordeonMenu from "./AcordeonMenu";

function Herosectioncontac() {
  return (
    <div className="gradiente min-h-[100%]  flex items-center  ">
      <div className="lg:ml-[128px] lg:mr-[128px] p-3  max-w-[600px]   ">
        <h1 className="h2 text-2xl ">
          Antes de enviarme un mensaje, aqui hay unas cuantas cosas que deberias
          saber:
        </h1>
        <AcordeonMenu
          title="¿Donde estas localizado?"
          content="Actualmente me encuentro resiendo en la ciudad de Azua de compostela, Republica Dominicana"
          
        />

        <AcordeonMenu
          title="¿Utilizas alguna herramienta de control de versiones?"
          content="Si, asi es, actualmente utilizo git y github para manejar mis proyectos"
        />

        <AcordeonMenu
          title="¿Haces prototipos de los sitios webs?"
          content="Si, normalmente a la hora de trabajar una de las primeras cosas que hago es crear un prototipo del proyecto en figma"
        />

        <AcordeonMenu
          title="¿Cobras por hora?"
          content="No cobro por hora. Prefiero eliminar el estrés de contar las horas. En cambio, cobro una tarifa fija por proyecto, independientemente de la duración."
        />
      </div>
    </div>
  );
}

export default Herosectioncontac;
