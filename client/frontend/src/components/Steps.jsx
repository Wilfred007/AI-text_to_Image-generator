import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className='flex flex-col items-center justify-center my-32'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How It Works</h1>
        <p className='text-lg text-green-600 mb-8'>Create Your Song Arts Here</p>
        <div className='space-y-4 max-w-3xl w-full text-sm'>
            {
                stepsData.map((item, index) => (
                    <div key={index} className='flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md rounded-sm border cursor-pointer hover:scale-[1.02] transition-all duration-300'>
                        <img width={40} src={item.icon} alt="" />
                        <div>
                            <h2 className='text-xl font-medium'>{item.title}</h2>
                            <p className='text-gray-500'>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Steps