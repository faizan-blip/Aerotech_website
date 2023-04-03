import React from 'react'
// import { motion } from "framer-motion";
import project from "./IMAGES/projects.png";


export default function Projects() {
  return (
    <>
<div style={{height:"100vh" , display:"flex" , justifyContent:"space-between" , alignItems:"center" , background:"#000"}}>
       <h1 className='h1'>Aerotech</h1>
       <img src={project} alt="" height="100%"/>
      </div>
      <div style={{height:"100vh" , background:"white"}}>

</div>
    </>
  )
}
