import React, {useEffect} from "react";
import Navbar from "./reutilizables/Navbar";
import Herosectioncontac from "./contact/Herosectioncontac"
import Sendmemsg from "./contact/Sendmemsg";
import Iconsarea from "./contact/Iconsarea"
import Footer from "./reutilizables/Footer";
import { useSelector , useDispatch} from "react-redux";
import {setTheme} from "./index/logic/logic"
import {toogleTheme} from "./storage/slices/theme"
import { useLocation, useNavigate } from "react-router-dom";
import {smooth} from "./index/logic/logic"
import lenguajeData from "../lenguaje.json"
import { switchLenguaje } from "./storage/slices/lenguaje";


function Contact() {
  const { darkmodeOn } = useSelector((state) => state.theme);
  const lengaje = useSelector((state)=> state.lenguaje.value )
  const dispatch = useDispatch();
  let location = useLocation();
  let navigate = useNavigate();
  
  useEffect(()=> {
    setTheme(darkmodeOn)
    smooth(location, navigate)
  })

  useEffect(() => {
    
    if (localStorage.getItem("bgColor")  === "rgba(33, 37, 41, 1)" && darkmodeOn === false ) {
      dispatch(toogleTheme()) 
      setTheme(darkmodeOn)


      if (localStorage.getItem("lenguaje") === "En" && lengaje === false ) {
        dispatch(switchLenguaje())
      }

    }
  }, []);

  return (
    <>
      <Navbar
        listamenu={lengaje? lenguajeData.english.reutilizables.NavBar.contacto: lenguajeData.spanish.reutilizables.NavBar.contacto}
        isIndex={[false, false, false, false]}
        links={["/", "/", "/", "/about"]}
        hash={[0, "mitrabajo", "servicios", 0]}
        scroll={[false, true, true, false]}
      />

      <Herosectioncontac  />
      <Sendmemsg  darkmodeOn={darkmodeOn} />
      <Iconsarea/>
      <Footer darkmodeOn={darkmodeOn} ></Footer>

    </>
  );
}

export default Contact;
