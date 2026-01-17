import React, { useEffect, useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scroll, setScroll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  // Scroll detection effect......
  const scrollHandler = () => {
    if (window.scrollY > 60) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);
  // dark and light mode effect .............
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  // mobile menu ...
  const handleMenuClose = () => {
    setMobileMenu(false);
  };
  return (
    // fixed position dila perfectly kaj korcha. but i want to sticky
    <header className={` py-5 w-full fixed top-0 left-0 z-1000 transition-all duration-700 
        ${scroll ? 'bg-white fixed dark:bg-white/10 backdrop-blur-xl  shadow-xl' : ''}`
    }>
      <nav
        className={` w-full`}
      >
        <div className="container">
          <div className="flex justify-between items-center lg:px-0 px-3">
            {/* left content start.......... */}
            {/* logo.. */}
            <Link
              to="/">
              <img
                src="/logos/nav-logo.png"
                alt="nav-logo"
              />
            </Link>
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
            <button onClick={() => setMobileMenu(true)}
              className="lg:hidden inline-flex menu-bar">
              <span className="default-icon"><CgMenuRightAlt /></span>
              <span className="hover-icon"><HiOutlineMenu /></span>
            </button>
            {/* mobile sidebar start.... */}
            {/*1. sidebar overlay  */}
            <div
              className={`fixed inset-0 bg-black/70 h-screen  z-110 lg:hidden transition-all duration-1000 ease-in-out 
                ${mobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'  }`
              }
              onClick={handleMenuClose}
            >

              {/* 2.sidebar container .... */}
              <div
                className={`  fixed top-0 left-0 h-screen w-[70vw] bg-white dark:bg-black z-120
                transform transition-all duration-1000 ease-in-out  
                ${mobileMenu ? 'translate-x-0 opacity-100 ' : '-translate-x-full opacity-0 '}
              }`}
              >
                {/* Sidebar Header */}
                <div className="flex justify-between items-center p-5   border-b border-gray-200 dark:border-gray-700">
                  <img
                    src="/logos/nav-logo.png"
                    alt="nav-logo"
                    className="h-8"
                  />
                  <button
                    onClick={handleMenuClose}
                    className="text-black dark:text-white text-3xl cursor-pointer "
                  >
                    <IoClose />
                  </button>
                </div>
                {/* mobile-sidebar content start */}
               <div className="px-2 py-3">
                 <ul className='flex flex-col  divide-y divide-white/20'>
                  <li> <HashLink smooth className="text-white/50 uppercase py-2 inline-block" to="#hero"> home </HashLink> </li>
                  <li> <HashLink smooth className="text-white/50 uppercase py-2 inline-block" to="#resume"> resume </HashLink> </li>
                  <li> <HashLink smooth className="text-white/50 uppercase py-2 inline-block" to="#skill"> skill </HashLink> </li>
                  <li> <HashLink smooth className="text-white/50 uppercase py-2 inline-block" to="#project"> project </HashLink> </li>
                  <li> <HashLink smooth className="text-white/50 uppercase py-2 inline-block" to="#testimonial"> testimonial </HashLink> </li>
                  <li> <HashLink smooth className="text-white/50 uppercase py-2 inline-block" to="#contact"> contact </HashLink> </li>
                </ul>
               </div>
                {/* mobile-sidebar content end */}
              </div>
            </div>
            {/* mobile sidebar end.... */}

            {/* dark mode and light mode */}
            <div className="hidden lg:inline-flex items-center gap-2 p-1 rounded-full border border-[#ff014f]">
              {/* Darkmode Button */}
              <button
                onClick={() => setDarkMode(true)}
                className={`p-2 rounded-full transition-all cursor-pointer ${darkMode ? "bg-[#ff014f] text-white" : "dark:text-gray-700"
                  }`}
              >
                <MdOutlineDarkMode size={18} />
              </button>
              {/* Lightmode Button */}
              <button
                onClick={() => setDarkMode(false)}
                className={`p-2 rounded-full transition-all cursor-pointer ${!darkMode ? "bg-[#ff014f] text-white" : "dark:text-gray-700"
                  }`}
              >
                <MdOutlineLightMode size={18} />
              </button>
            </div>
            {/* right content end.... */}
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Header;