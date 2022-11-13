
import React, { useContext } from "react";
import { useState,useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";
import { AuthContext } from "../../context/AuthContext";

import "./authorization.scss"




export const Authorization = () => {

    const auth = useContext(AuthContext)

    const {loading, error, request,clearError} = useHttp()

    const [isContainerActive, setIsContainerActive] = React.useState(false);

    const [form,setForm] = useState({ 
        email:'',
        password:''
    })



    useEffect(() => {
       
      //  clearError()
    }, [ clearError ])


    const changeHandler = event => {
            setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler =  async () => {

        try{
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log(data.message)

        }catch (e){}
        
    }

    const loginHandler =  async () => {

      try{
          const data = await request('/api/auth/login', 'POST', {...form})
          // console.log(data)
          auth.login(data.token, data.userId)

      }catch (e){}
      
  }

  const signUpButton = () => {

    setIsContainerActive(false);
    clearError()
    };  

 const signInButton = () => {

    setIsContainerActive(true);
    clearError()
    };


    return (
        <>
    <div className="main-container">
        <h2> It's not about availability, it's about price </h2>
        <div className={`container ${isContainerActive ? " " : "right-panel-active"}`} id="container">
            <div className="form-container sign-up-container">
            <form action="#">
                <h1>Create Account</h1>
                {/* <div className="social-container">
                <a href="#" className="social">
                    <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social">
                    <i className="fab fa-google-plus-g" />
                </a>
                <a href="#" className="social">
                    <i className="fab fa-linkedin-in" />
                </a>
                </div> */}
                {/* <span>or use your email for registration</span> */}
                <input type="text" placeholder="Name" onChange={changeHandler} />
                <input type="email" placeholder="Email" onChange={changeHandler}/>
                <input type="password" placeholder="Password" onChange={changeHandler}/>
                {error ? 
                <span className="errorSpan" style={{display:`block`}} > {error } </span> : 
                <span className="errorSpan" > {error} </span> }
                <button onClick={registerHandler} disabled= {loading}>Sign Up</button>
            </form>
            </div>
            <div className="form-container sign-in-container">
            <form action="#">
                <h1>Sign in</h1>
                {/* <div className="social-container">
                <a href="#" className="social">
                    <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social">
                    <i className="fab fa-google-plus-g" />
                </a>
                <a href="#" className="social">
                    <i className="fab fa-linkedin-in" />
                </a>
                </div> */}
                {/* <span>or use your account</span> */}
                <input type="email" name="email" placeholder="Email" onChange={changeHandler} />
                <input type="password" name="password" placeholder="Password" onChange={changeHandler} />
                {/* <a href="#">Forgot your password?</a> */}
                {error ? 
                <span className="errorSpan" style={{display:`block`}} > {error } </span> : 
                <span className="errorSpan" > {error} </span> }
                <button onClick={loginHandler} disabled= {loading}>Sign In</button>
            </form>
            </div>
            <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us <br/>  please login with your personal info</p>
                <button className="ghost" id="signIn" onClick={signInButton}>
                    Sign In
                </button>
                </div>
                <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details <br/> and start journey with us</p>
                <button className="ghost" id="signUp" onClick={signUpButton}>
                    Sign Up
                </button>
                </div>
            </div>
            </div>
        </div>
    </div>
</>

    )
}