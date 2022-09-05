import React, {useEffect} from "react";
import Navbar from "./reutilizables/Navbar";
import HeroAreaAbout from "./about/heroAreaAbout";
import TecnologiesUsed from "./about/TecnologiesUses";
import Footer from "./reutilizables/Footer";
import { useSelector, useDispatch } from "react-redux";
import {setTheme} from "./index/logic/logic"
import {toogleTheme} from "./storage/slices/theme"
import lenguajeData from "../lenguaje.json"
import { switchLenguaje } from "./storage/slices/lenguaje/index";

function Aboutme() {
  const { darkmodeOn } = useSelector((state) => state.theme);
  const lengaje = useSelector((state)=> state.lenguaje.value )
  const dispatch = useDispatch();
  


  
  useEffect(()=> {
    setTheme(darkmodeOn)
    
  })

  useEffect(() => {
    
    if (localStorage.getItem("bgColor")  === "rgba(33, 37, 41, 1)" && darkmodeOn === false ) {
      dispatch(toogleTheme()) 
      setTheme(darkmodeOn)
      
    }

    if (localStorage.getItem("lenguaje") === "En" && lengaje === false ) {
      dispatch(switchLenguaje())
    }


  }, []);

  return (
    <>
      <Navbar
        listamenu={lengaje? lenguajeData.english.reutilizables.NavBar.Sobremi: lenguajeData.spanish.reutilizables.NavBar.Sobremi }
        isIndex={[false, false, false, false]}
        links={["/", "/", "/", "/contact"]}
        hash={[0, "mitrabajo", "servicios", 0]}
        scroll={[false, true, true, false]}
      />
  
        <HeroAreaAbout darkmodeOn={darkmodeOn} />
     
      
      <TecnologiesUsed darkmodeOn={darkmodeOn} />

      <Footer />
    </>
  );
}

export default Aboutme;
