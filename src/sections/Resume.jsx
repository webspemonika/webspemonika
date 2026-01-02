import React from 'react';
import ResumeLayout from '../utils/ResumeLayout';
import { FaAward } from 'react-icons/fa6';

const Resume = () => {


    const eductions = [
        {
            id: 1,
            time: "2022-present",
            title: "frontend development",
            institute: "creative it institute(chattogram) "
        },
        {
            id: 2,
            time: "2022-present",
            title: "backend development",
            institute: "creative it institute(chattogram) "
        },
        {
            id: 3,
            time: "2022-present",
            title: "backend development",
            institute: "creative it institute(chattogram) "
        },
        {
            id: 4,
            time: "2022-present",
            title: "backend development",
            institute: "creative it institute(chattogram) "
        },
    ];
    const experience = [
        {
            id: 1,
            time: "2022-present",
            title: "frontend development",
            institute: "creative it institute(chattogram) "
        },
        {
            id: 2,
            time: "2022-present",
            title: "backend development",
            institute: "creative it institute(chattogram) "
        },
        {
            id: 3,
            time: "2022-present",
            title: "backend development",
            institute: "creative it institute(chattogram) "
        },
        {
            id: 4,
            time: "2022-present",
            title: "backend development",
            institute: "creative it institute(chattogram) "
        },
    ]
    return (
        <section id="resume" className=" py-8 lg:py-10 ">
            <div className="container">
                <div className="mobile-padding grid grid-cols-1 lg:grid-cols-2  gap-5 lg:gap-12.5">
                    {/* left content start..... */}
                    <div className="">

                        <ResumeLayout
                            heading={"my experience"}
                            headingIcon={<FaAward className=' size-6 lg:size-9 ' />}
                            resume={eductions} />
                    </div>
                    {/* left content end..... */}
                    {/* right content start ..... */}
                    <div className="">

                        <ResumeLayout
                            heading={"my education"}
                            headingIcon={<FaAward className=' size-6 lg:size-9 ' />}
                            resume={experience} />
                    </div>
                    {/* right content end ..... */}
                </div>
            </div>
        </section>
    );
};

export default Resume;