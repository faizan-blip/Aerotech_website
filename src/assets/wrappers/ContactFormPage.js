import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  // width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
    font-size:50px;
  }
  hr {
    border: 3px solid red;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .form-input{
    display:block;
    background-color:#3E3D3D;
    color:#FFFFFF;
    opacity:0.5;
    height:5vh;
    width:35vh;
    border-radius: 15px;
    margin:0px 5px;

  }
  .form-label{
    margin:px 30px;

  }
  .box-label{
    display: block;
    color:white;
    margin:10px 30px;
}
  .box{
    display:block;
    height:16vh;
    width:82vh;
    background-color:#3E3D3D;
    opacity:0.5;
    border-radius: 15px;
}
.msg-box{
  display:block;
  margin:20px 1px;
  height:19vh;
  width:90vh;
  position:absolute;
  top: 50%;
}
.div1 {
  position:absolute;
  top: 33%;
  left:7%;
}  
.div2 {
  position:absolute;
  top: 33%;
  left:32%;
}  
.info {
  display:block;
  position:absolute;
  top:0.5%;
  left:60%;
}
p{
  color:white;
  font-weigth:bold;
  margin: 30px;
  padding:15px;
  font-size:20px;
}
br{
  row-gap:10rem;
}
.App{
  position="absolute"
  right:5px;
}
textarea:focus, input:focus {
    color:#ffffff;
    font-weight:bold;
    font-size:1rem;
}

  .btn {
  background: #ffffff;
  background-image: -webkit-linear-gradient(top, #ffffff, #ffffff);
  background-image: -moz-linear-gradient(top, #ffffff, #ffffff);
  background-image: -ms-linear-gradient(top, #ffffff, #ffffff);
  background-image: -o-linear-gradient(top, #ffffff, #ffffff);
  background-image: linear-gradient(to bottom, #ffffff, #ffffff);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 10px;
  font-family: Arial;
  font-weight:bold;
  color: #000;
  font-size: 19px;
  padding: 10px 35px 30px 35px;
  position:absolute;
  top: 75%;
  left:27%;
  text-decoration: none;
}

.btn:hover {
  background: #999c9e;
  background-image: -webkit-linear-gradient(top, #999c9e, #828082);
  background-image: -moz-linear-gradient(top, #999c9e, #828082);
  background-image: -ms-linear-gradient(top, #999c9e, #828082);
  background-image: -o-linear-gradient(top, #999c9e, #828082);
  background-image: linear-gradient(to bottom, #999c9e, #828082);
  text-decoration: none;
}

  
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`

export default Wrapper