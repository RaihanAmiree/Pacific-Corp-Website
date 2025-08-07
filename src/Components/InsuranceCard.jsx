import React from 'react'

const InsuranceCard = (props) => {
  return (
    <>
        <div className=' mt-[155px] w-[370px] h-[377px] rounded-[10px] bg-white shadow-[0_8px_20px_0_rgba(0,0,0,0.15)] py-[38px] px-[45px] ease-in-out duration-350 hover:mt-[48px]'>
            <div className='inline-block rounded-[10px] border-[#89D32A]/20 border-[1.44px] p-[24px]'>
                <img src={props.image} alt="" />
            </div>
            <h2 className='font-sans text-[25px] font-[700] mt-[31px] mb-[20px]'>{props.name}</h2>
            <p className='font-sans text-[16px] text-[#676767] w-[250px] mx-auto mb-[10px]'>{props.detail}</p>
            <a className='font-sans text-[16px] text-[#313131] font-[700]' href="">Learn More →</a>
        </div>
    </>
  )
}

export default InsuranceCard
