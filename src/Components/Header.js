import React from 'react';
import Logo from '../Utils/Logo.png'

const Header = () => {
  return (
    <div className='px-10 py-6 w-screen absolute z-10 bg-gradient-to-b from-black '>
      <img src={Logo} alt="Logo" className='w-[12rem]'/>
    </div>
  )
}

export default Header;
