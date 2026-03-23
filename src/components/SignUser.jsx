import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import {auth} from "../utils/firebase"
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";



const SignUser = () => {
  const [isSignIn, setSignIn ] = useState(true)
  const [validErrorMessage , setValidErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handlePage=()=>{
    setSignIn(!isSignIn)
   



  }
  const handleButton = ()=>{
    //validate form 
    const validationResult = checkValidData(email.current.value, password.current.value);
    console.log(validationResult)
    if(validationResult !== null){
      setValidErrorMessage(validationResult);
      return;
    }else{
        if(!isSignIn){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value,name.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              // ...


             
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setValidErrorMessage(errorCode +" " + errorMessage)
              // ..
            });
        }else{
          //signin user 
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user)
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setValidErrorMessage(errorCode +" " + errorMessage)
            });
        }
      //form valid successfully

    }

  }
  return (
    <div >
        <Header />
       <div className='w-full h-full relative'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"alt='bg-image'  className='  object-cover'/>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black flex justify-center items-center ">
         <div className='z-100  absolute m-auto w-3/12 h-auto p-6  border-black rounded-lg  py-8  bg-black/70 text-white'>
          <form action="" className='flex flex-col gap-2 ' onSubmit={(e)=> e.preventDefault()}>
            {
              !isSignIn && <>
            <input type="text" placeholder='name'  className='py-2 rounded border-black bg-gray-800 text-white px-2' name="" id="" ref={name} /></>
            }
            
            <input type="text" placeholder='email' className='py-2 mt-5 rounded border-black bg-gray-800 text-white px-2' name="" id=""  ref={email}/>
           
            <input type="password" placeholder='password' className='py-2 mt-5 rounded border-black bg-gray-800 text-white px-2' ref={password} />
            {validErrorMessage && <p className='text-red-700 mt-5'>{validErrorMessage}!!</p>}
            <input type="button" value={isSignIn? "sign in" : "sign up" } className='mt-3 bg-red-600 py-2 rounded-lg   cursor-pointer hover:bg-red-700 font-bold text-lg' onClick={handleButton}/>
            <p className=' text-md mt-3 text-blue-600 cursor-pointer' onClick={handlePage}>{isSignIn ? "do not have any account? create now": "already have an account ? sign in"}</p>
          </form>
        </div></div>
       


       </div>
        
      
    </div>
  )
}

export default SignUser
