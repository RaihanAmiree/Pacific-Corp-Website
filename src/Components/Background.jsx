import React from 'react'
import Bg from "../assets/Vector.png";
import Image from "../assets/Group 4.png";

const Background = () => {
  return (
    <>
        <div className='absolute -z-10 inset-0'>
            <img src={Bg} alt="" />
        </div>
        <div className="absolute -z-10 right-0 top-[140px]">
            <img src={Image} alt="" />
        </div>
    </>
    
  )
}

export default Background
