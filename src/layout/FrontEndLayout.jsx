import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../utils/Preloader';
import CustomCursor from '../utils/CustomCursor';
import ScrollToTop from '../utils/ScrollToTop';
import { useLocation } from 'react-router';

const FrontEndLayout = () => {
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const isHomePage = location.pathname === '/';


  // Preloader effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);


  // Preloader দেখান
  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      <ScrollToTop />
      {/* <CustomCursor /> */}

      <Header />
      <main className={`${isHomePage? "pt-0 ": "pt-20" }`}>
        {/* all routes */}
        <Outlet/>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default FrontEndLayout;