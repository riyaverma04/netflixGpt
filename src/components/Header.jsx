import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    <div className='absolute  pt-2 bg-gradient-to-b from-black w-full  h-auto z-10' >
        <div className='flex justify-between  py-2 px-8'>
          <img src="
https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" srcset=""  className='w-[200px]'/>


        {
          user && <div className=' flex justify-center items-center text-lg font-bold text-red-600 cursor-pointer' onClick={handleSignOut}>
          logOUt
        </div>
        }
        </div>
      
    </div>
  )
}

export default Header
