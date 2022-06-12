import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/Auth';

function Login() {
    const [data ,setData]= useState({});
    const {Login} =useContext(AuthContext);

    const onSubmit =(e)=>{
        e.preventDefault();
        Login()
    }

    const handleChange=(e)=>{
        const {name, value} =e.target;
        setData({...data,
            [name]:value,
        })
        console.log(data)
    }
  return (
    <div>
       <form onSubmit={onSubmit} style={{display:"flex" , fontSize:"20px",gap:"10px" , flexDirection:"column" ,maxWidth:"200px" ,margin:"auto"}}>
          
           
        <input name='email' onChange={handleChange} type="email" placeholder="enter your email"/>
      
        <input name='password' onChange={handleChange} type="password" placeholder='enter your password'/>
       
        <input type="submit"/>

       </form>


    </div>
  )
}

export default Login