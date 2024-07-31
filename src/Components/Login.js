import React, { useState } from 'react'
import Header from './Header'
import BgImg from '../Utils/BgImg.jpg'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const changeToSignUp = ()=>{
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
      <Header />

      <div className='absolute '>
        <img src={BgImg} alt="bgImg" />
      </div>

      <form className='w-[30%] absolute right-0 left-0 mx-[auto] my-40 bg-black bg-opacity-75 text-white text-center rounded-md'>
            <p className='font-bold text-3xl my-8'>{isSignInForm ? "Sign In" : "Sign Up"}</p>
            {
                !isSignInForm && <input type='text' placeholder='Enter Your Name' className='p-2 my-2 rounded-md w-[60%] bg-gray-700'></input>
            }
            {
                !isSignInForm && <input type='tel' placeholder='Mobile Number' className='p-2 my-2 rounded-md w-[60%] bg-gray-700'></input>
            }
            {
                !isSignInForm && <input type='email' placeholder='Email Address' className='p-2 my-2 rounded-md w-[60%] bg-gray-700'></input>
            }
            {
                isSignInForm && <input type="text" placeholder='Email or Mobile Number' className='p-2 my-2 rounded-md w-[60%] bg-gray-700'/>
            } 
            
            <input type="password" placeholder='Password' className='p-2 my-2 rounded-md w-[60%] bg-gray-700'/> <br />
            <button className='bg-red-600 p-3 my-5 rounded-md w-[60%] font-bold'>{isSignInForm ? "Sign In" : "Sign Up"} </button> 
            
            <div className='mb-8'>
                <span className='opacity-75'>{isSignInForm ? "New to CINEMAI ?" : "Already have an Account ?"}</span>
                <span className='font-bold cursor-pointer' onClick={changeToSignUp}> {isSignInForm ? "Sign Up now." : "Sign In now."}</span>
            </div>
      </form>

    </div>
  )
}

export default Login
