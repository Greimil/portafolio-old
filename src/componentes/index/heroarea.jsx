import React from 'react'
import DeveloperSvg from '../iconos/developerSvg'

const Heroarea = (props) => {
  const {darkmodeOn} = props
  return (
    <div id='heroIndex' className='flex flex-wrap lg:justify-center bg-inherit items-center min-h-screen min-w-full ' >

        <div className='p-4 lg:w-1/2 flex justify-center items-center flex-col '>
            <h1 className={`${darkmodeOn ? "h1white": "h1"} text-2xl  lg:text-4xl text-center  `} >¡Hey hola! Gracias por estar aqui y ser el visitante numero 12</h1>
            <h3 className={`${darkmodeOn ? "text-white": "text-black"}  lg:text-2xl font-medium   text-center  mt-[32px]`} >Soy Grey, desarrollador web ¿Te gustaria colaborar junto a mi?</h3>
            <button className='sombrabtn gradiente flex items-center justify-center w-4/5 lg:w-1/2 h-[48px] rounded-[32px] mt-[32px] text-[16px] lg:text-[20px] font-semibold pl-[24px] pr-[24px] pt-[12px] pb-[12px]'    >Manos a la obra!</button>
        </div>

           
            <DeveloperSvg className="hidden xl:inline" />
        

    </div>
  )
}

export default Heroarea