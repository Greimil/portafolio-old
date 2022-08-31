import * as React from "react";

const Wave = (props) => {
  return (
    <div className=" overflow-hidden" >
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{
          height: "100%",
          width: "100%",
          background: "inherit"
        }}
        {...props}
      >
        <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{
              stopColor: "#009acc",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: "#0bd99c",
              stopOpacity: 1,
            }}
          />
        </linearGradient>
        <path
          d="M-19.47-19.22C279.62 226.48 245.2-105.08 500 49.98V150H0Z"
          style={{
            stroke: "none",
            fill: "url(#a)",
          }}
        />
      </svg>
    </div>
  );
};

export default Wave;
