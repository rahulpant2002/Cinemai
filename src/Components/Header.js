import React, { useEffect } from 'react';
import Logo from '../Utils/Logo.png'

import { auth } from '../Utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/ReduxStore/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL:photoURL}));
                navigate('/browse');
            } 
            else {
                dispatch(removeUser());
                navigate('/');
            }
        });

        return ()=>unsubscribe();
    }, []);

  const user = useSelector((store)=>store.user);
  const clickSignOut = ()=>{
    signOut(auth).then(() => {
    })
    .catch((error) => {
      navigate('/error');
    });
  }

  return (
    <div className='px-10 py-6 w-screen absolute z-10 bg-gradient-to-b from-black flex justify-between'>
      <img src={Logo} alt="Logo" className='w-[12rem]'/>

      {
        user && (<div className='flex gap-2'>
          <div className='text-center'>
            <img src={user?.photoURL} alt="userIcon" className='w-10 h-10 ml-2' />
            <p className='font-bold text-white'>{user?.displayName}</p>
          </div>
          <button onClick={clickSignOut} className='font-bold text-white hover:text-orange-500 mb-4'>Sign Out</button>
        </div>)
      }
    </div>
  )
}

export default Header;