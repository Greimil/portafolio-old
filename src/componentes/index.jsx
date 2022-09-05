import React  from "react";
import Heroarea from "./index/heroarea";
import Navbar from "./reutilizables/Navbar";
import Mitabajo from "./index/Mitabajo";
import Servicios from "./index/Servicios";
import Footer from "./reutilizables/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect} from "react";
import { useSelector } from "react-redux";
import {setTheme, smooth} from "./index/logic/logic"
import { toogleTheme } from "./storage/slices/theme";
import {useDispatch} from "react-redux"
import lenguajeData from "../lenguaje.json"
import  {switchLenguaje} from "./storage/slices/lenguaje/index"


function Index() {
  let location = useLocation();
  let navigate = useNavigate();
  const { darkmodeOn } = useSelector((state) => state.theme);
  const lengaje = useSelector((state)=> state.lenguaje.value )
  const dispatch = useDispatch();
  
  
  console.log(lenguajeData);
  


  useEffect(() => {
      setTheme(darkmodeOn)
      smooth(location, navigate);
  });
  
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
        listamenu={lengaje? lenguajeData.english.reutilizables.NavBar.index: lenguajeData.spanish.reutilizables.NavBar.index  }
        isIndex={[true, true, false, false]}
        links={["mitrabajo", "servicios", "/about", "/contact"]}
        hash={[0, 0, 0, 0]}
        scroll={[false, true, true, false]}
      />
      <Heroarea  darkmodeOn={darkmodeOn} />
      <Mitabajo />
      <Servicios />
      <Footer darkmodeOn={darkmodeOn} />
    </>
  );
}

export default Index;
