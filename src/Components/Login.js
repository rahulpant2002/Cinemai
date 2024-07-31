import React, { useRef, useState } from 'react'
import Header from './Header'
import BgImg from '../Utils/BgImg.jpg'
import validateForm from '../Utils/validate'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Utils/firebase';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    // const nameRef = useRef(null);
    // const emailRef = useRef(null);
    // const mobRef = useRef(null);

    const changeToSignUp = ()=>{
        setIsSignInForm(!isSignInForm);
    }

    const handleOnClick = ()=>{
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // const name = nameRef.current.value;
        // const email = emailRef.current.value;
        // const mob = mobRef.current.value;

        const errorMsg = validateForm(email, password);
        setErrorMsg(errorMsg);

        if(errorMsg) return;

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg("Email Id Already Exists...");
            });
        }

        else{
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg("Invalid Credentials...");
            });
        }
    }

  return (
    <div>
      <Header />

      <div className='absolute '>
        <img src={BgImg} alt="bgImg" />
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className='w-[30%] absolute right-0 left-0 mx-[auto] my-40 bg-black bg-opacity-75 text-white text-center rounded-md'>
            <p className='font-bold text-3xl my-8'>{isSignInForm ? "Sign In" : "Sign Up"}</p>
            {
                !isSignInForm && <input type='text' placeholder='Enter Your Name' className='p-2 my-2 rounded-md w-[60%] bg-gray-700'></input>
            }
            {/* {
                !isSignInForm && <input type='tel' placeholder='Mobile Number' className='p-2 my-2 rounded-md w-[60%] bg-gray-700'></input>
            } */}
            {/* {
                !isSignInForm && <input type='email' placeholder='Email Address' className='p-2 my-2 rounded-md w-[60%] bg-gray-700'></input>
            } */}
            
            <input ref={emailRef} type="text" placeholder='Email' className='p-2 my-2 rounded-md w-[60%] bg-gray-700'/>
            
            <input ref={passwordRef} type="password" placeholder='Password' className='p-2 my-2 rounded-md w-[60%] bg-gray-700'/><br />
        
            <p className='text-red-600 font-bold py-2 text-lg'>{errorMsg}</p> 

            {/* {
                !isSignInForm && <p className=''>Password should contain minimum eight characters, one uppercase letter, one lowercase letter, one number and one special character</p>
            } */}

            <button onClick={handleOnClick} className='bg-red-600 p-3 my-5 rounded-md w-[60%] font-bold'>{isSignInForm ? "Sign In" : "Sign Up"} </button> 
            
            <div className='mb-8'>
                <span className='opacity-75'>{isSignInForm ? "New to CINEMAI ?" : "Already have an Account ?"}</span>
                <span className='font-bold cursor-pointer' onClick={changeToSignUp}> {isSignInForm ? "Sign Up now." : "Sign In now."}</span>
            </div>
      </form>

    </div>
  )
}

export default Login
