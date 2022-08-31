import React from "react";
import nodejsimg from "./icons/nodejs.png";
import ex from "./icons/express.png";
import php from "./icons/php.png";
import laravel from "./icons/Laravel.png";
import mongodbimg from "./icons/mongodb.png";
import mongoose from "./icons/mongoose.png";

function ShowBack() {
  return (
    <>
      <div className="w-[160px] h-[155px] bg-iconbox flex flex-col m-1 rounded-[18px]  cursor-pointer justify-evenly  ">
        <a
          href="https://nodejs.org/es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={nodejsimg}
            className="w-[64px] h-[64px] block ml-auto mr-auto"
            alt="nodejsimgLogo"
          />
          <h3 className="text-center pb-1">
            {" "}
            <strong>NODEJS</strong>
          </h3>
        </a>
      </div>

      <div className="w-[160px] h-[155px] bg-iconbox flex flex-col m-1 rounded-[18px]  cursor-pointer justify-evenly ">
        <a
          href="https://expressjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ex}
            className="w-[64px]  block ml-auto mr-auto"
            alt="exLogo"
          />
          <h3 className="text-center pb-1">
            {" "}
            <strong>EXPRESSJS</strong>
          </h3>
        </a>
      </div>

      <div className="w-[160px] h-[155px] bg-iconbox flex flex-col m-1 rounded-[18px]  cursor-pointer justify-evenly ">
        <a
          href="https://www.php.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={php}
            className="w-[64px] h-[64px] aspect-square block ml-auto mr-auto"
            alt="phpLogo"
          />
          <h3 className="text-center pb-1">
            {" "}
            <strong>PHP</strong>
          </h3>
        </a>
      </div>

      <div className="w-[160px] h-[155px] bg-iconbox flex flex-col m-1 rounded-[18px]  cursor-pointer justify-evenly ">
        <a
          href="https://laravel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={laravel}
            className="w-[64px] h-[64px] block ml-auto mr-auto"
            alt="laravelLogo"
          />
          <h3 className="text-center pb-1">
            {" "}
            <strong>LARAVEL</strong>
          </h3>
        </a>
      </div>

      <div className="w-[160px] h-[155px] bg-iconbox flex flex-col m-1 rounded-[18px]  cursor-pointer justify-evenly ">
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={mongodbimg}
            className="w-[64px] h-[64px] block ml-auto mr-auto"
            alt="mongodbimgLogo"
          />
          <h3 className="text-center pb-1">
            {" "}
            <strong>MONGO DB</strong>
          </h3>
        </a>
      </div>

      <div className="w-[160px] h-[155px] bg-iconbox flex flex-col m-1 rounded-[18px]  cursor-pointer justify-evenly ">
        <a
          href="https://mongoosejs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={mongoose}
            className="w-[64px] h-[64px] block ml-auto mr-auto"
            alt="mongooseLogo"
          />
          <h3 className="text-center pb-1">
            {" "}
            <strong>MONGOOSE</strong>
          </h3>
        </a>
      </div>
    </>
  );
}

export default ShowBack;
