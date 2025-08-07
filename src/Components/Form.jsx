import React, { useState } from 'react'
import Button from './Button'
  import { ToastContainer, toast, Bounce } from 'react-toastify';




const Form = () => {

    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const HandleChange = (e)=>{
        setEmail(e.target.value)
    }

    function handleClick(e) {
        e.preventDefault()
        if(email==""){
        setError("")
        notify()
        return;
        }
        else if(!email.includes('@')){
            setError("Please Enter A Valid Email Address");
            setTimeout(() => setError(""), 2000);
            invalid()
            return;
        }
        else{
            setError("")
            success()
        }
    }

    



    const notify = () =>  toast.error('Please, Enter Your Email', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    const success = () =>  toast.success('Email Submitted Successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    const invalid = () =>  toast.error('Invalid Email', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });

  

  return (
    <>
    <div className='flex gap-5 justify-center mt-[20px] mb-[30px]'>
      <input className='w-[320px] h-[56px]  bg-white rounded-xl font-sans px-5 focus:outline-none focus:ring-3 focus:ring-[#89D32A]' htmlFor='email' type="email" id='email' placeholder='Your Email' onChange={HandleChange}/>
      <Button type='submit' onClick={handleClick}>Get started</Button>
      
      <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="dark"
            transition={Bounce}
/>
    </div>
    <p className='text-red-400 font-[600] mt-[-10px] mb-[30px] mx-auto w-[500px] text-start'>{error}</p>
    </>
  )
}


export default Form
