import React from "react";
import EmailSvg from "../iconos/emailSvg";
import { useRef } from "react";
import { IoIosSend } from "react-icons/io";

function Sendmemsg() {
  const input1 = useRef(null);

  return (
    <div className="lg:pl-[128px] lg:pr-[128px] flex justify-evenly items-center  pt-[92px] pb-36 bg-inherit min-h-[100%]">
      <form className=" w-4/5 lg:w-2/5" action="" method="post">
        <h2 className="h2 text-xl lg:text-4xl  text-center text-secondary">Enviame un mensaje </h2>

        <div className="flex justify-between mt-[32px]">
          <div className="flex flex-col w-[49%] ">
            <label htmlFor="name">
              {" "}
              <strong className="text-secondary">Nombre</strong>
            </label>
            <input
              ref={input1}
              className=" rounded-[10px] border-2 border-secondary  outline-none  min-h-[44px]"
              type="text"
              id="name"
            />
          </div>

          <div className="flex flex-col w-[49%] ">
            <label htmlFor="email">
              {" "}
              <strong className="text-secondary">Email</strong>
            </label>
            <input
              className="rounded-[10px] border-2 border-secondary  outline-none  min-h-[44px]"
              type="text"
              id="email"
            />
          </div>
        </div>

        <div className="flex flex-col mt-[32px]">
          <label htmlFor="msj">
            <strong className="text-secondary">Tu mensaje</strong>
          </label>
          <textarea className="rounded-[10px] border-2 border-secondary  min-h-[184px] resize-none outline-none"></textarea>
        </div>

        <button className=" mt-[32px] w-full flex justify-center items-center pl-[48px]  pr-[48px] pt-[24px] pb-[24px] gradiente rounded-[44px] font-semibold text-[20px]">
          Enviar <IoIosSend />
        </button>
      </form>

      <EmailSvg className="hidden lg:block" />
    </div>
  );
}

export default Sendmemsg;
