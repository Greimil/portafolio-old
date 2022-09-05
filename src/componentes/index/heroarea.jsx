import React, { useEffect, useState } from "react";
import DeveloperSvg from "../iconos/developerSvg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {toogleFirst} from "../storage/slices/firstTime/index"
import { setCurrentCountFn } from "../storage/slices/count";
import lenguajeData from "../../lenguaje.json"


const Heroarea = (props) => {
  const { darkmodeOn } = props;
  

  const firstTime = useSelector((state) => state.firstTime.value)
  const currentCount = useSelector((state) => state.count.count)
  const lengaje = useSelector((state)=> state.lenguaje.value )
 
  const dispatch = useDispatch()



  useEffect(()=>{

    
    if (firstTime) {
    
      dispatch(setCurrentCountFn())
      dispatch(toogleFirst())
    }



  }, [])

 

  return (
    <div
      id="heroIndex"
      className="flex flex-wrap lg:justify-center bg-inherit items-center min-h-screen min-w-full "
    >
      <div className="p-4 lg:w-1/2 flex justify-center items-center flex-col ">
        <h1
          className={`${
            darkmodeOn ? "h1white" : "h1"
          } text-2xl  lg:text-4xl text-center  `}
        >
          {lengaje? lenguajeData.english.index.heroArea.h1: lenguajeData.spanish.index.heroArea.h1 }
          <strong >{" " + currentCount}</strong>{" "}
        </h1>
        <h3
          className={`${
            darkmodeOn ? "text-white" : "text-black"
          }  lg:text-2xl font-medium   text-center  mt-[32px]`}
        >
          {lengaje? lenguajeData.english.index.heroArea.h2: lenguajeData.spanish.index.heroArea.h2 }
        </h3>
        <Link
          to={{ pathname: "/contact" }}
          state={{ scroll: true, hash: "sendmsg" }}
          className="sombrabtn gradiente flex items-center justify-center w-4/5 lg:w-1/2 h-[48px] rounded-[32px] mt-[32px] text-[16px] lg:text-[20px] font-semibold pl-[24px] pr-[24px] pt-[12px] pb-[12px]"
        >
          {lengaje? lenguajeData.english.index.heroArea.btn: lenguajeData.spanish.index.heroArea.btn }
        </Link>
      </div>

      <DeveloperSvg className="hidden xl:inline" />
    </div>
  );
};

export default Heroarea;
