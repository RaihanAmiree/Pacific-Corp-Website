import React from 'react'
import left from '../assets/Rectangle 7.png'
import middle from '../assets/Rectangle 8.png'
import right from '../assets/Rectangle 5.png'

const Gallery = () => {
  return (
    <div className='flex justify-between mt-[48px]'>
      <div><img src={left} alt="" /></div>
      <div>
        <img src={middle} alt="" />
        <h1 className='w-[326px] text-[25px] font-[600] mx-auto mt-[20px]'>How to prevent and protect your family from Carbon monoxide</h1>
        <p className='w-[320px] text-[16px] mx-auto mt-[10px] text-[#676767]'>We share common trends, strategies ideas, opinion, short & log stories from the team behind company.</p>
      </div>
      <div><img src={right} alt="" /></div>
    </div>
  )
}

export default Gallery
