import React from 'react';
import { GoBeaker, GoCalendar, GoFile, GoHome } from "react-icons/go"
import { BiUser } from 'react-icons/bi';

import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 1g:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1
        rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center 
        text-2x1 text-white/50'>
          <Link
            to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center'>
            <GoHome />
          </Link>
          <Link
            to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center'>
            <BiUser />
          </Link>
          <Link
            to='services'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center'>
            <GoFile />
          </Link>
          <Link
            to='work'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center'>
            <GoBeaker />
          </Link>
          <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center'>
            <GoCalendar />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
