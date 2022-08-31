import React from "react";
import { useRef } from "react";



function ToggleBtn(props) {
  const {setBackFront} = props
  const btn1 = useRef(null);
  const btn2 = useRef(null);

  const toogleElement = (activebtn1, btn2) => {
    if (!activebtn1.current.classList.contains("activeBtnTecnologias")) {
      activebtn1.current.classList.add("activeBtnTecnologias");
      btn2.current.classList.remove("activeBtnTecnologias");
    }
  };

  return (
    <div className="h-[64px]  ml-auto mr-auto w-4/5 lg:w-1/5 bg-darkbtn rounded-[45px] flex mt-[64px] mb-[64px]">
      {" "}
      <button
        id="btnTec1"
        ref={btn1}
        onClick={() => {
          toogleElement(btn1, btn2)
          setBackFront(true)
        }}
        className="h-[64px] text-white w-1/2 activeBtnTecnologias  font-semibold"
      >
        Front-end
      </button>{" "}
      <button
        id="btnTec2"
        onClick={() => {
          toogleElement(btn2, btn1);
          setBackFront(false)
        }}
        ref={btn2}
        className="h-[64px]  w-1/2 text-white font-semibold "
      >
        Back-end
      </button>{" "}
    </div>
  );
}

export default ToggleBtn;
