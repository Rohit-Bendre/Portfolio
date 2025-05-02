import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { checklistItems } from '../constants'
import code from "../assets/code.jpg";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function WorkflowSection() {
    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration
        once: false,     // whether animation should happen only once
      });
    }, []);
  return (
    <div className='mb-25'>
      <h1 className='text-3xl mb-20 sm:text-5xl lg:text-6xl text-center font-bold '  data-AOS="fade-up"> Some Other
      
       <span className='bg-gradient-to-r  from-pink-500 to-blue-500 bg-clip-text text-transparent'> Powerful  Skills</span></h1>
    
    
    <div className=' flex flex-wrap justify-center'>
        <div className='p-2 w-full  lg:w-1/2'> <img src={code}  data-AOS="fade-up"></img></div>
        <div className='pt-12 w-full lg:w-1/2'>
            {checklistItems.map((item,index)=>(
                <div key={index} className=' flex mb-12'  data-AOS="fade-up"> 
                    <div className='text-green-400 mx-6 bg-neutral-800 h-10 w-10 p-2 justify-center items-center rounded-full'> 
                            <CheckCircle2/>
                    </div>
                    <div>
                        <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                        <p className='text-md text-neutral-500'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>



    
    </div>
  )
}
