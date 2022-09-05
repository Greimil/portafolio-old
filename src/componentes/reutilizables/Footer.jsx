import React from "react";
import { FiCoffee } from "react-icons/fi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import lenguajeData from "../../lenguaje.json"



export default function Footer() {
  const { darkmodeOn } = useSelector((state) => state.theme);
  const lengaje = useSelector((state)=> state.lenguaje.value )
  





  return (
    <footer id="footer" className="bg-inherit border-t-1 border-white">
      <div className=" lg:ml-[128px] pt-[128px] lg:mr-[128px] lg:flex lg:flex-col items-start">
        <h1 className="h1 text-center text-2xl lg:w-1/3 lg:mb-8 lg:text-left text-primary lg:leading-10">
          {lengaje? lenguajeData.english.reutilizables.footer.h1: lenguajeData.spanish.reutilizables.footer.h1 }
        </h1>
        
          <Link to={{pathname: "/contact"}}  state={{scroll: true, hash: "sendmsg" }} className=" mb-[72px] mt-[40px] ml-auto lg:m-0 mr-auto justify-center sombrabtn flex items-center  w-1/2 lg:w-1/4 gradiente rounded-[32px] pl-[24px] pr-[24px] pt-[12px] pb-[12px]">
            <div>{lengaje? lenguajeData.english.reutilizables.footer.btn: lenguajeData.spanish.reutilizables.footer.btn }</div> <FiCoffee className="ml-1" />{" "}
          </Link>
        
      </div>

      <div
        className={`${
          darkmodeOn ? "text-white" : "text-black"
        } lg:ml-[128px] lg:mr-[128px]`}
      >
        <div className="flex  items-end flex-col m-2">
          <h6>greimilnunez@gmail.com</h6>
          <a href="tel:+18094953388">+1 (809)-495-3388</a>
        </div>
      </div>

      <div className="h-[120px]  bg-primary  flex flex-col  ">
        <div className="lg:ml-[128px] lg:mr-[128px] flex flex-col lg:flex-row lg:justify-between items-center  justify-evenly h-full">
          <div className="flex w-60">
            <h6>
              <AiOutlineCopyrightCircle className="inline" /> Copyright{" "}
              <strong>{"<Greydev/>"}</strong> {lengaje? lenguajeData.english.reutilizables.footer.copyrigth: lenguajeData.spanish.reutilizables.footer.copyrigth }
            </h6>
          </div>

          <div className="flex w-48 justify-around" target="__blank">
            <a href="https://github.com/Greimil">
              <AiFillGithub size={"24px"} />
            </a>

            <a href="https://twitter.com/Greimil1" target="__blank">
              <BsTwitter size={"24px"} />
            </a>

            <a href="https://www.instagram.com/greimil_" target="__blank">
              <AiFillInstagram size={"24px"} />
            </a>

            <a href="https://discordapp.com/users/Greimil#2216"  target="__blank" >
              <SiDiscord size={"24px"} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
