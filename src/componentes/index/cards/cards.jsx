import React from "react";

function Cards(props) {
  const { titulo, img, link } = props;
  return (
    <a href={link} target="_blank" rel="noreferrer" >
      <div className="h-[330px] w-[295px] m-2 rounded-[20px] border-2">
        <img  className="rounded-t-[20px]" src={img} alt="" />

        <div className="h-[59px]">
          <h5 className="text-center">{titulo}</h5>
        </div>
      </div>
    </a>
  );
}

export default Cards;
