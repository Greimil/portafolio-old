import React from "react";
import { FiCoffee } from "react-icons/fi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { useSelector } from "react-redux";

export default function Footer() {
  const { darkmodeOn } = useSelector((state) => state.theme);

  return (
    <footer id="footer" className="bg-inherit border-t-1 border-white">
      <div className=" lg:ml-[128px] pt-[128px] lg:mr-[128px] lg:flex lg:flex-col items-start">
        <h1 className="h1 text-center text-2xl lg:w-1/3 lg:mb-8 lg:text-left text-primary lg:leading-10">
          ¿Tienes un proyecto en mente? contactame y nos tomamos un cafe
        </h1>
        <button className=" mb-[72px] mt-[40px] ml-auto lg:m-0 mr-auto justify-center sombrabtn flex items-center  w-1/2 lg:w-1/4 gradiente rounded-[32px] pl-[24px] pr-[24px] pt-[12px] pb-[12px]">
          <div>Ir a tomar cafe!</div> <FiCoffee className="ml-1" />{" "}
        </button>
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
              <strong>{"<Greydev/>"}</strong> 2022. Todos los derechos
              reservados
            </h6>
          </div>

          <div className="flex w-48 justify-around">
            <a href="https://github.com/Greimil">
              <AiFillGithub size={"24px"} />
            </a>

            <a href="https://twitter.com/Greimil1">
              <BsTwitter size={"24px"} />
            </a>

            <a href="https://www.instagram.com/greimil_">
              <AiFillInstagram size={"24px"} />
            </a>

            <a href="https://discordapp.com/users/Greimil#2216">
              <SiDiscord size={"24px"} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
