import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")


    const handleSubmit=()=>{

        const payload={
            email:email,
            password:password
        }
        // console.log(payload)
    

    axios.post("https://api.escuelajs.co/api/v1/auth/login",payload)
    .then((res)=>{
        localStorage.setItem("token",JSON.stringify(res.data.access_token))
        alert("Login Success")
        console.log("Login Successfull",res)
    })
    .catch((err)=>{
        alert("Login failed")
        console.log("Login Failed",err)
    })
}



  return (
    <div className='bg-sky-200 space-y-4 w-70 h-80 flex flex-col justify-center items-center'>
        
        <h3 className='text-center font-semibold text-2xl'>Login Page</h3>
        <div>
            <label>Email:</label><br />
            <input type="email" placeholder='abc@gmail.com' className='border rounded-md shadow-md' onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div>
            <label>Password:</label><br />
            <input type="password" placeholder='Password' className='border rounded-md shadow-md' onChange={(e)=>setPassword(e.target.value)} />
        </div>

        <button onClick={handleSubmit} className='bg-blue-500 px-4 py-1 rounded text-white text-center cursor-pointer'>Log In</button>
        </div>
      
    
  )
}

export default Login
