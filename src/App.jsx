import React, { useState } from 'react'
import welcomeImg1 from "./assets/Welcome.png"
import welcomeImg2 from "./assets/Welcome1.png"

function App() {
  const emailcorrect = "Vasu@gmail.com"
  const passwordcorrect = "Vasu@123"
  const [text, setText] = useState("")
  const [passw, setPassw] = useState("")
  const [show, setShow] = useState(true)
  function email1(val){
      setText(val)
      console.log(val)
  }
  function passw1(val){
      setPassw(val)
      console.log(val)
  }
  function buttonclk(){
    if(text.trim() == ""){
      setText("")
      alert("Missing Email")
    }
    else if(passw.trim() == ""){
      setPassw("")
      alert("Missing Password")
    }
    else{
      if(emailcorrect == text && passwordcorrect == passw){
        setText("")
        setPassw("")
        alert("Loggin successful")
      }
      else{
        setText("")
        setPassw("")
        alert("Wrong email or password")
      }
      
    }
  }
  
  return (
    <div className='Loginsetup'>
      <img src={welcomeImg2} alt="img" />
      <div className='Login'>
        <div className='TextLogin'>
          <p>Hello!</p>
          <h3>Good morning</h3>
        </div>
        <div className='form1'>
          <h3><span>Login</span> Your account</h3>
          <input type="email" placeholder='Email@ggmail.com'value={text}
          onChange={(e)=>{email1(e.target.value)}}/>
          <input type={show ? "password" : "text"} placeholder='Password' value={passw}
          onChange={(e)=>{passw1(e.target.value)}}/>
          <div>
              {
              show ? <button onClick={()=>{setShow(!show)}}>Show</button>
              : <button onClick={()=>{setShow(!show)}}>Hide</button>
              }
          </div>
        </div>
        <button className='Loginbtn' onClick={()=>{buttonclk()}}>Login Button</button>
      </div>
    </div>
  )
}

export default App