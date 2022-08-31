import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { RiSubtractLine } from "react-icons/ri";
import { useState, useRef, useEffect } from "react";

export default function AcordeonMenu(props) {
  const { title, content } = props;
  const [isActive, setIsActive] = useState(false);
  const BnttextColor = useRef(null);
 

  useEffect(() => {
    BnttextColor.current.style.color = "rgba(38, 31, 34, 0.75)";
  }, []);

  return (
    <div className="accordion mt-[32px] disableSelect">
      <div className="accordion-item">
        <div
          ref={BnttextColor}
          className="accordion-title    flex items-center"
          onClick={() => {
            setIsActive(!isActive);

            BnttextColor.current.style.color === "rgba(38, 31, 34, 0.75)"
              ? (BnttextColor.current.style.color = "#000")
              : (BnttextColor.current.style.color = "rgba(38, 31, 34, 0.75)");
          }}
        >
          {isActive ? (
            <RiSubtractLine color="#FC3A79" />
          ) : (
            <BsPlusLg color="#FC3A79" />
          )}
          <div className="text-[24px]">{title}</div>
        </div>
        {isActive && <div className="accordion-content ml-4 disableSelect">{content}</div>}
      </div>
      {/* <GrFormSubtract fill="#FC3A79" color="FC3A79" /> */}
    </div>
  );
}
