import React  from "react";
import Heroarea from "./index/heroarea";
import Navbar from "./reutilizables/Navbar";
import Mitabajo from "./index/Mitabajo";
import Servicios from "./index/Servicios";
import Footer from "./reutilizables/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {setTheme} from "./index/logic/logic"
import { toogleTheme } from "./storage/slices/theme";
import {useDispatch} from "react-redux"

function Index() {
  let location = useLocation();
  let navigate = useNavigate();
  const { darkmodeOn } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  
 

  const smooth = () => {
    if (location.state != null) {
      if (location.state.scroll) {
        const element = document.getElementById(location.state.hash);
        element.scrollIntoView({ behavior: "smooth", block: "center" });
    

        setTimeout(()=> {
          navigate(location.pathname, { replace: true });
        }, 1500)
      }
    }
  };

  

  

  useEffect(() => {
    
   
      setTheme(darkmodeOn)
    smooth();

    

  });
  
  useEffect(() => {
    
    if (localStorage.getItem("bgColor")  === "rgba(33, 37, 41, 1)" && darkmodeOn === false ) {
      dispatch(toogleTheme()) 
      setTheme(darkmodeOn)
    }
  }, []);

  return (
    <>
      <Navbar
        listamenu={["MI TRABAJO", "SERVICIOS", "SOBRE MI", "CONTACTO"]}
        isIndex={[true, true, false, false]}
        links={["mitrabajo", "servicios", "/about", "/contact"]}
        hash={[0, 0, 0, 0]}
        scroll={[false, true, true, false]}
      />
      <Heroarea darkmodeOn={darkmodeOn} />
      <Mitabajo />
      <Servicios />
      <Footer darkmodeOn={darkmodeOn} />
    </>
  );
}

export default Index;
