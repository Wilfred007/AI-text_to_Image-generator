import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";


const  Login = () => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <form className='relative bg-white p-10 rounded-xl text-slate-500'>
            <h1 className='text-center text-2xl text-neutral-500 font-medium'>Sign Up</h1>
            <p className='text-sm text-gray-500'>Welcome back! Please sign in to continue</p>

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5 border-gray-200'>
                <FaUserCircle size={25} className='drop-shadow' />
                <input type="text" className='outline-none text-sm' placeholder='Full Name' required />
            </div>
             <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5 border-gray-200'>
                <MdEmail size={25} className='drop-shadow' />
                <input type="email" className='outline-none text-sm' placeholder='Email' required />
            </div>
             <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5 border-gray-200'>
                <FaLock size={25} className='drop-shadow' />
                <input type="password" className='outline-none text-sm' placeholder='Full Name' required />
            </div>
            <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>
            <button className='bg-blue-600 w-full text-white py-2 rounded-full'>Create Account</button>

            <p className='mt-5 text-center'>Don't have an account? <span>Sign Up</span></p>
        </form>
    </div>
  )
}

export default  Login