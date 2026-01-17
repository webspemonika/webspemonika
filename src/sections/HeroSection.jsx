import React from 'react';
import SocialLink from './../utils/SocialLink';
import { FaArrowLeftLong, FaArrowRightLong, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { BsGithub } from 'react-icons/bs';
import { TfiLinkedin } from 'react-icons/tfi';

const HeroSection = () => {
    return (
        <>

            <section id="hero" className=" relative bg-[url(/bg-images/nav-hero-bg.jpg)] bg-no-repeat bg-cover bg-center  pt-40 lg:pb-0 ">
                <div className="container">
                    <div className="mobile-padding grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-20 justify-between items-center   ">
                        {/* left content start... */}
                        <div className="lg:col-span-2 w-full lg:w-[80%] order-2 lg:order-1  ">
                            <p className="text-base lg:text-[28px] text-white font-bold font-rubik leading-9.5 uppercase ">hello</p>
                            <h5 className=" text-[32px] lg:text-[50px] text-white font-semibold font-rajdhani leading-[] capitalize my-1 lg:my-4 ">i'm monika akther </h5>
                            <p className="text-[32px] lg:text-[50px] text-[#ff014f] font-normal font-rubik leading-8.5 capitalize "> react developer </p>
                            <p className=" text-base lg:text-lg text-[#9f9f9f] font-normal font-rubik leading-[160%] normal-case my-4 "> I'm a Laravel Full-Stack Developer and React Specialist. With expertise in both front-end and back-end development, I create high-quality solutions that turn ideas into reality. I don’t just build high-performance Web Applications — I help build high-performance Businesses. Let’s build something remarkable together</p>
                            <div className="mb-7">
                                <p className="base-text-gray mb-2.5" > find on me </p>
                                <div className="flex gap-3">
                                    <SocialLink
                                        icon={<FaFacebookF />}
                                        href={'https://www.facebook.com/profile.php?id=61579140788663'}
                                    />
                                    <SocialLink
                                        icon={<FaInstagram />}
                                        href={''}
                                    />
                                    <SocialLink
                                        icon={<BsGithub />}
                                        href={'https://github.com/webspemonika'}
                                    />
                                    <SocialLink
                                        icon={<TfiLinkedin />}
                                        href={''}
                                    />
                                </div>
                            </div>
                            {/* <button type="button"></button> */}
                            <a
                                href="/pdf/sayem.pdf" download={"monika.pdf"}
                                className=" arrow-btn text-base text-white font-medium font-rubik capitalize
                        inline-block  px-6 py-3  rounded-lg  bg-[#ff014f] "
                            >



                                <span className={`arrow left `}><FaArrowLeftLong /></span>
                                <span className={`text `} > download cv</span>
                                <span className={`arrow right `} ><FaArrowRightLong /></span>



                            </a>
                        </div>
                        {/* left content end... */}

                        {/* right content start... */}
                        <div className="lg:col-span-1 order-1 lg:order-2 ">
                            <img
                                src="/images/hero-img.png"
                                alt="hero-img"
                                className='w-full h-[90vh] lg:h-full  object-cover rounded-lg'
                            />
                        </div>
                        {/* right content end... */}

                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;