import React from 'react'
import quote from '../assets/quote-left.png'
import icon from '../assets/Icon.png'

const CommentBox = (props) => {
  return (
    <>
         <div className='bg-white w-[447px] h-[492px] rounded-xl py-[40px] px-[55px]'>
            <img src={quote} alt=""/>
            <h1 className='text-[25px] font-[600] text-[#676767] text-start w-[356px] mt-[20px] mb-[30px]'>{props.comment}</h1>
            <h2 className='text-[20px] font-[700] text-[#313131] text-start mb-[10px]'>{props.name}</h2>
            <div className='flex text-[16px] text-[#676767] italic gap-2 items-center'>
                <img src={icon} alt="" />
                <p>Verified customer</p>
            </div>
        </div>
    </>
   
  )
}

export default CommentBox
