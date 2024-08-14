import React, { useEffect, useRef } from 'react';
import Logo from '../Utils/Logo.png'

import { auth } from '../Utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/ReduxStore/userSlice';
import {toggleSmartSearch} from '../Utils/ReduxStore/smartSearchSlice';
import { supported_languages } from '../Utils/constant';
import { chooseLang } from '../Utils/ReduxStore/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store)=>store?.user);
  const isSmartSearch = useSelector((store)=>store.smartSearch?.isSmartSearch);
  const showTrailer = useSelector((store)=>store?.movies?.showTrailer)
  
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

  const clickSignOut = ()=>{
    signOut(auth).then(() => {
    })
    .catch((error) => {
      navigate('/error');
    });
  }

  const handleSmartSearch = ()=>{
    dispatch(toggleSmartSearch());
  }

  const handleLangChange = (e)=>{
    dispatch(chooseLang(e.target.value));
  }

  return (
    <div className='px-2 py-1 w-screen absolute z-10 bg-gradient-to-b from-black flex flex-col items-center md:justify-between md:flex-row md:px-10 md:py-6'>
      <img src={Logo} alt="Logo" className='w-[8rem] md:w-[12rem]'/>

      {
        user && (<div className='flex md:gap-2 pt-5 md:pt-0 items-center justify-between '>

          {isSmartSearch && <select className='bg-black text-white p-1 mx-2 mb-2 rounded-md md:p-2 md:mx-4 md:mb-4 md:rounded-lg' onChange={handleLangChange}>
            {supported_languages.map((lang)=> <option key={lang.id} value={lang.id}>{lang.name}</option>)}
          </select>}

          {!showTrailer && <button onClick={handleSmartSearch} className='text-white bg-violet-700 p-1 mx-2 mb-2 rounded-md md:p-2 md:mx-4 md:mb-4 md:rounded-lg'>{!isSmartSearch ? "Smart Search" : "Home Page"}</button>}

          <div className='flex flex-col justify-center items-center'>
            <img src={user?.photoURL} alt="userIcon" className='w-10 h-10 mx-2' />
            <p className='font-bold text-white'>{user?.displayName}</p>
          </div>

          <button onClick={clickSignOut} className='font-bold text-white hover:text-red-500 mb-2 md:mb-4'>Sign Out</button>
        </div>)
      }
    </div>
  )
}

export default Header;