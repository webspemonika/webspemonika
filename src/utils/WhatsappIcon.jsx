
import React from "react"
import { SiWhatsapp } from "react-icons/si";
const WhatsappIcon = ({ moveUp }) => {
  return (
    <a
      href="https://wa.me/8801864162004"
      target="_blank"
      rel="noreferrer"
      className={`
        fixed bottom-6 right-3 lg:right-6 z-40 cursor-pointer
        inline-flex items-center justify-center
        size-10 lg:size-12 rounded-full
        bg-[#ff014f] 
        transition-all duration-300
        ${moveUp ? "bottom-18 lg:bottom-21" : "bottom-6"}
      `}
    >
      <SiWhatsapp className="text-base text-white"/>
    </a>
  );
};

export default WhatsappIcon;
