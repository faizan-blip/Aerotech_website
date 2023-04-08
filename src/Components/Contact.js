import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/ContactFormPage'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { send } from 'emailjs-com';

export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
    phone:'',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_xc3vkmu',
      'template_tepj67g',
      toSend,
      'ipbDod3Bm4Vpj0naR'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
<>
  <div style={{height:"100vh", justifyContent:"space-between" , alignItems:"center" , background:"white"}}>
    <div style={{height:"70vh" ,width:"105vh",background:"#000",margin:"150px 60px"}}>
      <Wrapper>
        <h3 style={{color:"white",position:"absolute",padding:"0rem 15rem"}}>GET IN TOUCH<hr style={{margin:"0px"}}/></h3>
        <form onSubmit={onSubmit}>
            <div className="form-center">
                <div className='div1' style={{height:"10vh" ,width:"45vh",color:"white",height:"0.1px"}}>
                      <label htmlFor='from_name' className='form-label'>
                      NAME
                      <input type="text" name="from_name" className="form-input" value={toSend.to_name} onChange={handleChange}/>
                      </label> 
                      <label htmlFor='reply_to' className='form-label'>
                      EMAIL
                      <input type="email" name="reply_to" className="form-input" value={toSend.reply_to} onChange={handleChange}/>
                      </label> 
                </div>
                <div className='div2' style={{height:"10vh" ,width:"45vh",color:"white",height:"0.1px"}}>
                      <label htmlFor='from_name' className='form-label'>
                      LAST NAME
                      <input type="text" name="from_name" className="form-input" value={toSend.to_name} onChange={handleChange}/>
                      </label> 
                      <label htmlFor='phone' className='form-label'>
                      PHONE NUMBER
                      <input type="tel" name="phone" className="form-input" value={toSend.phone} onChange={handleChange}/>
                      </label> 
                </div>
              
                
                <div className='msg-box'>
                  <label htmlFor='message' className='box-label'>
                  WRITE YOUR MESSAGE
                  <textarea type="text" name="message" className="box" value={toSend.message } onChange={handleChange}/>
                </label> 
                </div> 
            <button type='submit' className="btn btn-container">
            SUBMIT
          </button>
            </div>
          </form>
          <div className="info" style={{height:"25vh" ,width:"60vh",background:"#000",margin:"150px 60px"}}>
            <p>EMAIL : aerotechvssut2021@gmail.com<br></br>
              PHONE : 91-7077576821/91-6372814399
            </p>
            <div style={{display:"flex", justifyContent:"right" , alignItems:"right" , gap:"20px", position:"relative" , right:"2em" ,top:"1.5em"}}>
            <InstagramIcon sx={{ color:"white" ,transform:"Scale(1.3)"}} className="insta"/>
            <FacebookIcon sx={{color:"white" , transform:"Scale(1.3)"}} className="fb"/>
            < LinkedInIcon sx={{color:"white" , transform:"Scale(1.3)"}} className="link" />
            </div>
          </div>
          <div className="App">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.2708391034407!2d83.9015673155051!3d21.49710888574653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213da4ec28af2d%3A0xb33a5cc9af8c33c7!2sVeer%20Surendra%20Sai%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1680809583020!5m2!1sen!2sin" 
            width="535" 
            height="450" 
            style={{border:"0" ,position:"absolute",alignItems:"right",right:"75px" ,top:"400px"}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </Wrapper>
    </div>
  </div>
</>
  )
}

      