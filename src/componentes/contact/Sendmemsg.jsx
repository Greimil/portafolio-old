import React from "react";
import EmailSvg from "../iconos/emailSvg";
import { useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import lenguajeData from "../../lenguaje.json";
import { useSelector } from "react-redux";
import { validate, enviarForm } from "../index/logic/logic";

function Sendmemsg() {
  const input1 = useRef(null);
  const [validateinputs, setValidateinputs] = useState(false);
  const lengaje = useSelector((state) => state.lenguaje.value);

  return (
    <div
      className="lg:pl-[128px] lg:pr-[128px] flex justify-evenly items-center  pt-[92px] pb-36 bg-inherit min-h-[100%]"
      id="sendmsg"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let modal = document.getElementById("modalAviso");
          let name = document.getElementById("name")
          let email = document.getElementById("email")
          let txtarea = document.getElementById("msg")

          if (validateinputs) {
            enviarForm();
            modal.classList.remove("hiddenPersona");
            modal.classList.add("visiblePersona");
            name.value = ""
            email.value = ""
            txtarea.value = ""


            setTimeout(() => {
              modal.classList.remove("visiblePersona");
              modal.classList.add("hiddenPersona");
            }, 5500);
          }
        }}
        className=" w-4/5 lg:w-2/5"
      >
        <h2 className="h2 text-xl lg:text-4xl  text-center text-secondary">
          {lengaje
            ? lenguajeData.english.contacto.sendmemsg.h2
            : lenguajeData.spanish.contacto.sendmemsg.h2}
        </h2>

        <div className="flex justify-between mt-[32px]">
          <div className="flex flex-col w-[49%] ">
            <label htmlFor="name">
              {" "}
              <strong className="text-secondary">
                {lengaje
                  ? lenguajeData.english.contacto.sendmemsg.nombre
                  : lenguajeData.spanish.contacto.sendmemsg.nombre}
              </strong>
            </label>
            <input
              ref={input1}
              className=" rounded-[10px] border-2 border-secondary  outline-none  min-h-[44px]"
              type="text"
              id="name"
              name="name"
              onChange={(e) => {
                let regex =
                  /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
                validate(e, regex, setValidateinputs);
              }}
            />
            <strong id="msjErrName" className="text-[12px] text-red-500 hidden">
              {lengaje
                ? lenguajeData.english.contacto.sendmemsg.errors.errName
                : lenguajeData.spanish.contacto.sendmemsg.errors.errName}
            </strong>
          </div>

          <div className="flex flex-col w-[49%] ">
            <label htmlFor="email">
              {" "}
              <strong className="text-secondary">
                {lengaje
                  ? lenguajeData.english.contacto.sendmemsg.email
                  : lenguajeData.spanish.contacto.sendmemsg.email}
              </strong>
            </label>
            <input
              className="rounded-[10px] border-2 border-secondary  outline-none  min-h-[44px]"
              type="text"
              id="email"
              name="email"
              onChange={(e) => {
                let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                validate(e, regex, setValidateinputs);
              }}
            />
            <strong id="msjErrName" className="text-[12px] text-red-500 hidden">
              {lengaje
                ? lenguajeData.english.contacto.sendmemsg.errors.errEmail
                : lenguajeData.spanish.contacto.sendmemsg.errors.errEmail}
            </strong>
          </div>
        </div>

        <div className="flex flex-col mt-[32px]">
          <label htmlFor="msj">
            <strong className="text-secondary">
              {lengaje
                ? lenguajeData.english.contacto.sendmemsg.msg
                : lenguajeData.spanish.contacto.sendmemsg.msg}
            </strong>
          </label>
          <textarea
            name="msg"
            id="msg"
            className="rounded-[10px] border-2 border-secondary  min-h-[184px] resize-none outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className=" mt-[32px] w-full flex justify-center items-center pl-[48px]  pr-[48px] pt-[24px] pb-[24px] gradiente rounded-[44px] font-semibold text-[20px]"
        >
          {lengaje
            ? lenguajeData.english.contacto.sendmemsg.btn
            : lenguajeData.spanish.contacto.sendmemsg.btn}
          <IoIosSend />
        </button>

        <div
          id="modalAviso"
          className=" text-center gradiente m-6 rounded-[5px] h-8  flex flex-col items-center justify-center hiddenPersona"
        >
          <strong className="">
            {lengaje
              ? lenguajeData.english.contacto.sendmemsg.msgenviado
              : lenguajeData.spanish.contacto.sendmemsg.msgenviado}
          </strong>
        </div>
      </form>

      <EmailSvg className="hidden lg:block" />
    </div>
  );
}

export default Sendmemsg;
