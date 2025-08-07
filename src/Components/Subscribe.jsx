import React from 'react'
import Form from './Form'

const Subscribe = () => {
  return (
    <div className='py-[130px] bg-[#272727] inset-0 w-screen mt-[130px] subscribe ms-[-40px]'>
        <h1 className='text-white w-[893px] text-[40px] font-[700] mx-auto'>Ready To Get Insured? Submit Your Request And Hear Back As Soon As Tomorrow.</h1>
        <Form></Form>
        <p className='text-[16px] w-[555px] text-white mx-auto'>Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
    </div>
  )
}

export default Subscribe
