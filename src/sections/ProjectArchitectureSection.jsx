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
                    <div className="grid grid-cols-4 gap-1">
                       {diagrams.map((diagram)=>{
                        return(
                             <div className="">
                            <p className="h-5 w-5 inline-flex justify-center items-center border border-white text-xl text-white font-rubik font-semibold "> {diagram.heading}</p>
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