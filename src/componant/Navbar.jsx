import React, { useContext } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from '../Context/Auth'

function Navbar() {
    const {isAuth,Logout,Login}=useContext(AuthContext);
    const navigate =useNavigate();
    const handleLogin =()=>{
       navigate("/login")


    if(isAuth){
        // he want to Logout
        Logout()
        navigate("/")
       
    }else{
        //he want to Login
       
        navigate("/login")
       

    }
    }
  return (
    <div style={{padding:"20px 5px", fontSize:"25px" , gap:"50px", display:"flex"}}>
        Navbar:
    <Link to="/">Home </Link>
    <Link to="/feeds">Feeds </Link>
    <button style={{padding:"2px 7px" , fontSize:"25px"}} onClick={handleLogin} >
        {
            isAuth ? "Logout":"Login"
        }
        
        </button>
         
    </div>
  )
}

export default Navbar