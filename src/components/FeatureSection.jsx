import React from 'react'
import { features } from '../constants'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function FeatureSection() {


  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false,     // whether animation should happen only once
    });
  }, []);

  return (
    <div className='relative  border-neutral-800 min-h-[800px]'>
      
    <div className=' text-center'>
    <span className='bg-blue-950 text-purple-500 rounded-full h-6
    text-sm tracking-wider px-4 py-2 font-bold'  data-AOS="fade-up">SKILLS</span>
    <h2 className='text-3xl sm:text-5xl lg:6xl mt-10 tracking-wider font-bold' data-AOS="fade-up"> My Core Skills In 
        <span className='bg-gradient-to-r  from-pink-500 to bg-blue-500 bg-clip-text text-transparent'> Programming</span>
        </h2>
    </div>
    <div className='flex flex-wrap mt-10 lg:m-20'>
    {features.map((item,index)=>(
        <div key={index} className='w-1/2 sm:1/2 lg:w-1/3'  data-AOS="fade-up">
            <div className='flex my-2'>
            <div className='flex  mx-2  h-10 w-10 p-2 bg-neutral-800 text-blue-400 justify-center 
            items-center rounded-full'>
       {item.icon}
        </div>
        <div><h5 className=' mb-4 text-xl'>{item.text}</h5>
        <p className='text-md p-2 mb-15 text-neutral-500'>{item.description}
            </p></div>
        </div>
        </div>
    ))}

    </div>
  
    </div>
  )
}
