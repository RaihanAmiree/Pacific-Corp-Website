import React from 'react'
import icon from '../assets/New-Icon.png'
import star from '../assets/Star.png'


const Rating = (props) => {
  return (
    <>
        <div className='bg-white w-[369px] h-[342px] rounded-xl py-[50px] px-[55px] shadow-[0_10px_30px_0_rgba(0,0,0,0.15)]'>
            <div className="flex gap-[8.64px]">
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
            </div>
            
            <h1 className='text-[16px] text-[#676767] text-start w-[258px] mt-[30px] mb-[30px]'>{props.comment}</h1>

            <div className='flex items-center gap-3'>


                <div>
                    <img src={props.image} alt="" />
                </div>
                <div>
                    <h2 className='text-[20px] font-[600] text-[#313131] text-start'>{props.name}</h2>
                    <div className='flex text-[14px] text-[#676767] italic gap-2 items-center'>
                        <img src={icon} alt="" />
                        <p>Verified customer</p>
                    </div>
                </div>
                
            </div>

            


            
        </div>
    </>
       
  )
}

export default Rating
