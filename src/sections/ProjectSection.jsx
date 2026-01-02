import React from 'react';
import PortfolioLayout from '../utils/PortfolioLayout';

const ProjectSection = () => {
    return (
    <section id="project" className=" py-5 lg:py-10 ">
        <div className="container">
            {/* header start... */}
            <div className="mb-5 lg:mb-12.5 text-center  ">
                <h6 className="text-base text-[#ff014f] font-medium font-rubik leading-[100%] tracking-widest capitalize "> latest projects  </h6>
                <h2 className=" text-[26px] lg:text-[48px] text-[#ffffff] font-bold font-rajdhani leading-[130%] my-2.5 capitalize">  Transforming Ideas into Exceptional  </h2>
                <p className="w-full lg:w-[47%] mx-auto  text-xs lg:text-base text-[#9f9f9f] font-normal font-rubik leading-[150%] normal-case ">Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational  </p>
            </div>
            {/* header end... */}
            <div className="mobile-padding grid grid-cols-1 lg:grid-cols-3 gap-1">
    <PortfolioLayout
        image="/images/portfolio/eleanor-pena.png"
        category="Web Design"
        title="Modern Portfolio Website"
        link="https://sayemhossain.com/"
    />
  

            </div>
        </div>
    </section>
    );
};

export default ProjectSection;