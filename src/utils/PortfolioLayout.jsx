import React from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const PortfolioLayout = ({ image, category, title, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-[20px]">

      {/* Clickable wrapper */}
      <Link to={link} className="block relative">

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 opacity-0
                     bg-gradient-to-b
                     from-[#ff014f]
                     via-[#ff014f]/80
                     to-black
                     transition-opacity duration-300
                     group-hover:opacity-85"
        />

        {/* Text Content */}
        <div
          className="absolute bottom-6 left-6 right-6
                     flex items-center justify-between
                     translate-y-6 opacity-0
                     transition-all duration-300
                     group-hover:translate-y-0
                     group-hover:opacity-100
                     z-10"
        >
          <div>
            <p className="mb-2 text-base text-white font-rajdhani">
              {category}
            </p>
            <h3 className="text-xl text-white font-rubik font-semibold leading-tight">
              {title}
            </h3>
          </div>

          {/* Arrow Icon */}
    
        </div>

      </Link>
    </div>
  );
};

export default PortfolioLayout;
