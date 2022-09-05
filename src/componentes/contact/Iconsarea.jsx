import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { useSelector } from "react-redux";
import lenguajeData from "../../lenguaje.json"



export default function Iconsarea() {
  
  const lengaje = useSelector((state)=> state.lenguaje.value)
  
  
  return (
    <div className="gradiente min-h-[470px] flex flex-col justify-center">

        <h1 className="h1 text-center text-2xl p-10"  >{lengaje? lenguajeData.english.contacto.iconsAreaa.h1: lenguajeData.spanish.contacto.iconsAreaa.h1  }</h1>

      <div className="ml-[128px] mr-[128px]   flex-wrap flex justify-around items-center">
        <a
          href="https://github.com/Greimil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center">
            <AiFillGithub color="black" size={"40px"} />
            <strong>GITHUB</strong>
          </div>
        </a>

        <a
          href="https://twitter.com/Greimil1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center">
            <BsTwitter color="black" size={"40px"} />
            <strong>Twitter</strong>
          </div>
        </a>

        <a
          href="https://www.instagram.com/greimil_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center">
            <AiFillInstagram color="black" size={"40px"} />
            <strong>INSTAGRAM</strong>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/greimil-nu%C3%B1ez-9101801b9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center">
            <BsLinkedin color="black" size={"40px"} />
            <strong>LINKEDIN</strong>
          </div>
        </a>
      </div>
    </div>
  );
}
