import React from 'react';
import { Link } from 'react-router';

const ResumeLayout = ({ resume, heading, headingIcon }) => {
    return (

        <Link to="/" className="group cursor-pointer block">
            {/* heading start... */}
            <div className="flex gap-4 lg:gap-7.5 items-center mb-5 lg:mb-12.5">
                <span className="text-[#ff014f]">{headingIcon}</span>
                <h3 className="text-2xl lg:text-[36px] text-white font-bold font-rubik leading-[120%] capitalize">
                    {heading}
                </h3>
            </div>
            {/* heading end.... */}

            {resume?.map((resume) => {
                return (
                    // single resume container start.....
                    <div
                        key={resume.id}
                        title='view certificate'
                        className="relative lg:py-7.5 lg:px-5 p-5 mb-5 rounded-[20px] bg-[#141414] overflow-hidden z-10
                           after:content-[''] after:absolute after:bottom-[-313px] after:right-[-407px] 
                           after:w-[474px] after:h-[474px] after:rounded-full after:blur-[227px] 
                           after:opacity-0 after:pointer-events-none after:transition-all after:duration-800 
                           hover:after:bg-[#ff014f] hover:after:opacity-100"
                    >
                        <div className="flex items-center gap-2 relative z-20">
                            <span className=" w-1 h-1 inline-block rounded-full
                            border-5 border-[#ff014f]"
                            >
                            </span>
                            <span className="text-sm lg:text-xl text-[#ff014f] font-normal font-rajdhani leading-[120%] capitalize">{resume.time}</span>
                        </div>

                        <h4 className="relative z-20 my-2 text-lg lg:text-[25px] text-white font-semibold font-rajdhani leading-[120%] capitalize">
                            {resume.title}
                        </h4>
                        <p className="relative z-20 base-text-gray">
                            {resume.institute}
                        </p>
                    </div>
                    // single resume container end.....
                )
            })}
        </Link>
    );
};

export default ResumeLayout;