import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../Context/Auth';



function Feeds() {
    const [product, setProduct]=useState("manoj");
    const nevigate =useNavigate();
    const {isAuth} =useContext(AuthContext);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
  .then((res)=>{
    return res.json();
  }).then((res)=>{

    setProduct(res)
    console.log(product)
  }).catch((err)=>{
    console.log(err)
  })

  },[])
 if(isAuth){
  return (
    <div>
        <h1> VIP Store </h1>
        <div>

        </div>
    </div>
  )
  }else{
    return(
      <Navigate to ="/login" />
    )
  }
}

export default Feeds
