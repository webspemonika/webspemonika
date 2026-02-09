import React, { useEffect, useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import DarkLightMode from '../utils/DarkLightMode';

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCrossIcon, setShowCrossIcon] = useState(false);
  const mouseMoveHandler = (e) => {
    // overlay এর relative position থেকে mouse position বের করুন
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
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

  // mobile menu ...
  const handleMenuClose = () => { setMobileMenu(false) };
  return (
    // fixed position dila perfectly kaj korcha. but i want to sticky
    <header className={` py-5 w-full fixed top-0 left-0 z-1000 transition-all duration-700 
        ${scroll ? '  bg-white/10 backdrop-blur-xl  shadow-xl' : ''}`
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
              onClick={handleMenuClose}
              onMouseMove={mouseMoveHandler}
              onMouseEnter={() => setShowCrossIcon(true)}
              onMouseLeave={() => setShowCrossIcon(false)}
              className={`fixed inset-0 z-110 bg-white/30   lg:hidden 
                           transition-all duration-1000 ease-in-out  
                          ${mobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}  
            >
              {/* Custom Cursor - Cross Icon */}
              {showCrossIcon && (
                <div
                  className="fixed pointer-events-none z-130 transition-opacity duration-200"
                  style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: 'translate(-50%, -50%)' // center করার জন্য
                  }}
                >
                  <span className="  text-white text-[50px] "><IoClose /></span>
                </div>
              )}
            </div>
            {/* 2.sidebar container .... */}
            <div
              className={`fixed top-0 left-0 h-screen w-[70vw] bg-black z-120
                          transform transition-all duration-1500 ease-in-out  
                          ${mobileMenu ? 'translate-x-0 opacity-100 visible  ' : '-translate-x-full opacity-0 invisible '}`}
              onMouseEnter={() => setShowCrossIcon(false)}
            >
            
            </div>

            {/* mobile sidebar end.... */}

            {/* dark mode and light mode */}
          <DarkLightMode/>
            {/* right content end.... */}
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Header;