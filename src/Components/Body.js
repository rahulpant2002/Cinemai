import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { addUser, removeUser } from '../Utils/ReduxStore/userSlice';
import { useDispatch } from 'react-redux';

const Body = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL:photoURL}));
            } 
            else {
                dispatch(removeUser());
            }
        });
    }, []);

  const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <Login/>
    },
    {
        path : '/browse',
        element : <Browse/>
    }
  ]);
  
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;
