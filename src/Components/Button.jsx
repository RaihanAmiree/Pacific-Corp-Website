import React from 'react'

const Button = ({onClick, children, type}) => {
  return (
    <div className='bg-[#89D32A] py-[15px] px-[30px] font-sans text-white font-[600] text-[20px] rounded-2xl inline-block hover:bg-[#78b824] hover:cursor-pointer' onClick={onClick} type={type}>
      {children}
    </div>
  )
}

export default Button
