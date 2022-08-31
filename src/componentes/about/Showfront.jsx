import React from "react";
import html from "./icons/html5.png";
import css from "./icons/css3.png";
import js from "./icons/js.png";
import reactimg from "./icons/react.png";
import bootstrapimg from "./icons/bootstrap.png";
import tailwind from "./icons/tailwind.png";

function Showfront() {
  return (
    <>
      <div className="w-[160px] h-[155px] bg-iconbox flex flex-col m-1 rounded-[18px]  cursor-pointer justify-evenly ">
        <a
          href="https://developer.mozilla.org/es/docs/Web/HTML"
          target="__blank"
        >
          {" "}
          <img
            src={html}
            className="w-[64px] h-[64px] block ml-auto mr-auto"
            alt="HtmlLogo"
          />
          <h3 className="text-center pb-1">
            {" "}
            <strong>HTML5</strong>
          </h3>{" "}
        </a>
      </div>

      <div className="w-[160px] h-[155px] bg-iconbox flex flex-col m-1 rounded-[18px]  cursor-pointer justify-evenly ">
        <a
          href="https://developer.mozilla.org/es/docs/Web/CSS"
          target="__blank"
        >
          <img
            src={css}
            className="w-[64px] h-[64px] block ml-auto mr-auto"
            alt="cssLogo"
          />
          <h3 className="text-center pb-1">
            {" "}
            <strong> CSS</strong>
          </h3>
        </a>
      </div>

      <div className="w-[160px] h-[155px] bg-iconbox flex flex-col m-1 rounded-[18px]  cursor-pointer justify-evenly ">
        <a
          href="https://developer.mozilla.org/es/docs/Web/JavaScript"
          target="__blank"
        >
          <img
            src={js}
            className="w-[64px] h-[64px] block ml-auto mr-auto"
            alt="jsLogo"
          />
          <h3 className="text-center pb-1">
            {" "}
            <strong> JAVASCRIPT</strong>
          </h3>
        </a>
      </div>

      <div className="w-[160px] h-[155px] bg-iconbox flex flex-col m-1 rounded-[18px]  cursor-pointer justify-evenly ">
        <a
          href="https://es.reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={reactimg}
            className="w-[64px] h-[64px] block ml-auto mr-auto"
            alt="reactimgLogo"
          />
          <h3 className="text-center pb-1">
            {" "}
            <strong> REACT</strong>
          </h3>
        </a>
      </div>

      <div className="w-[160px] h-[155px] bg-iconbox flex flex-col m-1 rounded-[18px]  cursor-pointer justify-evenly ">
        <a
          href="https://getbootstrap.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={bootstrapimg}
            className="w-[64px] h-[64px] block ml-auto mr-auto"
            alt="bootstrapimgLogo"
          />
          <h3 className="text-center pb-1">
            {" "}
            <strong> BOOTSTRAP</strong>
          </h3>
        </a>
      </div>

      <div className="w-[160px] h-[155px] bg-iconbox flex flex-col m-1 rounded-[18px]  cursor-pointer justify-evenly">
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={tailwind}
            className="w-[64px] h-[64px] block ml-auto mr-auto"
            alt="tailwindLogo"
          />
          <h3 className="text-center pb-1">
            {" "}
            <strong> TAILWIND</strong>
          </h3>
        </a>
      </div>
    </>
  );
}

export default Showfront;
