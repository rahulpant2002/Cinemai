import React from 'react';
import Logo from '../Utils/Logo.png'

import { auth } from '../Utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  const clickSignOut = ()=>{
    signOut(auth).then(() => {
      navigate('/');
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
            <p className='font-bold'>{user.displayName}</p>
          </div>
          <button onClick={clickSignOut} className='font-bold text-white hover:text-orange-500 mb-4'>Sign Out</button>
        </div>)
      }
    </div>
  )
}

export default Header;
