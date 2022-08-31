import React from "react";
import { Link as LinkScrool } from "react-scroll";
import { Link } from "react-router-dom";
import {removeblockOverflow} from "../index/logic/logic"

function Li(props) {
  const { isIndex,link, leyenda , hash, scroll, clases} = props;
  
  return (
    <>
      
      {isIndex ? (
        <li className={clases[0]}>
          {" "}
          <LinkScrool
            to={link}
            smooth={true}
            offset={0}
            duration={500}
        onClick={ ()=> {
          removeblockOverflow() 
        } }
>    
            {leyenda}
          </LinkScrool>
        </li>
      ) : (
        <li className={clases[1]}  >
          {" "}
          <Link onClick={ ()=> {
            removeblockOverflow() 
          }} to={{pathname: link}}  state={{scroll, hash}}>{leyenda}</Link>
        </li>
      )}
    </>
  );
}

export default Li;
