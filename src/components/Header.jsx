import React, { useEffect, useState } from 'react';
import { CgMenuLeftAlt, CgMenuRightAlt } from 'react-icons/cg';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { HashLink } from 'react-router-hash-link';

const Header = () => {


  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
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
          <ul className='text-black dark:text-white hidden lg:flex gap-10'>
            <li> <HashLink smooth className="nav-link" to="#hero"> home </HashLink> </li>
            <li> <HashLink smooth className="nav-link" to="#resume"> resume </HashLink> </li>
            <li> <HashLink smooth className="nav-link" to="#skill"> skill </HashLink> </li>
            <li> <HashLink smooth className="nav-link" to="#project"> project </HashLink> </li>
            <li> <HashLink smooth className="nav-link" to="#testimonial"> testimonial </HashLink> </li>
            <li> <HashLink smooth className="nav-link" to="#contact"> contact </HashLink> </li>
          </ul>

          {/* mobile menu... */}
          <button className=" lg:hidden inline-flex menu-bar  ">
            <span className="default-icon " ><CgMenuRightAlt className='' /> </span>
            <span className="hover-icon   " > <HiOutlineMenu className='' /></span>
          </button>
          {/* 2.3 dark mode and light mode  */}
          <div className="inline-flex items-center gap-2 p-1 rounded-full border border-[#ff014f] ">
            {/* Darkmode  Button */}
            <button
              onClick={() => setDarkMode(true)}
              className={`p-2 rounded-full transition-all cursor-pointer
          ${darkMode ? "bg-[#ff014f] text-white" : " dark:text-gray-700"}`}
            >
              <MdOutlineDarkMode size={18} />
            </button>
            {/* Lightmode  Button */}
            <button
              onClick={() => setDarkMode(false)}
              className={`p-2 rounded-full transition-all cursor-pointer
          ${!darkMode ? "bg-[#ff014f] text-white " : " dark:text-gray-700"}`}
            >
              <MdOutlineLightMode size={18} />
            </button>


          </div>
          {/* right content end.... */}

        </div>
      </div>
    </nav>
  );
};

export default Header;