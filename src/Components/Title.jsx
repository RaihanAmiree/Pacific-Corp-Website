import React from 'react'

const Title = (props) => {
  return (
    <div className='text-center font-sans mt-[130px]'>
      <h2 className='text-[16px] text-[#89D32A] font-[700]'>{props.name}</h2>
      <div>-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -</div>
      <h3 className='text-[40px] text-[#313131] font-[700] mb-[20px]'>{props.title}</h3>
      <p className='text-[16px] text-[#676767] w-[602px] mx-auto'>{props.description}</p>
    </div>
  )
}

export default Title