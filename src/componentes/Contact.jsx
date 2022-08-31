import React, {useEffect} from "react";
import Navbar from "./reutilizables/Navbar";
import Herosectioncontac from "./contact/Herosectioncontac"
import Sendmemsg from "./contact/Sendmemsg";
import Iconsarea from "./contact/Iconsarea"
import Footer from "./reutilizables/Footer";
import { useSelector , useDispatch} from "react-redux";
import {setTheme} from "./index/logic/logic"
import {toogleTheme} from "./storage/slices/theme"

function Contact() {
  const { darkmodeOn } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  
  useEffect(()=> {
    setTheme(darkmodeOn)
  })

  useEffect(() => {
    
    if (localStorage.getItem("bgColor")  === "rgba(33, 37, 41, 1)" && darkmodeOn === false ) {
      dispatch(toogleTheme()) 
      setTheme(darkmodeOn)
    }
  }, []);

  return (
    <>
      <Navbar
        listamenu={[ "INICIO",  "MI TRABAJO", "SERVICIOS", "SOBRE MI"]}
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
