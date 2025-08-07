import React from 'react'
import Container from './Container'
import Logo from '../assets/Logo.png'
import Button from './Button'

const NavBar = () => {
  return (
    <>

    <nav className='flex justify-between items-center'>

        <div className='flex gap-[20px]'>
            <div>
                <img src={Logo} alt="Hello" />
            </div>
            <h1 className='text-[35px] text-[#313131] font-mulish font-[760]'>Pacific Corp.</h1>
        </div>


        <div>
            <ul className='flex text-[16px] text-[#676767] gap-7'>
                <li><a href="">Home</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
        </div>

        <Button>Call Now</Button>

    </nav>
    
    </>
  )
}

export default NavBar
