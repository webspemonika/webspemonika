import React from 'react';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { HiOutlineMenu } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <nav className="py-5">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* left content start.......... */}
          {/* logo.. */}
          <div className="">
            <img
              src="/logos/nav-logo.png"
              alt="nav-logo"
            />
          </div>
          {/* left content end........ */}
          {/* right content start........ */}
          <ul className='text-white hidden lg:flex gap-10'>
            <li> <HashLink smooth className="text-base text-white font-medium font-rubik  leading-[150%]  capitalize " to="#hero"  > home </HashLink> </li>
            <li> <HashLink smooth className="text-base text-white font-medium font-rubik  leading-[150%]  capitalize " to="#resume"  > resume </HashLink> </li>
            <li> <HashLink smooth className="text-base text-white font-medium font-rubik  leading-[150%]  capitalize " to="#skill"  > skill </HashLink> </li>
            <li> <HashLink smooth className="text-base text-white font-medium font-rubik  leading-[150%]  capitalize " to="#project"  > project </HashLink> </li>
            <li> <HashLink smooth className="text-base text-white font-medium font-rubik  leading-[150%]  capitalize " to="#testimonial"  > testimonial </HashLink> </li>
            <li> <HashLink smooth className="text-base text-white font-medium font-rubik  leading-[150%]  capitalize " to="#contact"  > contact </HashLink> </li>
          </ul>
          {/* mobile menu... */}
          <button className="size-12 rounded-full bg-[#ff014f]  lg:hidden inline-flex justify-center items-center cursor  ">
            <span className="default-icon inline-block hover:hidden" ><CgMenuLeftAlt className='text-3xl text-white '/> </span>
            <span className="hover-icon hidden hover:inline-block" > <HiOutlineMenu className='text-3xl  text-white' /></span>
          </button>
          {/* right content end.... */}
        </div>
      </div>
    </nav>
  );
};

export default Header;