import React from 'react';
import Logo from '../Utils/Logo.png'

const Header = () => {
  return (
    <div className='mx-10 my-6 absolute z-10 bg-gradient-to-b from-black '>
      <img src={Logo} alt="Logo" className='w-[12rem]'/>
    </div>
  )
}

export default Header;
