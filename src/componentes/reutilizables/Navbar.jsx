import React from "react";
import { BiWorld } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Li from "./Li";
import { useDispatch, useSelector } from "react-redux";
import { toogleTheme } from "../storage/slices/theme";
import Uloculto from "./Uloculto";
import {removeblockOverflow} from "../index/logic/logic"
import  {switchLenguaje} from "../storage/slices/lenguaje/index"






const Navbar = (props) => {
  const { listamenu, links, isIndex, hash, scroll } = props;
  const { darkmodeOn } = useSelector((state) => state.theme);
  const lengaje = useSelector((state)=> state.lenguaje.value)
  const dispatch = useDispatch();
  
  const clases = [
    "font-semibold hover:bg-primaryDardker cursor-pointer  hover:rounded-[5px] min-h-full",
    "font-semibold hover:bg-primaryDardker cursor-pointer   hover:rounded-[5px] min-h-full",
  ];
  const clasesUloculto = ["text-center font-semibold p-2 cursor-pointer", "text-center font-semibold p-2 cursor-pointer"]

  const deplegarMenu = () => {
    const ul = document.getElementById("ulhidden");
    const root = document.getElementById("root")

    if (ul.classList.contains("hidden")) {
      ul.classList.remove("hidden");
      ul.classList.add("flex");
      ul.classList.add("flex-col")
      root.classList.add("overflow-hidden")
      
    
    } else {
      ul.classList.remove("flex");
      ul.classList.add("hidden");
      removeblockOverflow()
      
    }
  };


  const localStoreLogic = (condition) => {
    condition ? localStorage.setItem("bgColor", "rgba(33, 37, 41, 1)"): localStorage.removeItem("bgColor")
  }

  const switchLenguajeNav = (condition) => {
    condition === false ? localStorage.setItem("lenguaje", "En"): localStorage.removeItem("lenguaje")
  }


  


  return (
    <nav id="nav" className="bg-primary     w-full">
      <div className=" flex justify-around items-center min-h-[64px] ">
        <h5 className=" cursor-pointer text-black font-bold text-lg">
          {"<GreyDev/>"}
        </h5>{" "}
        <ul className=" hidden lg:flex  justify-between w-[492px] min-h-full items-center">
          <Li
            link={links[0]}
            leyenda={listamenu[0]}
            isIndex={isIndex[0]}
            hash={hash[0]}
            scroll={scroll[0]}
            clases={clases}
            
          />
          <Li
            link={links[1]}
            leyenda={listamenu[1]}
            isIndex={isIndex[1]}
            hash={hash[1]}
            scroll={scroll[1]}
            clases={clases}
            
          />
          <Li
            link={links[2]}
            leyenda={listamenu[2]}
            isIndex={isIndex[2]}
            hash={hash[2]}
            scroll={scroll[2]}
            clases={clases}
            
          />
          <Li
            link={links[3]}
            leyenda={listamenu[3]}
            isIndex={isIndex[3]}
            hash={hash[3]}
            scroll={scroll[3]}
            clases={clases}
            
          />
        </ul>
        <div className="w-[72px] flex justify-center">
          <span title="Cambiar idioma" className="pr-[12px]" onClick={()=> {
            dispatch(switchLenguaje())
            switchLenguajeNav(lengaje)
          }} >
            <BiWorld size={"24px"} className="cursor-pointer" />
          </span>
          <span className=" pl-[12px]" onClick={() => dispatch(toogleTheme())}>
            {darkmodeOn ? (
              <BsFillSunFill size={"24px"} title="Cambiar a modo claro" onClick={()=> localStoreLogic(false)} />
            ) : (
              <BsMoonStarsFill size={"24px"} title="Cambiar a modo oscuro" onClick={ ()=> localStoreLogic(true)} />
            )}
          </span>
        </div>
        <GiHamburgerMenu
          className="cursor-pointer lg:hidden"
          size={"24px"}
          onClick={() =>  {
            deplegarMenu(true) 
            }}
        />
      </div>
            
        <Uloculto links={links}
        listamenu={listamenu}
        isIndex={isIndex}
        hash={hash}
        scroll={scroll}
        clasesUloculto={clasesUloculto} />
      
    </nav>
  );
};



export default Navbar;

