import React from "react";

function Campostxtservice(props) {
   const {text, link, h3} = props
    return (
    <div className="max-w-[450px] m-2" >
        <img className="w-[72px] h-[72px] block m-auto" src={link} alt="XD" />
        <h2 className="h2   text-center text-white"  >{h3}</h2>
        <p className="text-white font-medium p-5  text-[16px]  lg:text-[20px] text-center lg:text-center">
            {text}
        </p>
    </div>)
    
}

export default Campostxtservice;
