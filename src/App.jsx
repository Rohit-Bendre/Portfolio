
import { Route, Routes, HashRouter as Router} from "react-router-dom";
import About from "./Pages/About";
import AllProjects from "./Pages/AllProjects";
import Home  from "./Pages/Home";
import Layout from "./Layout";
import React from 'react';


const App=()=>{


  
  return(

   
    
    <>


<div className="content">
    <Router>
      <Routes>

        <Route  element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<AllProjects />} />
        </Route>
      </Routes>
    </Router>
    </div>
    
    

    </>
  )
}
export default App;