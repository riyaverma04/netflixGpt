
import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUser from './components/SignUser'
import Body from './components/Body'
import Header from './components/Header'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from './utils/userSlice'

function App() {
  const dispatch = useDispatch();
 
  const appRoute = createBrowserRouter([{
    path: "/",
    element: <SignUser/>


    },
   {
    path: "/browser",
    element: <Body/>
   }


])

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
   
    // ...
  } else {
    // User is signed out
    // ...
    dispatch(removeUser());
   

  }
});

},[])

  return (
   <>
   <RouterProvider router={appRoute}>
    
   </RouterProvider>
   </>
  )
}

export default App
