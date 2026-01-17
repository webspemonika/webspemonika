import React from 'react';

const ProjectFeatureLayout = ({ features, description, heading }) => {

    return (
        <div className="">
            <div className=" ">
                <h2 className="text-2xl lg:text-[40px] text-white font-normal font-rajdhani leading-[120%] pb-3 border-b border-[#ff014f] "> {heading} </h2>
                <p className="base-text-gray my-3 lg:mt-1.5 lg:mb-10 "> {description} </p>
            </div>
            <div className="space-y-5 lg:space-y-10 ">
                {features.map((feature) => (
                    <div className=" flex gap-2 lg:gap-5 items-center" key={feature.id}>
                        <span className="size-10 lg:size-15 border-3 border-[#ff014f]  rounded-full  shrink-0 inline-flex justify-center items-center text-lg lg:text-[24px] text-white font-semibold font-poppins leading-[120%]  "> {feature.number} </span>
                        <div className="">
                            <h6 className="text-lg lg:text-[25px] text-white font-semibold font-rajdhani leading-[120%]  capitalize">{feature.feature} </h6>
                            <p className="text-xs lg:text-base text-[#9f9f9f] font-normal font-rajdhani leading-[150%]">{feature.description} </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectFeatureLayout;