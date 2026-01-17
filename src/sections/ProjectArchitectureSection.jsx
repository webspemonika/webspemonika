import React from 'react';

const ProjectArchitectureSection = () => {
    const diagrams= [
        {
            id: 1,
            icon: "",
            heading: "next js"

        },
              {
            id: 1,
            icon: "",
            heading: "taliwind css"

        },
              {
            id: 1,
            icon: "",
            heading: "database"

        }
    ]
    return (
        <section className="py-5">
            <div className="container">
                <div className="mobile-padding">
                    <h2 className="text-lg lg:text-3xl text-[#ff014f] font-medium font-poppins leading-[120%] tracking-wider uppercase   "> single vendor project architecture </h2>
                    <div className="flex gap-10">
                       {diagrams.map((diagram)=>{
                        return(
                             <div className="">
                            <p className="h-50 w-50 inline-flex justify-center items-center border border-white text-xl text-white font-rubik font-semibold "> {diagram.heading}</p>
                        </div>
                        )
                       })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectArchitectureSection;