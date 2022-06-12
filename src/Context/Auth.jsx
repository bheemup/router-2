 import React ,{createContext, useContext, useState} from "react";

 
  export const  AuthContext =createContext();



 export const AuthProvider =({children})=>{

    const [isAuth, setIsAuth]=useState(false);

    const Login =()=>{
        return (
            setIsAuth(true)
      

        )
    }
    const Logout =()=>{
        return(
            setIsAuth(false)
           
        )
    }
    return(
        <AuthContext.Provider value={{isAuth, Login ,Logout}}>{children}</AuthContext.Provider>
    )
 }