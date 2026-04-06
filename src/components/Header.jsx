import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { ToggleGptSearch } from '../utils/gptSearchSlice';
import { SUPPORTED_LANGUAGE } from '../utils/constants';
import { changeLanguage } from '../utils/appConfigSlice';


const Header = () => {
  const user = useSelector(store => store.user);
  
   const gptSearchPageview = useSelector(store=> store.gptSearch?.gptSearchContainer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLanguage=(e)=>{
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))

  }
  const handleGptClick=()=>{
    dispatch(ToggleGptSearch());
    
  }
  const handleSignOut =()=>{
    
        signOut(auth).then(() => {
          // Sign-out successful.
          
        }).catch((error) => {
          // An error happened.
        });

  }
  useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user

    const {uid, email, displayName} = user;
    dispatch(addUser({
      userid: uid,
      email:email,
      userName: displayName
    }))
    navigate("/browser")
   
    // ...
  } else {
    // User is signed out
    // ...
    dispatch(removeUser());
    navigate("/")
   

  }
});

},[])
  return (
    <div className='absolute  pt-2 bg-gradient-to-b from-black w-[100%]  h-auto z-40' >
        <div className=' flex flex-col md:flex-row justify-between items-center px-2 md:py-2 md:px-8'>
          <img src={LOGO} alt="logo" srcset=""  className='w-[100px] md:w-[150px]' />


        {
          user && <div className='flex gap-1 md:justify-center items-center md:gap-3'>


                  {
                    gptSearchPageview && (
                      <select name="" id="" className='px-2 py-1 rounded-md  flex justify-center items-center  border-none ' onClick={handleLanguage}>
                        {
                          SUPPORTED_LANGUAGE.map((lang)=>(
                            <option value={lang.identifier} key={lang.identifier}>{lang.name}</option>
                          ))
                        }
                        
                        
                      </select>
                    )
                  }
            
                      <button className=' text-sm px-2 py-1 md:px-5 md:py-2 cursor-pointer flex justify-center items-center text-white bg-red-600 hover:bg-red-700 rounded-lg' onClick={handleGptClick}>GPT Search</button>

          <div className=' flex justify-center items-center text-sm md:text-lg font-bold text-red-600 cursor-pointer' onClick={handleSignOut}>
          logOUt
        </div>
          </div>
        }
        </div>
      
    </div>
  )
}

export default Header
