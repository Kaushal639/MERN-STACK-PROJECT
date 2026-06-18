import { useState } from "react";
import "./signup.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function SignUpForm() {
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const Navigate = useNavigate();

const [user,setUser]=useState({
  name:"",
  email:"",
  password:"",
  pincode:"",
  address:"",
  mobile:""
})





  async function handlesubmit(e){
     
    e.preventDefault()
    
const res=await axios.post(`${apiUrl}/signup`, user)
    if(res.status==200){
       alert("login sucessfull")
      Navigate("/");
     
    }

    

  }




 
  return (
    <div className="signup-container">
      <form className="signup-form" >
        <h2>Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          minLength={3}
          value={user.name}
          onChange={(e)=>{
            e.preventDefault()
            setUser({...user,name:e.target.value});

          }}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
        
          required
          minLength={12}
           value={user.email}
          
          onChange={(e)=>{
            e.preventDefault()
            setUser({...user,email:e.target.value})

          }}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password- must be 6 digit"
           value={user.password}
          
          minLength={6}
          onChange={(e)=>{
            e.preventDefault()
            setUser({...user,password:e.target.value})
        
          }}
          required
        />

        <textarea
          name="address"
          placeholder="Address"
           value={user.address}
          
          onChange={(e)=>{
            e.preventDefault()
            setUser({...user,address:e.target.value})

          }}
          rows="3"
          required
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
           value={user.mobile}
          
          minLength={10}
          maxLength={10}
          onChange={(e)=>{
            e.preventDefault()
            setUser({...user,mobile:e.target.value})
         
          }}
          required
        />

        <input
          type="text"
          name="pincode"
          placeholder="Area Pincode"
           value={user.pincode}
          
          onChange={(e)=>{
            e.preventDefault()
            setUser({...user,pincode:e.target.value})

          }}
          required
        />

        <button type="submit" onClick={handlesubmit}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
