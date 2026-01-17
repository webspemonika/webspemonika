import React from 'react';
import ResumeLayout from '../utils/ResumeLayout';
import { FaAward } from 'react-icons/fa6';

const Resume = () => {


    const eductions = [
        {
            id: 1,
            time: "1 may- 10 december, 2025",
            title: "frontend development",
            institute: "creative it institute(chattogram) "
        },
        {
            id: 2,
            time: "1 february,2026 - present",
            title: "backend development",
            institute: "creative it institute(chattogram) "
        },
        {
            id: 3,
            time: " 1 february,2026 - present",
            title: "dev ops engineer",
            institute: "creative it institute(chattogram) "
        },

    ];
    const experience = [
        {
            id: 1,
            time: "1 february, 2026",
            title: "cap (career advancement programe)",
            institute: "creative it institute(chattogram) "
        },
        {
            id: 2,
            time: "",
            title: "",
            institute: "creative it institute(chattogram) "
        },
        {
            id: 3,
            time: "",
            title: "",
            institute: "creative it institute(chattogram) "
        },

    ]
    return (
        <section id="resume" className=" py-8 lg:py-10 ">
            <div className="container">
                <div className="mobile-padding">
                    {/* 1.header start. */}
                    <div className="mb-5 lg:mb-12.5 text-center  ">
                        <h6 className="base-text-branding ">   Education & Experience  </h6>
                        <h2 className=" heading-text-48px"> Empowering Creativity through </h2>
                        <p className="w-full lg:w-[47%] mx-auto 
                         text-sm lg:text-base text-[#9f9f9f] font-normal font-rubik leading-[150%] normal-case "
                        >
                            Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational
                        </p>
                    </div>
                    {/* 1.header end. */}
                    {/* 2.grid layout start */}
                    <div className="mobile-padding grid grid-cols-1 lg:grid-cols-2  gap-5 lg:gap-12.5">
                        {/* 2.1left content ..... */}
                        <div className="">

                            <ResumeLayout
                                heading={"my education"}
                                headingIcon={<FaAward className=' size-6 lg:size-9 ' />}
                                resume={eductions} />
                        </div>
                        {/*2.2 right content  ..... */}
                        <div className="">

                            <ResumeLayout
                                heading={"my experience"}
                                headingIcon={<FaAward className=' size-6 lg:size-9 ' />}
                                resume={experience} />
                        </div>
                    </div>
                    {/* 2.grid layout start */}

                </div>

            </div>
        </section>
    );
};

export default Resume;