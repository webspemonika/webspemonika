import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../utils/Preloader';
import CustomCursor from '../utils/CustomCursor';
import ScrollToTop from '../utils/ScrollToTop';
// import FixedWhatsappIcon from '../utils/WhatsappIcon';

const FrontEndLayout = () => {
  const [loading, setLoading] = useState(true);

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
      <CustomCursor />

      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  );
};

export default FrontEndLayout;