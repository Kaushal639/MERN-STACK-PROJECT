
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";


function Login(){
 const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const [userlogin,setUserlogin]=useState({
    email:"",
    password:""
  })
  const navigate=useNavigate()

  async function  handlelogin(e){
    e.preventDefault()
    try{
const response=await axios.post(`${apiUrl}/login`, userlogin)
    if(response.status==200){
      navigate("/");
      alert("login sucessfull")
    }
  }
  catch(error){
    console.error("login error",error)
  }

    

  }
  return(<>
  <div className="login-super-main">
  <div className="main-login">
    <div className="email">
  <input type="email" placeholder="enter email" value={userlogin.email} onChange={(e)=>{
    setUserlogin({...userlogin,email:e.target.value})
  }}></input>
  </div>
  <div className="password">
  <input type="password" placeholder="enter password" value={userlogin.password} onChange={(e)=>{
    setUserlogin({...userlogin,password:e.target.value})
  }}>
  </input>
  </div>
  <div className="login button">
    <button id="login" type="submit" placeholder="login" onClick={handlelogin}> login</button>
  </div>
  <div className="signup-button">
    <Link to="/signup"><button id="signup" type="submit" placeholder="login"> sign-up</button></Link>
  </div>
  
  </div>
  </div>

  </>)

}
export default Login;