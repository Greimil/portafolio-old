
// import {setCount} from "../../storage/slices/count/index"


const setTheme = (darkmodeOn) => {
  let root = document.getElementById("root");

  if (darkmodeOn) {
    root.classList.add("bg-darkmode");
  } else {
    root.classList.remove("bg-darkmode");
  }
};

function avoidScroll(e, location, navigate) {
  if (e.keyCode === 116 && location.pathname === "/") {
    navigate(location.pathname, { replace: true });
  }
}

const removeblockOverflow = (condition) => {
  const root = document.getElementById("root");
  const ul = document.getElementById("ulhidden");

  if (condition) {
    root.classList.add("overflow-hidden");
    ul.classList.add("flex");
    ul.classList.add("hidden");
  } else {
    root.classList.remove("overflow-hidden");
    ul.classList.remove("flex");
    ul.classList.add("hidden")
  }
};


const smooth = (location, navigate) => {
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


const validate = (e, regex, setValidateinputs) => {
  let element = document.getElementById(e.target.id);
  if (regex.test(e.target.value) === false) {
    element.classList.add("border-rose-500");
    element.nextSibling.classList.remove("hidden");
    element.nextSibling.classList.add("block");
    setValidateinputs(false);
  } else {
    element.classList.remove("border-rose-500");
    element.nextSibling.classList.remove("block");
    element.nextSibling.classList.add("hidden");
    setValidateinputs(true);
  }
};


const enviarForm = () => {
  let input1 = document.getElementById("name");
  let input2 = document.getElementById("email");
  let msg = document.getElementById("msg");
  

  // http://localhost:5000/api/sendemail local 
  // https://apiportafolio-production.up.railway.app/api/sendemail nube


  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: input1.value,
      email: input2.value,
      msg: msg.value,
    }),
  };
  fetch("https://apiportafolio-production.up.railway.app/api/sendemail", requestOptions)
    .then((res) => {
     console.log("correo enviado a grey");
    })
    .catch("Algo salio mal");
};



const  solicitarDatos  = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/dataindex") 
    let data = await res.json() 
    return data
  } catch (error) {
    
    console.error("no se pudo hacer completar la peticion a la API, error: ", error )
  }
}

export { smooth, setTheme, avoidScroll, removeblockOverflow, solicitarDatos, validate, enviarForm };
