import React from 'react';
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false,     // whether animation should happen only once
    });
  }, []);

    return (
        <div className=' mb-30 flex flex-col items-center mt-15 lg:mt-20'>
            <h1 className='font-bold text-4xl sm:text-6xl lg:text-7xl text-center tracking-wider  ' data-AOS="fade"  style={{ filter: 'drop-shadow(0 5px 30px rgba(147, 51, 234, 1))' }}>
               Hello There
                <span className='bg-gradient-to-r from-pink-400 to-blue-500 text-transparent bg-clip-text'> 'Rohit Bendre' </span>
                This Side..!
            </h1>
            <p className='mt-10  text-center text-neutral-400 max-w-4xl mx-10 lg:mx-45'  data-AOS="fade-up" style={{fontSize:'15px'}}>
                 Hello everyone, welcome to my Portfolio, myself Rohit Balasaheb Bendre and  I am currently persuing BCA now i'm in my 3rd year of BCA.
                 Im on my way to become SDE-1, in love with programming. Working on Android development, Web development, AI integrated Projects etc. This Portfolio is developed with React.
                 <br></br>
                 So... Just surf around the Portfolio, i created it from scratch, and if you like my work, 
                 just get in contact.
                  </p>
                  <div className=' my-10 flex justify-center'  data-AOS="fade-up">
                    <a href="https://drive.google.com/file/d/1Bdhvf9yH9qUpD2s6Q-_hNSXcisQ0T-fp/view?usp=drivesdk"  className='bg-gradient-to-r from-purple-500 to-blue-500 p-2 mx-5 rounded font-bold flex justify-center items-center'>Download Resume</a>
                    <a href="https://www.linkedin.com/in/rohit-bendre-b31219325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  className='p-2 rounded border-2 bg-gradient-to-r  from-pink-500 to-blue-500 bg-clip-text text-transparent font-bold'  style={{
    borderImage: 'linear-gradient(to right, #FF5EFA ,#1C5CFF) 1'
  }}>LinkedIn</a>
                  </div>
                  <div className=' flex mt-5 mx-10 justify-center '>
                    <video autoPlay loop muted className='rounded-lg w-1/2 border  mx-5 border-blue-500' >
                        <source src={video1} type="video/mp4" ></source>
                    </video>
                    <video autoPlay loop muted className='rounded-lg w-1/2 border mx-5 border-blue-500' >
                        <source src={video2} type="video/mp4" ></source>
                    </video>
                  </div>
        </div>
    )
}

export default HeroSection;
