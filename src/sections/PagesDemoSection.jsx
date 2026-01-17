import React, { useState } from 'react';

const PagesDemoSection = () => {
    const [isHovered, setIsHovered] = useState(false);

    const pages = [
        { id: 1, title: 'Home Page', image: '/images/projects/home-page.jpg' },
        { id: 2, title: 'About Page', image: '/images/projects/home-page.jpg' },
        { id: 3, title: 'Services Page', image: '/images/projects/home-page.jpg' },
        { id: 4, title: 'Contact Page', image: '/images/projects/home-page.jpg' },
    ];

    return (
        <section className="py-5 lg:py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                    {pages.map((page) => (
                        <div key={page.id} className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                            <div
                                onMouseEnter={() => setIsHovered(page.id)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="relative overflow-hidden"
                            >
                                <a href="#" className="block relative ">
                                    <div className="w-full h-80 overflow-hidden bg-gray-100 relative">
                                        <img
                                            src={page.image}
                                            alt={page.title}
                                            className={`w-full h-auto min-h-full object-cover transition-transform duration-2000 ease-linear
                                                 ${isHovered === page.id ? '-translate-y-1/3' : 'translate-y-0'}`}
                                        />
                                    </div>
                                    
                                    <div className={`absolute left-1/2 -translate-x-1/2  px-8 py-3 rounded-full bg-[#ff014f] 
                                    text-base  text-white font-semibold font-rubik z-10 transition-all duration-500
                                     ${    isHovered === page.id ? 'opacity-100 bottom-3' : 'opacity-0 bottom-0'}`}>
                                        View demo
                                    </div>
                                </a>
                                
                                <div className="p-5 text-center">
                                    <h6 className="text-xl text-gray-800 mb-2 font-semibold">{page.title}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PagesDemoSection;