import React from 'react'
import Navbar from "../components/Navbar"
import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
import FeatureSection from '../components/FeatureSection';
import WorkFlowSection from '../components/WorkFlowSection';
import Footer  from '../components/Footer'





export default function Home() {




  return (
    <>
 
   
    <HeroSection></HeroSection>

    <Projects></Projects>
    <FeatureSection></FeatureSection>
    <WorkFlowSection></WorkFlowSection>
    <Footer></Footer>

    
    </>
  )
}
