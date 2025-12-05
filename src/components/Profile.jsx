import axios from 'axios'
import React, { useState } from 'react'

const Profile = () => {

    const [userData,setUserData]=useState("")



    const getdata=()=>{

        const gettoken=JSON.parse(localStorage.getItem("token"))

        const header={
            headers:{
                Authorization:`Bearer ${gettoken}`
            }
        }

        axios.get("https://api.escuelajs.co/api/v1/auth/profile",header)
        .then((res)=>{
            setUserData(res.data)
            console.log("Profile data",res);
            
        })
        .catch((err)=>{
            alert("You are not Login")
            console.log("Erro Occured",err);
            
        })

    }


    const clearData=()=>{
        setUserData("")
        localStorage.removeItem("token")
        alert("Log Out Success")
    }



  return (
    <div>
        <p>This is profile page</p>
        <button className='border p-2 bg-blue-600 text-white' onClick={getdata}>Get Profile Data</button>
        <button className='border p-2 bg-red-500 text-white' onClick={clearData}>Log Out</button>


{userData ? (
    <div>
            <img src={userData?.avatar} alt="" className='rounded-full h-40'/>
            <p>Name: {userData?.name  || "NA"}</p>
            <p>Email: {userData?.email || "NA"}</p>
            <p>Role: {userData?.role || "NA"}</p>


        </div>
    
):(
    <h3>No User Data</h3>
)}
        




      
    </div>
    



  )
}

export default Profile
