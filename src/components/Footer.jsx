import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from "../assets/logo.png"
export default function Footer() {

 useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration
        once: false,     // whether animation should happen only once
      });
    }, []);

  return (
    <div>
      

<footer
  className="relative border-2 rounded-md  border-transparent bg-neutral-950/60 backdrop-blur text-white px-6 py-10"
  style={{
    borderImage: 'linear-gradient(to right, #ec4899, #facc15, #8b5cf6) 1'
  }}
>
<div className="bg-blue-950/60 w-full py-3 flex justify-center items-center mb-5"  data-AOS="fade-up">
  <div className="w-14 h-14 border-2 rounded-full  flex items-center justify-center text-white text-lg font-bold shadow-lg"  style={{ filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.5))' }}>
   <img src={logo} className='p-1'></img>
  </div>
</div>
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-700">
    <div className="px-4 space-y-4"  data-AOS="fade-up">
      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-br from-purple-500 to to-blue-600 text-transparent bg-clip-text">
        <span className="inline-block w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
        Personal Info
      </h3>
      <p className="hover:text-teal-400 transition">
        <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>Rohit Bendre
      </p>
      <p className="hover:text-teal-400 transition">
        <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>rohitbendre35@gmail.com
      </p>
      <p className="hover:text-teal-400 transition">
        <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>India, Maharashtra
      </p>
    </div>

    <div className="px-4 space-y-4"  data-AOS="fade-up">
      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-br from-purple-400 to-blue-500 text-transparent bg-clip-text">
        <span className="inline-block w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
        Education
      </h3>
      <p className="hover:text-teal-400 transition"> <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>BCA - TY</p>
      <p className="hover:text-teal-400 transition"> <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>SRTMU Nanded</p>
      <p className="hover:text-teal-400 transition"> <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>2023 - 2026</p>
    </div>

    <div className="px-4 space-y-4"  data-AOS="fade-up">
      <h3 className="text-xl font-semibold mb-2  bg-gradient-to-br from-purple-400 to-blue-500 text-transparent bg-clip-text">
        <span className="inline-block w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
        Interests
      </h3>
      <p className="hover:text-teal-400 transition">
        <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>Full Stack Development
      </p>
      <p className="hover:text-teal-400 transition">
        <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>Android Development
      </p>
      <p className="hover:text-teal-400 transition">
        <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>Machine Learning
      </p>
    </div>

    <div className="px-4 space-y-4"  data-AOS="fade-up">
      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-br from-purple-400 to-blue-500 text-transparent bg-clip-text">
        <span className="inline-block w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
        Working On
      </h3>
      <p className="hover:text-teal-400 transition">
        <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>Real World Problem Solving
      </p>
      <p className="hover:text-teal-400 transition">
        <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>AI Integrated Projects
      </p>
      <p className="hover:text-teal-400 transition">
        <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>APP Delevopment
      </p>
    </div>
  </div>

  <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm"  >
    <p>&copy; 2025 Rohit Bendre . All rights reserved.</p>
    <div className="flex space-x-4 mt-4 md:mt-0">
      <span className="inline-block w-4 h-4 rounded-full bg-green-500"></span>
      <span className="inline-block w-4 h-4 rounded-full bg-green-500"></span>
      <span className="inline-block w-4 h-4 rounded-full bg-green-500"></span>
    </div>
  </div>
</footer>

    </div>
  )
}
