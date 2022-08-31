import React from "react";
import  {useState} from "react"
import ToggleBtn from "./toggleBtn";
import Showfront from "./Showfront";
import ShowBack from "./ShowBack";

// text-center h1 mt-[92px]

const TecnologiesUsed = (props) => {
  const [backFront, setBackFront] = useState(true)
  const {darkmodeOn} = props

  return (
    <div className="   pt-[92px] pb-[92px] flex flex-col  bg-inherit ">
      <h1 className={`${darkmodeOn? "h1white  text-center  ": "h1  text-center  "} text-2xl `}  >
        Lenguajes y frameworks usados para el desarrollo web
      </h1>
      <ToggleBtn setBackFront={setBackFront}  />

      <div className="flex justify-center flex-wrap " >
        
        {backFront? <Showfront/> : <ShowBack/> }
        
        
      </div>


    </div>
  );
};

export default TecnologiesUsed;
