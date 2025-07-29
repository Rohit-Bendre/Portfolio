import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { navItems } from '../constants';
import logo from "../assets/logo.png"
import { Link,useLocation } from 'react-router-dom';


const Navbar = () => {
  const [DrawerOpen, setDrawerOpen]=useState(false);
  const toggleDrawer=()=>{
    setDrawerOpen(!DrawerOpen);
  }
  const location = useLocation();


  return (
    <nav className="sticky top-0 z-50 py-3  backdrop-blur-lg border-b border-neutral-700/80 ">
        <div className=" container px-1 lg:px-7 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
                <img src={logo} className="h-7 w-7 lg:h-10 lg:w-10  mr-2"  style={{ filter: 'drop-shadow(0 0px 10px rgba(147, 51, 234, 1))' }} alt="logo"/>
                <span className='text-sm lg:text-xl tracking-tight font-bold'>Rohit Bendre</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12 font-bold">
            {navItems.map((item,index)=>(
                    <li key={index}>
                       <Link to={item.href}  className={`transition-all duration-300 hover:text-neutral-600 ${location.pathname === item.href ? 'text-purple-500 font-extrabold' : ''}`} >{item.label}</Link>
                    </li>
            ))}
            </ul>
            <div className="flex justify-between w-60 lg:w-70 items-center">
            <a href="https://github.com/Rohit-Bendre" className='py-1 px-1 lg:py-2 lg:px-3 border-2 rounded font-bold mx-2 bg-gradient-to-r  from-pink-500 to-blue-500 bg-clip-text text-transparent' style={{
    borderImage: 'linear-gradient(to right, #FF5EFA ,#1C5CFF) 1'
  }}>GitHub</a>
            <a href="https://drive.google.com/file/d/12tuAcA7DKfRwl_hmAmkOwCdrbKRmm1JF/view?usp=drivesdk" className='bg-gradient-to-r mx-2 from-purple-500 to-blue-500 py-2 px-1 lg:py-2 lg:px-3 text-sm rounded-md font-bold flex items-center just'>Download Resume</a>

            </div>
            <div className="lg:hidden md:flex flex-col justify-end" >
              <button onClick={toggleDrawer}>{DrawerOpen ? <X /> : <Menu />}</button>
            </div>
        </div>
            {DrawerOpen && (
            
              <div className="  fixed right-0 top-16 z-20 h-60  w-6/16  flex flex-col justify-center items-center lg:hidden
              rounded-bl-3xl border-l border-b bg-blue-500/50 "  style={{ filter: 'drop-shadow(0 5px 30px rgba(147, 51, 234, 1))' }} >
                <ul  className='font-bold'>
                    {navItems.map((item,index)=>(
                      <li className="mb-10" key={index}><Link to={item.href}  className={`transition-all duration-300 hover:text-neutral-600 ${location.pathname === item.href ? 'text-purple-500 font-extrabold' : ''}`} >{item.label}</Link></li>
                   
                    ))}
                </ul>
                </div>
          
          
            )}
        </div>
       
    </nav>
  )
}

export default Navbar;
