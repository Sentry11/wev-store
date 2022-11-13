// import React, { useContext } from "react";
// import { useState,useEffect } from "react";
// import { useHttp } from "../hooks/http.hook";
// import { AuthContext } from "../context/AuthContext";
import { Authorization } from "../components/authorization/authorization";
import '../index.css'

export const AuthPage = () => {

  return (
    <Authorization/>
  )
  //   const auth = useContext(AuthContext)

  //   const {loading, error, request,clearError} = useHttp()

  //   const [form,setForm] = useState({ 
  //       email:'',
  //       password:''
  //   })



  //   useEffect(() => {
       
  //     //  clearError()
  //   }, [ clearError ])


  //   const changeHandler = event => {
  //           setForm({...form, [event.target.name]: event.target.value})
  //   }

  //   const registerHandler =  async () => {

  //       try{
  //           const data = await request('/api/auth/register', 'POST', {...form})
  //           console.log(data.message)

  //       }catch (e){}
        
  //   }

  //   const loginHandler =  async () => {

  //     try{
  //         const data = await request('/api/auth/login', 'POST', {...form})
  //         // console.log(data)
  //         auth.login(data.token, data.userId)

  //     }catch (e){}
      
  // }


  //   return(

  //       <div className="main">

  //       <input type="checkbox" id="chk" aria-hidden="true" />
  //        <div className="signup">
  //         <form>
  //           <label htmlFor="chk" aria-hidden="true">
  //             Sign up
  //           </label>
            
  //           <input type="email" name="email" placeholder="Email" required="" onChange={changeHandler} />
  //           <input type="password" name="password" placeholder="Password" required="" onChange={changeHandler} /> 
  //            {error ? 
  //             <span className="errorSpan" style={{display:`block`}} > {error } </span> : 
  //             <span className="errorSpan" > {error} </span> }
  //           <button onClick={registerHandler } disabled= {loading}>Sign up</button>
           
  //         </form>
  //       </div>


  //       <div className="login">
  //         <form>
  //           <label htmlFor="chk" aria-hidden="true">
  //             Login
  //           </label>
  //           <input type="email" name="email" placeholder="Email" required="" onChange={changeHandler} />
  //           <input type="password" name="password" placeholder="Password" required="" onChange={changeHandler} />
  //           {error ? 
  //             <span className="errorSpan" style={{display:`block`}} > {error } </span> : 
  //             <span className="errorSpan" > {error} </span> }
  //           <button onClick={loginHandler} disabled= {loading}>Login</button>
  //         </form>
  //       </div>


  //     </div>
  //   )
}