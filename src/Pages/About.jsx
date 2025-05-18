import React from 'react';
import Footer from "../components/Footer"
import Rohit from '../assets/Rohit_Profile_Photo.jpg';
import Rohit2 from '../assets/Profile_new2.png';
import bg from '../assets/bg2.png';
import { Handshake } from 'lucide-react';
import { useEffect } from 'react';
import { Linkedin, Github ,Instagram, Contact,MailPlus} from 'lucide-react';
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function About() {



  
 useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration
        once: false,     // whether animation should happen only once
      });
    }, []);

  return (
    <>
    <div class="about_section"  data-AOS="fade" data-AOS-delay="300" className='pb-65 lg:pb-25 pt-5 gap-2 isolate  grid-cols-2 flex  overflow-hidden'  >

      <div class="About_image" className=' pt-17 lg:pt-0 flex   justify-end mt-5 lg:mt-0'>
        <img src={bg} className="absolute w-full h-6/7 my-10 lg:my-20 "></img>
      <img src={Rohit} className=' h-6/6 w-6/11 rounded-full my mx-2 lg:w-6/20 lg:mx-30 ' data-aos-delay="200" data-AOS="fade-up"></img>
      </div>

      <div class="Content" className=' absolute w-65 my-5 mx-2 lg:w-150 lg:my-25 lg:mx-15'>

    <div >
      <h1  data-AOS="fade-up" className='  -mb-5 text-2xl lg:text-6xl font-bold tracking-widest bg-gradient-to-br from-purple-500  to-blue-500 bg-clip-text text-transparent' >ROHIT  BENDRE</h1>
    </div>

    <div className='m-6 ml-0 lg:ml-0  text-sm  '>
    <p  data-AOS="fade-up" className='text-sm text-neutral-300'>
   Hello Everyone, here's a little bit informtion about me :
   <br></br>
     I am a BCA-TY student From SRTMU Nanded, i just love Programming, always Excited to learn new technologies and build something Beautiful and Useful. Now in search of a Role as SDE-1 in software companies. im searching for both 'Product Based' and 'Service Based' companies.
      </p>
      <h1  data-AOS="fade-up" className='text-2xl font-bold w-80 text-left my-2 lg:my-6 lg:text-5xl lg:w-1500 tracking-wider' >WAY TO SOFTWARE ENGINEER.</h1>
      <p  data-AOS="fade-up" className='text-sm  text-neutral-300'>
        I know the work of an SDE is not about only coding but also exploring the Tech as well as non Tech world, doing research on new terminologies, doing Team work, Lead the team etc.
        I dont have any experience about how the workflow is carried out in companies, but i definetly have a great experience of Creating Good Enough Projects in different Programming Languages.
      </p>
    </div>
   
      </div>
    </div>

    <div className='mb-20 py-10  border-t ' >

<div className='pb-5 lg:pb-10   border-b overflow-hidden' data-AOS="fade" data-AOS-delay="300" style={{ backgroundImage: "url('src/assets/bg2.png')"   ,   backgroundSize:'cover',}}>
<img src={bg} className="absolute w-full h-6/7 my-20 lg:my-20 "></img>
    <div className=' -mx-10 lg:mt-10  text-sm text-center flex justify-evenly   '
   >
     <div className=' w-0 lg:w-6/30 '>
      <img src={Rohit2} className=' rounded-full  '   data-AOS="fade-up" data-aos-delay="200" ></img>
     </div>
     <div  data-AOS="fade-up" className='-ml-17  w-6/8 lg:w-6/12  lg:ml-10 text-center text-sm'>
      <h1 className='font-bold'>-- CORE SKILLS --</h1><br></br>
      <p style={{fontSize:"14px"} }>-Strong  knowledge of different programming languages, Basics Are strong in Programming, Concepts are very clear about Object Oriented Programming languages, Working on real world projects.
        <br/> <br/>
        - Currently Hands On Following Programming languages and tools : 1.MERN Stack , 2.Java , 3.Python , 4.Javascript , 5.HTML CSS , 6.Bootstrap , 7. Fetching API and working on json data, 8.working with online 3rd party libraries and tools.
        <br/> <br/>
        - Strong Communication Skills : Professional talks, public speaking, presentations, Communicating with working professionals on LinkedIn.
        <br/> <br/>
        - Enough Knowledge of Git , Github , Docker , Render.com And other Professional Tools related to programming.
        <br/> <br/>
        - Better Knowledge of AI tools to make the projects more functional, use of AI models in the projects, Integration of AI tools in the projects.
        <br/> <br/>
        -Still Exploring new technologies of the teach world, and will do the same in future.
        </p>
     </div>
    </div >
    </div>

    <div className='  mt-25 '>
      <div className=' flex justify-center'>
    <div  data-AOS="fade-up" className='p-1.5 mt-0.5 lg:h-12 lg:w-12 lg:p-2 bg-gradient-to-br from-purple-600  to-blue-600  flex justify-center items-center rounded-full'>
     <Handshake className=' lg:h-10 lg:w-8 lg:mt-1' ></Handshake>
     </div>
     
    </div>
    <div className=' my-2 lg:text-2xl lg:p-2 font-bold tracking-widest  text-center'  data-AOS="fade-up" > <h1>LETS TALK WITH ME!</h1></div>
    
    <div className='flex justify-center'>
    <div  data-AOS="fade-up" className=' text-sm tracking-tight w-6/8 lg:w-6/11 text-center text-neutral-400'> 
    You can talk with me, casually professional talk feedback suggestions or anything else through following ways . 
    <br></br>I hope you will !</div>
      </div>

      <div className=' flex justify-center mt-3'>

        
    <div data-AOS="fade-up" className='  w-70 lg:w-110 flex justify-evenly'>

      <a href="https://www.linkedin.com/in/rohit-bendre-b31219325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" >
    <div   className='p-1.5 mt-0.5 lg:h-12 lg:w-12 lg:p-2 bg-gradient-to-br from-purple-500  to-blue-600  flex justify-center items-center rounded-full cursor-pointer'>
     <Linkedin className=' lg:h-10 lg:w-8' ></Linkedin>
     </div>
     </a>

<a href="https://github.com/Rohit-Bendre">
     <div className='p-1.5 mt-0.5 lg:h-12 lg:w-12 lg:p-2 bg-gradient-to-br from-purple-500  to-blue-600  flex justify-center items-center rounded-full cursor-pointer'>
     <Github  className=' lg:h-10 lg:w-8 lg:mt-1' ></Github>
     </div>
     </a>

<a href="https://www.instagram.com/rohit.10143?igsh=bHZpb2hvczJidnB2">
     <div className='p-1.5 mt-0.5 lg:h-12 lg:w-12 lg:p-2 bg-gradient-to-br from-purple-500  to-blue-600  flex justify-center items-center rounded-full cursor-pointer'>
     <Instagram className=' lg:h-10 lg:w-8 ' ></Instagram>
     </div>
     </a>
    
    <a href="mailto:rohitbendre35@gmail.com">
     <div className='p-1.5 mt-0.5 lg:h-12 lg:w-12 lg:p-2 bg-gradient-to-br from-purple-500  to-blue-600  flex justify-center items-center rounded-full cursor-pointer' 
   >
     <MailPlus className=' lg:h-10 lg:w-8' ></MailPlus>
     </div>
     </a>


     </div>
    </div>
    </div>

    
    </div>

    
    <Footer></Footer>
    </>
  )
}
