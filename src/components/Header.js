import React from 'react';
import Logo from '../assets/logo.png';
import CounterBtn from '../components/CounterBtn';

const Header = () => {
  return (
    <header className='border-b py-2'>
      <div className='container mx-auto'>
        <div className='flex justify-around items-center'>
          <a href='#'>
            <img className='h-20' src={Logo} alt='' />
          </a>
          {/* <CounterBtn /> */}

          <button className='btn btn-sm'>Work With Me!</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
