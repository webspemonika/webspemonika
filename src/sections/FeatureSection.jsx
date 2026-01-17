import React from 'react';

const FeatureSection = () => {
    const features = [
        {
            id: 1,
            icon: "/icons/features/fast-performance.png",
            title: "Fast Performance",
            description: "Optimized for a smaller build size, faster dev compilation anddozens of other improvements."

        },
        {
            id: 2,
            icon: "/icons/features/perfect-responsive.png",
            title: " Perfect Responsive",
            description: "Our Template is full Perfect for all device. You can visit our template all device easily. "

        },
        {
            id: 3,
            icon: "/icons/features/support.png",
            title: "Fast & Friendly Support",
            description: "We are provide 24 hours support for all clients.You can purchase without hesitation."

        }
        // , 
        // {
        //     id: 4,
        //     icon: "/public/icons/features/perfect-responsive.png",
        //     title: "Fast Performance",
        //     description: "Optimized for a smaller build size, faster dev compilation anddozens of other improvements."

        // }


    ]
    return (
        <section className="bg-black py-5 lg:py-10">
            <div className="container">
                <div className="mobile-padding grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-7.5  ">
                    {features.map((feature, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col justify-center items-center text-center
                             group cursor-pointer p-10 lg:px-15 lg:py-12.5 
                             border border-[#702123] rounded-lg bg-[#100609]  bg-clip-padding [background:linear-gradient(#100609,#100609)_padding-box,linear-gradient(to_bottom,#702123,#371114)_border-box]"
                            >
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className='size-13.75 object-cover '

                                />
                                <h6 className="text-base lg:text-xl text-white font-bold font-rajdhani capitalize my-2 lg:my-5  "> {feature.title} </h6>
                                <p className="text-sm lg:text-base text-white-50 font-normal font-rubik leading-5 lg:leading-7 normal-case "> {feature.description} </p>

                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;