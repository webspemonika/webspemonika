import React from 'react';
import SkillLayout from '../utils/SkillLayout';

const SkillsSection = () => {
    const designSkills = [
        {
            id: 1,
            name: 'tailwindcss',
            label: "100%",// number format
        },
        {
            id: 2,
            name: 'bootstrap',
            label: "70%",
        },
        {
            id: 3,
            name: 'javascript',
            label: "75%",
        },
        {
            id: 4,
            name: 'react',
            label: "70%",
        }, {
            id: 5,
            name: 'next.js',
            label: "30%",
        }
        // tailwindcss,Bootstrap,javascript,react ,next.js,
        // php laravel, mysql ,
    ];
    const developmentSkills = [
        {
            id: 1,
            name: 'api development',
            label: "80%",
        },
        {
            id: 2,
            name: 'php',
            label: "80%",
        },
        {
            id: 3,
            name: 'laravel',
            label: "80%",
        },
        {
            id: 4,
            name: 'mysql',
            label: "80%",
        },
        {
            id: 5,
            name: 'dsa',
            label: "80%",
        },

    ]


    return (
        <section id="skill" className=" py-8 lg:py-20">
            <div className="container">
                <div className="  mobile-padding  ">
                    {/* header start if you want skill section's header then use it otherwise ok   */}
                    {/* <div className="">
                        <p className=""> </p>

                    </div> */}
                    {/* header end  */}
                    {/* body start  */}
                    <div className=" grid  grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 ">
                        {/* left content start... */}
                        <div className="w-full">
                            <SkillLayout
                                heading={"design skill"}
                                skills={designSkills}
                            />
                        </div>
                        {/* left content end... */}
                        {/* right content start... */}
                        <div className="w-full">
                            <SkillLayout
                                heading={"development skill"}
                                skills={developmentSkills}
                            />
                        </div>
                        {/* right content end */}
                    </div>
                    {/* body end  */}


                </div>
            </div>
        </section>
    );
};

export default SkillsSection;