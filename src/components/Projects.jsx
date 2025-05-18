

import todo from "../assets/todolist.png"
import bg from "../assets/bg2.png"
import Currency from "../assets/CuurencyCnv.png"
import Ecom from "../assets/E-com.png"
import reviewer from "../assets/ai-reviewer.png"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Projects() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,    
    });
  }, []);

  return (
    <div className="border-b pb-15 mb-15 overflow-hidden" data-AOS="fade" data-AOS-delay="200" >
   
      <div className='w-full  '>
        <div className='m-10 flex justify-center align-center  '>

          <span className='bg-blue-950 px-5 py-2 rounded-full'>
            <span className='
        px-5 py-2 rounded-full  text-sm font-medium text-purple-500'>PROJECTS</span>
          </span>
        </div>

        <div className='flex flex-wrap  justify-evenly '>
        <img src={bg} className="absolute w-full h-6/7 my-30 lg:my-20 "></img>
       
        <div data-AOS="fade-up" className=' border rounded-3xl  bg-white/8 backdrop-blur-sm my-5 mx-3 w-6/6 h-65 lg:w-6/14 lg:h-80  overflow-hidden' style={{ filter: 'drop-shadow(0 5px 30px rgba(147, 51, 234, 1))' ,  border:"2px solid white"}}>
            <a href="https://code-reviewer-1-ydz8.onrender.com/">
            <div className=' rounded-3xl h-full flex justify-between items-center'>


              <div className=" w-6/12 h-full" style={{   borderRight:"5px solid white"}}>
              <img src={reviewer} className="h-full w-full"></img></div>

              <div className='flex w-6/12' >

                <div className='w-full  p-2 text-center  lg:m-3 text-neutral-400' style={{ fontSize: "15px" }}>
                  <h1 className='  lg:mt-5 lg:mb-5 font-bold text-white mt-15'>1. Code Reviewer</h1>
                  <p className='text-sm  ' ></p>
                  A full stack project describing the strong and clear knowledge of integration of AI in the programming.
             
                 The Google Gemini API is used to review the code, paste the code on left canvas, click on review, and you will get the errors in the code and suggestion regarding it, on right canvas.

                </div>

              </div>



            </div>
            </a>
          </div>

      
          <div data-AOS="fade-up" className=' border rounded-3xl  bg-white/8 backdrop-blur-sm my-5 mx-3 w-6/6 h-65 lg:w-6/14 lg:h-80  overflow-hidden' style={{ filter: 'drop-shadow(0 5px 30px rgba(147, 51, 234, 1))' ,  border:"2px solid white"}}>
          <a href="https://rohit-bendre.github.io/Currency_Converter/">
            <div className=' rounded-3xl h-full flex justify-between items-center'>


              <div className=" w-6/12 h-full" style={{   borderRight:"2px solid white"}}>
              <img src={Currency} className="w-full h-full"></img></div>

              <div className='flex w-6/12' >

                <div className='w-full  p-2 text-center  lg:m-3 text-neutral-400' style={{ fontSize: "15px" }}>
                  <h1 className='  lg:mt-5 lg:mb-5 font-bold text-white mt-10'>2. Currency Converter</h1>
                  <p className='text-sm  ' ></p>
                  The currency Converter As the name suggests, converts amount of currency on one country into amount of currency of another country.
                  <br></br>
                  The Currency API is used in this project,which provides the codes of country and their corresponding country codes
                </div>

              </div>


            </div>
            </a>
          </div>
         
        </div>




        <div className='flex flex-wrap  justify-evenly'>


        <div data-AOS="fade-up" className=' border rounded-3xl  bg-white/8 backdrop-blur-sm my-5 mx-3 w-6/6 h-65 lg:w-6/14 lg:h-80  overflow-hidden' style={{ filter: 'drop-shadow(0 5px 30px rgba(147, 51, 234, 1))' ,  border:"2px solid white"}}>
            <a href="https://github.com/Rohit-Bendre/todo_webapp">
            <div className=' rounded-3xl h-full flex justify-between items-center'>


              <div className=" w-6/12 h-full" style={{   borderRight:"5px solid white"}}>
              <img src={todo} className="h-full w-full"></img></div>

              <div className='flex w-6/12' >

                <div className='w-full  p-2 text-center  lg:m-3 text-neutral-400' style={{ fontSize: "15px" }}>
                  <h1 className='  lg:mt-5 lg:mb-5 font-bold text-white mt-15'>3. Todo List</h1>
                  <p className='text-sm  ' ></p>
                  Todo list as the name suggests, is an web app where you can list your tasks you want to do it in upcoming time.
             
                  This Project is created with 'Python' and its framework 'flask', ant 'sql Alchemy is used as the DataBase for storing the information'. Its targeted as a CRUD operation Project.

                </div>

              </div>



            </div>
            </a>
          </div>

         
          <div data-AOS="fade-up" className=' border rounded-3xl  bg-white/8 backdrop-blur-sm my-5 mx-3 w-6/6 h-65 lg:w-6/14 lg:h-80  overflow-hidden' style={{ filter: 'drop-shadow(0 5px 30px rgba(147, 51, 234, 1))' ,  border:"2px solid white"}}>
           <a href="https://rohit-bendre.github.io/Ecommerce_wireframe/">
            <div className=' rounded-3xl h-full flex justify-between items-center'>


              <div className=" w-6/12 h-full" style={{  borderRight:"5px solid white"}}>
              <img src={Ecom} className="w-full h-full"></img>
              </div>

              <div className='flex w-6/12' >

                <div className='w-full  p-2 text-center  lg:m-3 text-neutral-400' style={{ fontSize: "15px" }}>
                  <h1 className='  lg:mt-5 lg:mb-5 font-bold text-white mt-10'>4. Ecommmerce Clone</h1>
                  <p className='text-sm  ' ></p>
                  The E-commerce clone is a fronted project, which i just created with html and css, not a single line of the javascript or other scripts is used.
                    I created This when i was learning html and css.
                    you can visit some of the product pages which are linked to each other.
                </div>

              </div>


            </div>
            </a>
          </div>
 


        </div>



      <div className='flex flex-wrap  justify-evenly'>
        
      <div data-AOS="fade-up " data-aos-delay="200" style={{ filter: 'drop-shadow(0 5px 30px rgba(147, 51, 234, 1))' ,  border:"2px solid white"}} className=' border  rounded-3xl  bg-white/8 my-5 w-6/7 h-65 lg:w-6/14 lg:h-80  overflow-hidden  backdrop-blur-sm flex items-center justify-center'>
            <h1 className="font-bold">COMING SOON...</h1>
          </div>

        <div className='  my-5 w-6/7 h-65 lg:w-6/14 lg:h-80  '>
      
          </div>

      </div>


    

      </div>
    </div>
  )
}
