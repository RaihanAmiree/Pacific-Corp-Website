import React from 'react'
import Logo from '../assets/Logo.png'
import Google from '../assets/Google.png'
import Twitter from '../assets/Twitter.png'
import Instagram from '../assets/Instagram.png'
import LinkedIn from '../assets/LinkedIn.png'

const Footer = () => {
  return (
    <div className='flex justify-between py-[130px] items-start'>
      
      
      <div>
        <div className="flex gap-3 items-center">
            <img src={Logo} alt="" />
            <h1 className='font-mulish text-[26.39px] font-[700] text-[#313131]'>Pacific Corp.</h1>
        </div>
        <p className='w-[260px] text-[16px] text-[#676767] text-start mt-[20px] mb-[32px]'>Build a modern and creative website with crealand</p>
        <div className="flex gap-[8px]">
            <img src={Google} alt="" />
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" />
            <img src={LinkedIn} alt="" />
        </div>
      </div>


      <div className='text-start'>
        <h2 className='text-[18px] font-[700] text-[#313131] mb-[31px]'>Product</h2>
        <ul className='text-[16px] text-[#676767] mb-[31px] space-y-[24px]'>
            <li><a href="">Landingpage</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Documentation</a></li>
            <li><a href="">ReferralProgram</a></li>
            <li><a href="">Pricing</a></li>
        </ul>
      </div>
      <div className='text-start'>
        <h2 className='text-[18px] font-[700] text-[#313131] mb-[31px]'>Services</h2>
        <ul className='text-[16px] text-[#676767] mb-[31px] space-y-[24px]'>
            <li><a href="">Documentation</a></li>
            <li><a href="">Design</a></li>
            <li><a href="">Themes</a></li>
            <li><a href="">Illustrations</a></li>
            <li><a href="">UI Kit</a></li>
        </ul>
      </div>
      <div className='text-start'>
        <h2 className='text-[18px] font-[700] text-[#313131] mb-[31px]'>Company</h2>
        <ul className='text-[16px] text-[#676767] mb-[31px] space-y-[24px]'>
            <li><a href="">About</a></li>
            <li><a href="">Terms</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Careers</a></li>
        </ul>
      </div>
      <div className='text-start'>
        <h2 className='text-[18px] font-[700] text-[#313131] mb-[31px]'>More</h2>
        <ul className='text-[16px] text-[#676767] mb-[31px] space-y-[24px]'>
            <li><a href="">Documentation</a></li>
            <li><a href="">License</a></li>
            <li><a href="">Changelog</a></li>
        </ul>
      </div>



    </div>
  )
}

export default Footer
