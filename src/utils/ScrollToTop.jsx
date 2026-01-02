import { useEffect, useState } from "react";
import { GoArrowUp } from "react-icons/go";
import WhatsappIcon from "./WhatsappIcon";
import { HiOutlineArrowUp } from "react-icons/hi";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
   const scrollHandler = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setShowButton(Math.min(100, Math.max(0, p)));
    };
    useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    // onScroll();
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const isVisible = showButton > 4;

  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTopHandler}
        className={`
          fixed bottom-4 right-3 lg:right-6 z-50 cursor-pointer inline-flex items-center justify-center size-10 lg:size-12 rounded-full bg-[#ff014f]
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}
        `}
      >
        {/* <GoArrowUp" /> */}
        <HiOutlineArrowUp  className="text-base lg:text-xl  text-white"  />
      </button>

      {/* WhatsApp Icon */}
      <WhatsappIcon moveUp={isVisible} />
    </>
  );
};

export default ScrollToTop;
