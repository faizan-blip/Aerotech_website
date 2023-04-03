import React from 'react'
import event from "./IMAGES/events.png";
export default function Events() {
  return (
    <>
    <div style={{height:"100vh" , display:"flex" , justifyContent:"space-between" , alignItems:"center" , background:"#000"}}>
    <h1 className='h1'>Aerotech</h1>
    <img src={event} alt="" height="100%"/>
   </div>
   <div style={{height:"100vh" , background:"white"}}>
    </div>
</>
  )
}
