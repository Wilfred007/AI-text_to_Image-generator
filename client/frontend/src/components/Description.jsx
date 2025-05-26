import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28 mx-auto w-3/4'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Song Arts</h1>
        <p className='text-gray-500 mb-8'>Turn your songs into arts using AI</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.songart} alt=""  className='w-85 xl:w-96 rounded-lg'/>
            <div>
                <h2 className='text-3xl max-w-lg mb-4 font-semibold '>Introducing AI Powered Song Art Generator</h2>
                <p className='text-gray-600 mb-4'>Bring that song to life with amazing AI generated song arts. Our tools transform your song ideas into visually stunning song arts to give you the power to create your own arts for your releases</p>
                <p className='text-gray-600'>its as simple as typing your ideas and let our AI tools do the job of making your arts works ready</p>
            </div>
        </div>
    </div>
  )
}

export default Description