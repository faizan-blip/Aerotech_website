import React from 'react'
import about from './IMAGES/About image.jpg'
import { useState, useEffect } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
export default function About() {

    const [showScrollTop, setShowScrollTop] = useState(false);
useEffect(() => {
        const handleScroll = () => {
          if (window.pageYOffset > 100) {
            setShowScrollTop(true);
          } else {
            setShowScrollTop(false);
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    
  return (
    <>
    <body style={{height:"100%" , background:"#fff" , marginBottom:"3em"}} className="About" id='about-section'>
    <div style={{display:"flex" ,  flexDirection:"row" , justifyContent:"space-around" , alignContent:"center", margin:"5em 3em"}}>
        <div style={{minWidth:"30%" ,minHeight:"30%" }}>
        <img src={about} alt="" height="80%" width="80%"  style={{borderRadius:"25px" , position:"relative" , top:"3.5em"}}/>
        </div>
        <div style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignContent:"center" , maxWidth:"40em" , background:"transparent" , position:"relative" , bottom:"2em"}}>
        <div className="header-container">
      <h1 className="header-title">AT A GLANCE</h1>
      <hr className="header-line" /> 
      </div>
           <p style={{fontWeight:"500" , fontSize:"20px"}}>Aerotech is a team consisting of young minds from Veer Surendra Sai University of technology that manifest energy, vision, and eco-friendly technologies to make the future better. We have a master plan to develop Carbon Emission Free air travel technology and Unmanned Transforming Combat Aerial Cum Ground Vehicle System that enhance productivity and security in every sector possible. The team's aim is to prove its potential by excelling in various competitions such as Aero Designing Challenges by encouraging new ideas to uplift the UAV technologies and electric propulsion system.</p>
        </div>
        </div>   
     
        <div  style={{display:"flex", justifyContent:"center" , alignContent:"center" , fontWeight:"500" , fontSize:"20px" , position:"relative" , bottom:"2em" , margin:"0 2em"}}>
       <p>We started our Journey with the blessings of Dean Academic Affairs Professors Dr. Debudutta Mishra Sir on November 3rd of 2021.</p>
       </div>   
       {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-top-btn">
         <ArrowCircleUpIcon sx={{color:"black"}}/>
        </button>
      )}
       <div style={{height:"343px" , width:"100%" , display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}} className="collab">
           <h1 style={{color:"white" , textAlign:"center" , fontSize:"40px"}}>Collaborate With Us</h1>
           <button className='button' style={{width:"13%" , padding:"0.7em 0em" , background:"none" , color:"white" , border:"3px solid #D02208" , fontSize:"18px"}}>Collaborate Now</button>
       </div>
    </body>
    </>
  )
}
