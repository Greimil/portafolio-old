import React from "react";

function Cards(props) {
  const { titulo, img, link } = props;
  return (
    <a href={link} target="_blank" rel="noreferrer" >
      <div className="h-[330px] w-[295px] m-2 rounded-[20px] border-2">
        <img  className="rounded-t-[20px] h-4/5 w-full" src={img} alt="" />

        <div className="h-[20%] flex items-center justify-center rounded-b-[20px] bg-secondary">
          <h5 className="text-center font-semibold">{titulo}</h5>
        </div>
      </div>
    </a>
  );
}

export default Cards;
