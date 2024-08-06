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
    <div className='px-10 py-6 w-screen absolute z-10 bg-gradient-to-b from-black flex justify-between'>
      <img src={Logo} alt="Logo" className='w-[12rem]'/>

      {
        user && (<div className='flex gap-2'>

          {isSmartSearch && <select className='p-2 bg-black mx-4 text-white mb-4 rounded-lg' onChange={handleLangChange}>
            {supported_languages.map((lang)=> <option key={lang.id} value={lang.id}>{lang.name}</option>)}
          </select>}

          <button onClick={handleSmartSearch} className='text-white bg-violet-700 rounded-lg mb-4 px-2'>{!isSmartSearch ? "Smart Search" : "Home Page"}</button>

          <div className='flex flex-col justify-center items-center'>
            <img src={user?.photoURL} alt="userIcon" className='w-10 h-10 mx-2' />
            <p className='font-bold text-white'>{user?.displayName}</p>
          </div>

          <button onClick={clickSignOut} className='font-bold text-white hover:text-red-500 mb-4'>Sign Out</button>
        </div>)
      }
    </div>
  )
}

export default Header;