import React from "react";
import Li from "./Li";
import { useSelector } from "react-redux";

const Uloculto = (props) => {
  const { darkmodeOn } = useSelector((state) => state.theme);
  const { links, listamenu, isIndex, hash, clasesUloculto, scroll } = props;
  
  
  return (
    <ul
      id="ulhidden"
      className={
        darkmodeOn
          ? "bg-menuUlwhite text-black justify-center w-full min-h-[90vh]  hidden lg:hidden p-3"
          : "bg-menuUldark text-white justify-center w-full min-h-[90vh] hidden lg:hidden p-3"
      }
    >
      <Li
        link={links[0]}
        leyenda={listamenu[0]}
        isIndex={isIndex[0]}
        hash={hash[0]}
        scroll={scroll[0]}
        clases={clasesUloculto}
      />
      <Li
        link={links[1]}
        leyenda={listamenu[1]}
        isIndex={isIndex[1]}
        hash={hash[1]}
        scroll={scroll[1]}
        clases={clasesUloculto}
      />
      <Li
        link={links[2]}
        leyenda={listamenu[2]}
        isIndex={isIndex[2]}
        hash={hash[2]}
        scroll={scroll[2]}
        clases={clasesUloculto}
      />
      <Li
        link={links[3]}
        leyenda={listamenu[3]}
        isIndex={isIndex[3]}
        hash={hash[3]}
        scroll={scroll[3]}
        clases={clasesUloculto}
      />
    </ul>
  );
};

export default Uloculto;
