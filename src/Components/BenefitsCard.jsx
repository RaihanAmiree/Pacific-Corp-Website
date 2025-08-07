import React from 'react'

const BenefitsCard = (props) => {
  return (
    <div className='w-[370px] h-[350px] bg-white  py-[55px] px-[35px] rounded-xl duration-100 linear hover:z-10 hover:shadow-[0_10px_30px_0_rgba(0,0,0,0.15)]'>
                  <div className='inline-block rounded-[10px] border-[#89D32A]/20 border-[1.44px] p-[24px]'>
                <img src={props.image} alt="" />
            </div>
            <h2 className='font-sans text-[22px] font-[700] mt-[30px] mb-[10px]'>{props.name}</h2>
            <p className='font-sans text-[16px] text-[#676767] w-[300px] mx-auto mb-[10px]'>{props.detail}</p>
            
    </div>
  )
}

export default BenefitsCard
