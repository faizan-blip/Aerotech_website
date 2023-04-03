import React from 'react'
import LOGO from './IMAGES/LOGO.png'
import vssut from './IMAGES/vssut.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  return (
    <>
     <footer style={{height:"50vh" , background:"black" , borderTopLeftRadius:"15px" , borderTopRightRadius:"15px" , overflowX:"hidden" }}>
        <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , position:"relative" , top:"1em"}}>
            <img src={LOGO} alt="" width="189px" height="167px"/>
            <div className="border"></div>
            <img src={vssut} alt=""  width="140.37px" height="167px" />
        </div>
        <div style={{color:"white" , display:"flex" , justifyContent:"center" , alignItems:"center" , marginTop:"3em", gap:"25px" , position:"relative", left:"1.5em" }} className="list">
            <p>Home</p>
            <p>About</p>
            <p>Events</p>
            <p>Projects</p>
            <p>Contact Us</p>
        </div>
        <div style={{display:"flex", justifyContent:"center" , alignItems:"center" , gap:"20px", position:"relative" , left:"1.5em"}}>
        <InstagramIcon sx={{color:"white" , transform:"Scale(1.3)"}} className="insta"/>
        <FacebookIcon sx={{color:"white" , transform:"Scale(1.3)"}} className="fb"/>
        < LinkedInIcon sx={{color:"white" , transform:"Scale(1.3)"}} className="link" />
        </div>
        <div style={{display:"flex", justifyContent:"center" , alignItems:"center" , color:"white" , position:"relative" , left:"1.5em" , marginTop:"0.5em"}}>
            <p> &copy; Copyright AEROTECH . All Rights Reserved</p>
        </div>
     </footer>
    </>
  )
}
