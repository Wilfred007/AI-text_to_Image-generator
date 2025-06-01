import React from 'react'
import { GiArtificialHive } from "react-icons/gi";
import {assets} from '../assets/assets.js';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20' initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
        <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
            <p>Lets Generate <span className='text-blue-600'>AI-Powered</span> Images Together</p>
            <GiArtificialHive />
        </div>

        <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn Your Text To An Image,  In A Blink 😜</h1>
        <p className='text-center max-w-xl mx-auto mt-5'>Unlock your creativity with the help of our AI powered image generator in a flesh 📸 Just type and see the magic happen</p>
        <a href='/Result' className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-3 rounded-3xl'>Generate Images ✨</a>


        <div className='flex flex-wrap justify-center items-center gap-4 mt-10'>
            {Array(6).fill('').map((item, index) => (
                <img className='rounded hover:scale-104 transition-all duration-300 cursor-pointer max-sm:w-10' src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} alt='' key={index} width={70} />

            ))}
        </div>
        <p className='mt-2 text-neutral-600'>Genetrated Images from AI Flash</p>
    </motion.div>
  )
}

export default Header