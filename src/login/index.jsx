import React from 'react'
import Wrapper from './style'
import { useNavigate } from 'react-router'
// import {  Route, Routes } from 'react-router-dom'
// import Signup from '../signup'

const Login = () => {
    const navigate = useNavigate()
    const goToSignup =() => {
        navigate("/signup")
    }
  return (
    <Wrapper>
        <form>
        <h1> Sign in </h1>
        <div>
            <input type = 'email' placeholder ='Email'  />
        </div>
        <div>
            <input type = 'password'  placeholder ='Password' />
        </div>
        <div id="submit">
            <input type = 'submit' value = 'Login' />
        </div>
        <div id='forgot'>Forgot Password</div>
         <div id = 'sign'> 
            <p>Need an account?  </p>
            { <span id="signup-btn" onClick={goToSignup}> Sign Up</span> } 
           
        </div>  
       
        </form>      
    </Wrapper>
  )
}

export default Login
