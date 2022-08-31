import React from 'react'
import {AiFillGithub} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"


export default function Iconsarea() {
  return (
    <div className='gradiente' >
        <div className='ml-[128px] mr-[128px] min-h-[470px]  flex-wrap flex justify-around items-center'>

            <div className='flex flex-col items-center' > 
                <AiFillGithub color='black' size={"40px"} />
                <strong>GITHUB</strong>
            </div>

            
            <div className='flex flex-col items-center' > 
                <FaFacebookF color='black' size={"40px"} />
                <strong>FACEBOOK</strong>
            </div>

            <div className='flex flex-col items-center' > 
                <AiFillInstagram color='black' size={"40px"} />
                <strong>INSTAGRAM</strong>
            </div>

            <div className='flex flex-col items-center' > 
                <BsLinkedin color='black' size={"40px"} />
                <strong>LINKEDIN</strong>
            </div>
        

        </div>
    </div>
  )
}
